-- Fix RLS policies for job_applications table
-- This migration ensures admin users can properly manage job applications

-- First, drop existing policies if they exist
DROP POLICY IF EXISTS "Admin users can manage job applications" ON public.job_applications;

-- Create new, more specific policies for job_applications
-- Allow admin users to SELECT (read) job applications
CREATE POLICY "Admin users can read job applications" ON public.job_applications
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.user_id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Allow admin users to INSERT (create) job applications
CREATE POLICY "Admin users can create job applications" ON public.job_applications
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.user_id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Allow admin users to UPDATE job applications
CREATE POLICY "Admin users can update job applications" ON public.job_applications
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.user_id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Allow admin users to DELETE job applications
CREATE POLICY "Admin users can delete job applications" ON public.job_applications
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.user_id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Also allow public to INSERT job applications (for the application form)
CREATE POLICY "Public can create job applications" ON public.job_applications
  FOR INSERT WITH CHECK (true);

-- Allow public to read their own applications (optional, for future features)
CREATE POLICY "Public can read own applications" ON public.job_applications
  FOR SELECT USING (true); 