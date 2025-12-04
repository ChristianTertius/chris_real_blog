export interface User {
  name: string;
  email: string;
  fullname: string;
  current_role: string;
  current_location: string;
  description: string;
  lovetodo: string;
  email_verified_at: string;
  password: string;
  remember_token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  user: User;
  token: string;
}

export interface Bio {
  id: number;
  year: number;
  description: string;
  techs: string[];
  created_at: string;
  updated_at: string;
}

export interface BioRequest {
  year: number;
  description: string;
  techs: string[];
}

// works types
export interface Work {
  id: number;
  role: string;
  place: string;
  date: string;
  description: string[];
  techs: string[];
  created_at: string;
  updated_at: string;
}

export interface WorkRequest {
  role: string;
  place: string;
  description: string;
  techs: string[];
}

export interface Project {
  id: number;
  name: string;
  type: string;
  year: number;
  month?: number;
  achievement: string;
  link_github: string;
  link_website: string;
  techs: string[];
  created_at: string;
  updated_at: string;
}

export interface ProjectRequest {
  name: string;
  type: string;
  year: number;
  achievement: string;
  link_github: string;
  link_website: string;
  techs: string[];
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
  content_image?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
