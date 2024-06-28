'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { HiDocument } from 'react-icons/hi';

import Button from '@/components/Button';
import ImagePreview from '@/components/ImagePreview';
import UnstyledLink from '@/components/links/UnstyledLink';
import Table from '@/components/table/Table';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponse } from '@/types/api';
import { DocumentColumn } from '@/types/entities/document';

import EditDocumentModal from './EditDocumentModal';
import RegisterDocumentModal from './RegisterDocumentModal';

interface DocumentTableProps {
  type: string;
}

export default function DocumentTable({ type }: DocumentTableProps) {
  const [registerModalOpen, setRegisterModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<DocumentColumn>();

  const {
    data: queryData,
    isLoading,
    refetch: refetchData,
  } = useQuery<ApiResponse<Array<DocumentColumn>>>({
    queryKey: [`/${type}`],
  });

  const { mutate: deleteDocument } = useMutation<
    unknown,
    AxiosError<ApiError>,
    { id: string }
  >({
    mutationFn: async data => {
      await api.delete<DocumentColumn>(`${type}/${data.id}`, {
        toastify: true,
      });
    },
    onSuccess: () => refetchData(),
  });

  const { dialog } = useDialogStore();

  function openWarningDelete({ id }: { id: string }) {
    dialog({
      title: 'Delete Data',
      description: `Hapus dokumen dengan ID: ${id} ?`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => deleteDocument({ id: id }))
      .then(() => refetchData());
  }

  const columns: ColumnDef<DocumentColumn>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: info => info.row.index + 1,
    },
    {
      accessorKey: 'title',
      header: 'Title',
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
      accessorKey: 'release_date',
      header: 'Release Date',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <Typography variant='c2'>
            {info.row.original.release_date
              ? new Date(info.row.original.release_date).toLocaleDateString()
              : 'Invalid Date'}
          </Typography>
        );
      },
    },
    {
      accessorKey: 'cover_file_name',
      header: 'Cover',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <>
            <ImagePreview
              leftIcon={HiDocument}
              imgPath={info.row.original.cover_file_path}
              imgFileName={info.row.original.cover_file_name}
              alt={info.row.original.title}
            />
          </>
        );
      },
    },
    {
      accessorKey: 'document_file_name',
      header: 'Document',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <UnstyledLink href={info.row.original.document_file_path}>
            <Button
              leftIcon={HiDocument}
              leftIconClassName='text-secondary-50'
              className='relative'
              variant='outline-primary'
            >
              <Typography font='epilogue' variant='c2'>
                {info.row.original.document_file_name}
              </Typography>
            </Button>
          </UnstyledLink>
        );
      },
    },
    {
      id: 'action',
      header: 'Action',
      cell: info => {
        function formatDate(dateString: string): string {
          const date = new Date(dateString);
          return date.toISOString().split('T')[0];
        }
        const value = {
          id: info.row.original.id,
          title: info.row.original.title,
          description: info.row.original.description,
          document_file_path: info.row.original.document_file_path,
          document_file_name: info.row.original.document_file_name,
          cover_file_path: info.row.original.cover_file_path,
          cover_file_name: info.row.original.cover_file_name,
          release_date: formatDate(info.row.original.release_date),
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
              Tambah Dokumen
            </Button>
            {
              <RegisterDocumentModal
                type={type}
                onSuccess={refetchData}
                setOpen={setRegisterModalOpen}
                open={registerModalOpen}
              />
            }
          </>
        }
      />
      {selectedData && (
        <EditDocumentModal
          type={type}
          open={editModalOpen}
          setOpen={setEditModalOpen}
          defaultValues={selectedData}
          onSuccess={refetchData}
        />
      )}
    </>
  );
}
