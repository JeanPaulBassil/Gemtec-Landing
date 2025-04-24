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
  resume?: {
    id: string;
    fileUrl: string;
  };
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
   * Submit a job application with resume
   * @param formData Application form data
   * @param resumeFile Resume file
   * @returns Promise with application data
   */
  async submitApplication(
    formData: ApplicationFormData,
    resumeFile: File
  ): Promise<ApplicationResponse> {
    try {
      // First, we need to upload the resume file
      const formDataForFile = new FormData();
      formDataForFile.append('file', resumeFile);
      
      // Upload the file first
      const fileUploadResponse = await api.post('/uploads/resume', formDataForFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const fileUrl = fileUploadResponse.data.fileUrl;
      
      // Prepare the application data with the resume file URL
      const applicationData = {
        ...formData,
        // Convert years of experience to a number
        yearsOfExperience: parseYearsOfExperience(formData.yearsOfExperience),
        resume: {
          fileUrl,
        },
      };
      
      // Submit the application
      const response = await api.post('/applications', applicationData);
      
      return response.data;
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  },
  
  /**
   * Get available job positions
   * @returns Promise with list of positions
   */
  async getPositions(): Promise<{ id: string; title: string; department: string }[]> {
    try {
      const response = await api.get('/positions');
      return response.data;
    } catch (error) {
      console.error('Error fetching positions:', error);
      throw error;
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