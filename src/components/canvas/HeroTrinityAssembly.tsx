"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { generateAppScreenTexture } from "@/lib/proceduralPhoneScreens";
import { createGlassSlabMaterial } from "./shaders/glassSlabMaterial";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface DeviceProps {
  id: "girvi" | "jewelbill" | "advokosh";
  texture: THREE.CanvasTexture | null;
  basePos: [number, number, number];
  baseRot: [number, number, number];
  accent: string;
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  assemblyProgress: number;
}

const SinglePhoneMesh: React.FC<DeviceProps> = ({
  id,
  texture,
  basePos,
  baseRot,
  accent,
  isActive,
  isHovered,
  onHover,
  onLeave,
  onClick,
  assemblyProgress,
}) => {
  const meshGroup = useRef<THREE.Group>(null);
  const width = 2.3;
  const height = 4.85;
  const depth = 0.13;
  const radius = 0.25;

  useFrame((state, delta) => {
    if (!meshGroup.current) return;

    // Hover pull-forward effect
    const targetZ = basePos[2] + (isHovered ? 0.35 : isActive ? 0.15 : 0);
    const targetScale = isHovered ? 1.04 : isActive ? 1.0 : 0.94;
    const targetRotY = baseRot[1] + (isHovered ? (basePos[0] < 0 ? -0.1 : 0.1) : 0);

    meshGroup.current.position.x = THREE.MathUtils.damp(meshGroup.current.position.x, basePos[0], 4.0, delta);
    meshGroup.current.position.y = THREE.MathUtils.damp(
      meshGroup.current.position.y,
      basePos[1] + Math.sin(state.clock.elapsedTime * 1.4 + basePos[0]) * 0.05,
      4.0,
      delta
    );
    meshGroup.current.position.z = THREE.MathUtils.damp(meshGroup.current.position.z, targetZ, 4.0, delta);

    meshGroup.current.rotation.x = THREE.MathUtils.damp(meshGroup.current.rotation.x, baseRot[0], 4.0, delta);
    meshGroup.current.rotation.y = THREE.MathUtils.damp(meshGroup.current.rotation.y, targetRotY, 4.0, delta);
    meshGroup.current.rotation.z = THREE.MathUtils.damp(meshGroup.current.rotation.z, baseRot[2], 4.0, delta);

    meshGroup.current.scale.setScalar(
      THREE.MathUtils.damp(meshGroup.current.scale.x, targetScale * Math.min(assemblyProgress, 1.0), 4.5, delta)
    );
  });

  return (
    <group
      ref={meshGroup}
      position={basePos}
      rotation={baseRot}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover();
      }}
      onPointerOut={onLeave}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Space-Black Titanium Unibody Chassis */}
      <RoundedBox args={[width, height, depth]} radius={radius} smoothness={8}>
        <meshStandardMaterial
          color="#111319"
          metalness={0.92}
          roughness={0.22}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Ceramic Bezel Rim */}
      <mesh position={[0, 0, depth / 2 + 0.001]}>
        <planeGeometry args={[width - 0.06, height - 0.06]} />
        <meshBasicMaterial color="#06070B" />
      </mesh>

      {/* High-DPI AMOLED Screen Texture */}
      <mesh position={[0, 0, depth / 2 + 0.003]}>
        <planeGeometry args={[width - 0.12, height - 0.12]} />
        <meshBasicMaterial map={texture || undefined} toneMapped={false} />
      </mesh>

      {/* Corning Gorilla Glass Victus Specular Sheen Layer */}
      <mesh position={[0, 0, depth / 2 + 0.004]}>
        <planeGeometry args={[width - 0.12, height - 0.12]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.05}
          roughness={0.06}
          metalness={0.08}
          reflectivity={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.04}
        />
      </mesh>

      {/* Top Speaker Earpiece Slit */}
      <mesh position={[0, height / 2 - 0.08, depth / 2 + 0.005]}>
        <boxGeometry args={[0.32, 0.02, 0.008]} />
        <meshBasicMaterial color="#1A1C24" />
      </mesh>

      {/* Center Punch-Hole Camera with Sapphire Ring */}
      <mesh position={[0, height / 2 - 0.22, depth / 2 + 0.005]}>
        <circleGeometry args={[0.045, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0, height / 2 - 0.22, depth / 2 + 0.006]}>
        <ringGeometry args={[0.045, 0.054, 32]} />
        <meshBasicMaterial color={accent} transparent opacity={0.7} />
      </mesh>

      {/* Dual Camera Module on Back */}
      <group position={[-width / 2 + 0.5, height / 2 - 0.7, -depth / 2 - 0.02]}>
        <RoundedBox args={[0.74, 1.12, 0.05]} radius={0.12} smoothness={6}>
          <meshStandardMaterial color="#0C0E14" metalness={0.92} roughness={0.2} />
        </RoundedBox>
        <mesh position={[0, 0.27, -0.028]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial color="#05070B" />
        </mesh>
        <mesh position={[0, 0.27, -0.029]}>
          <ringGeometry args={[0.15, 0.18, 32]} />
          <meshStandardMaterial color={accent} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.27, -0.028]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial color="#05070B" />
        </mesh>
        <mesh position={[0, -0.27, -0.029]}>
          <ringGeometry args={[0.15, 0.18, 32]} />
          <meshStandardMaterial color="#22D3EE" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Side Titanium Buttons */}
      <mesh position={[width / 2 + 0.012, 0.35, 0]}>
        <boxGeometry args={[0.025, 0.4, 0.025]} />
        <meshStandardMaterial color="#1E222D" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[-width / 2 - 0.012, 0.55, 0]}>
        <boxGeometry args={[0.025, 0.3, 0.025]} />
        <meshStandardMaterial color="#1E222D" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[-width / 2 - 0.012, 0.15, 0]}>
        <boxGeometry args={[0.025, 0.3, 0.025]} />
        <meshStandardMaterial color="#1E222D" metalness={0.95} roughness={0.2} />
      </mesh>
    </group>
  );
};

