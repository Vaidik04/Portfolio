"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowUpRight, Menu, X, Play, Volume2, VolumeX } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";

interface NavLinkItem {
  name: string;
  href: string;
  hash: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "About", href: "/#about", hash: "about" },
  { name: "Tech Stack", href: "/#skills", hash: "skills" },
  { name: "Projects", href: "/projects", hash: "projects" },
  { name: "Architecture", href: "/#architecture", hash: "architecture" },
  { name: "Credentials", href: "/#credentials", hash: "credentials" },
  { name: "Contact", href: "/#contact", hash: "contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { soundEnabled, toggleSound } = useWorldStore();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLinkItem) => {
    if (pathname === "/" && link.hash && link.href.startsWith("/#")) {
      const el = document.getElementById(link.hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    }
  };

  return (
    <>
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={`pointer-events-auto relative flex items-center justify-between gap-4 md:gap-8 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#090C14]/90 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              : "bg-[#090C14]/70 border-white/10 backdrop-blur-md"
          }`}
        >
          {/* Scroll Progress Micro-Line at bottom of pill */}
          <motion.div
            style={{ scaleX }}
            className="absolute -bottom-px left-6 right-6 h-[1.5px] bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-android origin-left rounded-full"
          />

          {/* Brand Logo & VaidikTech Link */}
          <Magnetic strength={0.25}>
            <div className="flex items-center gap-2.5 pl-1">
              <Link href="/" className="w-8 h-8 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center p-1.5 transition-transform duration-300 hover:scale-105 hover:border-accent-android/40">
                <Image
                  src="/assets/vaidiktech_symbol.svg"
                  alt="VaidikTech"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </Link>
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="text-xs font-heading font-bold text-typography-primary leading-tight hover:text-accent-android transition-colors"
                >
                  Vaidik Gandhi
                </Link>
                <a
                  href="https://vaidiktech.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-mono tracking-wider text-accent-android uppercase hover:underline"
                  title="Visit VaidikTech (vaidiktech.app)"
                >
                  Founder · VaidikTech
                </a>
              </div>
            </div>
          </Magnetic>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/projects"
                  ? pathname === "/projects" || pathname.startsWith("/projects/")
                  : pathname === link.href;

              return (
                <Magnetic key={link.name} strength={0.3}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`px-3.5 py-1.5 text-xs font-sans font-medium transition-colors duration-200 relative group ${
                      isActive ? "text-accent-android font-semibold" : "text-typography-secondary hover:text-typography-primary"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent-android rounded-full transition-all duration-300 ${
                        isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                      }`}
                    />
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          {/* CTA & PlayStore Pill */}
          <div className="flex items-center gap-2">
            <Magnetic strength={0.35}>
              <a
                href="https://play.google.com/store/apps/details?id=com.girvi.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono rounded-full bg-accent-android/10 hover:bg-accent-android/20 border border-accent-android/30 text-accent-android transition-all"
                title="Google Play Store"
              >
                <Play className="w-2.5 h-2.5 fill-current" />
                <span>Play Store</span>
              </a>
            </Magnetic>

            <Magnetic strength={0.35}>
              <button
                type="button"
                onClick={toggleSound}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  soundEnabled
                    ? "bg-accent-android/20 border-accent-android/50 text-accent-android shadow-[0_0_12px_rgba(61,220,132,0.4)]"
                    : "bg-surface border-white/10 text-typography-muted hover:text-typography-primary hover:border-white/20"
                }`}
                title={soundEnabled ? "Audio FX Active (Click to Mute)" : "Enable Web Audio FX"}
                aria-label="Toggle audio effects"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>
            </Magnetic>

            <Magnetic strength={0.35}>
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-sans font-semibold rounded-full bg-accent-android text-[#05060A] shadow-[0_0_20px_rgba(61,220,132,0.35)] hover:shadow-[0_0_30px_rgba(61,220,132,0.6)] transition-all duration-300 hover:scale-[1.03]"
              >
                <span>Hire me</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-typography-secondary hover:text-typography-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-[#090C14]/95 border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col gap-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-sm font-sans font-medium text-typography-secondary hover:text-accent-android transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-accent-android text-[#05060A] text-xs font-sans font-bold shadow-[0_0_20px_rgba(61,220,132,0.35)]"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};
