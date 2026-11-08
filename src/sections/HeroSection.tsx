"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play, Layers, Sparkles, Shield, Cpu, Terminal, CheckCircle2 } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const HeroSection: React.FC = () => {
  const { activeAppId, setActiveAppId, manualExploded, toggleManualExploded, setScrollProgress } =
    useWorldStore();

  const [counterTriggered, setCounterTriggered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCounterTriggered(true), 400);
    return () => clearTimeout(t);
  }, []);

  const apps = [
    { id: "girvi" as const, name: "Girvi · गिरवी", badge: "0 Perms", accent: "#3DDC84" },
    { id: "jewelbill" as const, name: "JewelBill · POS", badge: "240ms Print", accent: "#F5C26B" },
    { id: "advokosh" as const, name: "AdvoKosh · एडवोकोश", badge: "256-bit AES", accent: "#7C5CFF" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-16 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Top Headline & Lead Copy */}
      <div className="max-w-xl lg:max-w-2xl flex flex-col gap-6 my-auto pointer-events-auto">
        {/* Editorial Brand Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-white/10 text-xs font-mono text-typography-secondary w-fit backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent-android shadow-[0_0_8px_#3DDC84] animate-pulse" />
          <span className="tracking-wide">Vaidik Gandhi · Founder @ VaidikTech · Bhopal, IN</span>
        </motion.div>

        {/* Large Confident Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold tracking-tight text-typography-primary leading-[1.08]"
        >
          I build native, offline-first Android apps that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-android via-accent-cyan to-accent-violet">
            run businesses.
          </span>
        </motion.h1>

        {/* Short, Specific Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-xl"
        >
          Sovereign mobile software for India&apos;s traditional trades—pawnbrokers, jewellers, and advocates. Engineered with Kotlin 2.0, Jetpack Compose, Room SQLite, and hardware-backed SQLCipher encryption for zero-connectivity environments.
        </motion.p>

        {/* App Switcher Tabs controlling 3D Phone Screen */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2.5 pt-2"
        >
          {apps.map((app) => {
            const isActive = activeAppId === app.id;
            return (
              <button
                key={app.id}
                onClick={() => {
                  proceduralAudio.tick();
                  setActiveAppId(app.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? "bg-[#161B26] border-accent-android text-white shadow-[0_0_20px_rgba(61,220,132,0.25)] scale-105"
                    : "bg-surface border-white/5 text-typography-muted hover:text-white hover:border-white/20"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: app.accent }}
                />
                <span className="font-bold">{app.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-typography-secondary font-semibold">
                  {app.badge}
                </span>
              </button>
            );
          })}

          {/* Quick Action: Explode Stack */}
          <button
            onClick={toggleManualExploded}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-accent-cyan/40 text-xs font-mono text-accent-cyan transition-all"
            title="Toggle 3D exploded architecture view"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{manualExploded ? "Assemble Phone" : "Explode Stack"}</span>
          </button>
        </motion.div>

        {/* 4 Proof Stats with Holographic Micro-Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 mt-3"
        >
          <div className="p-3 rounded-2xl bg-surface border border-white/5">
            <div className="text-xl sm:text-2xl font-mono font-black text-accent-android">
              0.0000%
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5">
              Float Drift (Long Paise)
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-surface border border-white/5">
            <div className="text-xl sm:text-2xl font-mono font-black text-white">
              0 KB
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5">
              Cloud Telemetry Required
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-surface border border-white/5">
            <div className="text-xl sm:text-2xl font-mono font-black text-accent-violet">
              256-bit
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5">
              AES StrongBox Keystore
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-surface border border-white/5">
            <div className="text-xl sm:text-2xl font-mono font-black text-[#F5C26B]">
              240ms
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5">
              Direct ESC/POS Print
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-3 pt-8 text-typography-muted text-xs font-mono pointer-events-auto"
      >
        <button
          onClick={() => {
            proceduralAudio.tick();
            setScrollProgress(0.32);
            document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 hover:text-accent-android transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce text-accent-android" />
          <span>Scroll down to explode the 5-layer architecture stack</span>
        </button>
      </motion.div>
    </section>
  );
};
