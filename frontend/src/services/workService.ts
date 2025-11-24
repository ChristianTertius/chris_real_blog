import api from "@/lib/api";
import type { ApiResponse, Work, WorkRequest } from "@/types";

export const workService = {
  // get all
  getAll: async (): Promise<Work[]> => {
    const { data } = await api.get<ApiResponse<Work[]>>('/works')
    return data.data
  },

  // get single
  geById: async (id: number): Promise<Work> => {
    const { data } = await api.get<ApiResponse<Work>>(`/works/${id}`)
    return data.data;
  },

  // create works
  create: async (work: WorkRequest): Promise<Work> => {
    const { data } = await api.post<ApiResponse<Work>>('/works', work)
    return data.data
  },

  // update works
  update: async (id: number, work: Partial<WorkRequest>): Promise<Work> => {
    const { data } = await api.put<ApiResponse<Work>>(`/works/${id}`, work)
    return data.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/works/${id}`)
  }

}
