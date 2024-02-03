import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactNode, useLayoutEffect, useRef } from 'react';

type ScrollSpeedProps = {
  children: ReactNode;
  speed?: number;
  from?: number;
  to?: number;
  fromVars?: gsap.TweenVars;
  toVars?: gsap.TweenVars;
  desktopOnly?: boolean;
};

const ScrollSpeed = ({
  desktopOnly = false,
  children,
  speed = 0,
  from,
  to,
  fromVars = {},
  toVars = {},
}: ScrollSpeedProps) => {
  const targetRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const speedData = [
    {
      from: 0,
      to: 0,
    },
    {
      from: '0px',
      to: '-400px',
    },
    {
      from: '900px',
      to: '-150px',
    },
  ];

  const compSpeed = speed < speedData.length ? speed : 0;
  const compFrom = from ?? speedData[compSpeed].from;
  const compTo = to ?? speedData[compSpeed].to;

  const { fromScroll, fromVar } = fromVars;
  const { toScroll, toVar } = toVars;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        gsap.fromTo(
          '.scroll-box',
          {
            y: compFrom,
            scrollTrigger: fromScroll,
            ...fromVar,
          },
          {
            y: compTo,
            scrollTrigger: {
              trigger: '.scroll-speed-container',
              scrub: 1,
              // markers: true,
              ...toScroll,
            },
            ease: 'Linear.easeNone',
            ...toVar,
          },
        );
      });

      mm.add('(max-width: 1024px)', () => {
        if (desktopOnly)
          gsap.fromTo(
            '.scroll-box',
            {
              y: compFrom,
              scrollTrigger: fromScroll,
              ...fromVar,
            },
            {
              y: compTo,
              scrollTrigger: {
                trigger: '.scroll-speed-container',
                scrub: 1,
                // markers: true,
                ...toScroll,
              },
              ease: 'Linear.easeNone',
              ...toVar,
            },
          );
      });
    });
    return () => ctx.revert();
  }, [
    targetRef,
    compFrom,
    compTo,
    fromScroll,
    fromVar,
    toScroll,
    toVar,
    desktopOnly,
  ]);

  return (
    <div ref={targetRef}>
      <div className='scroll-speed-container'>
        <div className='scroll-box w-fit h-fit'>{children}</div>
      </div>
    </div>
  );
};

export default ScrollSpeed;
