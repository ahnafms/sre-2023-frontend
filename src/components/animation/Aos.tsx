import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactNode, useLayoutEffect, useRef } from 'react';

const effectProperty = {
  fade: { opacity: 0 },
  slideLeft: { x: -100 },
  slideRight: { x: 100 },
  slideUp: { y: 100 },
  slideDown: { y: -100 },
  // add new effect property
};

type effectOption = keyof typeof effectProperty;

type AosProps = {
  children?: ReactNode;
  effect?: effectOption[] | effectOption; // cloud be multiple effect
  debug?: boolean;
  duration?: number;
  delay?: number;
};

const Aos = ({
  duration = 0.5,
  delay = 0.2,
  effect = 'fade',
  children,
  debug = false,
}: AosProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);

  const animation =
    typeof effect == 'object'
      ? effect.reduce((result, current) => {
          Object.assign(result, effectProperty[current]);
          return result;
        }, {})
      : effectProperty[effect];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animation-box', {
        ...animation,
        delay,
        duration,
        scrollTrigger: {
          trigger: '.gsap-container',
          toggleActions: 'restart pause reverse pause',
          markers: debug,
        },
      });
    }, comp);
    return () => ctx.revert();
  }, [animation, debug, delay, duration]);

  return (
    <div ref={comp}>
      <div className='gsap-container'>
        <div className='animation-box w-fit h-fit'>{children}</div>
      </div>
    </div>
  );
};

export default Aos;
