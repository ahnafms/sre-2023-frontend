import type { Metadata } from 'next';

// TODO: ADJUST CONFIGURATION FOR PRODUCTION

const config: Metadata = {
  metadataBase: new URL('https://www.sre-its.com'),
  title: { default: 'SRE ITS', template: '%s | SRE ITS' },
  description:
    'SRE ITS exist to develop innovation, exchange ideas, and facilitate students as active learners in the Renewable Energy field.',
  openGraph: {
    url: 'https://sre-its.com',
    title: 'SRE ITS',
    description:
      'SRE ITS exist to develop innovation, exchange ideas, and facilitate students as active learners in the Renewable Energy field.',
    siteName: 'SRE ITS',
    images: [{ url: '/images/og.jpeg' }],
    type: 'website',
    locale: 'in_ID',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sre_its',
    title: 'SRE ITS',
    description:
      'SRE ITS exist to develop innovation, exchange ideas, and facilitate students as active learners in the Renewable Energy field.',
    site: 'https://twitter.com/sre_its',
    images: [{ url: '/images/og.jpeg' }],
  },
  keywords: ['sre', 'sre its', 'sre its 2023'],
  robots: 'index, follow',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
};

export default config;
