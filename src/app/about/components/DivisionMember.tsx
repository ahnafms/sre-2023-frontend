import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { ApiResponse } from '@/types/api';
import { DivisionWithStaff } from '@/types/entities/division';

import Card from './Card';

export default function DivisionMember() {
  const { data: queryStaff } = useQuery<ApiResponse<DivisionWithStaff>>({
    queryKey: ['/staff?groupByDepartment=1'],
  });
  return (
    <>
      <Grid>
        <Cell cols='1_4' colsMd='1_12' className='pb-12'>
          <Typography
            as='h3'
            variant='h3'
            font='anton'
            className={clsxm(
              'text-primary-50 text-center',
              'text-[24px] leading-[32px] md:text-[32px] md:leading-[48px] lg:text-[64px] lg:leading-[84px]',
            )}
          >
            Board of Executives
          </Typography>
        </Cell>
        {/* sisa membernya tinggal pake function map */}
      </Grid>
      <div className='w-full overflow-hidden flex flex-col'>
        <div className='w-full flex flex-row items-center justify-center md:gap-5 lg:gap-10'>
          <button id='swiper-button-prev'>
            <div
              className={clsxm(
                'right-[5%] justify-center items-center w-10 h-10 rounded-full text-2xl hover:cursor-pointer md:flex hidden',
                'bg-typo-white hover:bg-typo-outline text-[#9AA2B1] active:bg-typo-disabled',
              )}
            >
              <BsArrowLeftShort />
            </div>
          </button>
          <div className='swiper-container flex w-[90%] md:w-[80%] items-center justify-center md:justify-evenly gap-20'>
            <Swiper
              modules={[Pagination, Navigation]}
              scrollbar={{ draggable: false }}
              centeredSlides={true}
              loop={false}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 75,
                  pagination: { el: '#swiper-pagination' },
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                  navigation: {
                    nextEl: '#swiper-button-next',
                    prevEl: '#swiper-button-prev',
                  },
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 100,
                  navigation: {
                    nextEl: '#swiper-button-next',
                    prevEl: '#swiper-button-prev',
                  },
                },
              }}
            >
              {queryStaff &&
                Object.keys(queryStaff.data).map((division, index) =>
                  queryStaff.data[division].map(data => (
                    <SwiperSlide key={index}>
                      <Card data={data} />
                    </SwiperSlide>
                  )),
                )}
            </Swiper>
          </div>
          <button id='swiper-button-next'>
            <div
              className={clsxm(
                'right-[5%] justify-center items-center w-10 h-10 rounded-full text-2xl hover:cursor-pointer md:flex hidden',
                'bg-typo-white hover:bg-typo-outline text-[#9AA2B1] active:bg-typo-disabled',
              )}
            >
              <BsArrowRightShort />
            </div>
          </button>
        </div>
        <div
          id='swiper-pagination'
          className='w-full flex justify-center items-center gap-1.5 mt-8 md:hidden'
        />
      </div>
    </>
  );
}
