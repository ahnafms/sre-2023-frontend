import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponse } from '@/types/api';
import { Role } from '@/types/entities/role';
import { User } from '@/types/entities/user';

export default function RegisterUserModal({
  onSuccess,
  setOpen,
  open,
}: {
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  const { mutate: registerUser } = useMutation<
    AxiosResponse<User>,
    AxiosError<ApiError>,
    User
  >({
    mutationFn: data =>
      api.post('/user/admin/new', data, {
        toastify: true,
      }),
    onSuccess: () => onSuccess(),
  });

  //#region  //*=========== Form ===========
  const methods = useForm<User>();
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*=========== Form ===========

  const { dialog } = useDialogStore();

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: User) => {
    setOpen(false);
    dialog({
      title: 'Register User',
      description: `This data will be created. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => registerUser(data));
  };

  const { data: queryRoles } = useQuery<ApiResponse<Role[]>>({
    queryKey: ['/role'],
  });

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
            Tambah User
          </Typography>
          <Typography variant='c2'>Tambah user baru</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
            <Input
              id='name'
              label='Name'
              placeholder='Masukkan nama'
              validation={{ required: 'Name is required!' }}
            />
            <Input
              id='telp_number'
              label='Telephone Number'
              placeholder='Masukkan nomor telepon'
              validation={{
                required: 'Telephone Number is required!',
                pattern: {
                  value: /^(\+62|62|0)8[1-9][0-9]{6,10}$/,
                  message: 'Invalid telephone number format',
                },
              }}
            />
            <Input
              id='email'
              label='Email'
              placeholder='Masukkan email'
              validation={{
                required: 'Email is required!',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: 'Must follow this format: test@gmail.com',
                },
              }}
            />
            <Input
              id='password'
              type='password'
              label='Password'
              placeholder='Masukkan password'
              validation={{ required: 'Password is required!' }}
            />
            <SelectInput
              id='role_id'
              label='Role'
              placeholder='Pilih Role untuk User baru'
              validation={{
                required: 'Role is required',
              }}
            >
              {queryRoles?.data.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </SelectInput>
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
