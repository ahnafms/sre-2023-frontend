'use client';

import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';

import SponsorshipTable from './components/SponsorshipTable';

export default withAuth(SponsorshipPage, ['authed']);

function SponsorshipPage() {
  return (
    <section className='w-full min-h-screen h-full bg-typo-surface px-10 py-10 flex flex-col gap-4 items-start'>
      <div>
        <Typography variant='h6' className='text-typo-primary font-light'>
          SRE ITS 2023
        </Typography>
        <Typography variant='h5' className='text-typo-primary' weight='bold'>
          Sponsoship
        </Typography>
      </div>
      <SponsorshipTable />
    </section>
  );
}
