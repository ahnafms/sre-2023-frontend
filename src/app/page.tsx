'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

import Description from '@/components/landing/Description';
import Events from '@/components/landing/Events';
import Hero from '@/components/landing/Hero';
import Mission from '@/components/landing/Mission';
import Vision from '@/components/landing/Vision';
import clsxm from '@/lib/clsxm';
import EarthImage from '~/images/landing/sre-earth.png';

export default function Home() {
  const mainComp = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const markers = false;
  const vh = (coef: number) => window.innerHeight * (coef / 100);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.green-overlay', {
        opacity: 0,
      });

      gsap.fromTo(
        '.animation-container',
        {},
        {
          scrollTrigger: {
            trigger: '.description',
            scrub: 0.5,
            markers,
            start: '20% bottom',
            end: '80% bottom',
          },
          bottom: '50%',
          scale: 2.3,
        },
      );

      gsap.fromTo(
        '.green-overlay',
        {
          opacity: '0%',
        },
        {
          scrollTrigger: {
            trigger: '.description',
            scrub: 0.5,
            markers,
            start: '20% bottom',
            end: '50% bottom',
          },
          opacity: '50%',
        },
      );

      gsap.fromTo(
        '.green-overlay',
        {
          opacity: '50%',
        },
        {
          scrollTrigger: {
            trigger: '.description',
            scrub: 0.5,
            markers,
            start: '90% bottom',
            end: '160% bottom',
          },
          opacity: '0%',
        },
      );

      const mm = gsap.matchMedia();

      mm.add(
        '(max-width: 1024px)',
        () => {
          gsap.fromTo(
            '.animation-container',
            {},
            {
              scrollTrigger: {
                trigger: '.vision',
                scrub: 0.5,
                markers,
                start: '10% bottom',
                end: '90% bottom',
              },
              bottom: '200%',
              opacity: 0,
            },
          );
        },
        mainComp,
      );

      mm.add(
        '(min-width: 1024px)',
        () => {
          gsap.fromTo(
            '.animation-container',
            {},
            {
              scrollTrigger: {
                trigger: '.vision',
                scrub: 0.5,
                markers,
                start: '10% bottom',
                end: '80% bottom',
              },
              scale: 0.9,
              left: '10vw',
            },
          );

          gsap.fromTo(
            '.animation-container-2',
            {},
            {
              scrollTrigger: {
                trigger: '.mission',
                scrub: 0.5,
                markers,
                start: 'top bottom',
                end: vh(80) + ' bottom',
              },
              left: '90vw',
            },
          );

          gsap.fromTo(
            '.animation-container',
            {},
            {
              scrollTrigger: {
                trigger: '.mission',
                scrub: 0.5,
                markers,
                start: vh(20) + ' bottom',
                end: vh(80) + ' bottom',
              },
              left: '-50vw',
            },
          );

          gsap.fromTo(
            '.animation-container-2',
            {},
            {
              scrollTrigger: {
                trigger: '.event',
                scrub: 0.5,
                markers,
                start: '20% bottom',
                end: '80% bottom',
              },
              bottom: '100vh',
            },
          );
        },
        mainComp,
      );

      return () => ctx.revert();
    }, mainComp);
  }, [mainComp, markers]);
  return (
    <main className='relative bg-secondary-70 ' ref={mainComp}>
      <Earth
        className='z-10 -bottom-32 sm:bottom-0'
        animationClass='animation-container'
      />
      <Earth
        animationClass='animation-container-2'
        className='left-auto -right-[200%] -bottom-4 hidden lg:block'
      />
      <div className='h-full w-full opacity-0 bg-secondary-70 absolute z-20 pointer-events-none green-overlay'></div>

      <div className='absolute w-full h-[110vh] z-0 top-0 left-0'>
        <div className='relative w-full h-full'>
          <Image
            src='/images/landing/hero-bg2.jpg'
            alt='hero bg image'
            fill
            className='object-cover grayscale opacity-25'
          />
          <div className='absolute bottom-0 w-full h-12 bg-gradient-to-t from-secondary-70 to-transparent'></div>
        </div>
      </div>

      {/* Div wrapper for x hidden overflow exclude Events Section */}
      <div className='overflow-x-hidden overflow-y-clip'>
        <section className='h-screen hero relative z-10'>
          <Hero />
        </section>
        <section className='h-screen description'>
          <Description />
        </section>
        <section className='h-screen vision'>
          <Vision />
        </section>
        <section className='min-h-screen w-full overflow-hidden mission'>
          <Mission />
        </section>
      </div>
      <section className='h-screen event'>
        <Events />
      </section>
    </main>
  );
}

type EarthProps = {
  className?: string;
  animationClass: string;
};

const Earth = ({ animationClass, className = '' }: EarthProps) => {
  return (
    <div
      className={clsxm(
        'fixed w-[50vw] min-w-[800px] aspect-square bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
        className,
        animationClass,
      )}
    >
      <div className='border-[3px] w-full h-full border-dashed border-white rounded-full p-2'>
        <div className=' relative w-full h-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full bg-none'>
          <Image
            src={EarthImage}
            className='object-contain animate-spin-96'
            sizes='1200px'
            fill
            alt='earth animation sre its'
          />
        </div>
      </div>
    </div>
  );
};
