import { backendApi } from '../api-client';

export interface Category {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
  slug?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesResponse {
  data: Category[];
  total: number;
  page: number;
  limit: number;
}

export interface CategoryQueryParams {
  page?: number;
  limit?: number;
  parentId?: string;
  search?: string;
}

export const CategoriesService = {
  /**
   * Get all categories with optional pagination and filtering
   */
  async getCategories(params?: CategoryQueryParams): Promise<CategoriesResponse> {
    const response = await backendApi.get('/category', { params });
    return response.data;
  },

  /**
   * Get a single category by ID
   */
  async getCategory(id: string): Promise<Category> {
    const response = await backendApi.get(`/category/${id}`);
    return response.data;
  },

  /**
   * Get a category by slug
   */
  async getCategoryBySlug(slug: string): Promise<Category> {
    const response = await backendApi.get(`/category/slug/${slug}`);
    return response.data;
  },

  /**
   * Get top-level categories (those without a parent)
   */
  async getTopCategories(): Promise<Category[]> {
    const response = await backendApi.get('/category/top');
    return response.data;
  },

  /**
   * Get subcategories for a specific parent category
   */
  async getSubcategories(parentId: string): Promise<Category[]> {
    const response = await backendApi.get('/category', { 
      params: { parentId } 
    });
    return response.data.data;
  }
}; 