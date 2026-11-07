"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PROJECTS } from "@/data/projects";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface NodePoint {
  id: string;
  name: string;
  category: string;
  pos: [number, number, number];
  color: string;
  connections: number[];
}

export const LabConstellation: React.FC = () => {
  const { scrollProgress, setCursorText } = useWorldStore();
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Categorize & build 3D constellation layout
  const { nodes, linePositions } = useMemo(() => {
    const categoryColors: Record<string, string> = {
      commercial: "#3DDC84",
      systems: "#7C5CFF",
      ai: "#22D3EE",
      tools: "#F5C26B",
    };

    const nodePoints: NodePoint[] = PROJECTS.map((p, i) => {
      // Cluster by category in 3D spherical sectors
      const angle = (i / PROJECTS.length) * Math.PI * 2;
      const radius = 2.4 + (i % 3) * 0.8;
      const yOffset = ((i % 5) - 2) * 0.8;

      let catOffsetAngle = 0;
      if (p.category === "commercial") catOffsetAngle = 0;
      else if (p.category === "systems") catOffsetAngle = Math.PI * 0.5;
      else if (p.category === "ai") catOffsetAngle = Math.PI;
      else catOffsetAngle = Math.PI * 1.5;

      const finalAngle = angle * 0.4 + catOffsetAngle;
      const x = Math.cos(finalAngle) * radius;
      const z = Math.sin(finalAngle) * radius * 0.8;
      const y = yOffset;

      return {
        id: p.id,
        name: p.name,
        category: p.category,
        pos: [x, y, z],
        color: categoryColors[p.category] || "#3DDC84",
        connections: [],
      };
    });

    // Build connections between projects sharing technologies (e.g. Kotlin, Room, OpenCV)
    const linesArr: number[] = [];
    for (let i = 0; i < nodePoints.length; i++) {
      for (let j = i + 1; j < nodePoints.length; j++) {
        const p1 = PROJECTS[i];
        const p2 = PROJECTS[j];
        const shared = p1.techStack.filter((t) => p2.techStack.includes(t));
        if (shared.length >= 2 || (p1.category === p2.category && Math.random() < 0.25)) {
          linesArr.push(nodePoints[i].pos[0], nodePoints[i].pos[1], nodePoints[i].pos[2]);
          linesArr.push(nodePoints[j].pos[0], nodePoints[j].pos[1], nodePoints[j].pos[2]);
          nodePoints[i].connections.push(j);
          nodePoints[j].connections.push(i);
        }
      }
    }

    return {
      nodes: nodePoints,
      linePositions: new Float32Array(linesArr),
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Visibility: Lab Constellation lives in scrollProgress 0.60 to 0.78
    const inRange = scrollProgress >= 0.58 && scrollProgress <= 0.80;
    groupRef.current.visible = inRange;
    if (!inRange) return;

    // Gentle orbital rotation
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Interconnecting Tech Dependency Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3DDC84" transparent opacity={0.16} depthWrite={false} />
      </lineSegments>

      {/* Constellation Nodes */}
      {nodes.map((node, i) => {
        const isHovered = hoveredNode === node.id;
        return (
          <group
            key={node.id}
            position={node.pos}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredNode(node.id);
              setCursorText(node.name.slice(0, 10));
              proceduralAudio.tick();
            }}
            onPointerOut={() => {
              setHoveredNode(null);
              setCursorText("");
            }}
            onClick={(e) => {
              e.stopPropagation();
              proceduralAudio.shockwave();
              window.location.href = `/projects/${node.id}`;
            }}
          >
            <mesh>
              <sphereGeometry args={[isHovered ? 0.14 : 0.08, 16, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={isHovered ? 2.2 : 0.8}
              />
            </mesh>
            {isHovered && (
              <mesh>
                <ringGeometry args={[0.2, 0.25, 32]} />
                <meshBasicMaterial color={node.color} transparent opacity={0.7} side={THREE.DoubleSide} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
};
