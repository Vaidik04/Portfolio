"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { VerifiedCredentialsSection } from "@/sections/VerifiedCredentialsSection";
import { ArrowLeft, GraduationCap, Award, ShieldCheck, CheckCircle } from "lucide-react";

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[160px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-violet/5 blur-[160px]" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & IIT Certifications</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
            Verified Credentials
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Formal examinations across Java Systems Programming, Object-Oriented Software Design, Machine Learning, Data Structures, Relational Database Management Systems, and Discrete Mathematics certified by Premier Indian Institutes of Technology (IIT Kharagpur, CMI, IIT Ropar) through the Ministry of Education NPTEL initiative.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase text-typography-muted">Accreditation</span>
              <div className="text-lg font-heading font-bold text-white mt-1">Ministry of Education</div>
              <p className="text-xs text-text-muted font-sans mt-1">National Programme on Technology Enhanced Learning (NPTEL)</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase text-typography-muted">Elite Tier</span>
              <div className="text-lg font-heading font-bold text-accent-cyan mt-1">Top 1% & 5% National</div>
              <p className="text-xs text-text-muted font-sans mt-1">Silver & Gold elite honors across Premier IIT proctored exams</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-1/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase text-typography-muted">Verification</span>
              <div className="text-lg font-heading font-bold text-accent-android mt-1">100% Roll Authenticated</div>
              <p className="text-xs text-text-muted font-sans mt-1">Cryptographically registered certificate roll numbers and QR codes</p>
            </div>
          </div>
        </div>

        {/* Full Interactive Credentials Section */}
        <div className="mt-8">
          <VerifiedCredentialsSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
