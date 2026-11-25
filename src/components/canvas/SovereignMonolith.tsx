"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { createGlassSlabMaterial } from "./shaders/glassSlabMaterial";
import { ShockwaveShader } from "./shaders/shockwaveRingMaterial";

interface SwarmNodeDef {
  radius: number;
  speed: number;
  phase: number;
  tiltX: number;
  tiltZ: number;
  scale: number;
}

const SWARM_NODES: SwarmNodeDef[] = [
  { radius: 1.65, speed: 0.45, phase: 0.0, tiltX: 0.35, tiltZ: 0.15, scale: 0.09 },
  { radius: 1.85, speed: -0.32, phase: 1.2, tiltX: -0.45, tiltZ: 0.25, scale: 0.075 },
  { radius: 2.05, speed: 0.28, phase: 2.4, tiltX: 0.2, tiltZ: -0.4, scale: 0.085 },
  { radius: 1.55, speed: -0.5, phase: 3.1, tiltX: 0.65, tiltZ: 0.1, scale: 0.07 },
  { radius: 2.2, speed: 0.22, phase: 4.2, tiltX: -0.25, tiltZ: 0.55, scale: 0.09 },
  { radius: 1.75, speed: -0.38, phase: 5.0, tiltX: 0.15, tiltZ: -0.25, scale: 0.08 },
];

const LAYER_COLORS = [
  { base: "#0D121D", edge: "#38BDF8", cipher: "#38BDF8" },
  { base: "#0D121D", edge: "#818CF8", cipher: "#818CF8" },
  { base: "#0C1418", edge: "#22D3EE", cipher: "#22D3EE" },
  { base: "#12101D", edge: "#3DDC84", cipher: "#7C5CFF" },
  { base: "#0E1614", edge: "#3DDC84", cipher: "#3DDC84" },
];

/**
 * SovereignMonolith: The architectural 3D centerpiece representing Vaidik Gandhi's
 * multi-disciplinary engineering (Distributed Swarms, Optimization, & Sovereign Cores).
 */
