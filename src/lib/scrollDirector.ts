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

// Master Scroll Timeline: Rock-solid, cinematic camera trajectory without disorienting sideways swings
export function getTimelineFrame(p: number, velocity = 0): CameraTimelineFrame {
  const clampedP = Math.max(0, Math.min(1, p));

  const frame: CameraTimelineFrame = {
    position: new THREE.Vector3(0, 0, 7.2),
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

  if (clampedP < 0.16) {
    // Act I: Identity Hero & Sovereign Compute Core
    frame.section = "hero";
    frame.position.set(0, 0, 7.2);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 42;
  } else if (clampedP < 0.44) {
    // Act II: Selected Engineering Works Index
    const t = (clampedP - 0.16) / 0.28;
    frame.section = "flightdeck";
    frame.flightDeckProgress = t;
    frame.position.set(0, 0, THREE.MathUtils.lerp(7.2, 7.8, t));
    frame.lookAt.set(0, 0, 0);
    frame.fov = 42;
  } else if (clampedP < 0.72) {
    // Act III: Engineering Craft, Offline Cut & Exploded 5-Layer Stack
    const t = (clampedP - 0.44) / 0.28;
    frame.section = "architecture";
    frame.explodeDistance = THREE.MathUtils.smootherstep(t, 0.05, 0.95);
    frame.encryptionSweep = THREE.MathUtils.clamp((t - 0.25) / 0.6, 0, 1);

    frame.position.set(0, 0.15, THREE.MathUtils.lerp(7.8, 6.6, t));
    frame.lookAt.set(0, 0, 0);
    frame.fov = 40;
  } else if (clampedP < 0.88) {
    // Act IV: Orbital Constellation / About & Credentials
    const t = (clampedP - 0.72) / 0.16;
    frame.section = clampedP < 0.80 ? "lab" : "about";
    frame.labProgress = t;

    frame.position.set(0, 0.35, THREE.MathUtils.lerp(7.8, 7.2, t));
    frame.lookAt.set(0, 0, 0);
    frame.fov = 44;
  } else {
    // Act V: Contact Beacon
    const t = (clampedP - 0.88) / 0.12;
    frame.section = "contact";
    frame.position.set(0, 0, THREE.MathUtils.lerp(7.4, 6.7, t));
    frame.lookAt.set(0, 0, 0);
    frame.fov = 40;
  }

  return frame;
}
