'use client';

import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { Model as SketchfabModel } from './SketchfabModel';

export function HeroSection() {
  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [3, 5, 8], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, 5]} intensity={0.5} />
          <SketchfabModel rotation={[0, 0.0015, 0]} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute top-4 left-4 z-10 pt-[env(safe-area-inset-top)] pl-[env(safe-area-inset-left)] sm:top-8 sm:left-8">
        <Image
          src="/images/branding/CISA-Logo-Orange.svg"
          alt="CISA Logo"
          width={224}
          height={224}
          sizes="(max-width: 640px) 80px, (max-width: 768px) 160px, 224px"
          className="h-20 w-20 sm:h-40 sm:w-40 md:h-56 md:w-56 object-contain"
          priority
        />
      </div>

      <div className="absolute inset-x-4 bottom-4 z-10 pb-[env(safe-area-inset-bottom)] sm:inset-x-8 sm:bottom-12 lg:right-24">
        <h1
          className="font-sans text-right text-[clamp(1.75rem,0.7rem+5.4vw,6rem)] font-bold tracking-tight leading-[1.1]"
          style={{ color: '#19502A' }}
        >
          City Innovation
          <br />
          Students’ Association
        </h1>
      </div>
    </section>
  );
}
