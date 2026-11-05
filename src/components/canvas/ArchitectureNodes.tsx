"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

interface ArchNode {
  id: string;
  label: string;
  sub: string;
  pos: THREE.Vector3;
  color: string;
}

export const ArchitectureNodes: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  const nodes: ArchNode[] = useMemo(
    () => [
      { id: "ui", label: "Compose M3 UI", sub: "Declarative Single-Activity", pos: new THREE.Vector3(-3.4, 1.4, 0), color: "#3DDC84" },
      { id: "vm", label: "StateFlow ViewModel", sub: "MVI Unidirectional State", pos: new THREE.Vector3(-1.1, 0.4, 0), color: "#7C5CFF" },
      { id: "repo", label: "Repository Pattern", sub: "Offline-First Coordinator", pos: new THREE.Vector3(1.1, -0.4, 0), color: "#22D3EE" },
      { id: "room", label: "Room SQLite 2.6+", sub: "Encrypted Sandboxed DB", pos: new THREE.Vector3(3.4, 1.1, 0), color: "#F59E0B" },
      { id: "keystore", label: "Android Keystore", sub: "Hardware MasterKey AES-GCM", pos: new THREE.Vector3(3.4, -1.6, 0), color: "#EC4899" },
    ],
    []
  );

  // Construct connecting curve pipelines
  const pipelines = useMemo(() => {
    return [
      { from: nodes[0].pos, to: nodes[1].pos, color: "#3DDC84" },
      { from: nodes[1].pos, to: nodes[2].pos, color: "#7C5CFF" },
      { from: nodes[2].pos, to: nodes[3].pos, color: "#F59E0B" },
      { from: nodes[2].pos, to: nodes[4].pos, color: "#EC4899" },
    ].map((pipe) => {
      const mid = new THREE.Vector3()
        .addVectors(pipe.from, pipe.to)
        .multiplyScalar(0.5);
      // Slight arc
      mid.z += 0.25;
      const curve = new THREE.CatmullRomCurve3([pipe.from, mid, pipe.to]);
      return { curve, color: pipe.color };
    });
  }, [nodes]);

  const pulseCount = 16;
  const pulseGeom = useMemo(() => new THREE.SphereGeometry(0.09, 12, 12), []);
  const pulseMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#22D3EE" }),
    []
  );

  const pulses = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active when user is in the Architecture / Process section (0.50 - 0.85)
    const inRange = scrollProgress >= 0.50 && scrollProgress <= 0.85;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Smooth entrance / exit scale
    const centerT = (scrollProgress - 0.50) / 0.35;
    const fade = Math.sin(centerT * Math.PI);
    const targetScale = THREE.MathUtils.clamp(fade * 1.05, 0.01, 1.0);
    groupRef.current.scale.set(targetScale, targetScale, targetScale);

    // Subtle breathing floating motion
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.12;

    // Animate data pulses along the 4 pipelines
    pulses.current.forEach((mesh, idx) => {
      if (!mesh) return;
      const pipeIndex = idx % pipelines.length;
      const pipe = pipelines[pipeIndex];
      const speed = 0.55;
      const offset = Math.floor(idx / pipelines.length) * 0.25;
      const t = (state.clock.elapsedTime * speed + offset) % 1;
      const point = pipe.curve.getPoint(t);
      mesh.position.copy(point);
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -1.5]}>
      {/* 3D Pipeline Connection Tubes */}
      {pipelines.map((pipe, i) => (
        <mesh key={i}>
          <tubeGeometry args={[pipe.curve, 32, 0.035, 8, false]} />
          <meshBasicMaterial
            color={pipe.color}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Architecture Core Nodes */}
      {nodes.map((node) => (
        <group key={node.id} position={node.pos.toArray()}>
          {/* Central Polyhedron Core */}
          <mesh>
            <octahedronGeometry args={[0.48, 1]} />
            <meshStandardMaterial
              color="#070A12"
              emissive={node.color}
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.85}
            />
          </mesh>

          {/* Glowing Ambient Outer Halo */}
          <mesh>
            <sphereGeometry args={[0.65, 16, 16]} />
            <meshBasicMaterial
              color={node.color}
              wireframe
              transparent
              opacity={0.22}
            />
          </mesh>

          {/* Rotating Equatorial Ring */}
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <ringGeometry args={[0.7, 0.76, 24]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.35}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* 3D Space Label Pill */}
          <Html center distanceFactor={14} pointerEvents="none">
            <div className="flex flex-col items-center pointer-events-none select-none -translate-y-8">
              <div className="px-2.5 py-1 rounded-full bg-[#05060A]/90 border border-white/15 backdrop-blur-md text-[10px] font-mono font-bold text-typography-primary whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.6)] flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <span>{node.label}</span>
              </div>
              <span className="text-[8px] font-mono text-typography-muted whitespace-nowrap mt-0.5 opacity-80">
                {node.sub}
              </span>
            </div>
          </Html>
        </group>
      ))}

      {/* Traveling Data Pulses */}
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
