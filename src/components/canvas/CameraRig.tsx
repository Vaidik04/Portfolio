"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { getTimelineFrame } from "@/lib/scrollDirector";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { qualityGovernor } from "@/lib/qualityGovernor";

export const CameraRig: React.FC = () => {
  const { scrollProgress, scrollVelocity, setActiveSection } = useWorldStore();
  const { camera } = useThree();

  const prevProgress = useRef(scrollProgress);
  const targetPos = useRef(new THREE.Vector3(0, 0, 7.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const now = performance.now();
    qualityGovernor.recordFrame(now);

    const p = scrollProgress;
    const v = scrollVelocity;

    // Trigger warp whoosh when velocity surges
    if (Math.abs(v) > 0.04) {
      proceduralAudio.warpWhoosh(Math.abs(v));
    }

    // Get interpolated keyframe from Master Scroll Timeline
    const frame = getTimelineFrame(p, v);
    setActiveSection(frame.section);

    targetPos.current.copy(frame.position);
    targetLookAt.current.copy(frame.lookAt);

    // Parallax pointer micro-movement
    const pointer = state.pointer;
    const parallaxX = pointer.x * 0.15;
    const parallaxY = pointer.y * 0.10;

    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      targetPos.current.x + parallaxX,
      3.8,
      delta
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      targetPos.current.y + parallaxY,
      3.8,
      delta
    );
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      targetPos.current.z,
      3.8,
      delta
    );

    currentLookAt.current.x = THREE.MathUtils.damp(
      currentLookAt.current.x,
      targetLookAt.current.x,
      3.8,
      delta
    );
    currentLookAt.current.y = THREE.MathUtils.damp(
      currentLookAt.current.y,
      targetLookAt.current.y,
      3.8,
      delta
    );
    currentLookAt.current.z = THREE.MathUtils.damp(
      currentLookAt.current.z,
      targetLookAt.current.z,
      3.8,
      delta
    );

    camera.lookAt(currentLookAt.current);

    // Z-axis roll
    camera.rotation.z = THREE.MathUtils.damp(camera.rotation.z, frame.roll, 4.0, delta);

    if (camera instanceof THREE.PerspectiveCamera) {
      // Fluid FOV adaptation: expand FOV on mobile portrait to prevent narrow zoom clipping
      const isPortrait = state.size.width < state.size.height;
      const targetFov = isPortrait ? frame.fov + 8 : frame.fov;

      camera.fov = THREE.MathUtils.damp(camera.fov, targetFov, 3.8, delta);
      camera.updateProjectionMatrix();
    }
  });

  return null;
};
