'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArticleDetailPost from '@/components/article-detail/ArticleDetailPost';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';

import useArticle from '../article/hooks/useArticle';
import ArticleSmall from '../article-detail/RecentArticleCard';
import { ArticleDetail } from './hooks/ArticleDetail';

export default function ArticleDetailPage({
  params,
  id,
}: {
  params: { type: string };
  id: { id: string };
}) {
  const { articleData, isLoadingArticle } = ArticleDetail(params.type, id.id);
  const { data: recentArticle, isLoading } = useArticle(params.type, 5);

  return (
    <main className='bg-secondary-60'>
      <div className='absolute w-full block md:hidden '>
        <Navbar />
      </div>
      <div
        className={clsxm(
          "bg-[url('/images/article-detail/article-detail-bg.png')] bg-cover",
          'h-[657px] w-full',
          'block md:hidden ',
        )}
      ></div>
      <div
        className={clsxm(
          "bg-[url('/images/article-detail/article-detail-bg.png')] bg-cover",
          'md:h-[1024px] md:w-full',
          'bg-secondary-60',
        )}
      >
        <div className='hidden md:block md:absolute md:w-full'>
          <Navbar />
        </div>
      </div>
      <section
        className={clsxm(
          "bg-[url('/images/article-detail/dot-ornament.png')] bg-cover",
          'pb-24 md:pb-28',
        )}
      >
        <div className='md:px-24 md:-top-96 md:relative'>
          {isLoadingArticle || !articleData ? (
            <Loading />
          ) : (
            <ArticleDetailPost articleData={articleData.data} />
          )}
        </div>
        <div className='flex justify-between'>
          <Typography
            as='p'
            variant='t'
            weight='semibold'
            font='epilogue'
            color='white'
            className='pt-7 md:pt-0 pl-9 pb-6 md:text-2xl md:pl-24'
          >
            Recent {params.type} posts
          </Typography>
          <div className='hidden md:flex my-5 gap-6 pr-24'>
            <div className='bg-white p-2 swipperPrev'>
              <IoIosArrowBack />
            </div>
            <div className='bg-white p-2 swipperNext'>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            longSwipes={true}
            slidesPerView={1.5}
            spaceBetween={0}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: '.swipperPrev',
              nextEl: '.swipperNext',
            }}
            className='mySwiper max-w-[1440px]'
          >
            {recentArticle?.data.map((article, index) => (
              <SwiperSlide
                style={{ display: 'flex', justifyContent: 'center' }}
                key={index}
              >
                <div className='w-fit'>
                  <ArticleSmall data={article} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
      <Footer />
    </main>
  );
}
