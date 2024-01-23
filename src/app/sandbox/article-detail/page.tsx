'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { toast } from 'react-toastify';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArticleDetailPost from '@/components/article-detail/ArticleDetailPost';
import RecentArticleCard from '@/components/article-detail/RecentArticleCard';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';

import { RecentArticle } from './content/recent-article';
import { ArticleDetail } from './hooks/ArticleDetail';

export default function ArticleDetailPage() {
  const { articleData, isLoadingArticle } = ArticleDetail();

  if (isLoadingArticle) return <Loading />;
  if (!articleData) {
    toast.error('Failed to get article data');
    return <Loading />;
  }

  // ! DELETE THIS
  const dummySlugId = 0;

  return (
    <main className='bg-secondary-60'>
      <div
        className={clsxm(
          "bg-[url('/images/article-detail/article-detail-bg.png')] bg-cover",
          'h-[657px] w-full',
          'block md:hidden',
        )}
      >
        <Navbar />
      </div>
      <div
        className={clsxm(
          "bg-[url('/images/article-detail/article-detail-bg.png')] bg-cover",
          'md:h-[1024px] md:w-full',
          'bg-secondary-60',
        )}
      >
        <div className='hidden md:block'>
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
          <ArticleDetailPost articleData={articleData.data[dummySlugId]} />
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
            Recent article posts
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
          {RecentArticle.map((article, index) => (
            <SwiperSlide key={index}>
              <RecentArticleCard dataArticle={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </main>
  );
}
