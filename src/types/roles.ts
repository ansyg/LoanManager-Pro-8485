export type UserRole = 'admin' | 'manager' | 'agent' | 'customer';

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface Role {
  id: UserRole;
  name: string;
  permissions: Permission[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}