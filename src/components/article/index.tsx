'use client';

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Button from '@/components/Button';
import Loading from '@/components/Loading';
import Typography from '@/components/Typography';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';

import ArticleLarge from './components/ArticleLarge';
import ArticleSmall from './components/ArticleSmall';
import ArticleSwipe from './components/ArticleSwipe';
import HeroSlider from './components/HeroSlider';
import useArticle from './hooks/useArticle';

export default function ArticleHome({ params }: { params: { type: string } }) {
  const [page, setPage] = useState<number>(9);

  const { data, isLoading } = useArticle(params.type, page);

  return (
    <main className='overflow-hidden bg-articlebg bg-cover bg-secondary-50'>
      <section className='bg-cover h-full lg:pb-10 lg:px-12 flex flex-col justify-center items-center w-full z-[3]'>
        <div
          className={clsxm(
            'w-full max-[767px]:absolute top-5',
            data?.data === null ||
              data?.data === undefined ||
              (data.data.filter(article => article.pin && article.show)
                .length === 0 &&
                'absolute top-5'),
          )}
        >
          <Navbar />
        </div>
        {isLoading && <Loading />}
        {!isLoading &&
          (data?.data === null ||
          data?.data === undefined ||
          data.data.filter(article => article.pin && article.show).length ===
            0 ? (
            <Typography>No Content Available</Typography>
          ) : (
            <HeroSlider data={data?.data} />
          ))}
      </section>
      <section className='min-h-screen h-full w-full flex flex-col py-10 px-5 lg:px-24 z-[2] pb-20'>
        <div className='flex flex-col items-center'>
          <Typography
            as='h2'
            variant='h3'
            font='anton'
            weight='regular'
            className='text-[#F0F2F5] mb-11'
          >
            Latest Update
          </Typography>
          {!isLoading &&
            (data?.data === null || data?.data === undefined ? (
              <Typography>No Content Available</Typography>
            ) : (
              <ArticleLarge data={data?.data[0]} />
            ))}
        </div>

        <Typography
          as='h4'
          variant='h5'
          font='epilogue'
          weight='semibold'
          className='text-[#F0F2F5] items-start mt-16 mb-7'
        >
          Recent {params.type} posts
        </Typography>
        <div className='flex flex-col gap-16'>
          {!isLoading &&
            (data?.data === null || data?.data === undefined ? (
              <Typography>No Content Available</Typography>
            ) : (
              <>
                <div className='lg:grid-cols-2 xl:grid-cols-3 hidden justify-items-center gap-y-11 lg:grid'>
                  {data.data.map((article, index) => (
                    <ArticleSmall key={index} data={article} />
                  ))}
                </div>
                <div className='w-full items-center justify-center hidden lg:flex'>
                  <Button
                    variant='warning'
                    className='w-fit text-tertiary-80'
                    rightIcon={IoIosArrowDown}
                    rightIconClassName='active:text-tertiary-60'
                  >
                    <Typography
                      as='p'
                      font='epilogue'
                      variant='btn'
                      weight='semibold'
                      className='text-tertiary-80'
                      onClick={() => setPage(page => page + 9)}
                    >
                      Load More
                    </Typography>
                  </Button>
                </div>
                <div className='lg:hidden'>
                  <ArticleSwipe data={data.data} />
                </div>
              </>
            ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
