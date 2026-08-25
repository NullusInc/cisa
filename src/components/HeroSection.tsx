'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const HeroCanvas = dynamic(
  () => import('./HeroCanvas').then((mod) => ({ default: mod.HeroCanvas })),
  { ssr: false },
);

export function HeroSection() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-x-0 top-8 z-10 flex justify-center sm:inset-x-auto sm:left-6 sm:top-8">
        <Image
          src="/images/branding/CISA-Logo-Orange.svg"
          alt="CISA Logo"
          width={196}
          height={196}
          sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 224px"
          className="h-32 w-32 sm:h-36 sm:w-36 md:h-56 md:w-56 object-contain"
          priority
        />
      </div>

      <div className="absolute inset-x-4 top-2/3 z-10 sm:inset-x-8 sm:bottom-6 sm:top-auto lg:right-12">
        <h1 className="font-sans w-full text-right text-[clamp(1.75rem,0.7rem+5.4vw,6rem)] font-bold tracking-tight leading-[0.9] text-primary">
          City Innovation
          <br />
          Students’ Association
        </h1>
      </div>
    </section>
  );
}
