'use client';

import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { SketchfabModel } from './SketchfabModel';

export function HeroSection() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <div className="absolute inset-0">
        <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [3, 5, 8], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, 5]} intensity={0.5} />
          <SketchfabModel />
        </Canvas>
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

      <div className="absolute inset-x-4 top-2/3 z-10 flex justify-center sm:inset-x-8 sm:bottom-6 sm:top-auto sm:justify-end sm:pr-0 lg:right-12">
        <h1
          className="font-sans text-center sm:text-right text-[clamp(1.75rem,0.7rem+5.4vw,6rem)] font-bold tracking-tight leading-[1.1] text-primary"
        >
          City Innovation
          <br />
          Students’ Association
        </h1>
      </div>
    </section>
  );
}
