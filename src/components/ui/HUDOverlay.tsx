"use client";

import React, { useEffect, useState } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { sounds } from "@/lib/sound";
import {
  Activity,
  Terminal,
  Volume2,
  VolumeX,
  Compass,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export const HUDOverlay: React.FC = () => {
  const {
    scrollProgress,
    activeSection,
    soundEnabled,
    toggleSound,
    toggleTerminal,
    togglePalette,
    hudVisible,
    glitchMode,
  } = useWorldStore();

  const [fps, setFps] = useState(60);
  const [bhopalTime, setBhopalTime] = useState("");

  // Calculate live FPS
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calcFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calcFps);
    };
    animId = requestAnimationFrame(calcFps);

    return () => cancelAnimationFrame(animId);
  }, []);

  // Update IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setBhopalTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSoundClick = () => {
    sounds.init();
    toggleSound();
    sounds.setMuted(!soundEnabled);
    if (!soundEnabled) sounds.bootHum();
  };

  if (!hudVisible) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-40 select-none font-mono text-[10px] text-typography-muted transition-opacity duration-500 ${
        glitchMode ? "invert hue-rotate-180" : ""
      }`}
    >
      {/* Top Left: System Telemetry */}
      <div className="absolute top-4 left-6 hidden sm:flex items-center gap-3 bg-[#05060A]/60 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-1.5 text-accent-android">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-android animate-ping" />
          <span className="font-bold">SYS:ONLINE</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="flex items-center gap-1">
          <Activity className="w-3 h-3 text-accent-cyan" />
          <span>{fps} FPS</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="text-typography-secondary">
          IST: <span className="text-typography-primary font-semibold">{bhopalTime}</span>
        </div>
      </div>

      {/* Top Right: Build Progress & Sound Toggle */}
      <div className="absolute top-4 right-6 pointer-events-auto flex items-center gap-2">
        <button
          onClick={handleSoundClick}
          className="p-2 rounded-full bg-surface-elevated/70 border border-white/10 hover:border-accent-android/40 text-typography-secondary hover:text-typography-primary transition-all backdrop-blur-md"
          title={soundEnabled ? "Mute audio" : "Enable ambient audio"}
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-accent-android" />
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>

        <button
          onClick={() => {
            sounds.tick();
            toggleTerminal();
          }}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-elevated/70 border border-white/10 hover:border-accent-cyan/40 text-typography-secondary hover:text-accent-cyan transition-all backdrop-blur-md"
          title="Press ` to open developer terminal"
        >
          <Terminal className="w-3 h-3 text-accent-cyan" />
          <span>CLI [`]</span>
        </button>

        <button
          onClick={() => {
            sounds.tick();
            togglePalette();
          }}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-elevated/70 border border-white/10 hover:border-accent-violet/40 text-typography-secondary hover:text-accent-violet transition-all backdrop-blur-md"
          title="Press Ctrl+K for command palette"
        >
          <Sparkles className="w-3 h-3 text-accent-violet" />
          <span>Cmd [Ctrl+K]</span>
        </button>
      </div>

      {/* Bottom Left: Spatial Coordinates & Active Stage */}
      <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 bg-[#05060A]/70 px-3.5 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-1.5 text-accent-cyan font-bold">
          <Compass className="w-3.5 h-3.5" />
          <span className="uppercase">{activeSection}</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="text-typography-muted">
          POS: <span className="text-typography-primary">{(scrollProgress * 100).toFixed(1)}%</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="text-typography-muted">
          ENGINE: <span className="text-accent-android">R3F + WEBDGL2</span>
        </div>
      </div>

      {/* Bottom Right: Build Progress Bar */}
      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 bg-[#05060A]/70 px-3.5 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
        <span className="text-typography-muted">EXECUTION</span>
        <div className="w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-android via-accent-cyan to-accent-violet transition-all duration-150 rounded-full"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
        <span className="font-bold text-typography-primary">{Math.round(scrollProgress * 100)}%</span>
      </div>

      {/* Subtly Animated Viewport Corner Borders (Sci-Fi framing) */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/10" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10" />
    </div>
  );
};

