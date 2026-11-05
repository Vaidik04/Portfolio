"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const PointerLight: React.FC = () => {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    if (!lightRef.current) return;
    const pointer = state.pointer;
    lightRef.current.position.x = THREE.MathUtils.damp(
      lightRef.current.position.x,
      pointer.x * 6.0,
      4,
      delta
    );
    lightRef.current.position.y = THREE.MathUtils.damp(
      lightRef.current.position.y,
      pointer.y * 4.5,
      4,
      delta
    );
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 4.5]}
      intensity={1.2}
      color="#3DDC84"
      distance={14}
      decay={2}
    />
  );
};

