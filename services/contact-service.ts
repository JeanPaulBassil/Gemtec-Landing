import { api } from '@/lib/api-client';
import axios, { AxiosError } from 'axios';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactService = {
  /**
   * Submit a contact form
   * @param data The contact form data
   * @returns The response from the API
   */
  async submitContactForm(data: ContactFormData) {
    try {
      // Use Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error submitting form: ${response.status} ${errorText}`);
        throw new Error(`Failed to submit contact form: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
}; 