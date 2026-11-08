"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Layers, ArrowUpRight, CheckCircle2, Shield, Printer, Activity } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const HeroSection: React.FC = () => {
  const { activeAppId, setActiveAppId, manualExploded, toggleManualExploded, setScrollProgress, setFocusedLayer } =
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

  const handleStatClick = (type: "drift" | "telemetry" | "strongbox" | "printer") => {
    proceduralAudio.tick();
    if (type === "drift") {
      setScrollProgress(0.72);
      document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "telemetry") {
      setScrollProgress(0.28);
      setFocusedLayer(3);
      document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "strongbox") {
      setScrollProgress(0.32);
      setFocusedLayer(5);
      document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "printer") {
      setScrollProgress(0.72);
      document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-16 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Top Headline & Lead Copy */}
      <div className="max-w-xl lg:max-w-2xl flex flex-col gap-6 my-auto pointer-events-auto">
        {/* Editorial Brand Kicker with 3D Lookalike Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12141C]/80 border border-white/10 text-xs font-mono text-typography-secondary w-fit backdrop-blur-md shadow-md"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-accent-android/50 flex-shrink-0">
            <Image
              src="/assets/vaidik_3d_avatar_square.jpg"
              alt="Vaidik Gandhi 3D Lookalike Avatar"
              width={24}
              height={24}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="w-2 h-2 rounded-full bg-accent-android shadow-[0_0_8px_#3DDC84] animate-pulse" />
          <span className="tracking-wide text-typography-primary font-medium">
            Vaidik Gandhi · Founder @ VaidikTech · Bhopal, IN
          </span>
        </motion.div>

        {/* Large Confident Headline — Guaranteed Never to Clip */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-[3.75rem] font-heading font-black tracking-tight text-typography-primary leading-[1.12]"
        >
          I build native, offline-first Android apps that{" "}
          <span className="text-accent-android inline-block">
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

        {/* Interactive App Switcher Tabs controlling 3D Phone Screen */}
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
                    ? "bg-[#141824] border-accent-android text-white shadow-[0_0_20px_rgba(61,220,132,0.25)] scale-105"
                    : "bg-[#0E1016]/90 border-white/10 text-typography-muted hover:text-white hover:border-white/20"
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
            onClick={() => {
              proceduralAudio.tick();
              toggleManualExploded();
            }}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-accent-cyan/50 text-xs font-mono text-accent-cyan transition-all"
            title="Toggle 3D exploded architecture view"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{manualExploded ? "Assemble Phone" : "Explode Stack"}</span>
          </button>
        </motion.div>

        {/* 4 Proof Stats — Interactive Provers Linking to Live Demonstrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 mt-3"
        >
          <div
            onClick={() => handleStatClick("drift")}
            className="group p-3.5 rounded-2xl bg-[#0D1017]/90 border border-white/10 hover:border-accent-android/60 transition-all duration-300 cursor-pointer hover:scale-[1.02] shadow-sm relative overflow-hidden"
            title="Click to run live mathematical Float Drift verification"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl sm:text-2xl font-mono font-black text-accent-android">
                0.0000%
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-android opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5 flex items-center gap-1">
              <span>Float Drift (Long)</span>
            </div>
            <span className="text-[9px] font-mono text-accent-android/70 block mt-1">Live Verifier →</span>
          </div>

          <div
            onClick={() => handleStatClick("telemetry")}
            className="group p-3.5 rounded-2xl bg-[#0D1017]/90 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer hover:scale-[1.02] shadow-sm relative overflow-hidden"
            title="Click to inspect 100% air-gapped sovereign architecture"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl sm:text-2xl font-mono font-black text-white">
                0 KB
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5">
              Cloud Telemetry
            </div>
            <span className="text-[9px] font-mono text-typography-muted/70 block mt-1">Air-Gapped →</span>
          </div>

          <div
            onClick={() => handleStatClick("strongbox")}
            className="group p-3.5 rounded-2xl bg-[#0D1017]/90 border border-white/10 hover:border-accent-violet/60 transition-all duration-300 cursor-pointer hover:scale-[1.02] shadow-sm relative overflow-hidden"
            title="Click to inspect hardware StrongBox Keystore enclave"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl sm:text-2xl font-mono font-black text-accent-violet">
                256-bit
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-violet opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5">
              AES StrongBox
            </div>
            <span className="text-[9px] font-mono text-accent-violet/70 block mt-1">Keymaster →</span>
          </div>

          <div
            onClick={() => handleStatClick("printer")}
            className="group p-3.5 rounded-2xl bg-[#0D1017]/90 border border-white/10 hover:border-[#F5C26B]/60 transition-all duration-300 cursor-pointer hover:scale-[1.02] shadow-sm relative overflow-hidden"
            title="Click to simulate 240ms direct thermal print"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl sm:text-2xl font-mono font-black text-[#F5C26B]">
                240ms
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F5C26B] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[11px] font-mono text-typography-muted mt-0.5">
              Direct ESC/POS
            </div>
            <span className="text-[9px] font-mono text-[#F5C26B]/70 block mt-1">Thermal POS →</span>
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
