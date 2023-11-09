import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import { ApiResponse } from '@/types/api';

type DefaultForm = {
  id: number;
  permission_id: number;
  role_id: number;
};

type EditRoleHasPermissionState = {
  id: number;
  permission_id: number;
  role_id: number;
};

export default function EditRoleAuthModal({
  defaultValues,
  onSuccess,
  setOpen,
  open,
}: {
  defaultValues: DefaultForm;
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  return (
    <>
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
            <Typography variant='c2'>Edit permission on role</Typography>
          </div>
        </Modal.Title>
        <Modal.Body>
          {defaultValues && (
            <EditRoleAuthForm
              roleHasPermission={defaultValues}
              setOpen={setOpen}
              onSuccess={onSuccess}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

function EditRoleAuthForm({
  roleHasPermission,
  setOpen,
  onSuccess,
}: {
  roleHasPermission: EditRoleHasPermissionState;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}) {
  const { mutate: updateRoleHasPermission } = useMutation<
    unknown,
    AxiosError<ApiError>,
    EditRoleHasPermissionState
  >({
    mutationFn: async data => {
      await api.patch<ApiResponse<undefined>>(`role-has-permission`, data, {
        toastify: true,
      });
      onSuccess();
    },
  });

  //#region  //*=========== Form ===========
  const methods = useForm<EditRoleHasPermissionState>({
    mode: 'onTouched',
    defaultValues: roleHasPermission,
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;
  //#region  //*======== Form ===========

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: EditRoleHasPermissionState) => {
    updateRoleHasPermission(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <Input
          id='role_id'
          label='Role'
          placeholder='Masukan Role Baru'
          validation={{ required: 'Role Wajib Diisi' }}
          disabled={true}
        />

        <Input
          id='permission_id'
          label='Permission Baru'
          placeholder='Masukan Permission Baru'
          validation={{ required: 'Permission Wajib Diisi' }}
        />

        <div className='!mt-6 flex items-center gap-3'>
          <Button
            className='w-1/2'
            type='button'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button type='submit' className='w-1/2' disabled={!isDirty}>
            Confirm
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
