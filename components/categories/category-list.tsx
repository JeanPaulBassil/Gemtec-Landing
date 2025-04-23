'use client';

import { useTopCategories } from '@/hooks/queries';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryList() {
  const { data: categories, isLoading, isError } = useTopCategories();

  if (isLoading) {
    return (
      <div className="w-full py-12 flex justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full py-12 text-center">
        <h3 className="text-lg font-semibold text-red-600">Error loading categories</h3>
        <p className="mt-2 text-gray-600">Please try again later</p>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <h3 className="text-lg font-semibold">No categories found</h3>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-8 text-center">Product Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/products?categoryId=${category.id}`}
            className="block group"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 h-full">
              <div className="relative h-40 bg-gray-100">
                {category.imageUrl ? (
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                    {category.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                    {category.description}
                  </p>
                )}
                <div className="mt-3 text-blue-600 text-sm font-medium flex items-center">
                  Browse Products
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 