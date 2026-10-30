"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <>
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={`pointer-events-auto relative flex items-center justify-between gap-4 md:gap-8 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#090C14]/85 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "bg-[#090C14]/60 border-white/8 backdrop-blur-md"
          }`}
        >
          {/* Scroll Progress Micro-Line at bottom of pill */}
          <motion.div
            style={{ scaleX }}
            className="absolute -bottom-px left-6 right-6 h-[1.5px] bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-android origin-left rounded-full"
          />

          {/* Brand Logo */}
          <Magnetic strength={0.25}>
            <a href="#hero" className="flex items-center gap-2.5 group pl-1">
              <div className="w-8 h-8 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-accent-android/40">
                <Image
                  src="/assets/vaidiktech_symbol.svg"
                  alt="VaidikTech Symbol"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-heading font-bold text-typography-primary leading-tight">
                  Vaidik Gandhi
                </span>
                <span className="text-[9px] font-mono tracking-wider text-accent-android uppercase">
                  Founder · VaidikTech
                </span>
              </div>
            </a>
          </Magnetic>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Magnetic key={link.name} strength={0.3}>
                <a
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-sans font-medium text-typography-secondary hover:text-typography-primary transition-colors duration-200 relative group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent-android rounded-full transition-all duration-300 group-hover:w-1/2" />
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <Magnetic strength={0.35}>
              <a
                href="#contact"
                className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-sans font-semibold rounded-full bg-accent-android text-[#05060A] shadow-[0_0_20px_rgba(61,220,132,0.35)] hover:shadow-[0_0_30px_rgba(61,220,132,0.6)] transition-all duration-300 hover:scale-[1.03]"
              >
                <span>Hire me</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
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
          className="fixed top-24 inset-x-4 z-40 p-6 rounded-2xl bg-[#090C14]/95 border border-white/10 backdrop-blur-2xl flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-sans font-medium text-typography-secondary hover:text-typography-primary py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full mt-2 py-2.5 text-center text-xs font-semibold rounded-xl bg-accent-android text-[#05060A]"
          >
            Hire me
          </a>
        </motion.div>
      )}
    </>
  );
};
