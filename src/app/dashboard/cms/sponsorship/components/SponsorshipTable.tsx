'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { HiDocument } from 'react-icons/hi';

import Button from '@/components/Button';
import ImagePreview from '@/components/ImagePreview';
import Table from '@/components/table/Table';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponse } from '@/types/api';
import { SponsorColumn } from '@/types/entities/sponsor';

import EditSponsorshipModal from './EditSponsorshipModal';
import RegisterSponsorshipModal from './RegisterSponsorshipModal';

export default function SponsorshipTable() {
  const [registerModalOpen, setRegisterModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<{
    id: number;
    name: string;
    file_name: string;
    file_path: string;
    detail: string;
  }>();

  const {
    data: queryData,
    isLoading,
    refetch: refetchData,
  } = useQuery<ApiResponse<Array<SponsorColumn>>>({
    queryKey: ['/sponsor'],
  });

  const { mutate: deleteSponsor } = useMutation<
    unknown,
    AxiosError<ApiError>,
    { id: number }
  >({
    mutationFn: async data => {
      await api.delete<SponsorColumn>(`sponsor/${data.id}`, {
        toastify: true,
      });
    },
    onSuccess: () => refetchData(),
  });

  const { dialog } = useDialogStore();

  function openWarningDelete({ id }: { id: number }) {
    dialog({
      title: 'Delete Data',
      description: `Hapus role dengan ID: ${id} ?`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => deleteSponsor({ id: id }))
      .then(() => refetchData());
  }

  const columns: ColumnDef<SponsorColumn>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: info => info.row.index + 1,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'file_name',
      header: 'Logo',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <>
            <ImagePreview
              leftIcon={HiDocument}
              imgPath={info.row.original.file_path}
              imgFileName={info.row.original.file_name}
              imgDetail={info.row.original.detail}
              alt={info.row.original.name}
            />
          </>
        );
      },
    },
    {
      id: 'action',
      header: 'Action',
      cell: info => {
        const value = {
          id: info.row.original.id,
          name: info.row.original.name,
          file_name: info.row.original.file_name,
          file_path: info.row.original.file_path,
          detail: info.row.original.detail,
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
              <Typography
                variant='c2'
                color='icon'
                weight='semibold'
                font='epilogue'
              >
                Edit
              </Typography>
            </Button>
            <Button
              className='relative bg-critical-60'
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
  return (
    <>
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
            >
              Tambah Perusahaan
            </Button>
            {
              <RegisterSponsorshipModal
                onSuccess={refetchData}
                setOpen={setRegisterModalOpen}
                open={registerModalOpen}
              />
            }
          </>
        }
      />
      {selectedData && (
        <EditSponsorshipModal
          open={editModalOpen}
          setOpen={setEditModalOpen}
          defaultValues={selectedData}
          onSuccess={refetchData}
        />
      )}
    </>
  );
}
