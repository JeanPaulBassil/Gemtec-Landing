import { createClient } from './supabase/client';

const supabase = createClient();

export interface Project {
  id: string;
  title: string;
  photo_url: string;
  items_supplied: string[];
  location: string;
  brands: string[];
  created_at: string;
  updated_at: string;
}

export const projectsApi = {
  async getProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  async getProject(id: string) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(`Error fetching project with id ${id}:`, error);
        return null;
      }

      return data;
    } catch (error) {
      console.error(`Error fetching project with id ${id}:`, error);
      return null;
    }
  },

  async createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert(project)
        .select()
        .single();

      if (error) {
        console.error('Error creating project:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  },

  async updateProject(id: string, updates: Partial<Project>) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating project:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  },

  async deleteProject(id: string) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting project:', error);
        throw error;
      }

      return true;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  },
};

export interface JobOffering {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  employment_type: 'full-time' | 'part-time' | 'contract' | null;
  salary_range: string | null;
  requirements: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const jobOfferingsApi = {
  async getJobOfferings() {
    try {
      const { data, error } = await supabase
        .from('job_offerings')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching job offerings:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching job offerings:', error);
      return [];
    }
  },

  async getJobOffering(id: string) {
    try {
      const { data, error } = await supabase
        .from('job_offerings')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(`Error fetching job offering with id ${id}:`, error);
        return null;
      }

      return data;
    } catch (error) {
      console.error(`Error fetching job offering with id ${id}:`, error);
      return null;
    }
  },
};

export interface ContactMessage {
  name: string;
  email: string;
  subject?: string | null;
  message: string;
}

export const contactApi = {
  async submitContactMessage(contactData: ContactMessage) {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert({
          ...contactData,
          is_read: false,
        })
        .select()
        .single();

      if (error) {
        console.error('Error submitting contact message:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error submitting contact message:', error);
      throw error;
    }
  },
};

export interface QuoteRequest {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  project_description: string;
  budget_range?: string | null;
  timeline?: string | null;
}

export const quoteApi = {
  async submitQuoteRequest(quoteData: QuoteRequest) {
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .insert({
          ...quoteData,
          is_processed: false,
        })
        .select()
        .single();

      if (error) {
        console.error('Error submitting quote request:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error submitting quote request:', error);
      throw error;
    }
  },
};

export interface News {
  id: string;
  title: string;
  slug: string;
  summary?: string | null;
  content: string;
  featured_image?: string | null;
  is_published: boolean;
  published_at?: string | null;
  category_id?: string | null;
  author?: string | null;
  created_at: string;
  updated_at: string;
}

export const newsApi = {
  async getNews() {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching news:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  },

  async getNewsBySlug(slug: string) {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error(`Error fetching news with slug ${slug}:`, error);
        return null;
      }

      return data;
    } catch (error) {
      console.error(`Error fetching news with slug ${slug}:`, error);
      return null;
    }
  },

  async getNewsById(id: string) {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error(`Error fetching news with id ${id}:`, error);
        return null;
      }

      return data;
    } catch (error) {
      console.error(`Error fetching news with id ${id}:`, error);
      return null;
    }
  },
};

export default supabase; 