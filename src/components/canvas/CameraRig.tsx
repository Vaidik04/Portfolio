"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { sounds } from "@/lib/sound";

export const CameraRig: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const { camera } = useThree();

  const targetCamPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const prevProgress = useRef(0);
  const lastWarpTime = useRef(0);

  useFrame((state, delta) => {
    const p = scrollProgress;
    const progressVelocity = Math.abs(p - prevProgress.current) / Math.max(delta, 0.001);
    prevProgress.current = p;

    const now = state.clock.getElapsedTime();
    if (progressVelocity > 1.8 && now - lastWarpTime.current > 1.2) {
      sounds.warp();
      lastWarpTime.current = now;
    }

    if (p < 0.18) {
      // Hero: Zoomed focus on 3D device & satellites
      const t = p / 0.18;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(0, 0.8, t),
        THREE.MathUtils.lerp(0, 0.2, t),
        THREE.MathUtils.lerp(7.5, 5.5, t)
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p < 0.36) {
      // Tunnel Dive (About): Flight through the hexagonal code portal
      const t = (p - 0.18) / 0.18;
      targetCamPos.current.set(0, 0, THREE.MathUtils.lerp(5.5, -2.5, t));
      targetLookAt.current.set(0, 0, -18);
    } else if (p < 0.54) {
      // Skill Galaxy: Orbital panoramic view of the node constellation
      const t = (p - 0.36) / 0.18;
      targetCamPos.current.set(
        Math.sin(t * Math.PI) * 3.2,
        THREE.MathUtils.lerp(0, 1.2, t),
        THREE.MathUtils.lerp(6.5, 7.8, t)
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p < 0.72) {
      // Project Flight Deck: Banking along the project rail
      const t = (p - 0.54) / 0.18;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(-3.0, 3.0, t),
        THREE.MathUtils.lerp(1.0, -0.4, t),
        7.0
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p < 0.86) {
      // 3D Architecture: Close-up inspection of MVVM pipelines and traveling pulses
      const t = (p - 0.72) / 0.14;
      targetCamPos.current.set(
        0,
        THREE.MathUtils.lerp(0.5, 0, t),
        THREE.MathUtils.lerp(6.8, 5.8, t)
      );
      targetLookAt.current.set(0, 0, -1.5);
    } else {
      // Final Deploy / Pullback: Dramatic pull back to reveal the cyber globe
      const t = (p - 0.86) / 0.14;
      targetCamPos.current.set(
        0,
        THREE.MathUtils.lerp(0, 1.8, t),
        THREE.MathUtils.lerp(6.5, 14.0, t)
      );
      targetLookAt.current.set(0, 0, -2);
    }

    // Parallax mouse tilt
    const pointer = state.pointer;
    const parallaxX = pointer.x * 0.45;
    const parallaxY = pointer.y * 0.35;

    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      targetCamPos.current.x + parallaxX,
      3.2,
      delta
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      targetCamPos.current.y + parallaxY,
      3.2,
      delta
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      targetCamPos.current.z,
      3.2,
      delta
    );

    camera.lookAt(targetLookAt.current);
  });

  return null;
};
