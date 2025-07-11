import { newsApi, News as SupabaseNews } from '@/lib/api';

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
      const data = await newsApi.getNews();
      
      // Transform Supabase data to match the expected interface
      return data.map((article: SupabaseNews) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        summary: article.summary || undefined,
        content: article.content,
        featuredImage: article.featured_image || undefined,
        isPublished: article.is_published,
        publishedAt: article.published_at || undefined,
        categoryId: article.category_id || undefined,
        author: article.author || undefined,
        createdAt: article.created_at,
        updatedAt: article.updated_at,
      }));
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
      const data = await newsApi.getNewsBySlug(slug);
      
      if (!data) {
        return null;
      }
      
      // Transform Supabase data to match the expected interface
      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        summary: data.summary || undefined,
        content: data.content,
        featuredImage: data.featured_image || undefined,
        isPublished: data.is_published,
        publishedAt: data.published_at || undefined,
        categoryId: data.category_id || undefined,
        author: data.author || undefined,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      };
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
      const data = await newsApi.getNewsById(id);
      
      if (!data) {
        return null;
      }
      
      // Transform Supabase data to match the expected interface
      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        summary: data.summary || undefined,
        content: data.content,
        featuredImage: data.featured_image || undefined,
        isPublished: data.is_published,
        publishedAt: data.published_at || undefined,
        categoryId: data.category_id || undefined,
        author: data.author || undefined,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      };
    } catch (error) {
      console.error(`Error fetching news with ID ${id}:`, error);
      return null;
    }
  }
}; 