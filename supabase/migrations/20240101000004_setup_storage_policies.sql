-- Setup Storage Policies for Image Buckets
-- This migration creates policies for both project images and product images buckets

-- Project Images Bucket Policies (existing functionality)
CREATE POLICY "Allow authenticated uploads to project images" ON storage.objects
FOR INSERT WITH CHECK (
  auth.role() = 'authenticated' AND 
  bucket_id = 'images'
);

CREATE POLICY "Allow public downloads from project images" ON storage.objects
FOR SELECT USING (bucket_id = 'images');

CREATE POLICY "Allow authenticated updates to project images" ON storage.objects
FOR UPDATE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'images'
);

CREATE POLICY "Allow authenticated deletes from project images" ON storage.objects
FOR DELETE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'images'
);

-- Product Images Bucket Policies (new functionality)
CREATE POLICY "Allow authenticated uploads to product images" ON storage.objects
FOR INSERT WITH CHECK (
  auth.role() = 'authenticated' AND 
  bucket_id = 'product-images'
);

CREATE POLICY "Allow public downloads from product images" ON storage.objects
FOR SELECT USING (bucket_id = 'product-images');

CREATE POLICY "Allow authenticated updates to product images" ON storage.objects
FOR UPDATE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'product-images'
);

CREATE POLICY "Allow authenticated deletes from product images" ON storage.objects
FOR DELETE USING (
  auth.role() = 'authenticated' AND 
  bucket_id = 'product-images'
); 