'use client';

import Button from '@/components/Button';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import useAuthStore from '@/stores/useAuthStore';

export default withAuth(DashboardPage, ['authed']);

function DashboardPage() {
  const { user, logout } = useAuthStore();

  return (
    <div className='w-full min-h-screen p-6 flex flex-col gap-4 items-start bg-typo-white'>
      <Typography>Stored User</Typography>
      <pre className='text-typo-dark'>{JSON.stringify(user, null, 2)}</pre>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
