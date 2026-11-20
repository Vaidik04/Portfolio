"use client";

import React from "react";
import Link from "next/link";
import { FlaskConical, Radio, Cpu, Sparkles, Terminal, ArrowRight } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const HomeLabPreview: React.FC = () => {
  const labItems = [
    {
      title: "Air-Gapped Mesh Network",
      category: "P2P Protocols",
      desc: "Zero-infrastructure Wi-Fi Direct and Bluetooth SPP packet transport for offline sync between mobile hardware nodes.",
      tech: ["Wi-Fi Direct", "Bluetooth SPP", "Protobuf"],
      accent: "#22D3EE",
      icon: Radio,
    },
    {
      title: "On-Device Neural Vision",
      category: "Edge Computer Vision",
      desc: "Real-time document perspective rectification and biometric pledge verification running locally on mobile NPU/DSP silicon.",
      tech: ["ML Kit Vision", "MediaPipe", "CameraX"],
      accent: "#7C5CFF",
      icon: Cpu,
    },
    {
      title: "Zero-Asset Audio Synthesis",
      category: "WebAudio DSP",
      desc: "Procedural harmonic oscillators delivering tactile acoustic UI feedback without external audio asset downloads.",
      tech: ["WebAudio API", "Gain Scheduling", "Biquad Filter"],
      accent: "#3DDC84",
      icon: Sparkles,
    },
    {
      title: "Deterministic Integer Math",
      category: "Financial Accuracy",
      desc: "64-bit Long paise currency architecture eliminating floating-point drift across Indian pawn and gold loan ledgers.",
      tech: ["Kotlin Value Class", "Zero Drift", "Long Arithmetic"],
      accent: "#F5C26B",
      icon: Terminal,
    },
  ];

  return (
    <section
      id="lab-preview"
      className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan w-fit">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Systems Research & Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            The R&D Lab Archive
          </h2>
          <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
            Exploratory prototypes, air-gapped wireless mesh clustering, on-device neural vision pipelines, and mathematical precision engines engineered for extreme environments.
          </p>
        </div>

        <Link
          href="/lab"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-1 border border-white/15 text-xs font-mono text-typography-primary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all self-start md:self-auto group"
        >
          <span>Enter R&D Lab Archive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {labItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-[#0E1118]/80 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/25 hover:bg-[#121520] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-typography-muted">
                    {item.category}
                  </span>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.accent}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                </div>

                <h3 className="text-lg font-heading font-bold text-typography-primary group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-typography-secondary font-sans mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-typography-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
