'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { AxiosError, AxiosResponse } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import Link from 'next/link';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { HiDocument } from 'react-icons/hi';

import Button from '@/components/Button';
import withAuth from '@/components/hoc/withAuth';
import IconButton from '@/components/IconButton';
import ImagePreview from '@/components/ImagePreview';
import Table from '@/components/table/Table';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiResponse } from '@/types/api';
import { Staff } from '@/types/entities/staff';

import RegisterStaffModal from './components/RegisterStaffModal';
import UpdateStaffModal from './components/UpdateStaffModal';

export default withAuth(DashboardStaffPage, ['authed']);

function DashboardStaffPage() {
  const [registerModalOpen, setRegisterModalOpen] = React.useState(false);
  const [updateModalOpen, setUpdateModalOpen] = React.useState(false);
  const [selectedStaff, setSelectedStaff] = React.useState<Staff | undefined>();

  const {
    data: staffsResponse,
    isLoading,
    refetch: refetchStaffs,
  } = useQuery<ApiResponse<Staff[]>>({ queryKey: ['/staff'] });

  const { mutate: deleteStaff } = useMutation<
    AxiosResponse<ApiResponse<void>>,
    AxiosError<ApiError>,
    { id: string }
  >({
    mutationFn: data =>
      api.delete<ApiResponse<void>>(`/staff/${data.id}`, { toastify: true }),
    onSuccess: () => refetchStaffs(),
  });

  const { dialog } = useDialogStore();

  function openWarningDelete(staff: Staff) {
    dialog({
      title: 'Apakah Anda Yakin?',
      description: `Hapus data staff '${staff.full_name}'?`,
      submitText: 'Delete',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => deleteStaff({ id: staff.id }))
      .then(() => refetchStaffs());
  }

  const columns: ColumnDef<Staff>[] = [
    {
      id: 'no',
      header: 'No',
      cell: info => (
        <Typography variant='c2' className='w-full text-center'>
          {info.row.index + 1}
        </Typography>
      ),
    },
    {
      accessorKey: 'full_name',
      header: 'Name',
    },
    {
      accessorKey: 'position',
      header: 'Position',
    },
    {
      accessorKey: 'division',
      header: 'Department',
    },
    {
      accessorKey: 'major',
      header: 'Major',
    },
    {
      id: 'image',
      header: 'Image',
      cell: info => (
        <>
          <ImagePreview
            leftIcon={HiDocument}
            imgPath={info.row.original.image_path}
            imgFileName={info.row.original.image_file_name}
            alt={info.row.original.full_name}
          />
        </>
      ),
    },
    {
      id: 'social_media',
      header: 'Social Media',
      cell: info => (
        <div className='flex gap-2 items-center'>
          <Link href={info.row.original.linked_in} target='_blank'>
            <IconButton icon={BsLinkedin} />
          </Link>
          <Link href={info.row.original.instagram} target='_blank'>
            <IconButton icon={BsInstagram} />
          </Link>
        </div>
      ),
    },
    {
      id: 'action',
      header: 'Action',
      cell: info => (
        <div className='flex gap-2 items-center'>
          <Button
            variant='outline-primary'
            onClick={() => {
              setSelectedStaff(info.row.original);
              setUpdateModalOpen(true);
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
    <div className='w-full bg-typo-surface px-10 py-10 min-h-screen flex flex-col gap-4 items-start'>
      <div className='w-full'>
        <Typography variant='h6' className='text-typo-primary font-light'>
          SRE ITS 2023
        </Typography>
        <div className='flex justify-between items-center'>
          <Typography variant='h5' className='text-typo-primary' weight='bold'>
            Staff Database
          </Typography>
          <Button
            leftIcon={BiPlusCircle}
            variant='outline-primary'
            onClick={() => setRegisterModalOpen(true)}
          >
            Tambah data Staff
          </Button>
        </div>
      </div>

      <Table
        className='text-black w-full'
        isLoading={isLoading}
        data={staffsResponse?.data ?? []}
        columns={columns}
        withFilter
      />

      <RegisterStaffModal
        open={registerModalOpen}
        setOpen={setRegisterModalOpen}
        onSuccess={refetchStaffs}
      />

      {selectedStaff && (
        <UpdateStaffModal
          open={updateModalOpen}
          setOpen={setUpdateModalOpen}
          selectedStaff={selectedStaff}
          setSelectedStaff={setSelectedStaff}
          onSuccess={refetchStaffs}
        />
      )}
    </div>
  );
}
