"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { generateAppScreenTexture } from "@/lib/proceduralPhoneScreens";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const FlightDeckRail: React.FC = () => {
  const { scrollProgress, activeAppId, setActiveAppId } = useWorldStore();
  const railGroupRef = useRef<THREE.Group>(null);

  // 3 Flagship Apps on Rail
  const apps = useMemo(
    () => [
      { id: "girvi" as const, name: "Girvi · गिरवी", accent: "#3DDC84", posX: -3.2 },
      { id: "jewelbill" as const, name: "JewelBill · POS", accent: "#F5C26B", posX: 0.0 },
      { id: "advokosh" as const, name: "AdvoKosh · एडवोकोश", accent: "#7C5CFF", posX: 3.2 },
    ],
    []
  );

  const textures = useMemo(() => {
    return {
      girvi: generateAppScreenTexture("girvi"),
      jewelbill: generateAppScreenTexture("jewelbill"),
      advokosh: generateAppScreenTexture("advokosh"),
    };
  }, []);

  const deviceRefs = [
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
  ];

  useFrame((state, delta) => {
    if (!railGroupRef.current) return;

    // Visibility: Flight Deck lives in scrollProgress 0.42 to 0.64
    const inRange = scrollProgress >= 0.40 && scrollProgress <= 0.65;
    railGroupRef.current.visible = inRange;
    if (!inRange) return;

    const t = THREE.MathUtils.clamp((scrollProgress - 0.44) / 0.18, 0, 1);

    // Slide the rail horizontally according to scroll
    const targetRailX = THREE.MathUtils.lerp(2.8, -2.8, t);
    railGroupRef.current.position.x = THREE.MathUtils.damp(railGroupRef.current.position.x, targetRailX, 3.5, delta);

    // Subtle individual device rotations and hovering
    apps.forEach((app, idx) => {
      const g = deviceRefs[idx].current;
      if (g) {
        const isActive = activeAppId === app.id;
        const targetRotY = isActive ? Math.sin(state.clock.elapsedTime * 0.8) * 0.18 : 0;
        const targetScale = isActive ? 1.05 : 0.92;

        g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetRotY, 3.5, delta);
        g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, targetScale, 4.0, delta));
        g.position.y = Math.sin(state.clock.elapsedTime * 1.4 + idx * 1.5) * 0.12;
      }
    });
  });

  const width = 2.1;
  const height = 4.3;
  const depth = 0.14;
  const radius = 0.22;

  return (
    <group ref={railGroupRef} position={[0, 0, 0]}>
      {apps.map((app, idx) => (
        <group
          key={app.id}
          ref={deviceRefs[idx]}
          position={[app.posX, 0, 0]}
          onClick={(e) => {
            e.stopPropagation();
            setActiveAppId(app.id);
            proceduralAudio.shockwave();
          }}
        >
          {/* Chassis */}
          <RoundedBox args={[width, height, depth]} radius={radius} smoothness={6}>
            <meshStandardMaterial
              color="#12141A"
              metalness={0.9}
              roughness={0.25}
              emissive={app.accent}
              emissiveIntensity={0.06}
            />
          </RoundedBox>

          {/* Screen */}
          <mesh position={[0, 0, depth / 2 + 0.005]}>
            <planeGeometry args={[width - 0.12, height - 0.12]} />
            <meshBasicMaterial map={textures[app.id] || undefined} toneMapped={false} />
          </mesh>

          {/* Emissive Rim Halo */}
          <mesh position={[0, 0, depth / 2 + 0.002]}>
            <ringGeometry args={[width / 2 - 0.05, width / 2 - 0.02, 4]} />
            <meshBasicMaterial color={app.accent} transparent opacity={0.65} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

