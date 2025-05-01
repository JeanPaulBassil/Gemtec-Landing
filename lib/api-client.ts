import axios from 'axios';

// Base API URL - use the correct port (3200) for the backend
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200';

console.log('Frontend using backend URL:', BACKEND_URL);

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

// Add request interceptor for debugging
api.interceptors.request.use(config => {
  // Add a timestamp parameter to prevent caching
  if (config.method?.toLowerCase() === 'get') {
    config.params = {
      ...config.params,
    };
  }
  
  return config;
}, error => {
  return Promise.reject(error);
});

// Add response interceptor for error handling
api.interceptors.response.use(response => {
  console.log('API Response:', {
    status: response.status,
    statusText: response.statusText,
    url: response.config.url,
    dataStructure: response.data ? 
      (response.data.payload ? 'Has payload wrapper' : 'No payload wrapper') : 
      'No data'
  });
  return response;
}, error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error('API Response Error:', {
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data,
      url: error.config?.url
    });
  } else if (error.request) {
    // The request was made but no response was received
    console.error('API Network Error:', {
      message: error.message,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('API Setup Error:', error.message);
  }
  return Promise.reject(error);
});

export { api }; 