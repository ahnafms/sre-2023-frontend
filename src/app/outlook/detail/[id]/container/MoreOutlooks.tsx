'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LuChevronDown, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { PaginatedApiResponse } from '@/types/api';
import { Outlook } from '@/types/entities/outlook';

import OutlookCard from '../components/OutlookCard';

export default function MoreOutlooks({ id }: { id: string }) {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(3);

  const { data: outlooksResponse } = useQuery<PaginatedApiResponse<Outlook[]>>({
    queryKey: [`/outlook?page=${page}&per_page=${perPage}`],
  });

  const outlooks =
    outlooksResponse?.data.filter(({ id: outlookId }) => outlookId != id) ?? [];
  const outlooksMaxPage = outlooksResponse?.meta.max_page ?? 0;
  const outlooksTotal = outlooksResponse?.meta.count ?? 0;

  const canNextPage = page < outlooksMaxPage;
  const canPrevPage = page > 1;
  const canLoadMore = outlooks.length < outlooksTotal;

  const handleNextPage = () => {
    if (!canNextPage) return;
    setPage(prev => prev + 1);
  };
  const handlePrevPage = () => {
    if (!canPrevPage) return;
    setPage(prev => prev - 1);
  };
  const handleLoadMore = () => {
    if (!canLoadMore) return;
    setPage(1);
    setPerPage(prev => prev + 3);
  };

  return (
    <div className='space-y-6 md:space-y-8'>
      <div className='w-full flex justify-between items-center'>
        <Typography
          as='h3'
          variant='btn'
          font='epilogue'
          color='white'
          weight='bold'
          className='md:text-[32px] md:leading-[48px]'
        >
          Read More
        </Typography>
        <div className='hidden md:flex gap-6'>
          <IconButton
            type='button'
            icon={LuChevronLeft}
            variant='none'
            className='p-0 bg-typo-white rounded-none disabled:bg-typo-outline disabled:text-typo-icon'
            iconClassName='w-8 h-8'
            disabled={!canPrevPage}
            onClick={handlePrevPage}
          />
          <IconButton
            type='button'
            icon={LuChevronRight}
            variant='none'
            className='p-0 bg-typo-white rounded-none disabled:bg-typo-outline disabled:text-typo-icon'
            iconClassName='w-8 h-8'
            disabled={!canNextPage}
            onClick={handleNextPage}
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6'>
        {outlooks.map(outlook => (
          <div key={outlook.id} className='group col-span-full md:col-span-1'>
            <OutlookCard {...outlook} />
          </div>
        ))}
      </div>

      <div
        className={clsxm(
          'flex md:hidden w-full justify-center',
          !canLoadMore && 'hidden',
        )}
      >
        <Button
          variant='warning'
          rightIcon={LuChevronDown}
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
