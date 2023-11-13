'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { RefObject, useLayoutEffect, useRef } from 'react';

import EarthImage from '~/images/landing/sre-earth.png';

export default function Home() {
  const comp = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          scrub: true,
          markers: true,
        },
      });

      tl.totalDuration(10);

      tl.to('.animation-container', {
        duration: 0.7,
      });

      tl.to(
        '.animation-container',
        {
          bottom: '50%',
          y: '50%',
          width: '1800px',
          duration: 0.8,
        },
        '>',
      );

      tl.to(
        '.animation-container',
        {
          left: '0',
          x: '0',
          width: '800px',
          duration: 0.5,
        },
        '>',
      );

      tl.to('.animation-container', {
        bottom: '80%',
        duration: 0.5,
      });

      tl.to('.animation-container', {
        bottom: '80%',
        left: '90%',
        duration: 1,
      });

      tl.to('.animation-container', {
        bottom: '100%',
        left: '50%',
        duration: 1,
      });

      tl.to('.animation-container', {
        duration: 3,
      });

      return () => ctx.revert();
    }, comp);
  }, []);

  return (
    <main className='relative' ref={comp}>
      <Earth ref={comp} />
      <section className='h-screen bg-green-500'></section>
      <section className='h-screen bg-yellow-500'></section>
      <section className='h-screen bg-green-500'></section>
      <section className='h-screen bg-yellow-500'></section>
      <section className='h-screen bg-green-500'></section>
      <section className='h-screen bg-yellow-500'></section>
      <section className='h-screen bg-green-500'></section>
      <section className='h-screen bg-yellow-500'></section>
      <section className='h-screen bg-green-500'></section>
      <section className='h-screen bg-yellow-500'></section>
    </main>
  );
}

const Earth = ({ ref }: { ref: RefObject<HTMLElement> }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.animation-container', {
        rotation: 360,
        duration: 200,
        ease: 'none',
        repeat: -1,
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);

  return (
    <div className='fixed w-[800px] aspect-square animation-container bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
      <div className='border-[3px] w-full h-full border-dashed border-white rounded-full p-2'>
        <div className=' relative w-full h-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full bg-none'>
          <Image
            src={EarthImage}
            className='object-contain'
            fill
            alt='earth animation sre its'
          />
        </div>
      </div>
    </div>
  );
};
