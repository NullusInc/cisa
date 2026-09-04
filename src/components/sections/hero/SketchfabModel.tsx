'use client';

import { useEffect, type JSX } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { LoopRepeat } from 'three';

const MODEL_SRC = '/models/chloecampus_cameraselected.glb';

export function SketchfabModel(props: JSX.IntrinsicElements['group']) {
  const { scene, animations } = useGLTF(MODEL_SRC);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const playing = Object.values(actions).filter(
      (action): action is NonNullable<typeof action> => action != null
    );

    console.log('📽️ Animations found:', animations.length);
    console.log('🎬 Animation actions available:', Object.keys(actions).length);

    if (playing.length === 0) {
      console.warn('⚠️ No animations to play!');
      return;
    }

    console.log('▶️ Playing', playing.length, 'animations...');

    for (const action of playing) {
      action.reset().setLoop(LoopRepeat, Infinity).play();
      console.log('  ✓ Playing:', action.getClip().name);
    }

    return () => {
      for (const action of playing) {
        action.stop();
      }
    };
  }, [actions, animations]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_SRC);
