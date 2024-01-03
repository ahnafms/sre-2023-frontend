import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import {
  DashboardUser,
  DashboardUserResponse,
  UpdateDashboardUser,
} from '@/types/entities/dashboardUser';

type UpdateUserModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: DashboardUser;
  setSelectedUser: React.Dispatch<
    React.SetStateAction<DashboardUser | undefined>
  >;
  onSuccess: () => void;
};

export default function UpdateUserModal({
  open,
  setOpen,
  selectedUser,
  onSuccess,
}: UpdateUserModalProps) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Title className='font-semibold flex flex-col gap-4'>
        <div className='relative'>
          <div className='w-13 h-13 p-3 rounded-full bg-secondary-10 w-fit'>
            <div className='w-10 h-10 rounded-full bg-secondary-20 flex items-center justify-center'>
              <HiPencilAlt className='text-2xl text-secondary-60' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <Typography variant='t' weight='bold'>
            Update Data
          </Typography>
          <Typography variant='c2'>Update data user</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        {selectedUser && (
          <UpdateUserForm
            selectedUser={selectedUser}
            open={open}
            setOpen={setOpen}
            onSuccess={onSuccess}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

function UpdateUserForm({
  selectedUser,
  setOpen,
  onSuccess,
}: {
  selectedUser: DashboardUser;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  onSuccess: () => void;
}) {
  const methods = useForm<UpdateDashboardUser>({
    defaultValues: {
      name: selectedUser.name,
      telp_number: selectedUser.telp_number,
    },
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const { mutate: updateUser, isPending } = useMutation<
    AxiosResponse<DashboardUserResponse>,
    AxiosError<ApiError>,
    UpdateDashboardUser
  >({
    mutationFn: data =>
      api.patch('/user', { telp_number: data.telp_number }, { toastify: true }),
    onSuccess: () => {
      onSuccess();
      setOpen(false);
    },
  });

  const onSubmit = (data: UpdateDashboardUser) => updateUser(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <Input
          disabled={true}
          id='name'
          label='Name'
          placeholder='Masukkan nama baru!'
        />
        <Input
          id='telp_number'
          label='Nomor telepon'
          placeholder='Masukkan nomor telepon baru!'
        />
        <div className='!mt-6 flex items-center gap-3'>
          <Button
            className='w-1/2'
            type='button'
            variant='outline-primary'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type='submit'
            className='w-1/2'
            disabled={!isDirty}
            isLoading={isPending}
          >
            Confirm
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
