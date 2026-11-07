"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, GraduationCap, Building2, Shield, Sparkles, UserCheck } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const AboutSovereignSection: React.FC = () => {
  const [avatarMode, setAvatarMode] = useState<"authentic" | "avatar">("authentic");

  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Kicker */}
      <div className="flex flex-col gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-violet w-fit">
          <Shield className="w-3.5 h-3.5" />
          <span>Scene 06 · Sovereign Ethos & Identity</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary">
          Why I build for India&apos;s trades.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Human Narrative & Principles (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg font-sans text-typography-secondary leading-relaxed">
          <p>
            I am an independent Android developer based in Bhopal, India, and the founder of{" "}
            <a
              href="https://vaidiktech.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-accent-android underline decoration-accent-android/40 underline-offset-4 transition-colors"
            >
              VaidikTech
            </a>
            . I engineer native mobile software for trades whose daily livelihood depends on total accuracy: advocates managing statutory court limitation diaries, jewellers calculating gold purity under halogen shop lamps, and pawnbrokers safeguarding gold loan pledges.
          </p>

          <p>
            Traditional trade in India does not happen in air-conditioned offices with gigabit fiber. It happens in crowded basements with erratic power, thick concrete walls, and zero cellular reception. When a jeweller prints a tax invoice or an advocate checks a court cause list, a cloud timeout is not an inconvenience—it halts business.
          </p>

          <p>
            That is why my architecture strictly enforces <strong className="text-typography-primary font-semibold">100% offline data sovereignty</strong>, zero-drift integer-paise math, and hardware-backed SQLCipher encryption. I own the entire lifecycle: from field workflow observation, to Jetpack Compose architecture, to releasing and supporting verified signed builds on the Google Play Store.
          </p>

          {/* Quick Verified Bio Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-sans mt-2">
            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-accent-android flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-typography-primary block">Studio</span>
                <span className="text-typography-muted">Founder @ VaidikTech</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-typography-primary block">Education</span>
                <span className="text-typography-muted">B.Tech CSE (AI & ML) · LNCT &apos;26</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent-violet flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-typography-primary block">Base</span>
                <span className="text-typography-muted">Bhopal, India (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Portrait Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-surface p-4 shadow-2xl relative group hover:border-white/20 transition-all">
            {/* View Mode Toggle: Authentic Portrait vs 3D Avatar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-typography-muted">
                <UserCheck className="w-3.5 h-3.5 text-accent-android" />
                <span>Verified Identity</span>
              </div>

              <div className="flex items-center p-0.5 rounded-lg bg-black/40 border border-white/10 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => {
                    proceduralAudio.tick();
                    setAvatarMode("authentic");
                  }}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    avatarMode === "authentic"
                      ? "bg-accent-android text-black font-bold shadow-sm"
                      : "text-typography-muted hover:text-white"
                  }`}
                >
                  Authentic Photo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    proceduralAudio.tick();
                    setAvatarMode("avatar");
                  }}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    avatarMode === "avatar"
                      ? "bg-accent-violet text-white font-bold shadow-sm"
                      : "text-typography-muted hover:text-white"
                  }`}
                >
                  3D Avatar
                </button>
              </div>
            </div>

            {/* Image Frame with Full Face Clearly Visible */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0D14] border border-white/5">
              <Image
                src={
                  avatarMode === "authentic"
                    ? "/assets/vaidik_authentic_portrait.jpg"
                    : "/assets/vaidik_3d_avatar_portrait.jpg"
                }
                alt={avatarMode === "authentic" ? "Vaidik Gandhi · Authentic Portrait" : "Vaidik Gandhi · 3D Lookalike Avatar"}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top transition-all duration-500 group-hover:scale-[1.02]"
                priority
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/90 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Floating Status Pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 pointer-events-none">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-android animate-pulse shadow-[0_0_8px_#3DDC84]" />
                  <span>Vaidik Gandhi</span>
                </span>
                <span className="text-typography-muted">
                  {avatarMode === "authentic" ? "Original Photograph" : "3D Digital Avatar"}
                </span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-4 px-2 flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-sm text-typography-primary">
                  Vaidik Gandhi
                </div>
                <a
                  href="https://vaidiktech.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-accent-cyan hover:underline inline-flex items-center gap-1 mt-0.5"
                >
                  <span>vaidiktech.app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <span className="text-xs font-mono text-typography-muted">
                LNCT Bhopal &apos;26
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
