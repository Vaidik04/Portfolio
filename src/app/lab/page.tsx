"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { LabArchiveSection } from "@/sections/LabArchiveSection";
import {
  ArrowLeft,
  FlaskConical,
  Radio,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Shield,
  ArrowUpRight,
} from "lucide-react";

export default function LabPage() {
  const labHighlights = [
    {
      id: "mesh",
      title: "Air-Gapped Bluetooth & Wi-Fi Direct Mesh",
      subtitle: "Off-Grid Inter-Device Routing",
      desc: "Peer-to-peer data transport layer operating without internet infrastructure or SIM cards. Designed for underground pawn vault sync and remote field audits.",
      tags: ["Wi-Fi Direct P2P", "Bluetooth SPP", "Protobuf", "Zero Cloud"],
      icon: Radio,
      accent: "#22D3EE",
    },
    {
      id: "vision",
      title: "On-Device Edge Vision & ML Kit OCR",
      subtitle: "Constrained Silicon Computer Vision",
      desc: "Real-time document perspective correction, text detection, and biometric pledge photo verification running locally on mobile NPU/DSP hardware.",
      tags: ["ML Kit Vision", "MediaPipe", "CameraX", "On-Device NPU"],
      icon: Cpu,
      accent: "#7C5CFF",
    },
    {
      id: "audio",
      title: "Procedural WebAudio Synthesizer",
      subtitle: "Zero-Asset Harmonic Oscillators",
      desc: "Mathematical tone generator creating tactile frequency sweeps, matrix boot hums, and UI clicks without loading external .mp3/.wav asset bloat.",
      tags: ["WebAudio API", "Gain Scheduling", "Biquad Filter", "Zero Assets"],
      icon: Sparkles,
      accent: "#3DDC84",
    },
    {
      id: "math",
      title: "Deterministic Integer-Paise Math Engine",
      subtitle: "IEEE 754 Compound Error Prevention",
      desc: "Zero-allocation value class enforcing exact currency arithmetic, GST 3% jewellery tax splits, and multi-year compound interest ledgers without float drift.",
      tags: ["Kotlin Value Class", "Long Paise", "Exact Arithmetic", "HSN 7113"],
      icon: Terminal,
      accent: "#F5C26B",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[160px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-violet/5 blur-[160px]" />
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
        <div className="pb-12 border-b border-border/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-4">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Systems & Experimental Prototypes</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
            The R&D Lab Archive
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Exploratory prototypes, air-gapped wireless mesh clustering, on-device neural vision pipelines, and mathematical precision engines engineered for extreme environments.
          </p>

          {/* Key Lab Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {labHighlights.map((hl) => {
              const Icon = hl.icon;
              return (
                <div
                  key={hl.id}
                  className="p-5 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                        {hl.subtitle}
                      </span>
                      <Icon className="w-4 h-4" style={{ color: hl.accent }} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text group-hover:text-white transition-colors">
                      {hl.title}
                    </h3>
                    <p className="text-xs text-text-muted font-sans mt-2 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                    {hl.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Full Interactive Lab Archive */}
        <div className="mt-8">
          <LabArchiveSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
