"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneMockup3D } from "@/components/canvas/PhoneMockup3D";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown, ArrowUpRight, Download, Play, Sparkles } from "lucide-react";

const ROTATING_WORDS = ["earn", "scale", "ship", "solve"];

export const HeroSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent-violet/10 via-accent-cyan/10 to-accent-android/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Status Pill */}
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md w-fit">
                <span className="w-2 h-2 rounded-full bg-accent-android shadow-[0_0_8px_#3DDC84] animate-pulse" />
                <span className="text-xs font-mono text-typography-primary font-medium tracking-wide">
                  Independent Android Developer · Founder @ VaidikTech
                </span>
              </div>
            </Reveal>

            {/* Giant Cinema Headline */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold tracking-[-0.035em] text-typography-primary leading-[1.04]">
                I build apps that{" "}
                <span className="inline-block relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_WORDS[wordIndex]}
                      initial={{ y: "80%", opacity: 0, rotateX: 60 }}
                      animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                      exit={{ y: "-80%", opacity: 0, rotateX: -60 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block text-accent-android drop-shadow-[0_0_35px_rgba(61,220,132,0.45)] underline decoration-accent-android/30 underline-offset-8"
                    >
                      {ROTATING_WORDS[wordIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </Reveal>

            {/* Sub-line */}
            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-typography-secondary font-sans leading-relaxed max-w-2xl">
                Engineering native, <strong className="text-typography-primary font-semibold">offline-first mobile products</strong> with{" "}
                <span className="text-accent-android font-mono text-sm px-1.5 py-0.5 rounded bg-accent-android/10 border border-accent-android/20">
                  Kotlin
                </span>
                ,{" "}
                <span className="text-accent-violet font-mono text-sm px-1.5 py-0.5 rounded bg-accent-violet/10 border border-accent-violet/20">
                  Jetpack Compose
                </span>
                , and cryptographic local databases that simplify complex Indian business workflows.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Magnetic strength={0.3}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-accent-android text-[#05060A] font-sans font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(61,220,132,0.35)] hover:shadow-[0_0_45px_rgba(61,220,132,0.65)] hover:scale-[1.02] transition-all duration-300"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.3}>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.girvi.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-surface border border-surface-border text-typography-primary font-sans font-medium text-sm hover:border-accent-android/50 hover:bg-surface-hover transition-all duration-300"
                  >
                    <Play className="w-4 h-4 fill-accent-android text-accent-android" />
                    <span>Girvi on Play Store</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.3}>
                  <a
                    href="https://github.com/Vaidik04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-transparent border border-white/10 text-typography-secondary hover:text-typography-primary hover:border-white/20 font-sans font-medium text-sm transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>GitHub (@Vaidik04)</span>
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            {/* Quick Micro-Metrics */}
            <Reveal direction="up" delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5 mt-4">
                <div>
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-typography-primary">
                    4+
                  </div>
                  <div className="text-xs font-mono text-typography-muted">Commercial Apps</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-accent-android">
                    100%
                  </div>
                  <div className="text-xs font-mono text-typography-muted">Offline Uptime</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-typography-primary">
                    120+
                  </div>
                  <div className="text-xs font-mono text-typography-muted">GitHub Repos</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-accent-cyan">
                    &lt;15ms
                  </div>
                  <div className="text-xs font-mono text-typography-muted">Edge AI Vision</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Phone Mockup (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <Reveal direction="left" delay={0.3}>
              <PhoneMockup3D />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll Indicator at Bottom */}
      <div className="flex flex-col items-center justify-center gap-2 pt-12 pb-4 z-10 text-typography-muted">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll To Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-accent-android" />
        </motion.div>
      </div>
    </section>
  );
};
