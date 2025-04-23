'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthService } from '@/lib/services';
import { useRouter } from 'next/navigation';

// Query keys
export const authKeys = {
  all: ['auth'] as const,
  currentUser: () => [...authKeys.all, 'currentUser'] as const,
};

/**
 * Hook to fetch the current authenticated user
 */
export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.currentUser(),
    queryFn: () => AuthService.getCurrentUser(),
    retry: false,
    // Only attempt to fetch if we have a token
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('auth_token'),
  });
}

/**
 * Hook for login functionality
 */
export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  
  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: authKeys.currentUser() });
      
      // Optionally redirect user
      // router.push('/dashboard'); // Uncomment if you want automatic redirection
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });
}

/**
 * Hook for registration functionality
 */
export function useRegister() {
  const queryClient = useQueryClient();
  const router = useRouter();
  
  return useMutation({
    mutationFn: AuthService.register,
    onSuccess: (data) => {
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: authKeys.currentUser() });
      
      // Optionally redirect user
      // router.push('/dashboard'); // Uncomment if you want automatic redirection
    },
    onError: (error) => {
      console.error('Registration error:', error);
    },
  });
}

/**
 * Hook for logout functionality
 */
export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  
  return useMutation({
    mutationFn: () => {
      AuthService.logout();
      return Promise.resolve();
    },
    onSuccess: () => {
      // Clear the user from the cache
      queryClient.setQueryData(authKeys.currentUser(), null);
      queryClient.invalidateQueries({ queryKey: authKeys.all });
      
      // Redirect to login or home
      router.push('/');
    },
  });
}

/**
 * Hook for forgot password functionality
 */
export function useForgotPassword() {
  return useMutation({
    mutationFn: (email: string) => AuthService.forgotPassword(email),
  });
}

/**
 * Hook for reset password functionality
 */
export function useResetPassword() {
  const router = useRouter();
  
  return useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) => 
      AuthService.resetPassword(token, password),
    onSuccess: () => {
      // Redirect to login page after successful password reset
      router.push('/login?resetSuccess=true');
    },
  });
} 