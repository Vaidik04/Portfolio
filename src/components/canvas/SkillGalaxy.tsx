"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const SkillGalaxy: React.FC = () => {
  const { scrollProgress, setCursorText } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const list = [
      { name: "Kotlin 2.0+ (K2)", color: "#7C5CFF", size: 0.44, speed: 0.5 },
      { name: "Jetpack Compose M3", color: "#3DDC84", size: 0.48, speed: -0.4 },
      { name: "Android 15 (SDK 35)", color: "#22D3EE", size: 0.42, speed: 0.6 },
      { name: "Room SQLite 2.6+", color: "#38BDF8", size: 0.4, speed: 0.7 },
      { name: "SQLCipher AES-256", color: "#F59E0B", size: 0.46, speed: -0.6 },
      { name: "MediaPipe GPU", color: "#EC4899", size: 0.4, speed: 0.8 },
      { name: "Google Nearby P2P", color: "#10B981", size: 0.42, speed: -0.5 },
      { name: "OpenCV 4.10+", color: "#F43F5E", size: 0.38, speed: 0.75 },
      { name: "WorkManager 2.9+", color: "#06B6D4", size: 0.36, speed: -0.8 },
      { name: "Python 3.12+", color: "#6366F1", size: 0.44, speed: 0.45 },
    ];

    return list.map((item, i) => {
      const phi = Math.acos(-1 + (2 * i) / list.length);
      const theta = Math.sqrt(list.length * Math.PI) * phi;
      const radius = 3.6 + (i % 3) * 0.4;

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

  const meshRefs = useRef<THREE.Group[]>([]);
  const lineRef = useRef<THREE.LineSegments>(null);

  // Dynamic connecting laser network
  const lineGeom = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const maxConnections = 24;
    const positions = new Float32Array(maxConnections * 2 * 3);
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during Tech Stack stage: scrollProgress ~ 0.28 - 0.56
    const inRange = scrollProgress >= 0.28 && scrollProgress <= 0.56;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    const pointer = state.pointer;
    groupRef.current.rotation.y += delta * 0.22;
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      -pointer.y * 0.35,
      3,
      delta
    );

    // Current world positions of all nodes for laser network
    const currentPositions: THREE.Vector3[] = [];

    nodes.forEach((node, idx) => {
      const grp = meshRefs.current[idx];
      if (grp) {
        const time = state.clock.elapsedTime * node.speed + idx * 1.2;
        grp.position.y = node.basePos.y + Math.sin(time) * 0.25;
        grp.position.x = node.basePos.x + Math.cos(time) * 0.2;
        grp.position.z = node.basePos.z + Math.sin(time * 0.8) * 0.15;

        // Gravitational attraction towards cursor
        grp.position.x += pointer.x * 0.3;
        grp.position.y += pointer.y * 0.3;

        currentPositions.push(grp.position.clone());
      }
    });

    // Update connecting laser lines between nearby orbs
    if (lineRef.current && currentPositions.length > 0) {
      const posAttr = lineRef.current.geometry.attributes.position as THREE.BufferAttribute;
      let lineIdx = 0;

      for (let i = 0; i < currentPositions.length; i++) {
        for (let j = i + 1; j < currentPositions.length; j++) {
          if (lineIdx >= 24) break;
          const dist = currentPositions[i].distanceTo(currentPositions[j]);
          if (dist < 4.2) {
            posAttr.setXYZ(lineIdx * 2, currentPositions[i].x, currentPositions[i].y, currentPositions[i].z);
            posAttr.setXYZ(lineIdx * 2 + 1, currentPositions[j].x, currentPositions[j].y, currentPositions[j].z);
            lineIdx++;
          }
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {/* Dynamic Laser Connections */}
      <lineSegments ref={lineRef} geometry={lineGeom}>
        <lineBasicMaterial color="#3DDC84" transparent opacity={0.25} />
      </lineSegments>

      {/* Orbiting Tech Nodes */}
      {nodes.map((node, i) => (
        <group
          key={node.name}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          position={node.basePos.toArray()}
        >
          {/* Central Emissive Core */}
          <mesh
            onPointerOver={() => setCursorText("EXPLORE")}
            onPointerOut={() => setCursorText("")}
          >
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial
              color="#070A12"
              emissive={node.color}
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.85}
            />
          </mesh>

          {/* Halo Glow Ring */}
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[node.size * 1.25, node.size * 1.38, 32]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.35}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* 3D Floating Tech Label */}
          <Html center distanceFactor={14} pointerEvents="none">
            <div className="px-2 py-0.5 rounded-full bg-[#05060A]/85 border border-white/10 backdrop-blur-md text-[9px] font-mono font-bold text-typography-primary whitespace-nowrap shadow-lg select-none pointer-events-none -translate-y-6">
              <span className="w-1.5 h-1.5 rounded-full inline-block mr-1" style={{ backgroundColor: node.color }} />
              <span>{node.name}</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
};
