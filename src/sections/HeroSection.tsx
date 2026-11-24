"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Layers, ArrowUpRight, Search, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

const APPS = [
  { id: "girvi" as const, name: "Girvi · गिरवी", badge: "0 PERMS", accent: "#3DDC84", subtitle: "Gold Loan Sovereign OS", category: "PAWN TECH" },
  { id: "jewelbill" as const, name: "JewelBill · POS", badge: "240ms PRINT", accent: "#F5C26B", subtitle: "Bluetooth ESC/POS Invoicing", category: "COMMERCE" },
  { id: "advokosh" as const, name: "AdvoKosh · एडवोकोश", badge: "256-bit AES", accent: "#7C5CFF", subtitle: "Advocate High Court Vault", category: "LEGALTECH" },
];

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const {
    activeAppId,
    setActiveAppId,
    manualExploded,
    toggleManualExploded,
    setScrollProgress,
    setFocusedLayer,
    scrollProgress,
  } = useWorldStore();

  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const userInteractedTimeout = useRef<NodeJS.Timeout | null>(null);

  // Auto-Cycle Phone Screen Every 4.5 seconds
  useEffect(() => {
    if (!isAutoCycling || scrollProgress > 0.16 || manualExploded) return;

    const interval = setInterval(() => {
      const currentIndex = APPS.findIndex((a) => a.id === activeAppId);
      const nextIndex = (currentIndex + 1) % APPS.length;
      const nextApp = APPS[nextIndex].id;
      proceduralAudio.tick();
      setActiveAppId(nextApp);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoCycling, activeAppId, scrollProgress, manualExploded, setActiveAppId]);

  const handleSelectApp = (id: "girvi" | "jewelbill" | "advokosh") => {
    proceduralAudio.tick();
    setActiveAppId(id);

    setIsAutoCycling(false);
    if (userInteractedTimeout.current) clearTimeout(userInteractedTimeout.current);
    userInteractedTimeout.current = setTimeout(() => {
      setIsAutoCycling(true);
    }, 12000);
  };

  const handleStatClick = (type: "drift" | "telemetry" | "strongbox" | "printer") => {
    proceduralAudio.tick();
    if (type === "drift" || type === "printer") {
      setScrollProgress(0.75);
      document.getElementById("proof-credentials")?.scrollIntoView({ behavior: "smooth" });
    } else if (type === "telemetry" || type === "strongbox") {
      setScrollProgress(0.5);
      setFocusedLayer(type === "strongbox" ? 5 : 3);
      document.getElementById("architecture-preview")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    proceduralAudio.tick();
    const query = searchQuery.toLowerCase().trim();
    if (query.includes("girvi") || query.includes("pawn")) {
      router.push("/projects/girvi");
    } else if (query.includes("jewel") || query.includes("print") || query.includes("pos")) {
      router.push("/projects/jewelbill");
    } else if (query.includes("advo") || query.includes("legal") || query.includes("court") || query.includes("bns")) {
      router.push("/projects/advokosh");
    } else {
      router.push(`/lab?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 max-w-7xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Top Hero Layout: 2 Columns on Large Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pointer-events-auto">
        {/* Left Column: Eyebrow + Brutalist Title + Mission Paragraph */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
          {/* Eyebrow Micro-Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#8E94A5] uppercase"
          >
            <span className="text-cyber font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
              <span>VAIDIK GANDHI</span>
            </span>
            <span>//</span>
            <span>23.2599° N, 77.4126° E</span>
            <span className="hidden sm:inline">//</span>
            <span className="hidden sm:inline text-white/40">AIR-GAPPED SOVEREIGN</span>
          </motion.div>

          {/* Brutalist 2-Line Syne Title (Kairos Signature) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.9] text-white">
              SOVEREIGN ANDROID
            </h1>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.9] text-cyber cyber-glow-text mt-1">
              ENGINEERING STUDIO
            </h2>
          </motion.div>

          {/* Precision Mission Copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#8E94A5] font-sans leading-relaxed max-w-xl"
          >
            Developing offline-first, hardware-secured mobile operating software and mathematical engines for India&apos;s traditional trades: pawnbrokers, jewellers, and High Court advocates. Zero cloud telemetry. Zero float drift.
          </motion.p>

          {/* Quick App Switch Badges & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 pt-2"
          >
            {/* 3 Flagship App Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {APPS.map((app) => {
                const isActive = activeAppId === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => handleSelectApp(app.id)}
                    className={`relative overflow-hidden flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? "bg-[#141720] border-cyber text-white font-bold shadow-[0_0_15px_rgba(200,248,2,0.2)]"
                        : "bg-[#0E1015] border-[#1E222D] text-[#8E94A5] hover:text-white hover:border-[#2C3242]"
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: app.accent }}
                    />
                    <span>{app.name}</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 text-[#8E94A5] font-mono">
                      {app.badge}
                    </span>

                    {/* Progress Bar for Auto-Cycling */}
                    {isActive && isAutoCycling && (
                      <div
                        className="absolute bottom-0 left-0 h-0.5 bg-cyber"
                        style={{ animation: "heroProgress 4.5s linear infinite" }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Explode Stack Toggle Button */}
              <button
                onClick={() => {
                  proceduralAudio.tick();
                  toggleManualExploded();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1015] border border-[#1E222D] hover:border-cyber/50 text-xs font-mono text-cyber transition-all"
                title="Toggle 3D exploded architecture view"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{manualExploded ? "ASSEMBLE STACK" : "EXPLODE 5-LAYERS"}</span>
              </button>
            </div>

            {/* CTAs: Curated Exhibitions & Architecture */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => {
                  proceduralAudio.tick();
                  document.getElementById("flagship-showcase")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyber text-[#08090C] font-mono font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(200,248,2,0.3)] hover:bg-[#D4FF00] hover:scale-[1.02] active:scale-95"
              >
                <span>EXPLORE 3 EXHIBITIONS</span>
                <ArrowDown className="w-3.5 h-3.5 stroke-[3]" />
              </button>

              <button
                type="button"
                onClick={() => {
                  proceduralAudio.tick();
                  document.getElementById("architecture-preview")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E1015] hover:bg-[#141720] border border-[#1E222D] hover:border-[#2C3242] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>SYSTEMS ARCHITECTURE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyber" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Tactical Command Prompt / Protocol Search (Kairos Atelier Signature) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="tactical-box p-4 rounded-xl border border-[#1E222D] bg-[#0E1015]/90 backdrop-blur-xl flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-[#1E222D] pb-2.5">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#8E94A5] uppercase">
                <Terminal className="w-3 h-3 text-cyber" />
                <span>SOVEREIGN COMMAND CONSOLE</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-bold">
                ONLINE
              </span>
            </div>

            <form onSubmit={handleSearchSubmit} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH PROTOCOLS / ENGINES..."
                  className="w-full bg-[#08090C] border border-[#1E222D] focus:border-cyber rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-[#565B6C] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 px-2.5 py-1 rounded bg-cyber text-[#08090C] font-mono font-bold text-[10px] uppercase hover:bg-[#D4FF00] transition-colors"
                >
                  QUERY ↵
                </button>
              </div>

              {/* Protocol Quick Jump Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  type="button"
                  onClick={() => router.push("/lab")}
                  className="px-2 py-1 rounded border border-[#1E222D] bg-[#141720] text-[10px] font-mono text-[#8E94A5] hover:text-cyber hover:border-cyber/40 transition-colors"
                >
                  ALL COMMISSIONS [35]
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/projects/girvi")}
                  className="px-2 py-1 rounded border border-[#1E222D] bg-[#141720] text-[10px] font-mono text-[#8E94A5] hover:text-white hover:border-[#3DDC84] transition-colors"
                >
                  GIRVI (PAWN)
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/projects/jewelbill")}
                  className="px-2 py-1 rounded border border-[#1E222D] bg-[#141720] text-[10px] font-mono text-[#8E94A5] hover:text-white hover:border-[#F5C26B] transition-colors"
                >
                  JEWELBILL (POS)
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/projects/advokosh")}
                  className="px-2 py-1 rounded border border-[#1E222D] bg-[#141720] text-[10px] font-mono text-[#8E94A5] hover:text-white hover:border-[#7C5CFF] transition-colors"
                >
                  ADVOKOSH (VAULT)
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between text-[9px] font-mono text-[#565B6C] pt-2 border-t border-[#1E222D]">
              <span className="flex items-center gap-1">
                <Cpu className="w-2.5 h-2.5 text-cyber" />
                <span>ROOT OF TRUST: STRONGBOX</span>
              </span>
              <span>KOTLIN 2.0 / COMPOSE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Width 4-Column Telemetry KPI Block (Kairos Atelier Signature) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-8 mt-6 border-t border-[#1E222D] w-full pointer-events-auto"
      >
        {/* KPI 1: Integer Math Float Drift */}
        <div
          onClick={() => handleStatClick("drift")}
          className="tactical-box group p-4 rounded-xl border border-[#1E222D] hover:border-cyber/60 transition-all duration-300 cursor-pointer shadow-sm relative"
          title="Click to run live mathematical Float Drift verification"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider">
              PRECISION MATH // 01
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyber opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-cyber mt-2">
            0.0000%
          </div>
          <div className="text-[11px] font-mono text-white font-semibold mt-1">
            FLOAT DRIFT (64-BIT LONG)
          </div>
          <div className="text-[10px] font-mono text-[#8E94A5] mt-0.5">
            Paise value class · Zero IEEE 754 drift
          </div>
        </div>

        {/* KPI 2: Cloud Telemetry */}
        <div
          onClick={() => handleStatClick("telemetry")}
          className="tactical-box group p-4 rounded-xl border border-[#1E222D] hover:border-white/50 transition-all duration-300 cursor-pointer shadow-sm relative"
          title="Click to inspect 100% air-gapped sovereign architecture"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider">
              NETWORK AUDIT // 02
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-white mt-2">
            0 KB
          </div>
          <div className="text-[11px] font-mono text-white font-semibold mt-1">
            CLOUD TELEMETRY TRANSMITTED
          </div>
          <div className="text-[10px] font-mono text-[#8E94A5] mt-0.5">
            Air-gapped SQLite · Zero egress packets
          </div>
        </div>

        {/* KPI 3: StrongBox Keystore Enclave */}
        <div
          onClick={() => handleStatClick("strongbox")}
          className="tactical-box group p-4 rounded-xl border border-[#1E222D] hover:border-[#7C5CFF]/60 transition-all duration-300 cursor-pointer shadow-sm relative"
          title="Click to inspect hardware StrongBox Keystore enclave"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider">
              CRYPTOGRAPHY // 03
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#7C5CFF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-[#7C5CFF] mt-2">
            256-BIT
          </div>
          <div className="text-[11px] font-mono text-white font-semibold mt-1">
            AES STRONGBOX SILICON
          </div>
          <div className="text-[10px] font-mono text-[#8E94A5] mt-0.5">
            MasterKey boundary · Hardware Keymaster
          </div>
        </div>

        {/* KPI 4: Direct Thermal Print */}
        <div
          onClick={() => handleStatClick("printer")}
          className="tactical-box group p-4 rounded-xl border border-[#1E222D] hover:border-[#F5C26B]/60 transition-all duration-300 cursor-pointer shadow-sm relative"
          title="Click to simulate 240ms direct thermal print"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider">
              THERMAL I/O // 04
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F5C26B] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-[#F5C26B] mt-2">
            240ms
          </div>
          <div className="text-[11px] font-mono text-white font-semibold mt-1">
            BLUETOOTH ESC/POS LATENCY
          </div>
          <div className="text-[10px] font-mono text-[#8E94A5] mt-0.5">
            Direct byte buffer · 58/80mm receipt
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="pt-6 pb-2 text-[#8E94A5] text-xs font-mono pointer-events-auto"
      >
        <button
          onClick={() => {
            proceduralAudio.tick();
            setScrollProgress(0.35);
            document.getElementById("flagship-showcase")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 hover:text-cyber transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce text-cyber" />
          <span>SCROLL DOWN TO CURATED EXHIBITIONS & ARCHITECTURE</span>
        </button>
      </motion.div>
    </section>
  );
};
