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
          <span className="w-2 h-2 rounded-full bg-brand" />
          <span className="text-xs font-mono tracking-wider uppercase text-typography-muted">
            03 · Founder Ethos & Background
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
          Why I build for India&apos;s trades.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Human Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg font-sans text-typography-secondary leading-relaxed">
          <p>
            I am an independent Android developer based in Bhopal, India, and the founder of{" "}
            <a
              href="https://vaidiktech.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-typography-primary font-semibold hover:text-brand underline decoration-brand/40 underline-offset-4 transition-colors"
            >
              VaidikTech
            </a>
            . I engineer native mobile software for people whose daily livelihood depends on accuracy: advocates managing strict court limitation diaries, jewellers calculating gold purity on busy counters, and pawnbrokers safeguarding gold loan pledges.
          </p>

          <p>
            Traditional trade in India does not happen in quiet offices with gigabit fiber. It happens in crowded basements with erratic power, blinding sunlight, and zero cellular reception. When a jeweller prints a tax invoice or an advocate checks a court cause list, a cloud timeout isn&apos;t an inconvenience—it halts business.
          </p>

          <p>
            That is why my architecture strictly mandates <strong className="text-typography-primary font-semibold">100% offline data sovereignty</strong>, zero-drift integer-paise math, and hardware-backed SQLCipher encryption. I handle the entire product lifecycle: from field workflow observation, to Jetpack Compose architecture, to releasing and supporting verified signed builds on the Google Play Store.
          </p>

          {/* Quick Verified Bio Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-surface-border text-xs font-sans">
            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-typography-primary block">Studio</span>
                <span className="text-typography-muted">Founder @ VaidikTech</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-typography-primary block">Education</span>
                <span className="text-typography-muted">B.Tech CSE (AI & ML) · LNCT Bhopal</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold text-typography-primary block">Base</span>
                <span className="text-typography-muted">Bhopal, India (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Architectural Portrait Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-3xl overflow-hidden border border-surface-border bg-surface p-3 shadow-xl relative group">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0D14]">
              <Image
                src="/assets/vaidik_portrait_pro.jpg"
                alt="Vaidik Gandhi · Founder of VaidikTech"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-sm text-typography-primary">
                  Vaidik Gandhi
                </div>
                <a
                  href="https://vaidiktech.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-brand hover:underline flex items-center gap-1"
                >
                  <span>vaidiktech.app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <span className="text-xs font-mono text-typography-muted">Bhopal, IN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
