import { jobOfferingsApi } from '@/lib/api';

// Types for job offerings
export interface Requirement {
  id: string;
  title: string;
  jobOfferingId: string;
}

export interface JobOffering {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  employment_type: 'full-time' | 'part-time' | 'contract' | null;
  salary_range: string | null;
  requirements: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  // Legacy fields for backward compatibility
  cityName?: string;
  countryName?: string;
  positionType?: string;
  department?: string;
}

/**
 * Service to handle job offerings data from Supabase
 */
export const JobOfferingsService = {
  /**
   * Get all job offerings from Supabase
   * @returns Promise with job offerings data
   */
  async getJobOfferings(): Promise<JobOffering[]> {
    try {
      const data = await jobOfferingsApi.getJobOfferings();
      
      // Transform data for backward compatibility
      return data.map(job => ({
        ...job,
        // Map new fields to legacy field names for existing components
        cityName: job.location?.split(',')[0]?.trim() || '',
        countryName: job.location?.split(',')[1]?.trim() || '',
        positionType: job.employment_type || '',
        department: 'General', // Default department
      }));
    } catch (error) {
      console.error('Error fetching job offerings:', error);
      return [];
    }
  },
  
  /**
   * Get a single job offering by ID from Supabase
   * @param id Job offering ID
   * @returns Promise with job offering data
   */
  async getJobOffering(id: string): Promise<JobOffering | null> {
    try {
      const data = await jobOfferingsApi.getJobOffering(id);
      
      if (!data) {
        return null;
      }

      // Transform data for backward compatibility
      return {
        ...data,
        cityName: data.location?.split(',')[0]?.trim() || '',
        countryName: data.location?.split(',')[1]?.trim() || '',
        positionType: data.employment_type || '',
        department: 'General', // Default department
      };
    } catch (error) {
      console.error(`Error fetching job offering with ID ${id}:`, error);
      return null;
    }
  }
}; 