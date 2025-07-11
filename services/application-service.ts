import { jobOfferingsApi } from '@/lib/api';
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();
const RESUME_BUCKET = "applications";

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
 * Service to handle job applications using Supabase
 */
export const ApplicationService = {
  /**
   * Submit a job application to Supabase
   * @param formData Application form data
   * @param resumeFile Optional resume file to upload
   * @returns Promise with application data
   */
  async submitApplication(
    formData: ApplicationFormData,
    resumeFile?: File | null,
  ): Promise<ApplicationResponse> {
    try {
      let resumeUrl: string | null = null;

      // Upload resume file if provided
      if (resumeFile) {
        const fileName = `resumes/${Date.now()}-${resumeFile.name}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from(RESUME_BUCKET)
          .upload(fileName, resumeFile, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) {
          console.error('Error uploading resume:', uploadError);
          if (uploadError.message.includes('bucket')) {
            throw new Error('Storage bucket not configured. Please create an "applications" bucket in your Supabase dashboard.');
          }
          throw new Error('Failed to upload resume file. Please try again.');
        }

        // Get the public URL for the uploaded file
        const { data: urlData } = supabase.storage
          .from(RESUME_BUCKET)
          .getPublicUrl(fileName);

        resumeUrl = urlData.publicUrl;
      }

      // Prepare the application data for Supabase
      const applicationData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        current_location: formData.currentLocation,
        years_of_experience: parseYearsOfExperience(formData.yearsOfExperience),
        highest_education: formData.highestEducation,
        cover_letter: formData.coverLetter,
        job_offering_id: formData.positionId,
        resume_url: resumeUrl,
        status: 'submitted' as const,
      };
      
      // Submit the application to Supabase
      const { data, error } = await supabase
        .from('job_applications')
        .insert(applicationData)
        .select(`
          *,
          job_offering:job_offerings (
            id,
            title
          )
        `)
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message || 'Failed to submit application');
      }

      if (!data) {
        throw new Error('No data returned from application submission');
      }

      // Transform the response to match the expected format
      return {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        phoneNumber: data.phone_number || '',
        currentLocation: data.current_location || '',
        yearsOfExperience: data.years_of_experience || 0,
        highestEducation: data.highest_education || '',
        coverLetter: data.cover_letter || '',
        positionId: data.job_offering_id,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        position: data.job_offering ? {
          id: data.job_offering.id,
          title: data.job_offering.title,
        } : undefined,
      };
    } catch (error: any) {
      console.error('Error submitting application:', error);

      // Handle specific error cases
      if (error.message.includes('duplicate key value')) {
        throw new Error('You have already applied for this position with this email address.');
      }

      if (error.message.includes('violates foreign key constraint')) {
        throw new Error('The selected position is no longer available.');
      }

      // Handle other errors
      throw new Error(error.message || 'An error occurred while submitting your application');
    }
  },
  
  /**
   * Get available job positions from Supabase
   * @returns Promise with list of positions
   */
  async getPositions(): Promise<{ id: string; title: string; department: string }[]> {
    try {
      const jobOfferings = await jobOfferingsApi.getJobOfferings();
      
      // Map to the expected position format
      return jobOfferings.map((job: any) => ({
        id: job.id,
        title: job.title,
        department: 'General' // Default department since it's not in our schema
      }));
    } catch (error: any) {
      console.error('Error fetching positions:', error);

      // Handle network errors
      if (error.message.includes('fetch')) {
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