import { usePathname } from 'next/navigation';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { baseURL } from '@/lib/api';
import clsxm from '@/lib/clsxm';

import { ArticleProps } from '../hooks/useArticle';

type HeroSlideProps = {
  data: ArticleProps;
};

export default function HeroSlide({ data }: HeroSlideProps) {
  const path = usePathname();
  return (
    <UnstyledLink href={path + '/' + data.id}>
      <div
        style={{
          backgroundImage: `url(${baseURL?.slice(0, -4)}/static/${data.cover_filepath})`,
        }}
        className={`h-[844px] lg:h-[810px] lg:w-[1343px] bg-cover lg:rounded-[50px] relative flex items-center mx-auto`}
      >
        <div className='z-[5] px-4 lg:px-0 lg:pl-12 lg:w-[870px] mt-80'>
          <div className='bg-primary-40 w-32 flex items-center justify-center'>
            <Typography
              as='h3'
              variant='h5'
              font='anton'
              weight='regular'
              className={clsxm('text-secondary-80', 'text-3xl leading-[48px]')}
            >
              Featured
            </Typography>
          </div>
          <Typography
            as='h1'
            variant='h4'
            font='anton'
            weight='regular'
            className={clsxm(
              'text-[#F0F2F5] drop-shadow-md mt-4',
              'text-3xl leading-[48px] lg:text-5xl lg:leading-[64px]',
            )}
          >
            {data.title}
          </Typography>
          <Typography
            as='h2'
            variant='p'
            font='epilogue'
            weight='medium'
            className={clsxm(
              'text-[#F0F2F5] mt-2',
              'text-base leading-6 lg:text-lg',
            )}
          >
            {data.description}
          </Typography>
        </div>
        <div className='absolute bottom-0 z-[1] w-[1343px] h-[362px] lg:rounded-b-[50px] overflow-hidden'>
          <NextImage
            src='/article/gradient.png'
            alt='gradient'
            width={1343}
            height={362}
          />
        </div>
      </div>
    </UnstyledLink>
  );
}
