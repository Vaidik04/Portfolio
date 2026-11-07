"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ArchitectureExplodedSection } from "@/sections/ArchitectureExplodedSection";
import { EngineeringStandardsSection } from "@/sections/EngineeringStandardsSection";
import { ArrowLeft, Shield, Lock, Cpu, Database, Smartphone } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-typography-primary flex flex-col selection:bg-brand selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-surface-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-mono uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Systems & Cryptographic Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            Sovereign Mobile Architecture
          </h1>
          <p className="text-typography-secondary text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Architectural patterns, cryptographic hardening, and mathematical precision designed for Indian enterprise reliability, offline continuity, and sovereign data ownership.
          </p>
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
