import { IconType } from 'react-icons';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

type FooterLink = {
  name: string;
  href: string;
};

export const footerLink: FooterLink[] = [
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
    href: '/coming-soon',
  },
  {
    name: 'Others',
    href: '/coming-soon',
  },
];

type FooterSocialMedia = {
  name: string;
  href: string;
  icon: IconType;
};

export const footerSocialMedia: FooterSocialMedia[] = [
  {
    name: 'YouTube',
    href: '/coming-soon',
    icon: FaYoutube,
  },
  {
    name: 'Instagram',
    href: '/coming-soon',
    icon: FaInstagram,
  },
  {
    name: 'TikTok',
    href: '/coming-soon',
    icon: FaTiktok,
  },
];
