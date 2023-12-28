import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

import eventItems from '@/constant/events';
import clsxm from '@/lib/clsxm';

import Cell from '../Cell';
import Grid from '../Grid';
import CurlyArrow from '../ornament/CurlyArrow';
import Typography from '../Typography';

const Events = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.event-item');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.gsap-container',
          start: 'top top',
          end: `+=${items.length * 800}px bottom`,
          pin: true,
          // markers: true,
          scrub: 1,
        },
      });

      items.forEach((_, idx) => {
        if (idx) {
          tl.fromTo(
            '.event-' + idx,
            {
              height: '100%',
            },
            {
              height: '0%',
            },
            `>+0.2`,
          );

          tl.fromTo(
            '.title-' + idx,
            {
              opacity: '100%',
            },
            {
              opacity: '0%',
              duration: 0.5,
            },
            `<`,
          );

          tl.fromTo(
            '.title-' + (idx + 1),
            {
              opacity: '0%',
            },
            {
              opacity: '100%',
              duration: 0.5,
            },
            '>-0.2',
          );
        }
      });

      const dur = tl.duration();

      tl.to(
        '.progress-bar',
        {
          ease: 'none',
          top: '100%',
          translateY: '-100%',
          duration: dur,
        },
        0,
      );
    }, comp);

    return () => ctx.revert();
  }, [comp]);

  return (
    <div ref={comp} className='bg-secondary-70'>
      <Grid className='h-full gsap-container'>
        <Cell cols='1_full' colsMd='1_7' colsLg='1_5'>
          <div className='flex flex-col justify-center items-center w-full h-full pt-12 pb-4'>
            <div className=' w-full flex justify-center items-center max-h-[80vh] gsap-slider relative'>
              <div className='w-1 h-full bg-white mr-6 relative progress-bar-wrapper'>
                <div className='w-full h-8 bg-primary-50 absolute top-0 progress-bar'></div>
              </div>
              <div className='w-full aspect-[3/5] h-[60vh] md:h-[70vh] max-w-[400px]'>
                <div className='w-full h-full rounded-2xl relative overflow-hidden'>
                  {eventItems.reverse().map((event, idx) => {
                    return (
                      <div className='absolute z-0 w-full h-full' key={idx}>
                        <div
                          className={clsxm(
                            'w-full h-full relative event-item',
                            `event-${eventItems.length - idx}`,
                          )}
                        >
                          <Image
                            src={event.imagePath}
                            className='brightness-75 object-cover object-top'
                            alt={event.eventName}
                            fill
                          />
                        </div>
                      </div>
                    );
                  })}
                  {eventItems.map((event, idx) => {
                    return (
                      <Typography
                        key={idx}
                        font='anton'
                        variant='h6'
                        weight='regular'
                        color='white'
                        className={clsxm(
                          'md:text-h5 lg:text-h4 p-6 absolute drop-shadow-text w-fit top-0',
                          `title-${idx + 1}`,
                        )}
                      >
                        {event.eventName}
                      </Typography>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className='pt-4'> */}
            {/*   <Typography */}
            {/*     font='epilogue' */}
            {/*     weight='semibold' */}
            {/*     variant='t' */}
            {/*     color='outline' */}
            {/*   > */}
            {/*     Company Visit */}
            {/*   </Typography> */}
            {/*   <Typography */}
            {/*     font='epilogue' */}
            {/*     weight='semibold' */}
            {/*     variant='bt' */}
            {/*     color='outline' */}
            {/*   > */}
            {/*     Previous */}
            {/*   </Typography> */}
            {/* </div> */}
          </div>
        </Cell>
        <Cell
          cols='1_full'
          colsMd='9_full'
          colsLg='7_full'
          className='md:h-screen flex flex-col justify-end items-end pb-24 relative'
        >
          <Typography
            font='anton'
            variant='h5'
            weight='regular'
            className='md:text-h4 lg:text-h3 text-right text-primary-50 drop-shadow-text whitespace-normal w-fit'
          >
            <CurlyArrow className='absolute hidden lg:block -rotate-6 -top-40 left-0 h-40 w-auto' />
            Event&apos;s Spotlight
          </Typography>
          <Typography
            font='epilogue'
            variant='bt'
            weight='medium'
            color='white'
            className='lg:text-p w-full mt-6 text-right'
          >
            SRE ITS exist to develop innovation, exchange ideas, and facilitate
            students as active learners in the Renewable Energy field.
          </Typography>
        </Cell>
      </Grid>
    </div>
  );
};

export default Events;
