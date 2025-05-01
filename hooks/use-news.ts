import { useState, useEffect } from 'react';
import { News, NewsService } from '@/services/news-service';

interface UseNewsOptions {
  initialFilters?: {
    search?: string;
  };
}

export function useNews(options: UseNewsOptions = {}) {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const [searchQuery, setSearchQuery] = useState(options.initialFilters?.search || '');
  
  // Fetch news data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await NewsService.getNews();
        setNews(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch news'));
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, []);
  
  // Filter news based on search query
  const filteredNews = news.filter(article => {
    const matchesSearch = searchQuery === '' ? true :
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.summary || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.author || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });
  
  // Sort news by publishedAt date (newest first)
  const sortedNews = [...filteredNews].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return dateB - dateA;
  });
  
  return {
    // Data
    news,
    filteredNews: sortedNews,
    
    // Status
    loading,
    error,
    
    // Filters
    searchQuery,
    setSearchQuery,
    
    // Functions
    getNewsBySlug: NewsService.getNewsBySlug,
    getNewsById: NewsService.getNewsById
  };
} 