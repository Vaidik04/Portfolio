"use client";

import React from "react";
import Link from "next/link";
import { FlaskConical, Radio, Cpu, Network, Zap, Bot, ShieldAlert, ArrowRight, ArrowUpRight } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const HomeLabPreview: React.FC = () => {
  const labItems = [
    {
      id: "swarmos",
      title: "SwarmOS",
      category: "Distributed Systems",
      desc: "Air-gapped peer-to-peer distributed operating layer allowing ad-hoc clusters to synchronize ledgers and relay telemetry without infrastructure.",
      tech: ["Wi-Fi Direct", "P2P Mesh", "State Consensus"],
      accent: "#3DDC84",
      icon: Network,
    },
    {
      id: "qroute",
      title: "QRoute",
      category: "Quantum Optimization",
      desc: "Quantum-inspired simulated annealing and Kalman-filtered state estimation solving complex combinatorial multi-modal vehicle routing problems.",
      tech: ["Simulated Annealing", "Kalman Filter", "GTFS"],
      accent: "#38BDF8",
      icon: Zap,
    },
    {
      id: "jarvis-ai",
      title: "Jarvis AI Assistant",
      category: "Applied AI & Agents",
      desc: "Autonomous multi-modal desktop agent with local speech recognition DSP, natural language parsing, and zero-cloud OS level command execution.",
      tech: ["Python Core", "Speech DSP", "Local Automations"],
      accent: "#A78BFA",
      icon: Bot,
    },
    {
      id: "ai-disaster-sos",
      title: "AI Disaster SOS Mesh",
      category: "Edge AI & Emergency",
      desc: "Emergency mesh communications network combining edge YOLOv8 computer vision for search-and-rescue with air-gapped packet routing.",
      tech: ["YOLOv8 Vision", "SOS Protocol", "Edge Inference"],
      accent: "#F43F5E",
      icon: ShieldAlert,
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
            <span>AI, Quantum & Systems Research</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            The Systems & AI Lab
          </h2>
          <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
            Multi-agent autonomous swarms, quantum-inspired combinatorial optimization, edge computer vision, and air-gapped distributed networking beyond standard mobile applications.
          </p>
        </div>

        <Link
          href="/lab"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-1 border border-white/15 text-xs font-mono text-typography-primary hover:text-accent-cyan hover:border-accent-cyan/50 transition-all self-start md:self-auto group"
        >
          <span>Enter R&D Lab Archive (30+ Projects)</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {labItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={`/projects/${item.id}`}
              onClick={() => proceduralAudio.tick()}
              className="p-6 rounded-3xl bg-[#0E1118]/80 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/25 hover:bg-[#121520] transition-all group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-typography-muted">
                    {item.category}
                  </span>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.accent}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="text-lg font-heading font-bold text-typography-primary group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-typography-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-xs text-typography-secondary font-sans mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-typography-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-[10px] font-mono font-semibold" style={{ color: item.accent }}>
                  Inspect Architecture →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
