"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { ArrowLeft, Cpu } from "lucide-react";

export default function SkillsPage() {
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
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            Engineering Stack & Architecture
          </h1>
          <p className="text-typography-secondary text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Native Android performance, hardware-grade database encryption, air-gapped wireless mesh clustering, computer vision pipelines, and mathematical precision across production, systems, and research projects.
          </p>
        </div>

        {/* Skills Section */}
        <TechStackSection />
      </main>

      <FooterSection />
    </div>
  );
}
