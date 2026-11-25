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
      className="relative min-h-[86vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Top Personal Identity Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3.5 pointer-events-auto max-w-2xl"
      >
        <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-widest uppercase text-typography-muted">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDisconnected ? "bg-accent-android animate-ping" : "bg-sky-400"
            }`}
          />
          <span>Vaidik Gandhi · Systems &amp; Applied AI Engineer</span>
        </div>

        <span className="text-[11px] font-mono text-typography-faint tabular-mono">
          LNCT BHOPAL · CSE (AI &amp; ML) &apos;26
        </span>
      </motion.div>

      {/* Main Personal Intro — Crisp, Human, Zero Card Clutter */}
      <div className="my-auto py-8 sm:py-10 max-w-2xl pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="swiss-display font-heading font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
        >
          I build AI systems, distributed meshes, and software{" "}
          <span className="text-accent-android">that doesn&apos;t quit.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-sm sm:text-base text-typography-muted font-sans leading-relaxed max-w-xl"
        >
          From peer-to-peer <strong className="text-white font-medium">SwarmOS</strong> meshes, quantum-inspired{" "}
          <strong className="text-white font-medium">QRoute</strong> transit solvers, and edge YOLOv8 vision to{" "}
          <strong className="text-white font-medium">100% offline mobile apps</strong> running real Indian businesses under VaidikTech—engineered from first principles with exact integer math and hardware security.
        </motion.p>

        {/* Two Clean Surgical CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={() => {
                proceduralAudio.tick();
                document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#050608] hover:bg-accent-android font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </Magnetic>

          <Magnetic strength={0.2}>
            <Link
              href="/contact"
              onClick={() => proceduralAudio.tick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/15 bg-white/[0.03] hover:border-white/40 hover:bg-white/[0.06] text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      {/* Bottom Hairline Specification Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.28 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-5 border-t border-white/[0.08] pt-5 pointer-events-auto"
      >
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            01 // AI &amp; Optimization
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1">
            SwarmOS · QRoute · YOLOv8
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            02 // Shipped Software
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1 tabular-mono">
            3 Play Store Releases · 37+ Builds
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            03 // Hardware &amp; Crypto
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1">
            StrongBox TEE · SQLCipher AES-256
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
            04 // Interactive Proofs ↓
          </div>
          <div className="text-xs sm:text-sm font-mono font-medium text-accent-android mt-1 tabular-mono">
            Outage Switch · Math · Thermal POS
          </div>
        </button>
      </motion.div>
    </section>
  );
};
