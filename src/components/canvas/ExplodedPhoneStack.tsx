"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { createGlassSlabMaterial } from "./shaders/glassSlabMaterial";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const ExplodedPhoneStack: React.FC = () => {
  const { scrollProgress, focusedLayer, setFocusedLayer, manualExploded } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Slab Geometry Dimensions
  const width = 2.4;
  const height = 4.9;
  const slabDepth = 0.08;
  const radius = 0.24;

  // 5 Distinct Layer Materials
  const materials = useMemo(() => {
    return [
      createGlassSlabMaterial({ baseColor: "#10141C", edgeColor: "#3DDC84", cipherColor: "#22D3EE" }), // Layer 1: Compose UI
      createGlassSlabMaterial({ baseColor: "#12101E", edgeColor: "#7C5CFF", cipherColor: "#F5C26B" }), // Layer 2: ViewModel Flow
      createGlassSlabMaterial({ baseColor: "#0E151A", edgeColor: "#22D3EE", cipherColor: "#3DDC84" }), // Layer 3: Room SQLite
      createGlassSlabMaterial({ baseColor: "#18140E", edgeColor: "#F5C26B", cipherColor: "#7C5CFF" }), // Layer 4: SQLCipher AES-256
      createGlassSlabMaterial({ baseColor: "#1C1412", edgeColor: "#E05638", cipherColor: "#F5C26B" }), // Layer 5: StrongBox Keystore
    ];
  }, []);

  const layerRefs = [
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
  ];

  // Instanced data packets traveling between layers
  const packetCount = 18;
  const packets = useMemo(() => {
    return Array.from({ length: packetCount }).map((_, i) => ({
      x: (Math.random() - 0.5) * 1.6,
      y: (Math.random() - 0.5) * 3.4,
      speed: 0.6 + Math.random() * 1.2,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);
  const packetGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Visibility: Exploded Stack lives in scrollProgress 0.20 to 0.48
    const inRange = scrollProgress >= 0.18 && scrollProgress <= 0.50;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    const t = THREE.MathUtils.clamp((scrollProgress - 0.22) / 0.20, 0, 1);
    const explodeDistance = manualExploded ? 1.0 : t;

    // Responsive horizontal positioning
    const isMobile = viewport.width < 7.0;
    const targetX = isMobile ? 0 : 0.8;
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.5, delta);

    // Camera tilt / Orbit when inspected
    if (focusedLayer !== null) {
      // Rotate to showcase the isolated layer
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, 0.45, 3.0, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -0.2, 3.0, delta);
    } else {
      const pointer = state.pointer;
      const targetRotY = pointer.x * 0.45 + (1.0 - explodeDistance) * 0.2;
      const targetRotX = -pointer.y * 0.35;
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 3.5, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 3.5, delta);
    }

    // Explode each slab along Z-axis with staggered distances
    const maxSpread = 1.35;
    const layerOffsets = [
      maxSpread * 1.6,  // Layer 1: Compose UI
      maxSpread * 0.8,  // Layer 2: StateFlow
      0,                // Layer 3: Room SQLite (center)
      -maxSpread * 0.8, // Layer 4: SQLCipher AES-256
      -maxSpread * 1.6, // Layer 5: StrongBox Enclave
    ];

    layerRefs.forEach((ref, idx) => {
      if (!ref.current) return;
      const targetZ = layerOffsets[idx] * explodeDistance;
      ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, targetZ, 4.5, delta);

      // Scale up when hovered or focused
      const isTarget = focusedLayer === idx + 1 || hoveredIndex === idx;
      const targetScale = isTarget ? 1.04 : 1.0;
      ref.current.scale.setScalar(THREE.MathUtils.damp(ref.current.scale.x, targetScale, 4.0, delta));

      // Update shader encryption sweep uniform
      const mat = materials[idx];
      if (mat.uniforms) {
        mat.uniforms.uTime.value = state.clock.elapsedTime;
        if (idx === 3) {
          // SQLCipher layer: sweep plaintext to ciphertext
          mat.uniforms.uEncryptionSweep.value = THREE.MathUtils.clamp(
            (scrollProgress - 0.28) / 0.12,
            0,
            1
          );
        }
      }
    });

    // Animate data packets flowing between layers
    if (packetGroupRef.current) {
      const children = packetGroupRef.current.children;
      packets.forEach((p, i) => {
        const mesh = children[i] as THREE.Mesh;
        if (mesh) {
          const zProgress = (Math.sin(state.clock.elapsedTime * p.speed + p.offset) + 1.0) * 0.5;
          mesh.position.z = THREE.MathUtils.lerp(-maxSpread * 1.6, maxSpread * 1.6, zProgress) * explodeDistance;
          mesh.position.x = p.x;
          mesh.position.y = p.y;
        }
      });
    }
  });

  const layerTitles = [
    "01 · Compose UI (M3)",
    "02 · ViewModel & StateFlow",
    "03 · Room SQLite Database",
    "04 · SQLCipher 256-bit AES",
    "05 · Android Keystore TEE",
  ];

  return (
    <group ref={groupRef} position={[0.8, 0, 0]}>
      {/* 5 Stacked Glass Slabs */}
      {materials.map((mat, idx) => (
        <group
          key={idx}
          ref={layerRefs[idx]}
          onPointerOver={() => {
            setHoveredIndex(idx);
            proceduralAudio.tick();
          }}
          onPointerOut={() => setHoveredIndex(null)}
          onClick={(e) => {
            e.stopPropagation();
            const layerNum = idx + 1;
            setFocusedLayer(focusedLayer === layerNum ? null : layerNum);
            proceduralAudio.shockwave();
          }}
        >
          {/* Main Glass Slab */}
          <RoundedBox args={[width, height, slabDepth]} radius={radius} smoothness={6}>
            <primitive object={mat} attach="material" />
          </RoundedBox>

          {/* Internal Wireframe Circuit Accent */}
          <mesh position={[0, 0, slabDepth / 2 + 0.002]}>
            <planeGeometry args={[width - 0.2, height - 0.2]} />
            <meshBasicMaterial
              color={idx === 3 ? "#F5C26B" : idx === 4 ? "#E05638" : "#3DDC84"}
              wireframe
              transparent
              opacity={0.15}
            />
          </mesh>

          {/* StrongBox Hardware Key Silicon Chip (Layer 5) */}
          {idx === 4 && (
            <mesh position={[0, 0, -slabDepth / 2 - 0.02]}>
              <boxGeometry args={[0.9, 0.9, 0.04]} />
              <meshStandardMaterial
                color="#F5C26B"
                metalness={0.95}
                roughness={0.15}
                emissive="#F5C26B"
                emissiveIntensity={0.25}
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Traveling Data Packets */}
      <group ref={packetGroupRef}>
        {packets.map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshBasicMaterial color="#3DDC84" transparent opacity={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  );
};
