"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { SKILL_CATEGORIES } from "@/data/skills";
import {
  ArrowLeft,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
  CheckCircle2,
  Code2,
} from "lucide-react";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#05060A] text-typography-primary flex flex-col selection:bg-accent-android selection:text-[#05060A]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-accent-android transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/30 text-accent-android text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Matrices</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-typography-primary leading-tight">
            Engineering Stack & Architecture
          </h1>
          <p className="text-typography-secondary text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Native Android performance, hardware-grade database encryption, air-gapped wireless mesh clustering, computer vision pipelines, and mathematical precision across 33+ production, systems, and research projects.
          </p>
        </div>

        {/* Skill Matrices */}
        <section className="py-16 space-y-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/10 transition-all shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-white/5">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-typography-primary">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-typography-secondary font-sans mt-1">
                    {cat.tagline}
                  </p>
                </div>
                <span className="text-xs font-mono text-accent-android px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/20 self-start">
                  {cat.skills.length} Core Technologies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-surface-elevated border border-white/5 flex flex-col justify-between group hover:border-accent-android/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-accent-android font-semibold">
                          {skill.level}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-android opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="text-sm font-heading font-bold text-typography-primary">
                        {skill.name}
                      </h3>
                    </div>
                    <p className="text-[11px] font-mono text-typography-muted mt-3">
                      {skill.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Marquee Stack Embed */}
        <section className="py-12 border-t border-white/5">
          <TechStackSection />
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
