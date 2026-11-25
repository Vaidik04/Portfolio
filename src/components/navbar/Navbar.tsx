"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Volume2, VolumeX, ArrowUpRight, Menu, X, Terminal, Sparkles, Zap, Command } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface NavItem {
  num: string;
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { num: "01", name: "Works", href: "/projects" },
  { num: "02", name: "Lab", href: "/lab" },
  { num: "03", name: "Craft", href: "/architecture" },
  { num: "04", name: "About", href: "/about" },
  { num: "05", name: "Credentials", href: "/credentials" },
];

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { soundEnabled, toggleSound, openTerminal, setPaletteOpen, displayMode, setDisplayMode } = useWorldStore();

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
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
      setScrolled(currentScrollY > 24);

      if (currentScrollY > 180 && currentScrollY > lastScrollY.current + 8) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8 || currentScrollY <= 180) {
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          scrolled
            ? "bg-[#050608]/88 backdrop-blur-xl border-white/[0.08]"
            : "bg-[#050608]/40 backdrop-blur-md border-white/[0.05]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
          {/* Left: Personal Engineer Wordmark */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="group flex items-center gap-3 focus:outline-none min-w-0"
          >
            <span className="relative w-7 h-7 rounded-full overflow-hidden border border-white/15 group-hover:border-accent-android/60 transition-colors flex-shrink-0">
              <Image
                src="/assets/vaidik_authentic_square.jpg"
                alt="Vaidik Gandhi"
                fill
                sizes="28px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col min-w-0">
              <span className="font-heading font-bold text-xs sm:text-sm tracking-tight text-white truncate">
                VAIDIK GANDHI
              </span>
              <span className="text-[10px] font-mono text-typography-faint flex items-center gap-1.5 tabular-mono">
                <span className="truncate">BHOPAL, IN</span>
                {localTime && (
                  <>
                    <span className="text-white/20">·</span>
                    <span className="text-typography-muted">{localTime} IST</span>
                  </>
                )}
              </span>
            </span>
          </Link>

          {/* Center: Swiss Hairline Index */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`relative py-1 text-xs font-mono tracking-wide transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-white"
                      : "text-typography-muted hover:text-white"
                  }`}
                >
                  <span className="text-[10px] text-typography-faint tabular-mono">{item.num}</span>
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-[19px] inset-x-0 h-[1.5px] bg-accent-android" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Mode, Telemetry Tools & Contact */}
          <div className="flex items-center gap-2">
            {/* Dual Mode Switch: 3D vs Editorial Fast */}
            <div className="flex items-center p-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[10px] font-mono">
              <button
                type="button"
                onClick={() => setDisplayMode("experience")}
                className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                  displayMode === "experience"
                    ? "bg-white/10 text-white"
                    : "text-typography-faint hover:text-white"
                }`}
                title="3D Interactive Canvas Mode"
              >
                <Sparkles className="w-2.5 h-2.5 text-accent-android" />
                <span>3D</span>
              </button>
              <button
                type="button"
                onClick={() => setDisplayMode("fast")}
                className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                  displayMode === "fast"
                    ? "bg-white/10 text-white"
                    : "text-typography-faint hover:text-white"
                }`}
                title="Fast 2D Editorial Mode (Zero WebGL)"
              >
                <Zap className="w-2.5 h-2.5 text-sky-400" />
                <span>2D</span>
              </button>
            </div>

            {/* Cmd+K Search Trigger */}
            <button
              type="button"
              onClick={() => {
                proceduralAudio.tick();
                setPaletteOpen(true);
              }}
              className="hidden sm:flex items-center gap-1.5 px-2.5 h-8 rounded-md border border-white/10 bg-white/[0.02] hover:border-white/25 text-[10px] font-mono text-typography-muted hover:text-white transition-colors"
              title="Command Palette (Ctrl/Cmd + K)"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>

            {/* Terminal Toggle Button (`) */}
            <button
              type="button"
              onClick={() => {
                proceduralAudio.tick();
                openTerminal();
              }}
              className="hidden sm:flex w-8 h-8 rounded-md border border-white/10 bg-white/[0.02] text-typography-muted hover:text-sky-400 hover:border-sky-400/40 items-center justify-center transition-colors"
              title="Open CLI HUD (`)"
              aria-label="Open CLI Terminal"
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>

            {/* Audio Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors ${
                soundEnabled
                  ? "bg-accent-android/15 border-accent-android/50 text-accent-android"
                  : "bg-white/[0.02] border-white/10 text-typography-faint hover:text-white hover:border-white/25"
              }`}
              title={soundEnabled ? "Sound Enabled (Click to Mute)" : "Sound Muted (Click to Enable)"}
              aria-label="Toggle WebAudio feedback"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Contact CTA */}
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 h-8 rounded-md bg-white text-[#050608] hover:bg-accent-android font-mono font-semibold text-[11px] tracking-wide transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Tablet / Mobile Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center text-white"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050608]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden">
          <div className="flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08] my-auto">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`py-4 flex items-center justify-between transition-colors ${
                    isActive ? "text-accent-android" : "text-white hover:text-accent-android"
                  }`}
                >
                  <span className="text-2xl font-heading font-bold tracking-tight">{item.name}</span>
                  <span className="text-xs font-mono text-typography-faint">{item.num}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="w-full text-center py-3.5 rounded-md bg-white text-[#050608] font-mono font-bold text-xs uppercase tracking-wider"
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
