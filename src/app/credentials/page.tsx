"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import {
  ArrowLeft,
  GraduationCap,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-[#05060A] text-typography-primary flex flex-col selection:bg-accent-android selection:text-[#05060A]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-accent-cyan transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & Industry Certifications</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-typography-primary leading-tight">
            Verified Credentials
          </h1>
          <p className="text-typography-secondary text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Theoretical and practical qualifications across Object-Oriented Software Design, Machine Learning, Data Structures, Relational Database Management Systems, and Discrete Mathematics certified by Premier Indian Institutes of Technology (IIT Kharagpur, CMI, IIT Ropar), HackerRank, and Industry Bootcamps.
          </p>
        </div>

        {/* Certifications Component */}
        <CertificationsSection />
      </main>

      <FooterSection />
    </div>
  );
}

