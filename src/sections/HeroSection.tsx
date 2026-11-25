"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { Magnetic } from "@/components/ui/Magnetic";

const HERO_APPS = [
  {
    id: "girvi" as const,
    name: "Girvi · गिरवी",
    badge: "0 Perms · Play Store",
    accent: "#3DDC84",
    subtitle: "Offline Pawn & Gold Loan Ledger · Long Paise Math",
    screen: "/assets/apps/girvi/01_dashboard.png",
  },
  {
    id: "jewelbill" as const,
    name: "JewelBill · POS",
    badge: "240ms Print · Play Store",
    accent: "#F5C26B",
    subtitle: "Bluetooth ESC/POS Jewellery Billing · HSN 7113",
    screen: "/assets/apps/jewelbill/01_dashboard.png",
  },
  {
    id: "advokosh" as const,
    name: "AdvoKosh · एडवोकोश",
    badge: "StrongBox · Play Store",
    accent: "#7C5CFF",
    subtitle: "SQLCipher AES-256 Advocate Chamber Vault · IPC↔BNS",
    screen: "/assets/apps/advokosh/01_dashboard.png",
  },
];

export const HeroSection: React.FC = () => {
  const { activeAppId, setActiveAppId, isPlugPulled, isOffline } = useWorldStore();
  const [spotlightMode, setSpotlightMode] = useState<"portrait" | "app">("portrait");

  const isDisconnected = isPlugPulled || isOffline;
  const activeApp = HERO_APPS.find((a) => a.id === activeAppId) || HERO_APPS[0];

  const handleSelectApp = (id: "girvi" | "jewelbill" | "advokosh") => {
    proceduralAudio.tick();
    setActiveAppId(id);
    setSpotlightMode("app");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col justify-between pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Top Identity Strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3.5 pointer-events-auto"
      >
        <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-widest uppercase text-typography-muted">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isDisconnected ? "bg-accent-android animate-ping" : "bg-sky-400"
            }`}
          />
          <span>Vaidik Gandhi · Bhopal, India</span>
        </div>

        <span className="text-[11px] font-mono text-typography-faint tabular-mono">
          STILL EARLY · BUILDING WITH INTENT
        </span>
      </motion.div>

      {/* Main 12-Col Hero: Left Personal Voice + Apps | Right Seamless Studio Portrait */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center pointer-events-auto">
        {/* Left 7 Cols */}
        <div className="md:col-span-7 flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="swiss-display font-heading font-bold text-white"
          >
            Quietly focused.{" "}
            <span className="text-typography-muted font-normal block sm:inline">
              Restlessly curious.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-sm sm:text-base text-typography-muted font-sans leading-relaxed max-w-xl"
          >
            I&apos;m <strong className="text-white font-semibold">Vaidik</strong>—I observe deeply, stay calm when things get chaotic, and can&apos;t leave a hard question alone until I truly understand it. Still early in my journey, building out of Bhopal with intent: figuring out problems without a manual, pushing past yesterday, and making real things work for ordinary people around me.
          </motion.p>

          {/* Flagship Apps Switcher Kept Right in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint mb-2">
              Shipped on Google Play · Click to preview
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {HERO_APPS.map((app) => {
                const isActive = spotlightMode === "app" && app.id === activeAppId;
                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => handleSelectApp(app.id)}
                    style={isActive ? { borderColor: `${app.accent}90` } : undefined}
                    className={`relative overflow-hidden flex items-center gap-2 px-3 py-2 rounded-md border text-xs font-mono transition-colors cursor-pointer ${
                      isActive
                        ? "bg-white/[0.08] text-white font-semibold"
                        : "bg-white/[0.02] border-white/10 text-typography-muted hover:text-white hover:border-white/25"
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: app.accent }}
                    />
                    <span>{app.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap items-center gap-3"
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
                <span>All Engineering Works</span>
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

        {/* Right 5 Cols: Seamless Obsidian Studio Portrait or Interactive App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col items-center md:items-end justify-center relative"
        >
          {spotlightMode === "portrait" ? (
            <div
              className="relative w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[390px] aspect-[3/4] overflow-hidden select-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 74%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 74%, transparent 100%)",
              }}
            >
              {/* True Alpha Radial Feather So Portrait Melts Effortlessly Into Obsidian Canvas */}
              <div
                className="relative w-full h-full"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 74% 84% at 50% 45%, black 45%, rgba(0,0,0,0.75) 66%, transparent 98%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 74% 84% at 50% 45%, black 45%, rgba(0,0,0,0.75) 66%, transparent 98%)",
                }}
              >
                <Image
                  src="/assets/vaidik_hero_studio.jpg"
                  alt="Vaidik Gandhi"
                  fill
                  sizes="(max-width: 768px) 330px, 390px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[320px] sm:max-w-[340px] rounded-2xl border border-white/15 bg-[#080A0F]/95 backdrop-blur-xl p-2.5 shadow-2xl">
              <div className="flex items-center justify-between px-1.5 py-1.5 text-[10px] font-mono">
                <span className="truncate font-semibold text-white">{activeApp.name}</span>
                <button
                  type="button"
                  onClick={() => {
                    proceduralAudio.tick();
                    setSpotlightMode("portrait");
                  }}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 hover:border-white/30 text-typography-muted hover:text-white cursor-pointer"
                >
                  <X className="w-3 h-3" />
                  <span>Photo</span>
                </button>
              </div>

              <Link
                href={`/projects/${activeApp.id}`}
                onClick={() => proceduralAudio.tick()}
                className="group relative block aspect-[9/15] w-full rounded-xl overflow-hidden border border-white/10 bg-[#050608]"
              >
                <Image
                  src={activeApp.screen}
                  alt={`${activeApp.name} live interface`}
                  fill
                  sizes="300px"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#050608] via-[#050608]/80 to-transparent flex items-center justify-between text-[10px] font-mono">
                  <span className="text-typography-muted truncate pr-2">{activeApp.subtitle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white flex-shrink-0" />
                </div>
              </Link>
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Hairline Personal Principles Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-5 border-t border-white/[0.08] pt-5 pointer-events-auto"
      >
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            01 // Temperament
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1">
            Calm under chaos
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            02 // Habit
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1">
            Let actions do the talking
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint">
            03 // Drive
          </div>
          <div className="text-xs sm:text-sm font-sans font-medium text-white mt-1">
            Hard problems, no manual
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            proceduralAudio.tick();
            document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-left group cursor-pointer"
        >
          <div className="text-[10px] font-mono uppercase tracking-widest text-typography-faint group-hover:text-accent-android transition-colors">
            04 // Proof ↓
          </div>
          <div className="text-xs sm:text-sm font-mono font-medium text-accent-android mt-1">
            See what curiosity built
          </div>
        </button>
      </motion.div>
    </section>
  );
};
