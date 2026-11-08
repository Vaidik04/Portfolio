"use client";

import React from "react";
import Link from "next/link";
import { Play, ArrowUpRight, ShieldCheck, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface FlagshipApp {
  id: "girvi" | "jewelbill" | "advokosh";
  name: string;
  hindiName: string;
  tagline: string;
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
    problem:
      "Traditional jewellery billing requires complex multi-karat deductions, stone-weight subtraction, split GST, and instant printing on thermal roll paper without network lag.",
    solution:
      "Direct Bluetooth ESC/POS engine driving 58mm/80mm thermal printers in 240ms. Automates HSN 7113 split tax (1.5% CGST + 1.5% SGST) with exact integer-paise precision.",
    tech: ["Java 21 / Kotlin", "ESC/POS Thermal", "Bluetooth SPP", "Room SQLite", "HSN 7113"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
    apkBadge: "Google Play · 240ms Print",
    accent: "#F5C26B",
  },
  {
    id: "advokosh",
    name: "AdvoKosh",
    hindiName: "एडवोकोश",
    tagline: "Sovereign Advocate Diary & High Court Chamber OS",
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

export const FlightDeckSection: React.FC = () => {
  const { activeAppId, setActiveAppId } = useWorldStore();

  return (
    <section
      id="flight-deck"
      className="relative min-h-screen py-20 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-none"
    >
      <div className="max-w-2xl flex flex-col gap-4 pointer-events-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-white/10 text-xs font-mono text-accent-cyan w-fit backdrop-blur-md">
          <Layers className="w-3.5 h-3.5" />
          <span>03 // FLAGSHIP PRODUCTION WORK</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
          The Flight Deck
        </h2>

        <p className="text-base text-typography-secondary font-sans leading-relaxed">
          Three commercial native products active on the Google Play Store. Tap each app below to steer the 3D cinematic camera rail and inspect its architecture.
        </p>
      </div>

      {/* Flagship App Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
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
                  ? "bg-[#141824] border-accent-android shadow-[0_0_40px_rgba(61,220,132,0.2)] scale-[1.03]"
                  : "bg-surface/85 border-white/10 hover:border-white/20 hover:bg-surface-elevated"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      color: app.accent,
                      borderColor: `${app.accent}40`,
                      backgroundColor: `${app.accent}15`,
                    }}
                  >
                    {app.apkBadge}
                  </span>

                  <span className="text-lg font-heading font-bold text-typography-muted">
                    {app.hindiName}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-black text-typography-primary mb-1">
                  {app.name}
                </h3>
                <p className="text-xs font-mono text-typography-muted mb-4">
                  {app.tagline}
                </p>

                <div className="space-y-3 mb-6 text-xs sm:text-sm font-sans">
                  <div>
                    <span className="text-[10px] font-mono text-accent-android uppercase tracking-wider block mb-1">
                      The Real Problem:
                    </span>
                    <p className="text-typography-secondary leading-relaxed">
                      {app.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider block mb-1">
                      Architecture Solution:
                    </span>
                    <p className="text-typography-secondary leading-relaxed">
                      {app.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {app.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-typography-muted border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with High Contrast Affordances */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-2">
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: app.accent,
                    color: app.id === "advokosh" ? "#FFFFFF" : "#05060A",
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-black tracking-wide shadow-md transition-all hover:scale-[1.03] active:scale-95 hover:brightness-110"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Google Play</span>
                </a>

                <Link
                  href={`/projects/${app.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 hover:border-white/30 text-xs font-mono font-semibold text-white transition-all shadow-sm"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

