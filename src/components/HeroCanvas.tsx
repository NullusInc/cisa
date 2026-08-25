'use client';

import { Canvas } from '@react-three/fiber';
import { SketchfabModel } from './SketchfabModel';

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [3, 5, 8], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, 5]} intensity={0.5} />
      <SketchfabModel />
    </Canvas>
  );
}
