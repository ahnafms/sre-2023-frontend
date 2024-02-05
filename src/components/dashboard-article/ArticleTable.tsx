import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { HiDocument } from 'react-icons/hi';

import { staticBaseUrl } from '@/constant/url';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponseMeta } from '@/types/api';
import { ArticleColumn } from '@/types/entities/dashboardArticle';

import Button from '../Button';
import ImagePreview from '../ImagePreview';
import Table from '../table/Table';
import Typography from '../Typography';
import EditArticleModal from './EditArticleModal';
import RegisterArticleModal from './RegisterArticleModal';

export default function ArticleTable({ articleType }: { articleType: string }) {
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<ArticleColumn>();

  const {
    data: articleData,
    isLoading,
    refetch,
  } = useQuery<ApiResponseMeta<ArticleColumn[]>>({
    queryKey: [`/${articleType}`],
  });

  const { mutate: deleteArticle } = useMutation<
    unknown,
    AxiosError<ApiError>,
    { id: string }
  >({
    mutationFn: async data => {
      await api.delete<ArticleColumn>(`${articleType}/${data.id}`, {
        toastify: true,
      });
    },
    onSuccess: () => refetch(),
  });

  const { dialog } = useDialogStore();

  function openWarningDelete({ id, title }: { id: string; title: string }) {
    dialog({
      title: 'Delete Data',
      description: `Hapus artikel dengan Title: ${title} ?`,
      submitText: 'Delete',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => deleteArticle({ id: id }))
      .then(() => refetch());
  }

  const columns: ColumnDef<ArticleColumn>[] = [
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
      accessorKey: 'time_to_read',
      header: 'Time to Read',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <Typography variant='c2' className='text-center'>
            {info.row.original.time_to_read} mins
          </Typography>
        );
      },
    },
    {
      accessorKey: 'pin',
      header: 'Pin',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <input
            readOnly={true}
            type='checkbox'
            checked={info.row.original.pin}
          />
        );
      },
    },
    {
      accessorKey: 'show',
      header: 'Show',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <input
            readOnly={true}
            type='checkbox'
            checked={info.row.original.show}
          />
        );
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
      accessorKey: 'cover_filename',
      header: 'Cover',
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
      cell: info => {
        return (
          <ImagePreview
            alt={info.row.original.title}
            leftIcon={HiDocument}
            imgFileName={info.row.original.cover_filename}
            imgPath={staticBaseUrl + info.row.original.cover_filepath}
          />
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
          content: info.row.original.content,
          time_to_read: info.row.original.time_to_read,
          release_date: formatDate(info.row.original.release_date),
          description: info.row.original.description,
          cover_filename: info.row.original.cover_filename,
          cover_filepath: info.row.original.cover_filepath,
          show: info.row.original.show,
          pin: info.row.original.pin,
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
        data={articleData?.data ?? []}
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
              Tambah Article
            </Button>
            {
              <RegisterArticleModal
                type={articleType}
                onSuccess={refetch}
                setOpen={setRegisterModalOpen}
                open={registerModalOpen}
              />
            }
          </>
        }
      />
      {selectedData && (
        <EditArticleModal
          type={articleType}
          open={editModalOpen}
          setOpen={setEditModalOpen}
          defaultValues={selectedData}
          onSuccess={refetch}
        />
      )}
    </>
  );
}
