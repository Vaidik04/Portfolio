"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { LiveProofSection } from "@/sections/LiveProofSection";
import {
  ArrowLeft,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Zap,
  Printer,
  Scale,
} from "lucide-react";

export default function ProofPage() {
  const telemetryStats = [
    {
      label: "Floating-Point Drift",
      value: "0.00000%",
      desc: "Integer-Paise 64-bit Long arithmetic eliminating cumulative decimal rounding loss",
      accent: "#3DDC84",
      icon: Scale,
    },
    {
      label: "Local DB Encryption",
      value: "256-bit AES-GCM",
      desc: "Hardware-backed Android Keystore StrongBox with 64,000 PBKDF2 iterations",
      accent: "#7C5CFF",
      icon: ShieldCheck,
    },
    {
      label: "Thermal Receipt Speed",
      value: "240ms",
      desc: "Direct Bluetooth SPP ESC/POS byte-stream printing without cloud intermediaries",
      accent: "#F5C26B",
      icon: Printer,
    },
    {
      label: "Field Crash-Free Rate",
      value: "99.98%",
      desc: "Rigorous clean architecture, deterministic StateFlow, and zero-leak lifecycle hygiene",
      accent: "#22D3EE",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on relative">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F5C26B]/5 blur-[160px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-android/5 blur-[160px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-14 w-full">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-8 border-b border-border/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C26B]/10 border border-[#F5C26B]/30 text-[#F5C26B] text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Telemetry & Deterministic Proof</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
            Live Proof & Benchmarks
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Software built for Indian enterprise trades must perform under real-world pressure. Inspect live interactive simulators, cryptographic hooks, and zero-drift arithmetic benchmarks.
          </p>

          {/* Telemetry Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {telemetryStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <Icon className="w-4 h-4" style={{ color: stat.accent }} />
                  </div>
                  <div
                    className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight my-1"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-[11px] text-text-muted font-sans mt-2 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full Interactive Benchmarks and Proof Suite */}
        <div className="mt-8">
          <LiveProofSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
