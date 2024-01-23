import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { serialize } from 'object-to-formdata';
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
import { DocumentColumn, RegisterDocument } from '@/types/entities/document';

export default function RegisterDocumentModal({
  onSuccess,
  setOpen,
  open,
  type,
}: {
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  type: string;
}) {
  const { mutate: registerDocument } = useMutation<
    AxiosResponse<DocumentColumn>,
    AxiosError<ApiError>,
    FormData
  >({
    mutationFn: data =>
      api.post(`/${type}`, data, {
        toastify: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: () => onSuccess(),
  });

  //#region  //*=========== Form ===========
  const methods = useForm<RegisterDocument>();
  const {
    handleSubmit,
    formState: { isDirty },
    register,
  } = methods;

  const { dialog } = useDialogStore();

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: RegisterDocument) => {
    const formattedReleaseDate = data.release_date
      ? new Date(data.release_date).toISOString()
      : undefined;
    const body = {
      ...data,
      release_date: formattedReleaseDate,
      document: data.document?.[0] ?? undefined,
      cover: data.cover?.[0] ?? undefined,
    };
    setOpen(false);
    dialog({
      title: 'Register Dokumen',
      description: `This data will be created. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => registerDocument(serialize(body)));
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
            Tambah Dokumen
          </Typography>
          <Typography variant='c2'>Tambah data dokumen baru</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
            <Input
              id='title'
              label='Title'
              validation={{ required: 'Title is required!' }}
            />
            <Input
              id='description'
              label='Description'
              validation={{ required: 'Document is required!' }}
            />
            <div className='space-y-1'>
              <Typography
                as='label'
                htmlFor='release_date'
                variant='c2'
                weight='semibold'
                color='input'
                className='w-full'
              >
                Release Date
              </Typography>
              <input
                {...register('release_date')}
                type='date'
                className='w-full px-3 py-1.5 rounded-lg flex border-[1px] ring-typo-inline text-c2 text-typo-input placeholder:text-typo-icon'
              />
            </div>
            <Input
              id='cover'
              label='Cover'
              type='file'
              accept='.png, .jpg, .jpeg'
              maxSize={1000000}
              validation={{ required: 'Cover is required!' }}
            />
            <Input
              id='document'
              label='Document'
              type='file'
              accept='.pdf'
              maxSize={1000000}
              validation={{ required: 'Document is required!' }}
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
