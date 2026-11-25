"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { AboutSovereignSection } from "@/sections/AboutSovereignSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      title: "Offline-First Sovereign Systems",
      desc: "Air-gapped platforms and P2P protocols engineered to operate reliably with zero network connectivity, keeping mission-critical data sovereign and immune to cloud outages.",
      icon: ShieldCheck,
      accent: "#3DDC84",
    },
    {
      title: "Distributed Multi-Agent & Swarm AI",
      desc: "Autonomous agent architectures, decentralized state consensus, and peer-to-peer swarm coordination operating without centralized cloud bottlenecks.",
      icon: Layers,
      accent: "#22D3EE",
    },
    {
      title: "Quantum & Combinatorial Optimization",
      desc: "Quantum-inspired simulated annealing, Kalman-filtered state tracking, and heuristic graph search solving complex transit and infrastructure routing problems.",
      icon: Cpu,
      accent: "#7C5CFF",
    },
    {
      title: "Mathematical & Cryptographic Rigor",
      desc: "Zero-drift integer paise financial math eliminating IEEE 754 floating-point errors, enforced alongside hardware StrongBox Keystore cryptography.",
      icon: Terminal,
      accent: "#F5C26B",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-violet/5 blur-[160px]" />
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

        {/* Core Sovereign Ethos Section (with Authentic Photo & 3D Avatar switcher) */}
        <AboutSovereignSection />

        {/* 4 Architectural Engineering Pillars */}
        <section className="py-10 sm:py-12 border-t border-white/10">
          <div className="flex flex-col gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-android w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Principles</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-typography-primary tracking-tight">
              Engineering Disciplines
            </h3>
            <p className="text-xs sm:text-sm text-typography-secondary font-sans max-w-xl">
              Core engineering principles applied across distributed systems, AI pipelines, and production mobile deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-3xl bg-[#0E1118]/80 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-heading font-bold text-lg text-white">
                      {pillar.title}
                    </h4>
                    <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
                  </div>
                  <p className="text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education & Career Timeline */}
        <div className="border-t border-white/10 pt-12">
          <ExperienceSection />
        </div>

        {/* Call to action navigation */}
        <div className="mt-16 p-8 rounded-3xl bg-surface-1/80 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-xl text-white">
              Want to inspect the source architecture?
            </h4>
            <p className="text-xs text-typography-muted font-sans mt-1">
              Explore the 5-layer exploded stack, cryptographic vault, and Clean Architecture standards.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/architecture"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-android text-[#05060A] font-mono font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              <span>Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#141824] border border-white/15 text-white font-mono text-xs hover:border-white/30 transition-all"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
