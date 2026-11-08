"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

interface PhoneExplodedLayersProps {
  onLayerHover?: (layerId: number | null) => void;
  activeLayerOverride?: number | null;
}

export const PhoneExplodedLayers: React.FC<PhoneExplodedLayersProps> = ({
  onLayerHover,
  activeLayerOverride = null,
}) => {
  const { scrollProgress } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  // References for each layer group to animate their local Z positions
  const layer1Ref = useRef<THREE.Group>(null); // Compose UI
  const layer2Ref = useRef<THREE.Group>(null); // ViewModel & StateFlow
  const layer3Ref = useRef<THREE.Group>(null); // Room SQLite
  const layer4Ref = useRef<THREE.Group>(null); // SQLCipher AES-256
  const layer5Ref = useRef<THREE.Group>(null); // Keystore Hardware Enclave

  // Dimensions
  const phoneWidth = 2.7;
  const phoneHeight = 5.5;
  const slabDepth = 0.08;
  const cornerRadius = 0.28;

  // Generate crisp procedural phone screen texture with fictional data
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 2200;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Background: Deep dark slate
    ctx.fillStyle = "#0D0F14";
    ctx.fillRect(0, 0, 1080, 2200);

    // Subtle dark gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 2200);
    grad.addColorStop(0, "#141722");
    grad.addColorStop(1, "#0A0C10");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 2200);

    // Status Bar
    ctx.fillStyle = "#9DA4B5";
    ctx.font = "bold 36px sans-serif";
    ctx.fillText("09:41", 80, 90);
    ctx.font = "28px monospace";
    ctx.fillText("5G · 100%", 880, 90);

    // App Header: Girvi Gold Loan OS
    ctx.fillStyle = "#2B5BFF";
    ctx.fillRect(80, 150, 8, 56);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 52px sans-serif";
    ctx.fillText("Girvi Pawn Ledger", 106, 196);

    ctx.fillStyle = "#7D8498";
    ctx.font = "32px sans-serif";
    ctx.fillText("Fictional Sample Record · Sovereign Offline Storage", 80, 260);

    // Card 1: Sample Gold Pledge
    ctx.fillStyle = "#181C26";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(80, 320, 920, 480, 32);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#2B5BFF";
    ctx.font = "bold 32px monospace";
    ctx.fillText("TOKEN #GV-1048", 120, 385);

    ctx.fillStyle = "#5E667C";
    ctx.font = "28px sans-serif";
    ctx.fillText("Customer: Ramesh Kumar (Sample Record)", 120, 440);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 76px sans-serif";
    ctx.fillText("₹1,45,000", 120, 550);

    ctx.fillStyle = "#D95C36";
    ctx.font = "bold 32px monospace";
    ctx.fillText("Long Integer Paise: 14,500,000L", 120, 615);

    ctx.fillStyle = "#7D8498";
    ctx.font = "28px monospace";
    ctx.fillText("Pledge: Gold 22K (42.50g) · Net Wt: 36.80g", 120, 690);
    ctx.fillText("Interest: 1.50% / Mo · Compound Rule", 120, 740);

    // Card 2: Security & Encryption Seal
    ctx.fillStyle = "#13161F";
    ctx.strokeStyle = "rgba(43, 91, 255, 0.35)";
    ctx.beginPath();
    ctx.roundRect(80, 840, 920, 380, 32);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#2B5BFF";
    ctx.font = "bold 34px sans-serif";
    ctx.fillText("Cryptographic Boundary", 120, 910);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "30px sans-serif";
    ctx.fillText("SQLCipher 256-bit AES Database", 120, 980);
    ctx.fillText("Android Keystore AES-256-GCM MasterKey", 120, 1030);

    ctx.fillStyle = "#7D8498";
    ctx.font = "26px monospace";
    ctx.fillText("PRAGMA cipher_page_size = 4096; Zero network sockets.", 120, 1120);

    // Card 3: Recent Transactions
    ctx.fillStyle = "#181C26";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.beginPath();
    ctx.roundRect(80, 1260, 920, 480, 32);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 36px sans-serif";
    ctx.fillText("Ledger Activity", 120, 1330);

    ctx.fillStyle = "#9DA4B5";
    ctx.font = "28px monospace";
    ctx.fillText("1. Principal Disbursed: ₹1,45,000 (Cash)", 120, 1420);
    ctx.fillText("2. Physical Evidence: CameraX Gold Photo ID #482", 120, 1500);
    ctx.fillText("3. Thermal Receipt: 80mm ESC/POS Generated", 120, 1580);
    ctx.fillText("4. Backup: AES-GCM Encrypted JSON to SD Card", 120, 1660);

    // Bottom Navigation Bar
    ctx.fillStyle = "#2B5BFF";
    ctx.beginPath();
    ctx.roundRect(80, 1820, 920, 120, 30);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 36px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("100% Sovereign Offline Database Active", 540, 1895);
    ctx.textAlign = "left";

    // Home indicator pill
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.roundRect(380, 2140, 320, 12, 6);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    return texture;
  }, []);

  // Shared physically-based materials
  const chassisMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#181B22",
      metalness: 0.85,
      roughness: 0.22,
    });
  }, []);

  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: "#FFFFFF",
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 0.4,
      ior: 1.5,
      transparent: true,
      opacity: 0.92,
    });
  }, []);

  const stateLayerMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#151924",
      metalness: 0.65,
      roughness: 0.35,
    });
  }, []);

  const roomDbMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#10131A",
      metalness: 0.5,
      roughness: 0.45,
    });
  }, []);

  const cipherMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#8C3A20", // Brushed Copper / Security Ochre
      metalness: 0.85,
      roughness: 0.28,
    });
  }, []);

  const keystoreMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#0B0D12",
      metalness: 0.9,
      roughness: 0.2,
    });
  }, []);

  // Frame loop for camera, scroll position, and layer separation
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const p = scrollProgress;

    // Calculate separation factor (0 = assembled, 1 = fully exploded)
    // Separation occurs between p = 0.16 and p = 0.48
    let separation = 0;
    if (p >= 0.16 && p <= 0.48) {
      separation = THREE.MathUtils.smoothstep(p, 0.16, 0.34) * (1 - THREE.MathUtils.smoothstep(p, 0.40, 0.48));
    }

    // Responsive position: On desktop offset left/right, on mobile center
    const isMobile = viewport.width < 7.5;
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetRotZ = 0;
    let targetScale = isMobile ? 0.72 : 1.0;

    if (p < 0.18) {
      // Phase 1: Hero — Assembled phone floating with subtle perspective
      targetX = isMobile ? 0 : 1.35;
      targetY = 0;
      targetZ = 0;
      targetRotX = 0.12;
      targetRotY = -0.28;
      targetRotZ = 0.04;
    } else if (p < 0.50) {
      // Phase 2: Architecture — Axonometric exploded layers view
      targetX = isMobile ? 0 : -1.2;
      targetY = 0.2;
      targetZ = 0.5;
      targetRotX = 0.38;
      targetRotY = -0.72;
      targetRotZ = 0.22;
      targetScale = isMobile ? 0.65 : 0.95;
    } else if (p < 0.75) {
      // Phase 3: Work Showcase — Reassembled phone presenting flagship apps
      targetX = isMobile ? 0 : 1.4;
      targetY = -0.1;
      targetZ = 0.2;
      targetRotX = 0.05;
      targetRotY = -0.15;
      targetRotZ = 0;
      targetScale = isMobile ? 0.75 : 1.05;
    } else {
      // Phase 4: Rest of page — Gently dock in background
      targetX = 0;
      targetY = 0.5;
      targetZ = -2.5;
      targetRotX = 0.2;
      targetRotY = 0.1;
      targetRotZ = 0;
      targetScale = 0.6;
    }

    // Pointer mouse tilt
    const pointer = state.pointer;
    const parallaxX = pointer.x * 0.25;
    const parallaxY = pointer.y * 0.18;

    // Smooth dampening towards target transforms
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX + parallaxX, 4, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY + parallaxY, 4, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 4, delta);

    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX - parallaxY * 0.15, 4, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY + parallaxX * 0.25, 4, delta);
    groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotZ, 4, delta);

    groupRef.current.scale.setScalar(THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 4, delta));

    // Animate the 5 layer separations along Z
    const maxSpread = 1.65;
    const z1 = separation * maxSpread * 1.0;
    const z2 = separation * maxSpread * 0.5;
    const z3 = 0;
    const z4 = -separation * maxSpread * 0.5;
    const z5 = -separation * maxSpread * 1.0;

    if (layer1Ref.current) layer1Ref.current.position.z = THREE.MathUtils.damp(layer1Ref.current.position.z, z1, 6, delta);
    if (layer2Ref.current) layer2Ref.current.position.z = THREE.MathUtils.damp(layer2Ref.current.position.z, z2, 6, delta);
    if (layer3Ref.current) layer3Ref.current.position.z = THREE.MathUtils.damp(layer3Ref.current.position.z, z3, 6, delta);
    if (layer4Ref.current) layer4Ref.current.position.z = THREE.MathUtils.damp(layer4Ref.current.position.z, z4, 6, delta);
    if (layer5Ref.current) layer5Ref.current.position.z = THREE.MathUtils.damp(layer5Ref.current.position.z, z5, 6, delta);
  });

  const handlePointerEnter = (id: number) => {
    setHoveredLayer(id);
    if (onLayerHover) onLayerHover(id);
  };

  const handlePointerLeave = () => {
    setHoveredLayer(null);
    if (onLayerHover) onLayerHover(null);
  };

  const isLayerActive = (id: number) => {
    return activeLayerOverride === id || hoveredLayer === id;
  };

  return (
    <group ref={groupRef} position={[1.35, 0, 0]}>
      {/* Phone Outer Chassis Metal Rim (Frame) */}
      <mesh material={chassisMaterial} position={[0, 0, 0]}>
        <boxGeometry args={[phoneWidth + 0.08, phoneHeight + 0.08, 0.32]} />
      </mesh>

      {/* Layer 1: Jetpack Compose Presentation Slab */}
      <group
        ref={layer1Ref}
        onPointerOver={() => handlePointerEnter(1)}
        onPointerOut={handlePointerLeave}
      >
        <RoundedBox
          args={[phoneWidth, phoneHeight, slabDepth]}
          radius={cornerRadius}
          smoothness={6}
          material={isLayerActive(1) ? chassisMaterial : glassMaterial}
        />
        {/* Screen Display Face */}
        {screenTexture && (
          <mesh position={[0, 0, slabDepth / 2 + 0.005]}>
            <planeGeometry args={[phoneWidth - 0.16, phoneHeight - 0.2]} />
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
          </mesh>
        )}
      </group>

      {/* Layer 2: Domain & StateFlow Slab */}
      <group
        ref={layer2Ref}
        onPointerOver={() => handlePointerEnter(2)}
        onPointerOut={handlePointerLeave}
      >
        <RoundedBox
          args={[phoneWidth * 0.96, phoneHeight * 0.96, slabDepth]}
          radius={cornerRadius * 0.8}
          smoothness={6}
          material={stateLayerMaterial}
        />
        {/* Etched Conductive Logic Lines */}
        <mesh position={[0, 0, slabDepth / 2 + 0.002]}>
          <planeGeometry args={[phoneWidth * 0.85, phoneHeight * 0.85]} />
          <meshBasicMaterial color={isLayerActive(2) ? "#2B5BFF" : "#1F2942"} wireframe />
        </mesh>
      </group>

      {/* Layer 3: Room SQLite Persistence Slab */}
      <group
        ref={layer3Ref}
        onPointerOver={() => handlePointerEnter(3)}
        onPointerOut={handlePointerLeave}
      >
        <RoundedBox
          args={[phoneWidth * 0.96, phoneHeight * 0.96, slabDepth]}
          radius={cornerRadius * 0.8}
          smoothness={6}
          material={roomDbMaterial}
        />
        {/* Database Schema Grid */}
        <mesh position={[0, 0, slabDepth / 2 + 0.002]}>
          <planeGeometry args={[phoneWidth * 0.85, phoneHeight * 0.85]} />
          <meshBasicMaterial color={isLayerActive(3) ? "#2B5BFF" : "#1B212D"} wireframe />
        </mesh>
      </group>

      {/* Layer 4: SQLCipher AES-256 Cryptographic Barrier */}
      <group
        ref={layer4Ref}
        onPointerOver={() => handlePointerEnter(4)}
        onPointerOut={handlePointerLeave}
      >
        <RoundedBox
          args={[phoneWidth * 0.96, phoneHeight * 0.96, slabDepth]}
          radius={cornerRadius * 0.8}
          smoothness={6}
          material={cipherMaterial}
        />
        {/* Cipher Lock Indicator */}
        <mesh position={[0, 0, slabDepth / 2 + 0.004]}>
          <ringGeometry args={[0.25, 0.35, 32]} />
          <meshBasicMaterial color={isLayerActive(4) ? "#FF8A65" : "#D95C36"} />
        </mesh>
      </group>

      {/* Layer 5: Android Keystore Hardware Enclave Slab */}
      <group
        ref={layer5Ref}
        onPointerOver={() => handlePointerEnter(5)}
        onPointerOut={handlePointerLeave}
      >
        <RoundedBox
          args={[phoneWidth * 0.92, phoneHeight * 0.92, slabDepth * 1.5]}
          radius={cornerRadius * 0.7}
          smoothness={6}
          material={keystoreMaterial}
        />
        {/* Silicon Die Core */}
        <mesh position={[0, 0, (slabDepth * 1.5) / 2 + 0.005]}>
          <boxGeometry args={[1.1, 1.1, 0.02]} />
          <meshStandardMaterial color="#0A0B0F" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>
    </group>
  );
};

