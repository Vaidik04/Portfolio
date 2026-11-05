"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const CosmicDust: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const count = 900;
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    const colorPalette = [
      new THREE.Color("#3DDC84"), // Android green
      new THREE.Color("#7C5CFF"), // Neon violet
      new THREE.Color("#22D3EE"), // Cyan
      new THREE.Color("#FFFFFF"), // Pure white starlight
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50 - 5;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      spd[i] = 0.2 + Math.random() * 0.8;
    }

    return { positions: pos, colors: col, speeds: spd };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const positionsArr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const scrollVelocity = 1.0 + scrollProgress * 12.0;

    for (let i = 0; i < count; i++) {
      // Flow forward along Z axis
      positionsArr[i * 3 + 2] += speeds[i] * delta * scrollVelocity * 4.0;

      // Wrap around when past camera
      if (positionsArr[i * 3 + 2] > 10) {
        positionsArr[i * 3 + 2] = -40;
      }

      // Gentle orbital sway
      positionsArr[i * 3] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.003;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Pointer-driven parallax
    const pointer = state.pointer;
    pointsRef.current.rotation.y = THREE.MathUtils.damp(
      pointsRef.current.rotation.y,
      pointer.x * 0.15,
      2,
      delta
    );
    pointsRef.current.rotation.x = THREE.MathUtils.damp(
      pointsRef.current.rotation.x,
      -pointer.y * 0.15,
      2,
      delta
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
