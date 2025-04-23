import { backendApi } from '../api-client';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    role: string;
  };
}

export const AuthService = {
  /**
   * Login user with email and password
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await backendApi.post('/auth/login', credentials);
    
    // Store the token in localStorage after successful login
    if (response.data.token && typeof window !== 'undefined') {
      localStorage.setItem('auth_token', response.data.token);
    }
    
    return response.data;
  },

  /**
   * Register a new user
   */
  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await backendApi.post('/auth/register', userData);
    
    // Store the token in localStorage after successful registration
    if (response.data.token && typeof window !== 'undefined') {
      localStorage.setItem('auth_token', response.data.token);
    }
    
    return response.data;
  },

  /**
   * Get current authenticated user
   */
  async getCurrentUser(): Promise<any> {
    const response = await backendApi.get('/auth/me');
    return response.data;
  },

  /**
   * Send password reset email
   */
  async forgotPassword(email: string): Promise<any> {
    const response = await backendApi.post('/auth/forgot-password', { email });
    return response.data;
  },

  /**
   * Reset password with token
   */
  async resetPassword(token: string, password: string): Promise<any> {
    const response = await backendApi.post('/auth/reset-password', {
      token,
      password,
    });
    return response.data;
  },

  /**
   * Log out user
   */
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  },
}; 