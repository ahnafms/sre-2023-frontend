'use client';

import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import useAuthStore from '@/stores/useAuthStore';

export default withAuth(DashboardHomePage, ['authed']);

function DashboardHomePage() {
  const { user } = useAuthStore();
  return (
    <div className='flex w-full h-full text-center justify-center items-center'>
      <Typography>Welcome {user?.name ?? 'user'}</Typography>
    </div>
  );
}
