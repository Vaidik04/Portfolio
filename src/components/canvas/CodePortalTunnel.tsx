"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const CodePortalTunnel: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);
  const count = 450;

  // Particle positions along a cylindrical tunnel
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cGreen = new THREE.Color("#3DDC84");
    const cViolet = new THREE.Color("#7C5CFF");
    const cCyan = new THREE.Color("#22D3EE");

    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const angle = Math.random() * Math.PI * 2;
      const z = -Math.random() * 35; // Depth down the tunnel

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
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during About & Philosophy stage: scrollProgress ~ 0.15 - 0.40
    const inRange = scrollProgress >= 0.15 && scrollProgress <= 0.42;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Fly through the tunnel: speed proportional to scroll velocity
    const speed = 8.0 + scrollProgress * 15.0;
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 2] += delta * speed;
        // Reset when passing behind camera
        if (pos[i * 3 + 2] > 5) {
          pos[i * 3 + 2] = -30;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Tunnel rotation
    groupRef.current.rotation.z += delta * 0.25;
  });

  return (
    <group ref={groupRef} position={[0, 0, -4]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.14}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Floating Hologram Rings along the tunnel */}
      {[0, -8, -16, -24].map((z, idx) => (
        <mesh key={idx} position={[0, 0, z]}>
          <ringGeometry args={[2.5, 2.58, 48]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? "#3DDC84" : "#7C5CFF"}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

