import { api } from '@/lib/api-client';

export interface Project {
  id: string;
  title: string;
  photoUrl: string;
  location: string;
  itemsSupplied: string[];
  brands: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProjectsResponse {
  data: Project[];
  total: number;
  page: number;
  limit: number;
}

export interface ProjectQueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const ProjectsService = {
  async getProjects(params?: ProjectQueryParams): Promise<ProjectsResponse> {
    try {
      const response = await api.get('/projects', { params });
      
      // Handle different response structures
      let projectData: Project[] = [];
      let totalCount = 0;
      
      if (response.data) {
        if (response.data.payload && Array.isArray(response.data.payload)) {
          projectData = response.data.payload;
          totalCount = response.data.total || response.data.payload.length;
        } else if (Array.isArray(response.data)) {
          projectData = response.data;
          totalCount = response.data.length;
        } else if (response.data.data && Array.isArray(response.data.data)) {
          projectData = response.data.data;
          totalCount = response.data.total || response.data.data.length;
        }
      }
      
      return {
        data: projectData,
        total: totalCount,
        page: params?.page || 1,
        limit: params?.limit || 10
      };
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  async getProject(id: string): Promise<Project | null> {
    try {
      const response = await api.get(`/api/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project with id ${id}:`, error);
      return null;
    }
  }
}; 