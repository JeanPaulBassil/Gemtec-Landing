import { api } from '@/lib/api-client';

// Types for job offerings
export interface Requirement {
  id: string;
  title: string;
  jobOfferingId: string;
}

export interface JobOffering {
  id: string;
  title: string;
  cityName: string;
  countryName: string;
  positionType: string;
  department: string;
  requirements: Requirement[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Service to handle job offerings data
 */
export const JobOfferingsService = {
  /**
   * Get all job offerings
   * @returns Promise with job offerings data
   */
  async getJobOfferings(): Promise<JobOffering[]> {
    try {
      const response = await api.get('/job-offerings');

      
      // Handle potential payload wrapper
      let data: JobOffering[] = [];
      if (response.data.payload && Array.isArray(response.data.payload)) {
        data = response.data.payload;
      } else if (Array.isArray(response.data)) {
        data = response.data;
      } else if (response.data.data && Array.isArray(response.data.data)) {
        data = response.data.data;
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching job offerings:', error);
      return [];
    }
  },
  
  /**
   * Get a single job offering by ID
   * @param id Job offering ID
   * @returns Promise with job offering data
   */
  async getJobOffering(id: string): Promise<JobOffering | null> {
    try {
      const response = await api.get(`/job-offerings/${id}`);
      
      // Handle potential payload wrapper
      let data: JobOffering;
      if (response.data.payload) {
        data = response.data.payload;
      } else {
        data = response.data;
      }
      
      return data;
    } catch (error) {
      console.error(`Error fetching job offering with ID ${id}:`, error);
      return null;
    }
  }
}; 