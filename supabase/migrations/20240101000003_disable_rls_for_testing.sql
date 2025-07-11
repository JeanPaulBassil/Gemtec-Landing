-- Temporary migration to disable RLS for testing
-- This will help us determine if RLS is the issue with delete operations

-- Disable RLS on job_applications table temporarily
ALTER TABLE public.job_applications DISABLE ROW LEVEL SECURITY;

-- Note: This is for testing only. In production, you should use proper RLS policies.
-- After confirming the delete works, you can re-enable RLS with proper policies. 