import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { serialize } from 'object-to-formdata';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Descendant } from 'slate';

import useRichText from '@/hooks/useRichText';
import api from '@/lib/api';
import useDialogStore from '@/stores/useDialogStore';
import { ApiResponse } from '@/types/api';
import { ArticleColumn, EditArticle } from '@/types/entities/dashboardArticle';

import Button from '../Button';
import Checkbox from '../form/CheckBox';
import Input from '../form/Input';
import RichText from '../rich-text/RichText';
import Typography from '../Typography';

const initialValue: Descendant[] = [
  { type: 'paragraph', children: [{ text: '' }] },
];

export default function EditArticleForm({
  defaultValue,
  setOpen,
  onSuccess,
  articleType,
}: {
  defaultValue: ArticleColumn;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
  articleType: string;
}) {
  const editor = useRichText();
  const [content, setContent] = useState<Descendant[]>(
    defaultValue?.content?.[0].data || initialValue,
  );

  const getContent = (value: Descendant[]) => {
    // let html: string = '';
    // value.forEach(node => {
    //   html += serialize(node);
    // });
    setContent(value);
  };
  const { mutate: updateDocument } = useMutation<
    unknown,
    AxiosError<ApiError>,
    FormData
  >({
    mutationFn: async data => {
      await api.patch<ApiResponse<EditArticle>>(
        `${articleType}/${defaultValue.id}`,
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
  const methods = useForm<EditArticle>({
    mode: 'onTouched',
    defaultValues: defaultValue,
  });

  const {
    handleSubmit,
    formState: { isDirty },
    register,
  } = methods;
  //#region  //*======== Form ===========

  const { dialog } = useDialogStore();

  //#region  //*=========== On Submit ===========
  const onSubmit = (data: EditArticle) => {
    const formattedReleaseDate = data.release_date
      ? new Date(data.release_date).toISOString()
      : undefined;
    const body = {
      ...data,
      content: JSON.stringify({ data: content }),
      release_date: formattedReleaseDate,
      cover: data.cover?.[0] ?? undefined,
    };
    setOpen(false);
    dialog({
      title: 'Update Changes',
      description: `This data will be updated. You’ll be able to edit this data and update new changes.`,
      submitText: 'Confirm',
      variant: 'success',
    }).then(() => updateDocument(serialize(body)));
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <Input id='title' label='Title' />
        <Input id='description' label='Description' />
        <Input id='time_to_read' type='number' label='Time to read' />
        <RichText
          id={'content'}
          label='Content'
          className='h-60 overflow-y-auto'
          placeholder='write contents here!'
          editor={editor}
          onValueChange={getContent}
          initialValue={defaultValue?.content?.[0].data || initialValue}
          readOnly={false}
        />
        <Checkbox id='pin' label='Pin' name='pin' />
        <Checkbox id='show' label='Show' name='show' />

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
        />
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