export const HeroTrinityAssembly: React.FC = () => {
  const {
    scrollProgress,
    activeAppId,
    setActiveAppId,
    manualExploded,
    focusedLayer,
    setFocusedLayer,
    setCursorText,
  } = useWorldStore();

  const trinityGroupRef = useRef<THREE.Group>(null);
  const explodedStackRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const [hoveredApp, setHoveredApp] = useState<string | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  // Wireframe-to-Solid Shockwave Assembly Progress
  const [assemblyProgress, setAssemblyProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 0.04;
      if (current >= 1.0) {
        setAssemblyProgress(1.0);
        clearInterval(interval);
      } else {
        setAssemblyProgress(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Quad HD+ Screen Textures for all 3 apps
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

  // 5 Exploded Glass Materials
  const glassMaterials = useMemo(() => {
    return [
      createGlassSlabMaterial({ baseColor: "#0D111A", edgeColor: "#3DDC84", cipherColor: "#22D3EE" }),
      createGlassSlabMaterial({ baseColor: "#100E1C", edgeColor: "#7C5CFF", cipherColor: "#F5C26B" }),
      createGlassSlabMaterial({ baseColor: "#0B1318", edgeColor: "#22D3EE", cipherColor: "#3DDC84" }),
      createGlassSlabMaterial({ baseColor: "#16120B", edgeColor: "#F5C26B", cipherColor: "#7C5CFF" }),
      createGlassSlabMaterial({ baseColor: "#1A100E", edgeColor: "#E05638", cipherColor: "#F5C26B" }),
    ];
  }, []);

  // Exploded layer references
  const l1Ref = useRef<THREE.Group>(null);
  const l2Ref = useRef<THREE.Group>(null);
  const l3Ref = useRef<THREE.Group>(null);
  const l4Ref = useRef<THREE.Group>(null);
  const l5Ref = useRef<THREE.Group>(null);

  // Instanced Data Packet Trails across layers
  const packetMeshRef = useRef<THREE.InstancedMesh>(null);
  const packetCount = 18;
  const packetDummy = useMemo(() => new THREE.Object3D(), []);

  // Responsive device coordinates
  const isMobile = viewport.width < 7.5;

  useFrame((state, delta) => {
    if (!trinityGroupRef.current) return;

    const p = scrollProgress;
    const isVisible = p < 0.65;
    trinityGroupRef.current.visible = isVisible;
    if (!isVisible) return;

    // Separation factor for Exploded Stack view (Scene 2)
    let separation = 0;
    if (manualExploded) {
      separation = 1.0;
    } else if (p >= 0.16 && p <= 0.44) {
      separation = THREE.MathUtils.smootherstep((p - 0.16) / 0.12, 0, 1);
      if (p > 0.36) {
        separation = 1.0 - THREE.MathUtils.smootherstep((p - 0.36) / 0.08, 0, 1);
      }
    }

    const isExploded = separation > 0.02;

    if (explodedStackRef.current) {
      explodedStackRef.current.visible = isExploded;
    }

    // Dynamic right-hand anchor position
    const deskX = Math.min(2.7, Math.max(2.1, viewport.width * 0.26));
    let targetX = isMobile ? 0 : deskX;
    let targetY = 0;
    let targetZ = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetRotZ = 0;
    let targetScale = isMobile ? 0.58 : 0.78;

    if (p < 0.16) {
      // Scene 1: The Trinity Hero
      targetX = isMobile ? 0 : deskX;
      targetY = 0.05 + Math.sin(state.clock.elapsedTime * 1.3) * 0.05;
      targetZ = 0;

      // Cursor Parallax Spring Physics
      const pointer = state.pointer;
      targetRotX = -pointer.y * 0.20;
      targetRotY = pointer.x * 0.25;
      targetRotZ = -pointer.x * 0.03;
      targetScale = isMobile ? 0.58 : 0.78;
    } else if (p <= 0.44 || manualExploded) {
      // Scene 2: The Exploded Stack
      targetX = isMobile ? 0 : deskX - 0.5;
      targetY = Math.sin(state.clock.elapsedTime * 1.1) * 0.04;
      targetZ = 0.2;
      targetRotX = -0.16;
      targetRotY = 0.58;
      targetRotZ = -0.06;

      if (focusedLayer !== null) {
        targetRotY = 0.42;
      }
      targetScale = isMobile ? 0.54 : 0.72;
    } else {
      // Fade out on scroll to lower scenes
      const fade = (p - 0.44) / 0.12;
      targetX = 1.0;
      targetY = 0.4;
      targetZ = THREE.MathUtils.lerp(0.1, -4.0, fade);
      targetScale = THREE.MathUtils.lerp(0.72, 0.4, fade);
    }

    // Spring damping
    trinityGroupRef.current.position.x = THREE.MathUtils.damp(trinityGroupRef.current.position.x, targetX, 3.8, delta);
    trinityGroupRef.current.position.y = THREE.MathUtils.damp(trinityGroupRef.current.position.y, targetY, 3.8, delta);
    trinityGroupRef.current.position.z = THREE.MathUtils.damp(trinityGroupRef.current.position.z, targetZ, 3.8, delta);

    trinityGroupRef.current.rotation.x = THREE.MathUtils.damp(trinityGroupRef.current.rotation.x, targetRotX, 4.0, delta);
    trinityGroupRef.current.rotation.y = THREE.MathUtils.damp(trinityGroupRef.current.rotation.y, targetRotY, 4.0, delta);
    trinityGroupRef.current.rotation.z = THREE.MathUtils.damp(trinityGroupRef.current.rotation.z, targetRotZ, 4.0, delta);

    trinityGroupRef.current.scale.setScalar(
      THREE.MathUtils.damp(trinityGroupRef.current.scale.x, targetScale, 4.0, delta)
    );

    // Layer separation along Z for Exploded View
    if (isExploded) {
      const maxSpread = 1.35;
      const zOffsets = [
        separation * maxSpread * 1.5,
        separation * maxSpread * 0.75,
        0,
        -separation * maxSpread * 0.75,
        -separation * maxSpread * 1.5,
      ];

      const layerRefs = [l1Ref, l2Ref, l3Ref, l4Ref, l5Ref];
      layerRefs.forEach((ref, idx) => {
        if (!ref.current) return;
        ref.current.position.z = THREE.MathUtils.damp(ref.current.position.z, zOffsets[idx], 5.0, delta);

        const isTarget = focusedLayer === idx + 1 || hoveredLayer === idx + 1;
        const targetLayerScale = isTarget ? 1.05 : 1.0;
        ref.current.scale.setScalar(
          THREE.MathUtils.damp(ref.current.scale.x, targetLayerScale, 5.0, delta)
        );
      });

      // Animate flowing data packets
      if (packetMeshRef.current) {
        const time = state.clock.elapsedTime * 1.8;
        for (let i = 0; i < packetCount; i++) {
          const t = (time + (i / packetCount) * 4.0) % 4.0;
          const packetZ = THREE.MathUtils.lerp(zOffsets[0], zOffsets[4], t / 4.0);
          const packetX = Math.sin(t * 3.0 + i) * 0.4;
          const packetY = Math.cos(t * 2.5 + i) * 0.8;

          packetDummy.position.set(packetX, packetY, packetZ);
          packetDummy.scale.setScalar(0.045);
          packetDummy.updateMatrix();
          packetMeshRef.current.setMatrixAt(i, packetDummy.matrix);
        }
        packetMeshRef.current.instanceMatrix.needsUpdate = true;
      }
    }
  });

  // Trinity Depth Arc Base Positions:
  // Girvi (center-forward), JewelBill (left-back), AdvoKosh (right-back)
  // On mobile, collapse spacing
  const spreadX = isMobile ? 1.4 : 2.35;
  const spreadZ = isMobile ? -0.5 : -0.75;

  const isExplodedActive = manualExploded || (scrollProgress >= 0.16 && scrollProgress <= 0.44);

  return (
    <group ref={trinityGroupRef} position={[2.4, 0, 0]}>
      {/* =======================================================================
          SCENE 1: THE TRINITY HERO (All 3 Flagship Devices Active Simultaneously)
          Only visible when not exploded
      ======================================================================== */}
      {!isExplodedActive && (
        <group>
          {/* 1. Girvi (Center-Forward · Green #3DDC84) */}
          <SinglePhoneMesh
            id="girvi"
            texture={screenTextures.girvi}
            basePos={[0, 0, 0.1]}
            baseRot={[0, 0, 0]}
            accent="#3DDC84"
            isActive={activeAppId === "girvi"}
            isHovered={hoveredApp === "girvi"}
            onHover={() => {
              setHoveredApp("girvi");
              setCursorText("INSPECT GIRVI");
            }}
            onLeave={() => {
              setHoveredApp(null);
              setCursorText("");
            }}
            onClick={() => {
              proceduralAudio.tick();
              setActiveAppId("girvi");
            }}
            assemblyProgress={assemblyProgress}
          />

          {/* 2. JewelBill (Left-Back · Gold #F5C26B) */}
          <SinglePhoneMesh
            id="jewelbill"
            texture={screenTextures.jewelbill}
            basePos={[-spreadX, -0.06, spreadZ]}
            baseRot={[0, 0.28, 0.02]}
            accent="#F5C26B"
            isActive={activeAppId === "jewelbill"}
            isHovered={hoveredApp === "jewelbill"}
            onHover={() => {
              setHoveredApp("jewelbill");
              setCursorText("INSPECT JEWELBILL");
            }}
            onLeave={() => {
              setHoveredApp(null);
              setCursorText("");
            }}
            onClick={() => {
              proceduralAudio.tick();
              setActiveAppId("jewelbill");
            }}
            assemblyProgress={assemblyProgress}
          />

          {/* 3. AdvoKosh (Right-Back · Violet #7C5CFF) */}
          <SinglePhoneMesh
            id="advokosh"
            texture={screenTextures.advokosh}
            basePos={[spreadX, -0.06, spreadZ]}
            baseRot={[0, -0.28, -0.02]}
            accent="#7C5CFF"
            isActive={activeAppId === "advokosh"}
            isHovered={hoveredApp === "advokosh"}
            onHover={() => {
              setHoveredApp("advokosh");
              setCursorText("INSPECT ADVOKOSH");
            }}
            onLeave={() => {
              setHoveredApp(null);
              setCursorText("");
            }}
            onClick={() => {
              proceduralAudio.tick();
              setActiveAppId("advokosh");
            }}
            assemblyProgress={assemblyProgress}
          />
        </group>
      )}

      {/* =======================================================================
          SCENE 2: THE 5-LAYER EXPLODED ARCHITECTURE STACK
          The 3 phones converge into the central device, which separates along Z
      ======================================================================== */}
      <group ref={explodedStackRef} visible={isExplodedActive}>
        {/* Instanced Glowing Data Packet Flow */}
        <instancedMesh ref={packetMeshRef} args={[undefined, undefined, packetCount]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#3DDC84" transparent opacity={0.85} />
        </instancedMesh>

        {/* LAYER 1 (Front): Compose M3 UI & AMOLED Display */}
        <group
          ref={l1Ref}
          onPointerOver={() => setHoveredLayer(1)}
          onPointerOut={() => setHoveredLayer(null)}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(focusedLayer === 1 ? null : 1);
          }}
        >
          <RoundedBox args={[2.3, 4.85, 0.036]} radius={0.25} smoothness={8}>
            <primitive object={glassMaterials[0]} attach="material" />
          </RoundedBox>
          <mesh position={[0, 0, 0.036 / 2 + 0.003]}>
            <planeGeometry args={[2.3 - 0.14, 4.85 - 0.14]} />
            <meshBasicMaterial
              map={screenTextures[activeAppId] || screenTextures.girvi || undefined}
              toneMapped={false}
            />
          </mesh>
        </group>

        {/* LAYER 2: ViewModel & StateFlow Logic Board */}
        <group
          ref={l2Ref}
          onPointerOver={() => setHoveredLayer(2)}
          onPointerOut={() => setHoveredLayer(null)}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(focusedLayer === 2 ? null : 2);
          }}
        >
          <RoundedBox args={[2.3 - 0.08, 4.85 - 0.08, 0.036]} radius={0.25 * 0.9} smoothness={6}>
            <primitive object={glassMaterials[1]} attach="material" />
          </RoundedBox>
          <mesh position={[0, 0.3, 0.036 / 2 + 0.004]}>
            <boxGeometry args={[0.7, 0.7, 0.02]} />
            <meshStandardMaterial
              color="#141124"
              metalness={0.85}
              roughness={0.25}
              emissive="#7C5CFF"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>

        {/* LAYER 3: Room SQLite Persistence Matrix */}
        <group
          ref={l3Ref}
          onPointerOver={() => setHoveredLayer(3)}
          onPointerOut={() => setHoveredLayer(null)}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(focusedLayer === 3 ? null : 3);
          }}
        >
          <RoundedBox args={[2.3 - 0.08, 4.85 - 0.08, 0.036]} radius={0.25 * 0.9} smoothness={6}>
            <primitive object={glassMaterials[2]} attach="material" />
          </RoundedBox>
          <mesh position={[0, -0.3, 0.036 / 2 + 0.004]}>
            <boxGeometry args={[0.85, 0.85, 0.02]} />
            <meshStandardMaterial
              color="#0C151B"
              metalness={0.9}
              roughness={0.2}
              emissive="#22D3EE"
              emissiveIntensity={0.4}
            />
          </mesh>
        </group>

        {/* LAYER 4: SQLCipher 4.5.5 AES-256 Cryptographic Shield */}
        <group
          ref={l4Ref}
          onPointerOver={() => setHoveredLayer(4)}
          onPointerOut={() => setHoveredLayer(null)}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(focusedLayer === 4 ? null : 4);
          }}
        >
          <RoundedBox args={[2.3 - 0.08, 4.85 - 0.08, 0.036]} radius={0.25 * 0.9} smoothness={6}>
            <primitive object={glassMaterials[3]} attach="material" />
          </RoundedBox>
          <mesh position={[0, 0.1, 0.036 / 2 + 0.004]}>
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

        {/* LAYER 5 (Back): Titanium Chassis & StrongBox TEE Hardware Security */}
        <group
          ref={l5Ref}
          onPointerOver={() => setHoveredLayer(5)}
          onPointerOut={() => setHoveredLayer(null)}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(focusedLayer === 5 ? null : 5);
          }}
        >
          <RoundedBox args={[2.3, 4.85, 0.036]} radius={0.25} smoothness={8}>
            <meshStandardMaterial
              color="#12141A"
              metalness={0.95}
              roughness={0.16}
            />
          </RoundedBox>
          <mesh position={[0, -0.5, -0.036 / 2 - 0.004]}>
            <boxGeometry args={[0.5, 0.5, 0.02]} />
            <meshStandardMaterial
              color="#1E1210"
              metalness={0.9}
              roughness={0.2}
              emissive="#E05638"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
};
