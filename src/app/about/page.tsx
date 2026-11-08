"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { PROJECTS } from "@/data/projects";
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Layers,
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
    },
    {
      title: "Problem-Oriented Engineering",
      desc: "Prioritizing the actual workflows of traditional shopkeepers, lawyers, and field supervisors over unnecessary cloud complexity or fragile dependencies.",
      icon: Layers,
    },
    {
      title: "Mathematical Precision",
      desc: "Custom integer-paise financial engines eliminating IEEE 754 floating-point compounding rounding errors across high-volume transaction ledgers.",
      icon: Terminal,
    },
    {
      title: "Edge AI & Vision Systems",
      desc: "On-device ML Kit OCR, MediaPipe computer vision, and local heuristic optimization running smoothly on constrained mobile silicon.",
      icon: Cpu,
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-4">
            <span>Independent Android Developer & Founder</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
            Vaidik Gandhi
          </h1>
          <p className="text-text-muted text-lg sm:text-xl max-w-3xl mt-4 font-sans leading-relaxed">
            I am an independent Android developer and the founder of <strong>VaidikTech</strong>. I build native Android applications that solve practical problems, simplify everyday workflows, and make technology dependable for people and businesses.
          </p>
        </div>

        {/* Narrative & Photo Section */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-border">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-text-muted leading-relaxed font-sans">
            <h2 className="text-2xl font-heading font-bold text-text">
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
                href="/#flight-deck"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-accent-on text-xs font-sans font-semibold shadow-brass transition-all hover:scale-105"
              >
                <span>View Flagship Apps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-border-hover text-xs font-mono text-text-muted hover:text-text transition-all"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden border border-border bg-surface-1 p-3 shadow-xl relative group">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-2">
                <Image
                  src="/assets/vaidik_3d_avatar_portrait.jpg"
                  alt="Vaidik Gandhi 3D Avatar"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-heading font-bold text-text">Vaidik Gandhi</h3>
                    <p className="text-xs font-mono text-accent">Founder @ VaidikTech</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted">Bhopal, India</span>
                </div>
              </div>
            </div>

            {/* Verified Bio Cards (Zero Vanity Metrics) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-surface-1 border border-border">
                <span className="text-2xl font-mono font-bold text-accent">3 Apps</span>
                <p className="text-xs text-text-muted mt-1">Google Play Releases</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-1 border border-border">
                <span className="text-2xl font-mono font-bold text-text">256-bit</span>
                <p className="text-xs text-text-muted mt-1">AES StrongBox Vault</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-1 border border-border">
                <span className="text-2xl font-mono font-bold text-accent">Offline</span>
                <p className="text-xs text-text-muted mt-1">Girvi Sovereign Storage</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-1 border border-border">
                <span className="text-2xl font-mono font-bold text-text">LNCT</span>
                <p className="text-xs text-text-muted mt-1">B.Tech CSE (AI & ML) &apos;26</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="py-16 border-b border-surface-border">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Core Principles</span>
          </div>
          <h2 className="text-3xl font-heading font-extrabold text-typography-primary mb-8">
            Engineering Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-surface-border-hover transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-brand/10 text-brand border border-brand/20">
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
