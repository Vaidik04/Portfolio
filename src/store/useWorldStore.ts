import { create } from "zustand";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { qualityGovernor, QualityTier } from "@/lib/qualityGovernor";

export type SectionId =
  | "boot"
  | "hero"
  | "plug"
  | "architecture"
  | "flightdeck"
  | "flight-deck"
  | "lab"
  | "proof"
  | "about"
  | "credentials"
  | "contact";

export type DisplayMode = "experience" | "fast";

export interface WorldState {
  // Display Mode: "experience" (Full 3D WebGPU/WebGL2 World) or "fast" (2D Editorial High-Speed)
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
  toggleDisplayMode: () => void;

  // The Big Idea: "Pull the Plug" Signature State
  isPlugPulled: boolean;
  plugPullCount: number;
  togglePlug: () => void;
  pullPlug: () => void;
  restorePlug: () => void;

  // Global scroll progress (0.0 to 1.0)
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;

  // Real-time scroll velocity
  scrollVelocity: number;
  setScrollVelocity: (velocity: number) => void;

  // Active section
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;

  // Quality Tier & Hardware capabilities
  qualityTier: QualityTier;
  setQualityTier: (tier: QualityTier) => void;

  // Boot sequence state
  isBooted: boolean;
  setBooted: (booted: boolean) => void;

  // Audio mute toggle
  soundEnabled: boolean;
  toggleSound: () => void;

  // HUD Visibility
  hudVisible: boolean;
  toggleHUD: () => void;

  // Offline Sentinel (navigator.onLine or simulated)
  isOffline: boolean;
  setIsOffline: (offline: boolean) => void;

  // Developer terminal open toggle (`)
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  toggleTerminal: () => void;
  openTerminal: () => void;

  // Command palette toggle (Ctrl+K)
  paletteOpen: boolean;
  setPaletteOpen: (open: boolean) => void;
  togglePalette: () => void;

  // Debug Inspector (?debug=true)
  debugOpen: boolean;
  setDebugOpen: (open: boolean) => void;
  toggleDebug: () => void;

  // Active hover label for custom cursor (e.g. "VIEW", "PULL", "INSPECT")
  cursorText: string;
  setCursorText: (text: string) => void;

  // Active App on 3D phone screen ("girvi" | "jewelbill" | "advokosh")
  activeAppId: "girvi" | "jewelbill" | "advokosh";
  setActiveAppId: (appId: "girvi" | "jewelbill" | "advokosh") => void;

  // 3D Architecture Layer Explosion & Inspection
  manualExploded: boolean;
  setManualExploded: (exploded: boolean) => void;
  toggleManualExploded: () => void;

  // Focused 3D layer for isolation / orbit (1 to 5)
  focusedLayer: number | null;
  setFocusedLayer: (layer: number | null) => void;

  // Glitch mode triggered by Konami code
  glitchMode: boolean;
  setGlitchMode: (glitch: boolean) => void;

  // Game Layer: Achievements
  achievements: string[];
  unlockAchievement: (id: string) => void;
}

export const useWorldStore = create<WorldState>((set, get) => ({
  displayMode: "experience",
  setDisplayMode: (displayMode) => {
    proceduralAudio.tick();
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("vaidik_display_mode", displayMode);
      } catch {}
    }
    set({ displayMode });
  },
  toggleDisplayMode: () => {
    const current = get().displayMode;
    const next = current === "experience" ? "fast" : "experience";
    proceduralAudio.tick();
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("vaidik_display_mode", next);
      } catch {}
    }
    set({ displayMode: next });
  },

  isPlugPulled: false,
  plugPullCount: 0,
  pullPlug: () => {
    proceduralAudio.shockwave();
    get().unlockAchievement("pull_the_plug");
    set((state) => ({ isPlugPulled: true, plugPullCount: state.plugPullCount + 1 }));
  },
  restorePlug: () => {
    proceduralAudio.tick();
    set({ isPlugPulled: false });
  },
  togglePlug: () => {
    const current = get().isPlugPulled;
    if (!current) {
      get().pullPlug();
    } else {
      get().restorePlug();
    }
  },

  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),

  scrollVelocity: 0,
  setScrollVelocity: (scrollVelocity) => set({ scrollVelocity }),

  activeSection: "hero",
  setActiveSection: (activeSection) => set({ activeSection }),

  qualityTier: qualityGovernor.getProfile().tier,
  setQualityTier: (qualityTier) => set({ qualityTier }),

  isBooted: true,
  setBooted: (isBooted) => set({ isBooted }),

  soundEnabled: !proceduralAudio.isAudioMuted(),
  toggleSound: () =>
    set((state) => {
      const next = !state.soundEnabled;
      proceduralAudio.init();
      proceduralAudio.setMuted(!next);
      if (next) proceduralAudio.bootHum();
      return { soundEnabled: next };
    }),

  hudVisible: true,
  toggleHUD: () => set((state) => ({ hudVisible: !state.hudVisible })),

  isOffline: false,
  setIsOffline: (isOffline) => {
    if (isOffline) {
      get().unlockAchievement("true_offline");
    }
    set({ isOffline });
  },

  terminalOpen: false,
  setTerminalOpen: (terminalOpen) => set({ terminalOpen }),
  toggleTerminal: () => set((state) => ({ terminalOpen: !state.terminalOpen })),
  openTerminal: () => set({ terminalOpen: true }),

  paletteOpen: false,
  setPaletteOpen: (paletteOpen) => set({ paletteOpen }),
  togglePalette: () => set((state) => ({ paletteOpen: !state.paletteOpen })),

  debugOpen: false,
  setDebugOpen: (debugOpen) => set({ debugOpen }),
  toggleDebug: () => set((state) => ({ debugOpen: !state.debugOpen })),

  cursorText: "",
  setCursorText: (cursorText) => set({ cursorText }),

  activeAppId: "girvi",
  setActiveAppId: (activeAppId) => {
    proceduralAudio.tick();
    set({ activeAppId });
  },

  manualExploded: false,
  setManualExploded: (manualExploded) => set({ manualExploded }),
  toggleManualExploded: () =>
    set((state) => {
      proceduralAudio.shockwave();
      return { manualExploded: !state.manualExploded };
    }),

  focusedLayer: null,
  setFocusedLayer: (focusedLayer) => {
    proceduralAudio.tick();
    set({ focusedLayer });
  },

  glitchMode: false,
  setGlitchMode: (glitchMode) => set({ glitchMode }),

  achievements: [],
  unlockAchievement: (id) => {
    const list = get().achievements;
    if (!list.includes(id)) {
      proceduralAudio.tick();
      set({ achievements: [...list, id] });
    }
  },
}));
