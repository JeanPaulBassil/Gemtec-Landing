/**
 * Image utilities for product images with fallback logic
 */

/**
 * Get the best available image URL for a product
 * Priority: 1. Database URLs 2. Static images 3. Placeholder
 */
export function getProductImageUrl(product: {
  name: string;
  image_urls: string[];
}, index: number = 0): string | null {
  // First try database URLs
  if (product.image_urls && product.image_urls.length > index) {
    return product.image_urls[index];
  }
  
  // Fallback to static images
  const staticImageUrl = getStaticProductImageUrl(product.name, index);
  if (staticImageUrl) {
    return staticImageUrl;
  }
  
  // No image found
  return null;
}

/**
 * Get all available image URLs for a product (database + static fallbacks)
 */
export function getAllProductImageUrls(product: {
  name: string;
  image_urls: string[];
}): string[] {
  const urls: string[] = [];
  
  // Add database URLs first
  if (product.image_urls && product.image_urls.length > 0) {
    urls.push(...product.image_urls);
  }
  
  // Add static fallbacks if no database images
  if (urls.length === 0) {
    const staticUrls = getStaticProductImageUrls(product.name);
    urls.push(...staticUrls);
  }
  
  return urls;
}

/**
 * Try to find a static image for a product based on naming conventions
 */
function getStaticProductImageUrl(productName: string, index: number = 0): string | null {
  const possiblePaths = generateStaticImagePaths(productName);
  
  // For now, return the first possible path (in a real app, you'd check if file exists)
  // Since we're in a Next.js environment, we can't easily check file existence on client side
  if (possiblePaths.length > index) {
    return possiblePaths[index];
  }
  
  return null;
}

/**
 * Get multiple static image URLs for a product
 */
function getStaticProductImageUrls(productName: string): string[] {
  return generateStaticImagePaths(productName);
}

/**
 * Generate possible static image paths based on product name
 */
function generateStaticImagePaths(productName: string): string[] {
  const cleanName = productName
    .replace(/[^a-zA-Z0-9\s\-()]/g, '')
    .trim();
  
  const variations = [
    // Exact match variations
    cleanName,
    cleanName.replace(/\s+/g, ''),
    cleanName.replace(/\s+/g, '-'),
    cleanName.replace(/\s+/g, '_'),
    cleanName.toUpperCase(),
    cleanName.toLowerCase(),
    
    // Without parentheses
    cleanName.replace(/\([^)]*\)/g, '').trim(),
    cleanName.replace(/\([^)]*\)/g, '').replace(/\s+/g, ''),
    cleanName.replace(/\([^)]*\)/g, '').replace(/\s+/g, '-'),
    
    // Common product naming patterns
    cleanName.replace(/AFS/gi, 'Afs'),
    cleanName.replace(/TPU/gi, 'Tpu'),
    cleanName.replace(/PVC/gi, 'Pvc'),
    cleanName.replace(/ISO/gi, 'Iso'),
  ];
  
  const extensions = ['webp', 'jpg', 'jpeg', 'png'];
  const paths: string[] = [];
  
  for (const variation of variations) {
    for (const ext of extensions) {
      paths.push(`/images/products/flexible-ducts/${variation}.${ext}`);
    }
  }
  
  // Remove duplicates
  return [...new Set(paths)];
}

/**
 * Check if a product has any images available (database or static)
 */
export function hasProductImages(product: {
  name: string;
  image_urls: string[];
}): boolean {
  if (product.image_urls && product.image_urls.length > 0) {
    return true;
  }
  
  // For static images, we can't easily check existence in browser
  // so we assume true if there's a reasonable product name
  return product.name && product.name.trim().length > 0;
}

/**
 * Get the number of available images for a product
 */
export function getProductImageCount(product: {
  name: string;
  image_urls: string[];
}): number {
  if (product.image_urls && product.image_urls.length > 0) {
    return product.image_urls.length;
  }
  
  // For static images, we can't easily count them in browser
  // so we return 1 if there's a reasonable product name, 0 otherwise
  return product.name && product.name.trim().length > 0 ? 1 : 0;
}

/**
 * Enhanced Image component props for product images
 */
export interface ProductImageProps {
  product: {
    name: string;
    image_urls: string[];
  };
  index?: number;
  alt?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * Get optimized image props for Next.js Image component
 */
export function getProductImageProps(props: ProductImageProps) {
  const { product, index = 0, alt, className, fill, width, height, priority } = props;
  const imageUrl = getProductImageUrl(product, index);
  
  return {
    src: imageUrl || '/placeholder.svg',
    alt: alt || `${product.name}${index > 0 ? ` - Image ${index + 1}` : ''}`,
    ...(className && { className }),
    ...(fill && { fill }),
    ...(width && { width }),
    ...(height && { height }),
    ...(priority && { priority }),
  };
} 