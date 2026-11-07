"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 px-6 max-w-6xl mx-auto w-full z-10"
    >
      {/* Top Headline & Lead Copy */}
      <div className="max-w-2xl flex flex-col gap-8 my-auto">
        {/* Subtle Editorial Kicker */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-brand" />
          <span className="text-xs font-mono tracking-wider uppercase text-typography-muted">
            Independent Android Developer · Founder @ VaidikTech
          </span>
        </div>

        {/* Large Confident Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-[-0.035em] text-typography-primary leading-[1.08]">
          I build native, offline-first Android apps that run businesses.
        </h1>

        {/* Short, Specific Sub-line */}
        <p className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-xl">
          Founder of VaidikTech. I engineer hardened mobile software with Jetpack Compose, Room SQLite, and hardware-backed SQLCipher encryption—designed specifically for advocates, pawnbrokers, and jewellers operating in zero-connectivity environments.
        </p>

        {/* Two Clear Actions: One Primary, One Quiet Secondary */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand hover:bg-brand-light text-white text-sm font-sans font-semibold tracking-wide transition-all shadow-[0_2px_16px_rgba(43,91,255,0.35)] hover:scale-[1.02]"
          >
            <span>See the work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-surface-border hover:border-surface-border-hover bg-surface/50 text-typography-secondary hover:text-typography-primary text-sm font-sans font-medium transition-all"
          >
            <span>Architecture story</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Honest Proof Row (Zero Vanity Stats, Only Verified Shipments) */}
      <div className="pt-12 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-typography-muted">
        <div className="flex items-center gap-2">
          <span className="text-typography-secondary font-medium">Shipped on Google Play:</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=com.girvi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-typography-primary hover:text-brand transition-colors"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-sans font-medium">Girvi</span>
            <span className="text-typography-muted font-mono text-[10px]">(Pawn Ledger)</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.jewellery.invoice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-typography-primary hover:text-brand transition-colors"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-sans font-medium">JewelBill</span>
            <span className="text-typography-muted font-mono text-[10px]">(Jewellery POS)</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.advokosh.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-typography-primary hover:text-brand transition-colors"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-sans font-medium">AdvoKosh</span>
            <span className="text-typography-muted font-mono text-[10px]">(Advocate Diary)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
