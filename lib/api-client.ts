import axios from 'axios';

// Base API URL
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200/api';

// Create axios instance for backend API
const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 30000, // 30 seconds
  withCredentials: false, // Important for CORS
});

// Remove client-side CORS header settings as they don't work
// CORS headers must be set by the server

// Add request interceptor
api.interceptors.request.use(config => {
  // Add a timestamp parameter to prevent caching
  if (config.method?.toLowerCase() === 'get') {
    config.params = {
      ...config.params,
      _t: Date.now()
    };
  }
  
  console.log('API Request:', {
    url: config.url,
    method: config.method,
    data: config.data,
    headers: config.headers
  });
  return config;
}, error => {
  console.error('API Request Error:', error);
  return Promise.reject(error);
});

// Add response interceptor
api.interceptors.response.use(response => {
  console.log('API Response:', {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    data: response.data
  });
  return response;
}, error => {
  console.error('API Response Error:', error.response || error);
  return Promise.reject(error);
});

export { api }; 