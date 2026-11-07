"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const WorldBeaconArtifact: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Visibility: World Beacon lives in scrollProgress > 0.94
    const inRange = scrollProgress > 0.93;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    groupRef.current.rotation.y += delta * 0.25;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {/* Central Sovereign Core */}
      <mesh>
        <icosahedronGeometry args={[2.4, 3]} />
        <meshStandardMaterial
          color="#121824"
          emissive="#3DDC84"
          emissiveIntensity={0.25}
          wireframe
        />
      </mesh>

      {/* Outer Atmospheric Pulse Halo */}
      <mesh>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial color="#3DDC84" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>

      {/* Orbiting Equatorial Rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[3.2, 3.25, 64]} />
        <meshBasicMaterial color="#7C5CFF" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <ringGeometry args={[3.6, 3.64, 64]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
