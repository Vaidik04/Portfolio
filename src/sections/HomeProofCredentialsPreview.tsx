"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Award, ArrowRight, ShieldCheck, Scale, Printer, CheckCircle, GraduationCap } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const HomeProofCredentialsPreview: React.FC = () => {
  const topCerts = CERTIFICATES.filter((c) => c.category === "nptel").slice(0, 3);

  return (
    <section
      id="proof-credentials"
      className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Card: Live Benchmarks & Proof */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#0E1118]/85 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C26B]/10 border border-[#F5C26B]/30 text-xs font-mono text-[#F5C26B] w-fit mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Real-Time Benchmarks</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-typography-primary tracking-tight mb-3">
              Live Field Proof
            </h3>

            <p className="text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed mb-6">
              Deterministic verification run against constrained Android silicon and thermal paper printers. No approximations, no telemetry leaks.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xl sm:text-2xl font-mono font-black text-accent-android">
                  0.000%
                </div>
                <div className="text-[11px] font-mono text-typography-muted mt-1">
                  Float Loss (Long Paise)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xl sm:text-2xl font-mono font-black text-[#F5C26B]">
                  240ms
                </div>
                <div className="text-[11px] font-mono text-typography-muted mt-1">
                  Thermal POS Invoicing
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xl sm:text-2xl font-mono font-black text-accent-violet">
                  256-bit
                </div>
                <div className="text-[11px] font-mono text-typography-muted mt-1">
                  AES-GCM StrongBox
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-xl sm:text-2xl font-mono font-black text-accent-cyan">
                  99.98%
                </div>
                <div className="text-[11px] font-mono text-typography-muted mt-1">
                  Field Crash-Free Rate
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-typography-muted">
              Live interactive math & cipher simulator
            </span>
            <Link
              href="/proof"
              onClick={() => proceduralAudio.tick()}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F5C26B] hover:underline"
            >
              <span>Inspect Benchmarks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Card: Verified IIT Credentials */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#0E1118]/85 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan w-fit mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Ministry of Education · NPTEL</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-typography-primary tracking-tight mb-3">
              Verified IIT Rigor
            </h3>

            <p className="text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed mb-6">
              Formal proctored examinations certified by India&apos;s premier institutions across Java concurrency, data structures, and database systems.
            </p>

            <div className="space-y-3 mb-6">
              {topCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <GraduationCap className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                    <div className="truncate">
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-typography-primary truncate">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-mono text-typography-muted truncate block">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan font-bold whitespace-nowrap">
                    {cert.badge || "Verified"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-typography-muted">
              {CERTIFICATES.length} certified exams on record
            </span>
            <Link
              href="/credentials"
              onClick={() => proceduralAudio.tick()}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:underline"
            >
              <span>View All Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
