import { useState, useEffect, useCallback } from 'react';
import { ProjectsService, type Project, type ProjectQueryParams } from '@/services/projects-service';

export type { Project } from '@/services/projects-service';

export function useProjects(params: ProjectQueryParams = {}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  // Memoize the fetch function to prevent infinite loops
  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ProjectsService.getProjects(params);
      
      // Log the response for debugging
      console.log('Projects response:', response);
      
      setProjects(response.data);
      setTotal(response.total);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  }, [params.search, params.page, params.limit]); // Only include the params we actually use

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]); // fetchProjects is now memoized and will only change when params change

  return { projects, loading, error, total };
} 