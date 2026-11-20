"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ArchitectureExplodedSection } from "@/sections/ArchitectureExplodedSection";
import { EngineeringStandardsSection } from "@/sections/EngineeringStandardsSection";
import { ArrowLeft, Shield, Lock, Cpu, Database, Smartphone, CheckCircle } from "lucide-react";

export default function ArchitecturePage() {
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

        {/* Hero Header */}
        <div className="pb-8 border-b border-border/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Systems & Cryptographic Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
            Sovereign Mobile Architecture
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Architectural patterns, cryptographic hardening, and mathematical precision designed for Indian enterprise reliability, offline continuity, and sovereign data ownership.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase text-typography-muted">Data Boundary</span>
              <div className="text-lg font-heading font-bold text-accent-android mt-1">Zero Internet Perm</div>
              <p className="text-xs text-text-muted font-sans mt-1">No android.permission.INTERNET in Girvi manifest; 100% air-gapped storage</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase text-typography-muted">Encryption Standard</span>
              <div className="text-lg font-heading font-bold text-accent-violet mt-1">256-bit AES-GCM</div>
              <p className="text-xs text-text-muted font-sans mt-1">Hardware StrongBox Keymaster with 64,000 PBKDF2 iterations</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase text-typography-muted">Concurrency Standard</span>
              <div className="text-lg font-heading font-bold text-accent-cyan mt-1">UDF & StateFlow</div>
              <p className="text-xs text-text-muted font-sans mt-1">Single-Activity declarative Jetpack Compose UI with immutable state emissions</p>
            </div>
          </div>
        </div>

        {/* Exploded Layers Architecture Section */}
        <ArchitectureExplodedSection />

        {/* Code & Engineering Standards Section */}
        <EngineeringStandardsSection />
      </main>

      <FooterSection />
    </div>
  );
}
