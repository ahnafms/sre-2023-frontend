'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Swiper } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper as SwiperComponents, SwiperSlide } from 'swiper/react';

import Button from '@/components/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { Merchandise } from '@/constant/merchandise';
import useComponentResize from '@/hooks/useComponentResize';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { ApiReturn } from '@/types/api';

export default function BundleMerch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth } = useComponentResize(containerRef);
  const [datas, setDatas] = useState<Merchandise[]>([]);

  const [centerCardIndex, setCenterCardIndex] = useState<number>(
    Math.floor(datas.length / 2),
  );

  const handleSlideChange = (swiper: Swiper) => {
    setCenterCardIndex(swiper.realIndex || 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ApiReturn<Merchandise[]>>(
          '/merchandise/pinned',
        );
        const dataMerch = response.data?.data;
        setDatas(dataMerch);
        // console.log(dataMerch);
      } catch (error) {
        throw new Error();
        // console.error('erroooorrrr', error);
      }
    };
    fetchData();
  }, []);

  const paginationStyle = {
    '--swiper-pagination-color': '#E8BA00',
    '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-height': '6px',
    '--swiper-pagination-bullet-width': '38px',
    '--swiper-pagination-bullet-border-radius': '30px',
    '--swiper-pagination-bullet-horizontal-gap': '2px',
  } as React.CSSProperties;

  return (
    <>
      <div
        className={clsxm('w-full h-full bg-tertiary-10 py-10 px-4')}
        ref={containerRef}
      >
        {/* ================ TITLE =============== */}
        <div className='relative flex flex-col items-center sm:px-8'>
          <div className='flex items-center justify-center gap-1'>
            <NextImage
              src='/merchandise/quote.png'
              alt='logo'
              width={50}
              height={52}
              className='scale-x-[-1] pb-6 w-[26px] h-[27] sm:w-[35px] sm:h-[36px] sm:pb-20 xl:w-[50px] xl:h-[52px] xl:pb-32'
              priority
            />
            <Typography
              font='anton'
              weight='regular'
              className='text-[32px] uppercase text-secondary-80 z-10 sm:text-[40px] lg:text-[44px] xl:text-[64px]'
            >
              our special bundle
            </Typography>
            <NextImage
              src='/merchandise/quote.png'
              alt='logo'
              width={50}
              height={52}
              className='pb-6 w-[26px] h-[27] sm:w-[35px] sm:h-[36px] sm:pb-20 xl:w-[50px] xl:h-[52px] xl:pb-32'
              priority
            />
          </div>
          <NextImage
            src='/merchandise/line.png'
            alt='line'
            width={467}
            height={20}
            className='absolute top-9 w-[238px] h-[10px] sm:top-[52px] sm:w-[300px] sm:h-[15px] xl:w-[467px] xl:h-[20px] xl:top-[80px]'
            priority
          />
          <Typography
            font='epilogue'
            weight='regular'
            color='dark'
            className='text-[14px] pt-3 text-center sm:text-[18px] lg:text-[20px]'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            quibusdam nobis error delectus blanditiis.
          </Typography>
        </div>

        {/* ================ CARD BUNDLE EXAMPLE =============== */}
        <div className='min-[425px]:px-[5%] min-[550px]:px-[10%] sm:px-[20%] md:px-[3%]'>
          <SwiperComponents
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination]}
            style={paginationStyle}
            className='mt-10 mb-5'
            onSlideChange={swiper => handleSlideChange(swiper)}
          >
            {datas.map((items, index) =>
              items?.pin === true && items?.show === true ? (
                <SwiperSlide key={index}>
                  <div
                    className={`bg-white cursor-pointer w-full mb-16 shadow-lg rounded-xl p-3 flex justify-between sm:flex-col sm:p-5 md:justify-between items-center md:h-[450px] xl:h-[450px] 2xl:h-[480px] gap-4 lg:gap-6 ${Number(containerWidth) >= 1083 ? 'relative' : ''} ${index === centerCardIndex + 1 && Number(containerWidth) >= 1083 ? '' : 'lg:my-12 xl:my-20'}`}
                  >
                    <Image
                      src={`${items.url + items?.cover_filepath}`}
                      alt={`${items?.cover_filename}`}
                      width={147}
                      height={167}
                      className='w-[40%] min-[425px]:w-[150px] sm:w-[55%] sm:text-center'
                    />
                    <div className='w-full h-fit'>
                      <Typography
                        font='epilogue'
                        weight='bold'
                        className='text-[16px] sm:text-[20px] lg:text-[24px]'
                      >
                        {items.name}
                      </Typography>
                      <Typography
                        font='epilogue'
                        weight='regular'
                        className='text-[14px] py-2 sm:text-[16px] xl:text-[18px]'
                      >
                        {items.description}
                      </Typography>
                      <div className='sm:flex sm:items-center sm:gap-3 sm:justify-between'>
                        <Typography
                          font='epilogue'
                          weight='bold'
                          className='text-[16px] pt-2 pb-3 sm:pt-0 sm:pb-0 sm:text-[20px] xl:text-[24px]'
                        >
                          Rp{items?.price?.toLocaleString('id-ID')}
                        </Typography>
                        <Button
                          className='w-full lg:w-fit py-2 px-3 max-[360px]:px-2 md:px-2 lg:px-3 xl:px-5 flex items-center z-10 bg-secondary-50 hover:bg-secondary-60 active:bg-secondary-70'
                          rightIcon={FaShoppingCart}
                          rightIconClassName='text-[18px] text-[#fff]'
                        >
                          <Typography
                            font='epilogue'
                            weight='medium'
                            color='white'
                            className='max-[360px]:text-[12px] text-[14px] sm:text-[16px] lg:text-[14px] xl:text-[16px]'
                          >
                            Pesan Sekarang
                          </Typography>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : (
                <></>
              ),
            )}
          </SwiperComponents>
        </div>
      </div>
    </>
  );
}
