import { backendApi } from '../api-client';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  company?: string;
  jobTitle?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectDetails: string;
  productInterest?: string[];
  budget?: string;
  timeline?: string;
}

export interface SubscriptionData {
  email: string;
  name?: string;
  interests?: string[];
}

export const ContactService = {
  /**
   * Submit general contact form
   */
  async submitContactForm(data: ContactFormData): Promise<any> {
    const response = await backendApi.post('/contact', data);
    return response.data;
  },

  /**
   * Submit quote request form
   */
  async submitQuoteRequest(data: QuoteFormData): Promise<any> {
    const response = await backendApi.post('/quote', data);
    return response.data;
  },

  /**
   * Subscribe to newsletter
   */
  async subscribeToNewsletter(data: SubscriptionData): Promise<any> {
    const response = await backendApi.post('/contact/subscribe', data);
    return response.data;
  }
}; 