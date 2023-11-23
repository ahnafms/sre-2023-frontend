'use client';

import Image from 'next/image';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdContentPaste } from 'react-icons/md';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Input from '@/components/form/Input';
import Grid from '@/components/Grid';
import LogoVertical from '@/components/logo/LogoVertical';
import TaglineText from '@/components/logo/TaglineText';
import YellowCircle from '@/components/ornament/YellowCircle';
import YellowStart from '@/components/ornament/YellowStart';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { ApiResponse } from '@/types/api';
import PaperOverlay from '~/images/paper-overlay.jpg';
import BgUrl from '~/images/url/url-bg.png';

import ShortURLModal from './components/ShortURLModal';

type FormValues = {
  url: string;
  alias: string;
};

function ShortLink() {
  const [shortenedUrl, setShortenedUrl] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const methods = useForm<FormValues>({
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const host =
    typeof window !== 'undefined' && window.location.host
      ? window.location.host.replace(/^www\./, '')
      : '';

  const path = host + '/go/';

  const onSubmit = (data: FormValues) => {
    api
      .post<ApiResponse<string | null>>('/url_shortener', data, {
        toastify: true,
        loadingMessage: 'Shorting your url...',
      })
      .then(() => {
        setShortenedUrl(path + data.alias);
        setOpen(true);
        methods.reset();
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      methods.setValue('url', clipboardText);
    } catch (error) {
      //console.error('Failed to read clipboard contents: ', error);
    }
  };

  return (
    <section className='h-screen w-full overflow-hidden relative bg-secondary-70 lg:flex items-center'>
      <div className='absolute bottom-0 h-[80vh]'>
        <div className='relative w-screen h-full'>
          <Image
            sizes='100vw'
            className='grayscale opacity-30 brightness-150 object-cover object-top'
            fill
            src={BgUrl}
            alt='background url'
          />
        </div>
      </div>
      <div className='absolute h-screen w-screen'>
        <div className='relative h-full w-full'>
          <Image
            className='brightness-[.60] mix-blend-overlay object-cover'
            fill
            sizes='100vh'
            src={PaperOverlay}
            alt='paper glued'
          />
        </div>
      </div>
      <Grid className='w-full h-full lg:h-fit'>
        <Cell cols='4_1' colsMd='11_2' colsLg='1_2'>
          <LogoVertical className='justify-center w-20 lg:w-32' />
        </Cell>
        <Cell cols='1_full' colsLg='1_6' className='relative'>
          <YellowStart className='absolute left-60 top-8 lg:-top-8 lg:-left-12 lg:w-16 lg:h-auto' />
          <div className='relative w-fit'>
            <Typography
              color='white'
              variant='h5'
              weight='medium'
              font='anton'
              className='drop-shadow-lg relative lg:drop-shadow-2xl lg:text-h3 w-fit z-10'
            >
              LINK SHORTENER
            </Typography>
            <div className='absolute w-36 -right-2 lg:-right-4 lg:-top-2 top-0 z-0 lg:w-72'>
              <YellowCircle />
            </div>
          </div>
          <Typography
            color='white'
            variant='h4'
            weight='medium'
            font='anton'
            className='drop-shadow-lg lg:drop-shadow-2xl lg:text-h3'
          >
            SRE ITS 2023
          </Typography>
          <Typography
            variant='bt'
            weight='medium'
            font='epilogue'
            className='text-primary-40 mt-4 max-w-sm lg:max-w-xl lg:text-h6'
          >
            Shorten and organize links related to SRE ITS with our link
            shortener tool!
          </Typography>
        </Cell>
        <Cell cols='1_full' colsLg='7_6' className='mt-12'>
          <FormProvider {...methods}>
            <form
              className='flex flex-col gap-8 items-end'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='w-full lg:max-w-xl h-9 flex'>
                <Input
                  className='md:rounded-r-none'
                  id='url'
                  placeholder='Original Url'
                  validation={{
                    required: 'This field is required!',
                    pattern: {
                      value: /^(https?:\/\/[^\s]+)+$/,
                      message: 'Must start with http:// or https://',
                    },
                  }}
                />
                <div className='hidden md:block'>
                  <Button
                    variant='outline-primary'
                    className={clsxm(
                      'h-9 md:min-h-0 w-12 py-0 px-2 rounded-lg text-success-40',
                      'rounded-l-none flex items-center',
                      'hover:bg-gray-100',
                    )}
                    onClick={handlePaste}
                  >
                    <MdContentPaste size={20} />
                  </Button>
                </div>
              </div>
              <div className='flex w-full lg:max-w-xl'>
                <div className='h-9 max-w-[174px] md:max-w-sm w-fit px-3 bg-secondary-80 rounded-l-lg flex items-center'>
                  <Typography
                    className='mt-[1px] text-ellipsis whitespace-nowrap'
                    font='epilogue'
                    weight='medium'
                    variant='bt'
                    color='white'
                    validation={{
                      required: 'This field is required!',
                    }}
                  >
                    sre-its.com/go/
                  </Typography>
                </div>
                <Input
                  id='alias'
                  placeholder='Customize Url'
                  className='rounded-l-none'
                  validation={{
                    required: 'This field is required!',
                  }}
                />
              </div>
              <Button
                className={clsxm(
                  'px-6 py-2 rounded-r-lg w-fit',
                  'bg-primary-50 hover:bg-primary-60 active:bg-primary-70',
                )}
                type='submit'
              >
                <Typography
                  color='white'
                  weight='medium'
                  font='epilogue'
                  variant='bt'
                >
                  Generate
                </Typography>
              </Button>
            </form>
            <ShortURLModal open={open} setOpen={setOpen}>
              <div className='flex flex-col gap-y-2 md:gap-y-3'>
                <Typography
                  weight='medium'
                  font='epilogue'
                  variant='c1'
                  className={clsxm('mt-4 mx-auto md:text-[16px]')}
                >
                  Here&apos;s your shortened URL :
                </Typography>
                <div className='w-full mx-auto flex'>
                  <Input
                    id='shortenedUrl'
                    value={shortenedUrl}
                    className={clsxm(
                      'placeholder:text-xs placeholder:leading-6 placeholder:font-medium',
                      'text-xs md:text-base leading-6 font-epliogue text-[#092540] font-medium',
                      'py-3 px-4 bg-white rounded-r-none rounded-l-lg',
                    )}
                    readOnly
                    rightIconClassName='cursor-pointer'
                  />
                  <Button
                    variant='primary'
                    className={clsxm(
                      'w-5/12 px-10 rounded-r-lg rounded-l-none',
                      'bg-secondary-50 hover:bg-secondary-60 active:bg-secondary-70',
                    )}
                    onClick={handleCopy}
                  >
                    <Typography
                      color='white'
                      weight='medium'
                      font='epilogue'
                      variant='c1'
                      className={clsxm('md:text-[16px] md:leading-[24px] ')}
                    >
                      Copy
                    </Typography>
                  </Button>
                </div>
              </div>
            </ShortURLModal>
          </FormProvider>
        </Cell>
        <Cell
          cols='1_full'
          colsLg='7_6'
          className='flex justify-end mt-10 lg:mt-32'
        >
          <TaglineText className='lg:w-96 lg:h-auto' />
        </Cell>
      </Grid>
    </section>
  );
}

export default ShortLink;
