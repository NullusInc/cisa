'use client';

import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const LOGO_SRC = '/images/branding/CISA-Logo-Orange.svg';

/** Extra wait after CSS animations so the last frame can settle before the next phase. */
const PHASE_BUFFER_MS = 100;

const GROW_DURATION_MS = 900;
const FILL_DURATION_MS = 1400;
const HOLD_DELAY_MS = 120;
const DOCK_DURATION_MS = 900;
const DOCK_FALLBACK_MS = DOCK_DURATION_MS + PHASE_BUFFER_MS * 2;
const DOCK_EASING = 'cubic-bezier(0.65, 0, 0.35, 1)';
const OVERLAY_FADE_MS = 700;

type Phase = 'prepare' | 'grow' | 'fill' | 'hold' | 'dock' | 'settled';

export function CisaLogoIntro({ onComplete }: { onComplete: () => void }) {
  const logoRef = useRef<HTMLDivElement>(null);
  const fromRectRef = useRef<DOMRect | null>(null);
  const completedRef = useRef(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [phase, setPhase] = useState<Phase>(prefersReducedMotion ? 'settled' : 'prepare');

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setPhase('settled');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (prefersReducedMotion) {
      finish();
      return;
    }
    const start = window.requestAnimationFrame(() => setPhase('grow'));
    return () => window.cancelAnimationFrame(start);
  }, [finish, prefersReducedMotion]);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const previous = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
    };

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    if (phase !== 'settled') {
      return () => {
        html.style.overflow = previous.htmlOverflow;
        body.style.overflow = previous.bodyOverflow;
      };
    }

    const timer = window.setTimeout(() => {
      html.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
    }, OVERLAY_FADE_MS);

    return () => {
      window.clearTimeout(timer);
      html.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
    };
  }, [phase]);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const previous = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
    };

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    if (phase !== 'settled') {
      return () => {
        html.style.overflow = previous.htmlOverflow;
        body.style.overflow = previous.bodyOverflow;
      };
    }

    const timer = window.setTimeout(() => {
      html.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
    }, OVERLAY_FADE_MS);

    return () => {
      window.clearTimeout(timer);
      html.style.overflow = previous.htmlOverflow;
      body.style.overflow = previous.bodyOverflow;
    };
  }, [phase]);

  useEffect(() => {
    if (phase === 'grow') {
      const timer = window.setTimeout(
        () => setPhase('fill'),
        GROW_DURATION_MS + PHASE_BUFFER_MS
      );
      return () => window.clearTimeout(timer);
    }

    if (phase === 'fill') {
      const timer = window.setTimeout(
        () => setPhase('hold'),
        FILL_DURATION_MS + PHASE_BUFFER_MS
      );
      return () => window.clearTimeout(timer);
    }

    if (phase === 'hold') {
      const timer = window.setTimeout(() => {
        fromRectRef.current = logoRef.current?.getBoundingClientRect() ?? null;
        setPhase('dock');
      }, HOLD_DELAY_MS);
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
        logo.style.transition = `transform ${DOCK_DURATION_MS}ms ${DOCK_EASING}`;
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
    const fallback = window.setTimeout(finish, DOCK_FALLBACK_MS);

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(innerFrame);
      logo.removeEventListener('transitionend', onEnd);
      window.clearTimeout(fallback);
    };
  }, [phase, finish]);

  const isCentered =
    phase === 'prepare' ||
    phase === 'grow' ||
    phase === 'fill' ||
    phase === 'hold';

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-background transition-opacity duration-700 ${
          phase === 'settled' ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      />

      <div
        className={
          isCentered
            ? 'fixed inset-0 z-50 flex items-center justify-center'
            : 'absolute z-50 flex justify-center top-[calc(2rem+var(--page-frame))] right-0 left-0 sm:right-auto sm:left-[calc(1.5rem+var(--page-frame))] sm:justify-start'
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
              phase === 'prepare'
                ? 'logo-grow-inner logo-grow-paused'
                : phase === 'grow'
                  ? 'logo-grow-inner'
                  : ''
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
                phase === 'fill' ||
                phase === 'hold' ||
                phase === 'dock' ||
                phase === 'settled'
                  ? 'is-filling'
                  : ''
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
