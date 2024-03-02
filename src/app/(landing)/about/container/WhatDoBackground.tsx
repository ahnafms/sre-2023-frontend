import NextImage from 'next/image';

import clsxm from '@/lib/clsxm';

export default function WhatDoBackground() {
  return (
    <>
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
    </>
  );
}
