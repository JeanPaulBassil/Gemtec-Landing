'use client';

import { useProducts } from '@/hooks/queries';
import { ProductQueryParams } from '@/lib/services';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductGridProps {
  initialParams?: ProductQueryParams;
  title?: string;
}

export default function ProductGrid({ initialParams = {}, title = 'Our Products' }: ProductGridProps) {
  const [params, setParams] = useState<ProductQueryParams>({
    page: 1,
    limit: 12,
    ...initialParams,
  });

  const { data, isLoading, isError, isPending } = useProducts(params);

  const handlePageChange = (newPage: number) => {
    setParams((prev) => ({ ...prev, page: newPage }));
  };

  if (isLoading || isPending) {
    return (
      <div className="w-full py-20 flex justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full py-20 text-center">
        <h3 className="text-xl font-semibold text-red-600">Error loading products</h3>
        <p className="mt-2 text-gray-600">Please try again later</p>
      </div>
    );
  }

  if (!data || data.data.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <h3 className="text-xl font-semibold">No products found</h3>
        <p className="mt-2 text-gray-600">Try changing your search criteria</p>
      </div>
    );
  }

  const totalPages = Math.ceil(data.total / (params.limit || 12));

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.data.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative h-48 bg-gray-200">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 mt-1 text-sm line-clamp-2">{product.description}</p>
                {product.category && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {product.category.name}
                  </span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-12">
          <button
            onClick={() => handlePageChange(Math.max(1, params.page! - 1))}
            disabled={params.page === 1}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full ${
                  params.page === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(params.page! + 1)}
            disabled={params.page === totalPages}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
} 