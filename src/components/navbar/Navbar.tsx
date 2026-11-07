"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Volume2, VolumeX, ArrowUpRight, Menu, X } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";

interface NavItem {
  name: string;
  href: string;
  hash: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Work", href: "/#work", hash: "work" },
  { name: "Architecture", href: "/#architecture", hash: "architecture" },
  { name: "Engineering", href: "/#engineering", hash: "engineering" },
  { name: "About", href: "/#about", hash: "about" },
  { name: "Contact", href: "/#contact", hash: "contact" },
];

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const { soundEnabled, toggleSound } = useWorldStore();

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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${scrolled ? "py-3" : "py-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Refined Brand Wordmark */}
          <Link
            href="/"
            className="pointer-events-auto group flex items-center gap-3 py-1.5 focus:outline-none"
          >
            <span className="inline-flex w-8 h-8 rounded-full bg-surface-elevated border border-surface-border items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-brand/50">
              <Image
                src="/assets/vaidiktech_symbol.svg"
                alt="VaidikTech Symbol"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-typography-primary group-hover:text-white transition-colors">
                Vaidik Gandhi
              </span>
              <span className="text-[10px] font-mono text-typography-muted group-hover:text-brand transition-colors">
                Founder · VaidikTech
              </span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#121419]/80 border border-surface-border backdrop-blur-xl shadow-lg">
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

          {/* Actions: Sound Toggle + Primary CTA */}
          <div className="pointer-events-auto flex items-center gap-3">
            {/* Audio Mute Button */}
            <button
              type="button"
              onClick={toggleSound}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                soundEnabled
                  ? "bg-brand/15 border-brand/40 text-brand"
                  : "bg-surface-elevated border-surface-border text-typography-muted hover:text-typography-primary"
              }`}
              title={soundEnabled ? "Audio On (Click to Mute)" : "Muted (Click to Enable Audio)"}
              aria-label="Toggle ambient sound"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Primary Action Button */}
            <Link
              href="/#contact"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-accent-on text-xs font-sans font-semibold tracking-wide transition-all shadow-[0_2px_14px_rgba(212,162,76,0.25)] hover:scale-[1.02]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-typography-secondary hover:text-white"
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
          <div className="flex items-center justify-between border-b border-surface-border pb-4 mt-16">
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
                className="text-2xl font-heading font-bold text-typography-primary hover:text-brand transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-surface-border flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full bg-brand text-white font-sans font-semibold text-sm shadow-lg"
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
