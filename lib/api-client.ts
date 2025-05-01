import axios from 'axios';

// Base API URL - use the correct port (3200) for the backend
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200/api';

console.log('Frontend using backend URL:', BACKEND_URL);

// Create axios instance for backend API
const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: 30000, // 30 seconds
  maxBodyLength: Infinity, // Allow large file uploads
  maxContentLength: Infinity, // Allow large file downloads
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: false, // Important for CORS
});

// Add request interceptor for debugging
api.interceptors.request.use(config => {
  // Log request details
  console.log('API Request:', {
    method: config.method,
    url: config.url,
    data: config.data ? 'Has data' : 'No data',
    headers: config.headers,
  });

  // Get token from local storage
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, error => {
  console.error('API Request Error:', error);
  return Promise.reject(error);
});

// Add response interceptor for error handling
api.interceptors.response.use(response => {
  // Log successful response
  console.log('API Response:', {
    status: response.status,
    statusText: response.statusText,
    url: response.config.url,
    data: response.data ? 'Has data' : 'No data',
  });
  return response;
}, async error => {
  // Log error details
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('API Response Error:', {
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data,
      url: error.config?.url,
      requestData: error.config?.data,
    });
  } else if (error.request) {
    // The request was made but no response was received
    console.error('API Network Error:', {
      message: error.message,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      requestData: error.config?.data,
    });
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('API Setup Error:', {
      message: error.message,
      config: error.config,
    });
  }

  const originalRequest = error.config;

  // If error is 401 and we haven't retried yet
  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    try {
      // Try to refresh token
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('No refresh token');
      }

      const response = await axios.post(`${BACKEND_URL}/auth/refresh`, {
        refreshToken,
      });

      const { token } = response.data;

      // Save new token
      localStorage.setItem('token', token);

      // Update authorization header
      originalRequest.headers.Authorization = `Bearer ${token}`;

      // Retry original request
      return api(originalRequest);
    } catch (refreshError) {
      // If refresh fails, clear tokens and reject
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
});

export { api }; 