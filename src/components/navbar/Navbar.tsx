"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Volume2, VolumeX, ArrowUpRight, Menu, X, Terminal, Sparkles, Zap } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Work", href: "/projects" },
  { name: "Architecture", href: "/architecture" },
  { name: "Lab", href: "/lab" },
  { name: "Proof", href: "/proof" },
  { name: "About", href: "/about" },
  { name: "Credentials", href: "/credentials" },
  { name: "Contact", href: "/contact" },
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
          hour12: true,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime("");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150 && currentScrollY > lastScrollY.current + 6) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 6 || currentScrollY <= 150) {
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
        } ${
          scrolled
            ? "py-2.5 sm:py-3 bg-[#05060A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Refined Brand Wordmark */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="pointer-events-auto group flex items-center gap-2.5 sm:gap-3 py-1 focus:outline-none"
          >
            <span className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-surface-border items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-accent-android/50 flex-shrink-0">
              <Image
                src="/assets/vaidik_authentic_square.jpg"
                alt="Vaidik Gandhi Portrait"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-heading font-bold text-xs sm:text-sm tracking-tight text-typography-primary group-hover:text-white transition-colors">
                Vaidik Gandhi
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-typography-muted group-hover:text-accent-android transition-colors flex items-center gap-1.5">
                <span>Systems & AI · VaidikTech</span>
                {localTime && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-accent-android animate-pulse" />
                    <span className="text-[9px] text-typography-secondary">{localTime} IST</span>
                  </>
                )}
              </span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#121419]/85 border border-white/10 backdrop-blur-xl shadow-lg">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-2 lg:px-3 py-1.5 text-[11px] lg:text-xs font-sans rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-accent-android/15 text-accent-android border border-accent-android/30 font-semibold shadow-[0_0_12px_rgba(61,220,132,0.25)]"
                      : "text-typography-secondary hover:text-typography-primary hover:bg-white/[0.06] border border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Mode Toggle + Sound + CLI + Primary CTA */}
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2.5">
            {/* Dual Mode Switch: 3D Experience vs Fast 2D Editorial */}
            <div className="flex items-center p-0.5 rounded-full bg-[#12141C] border border-white/15 text-[10px] font-mono shadow-sm">
              <button
                type="button"
                onClick={() => setDisplayMode("experience")}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                  displayMode === "experience"
                    ? "bg-accent-android text-[#05060A] font-bold shadow-sm"
                    : "text-typography-muted hover:text-white"
                }`}
                title="Full 3D WebGPU/WebGL2 World"
              >
                <Sparkles className="w-3 h-3" />
                <span className="text-[10px]">3D</span>
              </button>
              <button
                type="button"
                onClick={() => setDisplayMode("fast")}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all flex items-center gap-1 ${
                  displayMode === "fast"
                    ? "bg-white/20 text-white font-bold shadow-sm"
                    : "text-typography-muted hover:text-white"
                }`}
                title="Ultra-Fast 2D Editorial Mode (Zero WebGL)"
              >
                <Zap className="w-3 h-3 text-[#F5C26B]" />
                <span className="text-[10px]">Fast</span>
              </button>
            </div>

            {/* Terminal Toggle Button (Desktop & Tablet) */}
            <button
              type="button"
              onClick={() => {
                proceduralAudio.tick();
                openTerminal();
              }}
              className="hidden sm:flex w-9 h-9 rounded-full border border-white/15 bg-[#12141C] text-typography-secondary hover:text-white hover:border-accent-cyan/50 items-center justify-center transition-all shadow-sm"
              title="Open Developer Terminal (`)"
              aria-label="Open CLI Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
            </button>

            {/* Audio Mute Button */}
            <button
              type="button"
              onClick={toggleSound}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all ${
                soundEnabled
                  ? "bg-[#3DDC84]/20 border-[#3DDC84]/60 text-[#3DDC84] shadow-[0_0_12px_rgba(61,220,132,0.35)]"
                  : "bg-[#12141C] border-white/15 text-typography-muted hover:text-white hover:border-white/30"
              }`}
              title={soundEnabled ? "Audio On (Click to Mute)" : "Muted (Click to Enable Audio)"}
              aria-label="Toggle ambient sound"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Primary Action Button (Direct to Contact Page) */}
            <Link
              href="/contact"
              onClick={handleNavClick}
              style={{ backgroundColor: "#3DDC84", color: "#05060A" }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono font-black text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(61,220,132,0.35)] hover:scale-[1.03] active:scale-95 hover:brightness-105"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-xl border border-white/10 bg-[#12141C] text-typography-primary hover:text-white hover:border-white/30"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mt-16">
            <span className="text-xs font-mono text-typography-muted uppercase tracking-wider">Navigation</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-typography-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-4 my-auto">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`text-2xl font-heading font-bold transition-colors ${
                    isActive ? "text-accent-android pl-2 border-l-2 border-accent-android" : "text-typography-primary hover:text-accent-android"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="w-full text-center py-3.5 rounded-full bg-accent-android text-[#05060A] font-mono font-bold text-sm shadow-lg"
            >
              Get in touch
            </Link>
            <div className="text-center text-xs font-mono text-typography-muted">
              vaidik.gandhi1@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
};