export const SovereignMonolith: React.FC = () => {
  const {
    scrollProgress,
    scrollVelocity,
    isPlugPulled,
    isOffline,
    manualExploded,
    focusedLayer,
    setCursorText,
  } = useWorldStore();

  const { size } = useThree();
  const isPortrait = size.width < size.height;

  const rootRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);
  const innerDieRef = useRef<THREE.Mesh>(null);
  const cloudRingRef = useRef<THREE.Mesh>(null);
  const stackGroupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const meshLinesRef = useRef<THREE.LineSegments>(null);

  const [hovered, setHovered] = useState(false);
  const shockwaveRef = useRef(0);
  const isDisconnected = isPlugPulled || isOffline;

  // Pre-allocated vectors/buffers to maintain zero GC churn inside useFrame
  const linePositions = useMemo(() => new Float32Array(SWARM_NODES.length * 6), []);

  // Custom GlassSlab materials for the 5-layer architecture explosion
  const slabMaterials = useMemo(
    () =>
      LAYER_COLORS.map((c) =>
        createGlassSlabMaterial({
          baseColor: c.base,
          edgeColor: c.edge,
          cipherColor: c.cipher,
        })
      ),
    []
  );

  // Shockwave shader material
  const shockwaveMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.clone(ShockwaveShader.uniforms),
        vertexShader: ShockwaveShader.vertexShader,
        fragmentShader: ShockwaveShader.fragmentShader,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    []
  );

  useEffect(() => {
    return () => {
      slabMaterials.forEach((m) => m.dispose());
      shockwaveMaterial.dispose();
    };
  }, [slabMaterials, shockwaveMaterial]);

  const triggerPulse = () => {
    proceduralAudio.shockwave();
    shockwaveRef.current = 0.01;
  };

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const clampedDelta = Math.min(delta, 0.05);

    // 1. Visibility window: show cleanly in the Hero right stage and manual Exploded Stack mode
    if (rootRef.current) {
      const visibleInHero = scrollProgress <= 0.14;
      rootRef.current.visible = visibleInHero || manualExploded;
      if (!rootRef.current.visible) return;

      const isCompact = isPortrait || size.width < 1080;
      const targetX = manualExploded ? 0 : isCompact ? 1.5 : 2.55;
      const targetY = manualExploded ? 0 : 0.08;
      const targetZ = manualExploded ? -0.8 : -3.6;

      rootRef.current.position.x = THREE.MathUtils.damp(rootRef.current.position.x, targetX, 4.5, clampedDelta);
      rootRef.current.position.y = THREE.MathUtils.damp(rootRef.current.position.y, targetY, 4.5, clampedDelta);
      rootRef.current.position.z = THREE.MathUtils.damp(rootRef.current.position.z, targetZ, 4.5, clampedDelta);

      const baseScale = manualExploded ? 0.85 : isCompact ? 0.42 : 0.72;
      const nextScale = THREE.MathUtils.damp(rootRef.current.scale.x, baseScale, 5, clampedDelta);
      rootRef.current.scale.setScalar(nextScale);
    }

    // 2. Monolith Core Rotation & Velocity Coupling
    const velocityBoost = Math.min(Math.abs(scrollVelocity) * 0.18, 2.5);
    if (coreRef.current) {
      coreRef.current.rotation.y += clampedDelta * (0.22 + velocityBoost);
      coreRef.current.rotation.x = Math.sin(t * 0.35) * 0.14;
    }
    if (innerDieRef.current) {
      innerDieRef.current.rotation.y -= clampedDelta * (0.45 + velocityBoost);
      innerDieRef.current.rotation.z += clampedDelta * 0.3;
    }

    // 3. Outer Cloud Relay Ring reacts to "Cut the Wire / Pull the Plug"
    if (cloudRingRef.current) {
      if (!isDisconnected) {
        cloudRingRef.current.rotation.z += clampedDelta * 0.35;
      }
    }

    // 4. Update orbiting SwarmOS nodes & P2P vector edges
    for (let i = 0; i < SWARM_NODES.length; i++) {
      const def = SWARM_NODES[i];
      const angle = t * def.speed + def.phase;
      const nx = Math.cos(angle) * def.radius;
      const nz = Math.sin(angle) * def.radius;
      const ny = Math.sin(angle + def.tiltX) * 0.55 + Math.cos(angle * 0.8) * def.tiltZ;

      const mesh = nodeRefs.current[i];
      if (mesh) {
        mesh.position.set(nx, ny, nz);
        mesh.rotation.x = t * 0.8 + i;
        mesh.rotation.y = t * 0.6;
      }

      // Connect each node cleanly to core center (0,0,0)
      const baseIdx = i * 6;
      linePositions[baseIdx] = 0;
      linePositions[baseIdx + 1] = 0;
      linePositions[baseIdx + 2] = 0;
      linePositions[baseIdx + 3] = nx;
      linePositions[baseIdx + 4] = ny;
      linePositions[baseIdx + 5] = nz;
    }

    if (meshLinesRef.current) {
      const attr = meshLinesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      attr.needsUpdate = true;
    }

    // 5. Exploded 5-Layer Architecture Glass Slabs (active in Craft/Architecture or when manually toggled)
    const inArchZone = (scrollProgress >= 0.44 && scrollProgress <= 0.72) || manualExploded;
    if (stackGroupRef.current) {
      stackGroupRef.current.visible = inArchZone;
      if (inArchZone) {
        const children = stackGroupRef.current.children;
        for (let i = 0; i < children.length; i++) {
          const slab = children[i];
          const layerOffset = (2 - i) * 0.42;
          const isFocused = focusedLayer === i + 1;
          const targetZ = isFocused ? 0.55 : 0;
          slab.position.y = THREE.MathUtils.damp(slab.position.y, layerOffset, 5, clampedDelta);
          slab.position.z = THREE.MathUtils.damp(slab.position.z, targetZ, 5, clampedDelta);
        }

        slabMaterials.forEach((mat, idx) => {
          mat.uniforms.uTime.value = t;
          // Highlight Cryptographic Boundary (Layer 4, idx 3) with encryption sweep shader
          mat.uniforms.uEncryptionSweep.value = idx === 3 ? (Math.sin(t * 1.4) * 0.5 + 0.5) : 0;
        });
      }
    }

    // 6. Shockwave Pulse Expansion
    if (shockwaveRef.current > 0) {
      shockwaveRef.current += clampedDelta * 1.4;
      shockwaveMaterial.uniforms.uRadius.value = shockwaveRef.current;
      if (shockwaveRef.current > 0.65) {
        shockwaveRef.current = 0;
        shockwaveMaterial.uniforms.uRadius.value = 0;
      }
    }
  });

  const activeWireColor = isDisconnected ? "#3DDC84" : "#38BDF8";

  return (
    <group ref={rootRef}>
      {/* Central Compute Core + Swarm Assembly */}
      <group
        ref={coreRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          setCursorText("PULSE");
        }}
        onPointerOut={() => {
          setHovered(false);
          setCursorText("");
        }}
        onClick={(e) => {
          e.stopPropagation();
          triggerPulse();
        }}
      >
        {/* Outer Refractive Glass Monolith */}
        <mesh>
          <icosahedronGeometry args={[1.05, 0]} />
          <meshPhysicalMaterial
            color="#0B0F19"
            metalness={0.25}
            roughness={0.14}
            transmission={0.55}
            thickness={1.4}
            ior={1.45}
            clearcoat={1}
          />
        </mesh>

        {/* Crisp Vector Lattice Shell */}
        <mesh scale={1.06}>
          <icosahedronGeometry args={[1.05, 0]} />
          <meshBasicMaterial
            color={activeWireColor}
            wireframe
            transparent
            opacity={scrollProgress > 0.16 ? 0.12 : isDisconnected ? 0.45 : 0.26}
          />
        </mesh>

        {/* Inner Hardware Silicon Die */}
        <mesh ref={innerDieRef}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial
            color="#111827"
            metalness={0.92}
            roughness={0.18}
            emissive={activeWireColor}
            emissiveIntensity={isDisconnected ? 1.4 : 0.75}
          />
        </mesh>

        {/* Outer Cloud Link Ring — turns crimson & dims when plug is pulled */}
        <mesh ref={cloudRingRef} rotation={[Math.PI / 2.6, 0.25, 0]}>
          <torusGeometry args={[2.35, 0.008, 12, 96]} />
          <meshBasicMaterial
            color={isDisconnected ? "#F43F5E" : "#818CF8"}
            transparent
            opacity={isDisconnected ? 0.18 : 0.45}
          />
        </mesh>

        {/* Inner Local Sovereign Orbit Ring */}
        <mesh rotation={[-Math.PI / 3.2, -0.2, 0]}>
          <torusGeometry args={[1.42, 0.006, 12, 80]} />
          <meshBasicMaterial
            color="#3DDC84"
            transparent
            opacity={isDisconnected ? 0.7 : 0.25}
          />
        </mesh>

        {/* Orbiting SwarmOS / AI Nodes */}
        {SWARM_NODES.map((node, i) => (
          <mesh
            key={i}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
          >
            <octahedronGeometry args={[node.scale, 0]} />
            <meshStandardMaterial
              color="#0F172A"
              emissive={isDisconnected ? "#3DDC84" : i % 2 === 0 ? "#38BDF8" : "#3DDC84"}
              emissiveIntensity={isDisconnected ? 1.5 : 0.9}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        ))}

        {/* Dynamic Local Mesh Dependency Lines */}
        <lineSegments ref={meshLinesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={SWARM_NODES.length * 2}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={activeWireColor}
            transparent
            opacity={isDisconnected ? 0.35 : 0.16}
            depthWrite={false}
          />
        </lineSegments>
      </group>

      {/* 5-Layer Translucent Glass Architecture Slabs (Visible in Act III / Manual Explode) */}
      <group ref={stackGroupRef} visible={false} rotation={[0.35, -0.35, 0]}>
        {slabMaterials.map((mat, idx) => (
          <mesh key={idx} material={mat} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[2.1, 2.1]} />
          </mesh>
        ))}
      </group>

      {/* Floor Interaction Shockwave Plane */}
      <mesh
        position={[0, -1.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={shockwaveMaterial}
      >
        <planeGeometry args={[9, 9]} />
      </mesh>
    </group>
  );
};
