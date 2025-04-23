import axios from 'axios';

// Base API URLs
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000/api';

// Create axios instance for backend API
const backendApi = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
});

// Request interceptor for adding auth token
backendApi.interceptors.request.use(
  (config) => {
    // Get token from localStorage if in browser environment
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
backendApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors (401, 403, etc.)
    if (error.response?.status === 401) {
      // Redirect to login page or clear auth tokens
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        // You can add redirection logic here if needed
      }
    }
    return Promise.reject(error);
  }
);

export { backendApi }; 