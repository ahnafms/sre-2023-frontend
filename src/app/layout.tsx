import '../styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Anton, Epilogue } from 'next/font/google';

import config from '@/constant/seo';
import clsxm from '@/lib/clsxm';
import Providers from '@/providers';

export const metadata: Metadata = config;

const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-epilogue',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsxm(epilogue.variable, anton.variable)}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
