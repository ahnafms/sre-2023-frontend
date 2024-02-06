import { usePathname } from 'next/navigation';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { baseURL } from '@/lib/api';
import clsxm from '@/lib/clsxm';

import { ArticleProps } from '../hooks/useArticle';

export type ArticleSmallProps = {
  data: ArticleProps;
};

export default function ArticleSmall({ data }: ArticleSmallProps) {
  const date = new Date();
  const release_date = new Date(data.release_date);
  const diffTime = Math.abs(release_date.getTime() - date.getTime());
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const path = usePathname();

  return (
    <UnstyledLink href={path + '/' + data.id}>
      <div className='pt-4 px-4 pb-7 bg-white w-min rounded-[20px] hover:bg-slate-100 hover:cursor-pointer'>
        <NextImage
          src={`${baseURL?.slice(0, -4)}/static/${data.cover_filepath}`}
          alt={data.cover_filename}
          width={367}
          height={300}
          serverStaticImg
          className='lg:w-[367px] w-[234px] h-[191px] lg:h-[300px] overflow-hidden rounded-[20px]'
        />
        <div className='mt-6 lg:mt-4'>
          <div className='px-2 py-1.5 bg-secondary-10 w-fit rounded-2xl'>
            <Typography
              as='p'
              variant='p'
              font='epilogue'
              weight='semibold'
              className={clsxm('text-secondary-60', 'text-sm leading-6')}
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
              'text-typo-dark mt-3',
              'text-base leading-6 lg:text-xl',
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
              'lg:text-base leading-6 text-sm',
            )}
          >
            {data.description}
          </Typography>
          <Typography
            as='p'
            variant='c2'
            font='epilogue'
            weight='regular'
            className={clsxm('text-tertiary-70 mt-2', 'text-sm leading-6')}
          >
            {days} days ago
          </Typography>
        </div>
      </div>
    </UnstyledLink>
  );
}
