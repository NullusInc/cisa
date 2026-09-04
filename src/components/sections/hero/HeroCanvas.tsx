'use client';

import { useLayoutEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { SketchfabModel } from './SketchfabModel';
import { PerspectiveCamera, OrthographicCamera } from 'three';

const MODEL_SRC = '/models/chloecampus_cameraselected.glb';

function EmbeddedCamera() {
  const camera = useThree((state) => state.camera);
  const { scene: modelScene } = useGLTF(MODEL_SRC);

  useLayoutEffect(() => {
    if (!modelScene) return;

    let embeddedCam: PerspectiveCamera | OrthographicCamera | null = null;
    let cameraType = '';

    modelScene.traverse((node) => {
      if (node instanceof PerspectiveCamera && !embeddedCam) {
        embeddedCam = node;
        cameraType = 'Perspective';
      } else if (node instanceof OrthographicCamera && !embeddedCam) {
        embeddedCam = node;
        cameraType = 'Orthographic';
      }
    });

    if (embeddedCam) {
      console.log('✓ Embedded camera found:', cameraType);
      console.log('  Position:', [embeddedCam.position.x, embeddedCam.position.y, embeddedCam.position.z]);

      camera.position.copy(embeddedCam.position);
      camera.quaternion.copy(embeddedCam.quaternion);
      camera.updateProjectionMatrix();
      console.log('✓ Applied embedded camera position and rotation');
    } else {
      console.warn('✗ No embedded camera found in model');
      camera.position.set(99.48, 47.41, -14.93);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [camera, modelScene]);

  return null;
}

export function HeroCanvas() {
  return (
    <Canvas
      orthographic
      camera={{
        position: [99.48, 47.41, -14.93],
        left: -31.207,
        right: 31.207,
        top: 17.554,
        bottom: -17.554,
        near: 0.1,
        far: 221.2,
        zoom: 1,
      }}
      style={{ width: '100%', height: '100%', display: 'block' }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: false }}
      dpr={[1, 1.5]}
      resize={{ polyfill: ResizeObserver }}
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
