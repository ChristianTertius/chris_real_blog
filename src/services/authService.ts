import api from '@/lib/api';
import type { LoginRequest, LoginResponse, User } from '@/types';

export const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>('/login', credentials);
    localStorage.setItem('auth_token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  },

  logout: async (): Promise<void> => {
    await api.post('/logout');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },

  me: async (): Promise<User> => {
    const { data } = await api.get<{ user: User }>('/me');
    return data.user;
  },

  getStoredUser: (): User | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('auth_token');
  },
};
