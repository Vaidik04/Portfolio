"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { CodeSection } from "@/sections/CodeSection";
import {
  ArrowLeft,
  Shield,
  Coins,
  Radio,
  Lock,
  Cpu,
  Terminal,
  CheckCircle2,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";

export default function ArchitecturePage() {
  const [activeTab, setActiveTab] = useState<"security" | "math" | "mesh">("security");

  return (
    <div className="min-h-screen bg-[#05060A] text-typography-primary flex flex-col selection:bg-accent-android selection:text-[#05060A]">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-accent-android transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Engineering Discipline</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-typography-primary leading-tight">
            Systems & Security Architecture
          </h1>
          <p className="text-typography-secondary text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Architectural patterns, cryptographic hardening, and mathematical precision designed for Indian enterprise reliability and sovereign data ownership.
          </p>
        </div>

        {/* Interactive Deep Dive Tabs */}
        <section className="py-16 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab("security")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === "security"
                  ? "bg-accent-violet text-white shadow-[0_0_20px_rgba(124,92,255,0.4)]"
                  : "bg-surface border border-white/5 text-typography-secondary hover:text-white"
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>SQLCipher Keystore Vault</span>
            </button>

            <button
              onClick={() => setActiveTab("math")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === "math"
                  ? "bg-accent-android text-[#05060A] shadow-[0_0_20px_rgba(61,220,132,0.4)]"
                  : "bg-surface border border-white/5 text-typography-secondary hover:text-white"
              }`}
            >
              <Coins className="w-3.5 h-3.5" />
              <span>Integer Paise Financial Engine</span>
            </button>

            <button
              onClick={() => setActiveTab("mesh")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === "mesh"
                  ? "bg-accent-cyan text-[#05060A] shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "bg-surface border border-white/5 text-typography-secondary hover:text-white"
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Nearby Connections P2P Mesh</span>
            </button>
          </div>

          {/* Tab 1: Security */}
          {activeTab === "security" && (
            <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-accent-violet uppercase">Production in AdvoKosh</span>
                  <h3 className="text-2xl font-heading font-bold text-typography-primary mt-1">
                    SQLCipher 256-bit AES Sealed via Hardware Keystore
                  </h3>
                </div>
                <Link
                  href="/projects/advokosh"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-violet hover:underline"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-sm text-typography-secondary leading-relaxed font-sans">
                Every sensitive court dossier, client identity, and legal document in AdvoKosh is encrypted at rest using SQLCipher 256-bit AES-CBC. The database passphrase is never stored on disk or hardcoded in memory; it is generated dynamically through the hardware-isolated Android Keystore with an AES-256-GCM MasterKey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-violet uppercase mb-1">Encrypted at Rest</h4>
                  <p className="text-xs text-typography-secondary">
                    Zero plaintext data leaks even if an unlocked device is seized or examined via ADB root shell.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-violet uppercase mb-1">Hardware Enclave</h4>
                  <p className="text-xs text-typography-secondary">
                    Cryptographic keys are bound to ARM TrustZone or Titan M security chips on modern handsets.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-violet uppercase mb-1">Zero Cloud Relay</h4>
                  <p className="text-xs text-typography-secondary">
                    No remote master password verification, eliminating third-party subpoena and data breach vectors.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Math */}
          {activeTab === "math" && (
            <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-accent-android uppercase">Production in Girvi & JewelBill</span>
                  <h3 className="text-2xl font-heading font-bold text-typography-primary mt-1">
                    Zero-Drift Financial Arithmetic in Integer Paise
                  </h3>
                </div>
                <Link
                  href="/projects/girvi"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-android hover:underline"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-sm text-typography-secondary leading-relaxed font-sans">
                Standard IEEE 754 floating-point representations (Float and Double) introduce microscopic rounding errors that accumulate exponentially over multi-year monthly compound interest calculations. Our custom financial engine operates strictly in 64-bit integer paise (1 Rupee = 100 Paise), with explicit basis points for interest percentages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-android uppercase mb-1">Compound Accuracy</h4>
                  <p className="text-xs text-typography-secondary">
                    Zero rounding drift across decades of accrued moneylending and pledge records.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-android uppercase mb-1">GST Slabs (HSN 7113)</h4>
                  <p className="text-xs text-typography-secondary">
                    Split calculation: 1.5% CGST + 1.5% SGST computed to the exact single paisa.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-android uppercase mb-1">Multi-Karat Purity</h4>
                  <p className="text-xs text-typography-secondary">
                    Deterministic gross to net weight subtractions eliminating jeweler/customer disputes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Mesh */}
          {activeTab === "mesh" && (
            <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-accent-cyan uppercase">Production in SwarmOS</span>
                  <h3 className="text-2xl font-heading font-bold text-typography-primary mt-1">
                    Air-Gapped P2P Mesh Clustering (Nearby Connections)
                  </h3>
                </div>
                <Link
                  href="/projects/swarmos"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:underline"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-sm text-typography-secondary leading-relaxed font-sans">
                Using Google Nearby Connections under the P2P_CLUSTER topology over Wi-Fi Direct and Bluetooth Low Energy, SwarmOS forms spontaneous decentralized mesh networks without cellular connectivity or central server infrastructure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-cyan uppercase mb-1">Visual Authentication</h4>
                  <p className="text-xs text-typography-secondary">
                    Mutual numeric verification token displayed simultaneously on both phone screens.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-cyan uppercase mb-1">Chunked Streaming</h4>
                  <p className="text-xs text-typography-secondary">
                    Binary payloads and photos broken into verified chunks validated via SHA-256 digests.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <h4 className="text-xs font-mono text-accent-cyan uppercase mb-1">Self-Healing Topology</h4>
                  <p className="text-xs text-typography-secondary">
                    Automatic dynamic reconnects as nodes move in and out of Wi-Fi Direct proximity.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 6-Step Lifecycle */}
        <section className="py-16 border-b border-white/5">
          <ProcessSection />
        </section>

        {/* Live IDE Code Window */}
        <section className="py-16">
          <CodeSection />
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

