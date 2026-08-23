'use client';

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/smol_ame_in_an_upcycled_terrarium_hololiveen.glb');
  const { actions } = useAnimations(scene?.animations || [], group);
  const { size } = useThree();
  const scale = useMemo(() => size.width < 640 ? 1.15 : 1.5, [size.width]);

  React.useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      console.log(`Found ${Object.keys(actions).length} animations:`, Object.keys(actions));
      Object.values(actions).forEach((action) => {
        (action as THREE.AnimationAction)?.play();
      });
    }
  }, [actions]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={group} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

function Loader() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ee5c13" />
    </mesh>
  );
}

function ErrorFallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ee5c13" />
    </mesh>
  );
}

class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

export function ModelViewer() {
  return (
    <Canvas
      camera={{ position: [3, 5, 8], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, 5]} intensity={0.5} />
      <Suspense fallback={<Loader />}>
        <ModelErrorBoundary>
          <Model />
        </ModelErrorBoundary>
      </Suspense>
    </Canvas>
  );
}
