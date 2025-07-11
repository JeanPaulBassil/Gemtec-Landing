import { createClient } from './supabase/client';

const supabase = createClient();

// Helper function to log operations
const logOperation = (operation: string, details: any) => {
  console.log(`Supabase Operation: ${operation}`, details);
};

// Enhanced error handling
export class SupabaseApiError extends Error {
  constructor(
    message: string,
    public operation: string,
    public originalError?: any
  ) {
    super(message);
    this.name = 'SupabaseApiError';
  }
}

// Generic API response wrapper
export interface ApiResponse<T> {
  data: T;
  error: string | null;
  success: boolean;
}

// Wrap Supabase operations with consistent error handling
const wrapSupabaseOperation = async <T>(
  operation: string,
  supabasePromise: Promise<{ data: T; error: any }>
): Promise<ApiResponse<T>> => {
  try {
    logOperation(operation, 'Starting operation');
    
    const { data, error } = await supabasePromise;
    
    if (error) {
      console.error(`${operation} error:`, error);
      throw new SupabaseApiError(
        error.message || `Failed to ${operation}`,
        operation,
        error
      );
    }

    logOperation(operation, { success: true, dataLength: Array.isArray(data) ? data.length : 'single' });
    
    return {
      data,
      error: null,
      success: true,
    };
  } catch (error: any) {
    const errorMessage = error instanceof SupabaseApiError 
      ? error.message 
      : `Failed to ${operation}`;
      
    console.error(`${operation} failed:`, error);
    
    return {
      data: null as T,
      error: errorMessage,
      success: false,
    };
  }
};

// Projects API
export const projectsApi = {
  async getAll() {
    return wrapSupabaseOperation(
      'fetch projects',
      supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
    );
  },

  async getById(id: string) {
    return wrapSupabaseOperation(
      'fetch project by ID',
      supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single()
    );
  },

  async create(projectData: any) {
    return wrapSupabaseOperation(
      'create project',
      supabase
        .from('projects')
        .insert(projectData)
        .select()
        .single()
    );
  },

  async update(id: string, updates: any) {
    return wrapSupabaseOperation(
      'update project',
      supabase
        .from('projects')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()
    );
  },

  async delete(id: string) {
    return wrapSupabaseOperation(
      'delete project',
      supabase
        .from('projects')
        .delete()
        .eq('id', id)
    );
  },
};

// Job Offerings API
export const jobOfferingsApi = {
  async getAll() {
    return wrapSupabaseOperation(
      'fetch job offerings',
      supabase
        .from('job_offerings')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
    );
  },

  async getById(id: string) {
    return wrapSupabaseOperation(
      'fetch job offering by ID',
      supabase
        .from('job_offerings')
        .select('*')
        .eq('id', id)
        .single()
    );
  },
};

// Contact API
export const contactApi = {
  async submitMessage(contactData: {
    name: string;
    email: string;
    subject?: string;
    message: string;
  }) {
    return wrapSupabaseOperation(
      'submit contact message',
      supabase
        .from('contact_messages')
        .insert({
          ...contactData,
          is_read: false,
        })
        .select()
        .single()
    );
  },
};

// Quote API
export const quoteApi = {
  async submitRequest(quoteData: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    project_description: string;
    budget_range?: string;
    timeline?: string;
  }) {
    return wrapSupabaseOperation(
      'submit quote request',
      supabase
        .from('quote_requests')
        .insert({
          ...quoteData,
          is_processed: false,
        })
        .select()
        .single()
    );
  },
};

// Legacy axios compatibility layer (for gradual migration)
export const api = {
  get: async (url: string) => {
    console.warn(`Legacy API call detected: GET ${url}. Consider migrating to Supabase operations.`);
    
    // Map common endpoints to Supabase operations
    if (url === '/projects') {
      const result = await projectsApi.getAll();
      return { data: result.data };
    }
    
    if (url.startsWith('/projects/')) {
      const id = url.split('/')[2];
      const result = await projectsApi.getById(id);
      return { data: result.data };
    }
    
    throw new Error(`Unmapped legacy API endpoint: ${url}`);
  },
  
  post: async (url: string, data: any) => {
    console.warn(`Legacy API call detected: POST ${url}. Consider migrating to Supabase operations.`);
    
    if (url === '/contact') {
      const result = await contactApi.submitMessage(data);
      return { data: result.data };
    }
    
    if (url === '/quotes') {
      const result = await quoteApi.submitRequest(data);
      return { data: result.data };
    }
    
    throw new Error(`Unmapped legacy API endpoint: ${url}`);
  },
};

export { supabase };

export default api; 