'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { IoChevronDown } from 'react-icons/io5';
import { LuSearch } from 'react-icons/lu';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';
import { ApiResponseMeta } from '@/types/api';
import { Outlook } from '@/types/entities/outlook';
import bgEarth from '~/images/outlook/earth.png';
import bgPattern from '~/images/outlook/pattern.png';

import DocumentCard from './DocumentCard';

interface DocumentComponentProps {
  // API CALL
  type: string;
  //
  title: string;
  description: string;
}

export default function DocumentComponent({
  type = 'outlook',
  title = 'Document',
  description = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
}: DocumentComponentProps) {
  const [perPage, setPerPage] = React.useState(3);
  const { register, watch } = useForm({
    defaultValues: {
      search: '',
    },
  });
  const searchQuery = watch('search');
  const isSearching = searchQuery.length > 0;

  const {
    data: responseData,
    isLoading,
    refetch,
  } = useQuery<ApiResponseMeta<Outlook[]>>({
    queryKey: [`/${type}?per_page=${perPage}`],
  });

  React.useEffect(() => {
    if (responseData?.meta.per_page) {
      setPerPage(responseData.meta.per_page);
    }
  }, [responseData?.meta.per_page]);

  const sortedData = React.useMemo(() => {
    return responseData?.data.sort(
      (a, b) =>
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime(),
    );
  }, [responseData]);

  const filteredData = sortedData?.filter(outlook =>
    outlook.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleLoadMore = () => {
    setPerPage(prevPerPage => prevPerPage + 3);
    refetch();
  };

  return (
    <main id='outlook' className='relative bg-secondary-60 overflow-hidden'>
      <div className='absolute z-0 top-0 left-0 w-full h-full'>
        <Image
          src={bgEarth}
          alt='Earth Background'
          width={1159}
          height={1159}
          className='absolute top-[20%] lg:top-[25%] lg:scale-125 w-full z-10 h-screen object-cover md:object-contain'
        />
        <Image
          src={bgPattern}
          alt='Pattern Background'
          width={1439}
          height={2460}
          className='absolute top-0 left-0 z-0 w-full h-full object-cover'
        />
      </div>
      <section className='overflow-x-hidden overflow-y-clip min-h-screen w-full mx-auto relative z-10 mb-14'>
        <Navbar />
        <Grid className='relative z-30'>
          <Cell
            cols='2_2'
            colsMd='4_4'
            colsLg='5_4'
            className='w-full mx-auto justify-center items-center md:mt-4'
          >
            <div className='w-fit mx-auto'>
              <Typography
                as='h2'
                variant='h5'
                weight='regular'
                color='white'
                font='anton'
                className='md:text-[72px] md:leading-[90px] mx-auto drop-shadow-lg'
              >
                {title}
              </Typography>
            </div>
          </Cell>
          <Cell cols='1_4' colsMd='3_7' colsLg='3_8' className='mt-3 md:mt-6'>
            <div className='w-fit mx-auto'>
              <Typography
                as='p'
                variant='c2'
                weight='regular'
                color='white'
                className='md:text-[18px] md:leading-[24px] mx-auto text-center'
              >
                {description}
              </Typography>
            </div>
          </Cell>
          <Cell
            cols='1_4'
            colsMd='2_9'
            colsLg='3_8'
            className='relative w-full h-full my-10 md:mt-20 md:mb-24'
          >
            <input
              placeholder='Cari Dokumen'
              {...register('search')}
              className={clsxm(
                'w-full relative py-4 pr-6 pl-[4.5rem] rounded-full',
                'placeholder:text-lg placeholder:font-epliogue',
                'text-lg font-epliogue',
                'bg-typo-surface focus:ring-0 focus:border-none focus:outline-none',
              )}
            />
            <LuSearch className='absolute left-7 top-4 w-6 h-6' />
          </Cell>
        </Grid>
        <DocumentCard
          data={filteredData}
          isLoading={isLoading}
          isSearching={isSearching}
        />
        {isLoading ? (
          <Loading />
        ) : (
          responseData?.meta?.max_page &&
          responseData.meta.max_page > 1 && (
            <div className='w-full flex justify-center items-center mx-auto mt-10'>
              <Button
                variant='warning'
                size='lg'
                rightIcon={IoChevronDown}
                rightIconClassName=' text-tertiary-80'
                className='w-fit bg-primary-40 mx-auto'
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
          )
        )}
      </section>
      <div className='relative z-10'>
        <Footer />
      </div>
    </main>
  );
}
