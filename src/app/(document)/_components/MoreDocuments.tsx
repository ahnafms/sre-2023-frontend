'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LuChevronDown, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import DocumentCard from '@/app/(document)/_containers/DocumentCard';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { PaginatedApiResponse } from '@/types/api';
import { Document, DocumentVariant } from '@/types/entities/document';

export default function MoreDocuments({
  id,
  type,
}: {
  id: string;
  type: DocumentVariant;
}) {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(3);

  const { data: documentsResponse } = useQuery<
    PaginatedApiResponse<Document[]>
  >({
    queryKey: [`/${type}?page=${page}&per_page=${perPage}`],
  });

  const documents =
    documentsResponse?.data.filter(({ id: documentId }) => documentId != id) ??
    [];
  const documentsMaxPage = documentsResponse?.meta.max_page ?? 0;
  const documentsTotal = documentsResponse?.meta.count ?? 0;

  const canNextPage = page < documentsMaxPage;
  const canPrevPage = page > 1;
  const canLoadMore = documents.length < documentsTotal - 1;

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
    <div
      className={clsxm(
        'space-y-6 md:space-y-8',
        documents.length === 0 && 'hidden',
      )}
    >
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
        {documents.map(document => (
          <DocumentCard key={document.id} type={type} {...document} />
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
