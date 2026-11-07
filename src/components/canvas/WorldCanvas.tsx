"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { PhoneExplodedLayers } from "./PhoneExplodedLayers";
import { useWorldStore } from "@/store/useWorldStore";

export const WorldCanvas: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-[#0B0C0E]"
    >
      <Canvas
        camera={{ position: [0, 0, 8.2], fov: 42 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 1.75]}
      >
        {/* Architectural Studio Three-Point Lighting */}
        <ambientLight intensity={0.65} color="#EDEFF5" />
        
        {/* Primary Studio Key Light */}
        <directionalLight
          position={[7, 12, 8]}
          intensity={1.9}
          color="#FFFFFF"
        />

        {/* Soft Cool Fill Light */}
        <directionalLight
          position={[-8, -3, 6]}
          intensity={0.75}
          color="#B0C2E8"
        />

        {/* Cobalt Rim / Kicker Light highlighting slab beveled edges */}
        <directionalLight
          position={[0, -8, -6]}
          intensity={2.4}
          color="#2B5BFF"
        />

        {/* Subtle Ochre Cryptographic Backlight */}
        <pointLight
          position={[5, -5, -3]}
          intensity={0.8}
          color="#D95C36"
        />

        <Suspense fallback={null}>
          <PhoneExplodedLayers />
        </Suspense>
      </Canvas>
    </div>
  );
};
