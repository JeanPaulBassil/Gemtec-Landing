# Resume Upload Setup for Job Applications

## Overview
This guide helps you set up Supabase storage for resume uploads in the job application form.

## Steps to Set Up Storage

### 1. Create Storage Bucket
1. Go to your Supabase dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **Create a new bucket**
4. Name the bucket `applications`
5. Make sure **Public bucket** is checked
6. Click **Create bucket**

### 2. Set Up Storage Policies
1. In the Storage section, click on your `applications` bucket name
2. Go to **Policies** tab
3. Add the following policies:

#### For INSERT (Upload) operations:
```sql
CREATE POLICY "Allow public uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'applications');
```

#### For SELECT (Download) operations:
```sql
CREATE POLICY "Allow public downloads" ON storage.objects
FOR SELECT USING (bucket_id = 'applications');
```

### 3. Alternative: Simple Public Policy
If you want to allow all operations for public access (less secure but simpler):

```sql
CREATE POLICY "Public Access" ON storage.objects
FOR ALL USING (bucket_id = 'applications');
```

## Testing
1. After setting up the bucket and policies, try submitting a job application with a resume file
2. The upload should work without errors
3. Resumes will be stored in the `resumes/` folder within your `applications` bucket
4. You can view the uploaded resumes in the admin applications page

## Troubleshooting
- **"Bucket not found" error**: Make sure you've created the `applications` storage bucket
- **"Permission denied" error**: Check that your storage policies are correctly set up
- **Upload fails**: Verify your Supabase environment variables are correct

## Environment Variables
Make sure these are set in your `.env.local` file:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
``` 