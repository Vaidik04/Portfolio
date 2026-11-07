"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play, Layers, Sparkles, Shield, Cpu, Terminal } from "lucide-react";
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
      <div className="max-w-xl lg:max-w-2xl flex flex-col gap-5 my-auto pointer-events-auto">
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
          className="text-3xl sm:text-5xl lg:text-[3.35rem] font-heading font-extrabold tracking-tight text-typography-primary leading-[1.12]"
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

        {/* Live Sovereign Benchmarks Bar (Concrete Engineering Guarantees) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3.5 my-1 border-y border-surface-border text-left"
        >
          <div className="flex flex-col">
            <span className="text-sm font-mono text-brand font-bold">0.0000%</span>
            <span className="text-[11px] font-sans text-typography-muted">Float Drift · 64-bit Long</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-mono text-emerald-400 font-bold">0 KB</span>
            <span className="text-[11px] font-sans text-typography-muted">Zero Cloud Telemetry</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-mono text-[#D95C36] font-bold">256-bit</span>
            <span className="text-[11px] font-sans text-typography-muted">AES StrongBox Vault</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-mono text-purple-400 font-bold">240ms</span>
            <span className="text-[11px] font-sans text-typography-muted">Direct ESC/POS Print</span>
          </div>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-1"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-accent-on text-sm font-sans font-semibold tracking-wide transition-all shadow-[0_4px_22px_rgba(212,162,76,0.32)] hover:scale-[1.02] active:scale-[0.98]"
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

        {/* Mobile / Tablet 3D App Controller Bar */}
        <div className="flex md:hidden flex-col gap-2 pt-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>3D Device Live Display:</span>
            </span>
            <span className="text-accent/90">Auto-cycling</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 grid grid-cols-3 gap-1 p-1 rounded-xl bg-surface-1 border border-border">
              <button
                type="button"
                onClick={() => setActiveAppId("girvi")}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                  activeAppId === "girvi"
                    ? "bg-accent text-accent-on font-semibold"
                    : "text-text-muted"
                }`}
              >
                गिरवी
              </button>
              <button
                type="button"
                onClick={() => setActiveAppId("jewelbill")}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                  activeAppId === "jewelbill"
                    ? "bg-accent text-accent-on font-semibold"
                    : "text-text-muted"
                }`}
              >
                ज्वेलबिल
              </button>
              <button
                type="button"
                onClick={() => setActiveAppId("advokosh")}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-mono transition-all text-center ${
                  activeAppId === "advokosh"
                    ? "bg-accent text-accent-on font-semibold"
                    : "text-text-muted"
                }`}
              >
                एडवोकोश
              </button>
            </div>

            <button
              type="button"
              onClick={toggleManualExploded}
              className={`p-2 rounded-xl border text-xs font-mono transition-all ${
                manualExploded
                  ? "bg-accent text-accent-on border-accent shadow-brass"
                  : "bg-surface-1 text-text-muted border-border hover:text-text"
              }`}
              title="Toggle 3D exploded view"
            >
              <Layers className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating 3D Interactive Controller Dock (Desktop & Tablets) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto hidden md:flex flex-col gap-2.5 absolute right-6 bottom-16 z-20 bg-surface-1/95 border border-border backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl min-w-[310px]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border/80 pb-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3 h-3 text-accent" />
            <span>Interactive 3D Device</span>
          </span>
          <span className="text-[9px] font-mono text-accent animate-pulse">Drag 360° · Auto-cycling</span>
        </div>

        {/* App Switcher Tabs with Hindi Devanagari labels */}
        <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-surface-2 border border-border">
          <button
            type="button"
            onClick={() => setActiveAppId("girvi")}
            className={`py-2 px-2 rounded-lg text-[11px] font-mono transition-all text-center flex flex-col items-center gap-0.5 ${
              activeAppId === "girvi"
                ? "bg-accent text-accent-on shadow font-semibold"
                : "text-text-muted hover:text-text"
            }`}
          >
            <span className="font-devanagari text-xs">गिरवी</span>
            <span className="text-[9px] opacity-75">Girvi</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveAppId("jewelbill")}
            className={`py-2 px-2 rounded-lg text-[11px] font-mono transition-all text-center flex flex-col items-center gap-0.5 ${
              activeAppId === "jewelbill"
                ? "bg-accent text-accent-on shadow font-semibold"
                : "text-text-muted hover:text-text"
            }`}
          >
            <span className="font-devanagari text-xs">ज्वेलबिल</span>
            <span className="text-[9px] opacity-75">JewelBill</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveAppId("advokosh")}
            className={`py-2 px-2 rounded-lg text-[11px] font-mono transition-all text-center flex flex-col items-center gap-0.5 ${
              activeAppId === "advokosh"
                ? "bg-accent text-accent-on shadow font-semibold"
                : "text-text-muted hover:text-text"
            }`}
          >
            <span className="font-devanagari text-xs">एडवोकोश</span>
            <span className="text-[9px] opacity-75">AdvoKosh</span>
          </button>
        </div>

        {/* Explode / Assemble Toggle */}
        <button
          type="button"
          onClick={toggleManualExploded}
          className={`w-full py-2 px-3 rounded-xl border text-xs font-mono flex items-center justify-center gap-2 transition-all ${
            manualExploded
              ? "bg-accent text-accent-on border-accent shadow-brass font-semibold"
              : "bg-surface-2 hover:bg-surface-2/80 text-text border-border"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{manualExploded ? "Assemble Phone Chassis" : "Explode 5 Architecture Slabs"}</span>
        </button>
      </motion.div>

      {/* Honest Proof Row (Zero Vanity Stats, Only Verified Shipments) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="pt-6 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-typography-muted pointer-events-auto"
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
