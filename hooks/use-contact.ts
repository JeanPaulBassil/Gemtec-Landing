import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ContactFormData, ContactMessage, ContactService } from '@/services/contact-service';
import { AxiosError } from 'axios';
import { useToast } from '@/components/ui/use-toast';

// Query keys for caching
const CONTACT_KEYS = {
  all: ['contact-messages'] as const,
  details: (id: string) => [...CONTACT_KEYS.all, id] as const,
};

export interface UseContactOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  showToast?: boolean;
}

export function useContact(options: UseContactOptions = {}) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  // Submit contact form mutation
  const submitContactForm = useMutation({
    mutationFn: (data: ContactFormData) => ContactService.submitContactForm(data),
    onMutate: () => {
      setFormStatus('submitting');
      setFormError(null);
    },
    onSuccess: () => {
      setFormStatus('success');
      // Invalidate queries to refresh the data
      queryClient.invalidateQueries({ queryKey: CONTACT_KEYS.all });
      
      // Show success toast if option is enabled
      if (options.showToast !== false) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll get back to you soon.",
        });
      }
      
      // Call the success callback if provided
      if (options.onSuccess) {
        options.onSuccess();
      }
    },
    onError: (error: Error) => {
      setFormStatus('error');
      
      // Extract error message
      let errorMessage = 'Failed to submit contact form';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setFormError(errorMessage);
      
      // Show error toast if option is enabled
      if (options.showToast !== false) {
        toast({
          title: "Submission Failed",
          description: errorMessage,
          variant: "destructive"
        });
      }
      
      // Call the error callback if provided
      if (options.onError) {
        options.onError(error);
      }
    },
  });
  
  // Get all contact messages query
  const useContactMessages = (enabled = true) => {
    return useQuery({
      queryKey: CONTACT_KEYS.all,
      queryFn: () => ContactService.getContactMessages(),
      enabled,
    });
  };
  
  // Get a single contact message query
  const useContactMessage = (id: string, enabled = true) => {
    return useQuery({
      queryKey: CONTACT_KEYS.details(id),
      queryFn: () => ContactService.getContactMessage(id),
      enabled: enabled && !!id,
    });
  };

  // Reset form state
  const resetForm = () => {
    setFormStatus('idle');
    setFormError(null);
  };

  return {
    // Form state
    formStatus,
    formError,
    resetForm,
    
    // Mutations
    submitContactForm,
    
    // Queries
    useContactMessages,
    useContactMessage,
  };
} 