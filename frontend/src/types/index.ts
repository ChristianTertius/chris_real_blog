export interface User {
  id: number;
  username: string;
  email: string;
  fullname: string;
  current_role: string;
  current_location: string;
  description: string;
  lovetodo: string;
  email_verified_at?: string
  created_at: string;
  updated_at: string;
  //             $table -> string('name');
  // $table -> string('email') -> unique();
  // $table -> string('fullname');
  // $table -> string('current_role');
  // $table -> string('current_location');
  // $table -> text('description');
  // $table -> text('lovetodo');
  // $table -> timestamp('email_verified_at') -> nullable();
  // $table -> string('password');
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
  description: string;
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

// project types
export interface Project {
  id: number;
  name: string;
  type: string;
  year: number;
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

// api response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
}
