'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { LuSearch } from 'react-icons/lu';

import DocumentCard from '@/app/(landing)/(document)/_containers/DocumentCard';
import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { PaginatedApiResponse } from '@/types/api';
import { Document, DocumentVariant } from '@/types/entities/document';

const DEBOUNCE_MS = 1000;

export default function DocumentPage({
  params,
}: {
  params: { type: DocumentVariant };
}) {
  const title = params.type;
  const description =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit. Ut et massa mi. Aliquam in hendrerit. Ut et massa mi. Aliquam in hendrerit. End.';

  const [perPage, setPerPage] = React.useState(9);
  const [filter, setFilter] = React.useState('');

  const { data: documentsResponse, isLoading } = useQuery<
    PaginatedApiResponse<Document[]>
  >({
    queryKey: [
      `/${params.type}?per_page=${perPage}${filter && `&search=${filter}`}`,
    ],
  });

  const documents = documentsResponse?.data ?? [];
  const documentsTotal = documentsResponse?.meta.count ?? 0;
  const canLoadMore = documents.length < documentsTotal;

  const handleFilter = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const timeout = setTimeout(() => {
        setFilter(e.target.value);
      }, DEBOUNCE_MS);
      return () => clearTimeout(timeout);
    },
    [],
  );

  const handleLoadMore = () => {
    if (!canLoadMore) return;
    setPerPage(prev => prev + 9);
  };

  return (
    <div className='w-full relative z-30 flex flex-col gap-10 items-center'>
      <Grid className='w-full gap-y-10 md:gap-y-20'>
        <Cell
          cols='1_full'
          className='space-y-3 md:space-y-6 max-w-3xl mx-auto'
        >
          <Typography
            as='h2'
            variant='h5'
            weight='regular'
            color='white'
            font='anton'
            className='md:text-[72px] md:leading-[90px] w-full text-center drop-shadow-lg capitalize'
          >
            {title}
          </Typography>
          <Typography
            as='p'
            variant='c2'
            weight='regular'
            color='white'
            className='md:text-[18px] md:leading-[24px] w-full text-center'
          >
            {description}
          </Typography>
        </Cell>
        <Cell cols='1_full' className='flex justify-center'>
          <div className='relative max-w-3xl w-full'>
            <input
              placeholder='Cari Dokumen'
              defaultValue={filter}
              onChange={handleFilter}
              autoFocus
              className={clsxm(
                'w-full py-3 pr-6 pl-20 rounded-full',
                'text-[18px] leading-[24px] md:leading-[32px] font-epilogue',
                'bg-typo-surface focus:ring-0 focus:border-none focus:outline-none',
              )}
            />
            <div className='absolute top-0 left-0 h-full pl-6 flex items-center'>
              <LuSearch className='w-6 h-6 md:w-8 md:h-8' />
            </div>
          </div>
        </Cell>
        {isLoading && <Loading />}
        <Cell
          cols='1_full'
          className={clsxm(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
            isLoading && 'hidden',
          )}
        >
          {documents.map((document, index) => (
            <DocumentCard
              key={document.id}
              type={params.type}
              withRecentBadge={index === 0}
              {...document}
            />
          ))}
        </Cell>
      </Grid>
      <Button
        variant='warning'
        size='lg'
        rightIcon={IoChevronDown}
        rightIconClassName=' text-tertiary-80'
        className={clsxm(
          'bg-primary-40',
          (!canLoadMore || isLoading) && 'hidden',
        )}
        onClick={handleLoadMore}
      >
        <Typography
          variant='bt'
          weight='medium'
          className=' text-tertiary-80 md:font-semibold'
        >
          Load More
        </Typography>
      </Button>
    </div>
  );
}
