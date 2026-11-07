"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 max-w-6xl mx-auto w-full border-t border-surface-border text-xs font-sans text-typography-muted z-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-12 border-b border-surface-border">
        {/* Brand Identification */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center p-2">
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
              Founder · VaidikTech Mobile Lab
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center gap-6 text-typography-secondary">
          <a href="#work" className="hover:text-typography-primary transition-colors">
            Work
          </a>
          <a href="#architecture" className="hover:text-typography-primary transition-colors">
            Architecture
          </a>
          <a href="#engineering" className="hover:text-typography-primary transition-colors">
            Engineering
          </a>
          <a href="#about" className="hover:text-typography-primary transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-typography-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-border hover:border-surface-border-hover text-typography-secondary hover:text-typography-primary transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Copyright & Technical Colophon */}
      <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-typography-muted">
        <div>
          © {new Date().getFullYear()} Vaidik Gandhi. All rights reserved.
        </div>
        <div>
          Engineered with Next.js, Three.js & Tailwind CSS. Zero third-party trackers.
        </div>
      </div>
    </footer>
  );
};
