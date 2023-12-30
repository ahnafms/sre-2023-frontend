'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NextImage from 'next/image';
import * as React from 'react';

import Button from '@/components/Button';
import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';
import heroAboutItems from '@/constant/heroAboutItems';
import clsxm from '@/lib/clsxm';

import DivisionMember from './components/DivisionMember';
import HeroCard from './components/HeroCard';
import { Divisions } from './constant/Divisions';
import HeroBackground from './container/HeroBackground';
import WhatDoBackground from './container/WhatDoBackground';

export default function About() {
  const comp = React.useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const heroCards = gsap.utils.toArray('.hero-card');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: `+=${heroCards.length * 550}px bottom`,
          pin: true,
          // markers: true,
          scrub: 1,
        },
      });

      heroCards.forEach((_, index) => {
        if (index < heroCards.length - 1) {
          tl.to(
            `.hero-card-${index + 1}`,
            {
              top: '-15%',
              scale: 0.75,
              zIndex: 0,
              opacity: 0.5,
            },
            '>+0.1',
          );

          if (index < heroCards.length - 1)
            tl.to(
              `.hero-card-${index + 2}`,
              {
                top: '50%',
                zIndex: 10,
                scale: 1,
                opacity: 1,
              },
              '<',
            );

          if (index < heroCards.length - 2)
            tl.fromTo(
              `.hero-card-${index + 3}`,
              {
                opacity: 0,
              },
              {
                opacity: 0.5,
              },
              '<',
            );

          if (index) {
            tl.to(
              `.hero-card-${index}`,
              {
                opacity: 0,
              },
              '<',
            );
          }
        }
      });
    },
    { scope: comp },
  );

  return (
    <main ref={comp}>
      <section className='hero-section min-h-[600px] h-screen flex flex-col justify-center items-center overflow-hidden relative'>
        <HeroBackground />
        <Grid className='z-[5]'>
          <Cell cols='1_full' rows='1_1' className='flex flex-col mt-20'>
            <Typography
              as='h1'
              variant='h5'
              font='anton'
              className={clsxm(
                'text-primary-50 text-center',
                'drop-shadow-text sm:text-h4 lg:text-h3 xl:text-h1',
              )}
            >
              Our Commitment to Sustainable Development Goals
            </Typography>
          </Cell>
        </Grid>
        <div className='bg-primary-50 mx-auto w-full rounded-none lg:w-[82%] h-[583px] lg:h-[45vh] flex justify-center items-center overflow-hidden z-[3] mt-9 lg:mt-[5vh] drop-shadow-2xl lg:rounded-2xl'>
          <div className='hero-container h-[80%] lg:w-[642px] w-[300px] max-w-[85%] lg:h-full relative'>
            {heroAboutItems.map(({ title, desc, icon }, idx) => {
              if (idx == 0) {
                return (
                  <HeroCard
                    key={idx}
                    title={title}
                    desc={desc}
                    Icon={icon}
                    className='hero-card hero-card-1 z-10 h-full w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  />
                );
              } else {
                return (
                  <HeroCard
                    key={idx}
                    title={title}
                    desc={desc}
                    Icon={icon}
                    className={
                      `hero-card-${idx + 1} ` +
                      'hero-card z-0 scale-75 opacity-50 h-full w-full absolute -translate-x-1/2 -translate-y-1/2 top-[115%] left-1/2'
                    }
                  />
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className='bg-[#FFFFFF] min-h-screen h-full flex justify-center items-center overflow-hidden relative py-20 md:py-0'>
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
        <WhatDoBackground />
      </section>

      <section className='overflow-hidden relative w-full'>
        <section className='h-full flex flex-col justify-center items-center overflow-x-hidden relative pt-12 lg:pt-20 pb-12 z-[5]'>
          <Grid className='z-[5]'>
            <Cell cols='1_4' colsMd='1_12' className='flex flex-col'>
              <Typography
                as='h1'
                variant='h1'
                font='anton'
                className={clsxm(
                  'text-primary-50 text-center',
                  'text-[32px] leading-[48px] md:text-[64px] md:leading-[84px] lg:text-[80px] lg:leading-[96px]',
                )}
              >
                Meet Our Team
              </Typography>
            </Cell>
            <Cell cols='1_4' colsMd='2_10' className='lg:mt-3 mt-6'>
              <Typography
                as='p'
                variant='t'
                weight='medium'
                font='epilogue'
                className={clsxm(
                  'text-typo-white text-center',
                  'text-[14px] leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[24px]',
                )}
              >
                Discover our team - a talented, passionate group dedicated to
                excellence. From seasoned experts to fresh innovators,
                we&apos;re the driving force behind our success. Welcome to our
                world!*
              </Typography>
            </Cell>
            <Cell
              cols='1_4'
              colsMd='1_12'
              className='flex flex-col lg:mt-7 mt-5 lg:mb-5 mb-7'
            >
              <Typography
                as='h5'
                variant='h5'
                font='anton'
                className={clsxm(
                  'text-primary-50 text-center',
                  'text-[20px] leading-[24px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[48px]',
                )}
              >
                The Divisions
              </Typography>
            </Cell>
            <Cell
              cols='1_4'
              colsMd='2_10'
              className='flex flex-wrap lg:justify-center justify-between lg:gap-x-5 gap-y-4 '
            >
              {Divisions.map((divisi, index) => (
                <Button
                  key={index}
                  variant='outline-black'
                  size='sm'
                  className='py-2 px-4'
                >
                  {divisi.nama}
                </Button>
              ))}
            </Cell>
          </Grid>
        </section>

        <section className='h-full flex flex-col justify-center items-center overflow-x-hidden relative pb-20 z-[5]'>
          <DivisionMember />
        </section>
        <NextImage
          src='/images/about/paper5.png'
          alt='paper'
          width={239}
          height={1600}
          className='absolute top-0 w-full z-[0]'
        />
      </section>
    </main>
  );
}
