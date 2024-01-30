'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import Button from '@/components/Button';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import { ApiResponse } from '@/types/api';
import { merchAtribute } from '@/types/entities/merchandise';

import AddMerchandiseModal from './components/AddMerchandise';
import MerchandiseTable from './components/MerchandiseTable';

export default withAuth(MerchandisePage, ['authed']);

function MerchandisePage() {
  const { refetch: refetchData } = useQuery<ApiResponse<Array<merchAtribute>>>({
    queryKey: ['/merchandise'],
  });
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  return (
    <DashboardLayout>
      <section className='w-full min-h-screen h-full bg-typo-surface px-10 py-10 flex flex-col gap-4 items-start'>
        <div className='flex flex-col md:flex-row items-start justify-between w-full'>
          <div>
            <Typography variant='h6' className='text-typo-primary font-light'>
              SRE ITS 2023
            </Typography>
            <Typography
              variant='h5'
              className='text-typo-primary'
              weight='bold'
            >
              Merchandise
            </Typography>
          </div>
          <>
            <Button
              leftIcon={BiPlusCircle}
              variant='outline-primary'
              className='active:text-white active:bg-secondary-80 hover:bg-secondary-60 hover:text-white'
              onClick={() => setRegisterModalOpen(true)}
            >
              Add Merchandise
            </Button>
            {
              <AddMerchandiseModal
                onSuccess={refetchData}
                setOpen={setRegisterModalOpen}
                open={registerModalOpen}
              />
            }
          </>
        </div>
        <MerchandiseTable />
      </section>
    </DashboardLayout>
  );
}
