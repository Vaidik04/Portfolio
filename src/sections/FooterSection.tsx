"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    proceduralAudio.tick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-white/[0.08] text-xs font-mono text-typography-faint z-10 pointer-events-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-heading font-bold text-sm text-white">Vaidik Gandhi</span>
          <span className="text-[11px] text-typography-faint">
            Systems &amp; Applied AI Engineer · Bhopal, India · 0 KB Tracking
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-5 text-[11px]">
          <Link href="/projects" className="hover:text-white transition-colors">
            Works
          </Link>
          <Link href="/lab" className="hover:text-white transition-colors">
            Lab
          </Link>
          <Link href="/architecture" className="hover:text-white transition-colors">
            Architecture
          </Link>
          <Link href="/proof" className="hover:text-white transition-colors">
            Proof
          </Link>
          <Link href="/credentials" className="hover:text-white transition-colors">
            Credentials
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 hover:border-white/30 hover:text-white transition-colors self-start sm:self-auto cursor-pointer"
          aria-label="Scroll to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
