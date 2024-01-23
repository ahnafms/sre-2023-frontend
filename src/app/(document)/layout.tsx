import React from 'react';

import DocumentBackground from '@/app/(document)/_containers/DocumentBackground';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';

export default function DocumentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='overflow-hidden bg-secondary-50'>
      <div className='relative min-h-screen top-0 pb-12 overflow-y-hidden'>
        <DocumentBackground />
        <Navbar />
        <div className='max-w-screen-xl mx-auto'>{children}</div>
      </div>
      <Footer />
    </main>
  );
}
