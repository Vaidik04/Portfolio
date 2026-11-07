import { create } from "zustand";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { qualityGovernor, QualityTier } from "@/lib/qualityGovernor";

export type SectionId =
  | "boot"
  | "hero"
  | "architecture"
  | "flightdeck"
  | "flight-deck"
  | "lab"
  | "proof"
  | "about"
  | "credentials"
  | "contact";

export interface WorldState {
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

  // Offline Sentinel (navigator.onLine)
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

  // Active hover label for custom cursor (e.g. "VIEW", "DRAG", "PORTAL", "INSPECT")
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
}

export const useWorldStore = create<WorldState>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),

  scrollVelocity: 0,
  setScrollVelocity: (scrollVelocity) => set({ scrollVelocity }),

  activeSection: "hero",
  setActiveSection: (activeSection) => set({ activeSection }),

  qualityTier: qualityGovernor.getProfile().tier,
  setQualityTier: (qualityTier) => set({ qualityTier }),

  isBooted: false,
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

  isOffline: typeof navigator !== "undefined" ? !navigator.onLine : false,
  setIsOffline: (isOffline) => set({ isOffline }),

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
}));
