import { BsDatabase } from 'react-icons/bs';
import {
  HiOutlineHome,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from 'react-icons/hi';
import { TbPaperclip } from 'react-icons/tb';

import { Navigation } from '@/types/navigate';

export const navigations: Navigation[] = [
  {
    name: 'Home',
    href: '/dashboard',
    exactMatch: true,
    icon: HiOutlineHome,
    permissions: ['users.index'],
  },
  {
    name: 'Short Link',
    href: '/dashboard/short-link',
    exactMatch: true,
    icon: TbPaperclip,
    permissions: ['users.index'],
  },
  {
    name: 'User',
    href: '/dashboard/user',
    exactMatch: true,
    icon: HiOutlineUsers,
    permissions: ['users.index'],
  },
  {
    name: 'Role and Permission',
    href: '/dashboard/role-permission',
    exactMatch: true,
    icon: HiOutlineShieldCheck,
    permissions: ['users.index'],
  },
  {
    name: 'CMS',
    href: '#',
    icon: BsDatabase,
    children: [
      {
        name: 'User',
        href: '/dashboard/cms/sponsorship',
        permissions: ['users.index'],
      },
      {
        name: 'Roles',
        href: '/dashboard/cms/staff',
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
