'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { HiDocument } from 'react-icons/hi';

import Button from '@/components/Button';
import ImagePreview from '@/components/ImagePreview';
import Table from '@/components/table/Table';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponse } from '@/types/api';
import { merchAtribute } from '@/types/entities/merchandise';

import EditMerchandiseModal from './EditMerchandiseModal';

export default function MerchandiseTable() {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<{
    id: number;
    name: string;
    cover_filepath: string;
    cover_filename: string;
    url: string;
    description: string;
    price: number;
    pin: boolean;
    show: boolean;
  }>();

  const {
    data: queryData,
    isLoading,
    refetch: refetchData,
  } = useQuery<ApiResponse<Array<merchAtribute>>>({
    queryKey: ['/merchandise?per_page=100000'],
  });

  const { mutate: deleteMerch } = useMutation<
    unknown,
    AxiosError<ApiError>,
    { id: number }
  >({
    mutationFn: async data => {
      // const cover_filepath = data.cover_filepath;
      // const match = cover_filepath.match(/\/([a-f\d-]+)\.png/);
      // const id = match && match[1];
      // console.log(cover_filepath);

      await api.delete<merchAtribute>(`/merchandise/${data.id}`, {
        toastify: true,
      });
    },
    onSuccess: () => refetchData(),
  });

  const { dialog } = useDialogStore();

  function openWarningDelete({ id, name }: { id: number; name: string }) {
    dialog({
      title: 'Delete Merchandise',
      description: `Hapus merchandise dengan nama merchandise: ${name} ?`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => deleteMerch({ id: id }))
      .then(() => refetchData());
  }

  const columns: ColumnDef<merchAtribute>[] = [
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
      accessorKey: 'description',
      header: 'Description',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'price',
      header: 'Price',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: 'cover',
      header: 'Cover Image',
      cell: info => (
        <>
          <ImagePreview
            leftIcon={HiDocument}
            imgPath={info.row.original.url + info.row.original.cover_filepath}
            imgFileName={info.row.original.cover_filename}
            alt={info.row.original.cover_filename}
          />
        </>
      ),
    },
    {
      id: 'pin',
      header: 'Pinned',
      cell: info => {
        return (
          <div className='flex gap-3'>
            {info.row.original.pin === true ? (
              <Typography className='w-full flex justify-center'>
                <FaCheck className='text-secondary-60' />
              </Typography>
            ) : (
              <Typography className='w-full flex justify-center'>
                <FaTimes className='text-critical-60' />
              </Typography>
            )}
          </div>
        );
      },
    },
    {
      id: 'show',
      header: 'Showed',
      cell: info => {
        return (
          <div className='flex gap-3'>
            {info.row.original.show === true ? (
              <Typography className='w-full flex justify-center'>
                <FaCheck className='text-secondary-60' />
              </Typography>
            ) : (
              <Typography className='w-full flex justify-center'>
                <FaTimes className='text-critical-60' />
              </Typography>
            )}
          </div>
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
          cover_filepath: info.row.original.cover_filepath,
          cover_filename: info.row.original.cover_filename,
          url: info.row.original.url,
          description: info.row.original.description,
          price: info.row.original.price,
          pin: info.row.original.pin,
          show: info.row.original.show,
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
        withPaginationCount
        columns={columns}
      />
      {selectedData && (
        <EditMerchandiseModal
          open={editModalOpen}
          setOpen={setEditModalOpen}
          defaultValues={selectedData}
          onSuccess={refetchData}
        />
      )}
    </>
  );
}
