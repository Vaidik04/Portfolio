"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { generateAppScreenTexture } from "@/lib/proceduralPhoneScreens";
import { ShockwaveShader } from "./shaders/shockwaveRingMaterial";

export const AssemblingPhoneHero: React.FC = () => {
  const { scrollProgress, activeAppId, setActiveAppId } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);
  const screenMeshRef = useRef<THREE.Mesh>(null);
  const shockwaveMeshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const [shockwaveRadius, setShockwaveRadius] = useState(0);

  // Phone Dimensions
  const width = 2.4;
  const height = 4.9;
  const depth = 0.16;
  const radius = 0.26;

  // Cached screen textures
  const textures = useMemo(() => {
    return {
      girvi: generateAppScreenTexture("girvi"),
      jewelbill: generateAppScreenTexture("jewelbill"),
      advokosh: generateAppScreenTexture("advokosh"),
    };
  }, []);

  // Update screen texture when activeAppId changes
  useEffect(() => {
    if (!screenMeshRef.current) return;
    const tex = textures[activeAppId];
    if (tex && screenMeshRef.current.material instanceof THREE.MeshBasicMaterial) {
      screenMeshRef.current.material.map = tex;
      screenMeshRef.current.material.needsUpdate = true;
    }
  }, [activeAppId, textures]);

  // Satellite tech nodes
  const satellites = useMemo(() => {
    return [
      { name: "Kotlin 2.0", color: "#7C5CFF", radius: 2.8, speed: 0.7, y: 0.6 },
      { name: "Compose M3", color: "#3DDC84", radius: 3.2, speed: -0.5, y: -0.7 },
      { name: "Room SQLite", color: "#22D3EE", radius: 2.6, speed: 0.9, y: 1.1 },
      { name: "SQLCipher", color: "#F5C26B", radius: 3.0, speed: -0.8, y: 0.1 },
    ];
  }, []);

  const satRefs = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Visibility: Hero occupies progress 0.0 to 0.24
    const inHero = scrollProgress < 0.24;
    groupRef.current.visible = inHero;
    if (!inHero) return;

    // Assembling transition factor (0 = wireframe/separated, 1 = solid complete)
    const assembleFactor = THREE.MathUtils.clamp((scrollProgress - 0.04) / 0.14, 0, 1);

    // Responsive offset
    const isMobile = viewport.width < 7.0;
    const targetX = isMobile ? 0 : 1.85;
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.5, delta);

    // Interactive pointer/gyro tilt with spring-like damping
    const pointer = state.pointer;
    const targetRotY = pointer.x * 0.42 + (1.0 - assembleFactor) * 0.8;
    const targetRotX = -pointer.y * 0.35 + (1.0 - assembleFactor) * 0.4;
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);

    // Floating idle oscillation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;

    // Orbiting tech chips
    satellites.forEach((sat, i) => {
      const g = satRefs.current[i];
      if (g) {
        const angle = state.clock.elapsedTime * sat.speed + i * 1.57;
        g.position.x = Math.cos(angle) * sat.radius;
        g.position.z = Math.sin(angle) * sat.radius;
        g.position.y = sat.y + Math.sin(state.clock.elapsedTime * 2.0 + i) * 0.15;
      }
    });
  });

  return (
    <group ref={groupRef} position={[1.85, 0, 0]}>
      {/* 1. Titanium Chassis Shell */}
      <RoundedBox args={[width, height, depth]} radius={radius} smoothness={8}>
        <meshStandardMaterial
          color="#161820"
          metalness={0.92}
          roughness={0.22}
          envMapIntensity={1.4}
        />
      </RoundedBox>

      {/* 2. Inner Chamfered Bezel */}
      <RoundedBox
        args={[width - 0.08, height - 0.08, depth + 0.005]}
        radius={radius * 0.9}
        smoothness={6}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#0A0B10" metalness={0.6} roughness={0.4} />
      </RoundedBox>

      {/* 3. High-DPI Screen Surface */}
      <mesh ref={screenMeshRef} position={[0, 0, depth / 2 + 0.006]}>
        <planeGeometry args={[width - 0.14, height - 0.14]} />
        <meshBasicMaterial map={textures.girvi || undefined} toneMapped={false} />
      </mesh>

      {/* 4. Punch-Hole Front Camera & Sensor */}
      <mesh position={[0, height / 2 - 0.22, depth / 2 + 0.008]}>
        <circleGeometry args={[0.045, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* 5. Edge Brass Kicker Wire */}
      <mesh position={[0, 0, depth / 2 + 0.004]}>
        <ringGeometry args={[width / 2 - 0.04, width / 2 - 0.02, 4]} />
        <meshBasicMaterial color="#3DDC84" transparent opacity={0.3} />
      </mesh>

      {/* 6. Orbiting Tech Satellite Chips */}
      {satellites.map((sat, i) => (
        <group
          key={sat.name}
          ref={(el) => {
            if (el) satRefs.current[i] = el;
          }}
        >
          <mesh>
            <octahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={1.6}
              metalness={0.8}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.24, 0.29, 32]} />
            <meshBasicMaterial color={sat.color} transparent opacity={0.45} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

