import { FiFileText, FiUserPlus, FiUsers } from 'react-icons/fi';

import { Navigation } from '@/types/navigate';

export const navigations: Navigation[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    exactMatch: true,
    icon: FiFileText,
    permissions: ['users.index'],
  },
  {
    name: 'Manajemen User',
    href: '#',
    icon: FiUsers,
    children: [
      {
        name: 'User',
        href: '/dashboard/admin/user',
        icon: FiUsers,
        permissions: ['users.index'],
      },
      {
        name: 'Roles',
        href: '/dashboard/admin/role',
        icon: FiUserPlus,
        permissions: [
          'admin_role.update',
          'admin_role.delete',
          'admin_permission.update',
          'admin_permission.delete',
          'admin_role_has_permission.update',
          'admin_role_has_permission.delete',
        ],
      },
    ],
  },
];
