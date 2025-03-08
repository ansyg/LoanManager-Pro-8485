import { Permission, Role } from '../types/roles';

export const permissions: Permission[] = [
  {
    id: 'view_dashboard',
    name: 'View Dashboard',
    description: 'Access to view dashboard analytics'
  },
  {
    id: 'manage_users',
    name: 'Manage Users',
    description: 'Create, update, and delete user accounts'
  },
  {
    id: 'approve_loans',
    name: 'Approve Loans',
    description: 'Authority to approve or reject loan applications'
  },
  {
    id: 'view_reports',
    name: 'View Reports',
    description: 'Access to financial and operational reports'
  }
];

export const roles: Role[] = [
  {
    id: 'admin',
    name: 'Administrator',
    permissions: permissions
  },
  {
    id: 'manager',
    name: 'Branch Manager',
    permissions: permissions.filter(p => 
      ['view_dashboard', 'approve_loans', 'view_reports'].includes(p.id)
    )
  },
  {
    id: 'agent',
    name: 'Loan Agent',
    permissions: permissions.filter(p => 
      ['view_dashboard', 'approve_loans'].includes(p.id)
    )
  },
  {
    id: 'customer',
    name: 'Customer',
    permissions: permissions.filter(p => 
      ['view_dashboard'].includes(p.id)
    )
  }
];