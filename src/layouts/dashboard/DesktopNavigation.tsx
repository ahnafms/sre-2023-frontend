import * as React from 'react';

import Navigation from '@/layouts/dashboard/Navigation';

export default function DesktopNavigation() {
  return (
    <div className='hidden h-full lg:fixed lg:inset-y-0 lg:flex lg:w-full lg:flex-col lg:pt-8 lg:pb-4'>
      {/* Sidebar component */}
      <div className='fixed bg-secondary-80 flex min-h-full w-64 top-0 overflow-y-auto'>
        {/* Navigation */}
        <Navigation className='mt-6 flex w-full flex-col gap-6' />
      </div>
    </div>
  );
}
