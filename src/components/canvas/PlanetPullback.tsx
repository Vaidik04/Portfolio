"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const PlanetPullback: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Active during final Contact & Deploy: scrollProgress > 0.86
    const inRange = scrollProgress >= 0.84;
    meshRef.current.visible = inRange;
    if (!inRange) return;

    // Rotation & slow pulsing
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.rotation.x += delta * 0.15;

    // Scale up as user reaches final deployment
    const scale = THREE.MathUtils.lerp(1.5, 4.2, (scrollProgress - 0.84) / 0.16);
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -4]}>
      <icosahedronGeometry args={[1.5, 3]} />
      <meshStandardMaterial
        color="#080C16"
        emissive="#3DDC84"
        emissiveIntensity={0.35}
        wireframe={true}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
};
