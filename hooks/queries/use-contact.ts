'use client';

import { useMutation } from '@tanstack/react-query';
import { ContactService, ContactFormData, QuoteFormData, SubscriptionData } from '@/lib/services';

/**
 * Hook for contact form submission
 */
export function useContactForm() {
  return useMutation({
    mutationFn: (data: ContactFormData) => ContactService.submitContactForm(data),
    onSuccess: () => {
      // You can add success handling logic here
      console.log('Contact form submitted successfully');
    },
    onError: (error) => {
      console.error('Contact form submission error:', error);
    },
  });
}

/**
 * Hook for quote request form submission
 */
export function useQuoteForm() {
  return useMutation({
    mutationFn: (data: QuoteFormData) => ContactService.submitQuoteRequest(data),
    onSuccess: () => {
      // You can add success handling logic here
      console.log('Quote request submitted successfully');
    },
    onError: (error) => {
      console.error('Quote request submission error:', error);
    },
  });
}

/**
 * Hook for newsletter subscription
 */
export function useNewsletterSubscription() {
  return useMutation({
    mutationFn: (data: SubscriptionData) => ContactService.subscribeToNewsletter(data),
    onSuccess: () => {
      // You can add success handling logic here
      console.log('Newsletter subscription successful');
    },
    onError: (error) => {
      console.error('Newsletter subscription error:', error);
    },
  });
} 