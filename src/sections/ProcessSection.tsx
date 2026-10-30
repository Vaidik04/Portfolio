"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { GitBranch, Shield, Coins, Radio, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const [activeArchTab, setActiveArchTab] = useState<"security" | "math" | "p2p">("security");

  const PROCESS_STEPS = [
    {
      num: "01",
      title: "Problem & Field Workflow Discovery",
      desc: "Observe how pawnbrokers, advocates, and jewellers actually operate. Identify non-negotiable constraints: zero cellular reception in basements, bright sunlight, and physical receipts.",
    },
    {
      num: "02",
      title: "Sovereign Architecture Design",
      desc: "Mandate zero remote cloud dependencies. Architect Room SQLite with SQLCipher 256-bit AES encryption sealed inside hardware Android Keystore MasterKey.",
    },
    {
      num: "03",
      title: "Zero-Drift Financial Engineering",
      desc: "Forbid Float and Double in monetary math. Every rupee is strictly stored as Long (paise) with standard Indian numbering grouping (₹1,23,456).",
    },
    {
      num: "04",
      title: "Native Android & Hardware Integration",
      desc: "Build single-Activity Jetpack Compose Material 3 UIs, CameraX photo evidence pipelines, Bluetooth ESC/POS 58mm/80mm thermal printing, and Google Nearby P2P clusters.",
    },
    {
      num: "05",
      title: "Play Store Release & Hardening",
      desc: "R8 ProGuard resource shrinking, OWASP MASVS mobile security audits, signed production bundles (JKS), and automated Google Play Console lifecycle releases.",
    },
    {
      num: "06",
      title: "Field Reliability & Iteration",
      desc: "Dual-mode AES-256-GCM backups with PBKDF2 (600,000 iterations), automated daily WorkManager tasks, and continuous statutory law amendment updates.",
    },
  ];

  return (
    <section id="architecture" className="relative py-32 overflow-hidden border-t border-white/5 bg-[#06080F]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-violet text-xs font-mono uppercase tracking-widest mb-6">
            <GitBranch className="w-3.5 h-3.5" />
            <span>04 · The Engineering Process</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight mb-4">
            How I Build: From Raw Problem to Production Release
          </h2>
          <p className="text-typography-secondary text-base sm:text-lg max-w-2xl font-sans mb-16">
            A disciplined engineering lifecycle engineered to deliver offline sovereignty, zero financial rounding drift, and instant hardware response times.
          </p>
        </Reveal>

        {/* 6-Step Vertical Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PROCESS_STEPS.map((step, idx) => (
            <Reveal key={step.num} direction="up" delay={idx * 0.08}>
              <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between h-full transition-all duration-300 hover:border-accent-violet/40 hover:bg-surface-hover">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-heading font-extrabold text-accent-violet">
                      {step.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-accent-violet/50" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-typography-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-typography-secondary font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive Architecture Deep Dive Card */}
        <Reveal direction="up" delay={0.2}>
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-elevated border border-white/10 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <span className="text-xs font-mono text-accent-android uppercase tracking-wider font-bold">
                  System Architecture Explorer
                </span>
                <h3 className="text-xl font-heading font-bold text-typography-primary mt-1">
                  Core Engineering Patterns in Production
                </h3>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveArchTab("security")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                    activeArchTab === "security"
                      ? "bg-accent-violet text-white"
                      : "bg-surface border border-white/5 text-typography-secondary hover:text-white"
                  }`}
                >
                  SQLCipher Chamber
                </button>
                <button
                  onClick={() => setActiveArchTab("math")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                    activeArchTab === "math"
                      ? "bg-accent-android text-[#05060A]"
                      : "bg-surface border border-white/5 text-typography-secondary hover:text-white"
                  }`}
                >
                  Integer Paise Math
                </button>
                <button
                  onClick={() => setActiveArchTab("p2p")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                    activeArchTab === "p2p"
                      ? "bg-accent-cyan text-[#05060A]"
                      : "bg-surface border border-white/5 text-typography-secondary hover:text-white"
                  }`}
                >
                  Nearby P2P Swarm
                </button>
              </div>
            </div>

            {/* Architecture Tab Content */}
            {activeArchTab === "security" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-3 font-sans text-xs sm:text-sm text-typography-secondary leading-relaxed">
                  <h4 className="text-base font-heading font-bold text-typography-primary">
                    AdvoKosh: Sovereign Chamber Privacy Pattern
                  </h4>
                  <p>
                    All client dossiers, court orders, and voice dictations are stored in a sandboxed Room
                    database encrypted with <strong className="text-typography-primary">SQLCipher 256-bit AES-CBC</strong>.
                  </p>
                  <p>
                    The encryption passphrase is never stored in SharedPreferences. Instead, it is generated at
                    first boot and sealed inside the device?Ts hardware Secure Enclave via{" "}
                    <strong className="text-accent-violet font-mono">MasterKey (AES-256-GCM)</strong>.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-accent-violet pt-2">
                    <span>✓ Zero Telemetry</span>
                    <span>✓ Zero Firebase Sockets</span>
                    <span>✓ DPDP Act 2023 Compliant</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 rounded-2xl bg-[#05070D] border border-white/10 font-mono text-xs flex flex-col gap-2">
                  <div className="text-typography-muted text-[10px]">CHAMBER PIPELINE:</div>
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-typography-primary flex items-center justify-between">
                    <span>1. Jetpack Compose UI</span>
                    <span className="text-accent-android">StateFlow</span>
                  </div>
                  <div className="text-center text-typography-muted text-xs">↓</div>
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-typography-primary flex items-center justify-between">
                    <span>2. Dagger Hilt Repository</span>
                    <span className="text-accent-cyan">Coroutines IO</span>
                  </div>
                  <div className="text-center text-typography-muted text-xs">↓</div>
                  <div className="p-2 rounded-lg bg-surface-elevated border border-accent-violet/40 text-accent-violet flex items-center justify-between font-bold">
                    <span>3. Room v4 + SQLCipher</span>
                    <span>256-bit AES</span>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === "math" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-3 font-sans text-xs sm:text-sm text-typography-secondary leading-relaxed">
                  <h4 className="text-base font-heading font-bold text-typography-primary">
                    KaamKram & JewelBill: The Integer Paise Pattern
                  </h4>
                  <p>
                    Floating point arithmetic (<code className="text-accent-android">0.1 + 0.2 = 0.30000000000000004</code>) accumulates catastrophic errors over thousands of retail invoices and gold transactions.
                  </p>
                  <p>
                    We mandate an inline value class <strong className="text-accent-android font-mono">@JvmInline value class Paise(val amount: Long)</strong>. Every monetary quantity, discount, making charge, and split GST fraction is stored strictly as integer paise with zero runtime allocation overhead.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-accent-android pt-2">
                    <span>✓ Penny-Perfect Balances</span>
                    <span>✓ Zero Floating-Point Drift</span>
                    <span>✓ Standard Indian Numbering (₹1,23,456)</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 rounded-2xl bg-[#05070D] border border-white/10 font-mono text-xs flex flex-col gap-2">
                  <div className="text-typography-muted text-[10px]">MONETARY CALCULATION:</div>
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-typography-primary flex items-center justify-between">
                    <span>Gold Net Wt: 36.8g</span>
                    <span className="text-accent-android">₹2,81,152.00</span>
                  </div>
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-typography-primary flex items-center justify-between">
                    <span>Split CGST 1.5%</span>
                    <span className="text-typography-muted">+ ₹4,217.28</span>
                  </div>
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-typography-primary flex items-center justify-between">
                    <span>Split SGST 1.5%</span>
                    <span className="text-typography-muted">+ ₹4,217.28</span>
                  </div>
                  <div className="p-2 rounded-lg bg-surface-elevated border border-accent-android/40 text-accent-android flex items-center justify-between font-bold">
                    <span>Total Balanced</span>
                    <span>₹2,89,586.56</span>
                  </div>
                </div>
              </div>
            )}

            {activeArchTab === "p2p" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-3 font-sans text-xs sm:text-sm text-typography-secondary leading-relaxed">
                  <h4 className="text-base font-heading font-bold text-typography-primary">
                    SwarmOS: Air-Gapped Peer-to-Peer ML Cluster
                  </h4>
                  <p>
                    Nearby Android smartphones form high-throughput local ad-hoc wireless clusters using{" "}
                    <strong className="text-accent-cyan font-mono">Google Nearby Connections (Strategy.P2P_CLUSTER)</strong>.
                  </p>
                  <p>
                    Enables heavy document OCR and on-device machine learning tasks to be distributed across phones
                    over Wi-Fi Direct and Bluetooth with <strong className="text-typography-primary">zero internet access</strong> and mutual numeric visual verification.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-accent-cyan pt-2">
                    <span>✓ Zero WAN Internet</span>
                    <span>✓ Ephemeral Worker Cleanup</span>
                    <span>✓ Bundled ML Kit Latin & Devanagari</span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-4 rounded-2xl bg-[#05070D] border border-white/10 font-mono text-xs flex flex-col gap-2">
                  <div className="text-typography-muted text-[10px]">P2P WIRELESS TOPOLOGY:</div>
                  <div className="p-2 rounded-lg bg-surface-elevated border border-accent-cyan/40 text-accent-cyan flex items-center justify-between font-bold">
                    <span>Coordinator Device (Phone A)</span>
                    <span>Scheduler</span>
                  </div>
                  <div className="text-center text-typography-muted text-xs">⇕ Wi-Fi Direct P2P_CLUSTER</div>
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-typography-primary flex items-center justify-between">
                    <span>Worker Node 1 (Phone B)</span>
                    <span className="text-accent-android">ML Kit OCR</span>
                  </div>
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-typography-primary flex items-center justify-between">
                    <span>Worker Node 2 (Phone C)</span>
                    <span className="text-accent-android">ML Kit OCR</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
