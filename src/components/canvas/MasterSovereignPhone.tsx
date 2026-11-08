"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { generateAppScreenTexture } from "@/lib/proceduralPhoneScreens";
import { createGlassSlabMaterial } from "./shaders/glassSlabMaterial";

export const MasterSovereignPhone: React.FC = () => {
  const {
    scrollProgress,
    activeAppId,
    manualExploded,
    focusedLayer,
    setFocusedLayer,
  } = useWorldStore();

  const groupRef = useRef<THREE.Group>(null);
  const screenMeshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  // Phone Dimensions
  const width = 2.45;
  const height = 5.0;
  const slabDepth = 0.055;
  const radius = 0.28;

  // Cached Screen Textures (Quad HD+ resolution)
  const [screenTextures, setScreenTextures] = useState<{
    girvi: THREE.CanvasTexture | null;
    jewelbill: THREE.CanvasTexture | null;
    advokosh: THREE.CanvasTexture | null;
  }>({
    girvi: null,
    jewelbill: null,
    advokosh: null,
  });

  useEffect(() => {
    setScreenTextures({
      girvi: generateAppScreenTexture("girvi"),
      jewelbill: generateAppScreenTexture("jewelbill"),
      advokosh: generateAppScreenTexture("advokosh"),
    });
  }, []);

  // Update screen texture whenever activeAppId changes
  useEffect(() => {
    if (!screenMeshRef.current) return;
    const tex = screenTextures[activeAppId];
    if (tex && screenMeshRef.current.material instanceof THREE.MeshBasicMaterial) {
      screenMeshRef.current.material.map = tex;
      screenMeshRef.current.material.needsUpdate = true;
    }
  }, [activeAppId, screenTextures]);

  // 5 Architectural Layer Materials
  const glassMaterials = useMemo(() => {
    return [
      createGlassSlabMaterial({ baseColor: "#0D111A", edgeColor: "#3DDC84", cipherColor: "#22D3EE" }), // L1: Compose UI
      createGlassSlabMaterial({ baseColor: "#100E1C", edgeColor: "#7C5CFF", cipherColor: "#F5C26B" }), // L2: StateFlow
      createGlassSlabMaterial({ baseColor: "#0B1318", edgeColor: "#22D3EE", cipherColor: "#3DDC84" }), // L3: Room SQLite
      createGlassSlabMaterial({ baseColor: "#16120B", edgeColor: "#F5C26B", cipherColor: "#7C5CFF" }), // L4: SQLCipher
      createGlassSlabMaterial({ baseColor: "#1A100E", edgeColor: "#E05638", cipherColor: "#F5C26B" }), // L5: StrongBox
    ];
  }, []);

  // Layer Group References
  const l1Ref = useRef<THREE.Group>(null);
  const l2Ref = useRef<THREE.Group>(null);
  const l3Ref = useRef<THREE.Group>(null);
  const l4Ref = useRef<THREE.Group>(null);
  const l5Ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const p = scrollProgress;
    const isMobile = viewport.width < 7.0;

    // Visibility: Active from Hero (0.0) through FlightDeck (0.64), fades smoothly after
    const isVisible = p < 0.70;
    groupRef.current.visible = isVisible;
    if (!isVisible) return;

    // Calculate separation factor [0 = solid phone, 1 = fully exploded]
    let separation = 0;
    if (manualExploded) {
      separation = 1.0;
    } else if (p >= 0.16 && p <= 0.44) {
      // Smooth bell curve / plateau during Architecture section
      separation = THREE.MathUtils.smootherstep((p - 0.16) / 0.12, 0, 1);
      if (p > 0.36) {
        separation = 1.0 - THREE.MathUtils.smootherstep((p - 0.36) / 0.08, 0, 1);
      }
    }

    // Determine target position & rotation based on scroll progress
    let targetX = isMobile ? 0 : 1.85;
    let targetY = 0;
    let targetZ = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetRotZ = 0;
    let targetScale = isMobile ? 0.68 : 0.92;

    if (p < 0.16) {
      // Phase 1: Hero Device
      targetX = isMobile ? 0 : 1.85;
      targetY = Math.sin(state.clock.elapsedTime * 1.4) * 0.08;
      targetZ = 0;

      // Pointer interactive tilt
      const pointer = state.pointer;
      targetRotX = -pointer.y * 0.28;
      targetRotY = pointer.x * 0.35 - 0.08;
      targetRotZ = -pointer.x * 0.06;
      targetScale = isMobile ? 0.68 : 0.92;
    } else if (p <= 0.44 || manualExploded) {
      // Phase 2: Architecture Exploded 5-Layer Stack
      targetX = isMobile ? 0 : 1.15;
      targetY = Math.sin(state.clock.elapsedTime * 1.1) * 0.04;
      targetZ = 0.2;

      // Isometric architectural showcase perspective
      targetRotX = -0.16;
      targetRotY = 0.58;
      targetRotZ = -0.06;

      if (focusedLayer !== null) {
        targetRotY = 0.42;
      }
      targetScale = isMobile ? 0.60 : 0.85;
    } else if (p < 0.62) {
      // Phase 3: Flagship Work Flight Deck — Clean reassembled phone
      targetX = isMobile ? 0 : 1.95;
      targetY = -0.05 + Math.sin(state.clock.elapsedTime * 1.3) * 0.06;
      targetZ = 0.1;
      targetRotX = 0.04;
      targetRotY = -0.15;
      targetRotZ = 0;
      targetScale = isMobile ? 0.64 : 0.88;
    } else {
      // Phase 4: Smooth departure into background
      const fadeProgress = (p - 0.62) / 0.08;
      targetX = 1.0;
      targetY = 0.4;
      targetZ = THREE.MathUtils.lerp(0.1, -4.0, fadeProgress);
      targetScale = THREE.MathUtils.lerp(0.88, 0.4, fadeProgress);
    }

    // Spring damping for group transforms
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.8, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 3.8, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 3.8, delta);

    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4.0, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4.0, delta);
    groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotZ, 4.0, delta);

    groupRef.current.scale.setScalar(
      THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 4.0, delta)
    );

    // Dynamic layer expansion along Z axis
    const maxSpread = 1.35;
    const zOffsets = [
      separation * maxSpread * 1.5,  // L1: Front Screen & Compose UI
      separation * maxSpread * 0.75, // L2: StateFlow & ViewModel
      0,                             // L3: Room SQLite (Center)
      -separation * maxSpread * 0.75,// L4: SQLCipher AES-256
      -separation * maxSpread * 1.5, // L5: StrongBox Titanium Back
    ];

    const layerRefs = [l1Ref, l2Ref, l3Ref, l4Ref, l5Ref];
    layerRefs.forEach((ref, idx) => {
      if (!ref.current) return;
      ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, zOffsets[idx], 5.0, delta);

      // Subtle scale pulse on hover/focus
      const isTarget = focusedLayer === idx + 1 || hoveredLayer === idx + 1;
      const targetLayerScale = isTarget ? 1.04 : 1.0;
      ref.current.scale.setScalar(
        THREE.MathUtils.damp(ref.current.scale.x, targetLayerScale, 5.0, delta)
      );
    });
  });

  return (
    <group ref={groupRef} position={[1.85, 0, 0]}>
      {/* =====================================================================
          LAYER 1 (Front): AMOLED Display + Gorilla Glass (Compose M3)
      ====================================================================== */}
      <group
        ref={l1Ref}
        onPointerOver={() => setHoveredLayer(1)}
        onPointerOut={() => setHoveredLayer(null)}
      >
        {/* Front Glass Slab */}
        <RoundedBox args={[width, height, slabDepth]} radius={radius} smoothness={8}>
          <meshPhysicalMaterial
            color="#080B12"
            metalness={0.1}
            roughness={0.08}
            transmission={0.65}
            thickness={0.2}
            ior={1.52}
            reflectivity={0.9}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
          />
        </RoundedBox>

        {/* High-DPI AMOLED Screen Plane */}
        <mesh ref={screenMeshRef} position={[0, 0, slabDepth / 2 + 0.004]}>
          <planeGeometry args={[width - 0.12, height - 0.12]} />
          <meshBasicMaterial
            map={screenTextures.girvi || undefined}
            toneMapped={false}
          />
        </mesh>

        {/* Bezel Trim Ring */}
        <RoundedBox
          args={[width - 0.04, height - 0.04, slabDepth + 0.002]}
          radius={radius * 0.95}
          smoothness={6}
        >
          <meshStandardMaterial color="#0A0B10" metalness={0.8} roughness={0.3} />
        </RoundedBox>

        {/* Top Speaker Earpiece Slit */}
        <mesh position={[0, height / 2 - 0.08, slabDepth / 2 + 0.006]}>
          <boxGeometry args={[0.38, 0.02, 0.01]} />
          <meshBasicMaterial color="#1A1C24" />
        </mesh>

        {/* Center Punch-Hole Camera with Sapphire Ring */}
        <mesh position={[0, height / 2 - 0.22, slabDepth / 2 + 0.006]}>
          <circleGeometry args={[0.048, 32]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <mesh position={[0, height / 2 - 0.22, slabDepth / 2 + 0.007]}>
          <ringGeometry args={[0.048, 0.056, 32]} />
          <meshBasicMaterial color="#3DDC84" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* =====================================================================
          LAYER 2: ViewModel & StateFlow Logic Board (Copper / Violet Accent)
      ====================================================================== */}
      <group
        ref={l2Ref}
        onPointerOver={() => setHoveredLayer(2)}
        onPointerOut={() => setHoveredLayer(null)}
      >
        <RoundedBox args={[width - 0.08, height - 0.08, slabDepth]} radius={radius * 0.9} smoothness={6}>
          <primitive object={glassMaterials[1]} attach="material" />
        </RoundedBox>

        {/* Logic Board SoC Chip & Micro-traces */}
        <mesh position={[0, 0.4, slabDepth / 2 + 0.004]}>
          <boxGeometry args={[0.7, 0.7, 0.02]} />
          <meshStandardMaterial
            color="#141124"
            metalness={0.85}
            roughness={0.25}
            emissive="#7C5CFF"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0, 0.4, slabDepth / 2 + 0.016]}>
          <ringGeometry args={[0.42, 0.46, 32]} />
          <meshBasicMaterial color="#7C5CFF" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* =====================================================================
          LAYER 3: Room SQLite Persistence Matrix (Cyan Accent)
      ====================================================================== */}
      <group
        ref={l3Ref}
        onPointerOver={() => setHoveredLayer(3)}
        onPointerOut={() => setHoveredLayer(null)}
      >
        <RoundedBox args={[width - 0.08, height - 0.08, slabDepth]} radius={radius * 0.9} smoothness={6}>
          <primitive object={glassMaterials[2]} attach="material" />
        </RoundedBox>

        {/* Relational Table Bus Matrix */}
        <mesh position={[0, -0.3, slabDepth / 2 + 0.004]}>
          <boxGeometry args={[0.85, 0.85, 0.02]} />
          <meshStandardMaterial
            color="#0C151B"
            metalness={0.9}
            roughness={0.2}
            emissive="#22D3EE"
            emissiveIntensity={0.35}
          />
        </mesh>
      </group>

      {/* =====================================================================
          LAYER 4: SQLCipher 4.5.5 AES-256 Cryptographic Shield (Gold Accent)
      ====================================================================== */}
      <group
        ref={l4Ref}
        onPointerOver={() => setHoveredLayer(4)}
        onPointerOut={() => setHoveredLayer(null)}
      >
        <RoundedBox args={[width - 0.08, height - 0.08, slabDepth]} radius={radius * 0.9} smoothness={6}>
          <primitive object={glassMaterials[3]} attach="material" />
        </RoundedBox>

        {/* 256-bit AES Hardware Cryptographic Core */}
        <mesh position={[0, 0.1, slabDepth / 2 + 0.004]}>
          <boxGeometry args={[0.65, 0.65, 0.02]} />
          <meshStandardMaterial
            color="#1C160B"
            metalness={0.92}
            roughness={0.18}
            emissive="#F5C26B"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* =====================================================================
          LAYER 5 (Back): Titanium Chassis + StrongBox Hardware Security TEE
      ====================================================================== */}
      <group
        ref={l5Ref}
        onPointerOver={() => setHoveredLayer(5)}
        onPointerOut={() => setHoveredLayer(null)}
      >
        {/* Solid Space-Black Titanium Chassis Shell */}
        <RoundedBox args={[width, height, slabDepth * 1.5]} radius={radius} smoothness={8}>
          <meshStandardMaterial
            color="#12141A"
            metalness={0.95}
            roughness={0.16}
            envMapIntensity={1.8}
          />
        </RoundedBox>

        {/* StrongBox TEE Hardware Security Enclave Chip */}
        <mesh position={[0, -0.6, -slabDepth - 0.004]}>
          <boxGeometry args={[0.5, 0.5, 0.02]} />
          <meshStandardMaterial
            color="#1E1210"
            metalness={0.9}
            roughness={0.2}
            emissive="#E05638"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Premium Camera Island Bump on Back */}
        <group position={[-width / 2 + 0.52, height / 2 - 0.72, -slabDepth - 0.02]}>
          <RoundedBox args={[0.78, 1.15, 0.06]} radius={0.12} smoothness={6}>
            <meshStandardMaterial color="#0C0E14" metalness={0.92} roughness={0.2} />
          </RoundedBox>

          {/* Dual Camera Lenses with Sapphire Trim Rings */}
          <mesh position={[0, 0.28, -0.035]}>
            <circleGeometry args={[0.16, 32]} />
            <meshBasicMaterial color="#05070B" />
          </mesh>
          <mesh position={[0, 0.28, -0.036]}>
            <ringGeometry args={[0.16, 0.19, 32]} />
            <meshStandardMaterial color="#3DDC84" metalness={0.9} roughness={0.1} />
          </mesh>

          <mesh position={[0, -0.28, -0.035]}>
            <circleGeometry args={[0.16, 32]} />
            <meshBasicMaterial color="#05070B" />
          </mesh>
          <mesh position={[0, -0.28, -0.036]}>
            <ringGeometry args={[0.16, 0.19, 32]} />
            <meshStandardMaterial color="#22D3EE" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Antenna Lines on Frame */}
        <mesh position={[width / 2 + 0.002, height / 2 - 0.6, 0]}>
          <boxGeometry args={[0.008, 0.04, slabDepth * 1.5 + 0.002]} />
          <meshBasicMaterial color="#08090D" />
        </mesh>
        <mesh position={[-width / 2 - 0.002, height / 2 - 0.6, 0]}>
          <boxGeometry args={[0.008, 0.04, slabDepth * 1.5 + 0.002]} />
          <meshBasicMaterial color="#08090D" />
        </mesh>
        <mesh position={[width / 2 + 0.002, -height / 2 + 0.6, 0]}>
          <boxGeometry args={[0.008, 0.04, slabDepth * 1.5 + 0.002]} />
          <meshBasicMaterial color="#08090D" />
        </mesh>
        <mesh position={[-width / 2 - 0.002, -height / 2 + 0.6, 0]}>
          <boxGeometry args={[0.008, 0.04, slabDepth * 1.5 + 0.002]} />
          <meshBasicMaterial color="#08090D" />
        </mesh>

        {/* Physical Titanium Side Buttons */}
        {/* Power / Action Button (Right) */}
        <mesh position={[width / 2 + 0.02, 0.35, 0]}>
          <boxGeometry args={[0.04, 0.42, 0.03]} />
          <meshStandardMaterial color="#1E222D" metalness={0.95} roughness={0.2} />
        </mesh>

        {/* Volume Up & Down Buttons (Left) */}
        <mesh position={[-width / 2 - 0.02, 0.55, 0]}>
          <boxGeometry args={[0.04, 0.32, 0.03]} />
          <meshStandardMaterial color="#1E222D" metalness={0.95} roughness={0.2} />
        </mesh>
        <mesh position={[-width / 2 - 0.02, 0.15, 0]}>
          <boxGeometry args={[0.04, 0.32, 0.03]} />
          <meshStandardMaterial color="#1E222D" metalness={0.95} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
};

