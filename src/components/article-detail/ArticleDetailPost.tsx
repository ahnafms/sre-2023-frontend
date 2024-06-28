import React from 'react';
import { FaRegCalendarMinus } from 'react-icons/fa6';
import { LuClock4 } from 'react-icons/lu';

import {
  ArticleDetailType,
  FormatDate,
} from '@/components/article-detail/hooks/ArticleDetail';
import useRichText from '@/hooks/useRichText';

import RichText from '../rich-text/RichText';
import Typography from '../Typography';

// ! DELETE THIS
// const DummyBadge = ['Energy', 'Renewable Energy', 'Renewable Energy'];

export default function ArticleDetailPost({
  articleData,
}: {
  articleData: ArticleDetailType;
}) {
  const editor = useRichText();
  return (
    <section className='bg-white px-12 md:px-[107px] pt-16 pb-14 md:pt-16 md:pb-16'>
      <Typography
        as='h6'
        variant='h6'
        weight='regular'
        font='anton'
        className='text-tertiary-100 md:text-5xl'
      >
        {articleData.title}
      </Typography>

      <div className='pt-4 flex md:pt-8'>
        <div className='text-secondary-90 '>
          <FaRegCalendarMinus size={20} />
        </div>
        <Typography
          as='p'
          variant='c2'
          weight='regular'
          className='text-tertiary-100 pl-2 md:text-xl'
        >
          {FormatDate(articleData.release_date ?? '')}
        </Typography>

        <div className='text-secondary-90 pl-3 md:pl-11'>
          <LuClock4 size={20} />
        </div>
        <Typography
          as='p'
          variant='c2'
          weight='regular'
          className='text-tertiary-100 pl-2 md:text-xl'
        >
          {articleData.time_to_read + ' mins read'}
        </Typography>
      </div>

      <RichText
        editor={editor}
        className='ring-0 pt-16 pb-20'
        initialValue={articleData.content[0].data}
        readOnly
      />

      {/* TODO : Next development */}
      {/* <div className='flex flex-wrap gap-2 md:gap-3 '> */}
      {/*   {DummyBadge.map((badge, index) => ( */}
      {/*     <div */}
      {/*       key={index} */}
      {/*       className='bg-secondary-10 py-[6px] px-5 md:px-4 rounded-3xl w-fit' */}
      {/*     > */}
      {/*       <Typography */}
      {/*         as='p' */}
      {/*         variant='c1' */}
      {/*         weight='semibold' */}
      {/*         font='epilogue' */}
      {/*         className='text-[#0F936D] md:text-lg' */}
      {/*       > */}
      {/*         {badge} */}
      {/*       </Typography> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}
    </section>
  );
}
