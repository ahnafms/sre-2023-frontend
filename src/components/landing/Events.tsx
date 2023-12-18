import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

import Cell from '../Cell';
import Grid from '../Grid';
import Typography from '../Typography';

const Events = () => {
  // const eventItems = [
  //   {
  //     eventName: 'Company Visit',
  //     imagePath: '/images/landing/comvis_pln.jpg',
  //   },
  //   {
  //     eventName: 'New knowable 2',
  //     imagePath: '/images/landing/nk2.jpg',
  //   },
  // ];

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
          markers: true,
          scrub: 1,
        },
      });

      items.forEach((_, idx) => {
        if (idx < items.length - 1) {
          tl.fromTo(
            '.event-' + (idx + 1),
            {
              height: '100%',
            },
            {
              height: '0%',
            },
            `scene${idx}+=0.2`,
          );

          tl.fromTo(
            '.title-' + (idx + 1),
            {
              opacity: '0%',
            },
            {
              opacity: '100%',
            },
            `scene${idx}+=0.2`,
          );

          if (idx)
            tl.fromTo(
              '.title-' + idx,
              {
                opacity: '100%',
              },
              {
                opacity: '0%',
              },
              `scene${idx}+=0.2`,
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
        <Cell cols='1_5' className=''>
          <div className='flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
              <Typography
                font='epilogue'
                weight='semibold'
                variant='bt'
                color='outline'
              >
                Previous
              </Typography>
              <Typography
                font='epilogue'
                weight='semibold'
                variant='t'
                color='outline'
              >
                Company Visit
              </Typography>
            </div>
            <div className='w-full flex items-center h-[500px] gsap-slider relative'>
              <div className='w-1 h-full bg-white mr-6 relative progress-bar-wrapper'>
                <div className='w-full h-8 bg-primary-50 absolute top-0 progress-bar'></div>
              </div>
              <div className='w-4/5 aspect-[3/4] max-h-[70vh] rounded-2xl relative overflow-hidden'>
                <div className='absolute z-0 w-full h-full'>
                  <div className='w-full h-full relative event-item event-4'>
                    <Image
                      src='/images/landing/comvis_pln.jpg'
                      className='brightness-75 object-cover object-top'
                      alt='comvis'
                      fill
                    />
                  </div>
                </div>
                <div className='absolute z-0 w-full h-full'>
                  <div className='w-full h-full relative event-item event-3'>
                    <Image
                      src='/images/landing/nk2.jpg'
                      className='brightness-75 object-cover object-top'
                      alt='comvis'
                      fill
                    />
                  </div>
                </div>
                <div className='absolute z-0 w-full h-full'>
                  <div className='w-full h-full relative event-item event-2'>
                    <Image
                      src='/images/landing/comvis_pln.jpg'
                      className='brightness-75 object-cover object-top'
                      alt='comvis'
                      fill
                    />
                  </div>
                </div>
                <div className='absolute z-0 w-full h-full'>
                  <div className='w-full h-full relative event-item event-1'>
                    <Image
                      src='/images/landing/nk2.jpg'
                      className='brightness-75 object-cover object-top'
                      alt='comvis'
                      fill
                    />
                  </div>
                </div>
                <Typography
                  font='anton'
                  variant='h4'
                  weight='regular'
                  color='white'
                  className='p-6 absolute drop-shadow-text whitespace-nowrap w-fit title-1 top-0'
                >
                  Company <br />
                  Visit
                </Typography>
                <Typography
                  font='anton'
                  variant='h4'
                  weight='regular'
                  color='white'
                  className='p-6 absolute drop-shadow-text whitespace-nowrap w-fit title-2 top-0'
                >
                  Newknowable <br />2
                </Typography>
                <Typography
                  font='anton'
                  variant='h4'
                  weight='regular'
                  color='white'
                  className='p-6 absolute drop-shadow-text whitespace-nowrap w-fit title-3 top-0'
                >
                  Company <br />
                  Visit
                </Typography>
                <Typography
                  font='anton'
                  variant='h4'
                  weight='regular'
                  color='white'
                  className='p-6 absolute drop-shadow-text whitespace-nowrap w-fit title-4 top-0'
                >
                  Newknowable <br />2
                </Typography>
              </div>
            </div>
            <div className='pt-4'>
              <Typography
                font='epilogue'
                weight='semibold'
                variant='t'
                color='outline'
              >
                Company Visit
              </Typography>
              <Typography
                font='epilogue'
                weight='semibold'
                variant='bt'
                color='outline'
              >
                Previous
              </Typography>
            </div>
          </div>
        </Cell>
        <Cell
          cols='7_full'
          className='h-screen flex flex-col justify-end items-end pb-24'
        >
          <Typography
            font='anton'
            variant='h3'
            weight='regular'
            className='text-primary-50 drop-shadow-text whitespace-nowrap w-fit'
          >
            Event&apos;s Spotlight
          </Typography>
          <Typography
            font='epilogue'
            variant='h6'
            weight='medium'
            color='white'
            className='w-full mt-6 text-right'
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
