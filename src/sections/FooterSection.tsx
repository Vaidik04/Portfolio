"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    proceduralAudio.tick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 max-w-6xl mx-auto w-full border-t border-white/10 text-xs font-sans text-typography-muted z-10 pointer-events-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-12 border-b border-white/5">
        {/* Brand Identification */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-surface-elevated border border-white/10 flex items-center justify-center p-2">
            <Image
              src="/assets/vaidiktech_symbol.svg"
              alt="VaidikTech"
              width={22}
              height={22}
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-typography-primary">
              Vaidik Gandhi
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Founder · VaidikTech Sovereign Mobile Studio
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center gap-5 text-typography-secondary text-xs font-mono">
          <a href="#flight-deck" className="hover:text-accent-android transition-colors">
            Work
          </a>
          <a href="#architecture" className="hover:text-accent-android transition-colors">
            Architecture
          </a>
          <a href="#lab" className="hover:text-accent-android transition-colors">
            Lab
          </a>
          <a href="#proof" className="hover:text-accent-android transition-colors">
            Proof
          </a>
          <a href="#about" className="hover:text-accent-android transition-colors">
            Ethos
          </a>
          <a href="#credentials" className="hover:text-accent-android transition-colors">
            Credentials
          </a>
          <a href="#contact" className="hover:text-accent-android transition-colors">
            Contact
          </a>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-typography-muted hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Copyright & Technical Colophon */}
      <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-typography-muted">
        <div>
          © 2026 Vaidik Gandhi · VaidikTech. All rights reserved.
        </div>
        <div>
          Deterministic offline-first engineering. 0 KB telemetry.
        </div>
      </div>
    </footer>
  );
};
