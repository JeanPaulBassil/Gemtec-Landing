import { api } from '@/lib/api-client';
import { AxiosError } from 'axios';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Service to handle contact form submissions and messages
 */
export const ContactService = {
  /**
   * Submit a contact form to the backend API
   * @param data The contact form data
   * @returns The created contact message
   */
  async submitContactForm(data: ContactFormData): Promise<ContactMessage> {
    try {
      const response = await api.post('/contact', data);
      
      // Handle potential payload wrapper
      return response.data.payload || response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
  
  /**
   * Get all contact messages
   * @returns List of contact messages
   */
  async getContactMessages(): Promise<ContactMessage[]> {
    try {
      const response = await api.get('/contact');
      
      // Handle potential payload wrapper
      let data: ContactMessage[] = [];
      if (response.data.payload && Array.isArray(response.data.payload)) {
        data = response.data.payload;
      } else if (Array.isArray(response.data)) {
        data = response.data;
      } else if (response.data.data && Array.isArray(response.data.data)) {
        data = response.data.data;
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      return [];
    }
  },
  
  /**
   * Get a single contact message by ID
   * @param id Contact message ID
   * @returns Contact message data
   */
  async getContactMessage(id: string): Promise<ContactMessage | null> {
    try {
      const response = await api.get(`/contact/${id}`);
      
      // Handle potential payload wrapper
      return response.data.payload || response.data;
    } catch (error) {
      console.error(`Error fetching contact message with ID ${id}:`, error);
      return null;
    }
  }
}; 