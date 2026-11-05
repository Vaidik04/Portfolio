"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const ArchitectureNodes: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => [
    { id: "ui", label: "Compose M3 UI", pos: new THREE.Vector3(-3.5, 1.2, 0), color: "#3DDC84" },
    { id: "vm", label: "StateFlow ViewModel", pos: new THREE.Vector3(-1.2, 0.4, 0), color: "#7C5CFF" },
    { id: "repo", label: "Clean Repository", pos: new THREE.Vector3(1.2, -0.4, 0), color: "#22D3EE" },
    { id: "room", label: "Room SQLite 2.6+", pos: new THREE.Vector3(3.5, 0.8, 0), color: "#F59E0B" },
    { id: "keystore", label: "Keystore AES-256", pos: new THREE.Vector3(3.5, -1.4, 0), color: "#EC4899" },
  ], []);

  const pulseCount = 18;
  const pulseGeom = useMemo(() => new THREE.SphereGeometry(0.08, 12, 12), []);
  const pulseMat = useMemo(() => new THREE.MeshBasicMaterial({ color: "#22D3EE" }), []);

  const pulses = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const inRange = scrollProgress >= 0.68 && scrollProgress <= 0.92;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.15;

    pulses.current.forEach((mesh, idx) => {
      if (!mesh) return;
      const t = (state.clock.elapsedTime * 0.8 + idx / pulseCount) % 1;
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

          <mesh>
            <sphereGeometry args={[0.75, 16, 16]} />
            <meshBasicMaterial color={node.color} wireframe transparent opacity={0.2} />
          </mesh>
        </group>
      ))}

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

