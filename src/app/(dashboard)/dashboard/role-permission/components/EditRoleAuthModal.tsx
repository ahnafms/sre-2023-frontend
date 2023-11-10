import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { FormProvider, useForm } from 'react-hook-form';
import { HiPencilAlt } from 'react-icons/hi';

import Button from '@/components/Button';
import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiResponse } from '@/types/api';
import { Permission } from '@/types/entities/permission';

type DefaultForm = {
  id: number;
  permission_id: string;
  role_name: string;
  role_id: string;
};

type EditRoleHasPermissionState = {
  id: number;
  permission_id: string;
  role_name: string;
  role_id: string;
};

export default function EditRoleAuthModal({
  defaultValues,
  onSuccess,
  setOpen,
  open,
  queryDataPermission,
}: {
  defaultValues: DefaultForm;
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  queryDataPermission: Array<Permission>;
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
              queryDataPermission={queryDataPermission}
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
  queryDataPermission,
}: {
  roleHasPermission: EditRoleHasPermissionState;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
  queryDataPermission: Array<Permission>;
}) {
  const { mutate: updateRoleHasPermission } = useMutation<
    unknown,
    AxiosError<ApiError>,
    EditRoleHasPermissionState
  >({
    mutationFn: async data => {
      const updatedData = {
        ...data,
        permission_id: parseInt(data.permission_id as string),
      };

      await api.patch<ApiResponse<undefined>>(
        `role-has-permission`,
        updatedData,
        {
          toastify: true,
        },
      );
    },
    onSuccess: () => onSuccess(),
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

  const { dialog } = useDialogStore();

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: EditRoleHasPermissionState) => {
    setOpen(false);
    dialog({
      title: 'Update Changes',
      description: `This data will be updated. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => updateRoleHasPermission(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <Input id='role_name' label='Role' disabled={true} />
        <SelectInput
          id='permission_id'
          label='Permission Baru'
          placeholder='Masukan Permission Baru'
          validation={{ required: 'Permission Wajib Diisi' }}
        >
          {queryDataPermission.map(value => (
            <option key={value.id} value={value.id}>
              {value.routes}
            </option>
          ))}
        </SelectInput>

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
