import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { ApiResponse } from '@/types/api';
import { SponsorColumn } from '@/types/entities/sponsor';
import SponsorBg from '~/images/landing/sponsor-bg.png';

import Cell from '../Cell';
import Grid from '../Grid';
import YellowStar from '../logo/YellowStar';
import Typography from '../Typography';

// TODO: create custom marquee with gsap

const Sponsor = () => {
  const { data: queryData } = useQuery<ApiResponse<Array<SponsorColumn>>>({
    queryKey: ['/sponsor'],
  });

  return (
    <div className='min-h-screen'>
      <Marquee autoFill={true} className='h-16 md:h-24 z-0'>
        <Typography
          font='anton'
          variant='h6'
          color='white'
          className='drop-shadow-text md:text-h4'
        >
          Society of Renewable Energy
        </Typography>
        <div className='mx-4'>
          <YellowStar
            className='animate-spin-16 w-10 md:w-14 lg:w-16'
            fillpath='#FCFCFC'
          />
        </div>
        <Typography
          font='anton'
          variant='h6'
          color='white'
          className='drop-shadow-text md:text-h6'
        >
          Sepuluh Nopember Institute of Technology
        </Typography>
        <div className='mx-4'>
          <YellowStar
            className='animate-spin-16 w-10 md:w-14 lg:w-16'
            fillpath='#FCFCFC'
          />
        </div>
      </Marquee>
      <Marquee autoFill={true} className='h-16 md:h-24 z-0'>
        <div className='mx-4'>
          <YellowStar
            className='animate-spin-16 w-10 md:w-14 lg:w-16'
            fillpath='#FCFCFC'
          />
        </div>
        <Typography
          font='anton'
          variant='h6'
          color='white'
          className='drop-shadow-text md:text-h4'
        >
          Sepuluh Nopember Institute of Technology
        </Typography>
        <div className='mx-4'>
          <YellowStar
            className='animate-spin-16 w-10 md:w-14 lg:w-16'
            fillpath='#FCFCFC'
          />
        </div>
        <Typography
          font='anton'
          variant='h6'
          color='white'
          className='drop-shadow-text md:text-h4'
        >
          Society of Renewable Energy
        </Typography>
      </Marquee>
      <Grid className='relative z-50 pt-48 md:pt-64 lg:pt-80 pb-6 md:pb-20'>
        <Cell
          cols='1_full'
          colsMd='3_8'
          className='text-center flex justify-center items-center gap-x-4 md:gap-x-10'
        >
          <div className='w-[120vw] h-32 md:h-80 absolute -translate-x-8'>
            <div className='w-full h-full relative'>
              <Image
                src={SponsorBg}
                alt='bg-sponsor-sre'
                fill={true}
                className='object-cover'
              />
            </div>
          </div>
          <YellowStar className='animate-spin-16 w-10 md:w-14 lg:w-16' />
          <Typography
            font='anton'
            variant='h5'
            className='drop-shadow-text lg:text-h3 text-primary-50 md:text-h4'
          >
            Our Partners
          </Typography>
          <YellowStar className='animate-spin-16 w-10 md:w-14 lg:w-16' />
        </Cell>
      </Grid>
      <Marquee autoFill={true} className='h-24 mt-20 z-20'>
        {queryData?.data &&
          queryData.data.map((sponsor, idx) => (
            <div
              className='bg-white w-64 md:w-72 h-20 md:h-24 rounded-md flex justify-center items-center mr-12 p-4'
              key={idx}
            >
              <div className='w-full h-full relative'>
                <Image
                  src={sponsor.file_path}
                  fill={true}
                  alt={sponsor.name}
                  className='object-contain'
                />
              </div>
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default Sponsor;
