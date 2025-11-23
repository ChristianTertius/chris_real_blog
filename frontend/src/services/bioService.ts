import api from '@/lib/api';
import type { Bio, BioRequest, ApiResponse } from '@/types';

export const bioService = {
  // Get all bios
  getAll: async (): Promise<Bio[]> => {
    const { data } = await api.get<ApiResponse<Bio[]>>('/bios');
    return data.data;
  },

  // Get single bio
  getById: async (id: number): Promise<Bio> => {
    const { data } = await api.get<ApiResponse<Bio>>(`/bios/${id}`);
    return data.data;
  },

  // Create bio
  create: async (bio: BioRequest): Promise<Bio> => {
    const { data } = await api.post<ApiResponse<Bio>>('/bios', bio);
    return data.data;
  },

  // Update bio
  update: async (id: number, bio: Partial<BioRequest>): Promise<Bio> => {
    const { data } = await api.put<ApiResponse<Bio>>(`/bios/${id}`, bio);
    return data.data;
  },

  // Delete bio
  delete: async (id: number): Promise<void> => {
    await api.delete(`/bios/${id}`);
  },
};
