"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { PROJECTS } from "@/data/projects";

export const ProjectFlightDeck: React.FC = () => {
  const { scrollProgress, setCursorText, setActive3DProjectId } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  // Take top flagship apps for the 3D flight deck
  const flightDeckProjects = useMemo(() => {
    return PROJECTS.filter(
      (p) => p.badgeType === "playstore" || p.id === "swarmos" || p.id === "qroute" || p.id === "skycanvas"
    ).slice(0, 5);
  }, []);

  const cardRefs = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during Projects stage: scrollProgress ~ 0.50 - 0.72
    const inRange = scrollProgress >= 0.50 && scrollProgress <= 0.72;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Normalize progress within project zone (0 to 1)
    const localProgress = THREE.MathUtils.clamp((scrollProgress - 0.50) / 0.22, 0, 1);
    const railX = (localProgress - 0.5) * -18;

    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, railX, 3.5, delta);
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * 0.12;

    // Banking roll
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      (localProgress - 0.5) * 0.16,
      3,
      delta
    );
  });

  return (
    <group ref={groupRef} position={[0, 0, -1.2]}>
      {flightDeckProjects.map((project, idx) => {
        const xOffset = (idx - 2) * 4.6;
        const zOffset = -Math.abs(idx - 2) * 1.6;
        const color = project.accentColor || "#3DDC84";

        return (
          <group
            key={project.id}
            position={[xOffset, 0, zOffset]}
            ref={(el) => {
              if (el) cardRefs.current[idx] = el;
            }}
            onPointerOver={() => {
              setCursorText("VIEW");
              setActive3DProjectId(project.id);
            }}
            onPointerOut={() => setCursorText("")}
          >
            {/* Holographic Device Slab */}
            <mesh>
              <boxGeometry args={[2.8, 4.4, 0.1]} />
              <meshStandardMaterial
                color="#060A14"
                roughness={0.15}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.25}
              />
            </mesh>

            {/* Glowing Accent Border Frame */}
            <mesh position={[0, 0, 0.06]}>
              <boxGeometry args={[2.86, 4.46, 0.02]} />
              <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
            </mesh>

            {/* Floating Top Status Beacon */}
            <mesh position={[0, 1.95, 0.1]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>

            {/* 3D Floating Project Badge */}
            <Html center distanceFactor={13} pointerEvents="none">
              <div className="flex flex-col items-center pointer-events-none select-none -translate-y-28">
                <div className="px-2.5 py-1 rounded-full bg-[#05060A]/90 border border-white/15 backdrop-blur-md text-[9px] font-mono font-bold text-typography-primary whitespace-nowrap shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  <span>{project.name}</span>
                </div>
                <span className="text-[8px] font-mono text-typography-muted whitespace-nowrap mt-0.5">
                  {project.badge}
                </span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};
