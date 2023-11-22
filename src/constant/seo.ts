import type { Metadata } from 'next';

// TODO: ADJUST CONFIGURATION FOR PRODUCTION

const config: Metadata = {
  title: { default: 'SRE ITS 2023', template: '%s | SRE ITS 2023' },
  description:
    'SRE ITS exist to develop innovation, exchange ideas, and facilitate students as active learners in the Renewable Energy field.',
  openGraph: {
    type: 'website',
    locale: 'in_ID',
    url: 'https://sre-its.com',
    siteName: 'SRE ITS 2023',
  },
  twitter: {
    creator: '@sre_its',
    site: 'https://twitter.com/sre_its',
    card: 'summary_large_image',
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
  metadataBase: new URL('https://sre-its.com'),
};

export default config;
