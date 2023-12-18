import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useLayoutEffect,
  useRef,
} from 'react';

import clsxm from '@/lib/clsxm';

import Cell from '../Cell';
import Grid from '../Grid';
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

      items.forEach((_, idx) => {
        if (idx > 0) {
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
        }
      });
    }, comp);

    return () => ctx.revert();
  }, [comp]);

  return (
    <div className='w-full h-full relative z-30' ref={comp}>
      <Grid className='mission-gsap-container h-full md:px-0'>
        <Cell cols='1_full' className='mt-16 px-4 sm:px-6 md:px-[100px]'>
          <Typography
            font='anton'
            variant='h3'
            weight='regular'
            className='text-primary-50 drop-shadow-text whitespace-nowrap w-fit'
          >
            Our Mission
          </Typography>
        </Cell>
        <Cell cols='1_full' className='mt-9 pl-4 sm:pl-6 md:pl-[100px]'>
          <div className='w-full'>
            <div className='relative flex gap-28 w-fit gsap-slider'>
              <div className='progress-bar-wrapper absolute w-full h-[2px] top-28 pr-36'>
                <div className='relative w-full h-full'>
                  <div className='h-[110%] progress-bar w-12 bg-typo-white'></div>
                  <div className='absolute w-full h-full bg-secondary-80'></div>
                </div>
              </div>
              <MissionItem className='mission-1 ' />
              <MissionItem className='mission-2 opacity-50 ' />
              <MissionItem className='mission-3 opacity-50' />
              <MissionItem className='mission-4 opacity-50' />
              <MissionItem className='mission-5 opacity-50' />
              <div className='w-20'></div>
            </div>
          </div>
        </Cell>
        <Cell cols='1_full' className='h-[40vh] w-full'></Cell>
      </Grid>
    </div>
  );
};

const MissionItem = ({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={clsxm('w-[660px] mission-item', className)} {...rest}>
      <div className='py-1 px-2 border border-white rounded-md w-fit'>
        <Typography font='epilogue' variant='c1' weight='medium' color='white'>
          01
        </Typography>
      </div>
      <Typography
        font='anton'
        variant='h4'
        weight='regular'
        color='white'
        className='drop-shadow-text w-full'
      >
        Knowledge
      </Typography>
      <Typography
        font='epilogue'
        variant='h6'
        weight='medium'
        color='white'
        className='w-full mt-6'
      >
        Promote knowledge and awareness about renewable energy through
        education, public campaigns, and collaboration with educational
        institutions, communities, and governments.
      </Typography>
    </div>
  );
};

export default Mission;
