// Quality Governor & Hardware Capability Detector
// Detects WebGPU, WebGL2, GPU tier, and manages dynamic performance scaling

export type QualityTier = "ultra" | "high" | "medium" | "low" | "fallback2d";

export interface QualityProfile {
  tier: QualityTier;
  hasWebGPU: boolean;
  hasWebGL2: boolean;
  dpr: number;
  maxParticles: number;
  enablePostProcessing: boolean;
  enableBloom: boolean;
  enableDoF: boolean;
  enableChromaticAberration: boolean;
  enableVolumetricShafts: boolean;
  shadowMapSize: number;
  isReducedMotion: boolean;
}

class QualityGovernorService {
  private profile: QualityProfile = {
    tier: "high",
    hasWebGPU: false,
    hasWebGL2: true,
    dpr: 1.5,
    maxParticles: 50000,
    enablePostProcessing: true,
    enableBloom: true,
    enableDoF: true,
    enableChromaticAberration: true,
    enableVolumetricShafts: true,
    shadowMapSize: 1024,
    isReducedMotion: false,
  };

  private frameTimes: number[] = [];
  private lastTime = 0;
  private isCalibrated = false;

  constructor() {
    if (typeof window !== "undefined") {
      this.init();
    }
  }

  private init() {
    // 1. Check prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.profile.isReducedMotion = reducedMotionQuery.matches;

    // 2. Detect WebGPU
    this.profile.hasWebGPU = "gpu" in navigator && Boolean((navigator as any).gpu);

    // 3. Detect WebGL2
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    this.profile.hasWebGL2 = Boolean(gl);

    // 4. Fallback check
    if (!this.profile.hasWebGL2 && !this.profile.hasWebGPU) {
      this.profile.tier = "fallback2d";
      this.applyTierSettings("fallback2d");
      return;
    }

    if (this.profile.isReducedMotion) {
      this.profile.tier = "low";
      this.applyTierSettings("low");
      return;
    }

    // 5. Device heuristics
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const deviceMemory = (navigator as any).deviceMemory || 4;

    if (this.profile.hasWebGPU && hardwareConcurrency >= 8 && deviceMemory >= 8) {
      this.profile.tier = "ultra";
    } else if (isMobile) {
      this.profile.tier = deviceMemory >= 6 ? "medium" : "low";
    } else if (hardwareConcurrency <= 4 || deviceMemory <= 4) {
      this.profile.tier = "medium";
    } else {
      this.profile.tier = "high";
    }

    this.applyTierSettings(this.profile.tier);
  }

  private applyTierSettings(tier: QualityTier) {
    this.profile.tier = tier;
    switch (tier) {
      case "ultra":
        this.profile.dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2.0) : 2.0;
        this.profile.maxParticles = 80000;
        this.profile.enablePostProcessing = true;
        this.profile.enableBloom = true;
        this.profile.enableDoF = true;
        this.profile.enableChromaticAberration = true;
        this.profile.enableVolumetricShafts = true;
        this.profile.shadowMapSize = 2048;
        break;
      case "high":
        this.profile.dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.75) : 1.5;
        this.profile.maxParticles = 40000;
        this.profile.enablePostProcessing = true;
        this.profile.enableBloom = true;
        this.profile.enableDoF = false;
        this.profile.enableChromaticAberration = true;
        this.profile.enableVolumetricShafts = true;
        this.profile.shadowMapSize = 1024;
        break;
      case "medium":
        this.profile.dpr = 1.25;
        this.profile.maxParticles = 20000;
        this.profile.enablePostProcessing = true;
        this.profile.enableBloom = false;
        this.profile.enableDoF = false;
        this.profile.enableChromaticAberration = false;
        this.profile.enableVolumetricShafts = false;
        this.profile.shadowMapSize = 512;
        break;
      case "low":
        this.profile.dpr = 1.0;
        this.profile.maxParticles = 8000;
        this.profile.enablePostProcessing = false;
        this.profile.enableBloom = false;
        this.profile.enableDoF = false;
        this.profile.enableChromaticAberration = false;
        this.profile.enableVolumetricShafts = false;
        this.profile.shadowMapSize = 256;
        break;
      case "fallback2d":
        this.profile.dpr = 1.0;
        this.profile.maxParticles = 0;
        this.profile.enablePostProcessing = false;
        this.profile.enableBloom = false;
        this.profile.enableDoF = false;
        this.profile.enableChromaticAberration = false;
        this.profile.enableVolumetricShafts = false;
        this.profile.shadowMapSize = 0;
        break;
    }
  }

  // Runtime dynamic adaptation: if frame rate drops below 30fps repeatedly, degrade tier gracefully
  public recordFrame(now: number) {
    if (this.isCalibrated) return;
    if (this.lastTime === 0) {
      this.lastTime = now;
      return;
    }

    const delta = now - this.lastTime;
    this.lastTime = now;
    this.frameTimes.push(delta);

    if (this.frameTimes.length > 90) {
      const avgDelta = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
      if (avgDelta > 38 && this.profile.tier === "high") {
        // Falling below 26 FPS on High, drop to Medium
        this.applyTierSettings("medium");
      } else if (avgDelta > 48 && this.profile.tier === "medium") {
        // Falling below 20 FPS on Medium, drop to Low
        this.applyTierSettings("low");
      }
      this.isCalibrated = true;
    }
  }

  public getProfile(): QualityProfile {
    return this.profile;
  }
}

export const qualityGovernor = new QualityGovernorService();
