"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap, Rocket, Trophy, Terminal, Calendar } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const MILESTONES = [
    {
      period: "2023 — Present",
      role: "Founder & Independent Android Developer",
      org: "VaidikTech · Mobile Software Lab",
      desc: "Founded VaidikTech to build high-utility, revenue-generating mobile products for Indian businesses. Architected and published Girvi on Google Play; engineered AdvoKosh (solo advocate chamber OS), JewelBill (thermal jewellery POS), and KaamKram.",
      icon: <Rocket className="w-4 h-4 text-accent-android" />,
      badge: "Commercial Brand",
    },
    {
      period: "2022 — Present",
      role: "B.Tech in Computer Science & Engineering (AI & ML)",
      org: "Lakshmi Narain College of Technology (LNCT), Bhopal",
      desc: "Specialising in Artificial Intelligence and Machine Learning. Completed 6 formal NPTEL certifications from Premier IITs (including Elite Honors in OOPs, Machine Learning, Data Structures, and DBMS), HackerRank Problem Solving certification, and comprehensive Python engineering bootcamps.",
      icon: <GraduationCap className="w-4 h-4 text-accent-cyan" />,
      badge: "Academic Honors",
    },
    {
      period: "2024 — 2026",
      role: "Distributed AI & Systems Engineering",
      org: "Open Source & Competitive Hackathons",
      desc: "Engineered high-impact systems including SwarmOS (Google Nearby Connections P2P_CLUSTER for air-gapped phone ML), AI Disaster Response SOS mesh network (YOLOv8 + Bluetooth packet hopping), and QRoute (simulated annealing quantum-inspired transit optimization).",
      icon: <Trophy className="w-4 h-4 text-accent-violet" />,
      badge: "Research & Systems",
    },
    {
      period: "The Foundation",
      role: "Curiosity & Problem-Oriented Engineering",
      org: "Personal Lab",
      desc: "Started building automation scripts, stock predictors, and desktop utilities with Python. Committed early to never settling for demo code, focusing on shipping real products that solve everyday operational headaches.",
      icon: <Terminal className="w-4 h-4 text-accent-android" />,
      badge: "Genesis",
    },
  ];

  return (
    <section id="journey" className="relative py-32 overflow-hidden border-t border-white/5 bg-[#05060A]/40 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-android text-xs font-mono uppercase tracking-widest mb-6">
            <Calendar className="w-3.5 h-3.5" />
            <span>06 · Experience & Milestones</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight mb-4">
            Education, Milestones & Products
          </h2>
          <p className="text-typography-secondary text-base sm:text-lg max-w-2xl font-sans mb-16">
            From initial curiosity to establishing VaidikTech and publishing production apps on the Google Play Store.
          </p>
        </Reveal>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {MILESTONES.map((m, idx) => (
            <Reveal key={m.period} direction="up" delay={idx * 0.1}>
              <div className="relative">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-surface-elevated border border-white/20 flex items-center justify-center shadow-lg">
                  {m.icon}
                </div>

                {/* Milestone Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border transition-all duration-300 hover:border-accent-android/40 hover:bg-surface-hover">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-accent-android">
                      {m.period}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-typography-muted font-semibold uppercase">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-typography-primary mb-1">
                    {m.role}
                  </h3>
                  <div className="text-sm font-sans font-medium text-typography-secondary mb-3">
                    {m.org}
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-typography-muted leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

