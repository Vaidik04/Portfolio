"use client";

import React, { useEffect, useState } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import {
  Activity,
  Terminal,
  Volume2,
  VolumeX,
  Compass,
  Sparkles,
  Wifi,
  WifiOff,
  Cpu,
} from "lucide-react";

export const HUDOverlay: React.FC = () => {
  const {
    scrollProgress,
    activeSection,
    soundEnabled,
    toggleSound,
    toggleTerminal,
    togglePalette,
    toggleDebug,
    hudVisible,
    glitchMode,
    isOffline,
    qualityTier,
  } = useWorldStore();

  const [fps, setFps] = useState(60);
  const [bhopalTime, setBhopalTime] = useState("");
  const [gpuInfo, setGpuInfo] = useState("WebGL2 / GPU");
  const [frameHistory, setFrameHistory] = useState<number[]>([16, 16, 16, 17, 16, 15, 16, 16]);

  // Calculate live FPS & sparkline
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calcFps = () => {
      frameCount++;
      const now = performance.now();
      const delta = now - lastTime;
      if (delta >= 1000) {
        const calculatedFps = Math.round((frameCount * 1000) / delta);
        setFps(calculatedFps);
        setFrameHistory((prev) => [...prev.slice(-9), Math.round(1000 / Math.max(calculatedFps, 1))]);
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calcFps);
    };
    animId = requestAnimationFrame(calcFps);

    // Retrieve GPU unmasked renderer if available
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (gl) {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          if (renderer) {
            setGpuInfo(renderer.replace(/\(.*\)/, "").trim().slice(0, 22));
          }
        }
      }
    } catch {}

    return () => cancelAnimationFrame(animId);
  }, []);

  // Live IST Clock
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

  if (!hudVisible) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-40 select-none font-mono text-[10px] text-typography-muted transition-opacity duration-500 ${
        glitchMode ? "invert hue-rotate-180" : ""
      }`}
    >
      {/* 1. Top Left: System Telemetry & Offline Sentinel */}
      <div className="absolute top-4 left-6 hidden sm:flex items-center gap-3 bg-[#05060A]/80 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg pointer-events-auto">
        <div
          className={`flex items-center gap-1.5 font-bold ${
            isOffline ? "text-[#F5C26B]" : "text-accent-android"
          }`}
          title={isOffline ? "Air-Gapped Sovereign Operation" : "Online Node Synchronized"}
        >
          {isOffline ? <WifiOff className="w-3 h-3 text-[#F5C26B]" /> : <Wifi className="w-3 h-3 text-accent-android" />}
          <span>{isOffline ? "AIR-GAPPED // SOVEREIGN" : "STATUS: ONLINE"}</span>
        </div>

        <span className="text-white/20">|</span>

        {/* Live FPS & Sparkline */}
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-accent-cyan" />
          <span>{fps} FPS</span>
          <div className="flex items-end gap-0.5 h-3 ml-1">
            {frameHistory.map((val, i) => (
              <div
                key={i}
                className="w-0.5 bg-accent-cyan rounded-t-sm"
                style={{ height: `${Math.min(val * 0.7, 12)}px` }}
              />
            ))}
          </div>
        </div>

        <span className="text-white/20">|</span>

        {/* GPU string & quality tier */}
        <div className="hidden lg:flex items-center gap-1 text-typography-secondary">
          <Cpu className="w-3 h-3 text-accent-violet" />
          <span>{gpuInfo} ({qualityTier.toUpperCase()})</span>
        </div>
      </div>

      {/* 2. Top Right: Audio Toggle, CLI & Palette Buttons */}
      <div className="absolute top-4 right-6 pointer-events-auto flex items-center gap-2">
        <button
          onClick={toggleSound}
          className={`p-2 rounded-full border backdrop-blur-md transition-all ${
            soundEnabled
              ? "bg-accent-android/20 border-accent-android/50 text-accent-android shadow-[0_0_12px_rgba(61,220,132,0.4)]"
              : "bg-surface-elevated/70 border-white/10 text-typography-secondary hover:text-white"
          }`}
          title={soundEnabled ? "Mute Procedural WebAudio" : "Enable Procedural WebAudio"}
          aria-label="Toggle procedural audio"
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={() => {
            proceduralAudio.tick();
            toggleTerminal();
          }}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-elevated/70 border border-white/10 hover:border-accent-cyan/50 text-typography-secondary hover:text-accent-cyan transition-all backdrop-blur-md"
          title="Press ` to open sovereign CLI terminal"
        >
          <Terminal className="w-3 h-3 text-accent-cyan" />
          <span>CLI [`]</span>
        </button>

        <button
          onClick={() => {
            proceduralAudio.tick();
            togglePalette();
          }}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-elevated/70 border border-white/10 hover:border-accent-violet/50 text-typography-secondary hover:text-accent-violet transition-all backdrop-blur-md"
          title="Press Ctrl+K for command palette"
        >
          <Sparkles className="w-3 h-3 text-accent-violet" />
          <span>CMD [Ctrl+K]</span>
        </button>
      </div>

      {/* 3. Bottom Left: Spatial Coordinates & Active Stage */}
      <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 bg-[#05060A]/80 px-3.5 py-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg pointer-events-auto">
        <div className="flex items-center gap-1.5 text-accent-cyan font-bold">
          <Compass className="w-3.5 h-3.5" />
          <span className="uppercase">{activeSection}</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="text-typography-muted">
          COORDS: <span className="text-typography-primary font-semibold">{(scrollProgress * 100).toFixed(1)}%</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="text-typography-secondary">
          IST: <span className="text-typography-primary font-bold">{bhopalTime}</span>
        </div>
      </div>

      {/* 4. Bottom Right: Build Progress Bar */}
      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 bg-[#05060A]/80 px-3.5 py-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
        <span className="text-typography-muted tracking-wider">BUILD PROGRESS</span>
        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-android via-accent-cyan to-accent-violet transition-all duration-150 rounded-full"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
        <span className="font-bold text-accent-android">{Math.round(scrollProgress * 100)}%</span>
      </div>

      {/* Precision Viewport Corner Crosshairs */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/15" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/15" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/15" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/15" />
    </div>
  );
};

