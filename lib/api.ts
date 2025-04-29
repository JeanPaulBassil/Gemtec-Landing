import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Project {
  id: string;
  title: string;
  photoUrl: string;
  itemsSupplied: string[];
  location: string;
  brands: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const projectsApi = {
  async getProjects() {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  async getProject(id: string) {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project with id ${id}:`, error);
      return null;
    }
  },
};

export default api; 