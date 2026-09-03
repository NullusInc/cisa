'use client';

import { useLayoutEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { SketchfabModel } from './SketchfabModel';
import { PerspectiveCamera } from 'three';

const MODEL_SRC = '/models/chloecampus.glb';

function EmbeddedCamera() {
  const camera = useThree((state) => state.camera);
  const { scene: modelScene } = useGLTF(MODEL_SRC);

  useLayoutEffect(() => {
    let embeddedCam: PerspectiveCamera | null = null;
    modelScene.traverse((node) => {
      if (node instanceof PerspectiveCamera) {
        embeddedCam = node;
      }
    });

    if (embeddedCam) {
      camera.position.copy(embeddedCam.position);
      camera.rotation.copy(embeddedCam.rotation);
      if (camera instanceof PerspectiveCamera) {
        Object.assign(camera, {
          fov: embeddedCam.fov,
          near: embeddedCam.near,
          far: embeddedCam.far,
        });
        camera.updateProjectionMatrix();
      }
    } else {
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [camera, modelScene]);

  return null;
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{
        position: [99.481, 14.932, 47.409],
        rotation: [64.472, -0.003836, 91.107],
        fov: 45,
        near: 0.1,
        far: 300
      }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <EmbeddedCamera />
      <hemisphereLight intensity={0.55} color="#fff6ea" groundColor="#9a8b72" />
      <ambientLight intensity={0.28} />
      <directionalLight position={[12, 16, 6]} intensity={2.4} />
      <directionalLight position={[-6, 5, -8]} intensity={0.55} />
      <SketchfabModel /> 
    </Canvas>
  );
}
