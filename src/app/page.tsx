'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef } from 'react';

import Description from '@/components/landing/Description';
import Events from '@/components/landing/Events';
import Hero from '@/components/landing/Hero';
import Mission from '@/components/landing/Mission';
import Vision from '@/components/landing/Vision';
import LoadingPage from '@/components/LoadingPage';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/navbar/Navbar';
import clsxm from '@/lib/clsxm';
import EarthImage from '~/images/landing/sre-earth.png';

export default function Home() {
  const mainComp = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const markers = false;
  const vh = (coef: number) => window.innerHeight * (coef / 100);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        '(min-width: 1024px)',
        () => {
          gsap.to('.green-overlay', {
            opacity: 0,
          });

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
                start: '200px bottom',
                end: '600px bottom',
              },
              bottom: '100vh',
            },
          );

          gsap.fromTo(
            '.animation-container-2',
            {},
            {
              scrollTrigger: {
                trigger: '.footer-wrapper',
                scrub: 0.5,
                markers,
                start: '20px bottom',
                end: '200px bottom',
              },
              opacity: 0,
            },
          );
        },
        mainComp,
      );

      return () => ctx.revert();
    }, mainComp);
  }, [mainComp, markers]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <LoadingPage>
      <main className='relative bg-secondary-70' ref={mainComp}>
        <div className='top-0 z-10 w-full h-[300vh] lg:h-screen overflow-x-hidden overflow-y-visible absolute lg:fixed pointer-events-none'>
          <div className='w-full h-full relative'>
            <Earth
              className='z-10 w-[150vh] lg:w-[50vw] bottom-[55%] lg:-bottom-8 absolute lg:fixed'
              animationClass='animation-container'
            />
          </div>
        </div>
        <Earth
          animationClass='animation-container-2'
          className='left-auto -right-[200%] -bottom-4 hidden lg:block'
        />
        <div className='h-full w-full opacity-0 bg-secondary-70 absolute z-20 pointer-events-none green-overlay'></div>

        <div className='absolute w-full h-[110vh] z-0 top-0 left-0'>
          <div className='relative w-full h-full'>
            <Image
              src='/images/landing/hero-bg2.jpg'
              sizes='(max-width: 1200px) 100vw, 1200px'
              alt='hero bg image'
              fill
              className='object-cover grayscale opacity-25'
            />
            <div className='absolute bottom-0 w-full h-12 bg-gradient-to-t from-secondary-70 to-transparent'></div>
          </div>
        </div>

        {/* Div wrapper for x hidden overflow exclude Events Section */}
        <div className='overflow-x-hidden overflow-y-clip'>
          <section className='h-screen hero relative z-[102]'>
            <Navbar />
            <Hero />
          </section>
          <section className='h-screen description '>
            <Description />
          </section>
          <section className='min-h-screen vision pt-24'>
            <Vision />
          </section>
          <section className='min-h-screen w-full overflow-hidden mission'>
            <Mission />
          </section>
        </div>
        <section className='min-h-screen event'>
          <Events />
        </section>
        <div className='footer-wrapper'>
          <Footer />
        </div>
      </main>
    </LoadingPage>
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
        <div className=' relative w-full h-full bg-secondary-70 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-full bg-none'>
          <Image
            src={EarthImage}
            className='object-contain animate-spin-96 opacity-50 lg:opacity-100'
            sizes='(max-width: 768px) 100vh, 1200px'
            fill
            alt='earth animation sre its'
          />
        </div>
      </div>
    </div>
  );
};
