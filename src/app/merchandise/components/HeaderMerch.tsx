'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function HeaderMerch() {
  const paginationStyle = {
    '--swiper-pagination-color': '#E8BA00',
    '--swiper-pagination-bullet-inactive-color': '#E9EBF8',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-height': '6px',
    '--swiper-pagination-bullet-width': '38px',
    '--swiper-pagination-bullet-border-radius': '30px',
    '--swiper-pagination-bullet-horizontal-gap': '2px',
  } as React.CSSProperties;

  return (
    <>
      <div
        className={clsxm(
          'w-full h-full overflow-hidden relative lg:px-20 lg:pb-20 -mt-32 lg:-mt-44',
        )}
      >
        <NextImage
          src='/merchandise/shadowMerch.png'
          alt='logo'
          width={2000}
          height={1400}
          className='absolute lg:-right-[80px] xl:right-0 top-0 min-[1536px]:left-0 max-[1536px]:w-[1556px]'
          priority
        />
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          style={paginationStyle}
          className=''
        >
          {/* FOR EXAMPLE */}
          <SwiperSlide>
            <div className='relative lg:pt-44'>
              <div className='lg:w-full lg:flex lg:justify-center'>
                <Typography
                  font='anton'
                  weight='bold'
                  className='text-[56px] text-secondary-80 uppercase absolute top-40 left-10
                        sm:w-[200px] sm:left-12 lg:top-60 lg:text-[64px] lg:w-[60%] lg:left-20 xl:w-full xl:left-[8%]  xl:text-[80px] min-[1400px]:left-40 2xl:left-[15%]
                        2xl:top-72
                        '
                >
                  official
                  <br />
                  merchandise
                  <br />
                  sre its!
                </Typography>
                <NextImage
                  src='/merchandise/layer.png'
                  alt='photo'
                  width={1336}
                  height={810}
                  style={{
                    borderRadius: '2rem',
                  }}
                  className='w-[1336px] h-full -ml-20 lg:ml-0 lg:w-[1200px] lg:h-full rounded-3xl'
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative lg:pt-44'>
              <div className='lg:w-full lg:flex lg:justify-center'>
                <Typography
                  font='anton'
                  weight='bold'
                  className='text-[56px] text-secondary-80 uppercase absolute top-40 left-10
                        sm:w-[200px] sm:left-12 lg:top-60 lg:text-[64px] lg:w-[60%] lg:left-20 xl:w-full xl:left-[8%]  xl:text-[80px] min-[1400px]:left-40 2xl:left-[15%]
                        2xl:top-72
                        '
                >
                  official
                  <br />
                  merchandise
                  <br />
                  sre its!
                </Typography>
                <NextImage
                  src='/merchandise/layer.png'
                  alt='photo'
                  width={1336}
                  height={810}
                  style={{
                    borderRadius: '2rem',
                  }}
                  className='w-[1336px] h-full -ml-20 lg:ml-0 lg:w-[1200px] lg:h-full rounded-3xl'
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative lg:pt-44'>
              <div className='lg:w-full lg:flex lg:justify-center'>
                <Typography
                  font='anton'
                  weight='bold'
                  className='text-[56px] text-secondary-80 uppercase absolute top-40 left-10
                        sm:w-[200px] sm:left-12 lg:top-60 lg:text-[64px] lg:w-[60%] lg:left-20 xl:w-full xl:left-[8%]  xl:text-[80px] min-[1400px]:left-40 2xl:left-[15%]
                        2xl:top-72
                        '
                >
                  official
                  <br />
                  merchandise
                  <br />
                  sre its!
                </Typography>
                <NextImage
                  src='/merchandise/layer.png'
                  alt='photo'
                  width={1336}
                  height={810}
                  style={{
                    borderRadius: '2rem',
                  }}
                  className='w-[1336px] h-full -ml-20 lg:ml-0 lg:w-[1200px] lg:h-full rounded-3xl'
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
