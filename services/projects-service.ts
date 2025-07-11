import { projectsApi } from '@/lib/api';

export interface Project {
  id: string;
  title: string;
  photo_url: string;
  location: string;
  items_supplied: string[];
  brands: string[];
  created_at: string;
  updated_at: string;
  // Legacy fields for backward compatibility
  photoUrl?: string;
  itemsSupplied?: string[];
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
      const data = await projectsApi.getProjects();
      
      // Transform data for backward compatibility
      const transformedData = data.map(project => ({
        ...project,
        // Map new fields to legacy field names for existing components
        photoUrl: project.photo_url,
        itemsSupplied: project.items_supplied,
        createdAt: new Date(project.created_at),
        updatedAt: new Date(project.updated_at),
      }));

      // Apply client-side filtering if search param is provided
      let filteredData = transformedData;
      if (params?.search) {
        const searchLower = params.search.toLowerCase();
        filteredData = transformedData.filter(project =>
          project.title.toLowerCase().includes(searchLower) ||
          project.location.toLowerCase().includes(searchLower) ||
          project.items_supplied.some(item => item.toLowerCase().includes(searchLower)) ||
          project.brands.some(brand => brand.toLowerCase().includes(searchLower))
        );
      }

      // Apply client-side pagination
      const page = params?.page || 1;
      const limit = params?.limit || 10;
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginatedData = filteredData.slice(start, end);

      return {
        data: paginatedData,
        total: filteredData.length,
        page,
        limit,
      };
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  async getProject(id: string): Promise<Project | null> {
    try {
      const data = await projectsApi.getProject(id);
      
      if (!data) {
        return null;
      }

      // Transform data for backward compatibility
      return {
        ...data,
        photoUrl: data.photo_url,
        itemsSupplied: data.items_supplied,
        createdAt: new Date(data.created_at),
        updatedAt: new Date(data.updated_at),
      };
    } catch (error) {
      console.error(`Error fetching project with id ${id}:`, error);
      return null;
    }
  }
}; 