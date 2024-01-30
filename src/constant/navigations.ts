import { BsCalendar2Fill, BsDatabase } from 'react-icons/bs';
import {
  HiOutlineHome,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from 'react-icons/hi';
import { HiLightBulb } from 'react-icons/hi';
import { ImTrophy } from 'react-icons/im';
import { IoDocumentsOutline } from 'react-icons/io5';
import { RiArticleLine } from 'react-icons/ri';
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
    name: 'Staff',
    href: '/dashboard/staff',
    exactMatch: true,
    icon: HiOutlineUsers,
    permissions: ['users.index'],
  },
  {
    name: 'Document',
    href: '#',
    icon: IoDocumentsOutline,
    children: [
      {
        name: 'Outlook',
        href: '/dashboard/outlook',
        permissions: ['users.index'],
      },
      {
        name: 'Journal',
        href: '/dashboard/journal',
        permissions: ['users.index'],
      },
    ],
  },
  {
    name: 'Article',
    href: '#',
    icon: RiArticleLine,
    children: [
      {
        name: 'Event',
        href: '/dashboard/event',
        permissions: ['users.index'],
      },
      {
        name: 'Akademia',
        href: '/dashboard/akademia',
        permissions: ['users.index'],
      },
      {
        name: 'Achievement',
        href: '/dashboard/achievement',
        permissions: ['users.index'],
      },
    ],
  },
  {
    name: 'CMS',
    href: '#',
    icon: BsDatabase,
    children: [
      {
        name: 'Sponsorship',
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

export const landingNavigations: Navigation[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'middleSections',
    href: '#',
    children: [
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
      {
        name: 'Merchandise',
        href: '/merchandise',
      },
    ],
  },
  {
    name: 'More',
    href: '#',
    children: [
      {
        name: 'SRE Outlook',
        href: '/outlook',
        icon: BsCalendar2Fill,
      },
      {
        name: 'SRE Insight',
        href: '/insight',
        icon: HiLightBulb,
      },
      {
        name: 'Achievement',
        href: '/achievement',
        icon: ImTrophy,
      },
    ],
  },
];
