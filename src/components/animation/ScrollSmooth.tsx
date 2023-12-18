'use client';

/* eslint-disable */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactNode, useLayoutEffect, useRef } from 'react';

type ScrollSmooth = {
  children: ReactNode;
  className?: string;
};

const ScrollSmooth = ({ children, className = '' }: ScrollSmooth) => {
  const ref = useRef(null);
  const smoothScroll = (
    contentClass: string,
    viewport: string,
    smoothness: number,
  ) => {
    const content = gsap.utils.toArray(contentClass)[0] as HTMLElement;
    smoothness = smoothness || 1;

    gsap.set(viewport || (content.parentNode as HTMLElement), {
      overflow: 'hidden',
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    });

    gsap.set(content, { overflow: 'visible', width: '100%' });

    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, 'y', 'px'),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => {
        if (content instanceof HTMLElement) content.style.overflow = 'visible';
      },
      killScrub = (trigger: ScrollTrigger) => {
        if (trigger.animation) {
          const scrub = trigger.getTween
            ? trigger.getTween()
            : gsap.getTweensOf(trigger.animation)[0];
          scrub && scrub.pause();
          trigger.animation.progress(trigger.progress);
        }
      },
      height: number,
      isProxyScrolling: boolean;

    function refreshHeight(): number {
      height = content?.clientHeight;
      if (content instanceof HTMLElement) content.style.overflow = 'visible';
      document.body.style.height = height + 'px';
      return height - document.documentElement.clientHeight;
    }

    ScrollTrigger.addEventListener('refresh', () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
    });

    ScrollTrigger.defaults({ scroller: content });

    (ScrollTrigger.prototype as any).update = (p: number) => p;

    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value?: number) {
        if (arguments.length) {
          isProxyScrolling = true;
          setProp(-value!);
          setScroll(value!);
          return;
        }
        return -getProp('y');
      },
      scrollHeight: () => document.body.scrollHeight,
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    return ScrollTrigger.create({
      animation: gsap.fromTo(
        content,
        { y: 0 },
        {
          y: () => document.documentElement.clientHeight - height!,
          ease: 'none',
          onUpdate: ScrollTrigger.update,
        },
      ),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: refreshHeight,
      refreshPriority: -999,
      scrub: smoothness,
      onUpdate: (self: ScrollTrigger) => {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub,
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoothScroll('#content', '#viewport', 1);
    });

    return () => ctx.revert();
  }, [ref]);

  return (
    <div ref={ref} className={className}>
      <div id='viewport'>
        <div id='content'>{children}</div>
      </div>
    </div>
  );
};

export default ScrollSmooth;
/* eslint-disable */
