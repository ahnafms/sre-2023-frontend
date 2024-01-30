import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { serialize } from 'object-to-formdata';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Checkbox from '@/components/form/CheckBox';
import Input from '@/components/form/Input';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponse } from '@/types/api';
import {
  merchAtribute,
  updateMerchAtribute,
} from '@/types/entities/merchandise';

export default function EditMerchandiseModal({
  defaultValues,
  onSuccess,
  setOpen,
  open,
}: {
  defaultValues: merchAtribute;
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
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
            Update Information
          </Typography>
          <Typography variant='c2'>Edit detail merchandise</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        {defaultValues && (
          <EditMerchForm
            merchData={defaultValues}
            setOpen={setOpen}
            onSuccess={onSuccess}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

function EditMerchForm({
  merchData,
  setOpen,
  onSuccess,
}: {
  merchData: updateMerchAtribute;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}) {
  // const cover_filepath = merchData.cover_filepath;
  // const match = cover_filepath.match(/\/([a-f\d-]+)\.png/);
  // const id = match && match[1];
  const { mutate: updateMerchAtribute } = useMutation<
    unknown,
    AxiosError<ApiError>,
    FormData
  >({
    mutationFn: async data => {
      await api.patch<ApiResponse<undefined>>(
        `merchandise/${merchData?.id}`,
        data,
        {
          toastify: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    },
    onSuccess: () => onSuccess(),
    onError: () => {
      throw new Error();
    },
  });

  //#region  //*=========== Form ===========
  const methods = useForm<updateMerchAtribute>({
    mode: 'onTouched',
    defaultValues: merchData,
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*======== Form ===========

  const { dialog } = useDialogStore();

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: updateMerchAtribute) => {
    const body = {
      ...data,
      cover: data.cover?.[0],
    };
    setOpen(false);
    dialog({
      title: 'Update Changes',
      description: `This data will be updated. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => updateMerchAtribute(serialize(body)));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='gap-2 flex flex-col'>
          <Input id='name' label='Name' />
          <Input id='price' label='Price' />
          <Input
            id='cover'
            label='Cover'
            type='file'
            placeholder={String(merchData.cover_filename)}
            accept='.png, .jpg, .jpeg'
            maxSize={1000000}
          />
          <Input id='url' label='URL' />
          <Input id='description' label='Description' />
          <div className='w-full gap-6 flex items-center'>
            <Checkbox
              label='Pin'
              id='pin'
              name='pin'
              onChange={e => methods.setValue('pin', e.target.checked === true)}
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
          {/* <div className='flex flex-col'>
            <label htmlFor='pin'>Pin:</label>
            <select
              className='border-2 solid border-typo-outline p-1 rounded-lg'
              id='pin'
              name='pin'
              onChange={e => setValue('pin', e.target.value === 'true')}
            >
              <option value={String(merchData.show)}>
                {String(merchData.pin)}
              </option>
              {String(merchData.pin) === 'true' ? (
                <option value='false'>false</option>
              ) : (
                <option value='true'>true</option>
              )}
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='show'>Show:</label>
            <select
              className='border-2 solid border-typo-outline p-1 rounded-lg'
              id='show'
              name='show'
              onChange={e => setValue('show', e.target.value === 'true')}
            >
              <option value={String(merchData.show)}>
                {String(merchData.show)}
              </option>
              {String(merchData.show) === 'true' ? (
                <option value='false'>false</option>
              ) : (
                <option value='true'>true</option>
              )}
            </select>
          </div> */}
        </div>
        <div className='!mt-6 flex flex-col-reverse sm:flex-row items-center gap-3'>
          <Button
            className='relative w-full py-2.5 md:py-2'
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
            className='relative bg-secondary-60 w-full py-2.5 md:py-2'
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
  );
}
