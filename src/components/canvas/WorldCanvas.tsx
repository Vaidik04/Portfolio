"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./CameraRig";
import { CosmicDust } from "./CosmicDust";
import { PointerLight } from "./PointerLight";
import { AssemblingPhone } from "./AssemblingPhone";
import { CodePortalTunnel } from "./CodePortalTunnel";
import { SkillGalaxy } from "./SkillGalaxy";
import { ArchitectureNodes } from "./ArchitectureNodes";
import { PlanetPullback } from "./PlanetPullback";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const WorldCanvas: React.FC = () => {
  const { glitchMode } = useWorldStore();

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A] transition-all duration-300 ${
        glitchMode
          ? "filter invert-[0.1] contrast-125 saturate-150 [text-shadow:_0_0_8px_#3DDC84]"
          : ""
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-10, -5, -10]} intensity={1.2} color="#7C5CFF" />
        <pointLight position={[5, -8, 5]} intensity={0.9} color="#3DDC84" />

        {/* Dynamic Interactive Pointer Light */}
        <PointerLight />

        <Suspense fallback={null}>
          {/* Continuous Camera Rig */}
          <CameraRig />

          {/* Ambient Cosmic Stardust Field */}
          <CosmicDust />

          {/* 3D Scene Components */}
          <AssemblingPhone />
          <CodePortalTunnel />
          <SkillGalaxy />
          <ArchitectureNodes />
          <PlanetPullback />
        </Suspense>
      </Canvas>
    </div>
  );
};
