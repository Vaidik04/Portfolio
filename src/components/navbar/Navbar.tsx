"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Volume2, VolumeX, ArrowUpRight, Menu, X, Terminal } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface NavItem {
  name: string;
  href: string;
  hash: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Work", href: "/#flight-deck", hash: "flight-deck" },
  { name: "Architecture", href: "/#architecture", hash: "architecture" },
  { name: "Lab", href: "/#lab", hash: "lab" },
  { name: "Proof", href: "/#proof", hash: "proof" },
  { name: "Ethos", href: "/#about", hash: "about" },
  { name: "Credentials", href: "/#credentials", hash: "credentials" },
  { name: "Contact", href: "/#contact", hash: "contact" },
];

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { soundEnabled, toggleSound, openTerminal } = useWorldStore();

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    proceduralAudio.tick();
    if (pathname === "/" && item.hash) {
      const el = document.getElementById(item.hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Refined Brand Wordmark */}
          <Link
            href="/"
            className="pointer-events-auto group flex items-center gap-3 py-1.5 focus:outline-none"
          >
            <span className="relative w-8 h-8 rounded-full overflow-hidden border border-surface-border items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-accent-android/50 flex-shrink-0">
              <Image
                src="/assets/vaidik_3d_avatar_square.jpg"
                alt="Vaidik Gandhi 3D Avatar"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-typography-primary group-hover:text-white transition-colors">
                Vaidik Gandhi
              </span>
              <span className="text-[10px] font-mono text-typography-muted group-hover:text-accent-android transition-colors">
                Founder · VaidikTech
              </span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#121419]/80 border border-white/10 backdrop-blur-xl shadow-lg">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="px-3.5 py-1.5 text-xs font-sans font-medium text-typography-secondary hover:text-typography-primary hover:bg-white/[0.04] rounded-full transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions: Sound Toggle + CLI Toggle + Primary CTA */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {/* Terminal Toggle Button */}
            <button
              type="button"
              onClick={() => {
                proceduralAudio.tick();
                openTerminal();
              }}
              className="w-9 h-9 rounded-full border border-white/15 bg-[#12141C] text-typography-secondary hover:text-white hover:border-accent-cyan/50 flex items-center justify-center transition-all shadow-sm"
              title="Open Developer Terminal (`)"
              aria-label="Open CLI Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
            </button>

            {/* Audio Mute Button */}
            <button
              type="button"
              onClick={toggleSound}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${soundEnabled
                  ? "bg-[#3DDC84]/20 border-[#3DDC84]/60 text-[#3DDC84] shadow-[0_0_12px_rgba(61,220,132,0.35)]"
                  : "bg-[#12141C] border-white/15 text-typography-muted hover:text-white hover:border-white/30"
                }`}
              title={soundEnabled ? "Audio On (Click to Mute)" : "Muted (Click to Enable Audio)"}
              aria-label="Toggle ambient sound"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Primary Action Button (Guaranteed High Contrast) */}
            <Link
              href="/#contact"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
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
              className="md:hidden p-2 rounded-xl border border-white/10 bg-[#12141C] text-typography-primary hover:text-white hover:border-white/30"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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

          <div className="flex flex-col gap-5 my-auto">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-2xl font-heading font-bold text-typography-primary hover:text-accent-android transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full text-center py-3.5 rounded-full bg-accent-android text-[#05060A] font-mono font-bold text-sm shadow-lg"
            >
              Get in touch
            </Link>
            <div className="text-center text-xs font-mono text-typography-muted">
              vaidikgandhi@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
};
