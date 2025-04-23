'use client';

import { useQuery, useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductsService, ProductQueryParams, Product } from '@/lib/services';

// Query keys
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: ProductQueryParams = {}) => [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
  featured: () => [...productKeys.all, 'featured'] as const,
  related: (id: string) => [...productKeys.all, 'related', id] as const,
};

/**
 * Hook to fetch products with filtering and pagination
 */
export function useProducts(params: ProductQueryParams = {}) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => ProductsService.getProducts(params),
  });
}

/**
 * Hook to fetch products with infinite loading
 */
export function useInfiniteProducts(initialParams: ProductQueryParams = {}) {
  return useInfiniteQuery({
    queryKey: [...productKeys.lists(), 'infinite', initialParams],
    queryFn: ({ pageParam = 1 }) => 
      ProductsService.getProducts({
        ...initialParams,
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const totalPages = Math.ceil(lastPage.total / (initialParams.limit || 10));
      return lastPageParam < totalPages ? lastPageParam + 1 : undefined;
    },
  });
}

/**
 * Hook to fetch a single product by ID
 */
export function useProduct(id: string) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => ProductsService.getProduct(id),
    enabled: !!id, // Only run query if ID is provided
  });
}

/**
 * Hook to fetch products by category
 */
export function useProductsByCategory(categoryId: string, params: Omit<ProductQueryParams, 'categoryId'> = {}) {
  return useQuery({
    queryKey: [...productKeys.lists(), { categoryId, ...params }],
    queryFn: () => ProductsService.getProductsByCategory(categoryId, params),
    enabled: !!categoryId, // Only run query if category ID is provided
  });
}

/**
 * Hook to search products
 */
export function useProductSearch(query: string, params: Omit<ProductQueryParams, 'search'> = {}) {
  return useQuery({
    queryKey: [...productKeys.lists(), 'search', { query, ...params }],
    queryFn: () => ProductsService.searchProducts(query, params),
    enabled: !!query && query.length >= 3, // Only run query if search term is at least 3 characters
  });
}

/**
 * Hook to fetch featured products
 */
export function useFeaturedProducts() {
  return useQuery({
    queryKey: productKeys.featured(),
    queryFn: () => ProductsService.getFeaturedProducts(),
  });
}

/**
 * Hook to fetch related products
 */
export function useRelatedProducts(productId: string, limit: number = 4) {
  return useQuery({
    queryKey: productKeys.related(productId),
    queryFn: () => ProductsService.getRelatedProducts(productId, limit),
    enabled: !!productId, // Only run query if product ID is provided
  });
} 