import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError } from '@/types/api';
import { Role } from '@/types/entities/role';

type RegisterRoleState = {
  id: number;
  name: string;
};

export default function RegisterRoleModal({
  onSuccess,
  setOpen,
  open,
}: {
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  const { mutate: registerRole } = useMutation<
    AxiosResponse<Role>,
    AxiosError<ApiError>,
    RegisterRoleState
  >({
    mutationFn: data =>
      api.post('/role', data, {
        toastify: true,
      }),
    onSuccess: () => onSuccess(),
  });

  //#region  //*=========== Form ===========
  const methods = useForm<RegisterRoleState>();
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*=========== Form ===========

  const { dialog } = useDialogStore();

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: RegisterRoleState) => {
    setOpen(false);
    dialog({
      title: 'Register New Role',
      description: `This data will be created. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => registerRole(data));
  };

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
            Tambah Role
          </Typography>
          <Typography variant='c2'>Tambah Role Baru</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
            <Input
              id='name'
              label='Name'
              validation={{ required: 'Name is required!' }}
            />
            <div className='!mt-6 flex flex-col-reverse sm:flex-row  items-center gap-3'>
              <Button
                className='relative w-full'
                variant='outline-primary'
                onClick={() => setOpen(false)}
              >
                <Typography
                  variant='c2'
                  color='icon'
                  weight='semibold'
                  font='epilogue'
                >
                  Cancel
                </Typography>
              </Button>
              <Button
                type='submit'
                className='relative bg-secondary-60 w-full'
                variant='success'
                disabled={!isDirty}
              >
                <Typography
                  variant='c2'
                  weight='semibold'
                  font='epilogue'
                  className='text-white'
                >
                  Confirm
                </Typography>
              </Button>
            </div>
          </form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
}
