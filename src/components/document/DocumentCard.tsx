import Image from 'next/image';
import React from 'react';

import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import { Outlook } from '@/types/entities/outlook';

interface DocumentCardProps {
  data: Outlook[] | undefined;
  isLoading: boolean;
  isSearching: boolean;
}

export default function DocumentCard({
  data,
  isLoading,
  isSearching,
}: DocumentCardProps) {
  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }
  const isRecent = (outlook: Outlook) => {
    if (!data || data.length === 0) return false;
    return data[0].id === outlook.id;
  };
  return (
    <div className='w-full h-full gap-6 md:gap-8 px-4 sm:px-6 md:px-[100px] mx-auto justify-center items-end grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
      {isLoading ? (
        <Loading />
      ) : (
        data?.map(data => (
          <div
            key={data.id}
            className='flex flex-col gap-8 w-[342px] md:w-fit h-auto p-4 md:p-6 mx-auto bg-typo-surface cursor-pointer rounded-xl md:rounded-3xl'
          >
            {!isSearching && isRecent(data) && (
              <div className='flex items-center gap-[6px]'>
                <div className='bg-primary-50 w-3 h-[33px]' />
                <Typography variant='t' weight='semibold' color='dark'>
                  New Publication
                </Typography>
              </div>
            )}
            <figure className='w-full aspect-video rounded-xl overflow-hidden'>
              <Image
                src={data.cover_file_path}
                alt='Outlook Cover'
                width={1280}
                height={720}
                className='w-full h-full object-cover bg-typo-inline'
              />
            </figure>
            <div className='flex flex-col gap-y-2'>
              <Typography
                as='h2'
                variant='bt'
                weight='bold'
                color='dark'
                className='md:text-[20px] md:leading-[24px] w-[322px] md:w-[344px] h-[48px] overflow-hidden text-ellipsis my-auto'
              >
                {data.title}
              </Typography>
              <Typography
                variant='btn'
                weight='regular'
                className='text-secondary-60 md:text-[18px] md:leading-[24px]'
              >
                {formatDate(data.release_date)}
              </Typography>
              <Typography
                as='p'
                variant='c1'
                color='dark'
                weight='regular'
                className='md:text-[18px] md:leading-[24px] overflow-hidden text-ellipsis h-[48px] md:h-[144px] whitespace-pre-wrap'
              >
                {data.description}
              </Typography>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
