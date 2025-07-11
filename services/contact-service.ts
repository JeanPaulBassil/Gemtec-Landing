import { contactApi } from '@/lib/api';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

/**
 * Service to handle contact form submissions and messages
 */
export const ContactService = {
  /**
   * Submit a contact form to Supabase
   * @param data The contact form data
   * @returns The created contact message
   */
  async submitContactForm(data: ContactFormData): Promise<ContactMessage> {
    try {
      // Transform the form data to match the database schema
      const contactData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      const result = await contactApi.submitContactMessage(contactData);
      return result;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
  
  /**
   * Get all contact messages from Supabase
   * @returns List of contact messages
   */
  async getContactMessages(): Promise<ContactMessage[]> {
    try {
      // This would require admin access in the future
      // For now, return empty array as this is not needed for public users
      console.warn('getContactMessages called - this requires admin access');
      return [];
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      return [];
    }
  },
  
  /**
   * Get a single contact message by ID from Supabase
   * @param id Contact message ID
   * @returns Contact message data
   */
  async getContactMessage(id: string): Promise<ContactMessage | null> {
    try {
      // This would require admin access in the future
      // For now, return null as this is not needed for public users
      console.warn('getContactMessage called - this requires admin access');
      return null;
    } catch (error) {
      console.error(`Error fetching contact message with ID ${id}:`, error);
      return null;
    }
  }
}; 