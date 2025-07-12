# Supabase Storage Setup for Image Uploads

## Overview
This guide helps you set up Supabase storage for image uploads throughout the application, including admin projects page and product images.

## Steps to Set Up Storage

### 1. Create Storage Buckets

#### For Project Images:
1. Go to your Supabase dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **Create a new bucket**
4. Name the bucket `images` (or any of the fallback names: `project-images`, `uploads`, `public`)
5. Make sure **Public bucket** is checked
6. Click **Create bucket**

#### For Product Images:
1. In the same Storage section, click **Create a new bucket**
2. Name the bucket `product-images`
3. Make sure **Public bucket** is checked
4. Click **Create bucket**

### 2. Set Up Storage Policies

You need to set up policies for both buckets. Run these SQL commands in your Supabase SQL editor:

#### For Project Images (existing functionality):
```sql
-- Allow authenticated uploads to project images
CREATE POLICY "Allow authenticated uploads to project images" ON storage.objects
FOR INSERT WITH CHECK (
  auth.role() = 'authenticated' AND 
  bucket_id = 'images'
);

-- Allow public downloads from project images
CREATE POLICY "Allow public downloads from project images" ON storage.objects
FOR SELECT USING (bucket_id = 'images');

-- Allow authenticated updates to project images
CREATE POLICY "Allow authenticated updates to project images" ON storage.objects
FOR UPDATE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'images'
);

-- Allow authenticated deletes from project images
CREATE POLICY "Allow authenticated deletes from project images" ON storage.objects
FOR DELETE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'images'
);
```

#### For Product Images:
```sql
-- Allow authenticated uploads to product images
CREATE POLICY "Allow authenticated uploads to product images" ON storage.objects
FOR INSERT WITH CHECK (
  auth.role() = 'authenticated' AND 
  bucket_id = 'product-images'
);

-- Allow public downloads from product images
CREATE POLICY "Allow public downloads from product images" ON storage.objects
FOR SELECT USING (bucket_id = 'product-images');

-- Allow authenticated updates to product images
CREATE POLICY "Allow authenticated updates to product images" ON storage.objects
FOR UPDATE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'product-images'
);

-- Allow authenticated deletes from product images
CREATE POLICY "Allow authenticated deletes from product images" ON storage.objects
FOR DELETE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'product-images'
);
```

### 3. Alternative: Simple Public Policy (Less Secure)
If you want to allow all operations for public access:

```sql
-- For project images
CREATE POLICY "Public Access to project images" ON storage.objects
FOR ALL USING (bucket_id = 'images');

-- For product images  
CREATE POLICY "Public Access to product images" ON storage.objects
FOR ALL USING (bucket_id = 'product-images');
```

## Testing

### Project Images:
1. After setting up the bucket and policies, try uploading an image in the admin projects page
2. The upload should work without errors
3. Images will be stored in the `project-images/` folder within your bucket

### Product Images:
1. Go to the admin products page (`/admin/products`)
2. Try creating or editing a product with image uploads
3. The upload should work without errors
4. Images will be stored in the `product-images` bucket

## Troubleshooting
- **"Bucket not found" error**: Make sure you've created the storage buckets
- **"Permission denied" error**: Check that your storage policies are correctly set up
- **Upload fails**: Verify your Supabase environment variables are correct
- **Images not displaying**: Check that the bucket is set to public and policies allow SELECT operations

## Environment Variables
Make sure these are set in your `.env.local` file:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Migrating Existing Product Images
If you have existing product images in `/public/images/products/`, you can use the migration script:
```bash
node scripts/migrate-product-images.js
``` 