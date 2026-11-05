import { create } from "zustand";
import { sounds } from "@/lib/sound";

export type SectionId = "boot" | "hero" | "about" | "skills" | "projects" | "architecture" | "credentials" | "contact";

interface WorldState {
  // Global scroll progress (0.0 to 1.0)
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;

  // Active section
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;

  // Boot sequence state
  isBooted: boolean;
  setBooted: (booted: boolean) => void;

  // Audio mute toggle
  soundEnabled: boolean;
  toggleSound: () => void;

  // HUD Visibility
  hudVisible: boolean;
  toggleHUD: () => void;

  // Developer terminal open toggle
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  toggleTerminal: () => void;

  // Command palette toggle (Ctrl+K)
  paletteOpen: boolean;
  setPaletteOpen: (open: boolean) => void;
  togglePalette: () => void;

  // Active hover label for custom cursor (e.g. "VIEW", "DRAG", "PORTAL", "EXPAND")
  cursorText: string;
  setCursorText: (text: string) => void;

  // Active project ID in 3D Flight Deck
  active3DProjectId: string;
  setActive3DProjectId: (id: string) => void;

  // Glitch mode triggered by Konami code
  glitchMode: boolean;
  setGlitchMode: (glitch: boolean) => void;
}

export const useWorldStore = create<WorldState>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (scrollProgress) => set({ scrollProgress }),

  activeSection: "hero",
  setActiveSection: (activeSection) => set({ activeSection }),

  isBooted: false,
  setBooted: (isBooted) => set({ isBooted }),

  soundEnabled: false,
  toggleSound: () =>
    set((state) => {
      const next = !state.soundEnabled;
      sounds.init();
      sounds.setMuted(!next);
      if (next) sounds.bootHum();
      return { soundEnabled: next };
    }),

  hudVisible: true,
  toggleHUD: () => set((state) => ({ hudVisible: !state.hudVisible })),

  terminalOpen: false,
  setTerminalOpen: (terminalOpen) => set({ terminalOpen }),
  toggleTerminal: () => set((state) => ({ terminalOpen: !state.terminalOpen })),

  paletteOpen: false,
  setPaletteOpen: (paletteOpen) => set({ paletteOpen }),
  togglePalette: () => set((state) => ({ paletteOpen: !state.paletteOpen })),

  cursorText: "",
  setCursorText: (cursorText) => set({ cursorText }),

  active3DProjectId: "girvi",
  setActive3DProjectId: (active3DProjectId) => set({ active3DProjectId }),

  glitchMode: false,
  setGlitchMode: (glitchMode) => set({ glitchMode }),
}));

