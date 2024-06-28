import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { serialize } from 'object-to-formdata';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Checkbox from '@/components/form/CheckBox';
import Input from '@/components/form/Input';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { addMerchAtribute, merchAtribute } from '@/types/entities/merchandise';

export default function AddMerchandiseModal({
  onSuccess,
  setOpen,
  open,
}: {
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  const { mutate: addMerchAtribute } = useMutation<
    AxiosResponse<merchAtribute>,
    AxiosError<ApiError>,
    FormData
  >({
    mutationFn: data =>
      api.post('/merchandise', data, {
        toastify: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: () => {
      onSuccess(), methods.reset();
      setOpen(false);
    },
    onError: () => {
      throw new Error();
    },
  });

  //#region  //*=========== Form ===========
  const methods = useForm<addMerchAtribute>();
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*=========== Form ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: addMerchAtribute) => {
    const body = {
      ...data,
      cover: data.cover[0],
    };
    addMerchAtribute(serialize(body));
    setOpen(false);
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
            Add Merchandise
          </Typography>
          <Typography variant='c2'>Add new merchandise data</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            <div className='gap-3 flex flex-col'>
              <Input
                id='name'
                label='Name'
                validation={{ required: 'Name is required!' }}
              />
              <Input
                id='price'
                label='Price'
                validation={{ required: 'Price is required!' }}
              />
              <Input
                id='cover'
                label='Cover'
                type='file'
                accept='.png, .jpg, .jpeg'
                maxSize={1000000}
                validation={{ required: 'Cover image is required!' }}
              />
              <Input
                id='url'
                label='URL'
                validation={{ required: 'URL is required!' }}
              />
              <Input
                id='description'
                label='description'
                validation={{ required: 'Description is required!' }}
              />
              <div className='w-full gap-6 flex items-center'>
                <Checkbox
                  label='Pin'
                  id='pin'
                  name='pin'
                  onChange={e =>
                    methods.setValue('pin', e.target.checked === true)
                  }
                />

                <Checkbox
                  label='Show'
                  id='show'
                  name='show'
                  onChange={e =>
                    methods.setValue('show', e.target.checked === true)
                  }
                />
              </div>
            </div>
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
                  Submit
                </Typography>
              </Button>
            </div>
          </form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
}
