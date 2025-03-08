import { useContext, createContext } from 'react';
import { User, Permission } from '../types/roles';
import { roles } from '../config/permissions';

interface AuthContextType {
  user: User | null;
  hasPermission: (permissionId: string) => boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  hasPermission: () => false,
  login: async () => {},
  logout: () => {}
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const hasPermission = (user: User | null, permissionId: string): boolean => {
  if (!user) return false;
  const userRole = roles.find(role => role.id === user.role);
  return userRole?.permissions.some(p => p.id === permissionId) ?? false;
};