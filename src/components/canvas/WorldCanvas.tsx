"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { qualityGovernor } from "@/lib/qualityGovernor";
import { CameraRig } from "./CameraRig";
import { BootGlyphRain } from "./BootGlyphRain";
import { WorldEnvironment } from "./WorldEnvironment";
import { HeroTrinityAssembly } from "./HeroTrinityAssembly";
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
      style={{ touchAction: "pan-y" }}
      className={`fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-[#05060A] transition-all duration-500 ${
        glitchMode
          ? "filter invert-[0.1] contrast-125 saturate-150 [text-shadow:_0_0_8px_#3DDC84]"
          : ""
      }`}
    >
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 42 }}
        style={{ touchAction: "pan-y" }}
        dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1.5}
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
        {/* Dynamic Studio Atmosphere, Reflective Floor & Lighting */}
        <WorldEnvironment />

        <Suspense fallback={null}>
          {/* Master Timeline Camera Rig */}
          <CameraRig />

          {/* Scene 0: GPGPU Glyph Rain */}
          <BootGlyphRain />

          {/* Scene 1 & 2: The Trinity 3-Device Hero & Exploded Architecture Stack */}
          <HeroTrinityAssembly />

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
