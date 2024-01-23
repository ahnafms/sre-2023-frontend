'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Swiper } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper as SwiperComponents, SwiperSlide } from 'swiper/react';

import Button from '@/components/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { Merchandise } from '@/constant/merchandise';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { ApiReturn } from '@/types/api';

export default function BundleMerch() {
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

  const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
  };

  const size = useWidth();

  return (
    <>
      <div className={clsxm('w-full h-full bg-tertiary-10 py-10 px-4')}>
        {/* ================ TITLE =============== */}
        <div className='relative flex flex-col items-center sm:px-8'>
          <div className='flex items-center justify-center gap-1'>
            <NextImage
              src='/merchandise/quote_left.svg'
              alt='logo'
              width={50}
              height={52}
              className='pb-6 w-[26px] h-[27] sm:w-[35px] sm:h-[36px] sm:pb-20 xl:w-[50px] xl:h-[52px] xl:pb-32'
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
              src='/merchandise/quote_right.svg'
              alt='logo'
              width={50}
              height={52}
              className='pb-6 w-[26px] h-[27] sm:w-[35px] sm:h-[36px] sm:pb-20 xl:w-[50px] xl:h-[52px] xl:pb-32'
              priority
            />
          </div>
          <NextImage
            src='/merchandise/line.svg'
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
            slidesPerView={
              size >= 1100 && size <= 2280
                ? 3
                : size <= 1100 && size >= 768
                  ? 2
                  : 1
            }
            pagination={{
              dynamicBullets: true,
            }}
            spaceBetween={size >= 800 ? 20 : 10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination]}
            // @ts-expect-error: Swiper styles not recognized by TypeScript
            style={{
                '--swiper-pagination-color': '#E8BA00',
                '--swiper-pagination-bullet-inactive-color': '#FFFFFF',
                '--swiper-pagination-bullet-inactive-opacity': '1',
                '--swiper-pagination-bullet-height': '6px',
                '--swiper-pagination-bullet-width': '38px',
                '--swiper-pagination-bullet-border-radius': '30px',
                '--swiper-pagination-bullet-horizontal-gap': '2px',
              } as string
            }
            className='mt-10 mb-5'
            onSlideChange={swiper => handleSlideChange(swiper)}
          >
            {datas.map((items, index) =>
              items?.pin === true && items?.show === true ? (
                <SwiperSlide key={index}>
                  <div
                    className={`bg-white cursor-pointer w-full mb-16 shadow-lg rounded-xl p-3 flex justify-between sm:flex-col sm:p-5 md:justify-around xl:justify-end items-center gap-4 lg:gap-6 ${size >= 1100 && size <= 2280 ? 'relative' : ''} ${index === centerCardIndex + 1 && size >= 1100 && size <= 2280 ? '' : 'md:mb-8 xl:mb-16 xl:mt-24'}`}
                  >
                    <NextImage
                      src={`https://api.sre-its.com/static/${items?.cover_filepath}`}
                      alt={`${items?.cover_filename}`}
                      width={147}
                      height={167}
                      className='w-[70%] min-[425px]:w-[220px] sm:w-full sm:text-center'
                      priority
                    />
                    <div className='w-full'>
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
                        className='text-[14px] py-2 sm:text-[16px] lg:text-[18px]'
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
