'use client';

import { useJobs } from '@/hooks/queries';
import { useState } from 'react';
import { Calendar, MapPin, Briefcase, Filter } from 'lucide-react';
import Link from 'next/link';

export default function JobListings() {
  const [filter, setFilter] = useState('');
  const { data, isLoading, isError } = useJobs({ category: filter });
  const [showFilters, setShowFilters] = useState(false);

  const categories = data?.jobs
    ? [...new Set(data.jobs.map(job => job.category))]
    : [];

  const handleFilterChange = (category: string) => {
    setFilter(category === filter ? '' : category);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 text-red-700 p-4 rounded-md">
          <p className="font-medium">Error loading job listings</p>
          <p>Please try again later or contact support.</p>
        </div>
      </div>
    );
  }

  if (!data?.jobs || data.jobs.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">No job openings available</h3>
          <p className="mt-2 text-gray-500">
            We don't have any open positions at the moment. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Current Job Openings</h2>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>
      
      {showFilters && categories.length > 0 && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Filter by category:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-3 py-1 text-sm rounded-full ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
            {filter && (
              <button
                onClick={() => setFilter('')}
                className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-700 hover:bg-red-200"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {data.jobs.map((job) => (
          <Link 
            href={`/jobs/${job.id}`} 
            key={job.id}
            className="block bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition duration-150"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{job.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{job.company || 'Gemtec'}</p>
                
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                  {job.location && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                      {job.location}
                    </div>
                  )}
                  {job.type && (
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1 text-gray-400" />
                      {job.type}
                    </div>
                  )}
                  {job.postedDate && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                      Posted: {formatDate(job.postedDate)}
                    </div>
                  )}
                </div>
              </div>
              
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {job.category}
              </span>
            </div>
            
            {job.shortDescription && (
              <p className="mt-3 text-gray-600 line-clamp-2">{job.shortDescription}</p>
            )}
            
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
              <span className="text-blue-600 text-sm font-medium">View details &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 