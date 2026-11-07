"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const BootGlyphRain: React.FC = () => {
  const { scrollProgress, isBooted } = useWorldStore();
  const pointsRef = useRef<THREE.Points>(null);

  // Instanced particles (rupee symbols, binary, kotlin tokens)
  const count = 3500;

  const [positions, initialPositions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 10;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      initPos[i3] = x;
      initPos[i3 + 1] = y;
      initPos[i3 + 2] = z;

      spd[i] = 0.8 + Math.random() * 2.2;
    }
    return [pos, initPos, spd];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    if (isBooted && scrollProgress > 0.08) {
      pointsRef.current.visible = false;
      return;
    }
    pointsRef.current.visible = true;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const currentPositions = posAttr.array as Float32Array;

    const convergeFactor = isBooted ? 0 : Math.min(state.clock.elapsedTime * 0.4, 1.0);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Stream downward
      currentPositions[i3 + 1] -= speeds[i] * delta * 2.5;
      if (currentPositions[i3 + 1] < -7) {
        currentPositions[i3 + 1] = 7;
      }

      // Gravitational pull toward center right before boot completes
      if (convergeFactor > 0.6) {
        const pull = (convergeFactor - 0.6) * 4.0;
        currentPositions[i3] = THREE.MathUtils.lerp(currentPositions[i3], 0, pull * delta);
        currentPositions[i3 + 1] = THREE.MathUtils.lerp(currentPositions[i3 + 1], 0, pull * delta);
        currentPositions[i3 + 2] = THREE.MathUtils.lerp(currentPositions[i3 + 2], 0, pull * delta);
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#3DDC84"
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
