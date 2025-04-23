'use client';

import { useQuery, useMutation } from '@tanstack/react-query';
import { JobsService, JobQueryParams, JobApplicationData } from '@/lib/services';

// Query keys
export const jobKeys = {
  all: ['jobs'] as const,
  lists: () => [...jobKeys.all, 'list'] as const,
  list: (filters: JobQueryParams = {}) => [...jobKeys.lists(), filters] as const,
  details: () => [...jobKeys.all, 'detail'] as const,
  detail: (id: string) => [...jobKeys.details(), id] as const,
};

/**
 * Hook to fetch jobs with optional filtering
 */
export function useJobs(params: JobQueryParams = {}) {
  return useQuery({
    queryKey: jobKeys.list(params),
    queryFn: () => JobsService.getJobs(params),
  });
}

/**
 * Hook to fetch a single job by ID
 */
export function useJob(id: string) {
  return useQuery({
    queryKey: jobKeys.detail(id),
    queryFn: () => JobsService.getJob(id),
    enabled: !!id, // Only run query if ID is provided
  });
}

/**
 * Hook for submitting a job application
 */
export function useJobApplication() {
  return useMutation({
    mutationFn: (data: JobApplicationData) => JobsService.applyForJob(data),
    onSuccess: () => {
      // You can add success handling logic here
      console.log('Job application submitted successfully');
    },
    onError: (error) => {
      console.error('Job application submission error:', error);
    },
  });
}

/**
 * Hook for uploading a resume
 */
export function useResumeUpload() {
  return useMutation({
    mutationFn: (file: File) => JobsService.uploadResume(file),
    onSuccess: (data) => {
      // You can add success handling logic here
      console.log('Resume uploaded successfully', data.fileId);
      return data.fileId; // Return the file ID for later use
    },
    onError: (error) => {
      console.error('Resume upload error:', error);
    },
  });
} 