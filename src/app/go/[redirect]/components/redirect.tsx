import Image from 'next/image';
import React from 'react';

import LogoVertical from '@/components/logo/LogoVertical';
import DoubleStrip from '@/components/ornament/DoubleStrip';
import DoubleYellowSquare from '@/components/ornament/DoubleYellowSquare';
import Typography from '@/components/Typography';

export default function Redirect() {
  return (
    <section className='w-full h-screen overflow-hidden relative bg-secondary-50'>
      <div className='absolute -left-5 md:left-8 md:top-8 lg:left-16'>
        <div className='relative w-32 lg:w-40 aspect-square'>
          <Image
            fill
            sizes='(max-width: 768px) 130px, 160px'
            src={'/images/redirect/right_star.svg'}
            alt='star'
            className='scale-x-flip object-contain'
          />
        </div>
      </div>
      <div className='absolute -right-5 md:right-8 md:top-8 lg:right-16'>
        <div className='relative w-32 lg:w-40 aspect-square'>
          <Image
            fill
            sizes='(max-width: 768px) 130px, 160px'
            src={'/images/redirect/right_star.svg'}
            alt='star'
            className='object-contain'
          />
        </div>
      </div>

      <div className='w-full h-full flex items-center'>
        <div className='relative flex flex-col items-center w-full'>
          <div className='relative w-fit'>
            <DoubleYellowSquare className='scale-x-flip absolute -top-10 -left-14' />
            <LogoVertical className='w-36 md:w-40 lg:w-44 h-auto' />
          </div>
          <div>
            <Typography
              variant='h6'
              color='white'
              font='anton'
              className='text-center text-h6 mt-12 lg:text-h5 text-white'
            >
              You are being redirected
              <span className='dot one'>.</span>
              <span className='dot two'>.</span>
              <span className='dot three'>.</span>
            </Typography>
          </div>
          <DoubleStrip className='mt-3 lg:w-72 lg:h-auto' />
        </div>
      </div>

      <div className='absolute flex justify-between w-full bottom-0'>
        <div className='flex items-end'>
          <Image
            width={260}
            height={349}
            src={'/images/redirect/turbine.svg'}
            alt='turbine'
            className='relative -left-10 -bottom-11 w-40 md:w-52 lg:w-60'
          />
          <Image
            width={164.25}
            height={220.48}
            src={'/images/redirect/turbine.svg'}
            alt='star'
            className='relative hidden lg:block -left-12 -bottom-11 w-40'
          />
        </div>
        <div className='flex items-end'>
          <Image
            width={250}
            height={250}
            src={'/images/redirect/panel.png'}
            alt='panel'
            className='relative hidden lg:block w-72 rotate-12 -right-48 -bottom-20'
          />
          <Image
            width={250}
            height={250}
            src={'/images/redirect/panel.png'}
            alt='panel'
            className='relative w-72 md:w-96 lg:w-[400px] rotate-2 -right-24 -bottom-12 lg:rotate-0 lg:-bottom-4'
          />
        </div>
      </div>

      <style>{`
        .dot {
          animation: showHideDot 1.5s linear infinite;
        }

        .one { animation-delay: 0.2s; }
        .two { animation-delay: 0.4s; }
        .three { animation-delay: 0.6s; }

        @keyframes showHideDot {
          0% { opacity: 0; }
          50% { opacity: 1; }
          60% { opacity: 1; }
          100% { opacity: 0; }
        }

      `}</style>
    </section>
  );
}
