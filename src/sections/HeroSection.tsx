"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play, Layers, Sparkles } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";

export const HeroSection: React.FC = () => {
  const { activeAppId, setActiveAppId, manualExploded, toggleManualExploded } =
    useWorldStore();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Top Headline & Lead Copy */}
      <div className="max-w-xl lg:max-w-2xl flex flex-col gap-6 my-auto pointer-events-auto">
        {/* Subtle Editorial Kicker Pill with subtle motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-surface-border text-xs font-mono text-typography-secondary w-fit backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="tracking-wide">Vaidik Gandhi · Founder @ VaidikTech</span>
        </motion.div>

        {/* Large Confident Headline with Staggered Entrance */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-[3.4rem] font-heading font-extrabold tracking-tight text-typography-primary leading-[1.12]"
        >
          I build native, offline-first Android apps that run businesses.
        </motion.h1>

        {/* Short, Specific Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-lg"
        >
          Engineering sovereign mobile tools with Jetpack Compose, Room SQLite, and hardware-backed SQLCipher encryption—designed specifically for India&apos;s trades operating in zero-connectivity environments.
        </motion.p>

        {/* Two Clear Actions: One Primary, One Quiet Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-1"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand hover:bg-brand-light text-white text-sm font-sans font-semibold tracking-wide transition-all shadow-[0_4px_20px_rgba(43,91,255,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>See the work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-surface-border hover:border-surface-border-hover bg-surface/60 text-typography-secondary hover:text-typography-primary text-sm font-sans font-medium transition-all backdrop-blur-md hover:bg-surface-elevated"
          >
            <span>Architecture story</span>
            <ArrowUpRight className="w-4 h-4 text-brand" />
          </a>
        </motion.div>
      </div>

      {/* Floating 3D Interactive Controller Dock (Desktop) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto hidden xl:flex flex-col gap-2.5 absolute right-6 bottom-16 z-20 bg-[#121419]/90 border border-white/10 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl min-w-[280px]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-typography-muted flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3 h-3 text-brand" />
            <span>Interactive 3D Device</span>
          </span>
          <span className="text-[9px] font-mono text-brand/90 animate-pulse">Drag 360°</span>
        </div>

        {/* App Switcher Tabs */}
        <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-black/40 border border-white/5">
          <button
            type="button"
            onClick={() => setActiveAppId("girvi")}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all text-center ${
              activeAppId === "girvi"
                ? "bg-brand text-white shadow font-semibold"
                : "text-typography-muted hover:text-typography-primary"
            }`}
          >
            Girvi
          </button>
          <button
            type="button"
            onClick={() => setActiveAppId("jewelbill")}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all text-center ${
              activeAppId === "jewelbill"
                ? "bg-amber-600 text-white shadow font-semibold"
                : "text-typography-muted hover:text-typography-primary"
            }`}
          >
            JewelBill
          </button>
          <button
            type="button"
            onClick={() => setActiveAppId("advokosh")}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-mono transition-all text-center ${
              activeAppId === "advokosh"
                ? "bg-indigo-600 text-white shadow font-semibold"
                : "text-typography-muted hover:text-typography-primary"
            }`}
          >
            AdvoKosh
          </button>
        </div>

        {/* Explode / Assemble Toggle */}
        <button
          type="button"
          onClick={toggleManualExploded}
          className={`w-full py-2 px-3 rounded-xl border text-xs font-mono flex items-center justify-center gap-2 transition-all ${
            manualExploded
              ? "bg-[#D95C36] text-white border-[#D95C36] shadow-lg shadow-[#D95C36]/30 font-semibold"
              : "bg-surface-elevated hover:bg-white/[0.08] text-typography-secondary hover:text-white border-white/10"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{manualExploded ? "Assemble Phone" : "Explode 5 Layers"}</span>
        </button>
      </motion.div>

      {/* Honest Proof Row (Zero Vanity Stats, Only Verified Shipments) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="pt-8 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-typography-muted pointer-events-auto"
      >
        <div className="flex items-center gap-2 font-mono text-typography-secondary font-medium uppercase tracking-wider text-[11px]">
          <span>Shipped on Google Play:</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=com.girvi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/60 border border-surface-border text-typography-primary hover:text-brand hover:border-brand/40 transition-all hover:scale-[1.02]"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-semibold text-xs">Girvi</span>
            <span className="text-[10px] font-mono text-typography-muted">Pawn Ledger</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.jewellery.invoice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/60 border border-surface-border text-typography-primary hover:text-brand hover:border-brand/40 transition-all hover:scale-[1.02]"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-semibold text-xs">JewelBill</span>
            <span className="text-[10px] font-mono text-typography-muted">Jewellery POS</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.advokosh.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/60 border border-surface-border text-typography-primary hover:text-brand hover:border-brand/40 transition-all hover:scale-[1.02]"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-semibold text-xs">AdvoKosh</span>
            <span className="text-[10px] font-mono text-typography-muted">Advocate Diary</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
