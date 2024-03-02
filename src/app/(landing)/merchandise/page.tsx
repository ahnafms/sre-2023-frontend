import React from 'react';

import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';

import BundleMerch from './components/BundleMerch';
import HeaderMerch from './components/HeaderMerch';
import ProductsMerch from './components/ProductsMerch';

export default function MerchandisePage() {
  return (
    <>
      <section
        className={clsxm(
          'w-full h-full bg-secondary-50 -mt-10 py-10 overflow-hidden',
        )}
      >
        <Navbar />
        {/* ================ OFFICIAL MERCHANDISE SRE ITS =============== */}
        <HeaderMerch />

        {/* ================ OUR BUNDLE =============== */}
        <BundleMerch />

        {/* ================ OUR PRODUCTS =============== */}
        <ProductsMerch />
      </section>
      <Footer />
    </>
  );
}
