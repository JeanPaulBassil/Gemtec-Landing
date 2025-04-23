'use client';

import { useProduct, useRelatedProducts } from '@/hooks/queries';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailViewProps {
  productId: string;
}

export default function ProductDetailView({ productId }: ProductDetailViewProps) {
  const { 
    data: product, 
    isLoading: isProductLoading, 
    isError: isProductError 
  } = useProduct(productId);
  
  const { 
    data: relatedProducts,
    isLoading: isRelatedLoading
  } = useRelatedProducts(productId);

  if (isProductLoading) {
    return (
      <div className="w-full py-20 flex justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (isProductError || !product) {
    return (
      <div className="w-full py-20 text-center">
        <h3 className="text-xl font-semibold text-red-600">Error loading product</h3>
        <p className="mt-2 text-gray-600 mb-4">This product may not exist or there was an error</p>
        <Link href="/products" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/products" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative rounded-lg overflow-hidden border h-[400px]">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
              No image available
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          {product.category && (
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                {product.category.name}
              </span>
            </div>
          )}
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Download Specifications
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <div key={related.id} className="border rounded-lg overflow-hidden shadow-sm">
                <Link href={`/products/${related.id}`}>
                  <div className="relative h-48 bg-gray-200">
                    {related.imageUrl ? (
                      <Image
                        src={related.imageUrl}
                        alt={related.name}
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
                    <h3 className="font-semibold line-clamp-1">{related.name}</h3>
                    <p className="text-gray-600 mt-1 text-sm line-clamp-2">{related.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 