import Image from 'next/image';
import React from 'react';

import { RecentArticleType } from '@/app/sandbox/article-detail/content/recent-article';
import clsxm from '@/lib/clsxm';

import Typography from '../Typography';

export default function RecentArticleCard({
  dataArticle,
}: {
  dataArticle: RecentArticleType;
}) {
  return (
    <div className='bg-white rounded-2xl w-[264px] md:w-[397px] mx-auto'>
      <div className='px-4 pt-4 pb-11 md:px-[14px] md:pb-8 '>
        <Image
          src={dataArticle.img}
          alt='recent article image'
          width={734}
          height={600}
          className='w-[234px] h-[191px] md:w-[367px] md:h-[300px] mx-auto'
        />
        <div
          className={clsxm(
            'bg-secondary-10 py-[6px] px-5 md:px-4 rounded-3xl w-fit',
            'mt-6 mb-3',
          )}
        >
          <Typography
            as='p'
            variant='c1'
            weight='semibold'
            font='epilogue'
            className='text-[#0F936D] md:text-lg'
          >
            {dataArticle.badge}
          </Typography>
        </div>
        <div className='grid gap-2 md:px-[15px]'>
          <Typography
            as='p'
            variant='bt'
            weight='semibold'
            font='epilogue'
            className='text-tertiary-100 md:text-xl text-justify'
          >
            {dataArticle.title}
          </Typography>
          <Typography
            as='p'
            variant='c1'
            weight='medium'
            font='epilogue'
            className='text-tertiary-100 md:text-[20px] md:leading-[24px] text-justify'
          >
            {dataArticle.desc}
          </Typography>
          <Typography
            as='p'
            variant='c1'
            weight='regular'
            font='epilogue'
            className='text-tertiary-70 md:text-lg'
          >
            {dataArticle.day + ' days ago'}
          </Typography>
        </div>
      </div>
    </div>
  );
}
