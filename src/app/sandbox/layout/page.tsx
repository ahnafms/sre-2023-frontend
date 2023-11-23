import React from 'react';

import Footer from '@/layouts/Footer';

export default function LayoutSandbox() {
  return (
    <section>
      <div className='min-h-screen text-2xl md:text-6xl text-center font-extrabold flex items-center justify-center'>
        Footer nya di bawah
      </div>
      <Footer />
    </section>
  );
}
