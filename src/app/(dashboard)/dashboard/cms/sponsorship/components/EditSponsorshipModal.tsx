import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiError, ApiResponse } from '@/types/api';
import { SponsorColumn, updateSponsor } from '@/types/entities/sponsor';

export default function EditSponsorshipModal({
  defaultValues,
  onSuccess,
  setOpen,
  open,
}: {
  defaultValues: SponsorColumn;
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
          <Typography variant='c2'>Edit detail sponsor</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        {defaultValues && (
          <EditSponsorForm
            sponsorData={defaultValues}
            setOpen={setOpen}
            onSuccess={onSuccess}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

function EditSponsorForm({
  sponsorData,
  setOpen,
  onSuccess,
}: {
  sponsorData: SponsorColumn;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}) {
  const { mutate: updateSponsor } = useMutation<
    unknown,
    AxiosError<ApiError>,
    FormData
  >({
    mutationFn: async data => {
      await api.patch<ApiResponse<undefined>>(
        `sponsor/${sponsorData.id}`,
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
  });

  //#region  //*=========== Form ===========
  const methods = useForm<updateSponsor>({
    mode: 'onTouched',
    defaultValues: sponsorData,
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*======== Form ===========

  const { dialog } = useDialogStore();

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: updateSponsor) => {
    const formData = new FormData();
    if (data.name) {
      formData.append('name', data.name);
    }
    if (data.detail) {
      formData.append('detail', data.detail);
    }
    if (data.image) {
      formData.append('image', data.image[0]);
    }
    setOpen(false);
    dialog({
      title: 'Update Changes',
      description: `This data will be updated. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => updateSponsor(formData));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <Input id='name' label='Name' />
        <Input
          id='image'
          label='Logo'
          type='file'
          placeholder={sponsorData.file_name}
          accept='.png, .jpg, .jpeg'
          maxSize={1000000}
        />
        <Input id='detail' label='Detail' />
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
