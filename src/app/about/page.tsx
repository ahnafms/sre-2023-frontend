'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import * as React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import LoadingPage from '@/components/LoadingPage';
import Typography from '@/components/Typography';
import heroAboutItems from '@/constant/heroAboutItems';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';

import Division from './components/Division';
import HeroCard from './components/HeroCard';
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
    <LoadingPage time={2000}>
      <main ref={comp}>
        <section className='hero-section min-h-[600px] h-screen overflow-hidden relative'>
          <Navbar />
          <HeroBackground />
          <div className='flex flex-col justify-center items-center'>
            <Grid className='z-[5]'>
              <Cell cols='1_full' rows='1_1' className='flex flex-col mt-4'>
                <Typography
                  as='h1'
                  variant='h5'
                  font='anton'
                  className={clsxm(
                    'text-primary-50 text-center',
                    'drop-shadow-text sm:text-h4 lg:text-h3 max-w-5xl',
                  )}
                >
                  Our Commitment to Sustainable Development Goals
                </Typography>
              </Cell>
            </Grid>
            <div className='bg-primary-50 mx-auto w-[90%] rounded-md lg:w-[82%] h-[370px] lg:h-[40vh] flex justify-center items-center overflow-hidden z-[3] mt-9 lg:mt-[5vh] drop-shadow-2xl lg:rounded-2xl'>
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
          </div>
        </section>

        <section className='bg-[#FFFFFF] min-h-screen h-full flex justify-center items-center overflow-hidden relative py-20 md:py-0'>
          <Grid className='z-[5]'>
            <Cell
              colsLg='1_6'
              colsMd='1_6'
              cols='1_full'
              colsSm='2_2'
              className='md:flex flex-col'
            >
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
              <Swiper
                modules={[Pagination]}
                scrollbar={{ draggable: false }}
                pagination={true}
                centeredSlides={true}
                loop={false}
                className='md:!hidden'
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    pagination: {
                      el: '#swiper-pagination-bullet',
                      bulletActiveClass:
                        'swiper-pagination-bullet-active !bg-[#1C1C1E] !w-6 !rounded-3xl !transform !transition-all !duration-300 !ease-in-out',
                      type: 'bullets',
                    },
                  },
                }}
              >
                <SwiperSlide className='h-full self-center'>
                  <Image
                    className='m-auto'
                    src='/images/about/foto1.png'
                    alt='foto sre'
                    objectFit='cover'
                    width={500}
                    height={500}
                  />
                </SwiperSlide>
                <SwiperSlide className='h-full'>
                  <Image
                    className='m-auto'
                    src='/images/about/foto1.png'
                    alt='foto sre'
                    width={500}
                    height={500}
                  />
                </SwiperSlide>
                <SwiperSlide className='h-full'>
                  <Image
                    className='m-auto'
                    src='/images/about/foto1.png'
                    alt='foto sre'
                    width={500}
                    height={500}
                  />
                </SwiperSlide>
              </Swiper>
              <Typography
                as='h4'
                variant='h4'
                font='epilogue'
                weight='bold'
                className={clsxm(
                  'text-primary-60 md:mt-5 mt-3 md:ml-0',
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
                  'text-typo-dark md:ml-0',
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
                  'text-typo-dark md:w-4/6 w-5/6 md:mt-5 mt-3 md:ml-0',
                  'text-[14px] leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[20px] lg:leading-[24px]',
                )}
              >
                Discover our team - a talented, passionate group dedicated to
                excellence. From seasoned experts to fresh innovators,
                we&apos;re the driving force behind our success. Welcome to our
                world!*
              </Typography>
              <div id='swiper-pagination-bullet' />
            </Cell>
            <Cell
              cols='1_full'
              colsMd='7_full'
              colsLg='8_5'
              className='flex-row w-full items-center justify-center hidden md:flex md:gap-5 relative'
            >
              <button id='swiper-button-prev'>
                <div
                  className={clsxm(
                    'right-[5%] justify-center items-center w-10 h-10 rounded-full text-2xl hover:cursor-pointer md:flex hidden',
                    'bg-typo-white border-[1px] border-typo-outline hover:bg-typo-outline text-[#9AA2B1] active:bg-typo-disabled',
                  )}
                >
                  <BsArrowLeftShort />
                </div>
              </button>
              <div className='swiper-container flex w-[90%] md:w-full items-center justify-center md:justify-evenly gap-10 h-full'>
                <Swiper
                  modules={[Pagination, Navigation]}
                  scrollbar={{ draggable: false }}
                  pagination={true}
                  centeredSlides={true}
                  loop={false}
                  breakpoints={{
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 100,
                      navigation: {
                        nextEl: '#swiper-button-next',
                        prevEl: '#swiper-button-prev',
                      },
                      pagination: {
                        el: '#swiper-pagination-bullet',
                        bulletActiveClass:
                          'swiper-pagination-bullet-active !bg-[#1C1C1E] !w-6 !rounded-3xl !transform !transition-all !duration-300 !ease-in-out',
                        type: 'bullets',
                      },
                    },
                  }}
                >
                  <SwiperSlide className='h-full self-center'>
                    <Image
                      src='/images/about/foto1.png'
                      alt='foto sre'
                      objectFit='cover'
                      width={1000}
                      height={1000}
                    />
                  </SwiperSlide>
                  <SwiperSlide className='h-full'>
                    <Image
                      src='/images/about/foto1.png'
                      alt='foto sre'
                      width={1000}
                      height={1000}
                    />
                  </SwiperSlide>
                  <SwiperSlide className='h-full'>
                    <Image
                      src='/images/about/foto1.png'
                      alt='foto sre'
                      width={1000}
                      height={1000}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <button id='swiper-button-next'>
                <div
                  className={clsxm(
                    'right-[5%] justify-center items-center w-10 h-10 rounded-full text-2xl hover:cursor-pointer md:flex hidden',
                    'bg-typo-white border-[1px] border-typo-outline hover:bg-typo-outline text-[#9AA2B1] active:bg-typo-disabled',
                  )}
                >
                  <BsArrowRightShort />
                </div>
              </button>
            </Cell>
          </Grid>
          <WhatDoBackground />
        </section>

        <section className='overflow-hidden relative w-full'>
          <section className='h-full flex flex-col justify-center items-center overflow-x-hidden relative pb-20 z-[5]'>
            <Division />
          </section>
          <Image
            src='/images/about/paper5.png'
            alt='paper'
            width={500}
            height={5000}
            className='absolute h-full top-0 w-full z-[0] bg-cover'
          />
        </section>
        <Footer />
      </main>
    </LoadingPage>
  );
}
