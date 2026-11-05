"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const PlanetPullback: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during final Contact & Deploy: scrollProgress >= 0.82
    const inRange = scrollProgress >= 0.82;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Core rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.35;
      coreRef.current.rotation.x += delta * 0.15;
    }

    // Planetary rings counter-rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.3;
      ring2Ref.current.rotation.x += delta * 0.1;
    }

    // Scale up as user reaches final deployment
    const localT = THREE.MathUtils.clamp((scrollProgress - 0.82) / 0.18, 0, 1);
    const scale = THREE.MathUtils.lerp(1.6, 3.8, localT);
    groupRef.current.scale.set(scale, scale, scale);
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, 0, -4]} visible={false}>
      {/* Central Cyber Planet Sphere */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.4, 3]} />
        <meshStandardMaterial
          color="#060A14"
          emissive="#3DDC84"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Internal Glowing Energy Core */}
      <mesh>
        <sphereGeometry args={[0.7, 24, 24]} />
        <meshStandardMaterial
          color="#7C5CFF"
          emissive="#7C5CFF"
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Orbital Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[2.0, 2.12, 64]} />
        <meshBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.45}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Outer Orbital Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <ringGeometry args={[2.3, 2.38, 64]} />
        <meshBasicMaterial
          color="#7C5CFF"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};
