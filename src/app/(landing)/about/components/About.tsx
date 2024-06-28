'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import * as React from 'react';

import LoadingPage from '@/components/LoadingPage';
import Footer from '@/layouts/Footer';

import Hero from './Hero';
import MeetOurTeam from './MeetOurTeam';
import WhatDoTheySay from './WhatDoTheySay';

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
              scale: 0.9,
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
    <LoadingPage time={1000}>
      <main ref={comp} className='bg-secondary-70'>
        <Hero />
        <WhatDoTheySay />
        <MeetOurTeam />
        <Footer />
      </main>
    </LoadingPage>
  );
}
