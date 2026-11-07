import * as THREE from "three";
import { SectionId } from "@/store/useWorldStore";

export interface CameraTimelineFrame {
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
  roll: number;
  fov: number;
  section: SectionId;
  explodeDistance: number;
  encryptionSweep: number;
  flightDeckProgress: number;
  labProgress: number;
  proofProgress: number;
  aboutProgress: number;
}

// Keyframes matching the Master Scroll Timeline specification:
// 0.00 - 0.06: Boot sequence & GPGPU rain
// 0.06 - 0.22: Hero Phone Assembly & Proof Stats
// 0.22 - 0.44: Exploded 5-Layer Glass Stack & Encryption Sweep
// 0.44 - 0.62: Flagship Work Flight Deck
// 0.62 - 0.76: The Lab Constellation (Force-directed graph)
// 0.76 - 0.88: How I Build (Proof IDE & Float Drift Engine)
// 0.88 - 0.94: About & Sovereign Story (Why India's Trades)
// 0.94 - 0.97: Verified Credentials Strip
// 0.97 - 1.00: Deploy Beacon & Terminal Inquiry
export function getTimelineFrame(p: number, velocity = 0): CameraTimelineFrame {
  const clampedP = Math.max(0, Math.min(1, p));

  const frame: CameraTimelineFrame = {
    position: new THREE.Vector3(0, 0, 7.5),
    lookAt: new THREE.Vector3(0, 0, 0),
    roll: 0,
    fov: 42,
    section: "hero",
    explodeDistance: 0,
    encryptionSweep: 0,
    flightDeckProgress: 0,
    labProgress: 0,
    proofProgress: 0,
    aboutProgress: 0,
  };

  if (clampedP < 0.06) {
    // Scene 0: Boot
    frame.section = "boot";
    frame.position.set(0, 0, 7.8);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 45;
  } else if (clampedP < 0.22) {
    // Scene 1: Hero Device Assembles
    const t = (clampedP - 0.06) / 0.16;
    frame.section = "hero";
    frame.position.set(
      THREE.MathUtils.lerp(0.4, 1.4, t),
      THREE.MathUtils.lerp(0.0, 0.2, t),
      THREE.MathUtils.lerp(7.0, 6.2, t)
    );
    frame.lookAt.set(0.6, 0, 0);
    frame.fov = 42;
  } else if (clampedP < 0.44) {
    // Scene 2: Exploded Stack
    const t = (clampedP - 0.22) / 0.22;
    frame.section = "architecture";
    frame.explodeDistance = THREE.MathUtils.smootherstep(t, 0.05, 0.95);
    frame.encryptionSweep = THREE.MathUtils.clamp((t - 0.4) / 0.5, 0, 1);

    frame.position.set(
      THREE.MathUtils.lerp(1.2, 0.2, t),
      THREE.MathUtils.lerp(0.2, -0.4, t),
      THREE.MathUtils.lerp(6.2, 5.6, t)
    );
    frame.lookAt.set(0, -0.2, 0);
    frame.roll = THREE.MathUtils.lerp(0, -0.04, t);
    frame.fov = 39;
  } else if (clampedP < 0.62) {
    // Scene 3: Flagship Flight Deck
    const t = (clampedP - 0.44) / 0.18;
    frame.section = "flightdeck";
    frame.flightDeckProgress = t;

    frame.position.set(
      THREE.MathUtils.lerp(-2.2, 2.2, t),
      0.15,
      THREE.MathUtils.lerp(6.8, 6.4, Math.sin(t * Math.PI))
    );
    frame.lookAt.set(0, 0, 0);
    frame.roll = Math.sin(t * Math.PI * 2) * 0.035;
    frame.fov = 43;
  } else if (clampedP < 0.76) {
    // Scene 4: The Lab Constellation
    const t = (clampedP - 0.62) / 0.14;
    frame.section = "lab";
    frame.labProgress = t;

    frame.position.set(0, 0.6, THREE.MathUtils.lerp(8.5, 7.5, t));
    frame.lookAt.set(0, 0, 0);
    frame.fov = 48;
  } else if (clampedP < 0.88) {
    // Scene 5: How I Build (Proof IDE)
    const t = (clampedP - 0.76) / 0.12;
    frame.section = "proof";
    frame.proofProgress = t;

    frame.position.set(0, 0.2, 6.8);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 41;
  } else if (clampedP < 0.94) {
    // Scene 6: About (Why India's Trades)
    const t = (clampedP - 0.88) / 0.06;
    frame.section = "about";
    frame.aboutProgress = t;

    frame.position.set(0.6, 0.1, 6.2);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 42;
  } else if (clampedP < 0.97) {
    // Scene 7: Credentials Strip
    frame.section = "credentials";
    frame.position.set(0, -0.3, 6.5);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 44;
  } else {
    // Scene 8: Deploy Beacon & World Artifact
    const t = (clampedP - 0.97) / 0.03;
    frame.section = "contact";
    frame.position.set(0, THREE.MathUtils.lerp(0.8, 2.2, t), THREE.MathUtils.lerp(7.0, 14.5, t));
    frame.lookAt.set(0, 0, -2.0);
    frame.fov = 54;
  }

  // Micro-shake scaled by velocity
  if (Math.abs(velocity) > 0.005) {
    const shake = Math.min(Math.abs(velocity) * 0.08, 0.06);
    frame.position.x += (Math.random() - 0.5) * shake;
    frame.position.y += (Math.random() - 0.5) * shake;
  }

  return frame;
}
