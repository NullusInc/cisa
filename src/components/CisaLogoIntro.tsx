'use client';

import Image from 'next/image';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const LOGO_SRC = '/images/branding/CISA-Logo-Orange.svg';

type Phase = 'prepare' | 'grow' | 'fill' | 'hold' | 'dock' | 'settled';

export function CisaLogoIntro({ onComplete }: { onComplete: () => void }) {
  const logoRef = useRef<HTMLDivElement>(null);
  const fromRectRef = useRef<DOMRect | null>(null);
  const completedRef = useRef(false);
  const [phase, setPhase] = useState<Phase>('prepare');

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setPhase('settled');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      const idle = window.requestAnimationFrame(() => finish());
      return () => window.cancelAnimationFrame(idle);
    }
    const start = window.requestAnimationFrame(() => setPhase('grow'));
    return () => window.cancelAnimationFrame(start);
  }, [finish]);

  useEffect(() => {
    if (phase === 'grow') {
      const timer = window.setTimeout(() => setPhase('fill'), 1500);
      return () => window.clearTimeout(timer);
    }

    if (phase === 'fill') {
      const timer = window.setTimeout(() => setPhase('hold'), 2300);
      return () => window.clearTimeout(timer);
    }

    if (phase === 'hold') {
      const timer = window.setTimeout(() => {
        fromRectRef.current = logoRef.current?.getBoundingClientRect() ?? null;
        setPhase('dock');
      }, 180);
      return () => window.clearTimeout(timer);
    }
  }, [phase]);

  useLayoutEffect(() => {
    if (phase !== 'dock') return;

    const logo = logoRef.current;
    const from = fromRectRef.current;
    if (!logo || !from) {
      finish();
      return;
    }

    const to = logo.getBoundingClientRect();
    const scale = from.width / Math.max(to.width, 1);
    logo.style.transformOrigin = 'top left';
    logo.style.transform = `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${scale})`;

    let innerFrame = 0;
    const frame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => {
        logo.style.transition = 'transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)';
        logo.style.transform = 'none';
      });
    });

    const onEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'transform') return;
      logo.style.transition = '';
      logo.style.transform = '';
      logo.style.transformOrigin = '';
      finish();
    };

    logo.addEventListener('transitionend', onEnd);
    const fallback = window.setTimeout(finish, 1600);

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(innerFrame);
      logo.removeEventListener('transitionend', onEnd);
      window.clearTimeout(fallback);
    };
  }, [phase, finish]);

  const isCentered = phase === 'prepare' || phase === 'grow' || phase === 'fill' || phase === 'hold';

  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-background transition-opacity duration-1000 ${
          phase === 'settled' ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      />

      <div
        className={
          isCentered
            ? 'fixed inset-0 z-30 flex items-center justify-center'
            : 'fixed z-30 flex justify-center top-[calc(2rem+var(--page-frame))] right-0 left-0 sm:right-auto sm:left-[calc(1.5rem+var(--page-frame))] sm:justify-start'
        }
      >
        <div
          ref={logoRef}
          className={
            isCentered
              ? 'h-[min(55vmin,20rem)] w-[min(55vmin,20rem)]'
              : 'h-32 w-32 sm:h-36 sm:w-36 md:h-56 md:w-56'
          }
        >
          <div
            className={`relative h-full w-full ${
              phase === 'prepare' ? 'logo-grow-inner logo-grow-paused' : phase === 'grow' ? 'logo-grow-inner' : ''
            }`}
          >
            <Image
              src={LOGO_SRC}
              alt=""
              width={224}
              height={224}
              className="h-full w-full object-contain opacity-40"
              priority
              aria-hidden
            />
            <div
              className={`logo-fill-layer absolute inset-0 ${
                phase === 'fill' || phase === 'hold' || phase === 'dock' || phase === 'settled' ? 'is-filling' : ''
              }`}
            >
              <Image
                src={LOGO_SRC}
                alt={phase === 'settled' ? 'CISA Logo' : ''}
                width={224}
                height={224}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
