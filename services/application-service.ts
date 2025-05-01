import { api } from '@/lib/api-client';

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  currentLocation: string;
  yearsOfExperience: string; // This will be a string from the select input
  highestEducation: string;
  coverLetter: string;
  positionId: string; // This would be the value from the position select
  position?: string; // The display name of the position
}

export interface ApplicationResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  currentLocation: string;
  yearsOfExperience: number;
  highestEducation: string;
  coverLetter: string;
  positionId: string;
  createdAt: string;
  updatedAt: string;
  position?: {
    id: string;
    title: string;
  };
}

/**
 * Service to handle job applications on the landing page
 */
export const ApplicationService = {
  /**
   * Submit a job application
   * @param formData Application form data
   * @returns Promise with application data
   */
  async submitApplication(
    formData: ApplicationFormData,
  ): Promise<ApplicationResponse> {
    try {
      // Prepare the application data
      const applicationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        currentLocation: formData.currentLocation,
        yearsOfExperience: parseYearsOfExperience(formData.yearsOfExperience),
        highestEducation: formData.highestEducation,
        coverLetter: formData.coverLetter,
        positionId: formData.positionId,
      };
      
      // Submit the application
      const response = await api.post('/applications', applicationData);
      
      if (!response.data) {
        throw new Error('Invalid response from application submission');
      }

      return response.data;
    } catch (error: any) {
      console.error('Error submitting application:', error);

      // Handle specific error cases
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      // Handle network errors
      if (error.message.includes('Network Error')) {
        throw new Error('Unable to connect to the server. Please check your internet connection.');
      }

      // Handle other errors
      throw new Error(error.message || 'An error occurred while submitting your application');
    }
  },
  
  /**
   * Get available job positions
   * @returns Promise with list of positions
   */
  async getPositions(): Promise<{ id: string; title: string; department: string }[]> {
    try {
      const response = await api.get('/job-offerings');
      
      if (!response.data) {
        throw new Error('Invalid response from server');
      }

      // Extract and transform job offerings into position format
      let jobOfferings = [];
      
      // Handle potential payload wrapper
      if (response.data.payload && Array.isArray(response.data.payload)) {
        jobOfferings = response.data.payload;
      } else if (Array.isArray(response.data)) {
        jobOfferings = response.data;
      } else if (response.data.data && Array.isArray(response.data.data)) {
        jobOfferings = response.data.data;
      } else {
        throw new Error('Invalid response format');
      }
      
      // Map to the expected position format
      return jobOfferings.map((job: any) => ({
        id: job.id,
        title: job.title,
        department: job.department
      }));
    } catch (error: any) {
      console.error('Error fetching positions:', error);

      // Handle specific error cases
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      // Handle network errors
      if (error.message.includes('Network Error')) {
        throw new Error('Unable to connect to the server. Please check your internet connection.');
      }

      // Handle other errors
      throw new Error(error.message || 'An error occurred while fetching positions');
    }
  },
};

/**
 * Helper function to convert years of experience from string to number
 */
function parseYearsOfExperience(yearsStr: string): number {
  switch (yearsStr) {
    case '0-2':
      return 1; // Average of 0-2
    case '3-5':
      return 4; // Average of 3-5
    case '5-10':
      return 7; // Average of 5-10
    case '10+':
      return 12; // Just using 12 for 10+
    default:
      return 0;
  }
} 