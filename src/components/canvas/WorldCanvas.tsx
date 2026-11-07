"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { PhoneExplodedLayers } from "./PhoneExplodedLayers";

export const WorldCanvas: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-[#0A0C10]"
    >
      <Canvas
        camera={{ position: [0, 0, 8.2], fov: 42 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        dpr={[1, 2]}
      >
        {/* Soft Ambient Studio Lighting */}
        <ambientLight intensity={0.7} color="#EDEFF5" />

        {/* Primary Studio Key Light */}
        <directionalLight
          position={[6, 12, 8]}
          intensity={2.2}
          color="#FFFFFF"
          castShadow
        />

        {/* Cool Blue Fill Light */}
        <directionalLight
          position={[-8, -2, 6]}
          intensity={0.85}
          color="#A8C4FF"
        />

        {/* Cobalt Rim / Kicker Light highlighting titanium beveled edges */}
        <directionalLight
          position={[0, -8, -6]}
          intensity={2.8}
          color="#2B5BFF"
        />

        {/* Warm Ochre Cryptographic Specular Backlight */}
        <pointLight
          position={[4, -4, -2]}
          intensity={1.2}
          color="#D95C36"
        />

        {/* Subtle Overhead Glint */}
        <pointLight
          position={[0, 6, 4]}
          intensity={0.8}
          color="#FFFFFF"
        />

        {/* Soft Ground Contact Shadow */}
        <ContactShadows
          position={[2.15, -2.6, 0]}
          opacity={0.55}
          scale={10}
          blur={2.5}
          far={4.5}
          color="#000000"
        />

        <Suspense fallback={null}>
          <PhoneExplodedLayers />
        </Suspense>
      </Canvas>
    </div>
  );
};
