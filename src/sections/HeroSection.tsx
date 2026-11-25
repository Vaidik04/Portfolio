"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { Magnetic } from "@/components/ui/Magnetic";

export const HeroSection: React.FC = () => {
  const { isPlugPulled, isOffline } = useWorldStore();
  const isDisconnected = isPlugPulled || isOffline;

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex flex-col justify-between pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Top Identity Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 pointer-events-auto max-w-2xl"
      >
        <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-widest uppercase text-typography-muted">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDisconnected ? "bg-accent-android animate-ping" : "bg-sky-400"
            }`}
          />
          <span>Systems &amp; Applied AI Engineer</span>
        </div>

        <span className="text-[11px] font-mono text-typography-faint tabular-mono">
          B.TECH CSE (AI &amp; ML) &apos;26
        </span>
      </motion.div>

      {/* Center Editorial Block — Clear Space Left for 3D Monolith Right */}
      <div className="my-auto py-10 sm:py-14 max-w-2xl pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="swiss-display font-heading font-bold text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)]"
        >
          Systems that think locally{" "}
          <span className="text-typography-muted block sm:inline font-normal">
            and endure offline.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm sm:text-base text-typography-muted font-sans leading-relaxed max-w-xl"
        >
          I&apos;m <strong className="text-white font-semibold">Vaidik Gandhi</strong>—an engineer building distributed P2P meshes, quantum-inspired routing solvers, edge computer vision tools, and zero-connectivity Android software shipped independently under{" "}
          <span className="text-white/90">VaidikTech</span>.
        </motion.p>

        {/* Two Clean Surgical CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Magnetic strength={0.22}>
            <button
              type="button"
              onClick={() => {
                proceduralAudio.tick();
                document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[#050608] hover:bg-accent-android font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Selected Works</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </Magnetic>

          <Magnetic strength={0.22}>
            <Link
              href="/contact"
              onClick={() => proceduralAudio.tick()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 bg-white/[0.03] hover:border-white/40 hover:bg-white/[0.06] text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      {/* Bottom Hairline Specification Strip (No Box Clutter) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.32 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/[0.08] pt-5 pointer-events-auto"
      >
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            01 // Focus
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1">
            Distributed Systems &amp; AI
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            02 // Output
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1 tabular-mono">
            35+ Systems · 3 Live Releases
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            03 // Credentials
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1">
            IIT Kharagpur &amp; Madras (NPTEL)
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            proceduralAudio.tick();
            document.getElementById("engineering-craft")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-left group cursor-pointer"
        >
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint group-hover:text-accent-android transition-colors">
            04 // Interactive Proof ↓
          </div>
          <div className="text-xs sm:text-sm font-mono font-medium text-accent-android mt-1 tabular-mono">
            0.0000% Drift · 0 KB Cloud
          </div>
        </button>
      </motion.div>
    </section>
  );
};
