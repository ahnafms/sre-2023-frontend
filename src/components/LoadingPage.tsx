import gsap from 'gsap';
import { ReactNode, useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import LogoVertical from './logo/LogoVertical';
import DoubleYellowSquare from './ornament/DoubleYellowSquare';

export default function LoadingPage({
  time = 3000,
  children,
}: {
  time?: number;
  children: ReactNode;
}) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let count = 0;
    const countIntervalId = setInterval(() => {
      count++;

      gsap.to('.loading-bar', {
        width: count + '%',
      });

      if (count > 100) {
        gsap
          .to('.loading-screen', {
            opacity: 0,
            duration: 0.1,
          })
          .then(() => {
            setLoading(false);
          });
      }
    }, time / 100);

    return () => {
      clearInterval(countIntervalId);
    };
  }, [time]);

  return (
    <div
      className={clsxm(
        'w-full h-screen overflow-hidden',
        isLoading ? '' : 'h-fit',
      )}
    >
      <div
        className={clsxm(
          'loading-screen w-full h-screen bg-secondary-50 fixed z-[200] pointer-events-none flex flex-col justify-center items-center gap-y-12',
          isLoading ? '' : 'hidden',
        )}
      >
        <div className='relative w-fit'>
          <DoubleYellowSquare className='scale-x-flip absolute -top-10 -left-14' />
          <LogoVertical className='w-36 md:w-40 lg:w-44 h-auto' />
        </div>
        <div className='md:w-96 md:h-3 w-72 h-2 rounded-full bg-secondary-100 overflow-hidden'>
          <div className='w-0 h-full bg-primary-50 loading-bar'></div>
        </div>
      </div>
      {children}
    </div>
  );
}
