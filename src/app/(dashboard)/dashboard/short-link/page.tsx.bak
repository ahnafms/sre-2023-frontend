'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IoLinkSharp } from 'react-icons/io5';
import { MdContentPaste } from 'react-icons/md';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Input from '@/components/form/Input';
import Grid from '@/components/Grid';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { ApiResponse } from '@/types/api';

type FormValues = {
  url: string;
  alias: string;
};

export default withAuth(ShortLink, ['authed']);

function ShortLink() {
  const [shortenedUrl, setShortenedUrl] = React.useState<string>('');

  const methods = useForm<FormValues>({
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const path = location.protocol + '//' + location.host + '/go/';

  const watchAlias = methods.watch('alias');

  const onSubmit = (data: FormValues) => {
    api
      .post<ApiResponse<string | null>>('/url_shortener', data, {
        toastify: true,
        loadingMessage: 'Shorting your url...',
      })
      .then(() => {
        setShortenedUrl(path + data.alias);
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
    <section className='h-full justify-center flex bg-typo-white'>
      <Grid className='w-full'>
        <Cell cols='1_full' className='flex flex-col'>
          <div className='flex flex-col mb-10 mt-14 md:mt-16 px-4 md:px-0'>
            <Typography
              color='dark'
              variant='bt'
              weight='medium'
              font='epilogue'
              className={clsxm('text-[#092540]')}
            >
              SRE ITS 2023
            </Typography>
            <Typography
              color='dark'
              variant='h6'
              weight='semibold'
              font='epilogue'
              className={clsxm(
                'text-[#092540] md:text-[32px] md:leading-[48px]',
              )}
            >
              Shorten Link Generate
            </Typography>
          </div>
          <div className='w-full h-fit md:shadow-md md:rounded-xl flex flex-col py-5 px-4 md:py-11 md:px-8 bg-none md:bg-white'>
            <FormProvider {...methods}>
              <form
                className='flex flex-col gap-y-4 md:gap-y-6'
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className='w-full flex'>
                  <div
                    className={clsxm(
                      'w-[32%] rounded-l-lg rounded-r-none hidden h-[48px] md:flex md:justify-center items-center',
                      'bg-secondary-50 ',
                    )}
                  >
                    <Typography
                      color='white'
                      weight='medium'
                      font='epilogue'
                      variant='bt'
                      className={clsxm(' md:text-[16px] md:leading-[24px]')}
                    >
                      Original URL
                    </Typography>
                  </div>
                  <Input
                    id='url'
                    placeholder='Link Panjang'
                    validation={{
                      required: 'This field is required!',
                      pattern: {
                        value: /^(https?:\/\/[^\s]+)+$/,
                        message: 'Must start with http:// or https://',
                      },
                    }}
                    className={clsxm(
                      'placeholder:text-xs md:placeholder:text-base placeholder:leading-6',
                      'text-xs md:text-base leading-6 font-epliogue text-[#092540] font-medium',
                      'py-3 px-4 w-[100%] bg-[#F0F2F5] outline-none ring-0 focus:ring-0',
                      'md:rounded-l-none md:rounded-r-lg focus:bg-[#F9FAFB]',
                    )}
                  />
                  <Button
                    variant='outline-primary'
                    className={clsxm(
                      'ml-4 h-[48px] w-[18%] px-6 hidden rounded-lg md:flex',
                      'border-2 border-success-40 flex-row',
                    )}
                    leftIcon={MdContentPaste}
                    leftIconClassName='text-success-40'
                    onClick={handlePaste}
                  >
                    <Typography
                      color='white'
                      weight='medium'
                      font='epilogue'
                      variant='btn'
                      className={clsxm(
                        'md:text-[16px] md:leading-[24px]',
                        'text-success-40',
                      )}
                    >
                      Paste
                    </Typography>
                  </Button>
                </div>
                <div className='w-full flex'>
                  <div
                    className={clsxm(
                      'w-[26%] h-[48px] rounded-l-lg rounded-r-none hidden md:flex md:justify-center items-center',
                      'bg-secondary-50',
                    )}
                  >
                    <Typography
                      color='white'
                      weight='medium'
                      font='epilogue'
                      variant='bt'
                      className={clsxm(' md:text-[16px] md:leading-[24px]')}
                    >
                      Customize
                    </Typography>
                  </div>
                  <div className='w-full relative'>
                    <Input
                      id='alias'
                      placeholder='url custom'
                      validation={{
                        required: 'This field is required!',
                      }}
                      className={clsxm(
                        'placeholder:text-xs placeholder:font-medium md:placeholder:text-base placeholder:leading-6',
                        'text-xs md:text-base leading-6 font-epliogue text-[#092540] font-medium',
                        // 'py-3 pl-[137px] md:pl-[11.1rem] pr-4 bg-[#F0F2F5] outline-none ring-0 focus:ring-0',
                        'py-3 pr-4 bg-[#F0F2F5] outline-none ring-0 focus:ring-0',
                        'md:rounded-l-none md:rounded-r-lg focus:bg-[#F9FAFB]',
                      )}
                    />
                    {/* <Typography */}
                    {/*   color='white' */}
                    {/*   weight='medium' */}
                    {/*   font='epilogue' */}
                    {/*   variant='bt' */}
                    {/*   className={clsxm( */}
                    {/*     'text-xs text-[#092540] md:text-base font-medium absolute top-[16px] md:top-[11px] left-4', */}
                    {/*   )} */}
                    {/* > */}

                    {/* </Typography> */}
                  </div>
                </div>
                <div className='text-center'>
                  <Typography
                    font='epilogue'
                    color='dark'
                    variant='c1'
                    weight='medium'
                    className={clsxm('md:text-[16px] md:leading-[24px]')}
                  >
                    {path + (watchAlias ?? '')}
                  </Typography>
                </div>
                <Button
                  leftIcon={IoLinkSharp}
                  leftIconClassName={clsxm('w-5 h-5')}
                  type='submit'
                  className={clsxm(
                    'w-full py-3 items-center',
                    'bg-success-40 hover:bg-success-50 active:bg-success-60',
                  )}
                >
                  <Typography
                    font='epilogue'
                    color='white'
                    variant='c1'
                    weight='medium'
                    className={clsxm('md:text-[16px] md:leading-[24px]')}
                  >
                    Shorten Link
                  </Typography>
                </Button>
                {shortenedUrl && (
                  <div className='flex flex-col gap-y-2 md:gap-y-3'>
                    <Typography
                      weight='medium'
                      font='epilogue'
                      variant='c1'
                      className={clsxm('mt-10 md:mt-12 mx-auto md:text-[16px]')}
                    >
                      Here&apos;s your shortened URL :
                    </Typography>
                    <div className='w-full md:w-1/2 mx-auto flex'>
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
                )}
              </form>
            </FormProvider>
          </div>
        </Cell>
      </Grid>
    </section>
  );
}
