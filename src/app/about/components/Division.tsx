import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import { Divisions } from '@/constant/division';
import clsxm from '@/lib/clsxm';
import { Division } from '@/types/entities/division';
import { DivisionEnum } from '@/types/entities/division-list';

import DivisionMember from './DivisionMember';

export default function Division() {
  const [division, setDivision] = useState<keyof typeof DivisionEnum | null>(
    null,
  );

  function handleShowDivision({
    divisi,
  }: {
    divisi: keyof typeof DivisionEnum;
  }) {
    const isMobile = window.innerWidth <= 768;

    setDivision(currentDivision =>
      isMobile
        ? currentDivision !== divisi
          ? divisi
          : currentDivision
        : currentDivision === divisi
          ? null
          : divisi,
    );
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    function closeAllDivisions() {
      if (mediaQuery.matches) {
        setDivision(prev => (prev === null ? 'BoE' : prev));
      }
    }

    closeAllDivisions();

    mediaQuery.addEventListener('change', closeAllDivisions);
    return () => {
      mediaQuery.removeEventListener('change', closeAllDivisions);
    };
  }, [division]);

  return (
    <section className='overflow-hidden relative w-full'>
      <section className='h-full flex flex-col justify-center items-center overflow-x-hidden relative pt-12 lg:pt-20 pb-12 z-[5]'>
        <Grid className='z-[5]'>
          <Cell cols='1_4' colsMd='1_12' className='flex flex-col'>
            <Typography
              as='h1'
              variant='h1'
              font='anton'
              className={clsxm(
                'text-primary-50 text-center',
                'text-[32px] leading-[48px] md:text-[64px] md:leading-[84px] lg:text-[80px] lg:leading-[96px]',
              )}
            >
              Meet Our Team
            </Typography>
          </Cell>
          <Cell cols='1_4' colsMd='2_10' className='lg:mt-3 mt-6'>
            <Typography
              as='p'
              variant='t'
              weight='medium'
              font='epilogue'
              className={clsxm(
                'text-typo-white text-center',
                'text-[14px] leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[24px]',
              )}
            >
              Discover our team - a talented, passionate group dedicated to
              excellence. From seasoned experts to fresh innovators, we&apos;re
              the driving force behind our success. Welcome to our world!*
            </Typography>
          </Cell>
          <Cell
            cols='1_4'
            colsMd='1_12'
            className='flex flex-col lg:mt-7 mt-5 lg:mb-5 mb-7'
          >
            <Typography
              as='h5'
              variant='h5'
              font='anton'
              className={clsxm(
                'text-primary-50 text-center',
                'text-[20px] leading-[24px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[48px]',
              )}
            >
              Departments
            </Typography>
          </Cell>
          <Cell
            cols='1_4'
            colsMd='2_10'
            className='flex flex-wrap lg:justify-center justify-between lg:gap-x-5 gap-y-4 gap-x-3'
          >
            {Divisions.map((divisi, index) => (
              <Button
                onClick={() => handleShowDivision({ divisi })}
                key={index}
                variant='outline-white'
                size='sm'
                className={clsx(
                  'py-2 px-4',
                  divisi == division && 'bg-primary-50 border-none font-bold',
                )}
              >
                {divisi}
              </Button>
            ))}
          </Cell>
        </Grid>
      </section>
      <section className='h-full flex flex-col justify-center items-center overflow-x-hidden relative pb-20 z-[5]'>
        <DivisionMember division={division} />
      </section>
    </section>
  );
}
