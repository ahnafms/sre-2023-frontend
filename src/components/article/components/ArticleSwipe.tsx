'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { ArticleProps } from '../hooks/useArticle';
import ArticleSmall from './ArticleSmall';

type ArticleSwipeProps = {
  data?: ArticleProps[];
};

export default function ArticleSwipe({ data }: ArticleSwipeProps) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={240}
        breakpoints={{
          565: {
            slidesPerView: 3,
            spaceBetween: 260,
          },
        }}
        className='lg:hidden'
      >
        {data?.map((article, index) => (
          <SwiperSlide key={index}>
            <ArticleSmall data={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
