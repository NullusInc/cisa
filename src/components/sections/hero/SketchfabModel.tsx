'use client';

import { useEffect, type JSX } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { LoopRepeat } from 'three';

const MODEL_SRC = '/models/chloecampus.glb';

export function SketchfabModel(props: JSX.IntrinsicElements['group']) {
  const { scene, animations } = useGLTF(MODEL_SRC);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const playing = Object.values(actions).filter(
      (action): action is NonNullable<typeof action> => action != null
    );
    for (const action of playing) {
      action.reset().setLoop(LoopRepeat, Infinity).play();
    }
    return () => {
      for (const action of playing) {
        action.stop();
      }
    };
  }, [actions]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_SRC);
