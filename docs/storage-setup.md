# Supabase Storage Setup for Image Uploads

## Overview
This guide helps you set up Supabase storage for image uploads in the admin projects page.

## Steps to Set Up Storage

### 1. Create Storage Bucket
1. Go to your Supabase dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **Create a new bucket**
4. Name the bucket `images` (or any of the fallback names: `project-images`, `uploads`, `public`)
5. Make sure **Public bucket** is checked
6. Click **Create bucket**

### 2. Set Up Storage Policies
1. In the Storage section, click on your bucket name
2. Go to **Policies** tab
3. Add the following policies:

#### For INSERT (Upload) operations:
```sql
CREATE POLICY "Allow authenticated uploads" ON storage.objects
FOR INSERT WITH CHECK (auth.role() = 'authenticated');
```

#### For SELECT (Download) operations:
```sql
CREATE POLICY "Allow public downloads" ON storage.objects
FOR SELECT USING (true);
```

#### For UPDATE operations:
```sql
CREATE POLICY "Allow authenticated updates" ON storage.objects
FOR UPDATE USING (auth.role() = 'authenticated');
```

#### For DELETE operations:
```sql
CREATE POLICY "Allow authenticated deletes" ON storage.objects
FOR DELETE USING (auth.role() = 'authenticated');
```

### 3. Alternative: Simple Public Policy
If you want to allow all operations for public access (less secure but simpler):

```sql
CREATE POLICY "Public Access" ON storage.objects
FOR ALL USING (true);
```

## Testing
1. After setting up the bucket and policies, try uploading an image in the admin projects page
2. The upload should work without errors
3. Images will be stored in the `project-images/` folder within your bucket

## Troubleshooting
- **"Bucket not found" error**: Make sure you've created the storage bucket
- **"Permission denied" error**: Check that your storage policies are correctly set up
- **Upload fails**: Verify your Supabase environment variables are correct

## Environment Variables
Make sure these are set in your `.env.local` file:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
``` 