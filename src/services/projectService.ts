import api from '@/lib/api';
import type { Project, ProjectRequest, ApiResponse } from '@/types';

export const projectService = {

  // Get all projects
  getAll: async (): Promise<Project[]> => {
    const { data } = await api.get<ApiResponse<Project[]>>('/projects');
    return data.data;
  },

  // Get single project
  getById: async (id: number): Promise<Project> => {
    const { data } = await api.get<ApiResponse<Project>>(`/projects/${id}`);
    return data.data;
  },

  // Create project
  create: async (project: ProjectRequest): Promise<Project> => {
    const { data } = await api.post<ApiResponse<Project>>('/projects', project);
    return data.data;
  },

  // Update project
  update: async (id: number, project: Partial<ProjectRequest>): Promise<Project> => {
    const { data } = await api.put<ApiResponse<Project>>(`/projects/${id}`, project);
    return data.data;
  },

  // Delete project
  delete: async (id: number): Promise<void> => {
    await api.delete(`/projects/${id}`);
  }
}
