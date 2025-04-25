import { useState, useEffect } from 'react';
import { JobOffering, JobOfferingsService } from '@/services/job-offerings-service';

interface UseJobOfferingsOptions {
  initialFilters?: {
    search?: string;
    location?: string;
    department?: string;
  };
}

export function useJobOfferings(options: UseJobOfferingsOptions = {}) {
  const [jobOfferings, setJobOfferings] = useState<JobOffering[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const [searchQuery, setSearchQuery] = useState(options.initialFilters?.search || '');
  const [selectedLocation, setSelectedLocation] = useState(options.initialFilters?.location || 'all');
  const [selectedDepartment, setSelectedDepartment] = useState(options.initialFilters?.department || 'all');
  
  // Fetch job offerings data
  useEffect(() => {
    const fetchJobOfferings = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await JobOfferingsService.getJobOfferings();
        setJobOfferings(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch job offerings'));
        console.error('Error fetching job offerings:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobOfferings();
  }, []);
  
  // Filter job offerings based on search query and selected filters
  const filteredJobOfferings = jobOfferings.filter(position => {
    const matchesSearch = searchQuery === '' ? true :
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.countryName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = selectedLocation === 'all' ? true : 
      position.countryName.toLowerCase() === selectedLocation.toLowerCase();
    
    const matchesDepartment = selectedDepartment === 'all' ? true : 
      position.department.toLowerCase() === selectedDepartment.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesDepartment;
  });
  
  // Get unique locations and departments for filter dropdowns
  const locations = ['all', ...Array.from(new Set(jobOfferings.map(position => position.countryName.toLowerCase())))];
  const departments = ['all', ...Array.from(new Set(jobOfferings.map(position => position.department.toLowerCase())))];
  
  return {
    // Data
    jobOfferings,
    filteredJobOfferings,
    locations,
    departments,
    
    // Status
    loading,
    error,
    
    // Filters
    searchQuery,
    setSearchQuery,
    selectedLocation,
    setSelectedLocation,
    selectedDepartment,
    setSelectedDepartment,
    
    // Functions
    getJobOffering: JobOfferingsService.getJobOffering
  };
} 