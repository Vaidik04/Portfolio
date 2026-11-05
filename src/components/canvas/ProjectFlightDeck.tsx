"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { PROJECTS } from "@/data/projects";

export const ProjectFlightDeck: React.FC = () => {
  const { scrollProgress, setCursorText, setActive3DProjectId } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);

  // Take top commercial & flagship apps for the 3D flight deck
  const flightDeckProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.badgeType === "playstore" || p.id === "swarmos" || p.id === "qroute").slice(0, 5);
  }, []);

  const cardRefs = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during Projects stage: scrollProgress ~ 0.52 - 0.76
    const inRange = scrollProgress >= 0.48 && scrollProgress <= 0.78;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Normalize progress within project zone (0 to 1)
    const localProgress = THREE.MathUtils.clamp((scrollProgress - 0.48) / 0.28, 0, 1);
    const railX = (localProgress - 0.5) * -16; // Shift along curved rail

    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, railX, 4, delta);
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;

    // Subtle bank/roll based on movement
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      (localProgress - 0.5) * 0.18,
      3,
      delta
    );
  });

  return (
    <group ref={groupRef} position={[0, 0, -1]}>
      {flightDeckProjects.map((project, idx) => {
        const xOffset = (idx - 2) * 4.2;
        const zOffset = -Math.abs(idx - 2) * 1.5;
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
              <boxGeometry args={[2.8, 4.2, 0.12]} />
              <meshStandardMaterial
                color="#0A0E1A"
                roughness={0.2}
                metalness={0.8}
                emissive={color}
                emissiveIntensity={0.25}
              />
            </mesh>

            {/* Glowing Accent Border Frame */}
            <mesh position={[0, 0, 0.08]}>
              <boxGeometry args={[2.88, 4.28, 0.04]} />
              <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
            </mesh>

            {/* Glowing Status Dot */}
            <mesh position={[0, 1.85, 0.12]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};
