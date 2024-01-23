import React from 'react';
import { FaRegCalendarMinus } from 'react-icons/fa6';
import { LuClock4 } from 'react-icons/lu';

import {
  ArticleDetailType,
  FormatDate,
} from '@/app/sandbox/article-detail/hooks/ArticleDetail';

import Typography from '../Typography';

// ! DELETE THIS
const DummyBadge = ['Energy', 'Renewable Energy', 'Renewable Energy'];

export default function ArticleDetailPost({
  articleData,
}: {
  articleData: ArticleDetailType;
}) {
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

      <Typography
        as='p'
        variant='c1'
        weight='regular'
        className='text-tertiary-100 text-justify pt-8 pb-12 md:pt-16 md:pb-20 md:text-2xl'
      >
        {articleData.description}
        <br />
        <br /> {/* DELETE THIS */}
        DELETE THIS!!! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Aspernatur eos magni nihil odit eaque repellendus commodi molestiae
        animi consectetur asperiores fuga odio, cupiditate neque in totam error
        illo incidunt dignissimos, suscipit sint! Voluptatibus deleniti quis,
        voluptas quibusdam sint animi facilis nobis officiis consequuntur
        similique velit minima natus, dolorem sequi eaque soluta eligendi
        laborum fugit atque in quam, amet debitis fugiat error. Culpa, vero enim
        perspiciatis architecto animi eius eveniet dolor ex alias porro
        exercitationem impedit corporis, ad quia. Architecto id fuga quasi
        voluptas at vel reprehenderit nobis labore pariatur amet sequi, maxime
        rerum ipsa autem odit possimus distinctio facere cupiditate!
        <br />
        <br /> {/* DELETE THIS */}
        DELETE THIS!!! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Aspernatur eos magni nihil odit eaque repellendus commodi molestiae
        animi consectetur asperiores fuga odio, cupiditate neque in totam error
        illo incidunt dignissimos, suscipit sint! Voluptatibus deleniti quis,
        voluptas quibusdam sint animi facilis nobis officiis consequuntur
        similique velit minima natus, dolorem sequi eaque soluta eligendi
        laborum fugit atque in quam, amet debitis fugiat error. Culpa, vero enim
        perspiciatis architecto animi eius eveniet dolor ex alias porro
        exercitationem impedit corporis, ad quia. Architecto id fuga quasi
        voluptas at vel reprehenderit nobis labore pariatur amet sequi, maxime
        rerum ipsa autem odit possimus distinctio facere cupiditate!
      </Typography>

      <div className='flex flex-wrap gap-2 md:gap-3 '>
        {DummyBadge.map((badge, index) => (
          <div
            key={index}
            className='bg-secondary-10 py-[6px] px-5 md:px-4 rounded-3xl w-fit'
          >
            <Typography
              as='p'
              variant='c1'
              weight='semibold'
              font='epilogue'
              className='text-[#0F936D] md:text-lg'
            >
              {badge}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
