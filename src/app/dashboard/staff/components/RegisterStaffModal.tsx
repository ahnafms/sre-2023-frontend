import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { serialize } from 'object-to-formdata';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { ApiError, ApiResponse } from '@/types/api';
import {
  RegisterStaffRequest,
  RegisterStaffResponse,
} from '@/types/entities/staff';

type RegisterStaffModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
};

export default function RegisterStaffModal({
  open,
  setOpen,
  onSuccess,
}: RegisterStaffModalProps) {
  const methods = useForm<RegisterStaffRequest>();

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const { mutate: registerStaff, isPending } = useMutation<
    AxiosResponse<RegisterStaffResponse>,
    AxiosError<ApiError>,
    FormData
  >({
    mutationFn: data =>
      api.post('/staff', data, {
        toastify: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: () => {
      onSuccess();
      setOpen(false);
    },
  });

  const onSubmit = (data: RegisterStaffRequest) => {
    const body = {
      ...data,
      image: data.image[0],
    };
    registerStaff(serialize(body));
  };

  const { data: divisionResponse } = useQuery<
    ApiResponse<{ id: number; name: string }[]>
  >({ queryKey: ['/division'] });

  const { data: MajorResponse } = useQuery<
    ApiResponse<{ id: number; name: string }[]>
  >({ queryKey: ['/major'] });

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
            Tambah Data
          </Typography>
          <Typography variant='c2'>Tambah data staff baru</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
            <Input
              id='full_name'
              label='Name'
              placeholder='Masukkan Nama Staff'
              validation={{ required: 'Nama wajib diisi' }}
            />
            <SelectInput
              id='division_id'
              label='Department'
              placeholder='Pilih Departemen Staff'
              validation={{
                required: 'Departemen wajib diisi',
                valueAsNumber: true,
              }}
            >
              {divisionResponse?.data?.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </SelectInput>
            <Input
              id='position'
              label='Position'
              placeholder='Masukkan Posisi Staff'
              validation={{ required: 'Posisi wajib diisi' }}
            />
            <SelectInput
              id='major_id'
              label='Major'
              placeholder='Pilih Program Studi Staff'
              validation={{
                required: 'Program Studi wajib diisi',
                valueAsNumber: true,
              }}
            >
              {MajorResponse?.data.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </SelectInput>
            <Input
              type='file'
              id='image'
              label='Photo'
              placeholder='Unggah gambar'
              maxSize={1000000}
              accept='.png, .jpg, .jpeg'
            />
            <Input
              id='linked_in'
              label='Linked In'
              helperText='Masukkan dalam format https://linkedin.com/in/'
              placeholder='Masukkan Linked In Staff'
              validation={{ required: 'Linked In wajib diisi' }}
            />
            <Input
              id='instagram'
              label='Instagram'
              helperText='Masukkan dalam format https://instagram.com/'
              placeholder='Masukkan Instagram Staff'
              validation={{ required: 'Linked In wajib diisi' }}
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
      </Modal.Body>
    </Modal>
  );
}
