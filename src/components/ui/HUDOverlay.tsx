"use client";

import React, { useEffect, useState } from "react";
import {
  Wifi,
  WifiOff,
  Activity,
  Cpu,
  Compass,
} from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { qualityGovernor } from "@/lib/qualityGovernor";

export const HUDOverlay: React.FC = () => {
  const {
    scrollProgress,
    activeSection,
    glitchMode,
    hudVisible,
  } = useWorldStore();

  const [fps, setFps] = useState(60);
  const [frameHistory, setFrameHistory] = useState<number[]>([16, 16, 16, 17, 16, 16, 15, 16, 16, 16]);
  const [isOffline, setIsOffline] = useState(false);
  const [bhopalTime, setBhopalTime] = useState("");
  const [gpuInfo, setGpuInfo] = useState("Vulkan // Adreno 740");
  const [qualityTier, setQualityTier] = useState("ultra");

  // Live FPS and Frame-time calculation
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const measure = (now: number) => {
      frameCount++;
      const elapsed = now - lastTime;
      if (elapsed >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / elapsed);
        setFps(currentFps);
        setFrameHistory((prev) => {
          const next = [...prev.slice(1), Math.round(elapsed / frameCount)];
          return next;
        });
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measure);
    };

    animId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Offline / Online Sentinel
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    setIsOffline(!navigator.onLine);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Unmasked GPU Renderer String
  useEffect(() => {
    try {
      const gl = document.createElement("canvas").getContext("webgl2") ||
                 document.createElement("canvas").getContext("webgl");
      if (gl) {
        const ext = gl.getExtension("WEBGL_debug_renderer_info");
        if (ext) {
          const unmasked = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
          if (unmasked) {
            const clean = unmasked
              .replace(/ANGLE \((.*)\)/, "$1")
              .replace(/Direct3D11 vs_5_0 ps_5_0/, "D3D11")
              .split("/")[0]
              .trim();
            setGpuInfo(clean.length > 24 ? clean.slice(0, 22) + "…" : clean);
          }
        }
      }
    } catch {
      setGpuInfo("WebGPU / Vulkan");
    }

    const profile = qualityGovernor.getProfile();
    setQualityTier(profile.tier);
  }, []);

  // Live IST Clock (Bhopal)
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setBhopalTime(new Intl.DateTimeFormat("en-IN", options).format(d));
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
      {/* Precision Viewport Corner Crosshairs */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-white/10" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-white/10" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-white/10" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-white/10" />

      {/* Unified Bottom-Left Telemetry Dock (Keeps top navigation 100% clean and unobstructed) */}
      <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 bg-[#080A10]/85 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl pointer-events-auto">
        {/* Network Sovereignty Status */}
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

        {/* Live FPS with frame time sparkline */}
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-accent-cyan" />
          <span className="font-semibold text-typography-primary">{fps} FPS</span>
          <div className="flex items-end gap-0.5 h-2.5 ml-0.5">
            {frameHistory.map((val, i) => (
              <div
                key={i}
                className="w-0.5 bg-accent-cyan rounded-t-sm"
                style={{ height: `${Math.min(val * 0.6, 10)}px` }}
              />
            ))}
          </div>
        </div>

        <span className="text-white/20">|</span>

        {/* GPU & Quality */}
        <div className="hidden lg:flex items-center gap-1 text-typography-secondary">
          <Cpu className="w-3 h-3 text-accent-violet" />
          <span>{gpuInfo} ({qualityTier.toUpperCase()})</span>
        </div>

        <span className="hidden lg:inline text-white/20">|</span>

        {/* Section Compass */}
        <div className="flex items-center gap-1 text-accent-cyan font-bold">
          <Compass className="w-3 h-3" />
          <span className="uppercase">{activeSection}</span>
        </div>

        <span className="text-white/20">|</span>

        {/* IST Clock */}
        <div className="text-typography-secondary">
          IST: <span className="text-typography-primary font-bold">{bhopalTime}</span>
        </div>
      </div>

      {/* Bottom-Right: Deterministic Build Progress Bar */}
      <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 bg-[#080A10]/85 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
        <span className="text-typography-muted tracking-wider">BUILD PROGRESS</span>
        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-android via-accent-cyan to-accent-violet transition-all duration-150 rounded-full"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
        <span className="font-bold text-accent-android">{Math.round(scrollProgress * 100)}%</span>
      </div>
    </div>
  );
};
