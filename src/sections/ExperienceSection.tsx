"use client";

import React from "react";
import { GraduationCap, Rocket, Trophy, Terminal, Calendar, ArrowUpRight } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const MILESTONES = [
    {
      period: "2023 - Present",
      role: "Founder & Independent Android Developer",
      org: "VaidikTech Mobile Software Lab",
      url: "https://vaidiktech.app",
      desc: "Founded VaidikTech to build high-utility, revenue-generating mobile products for Indian businesses. Architected and published Girvi on Google Play; engineered AdvoKosh (solo advocate chamber OS), JewelBill (thermal jewellery POS), and KaamKram.",
      icon: <Rocket className="w-4 h-4 text-brand" />,
      badge: "Commercial Brand",
    },
    {
      period: "2022 - Present",
      role: "B.Tech in Computer Science & Engineering (AI & ML)",
      org: "Lakshmi Narain College of Technology (LNCT), Bhopal",
      desc: "Specialising in Artificial Intelligence and Machine Learning. Completed 6 formal NPTEL certifications from Premier IITs (including Elite Honors in OOPs, Machine Learning, Data Structures, and DBMS), HackerRank Problem Solving certification, and comprehensive Python engineering bootcamps.",
      icon: <GraduationCap className="w-4 h-4 text-brand" />,
      badge: "Academic Honors",
    },
    {
      period: "2024 - 2026",
      role: "Distributed Systems & Machine Learning Research",
      org: "Open Source & Competitive Systems",
      desc: "Engineered high-impact systems including SwarmOS (Google Nearby Connections P2P_CLUSTER for air-gapped phone ML), AI Disaster Response SOS mesh network (YOLOv8 + Bluetooth packet hopping), and QRoute (simulated annealing quantum-inspired transit optimization).",
      icon: <Trophy className="w-4 h-4 text-brand" />,
      badge: "Research & Systems",
    },
    {
      period: "The Foundation",
      role: "Problem-Oriented Software Foundations",
      org: "Personal Engineering Lab",
      desc: "Started building automation scripts, stock predictors, and desktop utilities with Python. Committed early to never settling for demo code, focusing on shipping real products that solve everyday operational headaches.",
      icon: <Terminal className="w-4 h-4 text-brand" />,
      badge: "Genesis",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="flex flex-col gap-3 mb-12">
        <span className="text-xs font-mono text-brand font-semibold uppercase tracking-wider">
          Milestones & Trajectory
        </span>
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-typography-primary">
          Education & Studio Timeline
        </h3>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-surface-border space-y-10">
        {MILESTONES.map((m) => (
          <div key={m.period} className="relative">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center shadow-md">
              {m.icon}
            </div>

            {/* Milestone Card */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-surface-border-hover transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-brand">
                  {m.period}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-elevated text-typography-muted border border-surface-border uppercase font-semibold">
                  {m.badge}
                </span>
              </div>

              <h4 className="text-lg font-heading font-bold text-typography-primary">
                {m.role}
              </h4>

              <div className="text-xs font-sans text-typography-secondary mt-0.5 mb-3">
                {m.url ? (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline inline-flex items-center gap-1"
                  >
                    <span>{m.org}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  m.org
                )}
              </div>

              <p className="text-xs sm:text-sm font-sans text-typography-muted leading-relaxed">
                {m.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
