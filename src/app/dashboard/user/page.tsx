'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError, AxiosResponse } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import Button from '@/components/Button';
import withAuth from '@/components/hoc/withAuth';
import Table from '@/components/table/Table';
import Typography from '@/components/Typography';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiResponse } from '@/types/api';
import { DashboardUser } from '@/types/entities/dashboardUser';

import RegisterUserModal from './components/RegisterUserModal';
import UpdateUserModal from './components/UpdateUserModal';

export default withAuth(DashboardUserPage, ['authed']);

function DashboardUserPage() {
  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);
  const [registerModalOpen, setRegisterModalOpen] = React.useState(false);
  const [selectedStaff, setSelectedStaff] = React.useState<
    DashboardUser | undefined
  >();

  const {
    data: userResponse,
    isLoading,
    refetch: refetchUser,
  } = useQuery<ApiResponse<DashboardUser[]>>({ queryKey: ['/user'] });

  const { mutate: deleteStaff } = useMutation<
    AxiosResponse<ApiResponse<void>>,
    AxiosError<ApiError>,
    { id: string }
  >({
    mutationFn: data =>
      api.delete<ApiResponse<void>>(`/user/${data.id}/`, { toastify: true }),
    onSuccess: () => refetchUser(),
  });

  const { dialog } = useDialogStore();

  function openWarningDelete(user: DashboardUser) {
    dialog({
      title: 'Apakah Anda Yakin?',
      description: `Hapus data user '${user.name}'?`,
      submitText: 'Delete',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => deleteStaff({ id: user.id }))
      .then(() => refetchUser());
  }

  const columns: ColumnDef<DashboardUser>[] = [
    {
      accessorKey: 'no',
      header: 'No',
      cell: props => <span>{props.row.index + 1}</span>,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: props => <span>{`${props.getValue()}`}</span>,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'email',
      header: 'E-mail',
      cell: props => <span>{`${props.getValue()}`}</span>,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: props => <span>{`${props.getValue()}`}</span>,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: 'action',
      header: 'Action',
      cell: info => (
        <div className='flex gap-2 items-center'>
          <Button
            variant='outline-primary'
            onClick={() => {
              setUpdateModalOpen(true);
              setSelectedStaff(info.row.original);
            }}
          >
            Edit
          </Button>
          <Button
            variant='danger'
            onClick={() => openWarningDelete(info.row.original)}
          >
            Hapus
          </Button>
        </div>
      ),
    },
  ];
  return (
    <DashboardLayout>
      <section className='w-full bg-typo-surface px-10 py-10 min-h-screen flex flex-col gap-4 items-start'>
        <Typography variant='btn' font='epilogue' weight='medium'>
          SRE ITS 2023
        </Typography>
        <Typography as='h5' variant='h5' font='epilogue' weight='semibold'>
          User Database
        </Typography>

        <Table
          className='text-black'
          data={userResponse?.data ?? []}
          columns={columns}
          isLoading={isLoading}
          extraContent={
            <>
              <Button
                leftIcon={BiPlusCircle}
                variant='outline-primary'
                onClick={() => setRegisterModalOpen(true)}
                className='z-40'
              >
                Tambah User
              </Button>
              {
                <RegisterUserModal
                  onSuccess={refetchUser}
                  setOpen={setRegisterModalOpen}
                  open={registerModalOpen}
                />
              }
            </>
          }
          withFilter
          withPaginationControl
          withPaginationCount
        />

        {selectedStaff && (
          <UpdateUserModal
            open={updateModalOpen}
            setOpen={setUpdateModalOpen}
            selectedUser={selectedStaff}
            setSelectedUser={setSelectedStaff}
            onSuccess={refetchUser}
          />
        )}
      </section>
    </DashboardLayout>
  );
}
