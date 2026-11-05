"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const CodePortalTunnel: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);
  const count = 550;
  const ringCount = 14;

  // Particle positions along a cylindrical tunnel
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cGreen = new THREE.Color("#3DDC84");
    const cViolet = new THREE.Color("#7C5CFF");
    const cCyan = new THREE.Color("#22D3EE");

    for (let i = 0; i < count; i++) {
      const radius = 2.6 + Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      const z = -Math.random() * 45;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = z;

      const pick = Math.random();
      const c = pick < 0.4 ? cGreen : pick < 0.75 ? cViolet : cCyan;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { positions: pos, colors: col };
  }, [count]);

  const ringRefs = useRef<THREE.Mesh[]>([]);
  const pointsRef = useRef<THREE.Points>(null);
  const prevProgressRef = useRef(scrollProgress);
  const velocityRef = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during About & Philosophy stage: scrollProgress ~ 0.12 - 0.44
    const inRange = scrollProgress >= 0.12 && scrollProgress <= 0.44;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Track scroll velocity for portal jump burst
    const deltaProgress = Math.abs(scrollProgress - prevProgressRef.current);
    prevProgressRef.current = scrollProgress;
    const instantVelocity = delta > 0 ? deltaProgress / delta : 0;
    velocityRef.current = THREE.MathUtils.damp(velocityRef.current, instantVelocity, 6, delta);

    const speed = 12.0 + scrollProgress * 25.0 + velocityRef.current * 45.0;

    // Stream points along Z
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 2] += delta * speed;
        if (pos[i * 3 + 2] > 6) {
          pos[i * 3 + 2] = -42;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Animate glowing hexagonal portal warp rings
    ringRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      ring.position.z += delta * (speed * 0.95);
      if (ring.position.z > 6) {
        ring.position.z = -42 + (idx * 3.2);
      }
      ring.rotation.z += delta * (0.35 + (idx % 2 === 0 ? 0.25 : -0.25));
    });

    // Whole tunnel spiral rotation
    groupRef.current.rotation.z += delta * 0.2;
  });

  return (
    <group ref={groupRef} position={[0, 0, -4]} visible={false}>
      {/* Hyper-Speed Stardust Stream */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Hexagonal Warp Gate Rings */}
      {Array.from({ length: ringCount }).map((_, idx) => {
        const color = idx % 3 === 0 ? "#3DDC84" : idx % 3 === 1 ? "#7C5CFF" : "#22D3EE";
        return (
          <mesh
            key={idx}
            ref={(el) => {
              if (el) ringRefs.current[idx] = el;
            }}
            position={[0, 0, -idx * 3.2]}
          >
            <ringGeometry args={[2.8, 2.9, 6]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.35}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
};
