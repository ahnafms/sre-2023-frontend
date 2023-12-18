'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { RefObject, useLayoutEffect, useRef } from 'react';

import Description from '@/components/landing/Description';
import Events from '@/components/landing/Events';
import Hero from '@/components/landing/Hero';
import Mission from '@/components/landing/Mission';
import Vision from '@/components/landing/Vision';
import clsxm from '@/lib/clsxm';
import EarthImage from '~/images/landing/sre-earth.png';

export default function Home() {
  const mainComp = useRef(null);
  const comp = useRef(null);
  const comp2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const markers = false;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const vh = (coef: number) => window.innerHeight * (coef / 100);

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
      return () => ctx.revert();
    }, mainComp);
  }, [mainComp, markers]);

  return (
    <main className='relative bg-secondary-70' ref={mainComp}>
      <Earth ref={comp} className='z-10' animationClass='animation-container' />
      <Earth
        ref={comp2}
        animationClass='animation-container-2'
        className='left-auto -right-[100%] -bottom-4'
      />
      <div className='h-full w-full opacity-0 bg-secondary-70 absolute z-20 pointer-events-none green-overlay'></div>
      <section className='h-screen hero z-0'>
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
      <section className='h-screen event'>
        <Events />
      </section>
    </main>
  );
}

type EarthProps = {
  ref: RefObject<HTMLElement>;
  className?: string;
  animationClass: string;
};

const Earth = ({ ref, animationClass, className = '' }: EarthProps) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.${animationClass}`, {
        rotation: 360,
        duration: 200,
        ease: 'none',
        repeat: -1,
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, animationClass]);

  return (
    <div
      className={clsxm(
        'fixed w-[50vw] aspect-square bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
        className,
        animationClass,
      )}
    >
      <div className='border-[3px] w-full h-full border-dashed border-white rounded-full p-2'>
        <div className=' relative w-full h-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full bg-none'>
          <Image
            src={EarthImage}
            className='object-contain'
            sizes='1200px'
            fill
            alt='earth animation sre its'
          />
        </div>
      </div>
    </div>
  );
};
