import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { serialize } from 'object-to-formdata';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import {
  ArticleColumn,
  RegisterArticle,
} from '@/types/entities/dashboardArticle';

import Button from '../Button';
import Input from '../form/Input';
import Modal from '../modal/Modal';
import Typography from '../Typography';

export default function RegisterArticleModal({
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
  const { mutate: registerArticle } = useMutation<
    AxiosResponse<ArticleColumn>,
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

  const methods = useForm<RegisterArticle>();
  const {
    handleSubmit,
    formState: { isDirty },
    register,
  } = methods;

  const { dialog } = useDialogStore();

  const onSubmit = (data: RegisterArticle) => {
    const formattedReleaseDate = data.release_date
      ? new Date(data.release_date).toISOString()
      : undefined;
    const body = {
      ...data,
      release_date: formattedReleaseDate,
      cover: data.cover?.[0] ?? undefined,
    };
    setOpen(false);
    dialog({
      title: 'Register Article',
      description: `This data will be created. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => registerArticle(serialize(body)));
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
            Tambah Artikel
          </Typography>
          <Typography variant='c2'>Tambah data artikel baru</Typography>
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
              id='content'
              label='Content'
              validation={{ required: 'Content is required!' }}
            />
            <Input
              id='description'
              label='Description'
              validation={{ required: 'Description is required!' }}
            />
            <Input
              id='time_to_read'
              label='Time to Read'
              type='number'
              validation={{ required: 'Time to Read is required!' }}
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
