"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-6 max-w-6xl mx-auto w-full z-10"
    >
      {/* Top Headline & Lead Copy */}
      <div className="max-w-xl lg:max-w-2xl flex flex-col gap-6 my-auto">
        {/* Subtle Editorial Kicker Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-surface-border text-xs font-mono text-typography-secondary w-fit backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="tracking-wide">Vaidik Gandhi · Founder @ VaidikTech</span>
        </div>

        {/* Large Confident Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-heading font-extrabold tracking-tight text-typography-primary leading-[1.12]">
          I build native, offline-first Android apps that run businesses.
        </h1>

        {/* Short, Specific Sub-line */}
        <p className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-lg">
          Engineering sovereign mobile tools with Jetpack Compose, Room SQLite, and hardware-backed SQLCipher encryption—designed specifically for India&apos;s trades operating in zero-connectivity environments.
        </p>

        {/* Two Clear Actions: One Primary, One Quiet Secondary */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand hover:bg-brand-light text-white text-sm font-sans font-semibold tracking-wide transition-all shadow-[0_4px_20px_rgba(43,91,255,0.35)] hover:scale-[1.02]"
          >
            <span>See the work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-surface-border hover:border-surface-border-hover bg-surface/60 text-typography-secondary hover:text-typography-primary text-sm font-sans font-medium transition-all backdrop-blur-md"
          >
            <span>Architecture story</span>
            <ArrowUpRight className="w-4 h-4 text-brand" />
          </a>
        </div>
      </div>

      {/* Honest Proof Row (Zero Vanity Stats, Only Verified Shipments) */}
      <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-typography-muted">
        <div className="flex items-center gap-2 font-mono text-typography-secondary font-medium uppercase tracking-wider text-[11px]">
          <span>Shipped on Google Play:</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=com.girvi.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/60 border border-surface-border text-typography-primary hover:text-brand hover:border-brand/40 transition-all"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-semibold text-xs">Girvi</span>
            <span className="text-[10px] font-mono text-typography-muted">Pawn Ledger</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.jewellery.invoice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/60 border border-surface-border text-typography-primary hover:text-brand hover:border-brand/40 transition-all"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-semibold text-xs">JewelBill</span>
            <span className="text-[10px] font-mono text-typography-muted">Jewellery POS</span>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.advokosh.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/60 border border-surface-border text-typography-primary hover:text-brand hover:border-brand/40 transition-all"
          >
            <Play className="w-3 h-3 fill-brand text-brand" />
            <span className="font-semibold text-xs">AdvoKosh</span>
            <span className="text-[10px] font-mono text-typography-muted">Advocate Diary</span>
          </a>
        </div>
      </div>
    </section>
  );
};
