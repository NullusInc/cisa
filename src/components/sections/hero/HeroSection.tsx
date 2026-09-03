'use client';

import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { CisaLogoIntro } from '@/components/ui/CisaLogoIntro';

const HeroCanvas = dynamic(
  () =>
    import('@/components/sections/hero/HeroCanvas').then((mod) => ({
      default: mod.HeroCanvas,
    })),
  { ssr: false }
);

export function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  const onIntroComplete = useCallback(() => setHeroVisible(true), []);

  return (
    <section
      className="relative w-full h-dvh"
      aria-busy={!heroVisible}
    >
      <div
        className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-out ${
          heroVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HeroCanvas />
        <div className="absolute left-4 right-6 top-2/3 z-10 sm:left-8 sm:right-8 sm:bottom-6 sm:top-auto lg:right-18">
          <h1 className="font-sans w-full text-right text-[clamp(1.75rem,0.7rem+5.4vw,6rem)] font-bold leading-[0.9] text-primary mb-8 sm:mb-12">
            City Innovation
            <br />
            Students’ Association
          </h1>
        </div>
      </div>

      <CisaLogoIntro onComplete={onIntroComplete} />
    </section>
  );
}
