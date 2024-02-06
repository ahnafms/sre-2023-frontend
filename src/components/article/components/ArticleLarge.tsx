import { usePathname } from 'next/navigation';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
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
    <UnstyledLink href={path + '/' + data.id}>
      <div className='px-9 py-10 bg-white flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-6 rounded-3xl hover:bg-slate-100 hover:cursor-pointer'>
        <NextImage
          src={`${baseURL?.slice(0, -4)}/static/${data.cover_filepath}`}
          alt={data.cover_filename}
          width={503}
          height={359}
          serverStaticImg
          className='flex-none lg:w-[503px] h-[197px] lg:h-[359px] rounded-[20px] overflow-hidden'
        />
        <div>
          <div className='px-2 py-1.5 bg-secondary-10 w-fit rounded-2xl'>
            <Typography
              as='p'
              variant='p'
              font='epilogue'
              weight='semibold'
              className={clsxm(
                'text-secondary-60',
                'text-sm leading-6 lg:text-base',
              )}
            >
              Reneweable Energy
            </Typography>
          </div>
          <Typography
            as='h3'
            variant='h5'
            font='epilogue'
            weight='bold'
            className={clsxm(
              'text-typo-dark mt-2 lg:mt-4',
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
