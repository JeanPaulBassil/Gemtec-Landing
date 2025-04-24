import axios from 'axios';

// Base API URL
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200/api';
console.log('Using backend URL:', BACKEND_URL);

// Create axios instance for backend API
const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  timeout: 30000, // 30 seconds
  withCredentials: false, // Important for CORS
});

// Enable CORS for all requests
const setAxiosDefaults = () => {
  // Add specific CORS headers to the default headers for all requests
  api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  api.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
  api.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
};

// Set defaults on client side only
if (typeof window !== 'undefined') {
  setAxiosDefaults();
}

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