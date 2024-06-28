'use client';

import Typography from '@/components/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';

import DocumentTable from './DocumentTable';

interface DocumentProps {
  type: string;
}

export default function Document({ type }: DocumentProps) {
  const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <DashboardLayout>
      <section className='w-full min-h-screen h-full bg-typo-surface px-10 py-10 flex flex-col gap-4 items-start'>
        <div>
          <Typography variant='h6' className='text-typo-primary font-light'>
            SRE ITS 2023
          </Typography>
          <Typography variant='h5' className='text-typo-primary' weight='bold'>
            {capitalize(type)}
          </Typography>
        </div>
        <DocumentTable type={type} />
      </section>
    </DashboardLayout>
  );
}
