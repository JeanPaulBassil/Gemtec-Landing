import { api } from '@/lib/api-client';

// Types for news articles
export interface News {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  featuredImage?: string;
  isPublished: boolean;
  publishedAt?: string;
  categoryId?: string;
  author?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Service to handle news data
 */
export const NewsService = {
  /**
   * Get all news articles
   * @returns Promise with news data
   */
  async getNews(): Promise<News[]> {
    try {
      const response = await api.get('/news');
      
      // Handle the payload wrapper from the API
      let data: News[] = [];
      if (response.data.payload && response.data.payload.news) {
        data = response.data.payload.news;
      } else if (Array.isArray(response.data)) {
        data = response.data;
      } else if (response.data.data && Array.isArray(response.data.data)) {
        data = response.data.data;
      }
      
      // Filter to only published news
      return data.filter(article => article.isPublished);
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  },
  
  /**
   * Get a single news article by slug
   * @param slug News article slug
   * @returns Promise with news article data
   */
  async getNewsBySlug(slug: string): Promise<News | null> {
    try {
      const response = await api.get(`/news/slug/${slug}`);
      
      // Handle the payload wrapper from the API
      let data: News;
      if (response.data.payload) {
        data = response.data.payload;
      } else {
        data = response.data;
      }
      
      return data;
    } catch (error) {
      console.error(`Error fetching news with slug ${slug}:`, error);
      return null;
    }
  },
  
  /**
   * Get a single news article by ID
   * @param id News article ID
   * @returns Promise with news article data
   */
  async getNewsById(id: string): Promise<News | null> {
    try {
      const response = await api.get(`/news/${id}`);
      
      // Handle the payload wrapper from the API
      let data: News;
      if (response.data.payload) {
        data = response.data.payload;
      } else {
        data = response.data;
      }
      
      return data;
    } catch (error) {
      console.error(`Error fetching news with ID ${id}:`, error);
      return null;
    }
  }
}; 