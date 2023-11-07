'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import { format } from 'date-fns';
import React from 'react';

import Button from '@/components/Button';
import withAuth from '@/components/hoc/withAuth';
import Table from '@/components/table/Table';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError } from '@/types/api';
import { ApiResponse } from '@/types/api';
import { RoleAuthColumn } from '@/types/entities/role';
import { RoleHasPermission } from '@/types/entities/role';

import EditRoleAuthModal from './components/EditRoleAuthModal';

export default withAuth(DashboardPage, ['authed']);

function DashboardPage() {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<{
    id: number;
    permission_id: number;
    role_id: number;
  }>();

  const {
    data: queryData,
    isLoading,
    refetch: refetchData,
  } = useQuery<ApiResponse<Array<RoleAuthColumn>>>({
    queryKey: ['/role-has-permission'],
  });

  const columns: ColumnDef<RoleAuthColumn>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'role_name',
      header: 'Role',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'permission_route',
      header: 'Permission',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'last_update',
      header: 'Last Updated',
      accessorFn: row => format(new Date(row.last_update), 'dd MMMM yyyy'),
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: 'action',
      header: 'Action',
      cell: info => {
        const value = {
          id: info.row.original.id,
          permission_id: info.row.original.permission_id,
          role_id: info.row.original.role_id,
        };
        return (
          <div className='flex gap-3'>
            <Button
              className='relative'
              variant='outline-primary'
              onClick={() => {
                setSelectedData(value), setEditModalOpen(true);
              }}
            >
              Edit
            </Button>
            <Button
              className='relative'
              variant='danger'
              onClick={() => openWarningDelete(info.row.original)}
            >
              Hapus
            </Button>
          </div>
        );
      },
    },
  ];

  // Mutation for delete
  const { mutate: deleteRoles } = useMutation<
    unknown,
    AxiosError<ApiError>,
    { id: number }
  >({
    mutationFn: async data => {
      await api.delete<RoleHasPermission>(`role-has-permission/${data.id}`, {
        toastify: true,
      });
    },
    onSuccess: () => refetchData(),
  });

  // Dialog for delete

  const { dialog } = useDialogStore();

  function openWarningDelete({ id }: { id: number }) {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description: `Hapus role dengan ID: ${id} ?`,
      submitText: 'Delete',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => deleteRoles({ id: id }))
      .then(() => refetchData());
  }

  return (
    <div className='w-full bg-typo-surface px-10 py-10 min-h-screen flex flex-col gap-4 items-start'>
      <div>
        <Typography variant='h6' className='text-typo-primary font-light'>
          SRE ITS 2023
        </Typography>
        <Typography variant='h5' className='text-typo-primary' weight='bold'>
          Role dan Authorization
        </Typography>
      </div>
      <Table
        className='text-black w-full'
        isLoading={isLoading}
        data={queryData?.data ?? []}
        columns={columns}
      />
      {selectedData && (
        <EditRoleAuthModal
          open={editModalOpen}
          setOpen={setEditModalOpen}
          defaultValues={selectedData}
          onSuccess={refetchData}
        />
      )}
    </div>
  );
}
