"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Cpu, ArrowUpRight, ShieldCheck, Printer, Scale, CheckCircle2, Award, Terminal } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

const STATUTE_PAIRS = [
  { old: "IPC 420", new: "BNS 318(4)", title: "Cheating & Dishonesty", limitation: "3 Years" },
  { old: "IPC 302", new: "BNS 103(1)", title: "Murder / Culpable Homicide", limitation: "Zero (No Limit)" },
  { old: "CrPC 154", new: "BNSS 173", title: "Information in Cognizable Cases (FIR)", limitation: "Immediate" },
  { old: "CrPC 438", new: "BNSS 482", title: "Anticipatory Bail Direction", limitation: "Pre-Arrest" },
];

export const HomeProofCredentialsPreview: React.FC = () => {
  // Toy 1: Float Drift Divergence
  const [driftIterations, setDriftIterations] = useState(1000);
  const [floatDrift, setFloatDrift] = useState(38.45);
  const [isDrifting, setIsDrifting] = useState(false);

  const runDriftTest = () => {
    setIsDrifting(true);
    proceduralAudio.tick();
    setTimeout(() => {
      setDriftIterations((prev) => prev + 500);
      setFloatDrift((prev) => +(prev + (Math.random() * 12 + 6)).toFixed(2));
      setIsDrifting(false);
      proceduralAudio.success();
    }, 400);
  };

  // Toy 2: Thermal ESC/POS Bytefeed
  const [isPrinting, setIsPrinting] = useState(false);
  const [printStatus, setPrintStatus] = useState("IDLE (58/80MM SPP)");

  const runPrintTest = () => {
    setIsPrinting(true);
    setPrintStatus("STREAMING ESC/POS BYTES...");
    proceduralAudio.tick();
    setTimeout(() => {
      setIsPrinting(false);
      setPrintStatus("240MS COMPLETE · EMITTED");
      proceduralAudio.success();
    }, 240);
  };

  // Toy 3: StrongBox Keystore Enclave Sweep
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [sweepActive, setSweepActive] = useState(false);

  const runSweepTest = () => {
    setSweepActive(true);
    proceduralAudio.tick();
    setTimeout(() => {
      setIsEncrypted((prev) => !prev);
      setSweepActive(false);
      proceduralAudio.success();
    }, 350);
  };

  // Toy 4: BNS Statute Matrix
  const [selectedStatuteIndex, setSelectedStatuteIndex] = useState(0);

  const cycleStatute = () => {
    proceduralAudio.tick();
    setSelectedStatuteIndex((prev) => (prev + 1) % STATUTE_PAIRS.length);
  };

  const currentStatute = STATUTE_PAIRS[selectedStatuteIndex];

  return (
    <section
      id="proof-credentials"
      className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Section Header: Brutalist Kairos Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#1E222D]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyber uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
            <span>DATA / RIGOR / RESEARCH // 04</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
            COMPUTATIONAL TOYS
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#8E94A5] max-w-2xl mt-1">
            Live experimental sandbox instruments running real-time sovereign simulations and mathematical verifications directly within browser memory.
          </p>
        </div>

        <Link
          href="/proof"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#8E94A5] hover:text-cyber transition-colors group"
        >
          <span>FULL BENCHMARK SUITE →</span>
        </Link>
      </div>

      {/* 4 Interactive Computational Toys Grid (Kairos Atelier Signature) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Toy 01: Float Drift Divergence Engine */}
        <div className="tactical-box p-5 rounded-2xl border border-[#1E222D] bg-[#0E1015]/90 flex flex-col justify-between hover:border-cyber/50 transition-all">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8E94A5] pb-2 border-b border-[#1E222D]">
              <span className="text-cyber font-bold">01 // PAISE MATH</span>
              <span>64-BIT</span>
            </div>

            {/* Display Visual */}
            <div className="my-4 p-3 rounded-lg bg-[#08090C] border border-[#1E222D] font-mono">
              <div className="text-[10px] text-[#8E94A5] flex justify-between">
                <span>ITERATIONS</span>
                <span className="text-white font-bold">{driftIterations}</span>
              </div>
              <div className="mt-2 text-[11px] text-red-400 flex justify-between">
                <span>IEEE-754 DOUBLE</span>
                <span className="font-bold">+₹{floatDrift}</span>
              </div>
              <div className="mt-1 text-[11px] text-cyber flex justify-between">
                <span>INTEGER PAISE</span>
                <span className="font-bold">₹0.0000 (0%)</span>
              </div>
            </div>

            <p className="text-[11px] font-sans text-[#8E94A5] leading-relaxed">
              Divergence engine proving cumulative rounding error in floating point interest vs zero-drift 64-bit Long paise.
            </p>
          </div>

          <button
            type="button"
            onClick={runDriftTest}
            disabled={isDrifting}
            className="mt-4 w-full py-2 rounded-lg bg-cyber text-[#08090C] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#D4FF00] transition-colors"
          >
            {isDrifting ? "COMPUTING..." : "TEST FLOAT DRIFT ↵"}
          </button>
        </div>

        {/* Toy 02: Thermal ESC/POS Buffer Synthesizer */}
        <div className="tactical-box p-5 rounded-2xl border border-[#1E222D] bg-[#0E1015]/90 flex flex-col justify-between hover:border-[#F5C26B]/50 transition-all">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8E94A5] pb-2 border-b border-[#1E222D]">
              <span className="text-[#F5C26B] font-bold">02 // THERMAL I/O</span>
              <span>ESC/POS</span>
            </div>

            {/* Display Visual */}
            <div className="my-4 p-3 rounded-lg bg-[#08090C] border border-[#1E222D] font-mono">
              <div className="flex items-center gap-1.5 text-[10px] text-[#F5C26B] mb-1">
                <Printer className="w-3 h-3" />
                <span className="font-bold truncate">{printStatus}</span>
              </div>
              <div className="space-y-0.5 text-[9px] text-[#565B6C]">
                <div>[0x1B, 0x40] INIT PRINTER</div>
                <div>[0x1D, 0x56, 0x00] CUT PAPER</div>
                <div className="text-white/80">LATENCY: 240MS VIA SPP</div>
              </div>
            </div>

            <p className="text-[11px] font-sans text-[#8E94A5] leading-relaxed">
              Direct byte array stream to 58mm/80mm Bluetooth printers with zero middleware or cloud delays.
            </p>
          </div>

          <button
            type="button"
            onClick={runPrintTest}
            disabled={isPrinting}
            className="mt-4 w-full py-2 rounded-lg bg-[#F5C26B] text-[#08090C] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#FFD175] transition-colors"
          >
            {isPrinting ? "STREAMING..." : "EMIT ESC/POS RECEIPT ↵"}
          </button>
        </div>

        {/* Toy 03: StrongBox Cryptographic Sweeper */}
        <div className="tactical-box p-5 rounded-2xl border border-[#1E222D] bg-[#0E1015]/90 flex flex-col justify-between hover:border-[#7C5CFF]/50 transition-all">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8E94A5] pb-2 border-b border-[#1E222D]">
              <span className="text-[#7C5CFF] font-bold">03 // STRONGBOX</span>
              <span>AES-256</span>
            </div>

            {/* Display Visual */}
            <div className="my-4 p-3 rounded-lg bg-[#08090C] border border-[#1E222D] font-mono">
              <div className="text-[10px] text-[#8E94A5] flex justify-between">
                <span>STATE</span>
                <span className={`font-bold ${isEncrypted ? "text-[#7C5CFF]" : "text-cyber"}`}>
                  {isEncrypted ? "ENCRYPTED (CIPHER)" : "PLAINTEXT"}
                </span>
              </div>
              <div className="mt-2 text-[9px] truncate text-white/90">
                {isEncrypted
                  ? "7b e9 21 a4 9c 33 d8 1f fe 49"
                  : '{"pawn_id":"G88","wt_gm":24.5}'}
              </div>
              <div className="mt-1 text-[9px] text-[#565B6C]">
                KEY: MASTERKEY IN HARDWARE TEE
              </div>
            </div>

            <p className="text-[11px] font-sans text-[#8E94A5] leading-relaxed">
              SQLCipher 256-bit AES cryptographic enclave running PBKDF2 with 64,000 iterations inside silicon.
            </p>
          </div>

          <button
            type="button"
            onClick={runSweepTest}
            disabled={sweepActive}
            className="mt-4 w-full py-2 rounded-lg bg-[#7C5CFF] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#9275FF] transition-colors"
          >
            {sweepActive ? "SWEEPING..." : isEncrypted ? "DECRYPT DATA ↵" : "ENCRYPT UNDER SE ↵"}
          </button>
        </div>

        {/* Toy 04: BNS Statute Matrix Converter */}
        <div className="tactical-box p-5 rounded-2xl border border-[#1E222D] bg-[#0E1015]/90 flex flex-col justify-between hover:border-cyber/50 transition-all">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8E94A5] pb-2 border-b border-[#1E222D]">
              <span className="text-cyber font-bold">04 // BNS MATRIX</span>
              <span>STATUTES</span>
            </div>

            {/* Display Visual */}
            <div className="my-4 p-3 rounded-lg bg-[#08090C] border border-[#1E222D] font-mono">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="text-[#8E94A5]">{currentStatute.old}</span>
                <span className="text-cyber">➔</span>
                <span className="text-white">{currentStatute.new}</span>
              </div>
              <div className="mt-2 text-[10px] text-white font-sans truncate">
                {currentStatute.title}
              </div>
              <div className="mt-1 text-[9px] text-cyber">
                LIMITATION: {currentStatute.limitation}
              </div>
            </div>

            <p className="text-[11px] font-sans text-[#8E94A5] leading-relaxed">
              Real-time criminal and evidence procedure statutory cross-referencing between IPC/CrPC and BNS/BNSS.
            </p>
          </div>

          <button
            type="button"
            onClick={cycleStatute}
            className="mt-4 w-full py-2 rounded-lg bg-[#141720] border border-[#1E222D] hover:border-cyber/50 text-cyber font-mono font-bold text-xs uppercase tracking-wider transition-colors"
          >
            CYCLE STATUTE [4/4] ↵
          </button>
        </div>
      </div>

      {/* EXCELLENCE BENCHMARK (Matching Kairos Atelier Bottom Strip) */}
      <div className="mt-10 pt-8 border-t border-[#1E222D]">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#8E94A5] uppercase mb-4">
          <Award className="w-3.5 h-3.5 text-cyber" />
          <span>EXCELLENCE BENCHMARK // FORMAL CREDENTIALS ON RECORD</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="tactical-box p-4 rounded-xl border border-[#1E222D] bg-[#0E1015] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8E94A5] block">IIT KHARAGPUR</span>
              <span className="text-xs font-mono font-bold text-white">JAVA CONCURRENCY ELITE</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-bold">
              TOP 5%
            </span>
          </div>

          <div className="tactical-box p-4 rounded-xl border border-[#1E222D] bg-[#0E1015] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8E94A5] block">NPTEL / MOE INDIA</span>
              <span className="text-xs font-mono font-bold text-white">DATA STRUCTURES & DBMS</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-bold">
              ELITE
            </span>
          </div>

          <div className="tactical-box p-4 rounded-xl border border-[#1E222D] bg-[#0E1015] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8E94A5] block">LNCT BHOPAL &apos;26</span>
              <span className="text-xs font-mono font-bold text-white">B.TECH CSE (AI & ML)</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white font-bold">
              8.7+ CGPA
            </span>
          </div>

          <div className="tactical-box p-4 rounded-xl border border-[#1E222D] bg-[#0E1015] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8E94A5] block">GOOGLE PLAY STORE</span>
              <span className="text-xs font-mono font-bold text-white">PRODUCTION RELEASES</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-bold">
              3 APKS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
