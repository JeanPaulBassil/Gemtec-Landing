import { backendApi } from '../api-client';

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  employmentType: string; // Full-time, Part-time, Contract, etc.
  department?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  isActive: boolean;
  postedAt: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobsResponse {
  data: Job[];
  total: number;
  page: number;
  limit: number;
}

export interface JobQueryParams {
  page?: number;
  limit?: number;
  location?: string;
  employmentType?: string;
  department?: string;
  search?: string;
}

export interface JobApplicationData {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  coverLetter?: string;
  resumeFileId?: string; // ID of previously uploaded resume
  linkedin?: string;
  portfolio?: string;
  additionalInfo?: string;
}

export const JobsService = {
  /**
   * Get all jobs with optional filtering and pagination
   */
  async getJobs(params?: JobQueryParams): Promise<JobsResponse> {
    const response = await backendApi.get('/job', { params });
    return response.data;
  },

  /**
   * Get a single job by ID
   */
  async getJob(id: string): Promise<Job> {
    const response = await backendApi.get(`/job/${id}`);
    return response.data;
  },

  /**
   * Submit job application
   */
  async applyForJob(data: JobApplicationData): Promise<any> {
    const response = await backendApi.post('/application', data);
    return response.data;
  },

  /**
   * Upload resume for job application
   */
  async uploadResume(file: File): Promise<{ fileId: string, fileUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await backendApi.post('/application/upload-resume', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return response.data;
  }
}; 