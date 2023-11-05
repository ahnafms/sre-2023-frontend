'use client';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import NextImage from 'next/image';
import * as React from 'react';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

import DivisionMember from './components/DivisionMember';
import HeroCard from './components/HeroCard';
import { Divisions } from './constant/Divisions';
import HeroBackground from './container/HeroBackground';
import WhatDoBackground from './container/WhatDoBackground';

export default function About() {
  return (
    <main>
      <section className='min-h-screen h-full flex flex-col justify-center items-center overflow-hidden relative py-20 md:py-0'>
        <HeroBackground />
        <Grid className='z-[5]'>
          <Cell
            cols='1_full'
            colsMd='2_10'
            rows='1_1'
            className='flex flex-col'
          >
            <Typography
              as='h1'
              variant='h1'
              font='anton'
              className={clsxm(
                'text-primary-50 text-center',
                'text-[32px] leading-[48px] md:text-[64px] md:leading-[84px] lg:text-[80px] lg:leading-[96px]',
              )}
            >
              Our Commitment to Sustainable Development Goals
            </Typography>
          </Cell>
        </Grid>
        <div className='bg-primary-50 mx-auto w-[95%] lg:w-[82%] h-[583px] lg:h-[45vh] flex justify-center items-center overflow-hidden z-[3] mt-9 lg:mt-[5vh] drop-shadow-2xl'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            spaceBetween={55}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 75,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            direction='vertical'
            className='swiper_container lg:w-[642px] w-[85%] rounded-xl'
          >
            {/* kalo udah ada datanya bisa jadiin swiperslidenya template */}
            <div>
              <SwiperSlide>
                <HeroCard />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <HeroCard />
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                <HeroCard />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>

      <section className='bg-[#FFFFFF] min-h-screen h-full flex justify-center items-center overflow-hidden relative py-20 md:py-0'>
        <Grid className='z-[5]'>
          <Cell colsMd='1_7' cols='1_full' className='flex flex-col'>
            <Typography
              as='h1'
              variant='h1'
              font='anton'
              className={clsxm(
                'text-secondary-70 text-center md:text-left',
                'text-[32px] leading-[48px] lg:text-[80px] md:text-[64px] md:leading-[84px] lg:leading-[96px]',
              )}
            >
              What do they say about SRE?
            </Typography>
            <NextImage
              src='/images/about/foto1.png'
              alt='foto sre'
              width={1039}
              height={807}
              className='md:hidden mt-3 w-4/5 mx-auto'
            />
            <Typography
              as='h4'
              variant='h4'
              font='epilogue'
              weight='bold'
              className={clsxm(
                'text-primary-60 md:mt-5 mt-3 ml-[9%] md:ml-0',
                'text-[24px] leading-[32px] md:text-[32px] md:leading-[48px] lg:text-[48px] lg:leading-[64px]',
              )}
            >
              Fulan bin Fulan
            </Typography>
            <Typography
              as='h6'
              variant='h6'
              font='epilogue'
              weight='medium'
              className={clsxm(
                'text-typo-dark ml-[9%] md:ml-0',
                'text-[20px] leading-[24px] lg:text-[24px] lg:leading-[32px]',
              )}
            >
              SRE President 2022/2023
            </Typography>
            <Typography
              as='p'
              variant='t'
              font='epilogue'
              className={clsxm(
                'text-typo-dark md:w-4/6 w-5/6 md:mt-5 mt-3 ml-[9%] md:ml-0',
                'text-[14px] leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[24px]',
              )}
            >
              Discover our team - a talented, passionate group dedicated to
              excellence. From seasoned experts to fresh innovators, we&apos;re
              the driving force behind our success. Welcome to our world!*
            </Typography>
          </Cell>
          <Cell colsMd='8_5'>
            <NextImage
              src='/images/about/foto1.png'
              alt='foto sre'
              width={1039}
              height={807}
              className='hidden md:block'
            />
          </Cell>
        </Grid>
        <WhatDoBackground />
      </section>

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
                excellence. From seasoned experts to fresh innovators,
                we&apos;re the driving force behind our success. Welcome to our
                world!*
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
                The Divisions
              </Typography>
            </Cell>
            <Cell
              cols='1_4'
              colsMd='2_10'
              className='flex flex-wrap lg:justify-center justify-between lg:gap-x-5 gap-y-4 '
            >
              {Divisions.map((divisi, index) => (
                <Button
                  key={index}
                  variant='outline-black'
                  size='sm'
                  className='py-2 px-4'
                >
                  {divisi.nama}
                </Button>
              ))}
            </Cell>
          </Grid>
        </section>

        <section className='h-full flex flex-col justify-center items-center overflow-x-hidden relative pb-20 z-[5]'>
          <DivisionMember />
        </section>
        <NextImage
          src='/images/about/paper5.png'
          alt='paper'
          width={239}
          height={1600}
          className='absolute top-0 w-full z-[0]'
        />
      </section>
    </main>
  );
}
