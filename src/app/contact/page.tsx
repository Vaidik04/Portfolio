"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { DeployBeaconSection } from "@/sections/DeployBeaconSection";
import { ArrowLeft, Mail, Github, Linkedin, Play, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-android/5 blur-[160px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[160px]" />
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

        {/* Direct Channels Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href="mailto:vaidik.gandhi1@gmail.com"
            className="p-5 rounded-2xl bg-surface-1/80 border border-white/10 hover:border-accent-android transition-all flex flex-col justify-between group backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-text-muted">Direct Email</span>
              <Mail className="w-4 h-4 text-accent-android" />
            </div>
            <span className="text-sm font-mono font-bold text-text truncate group-hover:text-accent-android transition-colors">
              vaidik.gandhi1@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/Vaidik04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface-1/80 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-text-muted">GitHub Repos</span>
              <Github className="w-4 h-4 text-text" />
            </div>
            <span className="text-sm font-mono font-bold text-text truncate group-hover:text-white transition-colors">
              github.com/Vaidik04
            </span>
          </a>

          <a
            href="https://in.linkedin.com/in/vaidik-gandhi-395b11378"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface-1/80 border border-white/10 hover:border-accent-cyan transition-all flex flex-col justify-between group backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-text-muted">LinkedIn Network</span>
              <Linkedin className="w-4 h-4 text-accent-cyan" />
            </div>
            <span className="text-sm font-mono font-bold text-text truncate group-hover:text-accent-cyan transition-colors">
              linkedin.com/in/vaidik-gandhi-395b11378
            </span>
          </a>
        </div>

        {/* Full Interactive Deploy Beacon Section */}
        <DeployBeaconSection />
      </main>

      <FooterSection />
    </div>
  );
}
