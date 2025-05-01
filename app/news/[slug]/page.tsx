'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { NewsService, News } from "@/services/news-service";
import { format } from "date-fns";

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [article, setArticle] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Fetch article data
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await NewsService.getNewsBySlug(slug);
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch article'));
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchArticle();
    }
  }, [slug]);
  
  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'MMMM dd, yyyy');
  };
  
  // Format content with line breaks
  const formatContent = (content: string) => {
    // Replace markdown headers with HTML tags
    let formattedContent = content
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold my-4">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold my-3">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold my-2">$1</h3>')
      // Replace markdown paragraphs with HTML paragraphs
      .replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote)(.+)$/gm, '<p class="my-4">$1</p>')
      // Replace line breaks with <br>
      .replace(/\n/g, '<br />');
    
    return formattedContent;
  };
  
  // Show loading state
  if (loading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (error || !article) {
    return (
      <div className="container py-12">
        <Link 
          href="/news" 
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to News
        </Link>
        
        <div className="text-center">
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mt-6">
            <p>Article not found or unable to load. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Link 
        href="/news" 
        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mb-8"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to News
      </Link>

      <article className="max-w-4xl mx-auto">
        {article.featuredImage && (
          <div className="relative h-96 mb-8">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="text-sm text-blue-600 mb-4">{formatDate(article.publishedAt)}</div>
        <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        
        {article.author && (
          <div className="text-gray-500 mb-6">By {article.author}</div>
        )}
        
        {article.summary && (
          <p className="lead text-xl text-gray-600 mb-8">
            {article.summary}
          </p>
        )}
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
        </div>
      </article>
    </div>
  );
} 