// import { createContext, useContext, useState, useEffect } from 'react';
// import type { ReactNode } from 'react';
// import type { User } from '@/types';
// import { authService } from '@/services/authService';
//
// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
//   loading: boolean;
// }
//
// const AuthContext = createContext<AuthContextType | undefined>(undefined);
//
// interface AuthProviderProps {
//   children: ReactNode;
// }
//
// export function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const storedUser = authService.getStoredUser();
//     if (storedUser) {
//       setUser(storedUser);
//     }
//     setLoading(false);
//   }, []);
//
//   const login = async (email: string, password: string) => {
//     const response = await authService.login({ email, password });
//     setUser(response.user);
//   };
//
//   const logout = async () => {
//     await authService.logout();
//     setUser(null);
//   };
//
//   const value: AuthContextType = {
//     user,
//     isAuthenticated: !!user,
//     login,
//     logout,
//     loading,
//   };
//
//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
//
// export function useAuth(): AuthContextType {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// }
