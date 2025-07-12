#!/usr/bin/env node

/**
 * Product Image Migration Script
 * 
 * This script migrates existing product images from /public/images/products/ 
 * to Supabase storage and optionally updates the database with the new URLs.
 * 
 * Usage:
 *   node scripts/migrate-product-images.js [--upload-only] [--update-db] [--dry-run]
 * 
 * Options:
 *   --upload-only: Only upload images to storage, don't update database
 *   --update-db: Upload images and update database records
 *   --dry-run: Show what would be done without actually doing it
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const BUCKET_NAME = 'product-images';
const LOCAL_IMAGES_PATH = path.join(process.cwd(), 'public', 'images', 'products');

// Command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const uploadOnly = args.includes('--upload-only');
const updateDb = args.includes('--update-db');

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

/**
 * Get all image files from the local directory
 */
function getLocalImages() {
  const images = [];
  
  if (!fs.existsSync(LOCAL_IMAGES_PATH)) {
    console.log(`❌ Local images directory not found: ${LOCAL_IMAGES_PATH}`);
    return images;
  }

  function scanDirectory(dirPath, basePath = '') {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath, path.join(basePath, item));
      } else if (stat.isFile() && /\.(jpg|jpeg|png|webp|gif)$/i.test(item)) {
        const relativePath = path.join(basePath, item);
        images.push({
          name: item,
          localPath: itemPath,
          relativePath: relativePath,
          size: stat.size
        });
      }
    }
  }
  
  scanDirectory(LOCAL_IMAGES_PATH);
  return images;
}

/**
 * Upload an image to Supabase storage
 */
async function uploadImage(image) {
  try {
    const fileBuffer = fs.readFileSync(image.localPath);
    const fileName = `migrated/${Date.now()}-${image.name}`;
    
    if (isDryRun) {
      console.log(`📁 Would upload: ${image.relativePath} -> ${fileName}`);
      return { success: true, url: `[DRY-RUN] storage/${BUCKET_NAME}/${fileName}` };
    }
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, fileBuffer, {
        cacheControl: '3600',
        upsert: false,
        contentType: `image/${path.extname(image.name).slice(1)}`
      });
    
    if (error) {
      console.error(`❌ Failed to upload ${image.name}:`, error.message);
      return { success: false, error: error.message };
    }
    
    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);
    
    if (publicUrlData?.publicUrl) {
      console.log(`✅ Uploaded: ${image.name} -> ${publicUrlData.publicUrl}`);
      return { success: true, url: publicUrlData.publicUrl };
    } else {
      console.error(`❌ Failed to get public URL for ${image.name}`);
      return { success: false, error: 'Failed to get public URL' };
    }
  } catch (error) {
    console.error(`❌ Error uploading ${image.name}:`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Find products that might match the image
 */
async function findMatchingProducts(imageName) {
  try {
    // Clean the image name for matching
    const cleanName = imageName
      .replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
      .replace(/[^a-zA-Z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
    
    const { data: products, error } = await supabase
      .from('products')
      .select('id, name, image_urls')
      .ilike('name', `%${cleanName.split(' ')[0]}%`);
    
    if (error) {
      console.error('Error finding matching products:', error.message);
      return [];
    }
    
    return products || [];
  } catch (error) {
    console.error('Error in findMatchingProducts:', error.message);
    return [];
  }
}

/**
 * Update product with new image URL
 */
async function updateProductImages(productId, newImageUrl, existingUrls = []) {
  try {
    const updatedUrls = [...existingUrls, newImageUrl];
    
    if (isDryRun) {
      console.log(`📝 Would update product ${productId} with image: ${newImageUrl}`);
      return { success: true };
    }
    
    const { error } = await supabase
      .from('products')
      .update({ image_urls: updatedUrls })
      .eq('id', productId);
    
    if (error) {
      console.error(`❌ Failed to update product ${productId}:`, error.message);
      return { success: false, error: error.message };
    }
    
    console.log(`✅ Updated product ${productId} with new image`);
    return { success: true };
  } catch (error) {
    console.error(`❌ Error updating product ${productId}:`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Main migration function
 */
async function main() {
  console.log('🚀 Starting product image migration...');
  console.log(`📁 Local images path: ${LOCAL_IMAGES_PATH}`);
  console.log(`🗄️  Target bucket: ${BUCKET_NAME}`);
  console.log(`🔧 Mode: ${isDryRun ? 'DRY RUN' : 'LIVE'}`);
  console.log('');
  
  // Validate environment
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('❌ Missing required environment variables:');
    console.error('   NEXT_PUBLIC_SUPABASE_URL');
    console.error('   SUPABASE_SERVICE_ROLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)');
    process.exit(1);
  }
  
  // Get local images
  const localImages = getLocalImages();
  console.log(`📸 Found ${localImages.length} local images`);
  
  if (localImages.length === 0) {
    console.log('🏁 No images to migrate');
    return;
  }
  
  // Upload images
  const uploadResults = [];
  let successCount = 0;
  let failCount = 0;
  
  console.log('\n📤 Uploading images...');
  for (const image of localImages) {
    const result = await uploadImage(image);
    uploadResults.push({ image, result });
    
    if (result.success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Add small delay to avoid rate limiting
    if (!isDryRun) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log(`\n📊 Upload Results: ${successCount} successful, ${failCount} failed`);
  
  // Update database if requested
  if (updateDb && !uploadOnly) {
    console.log('\n📝 Updating database records...');
    let dbUpdateCount = 0;
    
    for (const { image, result } of uploadResults) {
      if (!result.success) continue;
      
      const matchingProducts = await findMatchingProducts(image.name);
      if (matchingProducts.length > 0) {
        console.log(`🔍 Found ${matchingProducts.length} potential matches for ${image.name}`);
        
        // For now, update the first matching product
        // In a real scenario, you might want manual review
        const product = matchingProducts[0];
        const updateResult = await updateProductImages(
          product.id, 
          result.url, 
          product.image_urls || []
        );
        
        if (updateResult.success) {
          dbUpdateCount++;
        }
      } else {
        console.log(`⚠️  No matching products found for ${image.name}`);
      }
      
      // Add delay
      if (!isDryRun) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
    
    console.log(`\n📈 Database Updates: ${dbUpdateCount} products updated`);
  }
  
  console.log('\n✨ Migration completed!');
  
  if (!isDryRun && successCount > 0) {
    console.log('\n📋 Next steps:');
    console.log('1. Verify images are visible in Supabase Storage dashboard');
    console.log('2. Check that products display correctly on your website');
    console.log('3. Consider removing old static images from /public/images/products/');
  }
}

// Run the migration
main().catch(error => {
  console.error('💥 Migration failed:', error);
  process.exit(1);
}); 