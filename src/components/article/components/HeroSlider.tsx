'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArticleProps } from '../hooks/useArticle';
import HeroSlide from './HeroSlide';

type HeroSliderProps = {
  data: ArticleProps[];
};

export default function HeroSlider({ data }: HeroSliderProps) {
  const paginationStyle = {
    '--swiper-pagination-color': '#E8BA00',
    '--swiper-pagination-bullet-inactive-color': '#E9EBF8',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-height': '6px',
    '--swiper-pagination-bullet-width': '38px',
    '--swiper-pagination-bullet-border-radius': '30px',
    '--swiper-pagination-bullet-horizontal-gap': '4px',
  } as React.CSSProperties;

  return (
    <div className='flex justify-center items-center w-full'>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        className='flex items-center justify-center'
        pagination={{ clickable: true }}
        style={paginationStyle}
      >
        {data
          .filter(article => article.pin && article.show)
          .map((article, index) => (
            <SwiperSlide key={index}>
              <HeroSlide data={article} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
