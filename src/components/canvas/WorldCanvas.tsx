"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { qualityGovernor } from "@/lib/qualityGovernor";
import { CameraRig } from "./CameraRig";
import { BootGlyphRain } from "./BootGlyphRain";
import { AssemblingPhoneHero } from "./AssemblingPhoneHero";
import { ExplodedPhoneStack } from "./ExplodedPhoneStack";
import { FlightDeckRail } from "./FlightDeckRail";
import { LabConstellation } from "./LabConstellation";
import { WorldBeaconArtifact } from "./WorldBeaconArtifact";

export const WorldCanvas: React.FC = () => {
  const { glitchMode, qualityTier } = useWorldStore();
  const [hasWebGLError, setHasWebGLError] = useState(false);

  // If 2D fallback is forced or WebGL crashed, render clean 2D ambient gradient
  if (hasWebGLError || qualityTier === "fallback2d") {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A]"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-android/10 blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-accent-violet/10 blur-[140px]" />
      </div>
    );
  }

  const profile = qualityGovernor.getProfile();

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-[#05060A] transition-all duration-500 ${
        glitchMode
          ? "filter invert-[0.1] contrast-125 saturate-150 [text-shadow:_0_0_8px_#3DDC84]"
          : ""
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={profile.dpr}
        gl={{
          antialias: profile.tier !== "low",
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#05060A", 1);
        }}
        onError={() => setHasWebGLError(true)}
      >
        {/* Ambient Warm Studio Lighting */}
        <ambientLight intensity={0.55} color="#ECE8DF" />

        {/* Primary Key Light */}
        <directionalLight position={[8, 14, 8]} intensity={1.8} color="#FFFFFF" />

        {/* Soft Neutral Fill Light */}
        <directionalLight position={[-8, -4, 6]} intensity={0.7} color="#7C5CFF" />

        {/* Android Green Rim Kicker Light */}
        <directionalLight position={[0, -8, -6]} intensity={2.2} color="#3DDC84" />

        {/* Specular Cyan Glint */}
        <pointLight position={[3, 5, 4]} intensity={1.1} color="#22D3EE" />

        <Suspense fallback={null}>
          {/* Master Timeline Camera Rig */}
          <CameraRig />

          {/* Scene 0: GPGPU Glyph Rain */}
          <BootGlyphRain />

          {/* Scene 1: Hero Phone Chassis Assembly */}
          <AssemblingPhoneHero />

          {/* Scene 2: The Exploded 5-Layer Stack */}
          <ExplodedPhoneStack />

          {/* Scene 3: Flagship Work Flight Deck */}
          <FlightDeckRail />

          {/* Scene 4: The Lab Constellation */}
          <LabConstellation />

          {/* Scene 8: Sovereign World Beacon */}
          <WorldBeaconArtifact />
        </Suspense>
      </Canvas>
    </div>
  );
};
