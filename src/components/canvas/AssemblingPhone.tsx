"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const AssemblingPhone: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  // Orbiting satellite chips
  const satellites = useMemo(() => {
    return [
      { label: "Kotlin", radius: 2.8, speed: 0.8, y: 0.5, color: "#7C5CFF" },
      { label: "Compose", radius: 3.3, speed: -0.6, y: -0.8, color: "#3DDC84" },
      { label: "Room", radius: 2.5, speed: 1.1, y: 1.2, color: "#22D3EE" },
      { label: "SQLCipher", radius: 3.1, speed: -0.9, y: 0.2, color: "#F59E0B" },
    ];
  }, []);
  const satRefs = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Visibility: Hero is between 0.0 and 0.22 scroll progress
    const heroFactor = THREE.MathUtils.clamp((0.22 - scrollProgress) / 0.12, 0, 1);
    groupRef.current.visible = heroFactor > 0.01;
    if (!groupRef.current.visible) return;

    // Responsive positioning & scaling: on narrow mobile screens center, on desktop offset right
    const isMobile = state.viewport.width < 7;
    const targetX = isMobile ? 0 : 2.2;
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 4, delta);
    const targetScale = isMobile ? 0.72 : 1.0;
    groupRef.current.scale.set(targetScale, targetScale, targetScale);

    // Idle floating and pointer tilt
    const pointer = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      pointer.x * 0.45 + (scrollProgress * 2.2),
      4,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -pointer.y * 0.35 + (scrollProgress * 1.2),
      4,
      delta
    );
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.12;

    // Orbit satellites
    satellites.forEach((sat, i) => {
      const satGroup = satRefs.current[i];
      if (satGroup) {
        const angle = state.clock.elapsedTime * sat.speed + i * 1.57;
        satGroup.position.x = Math.cos(angle) * sat.radius;
        satGroup.position.z = Math.sin(angle) * sat.radius;
        satGroup.position.y = sat.y + Math.sin(state.clock.elapsedTime * 2 + i) * 0.15;
      }
    });
  });

  return (
    <group ref={groupRef} position={[2.2, 0, 0]}>
      {/* Ambient Orbiting Satellite Tech Chips (Kotlin, Compose, Room, SQLCipher) */}
      {satellites.map((sat, i) => (
        <group
          key={sat.label}
          ref={(el) => {
            if (el) satRefs.current[i] = el;
          }}
        >
          <mesh>
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial color={sat.color} emissive={sat.color} emissiveIntensity={1.2} />
          </mesh>
          {/* Glowing Orbit Halo */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.3, 0.36, 32]} />
            <meshBasicMaterial color={sat.color} transparent opacity={0.45} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  );
};
