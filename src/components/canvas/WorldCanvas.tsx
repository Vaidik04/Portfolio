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
      className="fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-[#0E0F11]"
    >
      <Canvas
        camera={{ position: [0, 0, 8.2], fov: 42 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        dpr={[1, 1.75]}
      >
        {/* Ambient Warm Studio Lighting */}
        <ambientLight intensity={0.65} color="#ECE8DF" />

        {/* Primary Studio Key Light */}
        <directionalLight
          position={[6, 12, 8]}
          intensity={2.0}
          color="#FAF8F5"
        />

        {/* Soft Neutral Fill Light */}
        <directionalLight
          position={[-8, -2, 6]}
          intensity={0.65}
          color="#9A9A9F"
        />

        {/* Signature Brass Rim Kicker Light (#D4A24C) */}
        <directionalLight
          position={[0, -8, -6]}
          intensity={2.6}
          color="#D4A24C"
        />

        {/* Subtle Brass Overhead Specular Glint */}
        <pointLight
          position={[3, 5, 3]}
          intensity={0.9}
          color="#D4A24C"
        />

        {/* Soft Contact Shadow underneath phone */}
        <ContactShadows
          position={[2.15, -2.6, 0]}
          opacity={0.6}
          scale={10}
          blur={2.4}
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
