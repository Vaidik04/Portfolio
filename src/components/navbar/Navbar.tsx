"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Volume2, VolumeX, ArrowUpRight, Menu, X, Terminal, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface NavItem {
  name: string;
  href: string;
  ticker: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Exhibitions", href: "/projects", ticker: "01" },
  { name: "Architecture", href: "/architecture", ticker: "02" },
  { name: "Sandbox", href: "/proof", ticker: "03" },
  { name: "Directory", href: "/lab", ticker: "04" },
  { name: "Benchmark", href: "/credentials", ticker: "05" },
  { name: "Studio", href: "/about", ticker: "06" },
];

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { soundEnabled, toggleSound, openTerminal, displayMode, setDisplayMode } = useWorldStore();

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime("");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150 && currentScrollY > lastScrollY.current + 8) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8 || currentScrollY <= 150) {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    proceduralAudio.tick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Top Technical Utility Ticker (Kairos Atelier Signature) */}
        <div className="w-full bg-[#08090C]/95 backdrop-blur-md border-b border-[#1E222D] py-1 px-4 sm:px-6 pointer-events-auto">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[9px] sm:text-[10px] font-mono tracking-widest text-[#8E94A5]">
            <div className="flex items-center gap-2 sm:gap-4 truncate">
              <span className="flex items-center gap-1.5 text-cyber">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
                <span className="font-bold">23.2599° N, 77.4126° E</span>
              </span>
              <span className="hidden sm:inline text-white/20">/</span>
              <span className="hidden sm:inline">BHOPAL, INDIA</span>
              <span className="hidden md:inline text-white/20">/</span>
              <span className="hidden md:flex items-center gap-1 text-[#3DDC84]">
                <ShieldCheck className="w-2.5 h-2.5" />
                <span>AIR-GAPPED SENTINEL [0.0000% DRIFT]</span>
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 shrink-0 font-mono">
              <span className="text-white/40 hidden sm:inline">SYS TIME:</span>
              <span className="text-white font-bold">{localTime || "12:00:00"} IST</span>
              <span className="text-white/20">|</span>
              <span className="text-cyber font-bold tracking-normal">ZERO TELEMETRY</span>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "py-2.5 bg-[#08090C]/90 backdrop-blur-xl border-b border-[#1E222D] shadow-2xl"
              : "py-3 sm:py-4 bg-[#08090C]/40 backdrop-blur-md"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              onClick={handleNavClick}
              className="pointer-events-auto group flex items-center gap-3 py-1 focus:outline-none"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#2A303F] group-hover:border-cyber transition-all duration-300 shrink-0">
                <Image
                  src="/assets/vaidik_authentic_square.jpg"
                  alt="Vaidik Gandhi Portrait"
                  fill
                  sizes="32px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-sm sm:text-base tracking-tight text-white group-hover:text-cyber transition-colors">
                    VAIDIKTECH
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 border border-cyber/40 text-cyber bg-cyber/10 rounded tracking-wider uppercase font-bold">
                    LABS
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#8E94A5] uppercase">
                  Vaidik Gandhi · Sovereign OS
                </span>
              </div>
            </Link>

            {/* Desktop Nav Items */}
            <nav className="pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0E1015]/90 border border-[#1E222D]">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-cyber/15 text-cyber border border-cyber/30 font-bold shadow-[0_0_12px_rgba(200,248,2,0.2)]"
                        : "text-[#8E94A5] hover:text-white hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <span className="text-[9px] opacity-40 font-mono">{item.ticker}</span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Mode Toggle + Sound + CLI + Primary CTA */}
            <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
              {/* Dual Mode Switch: 3D Experience vs Fast 2D Editorial */}
              <div className="flex items-center p-0.5 rounded-lg bg-[#0E1015] border border-[#1E222D] text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => setDisplayMode("experience")}
                  className={`px-2 sm:px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                    displayMode === "experience"
                      ? "bg-cyber text-[#08090C] font-bold shadow-sm"
                      : "text-[#8E94A5] hover:text-white"
                  }`}
                  title="Full 3D WebGPU/WebGL2 World"
                >
                  <Sparkles className="w-3 h-3" />
                  <span className="text-[10px] font-bold">3D</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDisplayMode("fast")}
                  className={`px-2 sm:px-2.5 py-1 rounded transition-all flex items-center gap-1 ${
                    displayMode === "fast"
                      ? "bg-white/20 text-white font-bold shadow-sm"
                      : "text-[#8E94A5] hover:text-white"
                  }`}
                  title="Ultra-Fast 2D Editorial Mode"
                >
                  <Zap className="w-3 h-3 text-[#FFB800]" />
                  <span className="text-[10px] font-bold">FAST</span>
                </button>
              </div>

              {/* Terminal Toggle Button (Desktop & Tablet) */}
              <button
                type="button"
                onClick={() => {
                  proceduralAudio.tick();
                  openTerminal();
                }}
                className="hidden sm:flex w-8 h-8 rounded-lg border border-[#1E222D] bg-[#0E1015] text-[#8E94A5] hover:text-cyber hover:border-cyber/40 items-center justify-center transition-all"
                title="Open Developer Terminal (`)"
                aria-label="Open CLI Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
              </button>

              {/* Audio Mute Button */}
              <button
                type="button"
                onClick={toggleSound}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                  soundEnabled
                    ? "bg-cyber/15 border-cyber/50 text-cyber shadow-[0_0_12px_rgba(200,248,2,0.25)]"
                    : "bg-[#0E1015] border-[#1E222D] text-[#8E94A5] hover:text-white hover:border-white/30"
                }`}
                title={soundEnabled ? "Audio On" : "Muted"}
                aria-label="Toggle ambient sound"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              {/* Kairos-Style Acid Lime CTA Button */}
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyber text-[#08090C] font-mono font-black text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(200,248,2,0.3)] hover:bg-[#D4FF00] hover:scale-[1.02] active:scale-95"
              >
                <span>INITIATE INQUIRY</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border border-[#1E222D] bg-[#0E1015] text-white hover:border-cyber/40"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090C]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 border-b border-[#1E222D] lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[10px] font-mono tracking-widest text-[#8E94A5] uppercase mb-2">
              NAVIGATION DIRECTORY
            </span>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`py-3 px-4 rounded-lg font-mono text-sm uppercase tracking-wider flex items-center justify-between border transition-all ${
                  pathname === item.href
                    ? "bg-cyber/10 border-cyber text-cyber font-bold"
                    : "border-[#1E222D] text-[#8E94A5] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>{item.name}</span>
                <span className="text-[10px] opacity-40 font-mono">{item.ticker}</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="w-full py-3.5 rounded-lg bg-cyber text-[#08090C] font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(200,248,2,0.3)]"
            >
              <span>INITIATE INQUIRY</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <div className="text-[10px] font-mono text-center text-[#8E94A5] tracking-widest pt-2">
              23.2599° N, 77.4126° E · BHOPAL, INDIA
            </div>
          </div>
        </div>
      )}
    </>
  );
};
