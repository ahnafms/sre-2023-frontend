import NextImage from 'next/image';

import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function About() {
  return (
    <main>
      <section className='bg-[#FFFFFF] min-h-screen flex justify-center items-center overflow-hidden'>
        <Grid className='z-[5]'>
          <Cell colsMd='1_7' cols='1_full' className='flex flex-col'>
            <Typography
              as='h1'
              variant='h1'
              font='anton'
              className={clsxm(
                'text-secondary-70 text-center md:text-left',
                'text-[32px] leading-[48px] lg:text-[80px] md:text-[64px] md:leading-[84px] lg:leading-[96px]',
              )}
            >
              What do they say about SRE?
            </Typography>
            <NextImage
              src='/images/about/foto1.png'
              alt='foto sre'
              width={1039}
              height={807}
              className='md:hidden mt-3 w-4/5 mx-auto'
            />
            <Typography
              as='h4'
              variant='h4'
              font='epilogue'
              weight='bold'
              className={clsxm(
                'text-primary-60 md:mt-5 mt-3 ml-[9%] md:ml-0',
                'text-[24px] leading-[32px] md:text-[32px] md:leading-[48px] lg:text-[48px] lg:leading-[64px]',
              )}
            >
              Fulan bin Fulan
            </Typography>
            <Typography
              as='h6'
              variant='h6'
              font='epilogue'
              weight='medium'
              className={clsxm(
                'text-typo-dark ml-[9%] md:ml-0',
                'text-[20px] leading-[24px] lg:text-[24px] lg:leading-[32px]',
              )}
            >
              SRE President 2022/2023
            </Typography>
            <Typography
              as='p'
              variant='t'
              font='epilogue'
              className={clsxm(
                'text-typo-dark md:w-4/6 w-5/6 md:mt-5 mt-3 ml-[9%] md:ml-0',
                'text-[14px] leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[24px]',
              )}
            >
              Discover our team - a talented, passionate group dedicated to
              excellence. From seasoned experts to fresh innovators, we&apos;re
              the driving force behind our success. Welcome to our world!*
            </Typography>
          </Cell>
          <Cell colsMd='8_5'>
            <NextImage
              src='/images/about/foto1.png'
              alt='foto sre'
              width={1039}
              height={807}
              className='hidden md:block'
            />
          </Cell>
        </Grid>
        <NextImage
          src='/images/about/arrow.png'
          alt='arrow'
          width={376}
          height={434}
          className={clsxm(
            'absolute z-[0]',
            'lg:w-[13%] lg:left-[37%] lg:bottom-[25%]',
            'md:w-[10%] md:left-[45%] md:bottom-[40%] hidden md:block',
          )}
        />
        <NextImage
          src='/images/about/solarpanel.png'
          alt='solarpanel'
          width={1477}
          height={1169}
          className='absolute right-0 bottom-0 md:w-[52%] z-[0] w-[58%]'
        />
        <NextImage
          src='/images/about/quote1.png'
          alt='quote'
          width={102}
          height={106}
          className={clsxm(
            'absolute',
            'top-[7%] w-[9%] right-[3%]',
            'lg:left-[48%] lg:top-[14%] lg:w-[4%]',
            'md:top-[23%] md:left-[53%] md:w-[6%]',
          )}
        />
        <NextImage
          src='/images/about/quote2.png'
          alt='quote'
          width={84}
          height={86}
          className={clsxm(
            'absolute',
            'top-[7%] w-[8%] left-[3%]',
            'lg:left-[4%] lg:top-[14%] lg:w-[3%]',
            'md:top-[23%] left-[6%] md:w-[5%]',
          )}
        />
        <NextImage
          src='/images/about/yellowline.png'
          alt='yellowline'
          width={752}
          height={45}
          className={clsxm(
            'absolute',
            'top-[20%] -right-[75%]',
            'lg:top-[10%] lg:right-0 lg:w-[25%]',
            'md:top-[35%] md:right-0 md:w-[30%]',
          )}
        />
      </section>
    </main>
  );
}
