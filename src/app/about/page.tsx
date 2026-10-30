"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  BookOpen,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      title: "Offline-First Data Sovereignty",
      desc: "Applications engineered with Room and SQLite that require zero permanent network connection to operate, keeping sensitive business ledgers 100% local and private.",
      icon: ShieldCheck,
      color: "#3DDC84",
    },
    {
      title: "Problem-Oriented Engineering",
      desc: "Prioritizing the actual workflows of traditional shopkeepers, lawyers, and field supervisors over unnecessary cloud complexity or fragile dependencies.",
      icon: Layers,
      color: "#7C5CFF",
    },
    {
      title: "Mathematical Precision",
      desc: "Custom integer-paise financial engines eliminating IEEE 754 floating-point compounding rounding errors across high-volume transaction ledgers.",
      icon: Terminal,
      color: "#22D3EE",
    },
    {
      title: "Edge AI & Vision Systems",
      desc: "On-device ML Kit OCR, MediaPipe computer vision, and local heuristic optimization running smoothly on constrained mobile silicon.",
      icon: Cpu,
      color: "#F59E0B",
    },
  ];

  return (
    <div className="min-h-screen bg-[#05060A] text-typography-primary flex flex-col selection:bg-accent-android selection:text-[#05060A]">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Independent Android Developer & Founder</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-typography-primary leading-tight">
            Vaidik Gandhi
          </h1>
          <p className="text-typography-secondary text-lg sm:text-xl max-w-3xl mt-4 font-sans leading-relaxed">
            I am an independent Android developer and the founder of <strong>VaidikTech</strong>. I build native Android applications that solve practical problems, simplify everyday workflows, and make technology dependable for people and businesses.
          </p>
        </div>

        {/* Narrative & Photo Section */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/5">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-typography-secondary leading-relaxed font-sans">
            <h2 className="text-2xl font-heading font-bold text-typography-primary">
              Engineering Beyond Code
            </h2>
            <p>
              My approach goes beyond writing code: I pay attention to the problem, understand how people work, design the user experience, engineer native architecture, and take software through the rigorous discipline of publishing and maintaining real products on the Google Play Store.
            </p>
            <p>
              My journey into software development began with curiosity about how technology works and how it can be used to solve everyday problems. Over time, that curiosity developed into a commitment to building complete applications—not just demonstrations or academic projects, but products that business owners and professionals actually use in their daily operations.
            </p>
            <p>
              I am currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong>, specialising in <strong>Artificial Intelligence and Machine Learning</strong>, at <strong>Lakshmi Narain College of Technology (LNCT), Bhopal</strong>.
            </p>
            <p>
              My primary focus is Android development, with deep interests in software architecture, database management, hardware-backed security, application performance, and creating intuitive interfaces around complex legal and financial workflows.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-android text-[#05060A] text-xs font-sans font-bold shadow-[0_0_24px_rgba(61,220,132,0.4)] transition-all hover:scale-105"
              >
                <span>View Published Apps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/10 text-xs font-mono text-typography-primary transition-all"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-surface-elevated p-2 shadow-2xl relative group">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/b.jpg"
                  alt="Vaidik Gandhi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-heading font-bold text-typography-primary">Vaidik Gandhi</h3>
                    <p className="text-xs font-mono text-accent-android">Founder @ VaidikTech</p>
                  </div>
                  <span className="text-xs font-mono text-typography-muted">Bhopal, India</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-surface border border-white/5">
                <span className="text-2xl font-mono font-bold text-accent-android">3 Apps</span>
                <p className="text-xs text-typography-muted mt-1">Google Play Releases</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-white/5">
                <span className="text-2xl font-mono font-bold text-accent-violet">21 Projects</span>
                <p className="text-xs text-typography-muted mt-1">Engineered & Maintained</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-white/5">
                <span className="text-2xl font-mono font-bold text-accent-cyan">0 Perms</span>
                <p className="text-xs text-typography-muted mt-1">Air-Gapped Girvi Architecture</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-white/5">
                <span className="text-2xl font-mono font-bold text-white">LNCT</span>
                <p className="text-xs text-typography-muted mt-1">B.Tech CSE (AI & ML)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="py-16 border-b border-white/5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-android mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Core Principles</span>
          </div>
          <h2 className="text-3xl font-heading font-black text-typography-primary mb-8">
            Engineering Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/15 transition-all space-y-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${p.color}15`, color: p.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-typography-primary">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-typography-secondary leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline & Experience */}
        <section className="py-16">
          <ExperienceSection />
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

