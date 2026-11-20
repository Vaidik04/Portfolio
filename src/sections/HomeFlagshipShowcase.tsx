"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowUpRight, ShieldCheck, Layers, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface FlagshipApp {
  id: "girvi" | "jewelbill" | "advokosh";
  name: string;
  hindiName: string;
  tagline: string;
  icon: string;
  previewImage: string;
  problem: string;
  solution: string;
  tech: string[];
  playStoreUrl: string;
  apkBadge: string;
  accent: string;
}

const FLAGSHIPS: FlagshipApp[] = [
  {
    id: "girvi",
    name: "Girvi",
    hindiName: "गिरवी",
    tagline: "Pawn and Gold Loan OS for Indian Pawnbrokers",
    icon: "/assets/apps/girvi/logo.png",
    previewImage: "/assets/apps/girvi/01_dashboard.png",
    problem:
      "Pawnbrokers operating in dense basements with zero cellular connectivity cannot rely on cloud-connected web apps or fragile SaaS subscriptions.",
    solution:
      "Zero-permission offline architecture. Stores every rupee as 64-bit Long paise, attaches CameraX 22K/20K pledge evidence photos, and automates monthly compound interest without cloud dependencies.",
    tech: ["Kotlin 2.0", "Jetpack Compose", "Room SQLite", "CameraX", "Zero Internet"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.girvi.app",
    apkBadge: "Google Play · 0 Perms",
    accent: "#3DDC84",
  },
  {
    id: "jewelbill",
    name: "JewelBill",
    hindiName: "ज्वेलबिल",
    tagline: "Thermal Bluetooth POS & Invoicing for Jewellery Stores",
    icon: "/assets/apps/jewelbill/logo.png",
    previewImage: "/assets/apps/jewelbill/01_dashboard.png",
    problem:
      "Traditional jewellery billing requires complex multi-karat deductions, stone-weight subtraction, split GST, and instant printing on thermal roll paper without network lag.",
    solution:
      "Direct Bluetooth ESC/POS engine driving 58mm/80mm thermal printers in 240ms. Automates HSN 7113 split tax (1.5% CGST + 1.5% SGST) with exact integer-paise precision, backed by IIT Kharagpur Elite Java concurrency & socket architecture.",
    tech: ["Java 21 / Kotlin", "ESC/POS Thermal", "Bluetooth SPP", "Room SQLite", "IIT Java Elite"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
    apkBadge: "Google Play · 240ms Print",
    accent: "#F5C26B",
  },
  {
    id: "advokosh",
    name: "AdvoKosh",
    hindiName: "एडवोकोश",
    tagline: "Sovereign Advocate Diary & High Court Chamber OS",
    icon: "/assets/apps/advokosh/logo.png",
    previewImage: "/assets/apps/advokosh/01_dashboard.png",
    problem:
      "Litigation advocates manage confidential case strategies subject to legal professional privilege that cannot be hosted on public multi-tenant clouds.",
    solution:
      "SQLCipher 256-bit AES database locked under hardware Android Keystore MasterKey. Features automated eCourts sync, 8 WorkManager background tasks, and full IPC↔BNS statutory amendment cross-referencing.",
    tech: ["Jetpack Compose M3", "SQLCipher AES-256", "Hardware Keystore", "WorkManager", "IPC↔BNS"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.advokosh.app",
    apkBadge: "Google Play · Keystore Vault",
    accent: "#7C5CFF",
  },
];

export const HomeFlagshipShowcase: React.FC = () => {
  const { activeAppId, setActiveAppId } = useWorldStore();

  return (
    <section
      id="flagship-showcase"
      className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/30 text-xs font-mono text-accent-android w-fit">
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            Flagship Applications
          </h2>
          <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
            Commercial native Android products engineered for India&apos;s traditional trades. Built with zero-permission offline architecture, hardware encryption, and integer-paise math.
          </p>
        </div>

        <Link
          href="/projects"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-1 border border-white/15 text-xs font-mono text-typography-primary hover:text-accent-android hover:border-accent-android/50 transition-all self-start md:self-auto group"
        >
          <span>View All 15+ Projects</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Flagship App Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FLAGSHIPS.map((app) => {
          const isActive = activeAppId === app.id;

          return (
            <div
              key={app.id}
              onClick={() => {
                setActiveAppId(app.id);
                proceduralAudio.tick();
              }}
              onMouseEnter={() => {
                if (activeAppId !== app.id) {
                  setActiveAppId(app.id);
                  proceduralAudio.tick();
                }
              }}
              className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#141824]/95 backdrop-blur-xl border-accent-android shadow-[0_0_35px_rgba(61,220,132,0.18)] scale-[1.02]"
                  : "bg-[#0E1118]/80 backdrop-blur-md border-white/10 hover:border-white/25 hover:bg-[#121520]/90"
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-white/10 p-1 flex-shrink-0 relative overflow-hidden shadow-md">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      fill
                      sizes="48px"
                      className="object-contain rounded-xl"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: app.accent }}
                      />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-typography-secondary truncate">
                        {app.hindiName}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-typography-primary tracking-tight truncate">
                      {app.name}
                    </h3>
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase flex-shrink-0"
                    style={{
                      backgroundColor: `${app.accent}15`,
                      color: app.accent,
                      border: `1px solid ${app.accent}30`,
                    }}
                  >
                    {app.apkBadge}
                  </span>
                </div>

                <p className="text-xs font-sans text-typography-secondary mb-3 leading-relaxed font-medium">
                  {app.tagline}
                </p>

                {/* Real Live Dashboard Preview Thumbnail */}
                <div className="relative mb-4 h-36 sm:h-40 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#07080D] group/img">
                  <Image
                    src={app.previewImage}
                    alt={`${app.name} Dashboard Screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1118]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-[#05060A]/85 border border-white/15 text-typography-secondary backdrop-blur-md">
                      Native Production Build
                    </span>
                    <span className="text-[9px] font-mono font-semibold" style={{ color: app.accent }}>
                      100% On-Device
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5 text-xs font-sans">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-typography-muted block mb-1">
                      Problem Solved
                    </span>
                    <p className="text-typography-secondary leading-relaxed line-clamp-2">
                      {app.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-typography-muted block mb-1">
                      Engineering Architecture
                    </span>
                    <p className="text-typography-primary leading-relaxed font-mono text-[11px] line-clamp-2">
                      {app.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {app.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-typography-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-android text-[#05060A] text-xs font-mono font-bold hover:brightness-110 transition-all shadow-md"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Google Play</span>
                </a>

                <Link
                  href={`/projects/${app.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    proceduralAudio.tick();
                  }}
                  className="text-xs font-mono text-typography-secondary hover:text-white flex items-center gap-1 group"
                >
                  <span>Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gateway Callout Banner */}
      <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-accent-android/10 via-surface-1 to-accent-cyan/10 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-bold text-lg text-white">
            Looking for all 15+ applications, tools, and repos?
          </h4>
          <p className="text-xs text-typography-muted font-sans mt-1">
            Filter by Play Store status, commercial apps, air-gapped systems, and AI computer vision engines.
          </p>
        </div>
        <Link
          href="/projects"
          onClick={() => proceduralAudio.tick()}
          style={{ backgroundColor: "#3DDC84", color: "#05060A" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <span>Open Full Projects Page</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </Link>
      </div>
    </section>
  );
};
