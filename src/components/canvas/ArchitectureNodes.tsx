"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const ArchitectureNodes: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  // 3D MVVM & Keystore Nodes
  const nodes = useMemo(() => {
    return [
      { id: "ui", label: "Compose UI", pos: new THREE.Vector3(-3.5, 1.2, 0), color: "#3DDC84" },
      { id: "vm", label: "ViewModel", pos: new THREE.Vector3(-1.2, 0.4, 0), color: "#7C5CFF" },
      { id: "repo", label: "Repository", pos: new THREE.Vector3(1.2, -0.4, 0), color: "#22D3EE" },
      { id: "room", label: "Room SQLite", pos: new THREE.Vector3(3.5, 0.8, 0), color: "#F59E0B" },
      { id: "keystore", label: "Hardware Keystore", pos: new THREE.Vector3(3.5, -1.4, 0), color: "#EC4899" },
    ];
  }, []);

  // Glowing traveling pulses
  const pulseCount = 18;
  const pulseGeom = useMemo(() => new THREE.SphereGeometry(0.08, 12, 12), []);
  const pulseMat = useMemo(() => new THREE.MeshBasicMaterial({ color: "#22D3EE" }), []);

  const pulses = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during Architecture & Process: scrollProgress ~ 0.70 - 0.90
    const inRange = scrollProgress >= 0.68 && scrollProgress <= 0.92;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Subtle breathing float
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;

    // Animate data pulses along connections (UI -> VM -> Repo -> Room / Keystore)
    pulses.current.forEach((mesh, idx) => {
      if (!mesh) return;
      const t = (state.clock.elapsedTime * 0.8 + idx / pulseCount) % 1;
      // Interpolate along the pipeline
      if (idx < 6) {
        mesh.position.lerpVectors(nodes[0].pos, nodes[1].pos, t);
      } else if (idx < 12) {
        mesh.position.lerpVectors(nodes[1].pos, nodes[2].pos, t);
      } else {
        const dest = idx % 2 === 0 ? nodes[3].pos : nodes[4].pos;
        mesh.position.lerpVectors(nodes[2].pos, dest, t);
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {/* MVVM Component Nodes */}
      {nodes.map((node) => (
        <group key={node.id} position={node.pos.toArray()}>
          <mesh>
            <octahedronGeometry args={[0.55, 1]} />
            <meshStandardMaterial
              color="#090E1A"
              emissive={node.color}
              emissiveIntensity={0.65}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Wireframe Orbit */}
          <mesh>
            <sphereGeometry args={[0.75, 16, 16]} />
            <meshBasicMaterial color={node.color} wireframe transparent opacity={0.2} />
          </mesh>
        </group>
      ))}

      {/* Traveling Data Packets */}
      {Array.from({ length: pulseCount }).map((_, i) => (
        <mesh
          key={i}
          geometry={pulseGeom}
          material={pulseMat}
          ref={(el) => {
            if (el) pulses.current[i] = el;
          }}
        />
      ))}
    </group>
  );
};
