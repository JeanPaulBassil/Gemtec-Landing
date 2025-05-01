'use client';

import Image from "next/image"
import Link from "next/link"
import { useNews } from "@/hooks/use-news"
import { format } from "date-fns"

export default function NewsPage() {
  const { filteredNews, loading, error } = useNews();
  
  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'MMMM dd, yyyy');
  };
  
  // Show loading state
  if (loading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mt-6">
            <p>Unable to load news articles. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Show empty state
  if (filteredNews.length === 0) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Stay informed about our latest developments, industry insights, and company updates
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600">No news articles available at the moment. Check back soon!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest News</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay informed about our latest developments, industry insights, and company updates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((article) => (
          <Link key={article.id} href={`/news/${article.id}`} className="block">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
              <div className="relative h-48">
                <Image
                  src={article.featuredImage || "/images/news-placeholder.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{formatDate(article.publishedAt)}</div>
                <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <div className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
} 