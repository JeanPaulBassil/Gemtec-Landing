'use client';

import { useQuery } from '@tanstack/react-query';
import { CategoriesService, CategoryQueryParams } from '@/lib/services';

// Query keys
export const categoryKeys = {
  all: ['categories'] as const,
  lists: () => [...categoryKeys.all, 'list'] as const,
  list: (filters: CategoryQueryParams = {}) => [...categoryKeys.lists(), filters] as const,
  details: () => [...categoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...categoryKeys.details(), id] as const,
  bySlug: (slug: string) => [...categoryKeys.details(), 'slug', slug] as const,
  top: () => [...categoryKeys.all, 'top'] as const,
  subs: (parentId: string) => [...categoryKeys.all, 'subs', parentId] as const,
};

/**
 * Hook to fetch all categories with optional filtering
 */
export function useCategories(params: CategoryQueryParams = {}) {
  return useQuery({
    queryKey: categoryKeys.list(params),
    queryFn: () => CategoriesService.getCategories(params),
  });
}

/**
 * Hook to fetch a single category by ID
 */
export function useCategory(id: string) {
  return useQuery({
    queryKey: categoryKeys.detail(id),
    queryFn: () => CategoriesService.getCategory(id),
    enabled: !!id, // Only run query if ID is provided
  });
}

/**
 * Hook to fetch a category by slug
 */
export function useCategoryBySlug(slug: string) {
  return useQuery({
    queryKey: categoryKeys.bySlug(slug),
    queryFn: () => CategoriesService.getCategoryBySlug(slug),
    enabled: !!slug, // Only run query if slug is provided
  });
}

/**
 * Hook to fetch top-level categories
 */
export function useTopCategories() {
  return useQuery({
    queryKey: categoryKeys.top(),
    queryFn: () => CategoriesService.getTopCategories(),
  });
}

/**
 * Hook to fetch subcategories for a given parent
 */
export function useSubcategories(parentId: string) {
  return useQuery({
    queryKey: categoryKeys.subs(parentId),
    queryFn: () => CategoriesService.getSubcategories(parentId),
    enabled: !!parentId, // Only run query if parent ID is provided
  });
} 