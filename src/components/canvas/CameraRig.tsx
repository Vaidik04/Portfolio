"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";

export const CameraRig: React.FC = () => {
  const { scrollProgress } = useWorldStore();
  const { camera } = useThree();

  // Target positions along the continuous flight path
  const targetCamPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const p = scrollProgress;

    // Flight Timeline interpolation
    if (p < 0.2) {
      // Hero: Zoomed on Assembling Phone
      const t = p / 0.2;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(0, 1.2, t),
        THREE.MathUtils.lerp(0, 0.4, t),
        THREE.MathUtils.lerp(7.5, 4.5, t)
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p < 0.38) {
      // Into the Phone Screen Portal (About)
      const t = (p - 0.2) / 0.18;
      targetCamPos.current.set(0, 0, THREE.MathUtils.lerp(4.5, -2, t));
      targetLookAt.current.set(0, 0, -15);
    } else if (p < 0.6) {
      // Tech Galaxy View
      const t = (p - 0.38) / 0.22;
      targetCamPos.current.set(
        Math.sin(t * Math.PI) * 3,
        THREE.MathUtils.lerp(0, 1.5, t),
        THREE.MathUtils.lerp(6, 8, t)
      );
      targetLookAt.current.set(0, 0, 0);
    } else if (p < 0.82) {
      // Project Flight Deck Rails
      const t = (p - 0.6) / 0.22;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(-3, 3, t),
        THREE.MathUtils.lerp(1.2, -0.5, t),
        7
      );
      targetLookAt.current.set(0, 0, 0);
    } else {
      // 3D Architecture & Deploy Core Pullback
      const t = (p - 0.82) / 0.18;
      targetCamPos.current.set(0, THREE.MathUtils.lerp(0, 2.5, t), THREE.MathUtils.lerp(7, 16, t));
      targetLookAt.current.set(0, 0, 0);
    }

    // Parallax mouse tilt
    const pointer = state.pointer;
    const parallaxX = pointer.x * 0.4;
    const parallaxY = pointer.y * 0.3;

    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      targetCamPos.current.x + parallaxX,
      3,
      delta
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      targetCamPos.current.y + parallaxY,
      3,
      delta
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      targetCamPos.current.z,
      3,
      delta
    );

    camera.lookAt(targetLookAt.current);
  });

  return null;
};

