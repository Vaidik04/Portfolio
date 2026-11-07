"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, GraduationCap, Building2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 max-w-6xl mx-auto w-full border-t border-surface-border z-10"
    >
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-mono tracking-wider uppercase text-text-muted">
            Founder Ethos & Background
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-text leading-tight">
          Why I build for India&apos;s trades.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Human Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg font-sans text-text-muted leading-relaxed">
          <p>
            I am an independent Android developer based in Bhopal, India, and the founder of{" "}
            <a
              href="https://vaidiktech.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text font-semibold hover:text-accent underline decoration-accent/40 underline-offset-4 transition-colors"
            >
              VaidikTech
            </a>
            . I engineer native mobile software for people whose daily livelihood depends on accuracy: advocates managing strict court limitation diaries, jewellers calculating gold purity on busy counters, and pawnbrokers safeguarding gold loan pledges.
          </p>

          <p>
            Traditional trade in India does not happen in quiet offices with gigabit fiber. It happens in crowded basements with erratic power, blinding sunlight, and zero cellular reception. When a jeweller prints a tax invoice or an advocate checks a court cause list, a cloud timeout isn&apos;t an inconvenience—it halts business.
          </p>

          <p>
            That is why my architecture strictly mandates <strong className="text-text font-semibold">100% offline data sovereignty</strong>, zero-drift integer-paise math, and hardware-backed SQLCipher encryption. I handle the entire product lifecycle: from field workflow observation, to Jetpack Compose architecture, to releasing and supporting verified signed builds on the Google Play Store.
          </p>

          {/* Quick Verified Bio Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border text-xs font-sans">
            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-text block">Studio</span>
                <span className="text-text-muted">Founder @ VaidikTech</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-text block">Education</span>
                <span className="text-text-muted">B.Tech CSE (AI & ML) · LNCT Bhopal</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-text block">Base</span>
                <span className="text-text-muted">Bhopal, India (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Architectural Portrait Card with 3D Lookalike Avatar */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl overflow-hidden border border-border bg-surface-1 p-3.5 shadow-2xl relative group hover:border-accent/40 transition-all">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-2">
              <Image
                src="/assets/vaidik_3d_avatar_portrait.jpg"
                alt="Vaidik Gandhi · 3D Lookalike Avatar"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
              {/* Subtle architectural gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-text bg-surface-1/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-border">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>Sovereign Architect</span>
                </span>
                <span className="text-text-muted">LNCT Bhopal &apos;26</span>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-sm text-text">
                  Vaidik Gandhi
                </div>
                <a
                  href="https://vaidiktech.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-accent hover:underline flex items-center gap-1 mt-0.5"
                >
                  <span>vaidiktech.app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <span className="text-xs font-mono text-text-muted">Bhopal, IN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
