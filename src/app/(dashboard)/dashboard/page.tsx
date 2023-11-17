'use client';

import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import useAuthStore from '@/stores/useAuthStore';

export default withAuth(DashboardHomePage, ['authed']);

function DashboardHomePage() {
  const { user } = useAuthStore();
  return (
    <div className='flex flex-col w-full h-full text-center justify-center items-center mt-24'>
      <Typography className='text-bold'>Welcome back</Typography>
      <Typography>{user?.name ?? 'user'}</Typography>
    </div>
  );
}
