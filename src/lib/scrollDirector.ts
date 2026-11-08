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

  if (clampedP < 0.12) {
    // Scene 1: Hero Device
    frame.section = "hero";
    frame.position.set(0, 0, 7.2);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 42;
  } else if (clampedP < 0.35) {
    // Scene 2: Exploded 5-Layer Stack
    const t = (clampedP - 0.12) / 0.23;
    frame.section = "architecture";
    frame.explodeDistance = THREE.MathUtils.smootherstep(t, 0.05, 0.95);
    frame.encryptionSweep = THREE.MathUtils.clamp((t - 0.3) / 0.6, 0, 1);

    // Subtle forward dolly into the exploded layers
    frame.position.set(0, 0, THREE.MathUtils.lerp(7.2, 6.5, t));
    frame.lookAt.set(0.2, 0, 0);
    frame.fov = 40;
  } else if (clampedP < 0.52) {
    // Scene 3: Flagship Work Flight Deck
    const t = (clampedP - 0.35) / 0.17;
    frame.section = "flightdeck";
    frame.flightDeckProgress = t;

    frame.position.set(0, 0, 7.0);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 42;
  } else if (clampedP < 0.70) {
    // Scene 4: The Lab Constellation
    const t = (clampedP - 0.52) / 0.18;
    frame.section = "lab";
    frame.labProgress = t;

    frame.position.set(0, 0.4, THREE.MathUtils.lerp(7.8, 7.2, t));
    frame.lookAt.set(0, 0, 0);
    frame.fov = 44;
  } else if (clampedP < 0.84) {
    // Scene 5 & 6: Proof & Sovereign Ethos
    frame.section = clampedP < 0.77 ? "proof" : "about";
    frame.position.set(0, 0, 7.5);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 42;
  } else if (clampedP < 0.94) {
    // Scene 7: Credentials
    frame.section = "credentials";
    frame.position.set(0, 0, 7.5);
    frame.lookAt.set(0, 0, 0);
    frame.fov = 42;
  } else {
    // Scene 8: Deploy Beacon
    const t = (clampedP - 0.94) / 0.06;
    frame.section = "contact";
    frame.position.set(0, 0, THREE.MathUtils.lerp(7.5, 6.6, t));
    frame.lookAt.set(0, 0, 0);
    frame.fov = 40;
  }

  return frame;
}
