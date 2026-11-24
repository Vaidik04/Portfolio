"use client";

import React from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import {
  Wifi,
  WifiOff,
  Power,
  ShieldCheck,
  AlertTriangle,
  Server,
  Smartphone,
  CheckCircle2,
  XCircle,
  Sparkles,
  Trophy,
  RefreshCw,
  Radio,
} from "lucide-react";

export const PullThePlugSection: React.FC = () => {
  const {
    isPlugPulled,
    togglePlug,
    plugPullCount,
    isOffline,
    achievements,
  } = useWorldStore();

  const handleSwitch = () => {
    proceduralAudio.breakerThud();
    togglePlug();
  };

  const isActuallyOffline = isOffline || isPlugPulled;

  return (
    <section
      id="pull-the-plug"
      className="relative py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Background Subtle Accent Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-700 blur-[140px] opacity-20 ${
          isActuallyOffline ? "bg-accent-android/10" : "bg-accent-violet/10"
        }`}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-4 border-b border-[#1E222D]">
        <div className="max-w-2xl flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyber uppercase font-bold">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>SIGNATURE PROOF // ZERO-TELEMETRY STRESS TEST</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
            PULL THE PLUG.
          </h2>

          <p className="text-xs sm:text-sm font-sans text-[#8E94A5] leading-relaxed">
            Our core engineering principle: <strong className="text-white">&quot;Cloud goes down. Business doesn&apos;t.&quot;</strong> Put this architecture to the test by pulling the master connectivity switch.
          </p>
        </div>

        {/* Real Offline Sentinel Pill */}
        <div className="tactical-box flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#1E222D] text-xs font-mono text-[#8E94A5] self-start md:self-auto">
          {isOffline ? (
            <>
              <span className="w-2 h-2 rounded-full bg-cyber animate-ping" />
              <span className="text-cyber font-bold">TRUE HARDWARE OFFLINE DETECTED</span>
            </>
          ) : (
            <>
              <Wifi className="w-3.5 h-3.5 text-cyber" />
              <span>SERVICE WORKER ACTIVE [SOVEREIGN]</span>
            </>
          )}
        </div>
      </div>

      {/* The Physical Industrial Knife-Switch Control */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131622]/95 to-[#0B0D14]/95 border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Switch Description */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-typography-muted">
                Master Connectivity Cutoff
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                  isActuallyOffline
                    ? "bg-accent-android/20 text-accent-android border border-accent-android/40"
                    : "bg-white/10 text-typography-muted"
                }`}
              >
                {isActuallyOffline ? "Air-Gapped Sovereign" : "Live Network Online"}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-heading font-black text-typography-primary tracking-tight">
              {isActuallyOffline
                ? "Connectivity Terminated: Sovereign OS Active"
                : "Cloud Link Engaged: Pull Breaker to Simulate Outage"}
            </h3>

            <p className="text-xs sm:text-sm text-typography-secondary font-sans mt-2 max-w-xl leading-relaxed">
              When Indian pawnbrokers in concrete basements or jewellery shops during monsoon grid failures lose connection, our software calculates gold loans and prints Bluetooth receipts in 240ms without a single dropped byte.
            </p>
          </div>

          {/* Heavy Tactical Knife-Switch Button */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={handleSwitch}
              className={`relative group px-8 sm:px-12 py-5 sm:py-6 rounded-3xl border-2 transition-all duration-300 font-mono font-black text-sm tracking-widest uppercase flex items-center gap-4 shadow-2xl cursor-pointer ${
                isActuallyOffline
                  ? "bg-[#18261E] border-accent-android text-accent-android shadow-[0_0_50px_rgba(61,220,132,0.35)] scale-105"
                  : "bg-[#201518] border-[#FF5555]/60 hover:border-[#FF5555] text-[#FF8888] shadow-[0_0_35px_rgba(255,85,85,0.25)] hover:scale-105"
              }`}
            >
              <Power
                className={`w-6 h-6 transition-transform duration-300 ${
                  isActuallyOffline ? "rotate-180 text-accent-android" : "text-[#FF5555]"
                }`}
              />
              <span>{isActuallyOffline ? "Restore Network" : "Pull the Plug"}</span>
            </button>

            <span className="text-[11px] font-mono text-typography-muted text-center">
              {isActuallyOffline
                ? "Simulating basement dead-zone with 0 KB cloud telemetry"
                : "Click to disconnect Wi-Fi / Cloud APIs and test offline continuity"}
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Live Proof Simulator: Cloud SaaS vs Sovereign Android */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-12">
        {/* Left: Fragile Cloud SaaS App */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between ${
            isActuallyOffline
              ? "bg-[#160E12]/90 border-[#FF5555]/50 shadow-[0_0_30px_rgba(255,85,85,0.15)]"
              : "bg-[#0E1118]/85 border-white/10"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-[#FF6B6B]" />
                <span className="text-xs font-mono font-bold text-typography-muted uppercase">
                  Traditional Cloud SaaS
                </span>
              </div>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                  isActuallyOffline
                    ? "bg-[#FF5555]/20 text-[#FF5555] border border-[#FF5555]/40"
                    : "bg-white/5 text-typography-muted"
                }`}
              >
                {isActuallyOffline ? "Server Unreachable (504)" : "AWS Mumbai ap-south-1"}
              </span>
            </div>

            <h4 className="text-xl font-heading font-bold text-typography-primary mb-2">
              Cloud-Dependent Enterprise Architecture
            </h4>
            <p className="text-xs font-sans text-typography-secondary leading-relaxed mb-6">
              Relies on remote microservices, external REST endpoints, and constant server verification to record ledgers or print tax invoices.
            </p>

            {/* Diagnostic Terminal Simulation */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-typography-muted text-[10px] pb-1 border-b border-white/5">
                <span>POST /api/v2/ledger/invoice</span>
                <span>Payload: 42 KB</span>
              </div>

              {isActuallyOffline ? (
                <>
                  <div className="flex items-center gap-2 text-[#FF5555]">
                    <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>ERR_NETWORK_CHANGED: Connection closed</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FF8888] text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 text-amber-400" />
                    <span>504 Gateway Timeout: AWS ap-south-1 unresponsive</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FF5555]/10 border border-[#FF5555]/20 text-[11px] text-[#FF8888]">
                    CRITICAL: Transaction blocked. Shopkeeper unable to issue GST invoice without server handshake.
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-typography-secondary">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-accent-cyan flex-shrink-0" />
                    <span>Latency: 148ms (Round-trip to AWS Data Center)</span>
                  </div>
                  <div className="text-[11px] text-typography-muted">
                    Vulnerable to cellular dead-zones, carrier routing flaps, and subscription auth lockouts.
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-typography-muted flex items-center justify-between">
            <span>Result under outage:</span>
            <span className={isActuallyOffline ? "text-[#FF5555] font-bold" : "text-typography-secondary"}>
              {isActuallyOffline ? "COMPLETE BUSINESS HALT" : "Dependent on 24/7 ISP uptime"}
            </span>
          </div>
        </div>

        {/* Right: VaidikTech Sovereign Offline Architecture */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between ${
            isActuallyOffline
              ? "bg-[#0E1A14]/95 border-accent-android shadow-[0_0_40px_rgba(61,220,132,0.25)]"
              : "bg-[#0E1118]/85 border-white/10"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-accent-android" />
                <span className="text-xs font-mono font-bold text-accent-android uppercase">
                  VaidikTech Sovereign Android OS
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase bg-accent-android/20 text-accent-android border border-accent-android/40">
                100% Offline Sovereign
              </span>
            </div>

            <h4 className="text-xl font-heading font-bold text-typography-primary mb-2">
              Hardware-Sealed Local Architecture
            </h4>
            <p className="text-xs font-sans text-typography-secondary leading-relaxed mb-6">
              Room SQLite running directly on Android device silicon. Hardware Keystore encryption with zero cloud permission declarations.
            </p>

            {/* Diagnostic Terminal Simulation */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/5 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-typography-muted text-[10px] pb-1 border-b border-white/5">
                <span>Girvi / JewelBill / AdvoKosh</span>
                <span className="text-accent-android">Local Latency: 0ms</span>
              </div>

              <div className="flex items-center gap-2 text-accent-android">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Room SQLite: Transaction committed locally</span>
              </div>
              <div className="flex items-center gap-2 text-accent-android text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>SQLCipher 256-bit AES: Hardware StrongBox key sealed</span>
              </div>
              <div className="p-2 rounded-lg bg-accent-android/10 border border-accent-android/20 text-[11px] text-accent-android">
                SUCCESS: Thermal receipt printed in 240ms via direct Bluetooth SPP. Zero network packets leaked.
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 text-xs font-mono text-typography-muted flex items-center justify-between">
            <span>Result under outage:</span>
            <span className="text-accent-android font-bold">100% UNINTERRUPTED EXECUTION</span>
          </div>
        </div>
      </div>

      {/* The Emergent Tagline Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-accent-android/15 via-[#0F1420] to-accent-cyan/15 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <span className="text-xs font-mono text-accent-android uppercase tracking-widest font-bold block mb-1">
            The Sovereign Mobile Axiom
          </span>
          <h3 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            Cloud goes down. Business doesn&apos;t.
          </h3>
          <p className="text-xs sm:text-sm text-typography-secondary font-sans mt-2 max-w-xl">
            Software built for Indian enterprise trades must perform under real-world pressure. 0.0000% float drift, 0 KB telemetry, and 240ms hardware printing.
          </p>
        </div>

        {/* Achievement Unlock Indicator */}
        {plugPullCount > 0 && (
          <div className="p-4 rounded-2xl bg-accent-android/15 border border-accent-android/40 flex items-center gap-3 backdrop-blur-md">
            <Trophy className="w-5 h-5 text-accent-android flex-shrink-0" />
            <div className="text-left font-mono">
              <span className="text-[10px] text-accent-android font-bold uppercase block">
                Achievement Unlocked
              </span>
              <span className="text-xs text-white font-bold">
                Proof of Sovereignty // Pulled {plugPullCount}x
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
