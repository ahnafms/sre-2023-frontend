import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useLayoutEffect,
  useRef,
} from 'react';

import missionItems from '@/constant/mission';
import clsxm from '@/lib/clsxm';

import Cell from '../Cell';
import Grid from '../Grid';
import DoubleYellowSquare from '../ornament/DoubleYellowSquare';
import Typography from '../Typography';

const Mission = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.mission-item');

      const fakeScroll = gsap.to('.gsap-slider', {
        xPercent: -78,
        ease: 'none',
        scrollTrigger: {
          trigger: '.mission-gsap-container',
          start: 'top top',
          end: `+=${items.length * 600}px bottom`,
          pin: true,
          // markers: true,
          scrub: 1,
        },
      });

      gsap.fromTo(
        '.progress-bar',
        {
          width: '0%',
          ease: 'power1.out',
        },
        {
          width: '100%',
          ease: 'power1.out',
          overwrite: true,
          scrollTrigger: {
            containerAnimation: fakeScroll,
            trigger: '.progress-bar-wrapper',
            start: '26% 70%',
            end: '110% 90%',
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        },
      );

      gsap.fromTo(
        '.progress-bar-mobile',
        {
          width: '0%',
          ease: 'power1.out',
        },
        {
          width: '100%',
          ease: 'power1.out',
          overwrite: true,
          scrollTrigger: {
            containerAnimation: fakeScroll,
            trigger: '.gsap-slider',
            start: '26% 70%',
            end: '96% 90%',
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        },
      );

      items.forEach((_, idx) => {
        gsap.fromTo(
          '.mission-' + (idx + 1),
          {
            opacity: '50%',
          },
          {
            opacity: '100%',
            scrollTrigger: {
              containerAnimation: fakeScroll,
              trigger: '.mission-' + (idx + 1),
              start: 'left 50%',
              end: '20% 50%',
              scrub: 1,
              invalidateOnRefresh: true,
              // markers: true,
            },
          },
        );
      });
    }, comp);

    return () => ctx.revert();
  }, [comp]);

  return (
    <div className='w-full h-full relative z-30' ref={comp}>
      <Grid className='mission-gsap-container h-full md:px-0'>
        <Cell
          cols='1_full'
          className='mt-16 px-4 sm:px-6 md:px-[100px] flex justify-center md:justify-start'
        >
          <Typography
            font='anton'
            variant='h4'
            weight='regular'
            className='md:text-h3 text-primary-50 drop-shadow-text whitespace-nowrap w-fit relative'
          >
            <DoubleYellowSquare className='absolute -top-6 -right-12 w-10 h-auto' />
            Our Mission
          </Typography>
        </Cell>
        <Cell cols='1_full' className='mt-9 md:pl-[100px]'>
          <div className='w-full'>
            <div className='relative flex gap-28 w-fit gsap-slider'>
              <div className='progress-bar-wrapper absolute w-full h-[2px] top-28 pr-36 hidden md:block'>
                <div className='relative w-full h-full'>
                  <div className='absolute z-0 w-full h-full bg-typo-white opacity-40'></div>
                  <div className='h-full relative z-10 progress-bar w-12 bg-typo-white'></div>
                </div>
              </div>
              {missionItems.map((mission, idx) => {
                return (
                  <MissionItem
                    key={idx}
                    number={`0${idx + 1}`}
                    title={mission.title}
                    desc={mission.desc}
                    className={`mission-${idx + 1} opacity-50`}
                  />
                );
              })}
              <div className='w-20'></div>
            </div>
            <div className='progress-bar-wrapper-mobile relative w-full h-[3px] top-28 max-w-[600px] block md:hidden'>
              <div className='absolute top-0 left-0 z-0 w-full h-full bg-typo-white opacity-40'></div>
              <div className='h-full relative progress-bar-mobile bg-typo-white z-10'></div>
            </div>
          </div>
        </Cell>
        <Cell cols='1_full' className='h-[40vh] w-full'></Cell>
      </Grid>
    </div>
  );
};

interface MissionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  desc: string;
  number: string;
}

function MissionItem({
  title,
  desc,
  number,
  className,
  ...rest
}: MissionProps) {
  return (
    <div
      className={clsxm('md:w-[660px] w-[80vw] mission-item', className)}
      {...rest}
    >
      <div className='py-1 px-2 border border-white rounded-md w-fit'>
        <Typography font='epilogue' variant='c1' weight='medium' color='white'>
          {number}
        </Typography>
      </div>
      <Typography
        font='anton'
        variant='h6'
        weight='regular'
        color='white'
        className='md:text-h4 drop-shadow-text w-full mt-6 md:mt-0'
      >
        {title}
      </Typography>
      <Typography
        font='epilogue'
        variant='p'
        weight='medium'
        color='white'
        className='md:text-h6 w-full mt-4 md:mt-6'
      >
        {desc}
      </Typography>
    </div>
  );
}

export default Mission;
