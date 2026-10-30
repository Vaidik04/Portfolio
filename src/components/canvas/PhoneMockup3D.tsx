"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Play, Radio, Cpu, Sparkles } from "lucide-react";

export const PhoneMockup3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const translateZ = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = e.clientX / innerWidth - 0.5;
      const yPct = e.clientY / innerHeight - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Screen cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    {
      title: "Girvi · Pawn Ledger",
      sub: "100% Offline Sovereign Storage",
      status: "Published on Google Play",
      accent: "#3DDC84",
      amount: "₹1,45,000",
      customer: "Mukesh Soni (Gwalior)",
      metric: "Pledge #GV-9842 · Gold 22K (42.5g)",
    },
    {
      title: "AdvoKosh · Chamber OS",
      sub: "SQLCipher 256-bit AES-CBC",
      status: "Court 4 · Hon'ble High Court",
      accent: "#7C5CFF",
      amount: "Next: 10:30 AM",
      customer: "State vs. Sharma & Ors.",
      metric: "Statutory Limitation: 14 Days Remaining",
    },
    {
      title: "JewelBill · Thermal POS",
      sub: "Bluetooth ESC/POS Thermal 80mm",
      status: "Automated GST 3% (1.5% CGST)",
      accent: "#22D3EE",
      amount: "₹2,84,650",
      customer: "Kalyan Jewellers (Verified)",
      metric: "Gold Rate ₹76,400/10g · Net Wt 36.8g",
    },
  ];

  const currentScreen = screens[activeScreenIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] md:max-w-[380px] h-[580px] md:h-[620px] flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Volumetric Glow Behind Phone */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-96 rounded-full bg-gradient-to-tr from-accent-violet/30 via-accent-cyan/20 to-accent-android/30 blur-[70px] pointer-events-none"
      />

      {/* Floating 3D Device Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          z: translateZ,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[280px] md:w-[310px] h-[550px] md:h-[580px] rounded-[48px] p-3 bg-gradient-to-b from-[#2B3040] via-[#121520] to-[#080A10] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(61,220,132,0.15)] border border-white/15"
      >
        {/* Device Outer Chamfer Edge */}
        <div className="relative w-full h-full rounded-[40px] bg-[#05060A] border border-white/10 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
          {/* Dynamic Notch / Punch Hole Speaker & Camera */}
          <div className="flex items-center justify-between px-2 pt-1 z-30">
            <span className="text-[11px] font-mono text-typography-muted font-semibold">09:41</span>
            <div className="w-16 h-4 bg-black rounded-full border border-white/10 flex items-center justify-end px-1.5">
              <span className="w-2 h-2 rounded-full bg-[#182030] border border-white/20" />
            </div>
            <div className="flex items-center gap-1">
              <Radio className="w-3 h-3 text-accent-android" />
              <span className="text-[10px] font-mono text-accent-android font-bold">5G</span>
            </div>
          </div>

          {/* Active Screen UI Stream */}
          <div className="relative flex-1 my-3 rounded-[28px] bg-gradient-to-b from-[#0F1422] to-[#080B14] border border-white/8 p-4 flex flex-col justify-between overflow-hidden">
            {/* Ambient Screen Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

            {/* Screen Header */}
            <div className="relative z-10 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span
                  style={{ color: currentScreen.accent }}
                  className="text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  {currentScreen.title}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-typography-secondary">
                  Offline-First
                </span>
              </div>
              <p className="text-[11px] text-typography-muted">{currentScreen.sub}</p>
            </div>

            {/* Screen Central Metric Card */}
            <motion.div
              key={activeScreenIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 my-auto p-3.5 rounded-2xl bg-surface-elevated/90 border border-white/10 shadow-lg flex flex-col gap-2"
            >
              <div className="text-[10px] text-typography-muted font-mono">{currentScreen.status}</div>
              <div
                style={{ color: currentScreen.accent }}
                className="text-2xl font-heading font-extrabold tracking-tight"
              >
                {currentScreen.amount}
              </div>
              <div className="text-xs font-semibold text-typography-primary">
                {currentScreen.customer}
              </div>
              <div className="text-[10px] font-mono text-typography-secondary border-t border-white/5 pt-1.5 flex items-center justify-between">
                <span>{currentScreen.metric}</span>
              </div>
            </motion.div>

            {/* Screen Bottom Dock Pill */}
            <div className="relative z-10 flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-mono text-typography-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-android animate-pulse" />
                <span>Zero Telemetry</span>
              </div>
              <span>Room SQLite v4</span>
            </div>
          </div>

          {/* Android Home Bar Indicator */}
          <div className="flex justify-center pb-1">
            <div className="w-28 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Orbiting Satellite Card 1: Google Play Live Badge */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          x: [0, 5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-6 md:-left-12 z-40 p-3 rounded-2xl bg-[#0E121E]/90 border border-accent-android/30 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-3 hidden sm:flex"
      >
        <div className="w-8 h-8 rounded-xl bg-accent-android/15 border border-accent-android/30 flex items-center justify-center text-accent-android">
          <Play className="w-4 h-4 fill-accent-android" />
        </div>
        <div className="flex flex-col pr-1">
          <span className="text-[11px] font-heading font-bold text-typography-primary leading-tight">
            Girvi on Google Play
          </span>
          <span className="text-[9px] font-mono text-accent-android">100% Offline Architecture</span>
        </div>
      </motion.div>

      {/* Orbiting Satellite Card 2: AdvoKosh Chamber Security */}
      <motion.div
        animate={{
          y: [8, -8, 8],
          x: [0, -6, 0],
        }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 -right-6 md:-right-14 z-40 p-3 rounded-2xl bg-[#0E121E]/90 border border-accent-violet/30 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-3 hidden sm:flex"
      >
        <div className="w-8 h-8 rounded-xl bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center text-accent-violet">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex flex-col pr-1">
          <span className="text-[11px] font-heading font-bold text-typography-primary leading-tight">
            SQLCipher 256-bit AES
          </span>
          <span className="text-[9px] font-mono text-accent-violet">Hardware Keystore MasterKey</span>
        </div>
      </motion.div>

      {/* Orbiting Satellite Card 3: SwarmOS P2P */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 left-4 z-40 px-3 py-2 rounded-xl bg-[#0E121E]/90 border border-accent-cyan/30 backdrop-blur-xl shadow-lg flex items-center gap-2 text-[10px] font-mono text-accent-cyan"
      >
        <Cpu className="w-3.5 h-3.5" />
        <span>SwarmOS · P2P Nearby Cluster</span>
      </motion.div>
    </div>
  );
};

