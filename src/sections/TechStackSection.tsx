"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { SKILL_CATEGORIES, MARQUEE_TECH } from "@/data/skills";
import { Smartphone, Eye, Server, ShieldCheck, Sparkles, Cpu, Layers } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Smartphone className="w-5 h-5 text-accent-android" />;
      case 1:
        return <Eye className="w-5 h-5 text-accent-cyan" />;
      case 2:
        return <Server className="w-5 h-5 text-accent-violet" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-accent-android" />;
    }
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden border-t border-white/5 bg-[#070910]">
      {/* Background Volumetric Light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-6">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 · Technical Matrix & Architecture</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
                Architectural Depth & Tech Stack
              </h2>
              <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-3 font-sans">
                Engineered through commercial production deployments on the Google Play Store, on-device machine learning inference, and distributed system architectures.
              </p>
            </div>
            <div className="text-xs font-mono text-typography-muted border-l-2 border-accent-android pl-3">
              ZERO THIRD-PARTY CLOUD DEPENDENCY FOR CORE WORKFLOWS
            </div>
          </div>
        </Reveal>
      </div>

      {/* Infinite Seamless Marquee */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-surface/40 backdrop-blur-md mb-20">
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-surface-elevated/80 border border-white/10 text-xs font-mono text-typography-primary font-medium tracking-wide shadow-sm hover:border-accent-android/50 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-android" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 3D Tilt Bento Cards */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <Reveal key={category.name} direction="up" delay={catIdx * 0.1}>
              <TiltCard
                className="p-6 md:p-8 flex flex-col justify-between h-full bg-surface/80 group"
                glowColor={
                  catIdx === 0
                    ? "rgba(61, 220, 132, 0.15)"
                    : catIdx === 1
                    ? "rgba(34, 211, 238, 0.15)"
                    : catIdx === 2
                    ? "rgba(124, 92, 255, 0.15)"
                    : "rgba(61, 220, 132, 0.15)"
                }
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center shadow-inner">
                        {getCategoryIcon(catIdx)}
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-typography-primary">
                          {category.name}
                        </h3>
                        <p className="text-xs text-typography-muted font-sans mt-0.5">
                          {category.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-surface-elevated/60 border border-white/5 flex flex-col justify-between transition-colors duration-200 group-hover:border-white/10"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-semibold text-typography-primary font-sans">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                              skill.level === "Expert"
                                ? "bg-accent-android/15 text-accent-android border border-accent-android/30"
                                : skill.level === "Advanced"
                                ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                                : "bg-accent-violet/15 text-accent-violet border border-accent-violet/30"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <span className="text-[10px] text-typography-muted font-mono">
                          {skill.highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-typography-muted">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-typography-secondary" />
                    <span>Production Battle-Tested</span>
                  </span>
                  <span className="text-accent-android">Verified Codebase</span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
