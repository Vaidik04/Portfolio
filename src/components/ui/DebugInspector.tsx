"use client";

import React, { useEffect } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { X, Sliders, Activity, Eye } from "lucide-react";
import { QualityTier } from "@/lib/qualityGovernor";

export const DebugInspector: React.FC = () => {
  const {
    debugOpen,
    setDebugOpen,
    scrollProgress,
    setScrollProgress,
    scrollVelocity,
    activeSection,
    qualityTier,
    setQualityTier,
    focusedLayer,
    setFocusedLayer,
  } = useWorldStore();

  useEffect(() => {
    // Check if ?debug=true in URL
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("debug") === "true") {
        setDebugOpen(true);
      }
    }
  }, [setDebugOpen]);

  if (!debugOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[120] w-80 p-4 rounded-2xl bg-[#090C14]/95 border border-accent-cyan/40 backdrop-blur-2xl shadow-2xl font-mono text-xs select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-1.5 text-accent-cyan font-bold">
          <Sliders className="w-4 h-4" />
          <span>GRAPHICS DEBUGGER</span>
        </div>
        <button
          onClick={() => setDebugOpen(false)}
          className="text-typography-muted hover:text-white"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-3">
        {/* Scrub Slider */}
        <div>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-typography-muted">Timeline Progress</span>
            <span className="text-accent-android font-bold">{(scrollProgress * 100).toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.001"
            value={scrollProgress}
            onChange={(e) => setScrollProgress(parseFloat(e.target.value))}
            className="w-full accent-accent-android"
          />
        </div>

        {/* Telemetry info */}
        <div className="grid grid-cols-2 gap-2 text-[10px] bg-surface p-2 rounded-xl border border-white/5">
          <div>
            <span className="text-typography-muted block">Active Scene:</span>
            <span className="text-typography-primary font-bold uppercase">{activeSection}</span>
          </div>
          <div>
            <span className="text-typography-muted block">Velocity:</span>
            <span className="text-accent-cyan font-bold">{scrollVelocity.toFixed(4)}</span>
          </div>
          <div>
            <span className="text-typography-muted block">Focused Layer:</span>
            <span className="text-accent-violet font-bold">
              {focusedLayer ? `Layer ${focusedLayer}` : "None"}
            </span>
          </div>
          <div>
            <span className="text-typography-muted block">Quality Tier:</span>
            <span className="text-accent-android font-bold uppercase">{qualityTier}</span>
          </div>
        </div>

        {/* Tier Buttons */}
        <div>
          <span className="text-[10px] text-typography-muted block mb-1">Force Quality Tier:</span>
          <div className="grid grid-cols-4 gap-1 text-[9px]">
            {(["ultra", "high", "medium", "low"] as QualityTier[]).map((t) => (
              <button
                key={t}
                onClick={() => setQualityTier(t)}
                className={`py-1 rounded font-bold uppercase border transition-all ${
                  qualityTier === t
                    ? "bg-accent-android text-[#05060A] border-accent-android"
                    : "bg-surface border-white/10 text-typography-muted hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Section Jump */}
        <div>
          <span className="text-[10px] text-typography-muted block mb-1">Jump to Scene:</span>
          <div className="grid grid-cols-3 gap-1 text-[9px]">
            <button
              onClick={() => setScrollProgress(0.12)}
              className="py-1 px-1.5 rounded bg-surface border border-white/5 text-typography-secondary hover:text-white"
            >
              01 Hero
            </button>
            <button
              onClick={() => setScrollProgress(0.32)}
              className="py-1 px-1.5 rounded bg-surface border border-white/5 text-typography-secondary hover:text-white"
            >
              02 Stack
            </button>
            <button
              onClick={() => setScrollProgress(0.52)}
              className="py-1 px-1.5 rounded bg-surface border border-white/5 text-typography-secondary hover:text-white"
            >
              03 Rail
            </button>
            <button
              onClick={() => setScrollProgress(0.68)}
              className="py-1 px-1.5 rounded bg-surface border border-white/5 text-typography-secondary hover:text-white"
            >
              04 Lab
            </button>
            <button
              onClick={() => setScrollProgress(0.82)}
              className="py-1 px-1.5 rounded bg-surface border border-white/5 text-typography-secondary hover:text-white"
            >
              05 Proof
            </button>
            <button
              onClick={() => setScrollProgress(0.98)}
              className="py-1 px-1.5 rounded bg-surface border border-white/5 text-typography-secondary hover:text-white"
            >
              08 Deploy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

