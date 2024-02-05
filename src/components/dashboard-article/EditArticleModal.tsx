import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';

import { ArticleColumn } from '@/types/entities/dashboardArticle';

import Modal from '../modal/Modal';
import Typography from '../Typography';
import EditArticleForm from './EditArticleForm';

export default function EditArticleModal({
  defaultValues,
  onSuccess,
  setOpen,
  open,
  type,
}: {
  defaultValues: ArticleColumn;
  onSuccess: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  type: string;
}) {
  return (
    <Modal modalContainerClassName='lg:max-w-7xl' open={open} setOpen={setOpen}>
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
          <Typography variant='c2'>Edit detail artikel</Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        {defaultValues && (
          <EditArticleForm
            articleType={type}
            defaultValue={defaultValues}
            setOpen={setOpen}
            onSuccess={onSuccess}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}
