import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Button from '@/components/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
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
    <div
      // style={{
      //   backgroundImage: `url()`,
      // }}
      className={`min-h-[600px] h-[95vh] w-full bg-cover lg:rounded-[50px] overflow-hidden relative flex items-center mx-auto bg-white`}
    >
      <Image
        src={`${baseURL?.slice(0, -4)}/static/${data.cover_filepath}`}
        alt={data.title}
        fill
        sizes='90vw'
        className='object-cover'
      />
      <div className='z-[5] px-8 lg:px-0 lg:pl-12 lg:w-[870px] absolute bottom-0 mb-12 md:mb-20'>
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
        <UnstyledLink href={path + '/' + data.id}>
          <Button variant='outline-white' className='mt-4'>
            Read more
          </Button>
        </UnstyledLink>
      </div>
      <div className='absolute bottom-0 z-[1] w-full h-[550px] bg-gradient-to-t from-secondary-60 to-transparent'></div>
    </div>
  );
}
