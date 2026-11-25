"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const WorldEnvironment: React.FC = () => {
  const { scrollProgress, isPlugPulled, isOffline } = useWorldStore();
  const rimLightRef = useRef<THREE.DirectionalLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  const keyLightRef = useRef<THREE.DirectionalLight>(null);

  const isDisconnected = isPlugPulled || isOffline;

  // Target accent color shifts from crisp AI Cobalt (#38BDF8) to Sovereign Emerald (#3DDC84) during outage or proof sections
  const accentColor = isDisconnected
    ? "#3DDC84"
    : scrollProgress > 0.38
    ? "#3DDC84"
    : "#38BDF8";
  const targetColor = useRef(new THREE.Color(accentColor));

  useFrame((state, delta) => {
    targetColor.current.set(accentColor);

    if (rimLightRef.current) {
      rimLightRef.current.color.lerp(targetColor.current, delta * 3.5);
      rimLightRef.current.intensity = isDisconnected
        ? 3.0 + Math.sin(state.clock.elapsedTime * 5.0) * 0.6
        : 2.2;
    }
    if (pointLightRef.current) {
      pointLightRef.current.color.lerp(targetColor.current, delta * 3.5);
    }
    if (keyLightRef.current) {
      const targetIntensity = isDisconnected ? 0.45 : 1.7;
      keyLightRef.current.intensity = THREE.MathUtils.damp(
        keyLightRef.current.intensity,
        targetIntensity,
        4.0,
        delta
      );
    }
  });

  // Perspective floor grid position & opacity
  const floorY = -2.65;
  const isFloorVisible = scrollProgress < 0.45;

  return (
    <>
      {/* Volumetric Dark Depth Fog */}
      <fogExp2 attach="fog" args={["#05060A", isPlugPulled ? 0.14 : 0.09]} />

      {/* Ambient Lighting */}
      <ambientLight intensity={isPlugPulled ? 0.25 : 0.65} color="#ECE8DF" />

      {/* Studio Key Light */}
      <directionalLight ref={keyLightRef} position={[8, 14, 8]} intensity={1.9} color="#FFFFFF" />

      {/* Cool Fill Light */}
      <directionalLight position={[-8, -4, 6]} intensity={isPlugPulled ? 0.2 : 0.8} color="#1E2333" />

      {/* Dynamic App-Responsive Rim Kicker Light */}
      <directionalLight ref={rimLightRef} position={[0, -6, -6]} intensity={2.6} color={accentColor} />

      {/* Specular Glint Light */}
      <pointLight ref={pointLightRef} position={[3, 4, 4]} intensity={1.4} distance={12} color={accentColor} />

      {/* Subtle Perspective Reflective Floor Plane */}
      {isFloorVisible && (
        <group position={[0, floorY, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          {/* Reflective Dark Floor */}
          <mesh receiveShadow>
            <planeGeometry args={[32, 32]} />
            <meshStandardMaterial
              color="#06070B"
              metalness={0.85}
              roughness={0.25}
              envMapIntensity={1.0}
            />
          </mesh>

          {/* Perspective Matrix Grid Lines */}
          <gridHelper
            args={[32, 32, "#18202F", "#0B0E14"]}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0.002]}
          />
        </group>
      )}
    </>
  );
};

