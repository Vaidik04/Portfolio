"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { MARQUEE_TECH } from "@/data/skills";

export const SkillGalaxy: React.FC = () => {
  const { scrollProgress, setCursorText } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  // Generate constellation nodes for core skills
  const nodes = useMemo(() => {
    const list = [
      { name: "Kotlin 2.0+ (K2)", color: "#7C5CFF", size: 0.46, speed: 0.6 },
      { name: "Jetpack Compose M3", color: "#3DDC84", size: 0.5, speed: -0.5 },
      { name: "Android 15 (SDK 35)", color: "#22D3EE", size: 0.45, speed: 0.7 },
      { name: "Room SQLite 2.6+", color: "#38BDF8", size: 0.42, speed: 0.8 },
      { name: "SQLCipher 4.5+ AES", color: "#F59E0B", size: 0.48, speed: -0.7 },
      { name: "MediaPipe GPU 0.10+", color: "#EC4899", size: 0.42, speed: 0.9 },
      { name: "OpenCV 4.10+", color: "#F43F5E", size: 0.4, speed: -0.85 },
      { name: "Google Nearby P2P", color: "#10B981", size: 0.42, speed: -0.6 },
      { name: "WorkManager 2.9+", color: "#06B6D4", size: 0.36, speed: 1.0 },
      { name: "Python 3.12+", color: "#6366F1", size: 0.46, speed: 0.5 },
      { name: "Next.js 14.2+", color: "#E2E8F0", size: 0.38, speed: -0.75 },
      { name: "FastAPI 0.115+", color: "#14B8A6", size: 0.38, speed: 0.65 },
    ];

    return list.map((item, i) => {
      const phi = Math.acos(-1 + (2 * i) / list.length);
      const theta = Math.sqrt(list.length * Math.PI) * phi;
      const radius = 3.6 + (i % 3) * 0.5;

      return {
        ...item,
        basePos: new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ),
      };
    });
  }, []);

  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during Tech Stack & Skills: scrollProgress ~ 0.35 - 0.58
    const inRange = scrollProgress >= 0.33 && scrollProgress <= 0.6;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Galaxy slow rotation + gravitational pull towards cursor
    const pointer = state.pointer;
    groupRef.current.rotation.y += delta * 0.3;
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -pointer.y * 0.4,
      3,
      delta
    );

    // Individual node breathing
    nodes.forEach((node, idx) => {
      const mesh = meshRefs.current[idx];
      if (mesh) {
        const time = state.clock.elapsedTime * node.speed + idx;
        mesh.position.y = node.basePos.y + Math.sin(time) * 0.25;
        mesh.position.x = node.basePos.x + Math.cos(time) * 0.2;
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {nodes.map((node, i) => (
        <group key={node.name}>
          <mesh
            ref={(el) => {
              if (el) meshRefs.current[i] = el;
            }}
            position={node.basePos.toArray()}
            onPointerOver={() => setCursorText("EXPLORE")}
            onPointerOut={() => setCursorText("")}
          >
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.65}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Glowing Halo Ring */}
          <mesh position={node.basePos.toArray()}>
            <ringGeometry args={[node.size * 1.25, node.size * 1.35, 32]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}

      {/* Galaxy Core Pulsing Orb */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color="#3DDC84" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  );
};

