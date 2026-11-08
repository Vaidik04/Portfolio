"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const WorldEnvironment: React.FC = () => {
  const { activeAppId, scrollProgress } = useWorldStore();
  const rimLightRef = useRef<THREE.DirectionalLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  // Target accent colors based on active app
  const accentColor = activeAppId === "girvi" ? "#3DDC84" : activeAppId === "jewelbill" ? "#F5C26B" : "#7C5CFF";
  const targetColor = useRef(new THREE.Color(accentColor));

  useFrame((_, delta) => {
    targetColor.current.set(accentColor);

    if (rimLightRef.current) {
      rimLightRef.current.color.lerp(targetColor.current, delta * 3.5);
    }
    if (pointLightRef.current) {
      pointLightRef.current.color.lerp(targetColor.current, delta * 3.5);
    }
  });

  // Perspective floor grid position & opacity
  const floorY = -2.65;
  const isFloorVisible = scrollProgress < 0.45;

  return (
    <>
      {/* Volumetric Dark Depth Fog */}
      <fogExp2 attach="fog" args={["#05060A", 0.09]} />

      {/* Ambient Lighting */}
      <ambientLight intensity={0.65} color="#ECE8DF" />

      {/* Studio Key Light */}
      <directionalLight position={[8, 14, 8]} intensity={1.9} color="#FFFFFF" />

      {/* Cool Fill Light */}
      <directionalLight position={[-8, -4, 6]} intensity={0.8} color="#1E2333" />

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

