'use client';
import { LenisInstance, ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';

import useWindowResize from '@/hooks/useWindowdResize';

export default function LenisScroll({ children }: { children: ReactNode }) {
  const [isSmooth, setSmooth] = useState(true);
  const path = usePathname();
  const isDashboard = path.startsWith('/dashboard');

  const { windowWidth } = useWindowResize();

  useEffect(() => {
    if (windowWidth) {
      if ((windowWidth < 768 && windowWidth) || isDashboard) {
        setSmooth(false);
      } else {
        setSmooth(true);
      }
    }
  }, [windowWidth, isDashboard]);

  const lenisRef = useRef();

  useEffect(() => {
    function update(time: number) {
      if (lenisRef.current)
        (lenisRef.current as LenisInstance).raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        smoothWheel: isSmooth,
        direction: 'vertical',
        // lerp: 0.2,
        easing: (t: number) => (t == 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
