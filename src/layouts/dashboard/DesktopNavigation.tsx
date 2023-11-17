import * as React from 'react';

import NextImage from '@/components/NextImage';
import Navigation from '@/layouts/dashboard/Navigation';

export default function DesktopNavigation() {
  return (
    <div className='hidden h-full lg:fixed lg:inset-y-0 lg:flex lg:w-full lg:flex-col lg:pt-8 lg:pb-4'>
      {/* Sidebar component */}
      <div className='fixed bg-secondary-80 overflow-hidden flex min-h-full w-72 top-0'>
        {/*Sidebar Background*/}
        <NextImage
          src='/dashboard/sidebar.png'
          className='absolute w-full -z-10'
          width='1000'
          height='100'
          alt='sidebar-background'
        />
        {/* <div className='absolute w-full bottom-0 -z-10'> */}
        {/*   <NextImage */}
        {/*     src='/dashboard/industry.png' */}
        {/*     priority */}
        {/*     className='w-full absolute scale-150 bottom-20 -left-10' */}
        {/*     width='1000' */}
        {/*     height='100' */}
        {/*     alt='sidebar-industry-ornament' */}
        {/*   /> */}
        {/*   <NextImage */}
        {/*     src='/dashboard/star.png' */}
        {/*     className='absolute w-10 left-10 bottom-40 -z-10' */}
        {/*     width='400' */}
        {/*     height='100' */}
        {/*     alt='sidebar-industry-ornament' */}
        {/*   /> */}
        {/*   <NextImage */}
        {/*     src='/dashboard/star.png' */}
        {/*     className='absolute w-7 right-8 bottom-40 -z-10' */}
        {/*     width='400' */}
        {/*     height='100' */}
        {/*     alt='sidebar-industry-ornament' */}
        {/*   /> */}
        {/*   <NextImage */}
        {/*     src='/dashboard/star.png' */}
        {/*     className='absolute w-6 bottom-72 right-10 -z-10' */}
        {/*     width='400' */}
        {/*     height='100' */}
        {/*     alt='sidebar-industry-ornament' */}
        {/*   /> */}
        {/*   <NextImage */}
        {/*     src='/dashboard/star.png' */}
        {/*     className='absolute w-10 bottom-40 md:hidden -z-10' */}
        {/*     width='400' */}
        {/*     height='100' */}
        {/*     alt='sidebar-industry-ornament' */}
        {/*   /> */}
        {/* </div> */}
        {/* Navigation */}
        <Navigation className='mt-6 flex w-full flex-col gap-6' />
      </div>
    </div>
  );
}
