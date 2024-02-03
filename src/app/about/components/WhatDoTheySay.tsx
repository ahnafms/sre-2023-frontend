import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import Image from 'next/image';
import * as React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import testimonialItems from '@/constant/testimonial';
import clsxm from '@/lib/clsxm';
import { formatName } from '@/utilities/string';

import WhatDoBackground from '../container/WhatDoBackground';
import TestimonialModalButton from './TestimonialModal';

export default function WhatDoTheySay() {
  const [testiIdx, setTestiIdx] = React.useState(0);
  return (
    <section className='bg-[#FFFFFF] min-h-screen h-full flex justify-center items-center overflow-hidden relative py-20 md:py-0'>
      <Grid className='z-[5]'>
        <Cell
          colsLg='1_6'
          colsMd='1_6'
          cols='1_full'
          colsSm='2_2'
          className='md:flex flex-col'
        >
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
          <Swiper
            modules={[Pagination]}
            scrollbar={{ draggable: false }}
            pagination={true}
            centeredSlides={true}
            loop={false}
            className='md:!hidden'
            onTransitionEnd={swiper => {
              setTestiIdx(swiper.activeIndex);
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: {
                  el: '#swiper-pagination-bullet',
                  bulletActiveClass:
                    'swiper-pagination-bullet-active !bg-[#1C1C1E] !w-6 !rounded-3xl !transform !transition-all !duration-300 !ease-in-out',
                  type: 'bullets',
                },
              },
            }}
          >
            {testimonialItems.map((item, idx) => (
              <SwiperSlide className='h-full self-center' key={idx}>
                <Image
                  className='m-auto object-cover'
                  src={item.image}
                  alt='foto sre'
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Typography
            as='h4'
            variant='h4'
            font='epilogue'
            weight='bold'
            className={clsxm(
              'text-primary-60 md:mt-5 mt-3 md:ml-0',
              'text-[24px] leading-[32px] md:text-[32px] md:leading-[48px] lg:text-[48px] lg:leading-[64px]',
            )}
          >
            {testimonialItems[testiIdx]?.name
              ? formatName(testimonialItems[testiIdx]?.name)
              : ''}
          </Typography>
          <Typography
            as='h6'
            variant='h6'
            font='epilogue'
            weight='medium'
            className={clsxm(
              'text-typo-dark md:ml-0',
              'text-[20px] leading-[24px] lg:text-[24px] lg:leading-[32px]',
            )}
          >
            {testimonialItems[testiIdx].position ?? ''}
          </Typography>
          <Typography
            as='div'
            variant='t'
            font='epilogue'
            className={clsxm(
              'text-typo-dark md:w-4/6 w-5/6 md:mt-5 mt-3 md:ml-0',
              'text-[14px] leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[24px]',
            )}
          >
            {testimonialItems[testiIdx].desc ?? ''}
            <TestimonialModalButton testiIdx={testiIdx} />
          </Typography>
          <div id='swiper-pagination-bullet' />
        </Cell>
        <Cell
          cols='1_full'
          colsMd='7_full'
          colsLg='8_5'
          className='flex-row w-full items-center justify-center hidden md:flex md:gap-5 relative'
        >
          <button id='swiper-button-prev'>
            <div
              className={clsxm(
                'right-[5%] justify-center items-center w-10 h-10 rounded-full text-2xl hover:cursor-pointer md:flex hidden',
                'bg-typo-white border-[1px] border-typo-outline hover:bg-typo-outline text-[#9AA2B1] active:bg-typo-disabled',
              )}
            >
              <BsArrowLeftShort />
            </div>
          </button>
          <div className='swiper-container flex w-[90%] md:w-full items-center justify-center md:justify-evenly gap-10 h-full'>
            <Swiper
              modules={[Pagination, Navigation]}
              scrollbar={{ draggable: false }}
              pagination={true}
              centeredSlides={true}
              loop={false}
              onActiveIndexChange={swiper => {
                setTestiIdx(swiper.activeIndex);
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 100,
                  navigation: {
                    nextEl: '#swiper-button-next',
                    prevEl: '#swiper-button-prev',
                  },
                  pagination: {
                    el: '#swiper-pagination-bullet',
                    bulletActiveClass:
                      'swiper-pagination-bullet-active !bg-[#1C1C1E] !w-6 !rounded-3xl !transform !transition-all !duration-300 !ease-in-out',
                    type: 'bullets',
                  },
                },
              }}
            >
              <SwiperSlide className='h-full self-center'>
                <Image
                  src='/images/about/foto1.png'
                  alt='foto sre'
                  objectFit='cover'
                  width={1000}
                  height={1000}
                />
              </SwiperSlide>
              <SwiperSlide className='h-full'>
                <Image
                  src='/images/about/foto1.png'
                  alt='foto sre'
                  width={1000}
                  height={1000}
                />
              </SwiperSlide>
              <SwiperSlide className='h-full'>
                <Image
                  src='/images/about/foto1.png'
                  alt='foto sre'
                  width={1000}
                  height={1000}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <button id='swiper-button-next'>
            <div
              className={clsxm(
                'right-[5%] justify-center items-center w-10 h-10 rounded-full text-2xl hover:cursor-pointer md:flex hidden',
                'bg-typo-white border-[1px] border-typo-outline hover:bg-typo-outline text-[#9AA2B1] active:bg-typo-disabled',
              )}
            >
              <BsArrowRightShort />
            </div>
          </button>
        </Cell>
      </Grid>
      <WhatDoBackground />
    </section>
  );
}
