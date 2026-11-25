"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, GraduationCap, MapPin, Building2, Award } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const AboutCredentialsSection: React.FC = () => {
  const [avatarMode, setAvatarMode] = useState<"authentic" | "avatar">("authentic");
  const topCerts = CERTIFICATES.filter((c) => c.category === "nptel").slice(0, 4);

  return (
    <section
      id="about-me"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Header */}
      <div className="pb-10 border-b border-white/[0.08] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono uppercase tracking-widest text-typography-faint mb-3">
            04 // Engineer Profile &amp; Verified Rigor
          </div>
          <h2 className="swiss-heading font-heading font-bold text-white">
            Building deterministic software for unpredictable environments.
          </h2>
        </div>

        <Link
          href="/about"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-accent-android transition-colors self-start lg:self-auto"
        >
          <span>Full Bio &amp; Experience Timeline</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Main 12-Col Hairline Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08]">
        {/* Left 7 Cols: Personal Narrative + Verified Credentials Ledger */}
        <div className="lg:col-span-7 py-8 lg:pr-10 flex flex-col justify-between gap-10">
          <div className="space-y-4 text-sm sm:text-base text-typography-muted font-sans leading-relaxed">
            <p>
              I am <strong className="text-white font-semibold">Vaidik Gandhi</strong>, a final-year B.Tech Computer Science (AI &amp; ML) engineer at LNCT Bhopal (&apos;26). My engineering work moves across two interconnected frontiers: <strong className="text-white font-medium">intelligent distributed systems</strong>—such as peer-to-peer SwarmOS meshes, simulated-annealing transit optimization (QRoute), and edge computer vision—and <strong className="text-white font-medium">offline-first native applications</strong> shipped to real businesses under my studio venture, VaidikTech.
            </p>
            <p>
              I care deeply about what happens when assumptions break: erratic connectivity in concrete basements, floating-point drift over thousands of ledger entries, and keeping private data isolated inside hardware security modules instead of multi-tenant clouds.
            </p>

            {/* Clean Metadata Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] text-xs">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Education</span>
                  <span className="font-mono text-[11px] text-typography-faint">B.Tech CSE (AI &amp; ML) &apos;26</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-accent-android flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Independent Studio</span>
                  <span className="font-mono text-[11px] text-typography-faint">Founder @ VaidikTech</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-typography-muted flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Location</span>
                  <span className="font-mono text-[11px] text-typography-faint">Bhopal, India (IST)</span>
                </div>
              </div>
            </div>
          </div>

          {/* NPTEL / IIT Verified Credentials Table (No Box Soup) */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-[11px] font-mono uppercase tracking-widest text-typography-faint flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>Proctored IIT / NPTEL Certifications</span>
              </span>
              <Link
                href="/credentials"
                onClick={() => proceduralAudio.tick()}
                className="text-[11px] font-mono text-sky-400 hover:underline"
              >
                All {CERTIFICATES.length} Credentials →
              </Link>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {topCerts.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group"
                >
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-medium text-white group-hover:text-accent-android transition-colors truncate">
                      {cert.title}
                    </div>
                    <div className="text-[11px] font-mono text-typography-faint truncate">
                      {cert.issuer} · {cert.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <span className="text-[10px] font-mono text-sky-400">
                      {cert.score || cert.badge}
                    </span>
                    <ExternalLink className="w-3 h-3 text-typography-faint group-hover:text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Clean Portrait Showcase */}
        <div className="lg:col-span-5 lg:border-l border-t lg:border-t-0 border-white/[0.08] py-8 lg:pl-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
                Portrait // ID Verification
              </span>

              <div className="flex items-center p-0.5 rounded-md border border-white/10 bg-white/[0.02] text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => {
                    proceduralAudio.tick();
                    setAvatarMode("authentic");
                  }}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    avatarMode === "authentic"
                      ? "bg-white text-[#050608] font-bold"
                      : "text-typography-faint hover:text-white"
                  }`}
                >
                  Photo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    proceduralAudio.tick();
                    setAvatarMode("avatar");
                  }}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    avatarMode === "avatar"
                      ? "bg-white text-[#050608] font-bold"
                      : "text-typography-faint hover:text-white"
                  }`}
                >
                  3D Twin
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/4.3] w-full rounded-lg overflow-hidden border border-white/[0.08] bg-[#080A0F] group">
              <Image
                src={
                  avatarMode === "authentic"
                    ? "/assets/vaidik_authentic_square.jpg"
                    : "/assets/vaidik_avatar_3d.png"
                }
                alt="Vaidik Gandhi"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#050608] via-[#050608]/60 to-transparent flex items-center justify-between text-[11px] font-mono">
                <span className="text-white">Vaidik Gandhi</span>
                <span className="text-accent-android">github.com/Vaidik04</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-typography-faint">
            <span>Kotlin · Python · C++ · TypeScript · SQL</span>
            <Link href="/skills" className="text-white hover:text-sky-400 transition-colors">
              Skills Matrix →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
