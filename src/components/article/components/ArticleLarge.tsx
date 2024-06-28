import Image from 'next/image';
import { usePathname } from 'next/navigation';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/Typography';
import { baseURL } from '@/lib/api';
import clsxm from '@/lib/clsxm';

import { ArticleProps } from '../hooks/useArticle';

type ArticleLargeProps = {
  data: ArticleProps;
};

export default function ArticleLarge({ data }: ArticleLargeProps) {
  const date = new Date();
  const release_date = new Date(data.release_date);
  const diffTime = Math.abs(release_date.getTime() - date.getTime());
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const path = usePathname();

  return (
    <UnstyledLink
      href={path + '/' + data.id}
      className='w-full flex justify-center'
    >
      <div className='px-9 py-10 bg-white w-full max-w-sm md:max-w-7xl min-h-[400px] md:min-h-min md:max-h-[500px] flex flex-col md:flex-row items-start gap-8 lg:gap-6 rounded-3xl hover:bg-slate-100 hover:cursor-pointer'>
        <div className='flex-none aspect-[4/3] w-full max-h-full md:w-2/5 rounded-[20px] overflow-hidden relative bg-gray-200'>
          <Image
            src={`${baseURL?.slice(0, -4)}/static/${data.cover_filepath}`}
            alt={data.cover_filename}
            fill
            className='object-cover'
          />
        </div>
        <div>
          {/* <div className='px-2 py-1.5 bg-secondary-10 w-fit rounded-2xl'> */}
          {/*   <Typography */}
          {/*     as='p' */}
          {/*     variant='p' */}
          {/*     font='epilogue' */}
          {/*     weight='semibold' */}
          {/*     className={clsxm( */}
          {/*       'text-secondary-60', */}
          {/*       'text-sm leading-6 lg:text-base', */}
          {/*     )} */}
          {/*   > */}
          {/*     Reneweable Energy */}
          {/*   </Typography> */}
          {/* </div> */}
          <Typography
            as='h3'
            variant='h5'
            font='epilogue'
            weight='bold'
            className={clsxm(
              'text-typo-dark',
              'lg:text-3xl text-xl leading-6 lg:leading-[48px]',
            )}
          >
            {data.title}
          </Typography>
          <Typography
            as='h4'
            variant='t'
            font='epilogue'
            weight='medium'
            className={clsxm(
              'text-typo-dark mt-2',
              'lg:text-xl leading-6 text-base',
            )}
          >
            {data.description}
          </Typography>
          <Typography
            as='p'
            variant='c2'
            font='epilogue'
            weight='regular'
            className={clsxm(
              'text-tertiary-70 mt-2 lg:mt-4',
              'text-sm leading-6',
            )}
          >
            {days} days ago
          </Typography>
        </div>
      </div>
    </UnstyledLink>
  );
}
