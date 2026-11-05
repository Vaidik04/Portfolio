"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const CyberGridFloor: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state, delta) => {
    if (!gridRef.current) return;

    // Active across most sections, soft fade near hero
    const alpha = THREE.MathUtils.clamp(scrollProgress * 3.0, 0, 0.45);
    (gridRef.current.material as THREE.Material).opacity = alpha;

    // Animate forward travel on Z
    gridRef.current.position.z = (state.clock.elapsedTime * 1.5 + scrollProgress * 15) % 2;
  });

  return (
    <group position={[0, -4.2, -10]}>
      <gridHelper
        ref={gridRef}
        args={[80, 80, "#3DDC84", "#1E293B"]}
        rotation={[0, 0, 0]}
      >
        <meshBasicMaterial
          attach="material"
          color="#3DDC84"
          wireframe
          transparent
          opacity={0.25}
          depthWrite={false}
        />
      </gridHelper>
    </group>
  );
};
