import { backendApi } from '../api-client';

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  imageUrl?: string;
  categoryId?: string;
  category?: {
    id: string;
    name: string;
  };
  features?: string[];
  specifications?: any[];
  documents?: any[];
  applications?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  categoryId?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export const ProductsService = {
  /**
   * Get all products with optional filtering and pagination
   */
  async getProducts(params?: ProductQueryParams): Promise<ProductsResponse> {
    const response = await backendApi.get('/products', { params });
    return response.data;
  },

  /**
   * Get a single product by ID
   */
  async getProduct(id: string): Promise<Product> {
    const response = await backendApi.get(`/products/${id}`);
    return response.data;
  },

  /**
   * Get products by category
   */
  async getProductsByCategory(categoryId: string, params?: Omit<ProductQueryParams, 'categoryId'>): Promise<ProductsResponse> {
    const response = await backendApi.get('/products', { 
      params: { ...params, categoryId } 
    });
    return response.data;
  },

  /**
   * Search products by query string
   */
  async searchProducts(query: string, params?: Omit<ProductQueryParams, 'search'>): Promise<ProductsResponse> {
    const response = await backendApi.get('/products/search', { 
      params: { ...params, query } 
    });
    return response.data;
  },

  /**
   * Get featured products
   */
  async getFeaturedProducts(): Promise<Product[]> {
    const response = await backendApi.get('/products/featured');
    return response.data;
  },

  /**
   * Get related products
   */
  async getRelatedProducts(productId: string, limit: number = 4): Promise<Product[]> {
    const response = await backendApi.get(`/products/${productId}/related`, {
      params: { limit }
    });
    return response.data;
  }
}; 