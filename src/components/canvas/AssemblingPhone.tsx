"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const AssemblingPhone: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  // Define components of the 3D phone that explode outwards and snap together
  const parts = useMemo(() => {
    return [
      // Screen Glass
      { id: "screen", startPos: new THREE.Vector3(0, 0, 3.5), targetPos: new THREE.Vector3(0, 0, 0.12), size: [2.2, 4.4, 0.04], color: "#060A14", emissive: "#3DDC84", emissiveIntensity: 0.3 },
      // Aluminum Chassis / Frame
      { id: "frame", startPos: new THREE.Vector3(0, 4.5, 0), targetPos: new THREE.Vector3(0, 0, 0), size: [2.35, 4.55, 0.2], color: "#0F1424", emissive: "#7C5CFF", emissiveIntensity: 0.2 },
      // Back Glass Plate
      { id: "back", startPos: new THREE.Vector3(0, 0, -3.5), targetPos: new THREE.Vector3(0, 0, -0.11), size: [2.28, 4.48, 0.02], color: "#080C18", emissive: "#22D3EE", emissiveIntensity: 0.15 },
      // Camera Island
      { id: "cameraBump", startPos: new THREE.Vector3(-2.5, 2.5, 0), targetPos: new THREE.Vector3(-0.65, 1.45, -0.15), size: [0.85, 1.2, 0.08], color: "#05070E", emissive: "#3DDC84", emissiveIntensity: 0.4 },
      // Power Button
      { id: "powerBtn", startPos: new THREE.Vector3(2.5, 0.5, 0), targetPos: new THREE.Vector3(1.18, 0.5, 0), size: [0.06, 0.45, 0.06], color: "#3DDC84", emissive: "#3DDC84", emissiveIntensity: 0.9 },
      // Volume Rocker
      { id: "volumeBtn", startPos: new THREE.Vector3(-2.5, 0.8, 0), targetPos: new THREE.Vector3(-1.18, 0.8, 0), size: [0.06, 0.85, 0.06], color: "#7C5CFF", emissive: "#7C5CFF", emissiveIntensity: 0.9 },
    ];
  }, []);

  const partRefs = useRef<THREE.Mesh[]>([]);

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

    // Assembly interpolation: progress 0.0 (assembled) -> explodes as user scrolls down towards 0.2
    const explodeT = THREE.MathUtils.clamp(scrollProgress * 5.5, 0, 1);
    const easeExplode = 1 - Math.pow(1 - explodeT, 3); // Cubic ease out

    parts.forEach((part, idx) => {
      const mesh = partRefs.current[idx];
      if (mesh) {
        mesh.position.lerpVectors(part.targetPos, part.startPos, easeExplode);
      }
    });

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

      {/* Subtle Ambient Depth Ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]} position={[0, 0, -0.5]}>
        <ringGeometry args={[2.6, 2.65, 64]} />
        <meshBasicMaterial color="#3DDC84" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
