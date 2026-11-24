"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, ArrowRight, ShieldCheck, Cpu, Printer, Sparkles } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface FlagshipApp {
  id: "girvi" | "jewelbill" | "advokosh";
  systemNum: string;
  name: string;
  hindiName: string;
  title: string;
  tagline: string;
  icon: string;
  previewImage: string;
  problem: string;
  solution: string;
  tech: string[];
  playStoreUrl: string;
  apkBadge: string;
  accent: string;
  accentBorder: string;
}

const FLAGSHIPS: FlagshipApp[] = [
  {
    id: "girvi",
    systemNum: "SYSTEM 01 // SOVEREIGN",
    name: "Girvi",
    hindiName: "गिरवी",
    title: "GIRVI GOLD LOAN OS",
    tagline: "Air-gapped gold loan ledger & interest engine for Indian pawnbrokers",
    icon: "/assets/apps/girvi/logo.png",
    previewImage: "/assets/apps/girvi/01_dashboard.png",
    problem:
      "Pawnbrokers operating in dense commercial basements with zero cellular connectivity cannot rely on cloud SaaS or recurring internet permissions.",
    solution:
      "Zero-permission air-gapped architecture. Quantizes every rupee into 64-bit Long paise (zero float drift), attaches CameraX 22K/20K pledge evidence photos, and computes monthly compound interest offline.",
    tech: ["KOTLIN 2.0", "JETPACK COMPOSE", "ROOM SQLITE", "CAMERAX", "0 TELEMETRY", "AIR-GAPPED"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.girvi.app",
    apkBadge: "GOOGLE PLAY · 0 PERMS",
    accent: "#C8F802",
    accentBorder: "rgba(200, 248, 2, 0.4)",
  },
  {
    id: "jewelbill",
    systemNum: "SYSTEM 02 // THERMAL I/O",
    name: "JewelBill",
    hindiName: "ज्वेलबिल",
    title: "JEWELBILL POS ENGINE",
    tagline: "Direct ESC/POS Bluetooth thermal invoicing & multi-karat bullion POS",
    icon: "/assets/apps/jewelbill/logo.png",
    previewImage: "/assets/apps/jewelbill/01_dashboard.png",
    problem:
      "Traditional jewellery billing requires complex multi-karat deductions, stone-weight subtraction, split GST, and instant printing on thermal roll paper without network lag.",
    solution:
      "Direct Bluetooth ESC/POS engine driving 58mm/80mm thermal printers in 240ms. Automates HSN 7113 split tax (1.5% CGST + 1.5% SGST) with exact integer-paise precision, backed by IIT Kharagpur Elite Java concurrency.",
    tech: ["JAVA 21 / KOTLIN", "ESC/POS THERMAL", "BLUETOOTH SPP", "ROOM SQLITE", "IIT JAVA ELITE"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
    apkBadge: "GOOGLE PLAY · 240MS PRINT",
    accent: "#F5C26B",
    accentBorder: "rgba(245, 194, 107, 0.4)",
  },
  {
    id: "advokosh",
    systemNum: "SYSTEM 03 // VAULT",
    name: "AdvoKosh",
    hindiName: "एडवोकोश",
    title: "ADVOKOSH CHAMBER VAULT",
    tagline: "Hardware-encrypted litigation diary & High Court statute cross-referencer",
    icon: "/assets/apps/advokosh/logo.png",
    previewImage: "/assets/apps/advokosh/01_dashboard.png",
    problem:
      "Litigation advocates manage confidential case strategies subject to legal professional privilege that cannot be hosted on public multi-tenant clouds.",
    solution:
      "SQLCipher 256-bit AES database locked under hardware Android Keystore MasterKey. Features automated eCourts sync, 8 WorkManager background tasks, and full IPC↔BNS statutory amendment cross-referencing.",
    tech: ["COMPOSE M3", "SQLCIPHER AES-256", "STRONGBOX KEYSTORE", "WORKMANAGER", "BNS MATRIX"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.advokosh.app",
    apkBadge: "GOOGLE PLAY · KEYSTORE VAULT",
    accent: "#7C5CFF",
    accentBorder: "rgba(124, 92, 255, 0.4)",
  },
];

export const HomeFlagshipShowcase: React.FC = () => {
  const { activeAppId, setActiveAppId } = useWorldStore();
  const heroApp = FLAGSHIPS[0]; // Girvi as top spotlight
  const subApps = FLAGSHIPS.slice(1); // JewelBill & AdvoKosh as 2-column cards

  return (
    <section
      id="flagship-showcase"
      className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Section Header: Brutalist Kairos Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#1E222D]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyber uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
            <span>COMMISSION RELEASES // 2024-2026 // PRODUCTION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
            CURATED EXHIBITIONS
          </h2>
        </div>

        <Link
          href="/projects"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#8E94A5] hover:text-cyber transition-colors group"
        >
          <span>VIEW FULL ARCHIVE [35 COMMISSIONS]</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Bento Showcase Grid */}
      <div className="flex flex-col gap-8">
        {/* Top Hero Card: Girvi (Large Spotlight Bento Card) */}
        <div
          onClick={() => {
            setActiveAppId(heroApp.id);
            proceduralAudio.tick();
          }}
          className={`tactical-box rounded-2xl border transition-all duration-300 p-6 sm:p-8 cursor-pointer ${
            activeAppId === heroApp.id
              ? "border-cyber bg-[#0E1015] shadow-[0_0_30px_rgba(200,248,2,0.15)]"
              : "border-[#1E222D] bg-[#0E1015]/90 hover:border-[#2C3242]"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual Screen Preview */}
            <div className="lg:col-span-7 relative h-64 sm:h-96 w-full rounded-xl overflow-hidden border border-[#1E222D] bg-[#07080B] group">
              <Image
                src={heroApp.previewImage}
                alt={`${heroApp.name} Dashboard`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-80" />
              
              {/* Tactical Overlay Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#08090C]/90 border border-cyber/50 text-[10px] font-mono text-cyber font-bold backdrop-blur-md">
                  {heroApp.systemNum}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#08090C]/90 border border-[#1E222D] text-[10px] font-mono text-white backdrop-blur-md">
                  {heroApp.hindiName}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#8E94A5] bg-[#08090C]/90 px-2.5 py-1 rounded border border-[#1E222D] backdrop-blur-md">
                  CAMERA-X PHOTO PLEDGE // 64-BIT PAISE
                </span>
                <span className="text-[10px] font-mono font-bold text-cyber bg-cyber/10 px-2.5 py-1 rounded border border-cyber/30 backdrop-blur-md">
                  0 KB EGRESS
                </span>
              </div>
            </div>

            {/* Right Column: Information & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full gap-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#8E94A5] uppercase">
                    COMMISSION 01 // 2026
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyber/15 border border-cyber/40 text-cyber font-bold uppercase">
                    {heroApp.apkBadge}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
                  {heroApp.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#8E94A5] mt-2 leading-relaxed">
                  {heroApp.tagline}
                </p>

                {/* Problem & Solution Accordion */}
                <div className="mt-4 pt-4 border-t border-[#1E222D] space-y-3">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#565B6C] block mb-1">
                      CHALLENGE
                    </span>
                    <p className="text-xs font-sans text-[#8E94A5] leading-relaxed">
                      {heroApp.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-cyber block mb-1">
                      SOVEREIGN ARCHITECTURE
                    </span>
                    <p className="text-xs font-mono text-white leading-relaxed">
                      {heroApp.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {heroApp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#141720] border border-[#1E222D] text-[#8E94A5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#1E222D]">
                <Link
                  href={`/projects/${heroApp.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    proceduralAudio.tick();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyber text-[#08090C] font-mono font-black text-xs uppercase tracking-wider hover:bg-[#D4FF00] transition-all shadow-[0_0_20px_rgba(200,248,2,0.25)]"
                >
                  <span>EXPLORE EXHIBITION</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                </Link>

                <a
                  href={heroApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#141720] border border-[#1E222D] hover:border-white/30 text-white text-xs font-mono font-bold transition-colors"
                >
                  <Play className="w-3 h-3 fill-current text-cyber" />
                  <span>PLAY STORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 2-Column Grid: JewelBill & AdvoKosh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subApps.map((app) => {
            const isActive = activeAppId === app.id;

            return (
              <div
                key={app.id}
                onClick={() => {
                  setActiveAppId(app.id);
                  proceduralAudio.tick();
                }}
                className={`tactical-box rounded-2xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "border-cyber bg-[#0E1015] shadow-[0_0_30px_rgba(200,248,2,0.12)]"
                    : "border-[#1E222D] bg-[#0E1015]/90 hover:border-[#2C3242]"
                }`}
              >
                <div>
                  {/* Top Preview Image */}
                  <div className="relative h-48 sm:h-60 w-full rounded-xl overflow-hidden border border-[#1E222D] bg-[#07080B] mb-5 group">
                    <Image
                      src={app.previewImage}
                      alt={`${app.name} Dashboard`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#08090C]/90 border border-white/20 text-[9px] font-mono text-white backdrop-blur-md">
                        {app.systemNum}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-[#8E94A5] bg-[#08090C]/90 px-2 py-0.5 rounded border border-[#1E222D] backdrop-blur-md">
                        {app.hindiName}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-cyber bg-cyber/10 px-2 py-0.5 rounded border border-cyber/30 backdrop-blur-md">
                        {app.apkBadge}
                      </span>
                    </div>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E94A5] uppercase">
                      COMMISSION // {app.id === "jewelbill" ? "02" : "03"}
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: app.accent }} />
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-3xl text-white uppercase tracking-tight">
                    {app.title}
                  </h3>
                  <p className="text-xs font-sans text-[#8E94A5] mt-1.5 leading-relaxed">
                    {app.tagline}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#1E222D] space-y-2">
                    <p className="text-xs font-mono text-white/90 leading-relaxed">
                      {app.solution}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {app.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#141720] border border-[#1E222D] text-[#8E94A5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="flex items-center justify-between pt-5 mt-5 border-t border-[#1E222D]">
                  <Link
                    href={`/projects/${app.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      proceduralAudio.tick();
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-cyber hover:text-[#D4FF00] transition-colors"
                  >
                    <span>VIEW SPECIFICATIONS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>

                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#141720] border border-[#1E222D] hover:border-white/30 text-white text-[11px] font-mono transition-colors"
                  >
                    <Play className="w-2.5 h-2.5 fill-current text-cyber" />
                    <span>PLAY STORE</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
