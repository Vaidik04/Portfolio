"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Shield, Smartphone, Terminal, Award, Sparkles, MapPin, GraduationCap } from "lucide-react";

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const highlight1 = useTransform(scrollYProgress, [0.15, 0.3], [0.35, 1]);
  const highlight2 = useTransform(scrollYProgress, [0.3, 0.45], [0.35, 1]);
  const highlight3 = useTransform(scrollYProgress, [0.45, 0.6], [0.35, 1]);
  const highlight4 = useTransform(scrollYProgress, [0.6, 0.75], [0.35, 1]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Pill */}
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-android text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 · The Engineer & Philosophy</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Story-Style Kinetic Bio (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-[1.12]">
                Building sovereign software for people who work in the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-android via-accent-cyan to-accent-violet">
                  real world
                </span>
                .
              </h2>
            </Reveal>

            {/* Scroll-Triggered Illuminating Paragraphs */}
            <div className="flex flex-col gap-6 font-sans text-base sm:text-lg leading-relaxed">
              <motion.p style={{ opacity: highlight1 }} className="transition-opacity duration-300">
                I am an independent Android developer and the founder of{" "}
                <strong className="text-typography-primary font-semibold">VaidikTech</strong>. My
                journey began with deep curiosity about how software interacts with hardware and how it
                can eliminate friction in overlooked everyday businesses.
              </motion.p>

              <motion.p style={{ opacity: highlight2 }} className="transition-opacity duration-300">
                Over time, curiosity matured into an uncompromising engineering ethos:{" "}
                <strong className="text-accent-android font-medium">
                  never build superficial demos or theoretical coursework prototypes
                </strong>
                . I build complete, hardened applications that real pawnbrokers, advocates, jewellers, and solo
                tradespeople depend upon every single day.
              </motion.p>

              <motion.p style={{ opacity: highlight3 }} className="transition-opacity duration-300">
                Operating in India means designing for hostile constraints: sporadic 2G/3G connectivity,
                dense basements with zero cellular reception, blinding outdoor sunlight, and zero tolerance
                for fractional currency drift. That is why my apps strictly mandate{" "}
                <span className="text-accent-cyan font-mono text-sm px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                  Zero INTERNET Permissions
                </span>
                ,{" "}
                <span className="text-accent-violet font-mono text-sm px-2 py-0.5 rounded bg-accent-violet/10 border border-accent-violet/20">
                  256-bit SQLCipher AES
                </span>
                , and integer paise monetary mathematics.
              </motion.p>

              <motion.p style={{ opacity: highlight4 }} className="transition-opacity duration-300">
                I am currently pursuing my B.Tech in Computer Science and Engineering, specialising in{" "}
                <strong className="text-typography-primary font-semibold">
                  Artificial Intelligence and Machine Learning
                </strong>{" "}
                at Lakshmi Narain College of Technology (LNCT), Bhopal.
              </motion.p>
            </div>

            {/* Academic & Location Pill */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-typography-secondary">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface border border-surface-border">
                  <GraduationCap className="w-3.5 h-3.5 text-accent-android" />
                  <span>LNCT Bhopal · B.Tech CSE (AI & ML)</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface border border-surface-border">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Bhopal, India (UTC+5:30)</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Glitch Photo Card & Bento Stats (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Duotone Glitch Photo Card */}
            <Reveal direction="left" delay={0.2}>
              <TiltCard className="p-3 bg-gradient-to-b from-surface-elevated to-surface group cursor-pointer">
                <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-[#0A0D16]">
                  <Image
                    src="/assets/avatar.png"
                    alt="Vaidik Gandhi"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                  />
                  {/* Duotone Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-transparent to-accent-android/10 opacity-70 group-hover:opacity-30 transition-opacity duration-300" />

                  {/* Scanline Glitch Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090C14]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-sm font-heading font-bold text-typography-primary">
                        Vaidik Gandhi
                      </div>
                      <div className="text-[10px] font-mono text-accent-android">
                        Founder @ VaidikTech
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-accent-android/20 border border-accent-android/40 flex items-center justify-center text-accent-android">
                      <Terminal className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            {/* 4 Bento Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Reveal direction="up" delay={0.25}>
                <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1 transition-all duration-300 hover:border-accent-android/40 hover:bg-surface-hover">
                  <Smartphone className="w-4 h-4 text-accent-android mb-1" />
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-typography-primary">
                    3
                  </div>
                  <div className="text-xs font-mono font-medium text-typography-secondary">
                    Play Store Apps
                  </div>
                  <div className="text-[10px] text-typography-muted">Girvi, JewelBill, AdvoKosh</div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1 transition-all duration-300 hover:border-accent-violet/40 hover:bg-surface-hover">
                  <Shield className="w-4 h-4 text-accent-violet mb-1" />
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-accent-violet">
                    100%
                  </div>
                  <div className="text-xs font-mono font-medium text-typography-secondary">
                    Offline Sovereignty
                  </div>
                  <div className="text-[10px] text-typography-muted">Zero Cloud Sockets</div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.35}>
                <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1 transition-all duration-300 hover:border-accent-cyan/40 hover:bg-surface-hover">
                  <Terminal className="w-4 h-4 text-accent-cyan mb-1" />
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-typography-primary">
                    120+
                  </div>
                  <div className="text-xs font-mono font-medium text-typography-secondary">
                    GitHub Repos
                  </div>
                  <div className="text-[10px] text-typography-muted">Open Source & Research</div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1 transition-all duration-300 hover:border-accent-android/40 hover:bg-surface-hover">
                  <Award className="w-4 h-4 text-accent-android mb-1" />
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-accent-android">
                    Long
                  </div>
                  <div className="text-xs font-mono font-medium text-typography-secondary">
                    Integer Paise Math
                  </div>
                  <div className="text-[10px] text-typography-muted">Zero Floating Drift</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
