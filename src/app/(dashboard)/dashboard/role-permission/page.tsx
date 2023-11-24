'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';

import Button from '@/components/Button';
import withAuth from '@/components/hoc/withAuth';
import Table from '@/components/table/Table';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponse } from '@/types/api';
import { Permission } from '@/types/entities/permission';
import { RoleAuthColumn, RoleHasPermission } from '@/types/entities/role';

import EditRoleAuthModal from './components/EditRoleAuthModal';
import RegisterRoleModal from './components/RegisterRoleModal';

export default withAuth(RolePermissionPage, ['authed']);

function RolePermissionPage() {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [registerModalOpen, setRegisterModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<{
    id: number;
    permission_id: string;
    role_name: string;
    role_id: string;
  }>();

  // Query for Permissions
  const { data: queryDataPermissions } = useQuery<
    ApiResponse<Array<Permission>>
  >({
    queryKey: ['/permission'],
  });

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
          role_name: info.row.original.role_name,
          role_id: info.row.original.role_id,
          permission_id: info.row.original.permission_id,
        };
        return (
          <div className='flex gap-3'>
            <Button
              className='relative border-typo-inline'
              variant='outline-primary'
              onClick={() => {
                setSelectedData(value), setEditModalOpen(true);
              }}
            >
              <Typography
                variant='c2'
                weight='semibold'
                font='epilogue'
                className='text-typo-icon '
              >
                Edit
              </Typography>
            </Button>
            <Button
              className='relative'
              variant='danger'
              onClick={() => openWarningDelete(info.row.original)}
            >
              <Typography
                variant='c2'
                weight='semibold'
                font='epilogue'
                className='text-white'
              >
                Hapus
              </Typography>
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
      title: 'Delete Data',
      description: `Hapus role dengan ID: ${id} ?`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => deleteRoles({ id: id }))
      .then(() => refetchData());
  }

  return (
    <section className='w-full h-full bg-typo-surface px-10 py-10 flex flex-col gap-4 items-start'>
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
        withFilter
        withPaginationControl
        columns={columns}
        extraContent={
          <>
            <Button
              leftIcon={BiPlusCircle}
              variant='outline-primary'
              onClick={() => setRegisterModalOpen(true)}
              className='z-40'
            >
              Tambah Role
            </Button>
            {
              <RegisterRoleModal
                onSuccess={refetchData}
                setOpen={setRegisterModalOpen}
                open={registerModalOpen}
              />
            }
          </>
        }
      />
      {selectedData && (
        <EditRoleAuthModal
          open={editModalOpen}
          setOpen={setEditModalOpen}
          defaultValues={selectedData}
          onSuccess={refetchData}
          queryDataPermission={queryDataPermissions?.data ?? []}
        />
      )}
    </section>
  );
}
