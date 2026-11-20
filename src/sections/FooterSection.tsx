"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const FooterSection: React.FC = () => {
  const [localTime, setLocalTime] = React.useState("");

  React.useEffect(() => {
    const update = () => {
      try {
        const t = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalTime(t);
      } catch {
        setLocalTime("");
      }
    };
    update();
    const interval = setInterval(update, 15000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    proceduralAudio.tick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-white/10 text-xs font-sans text-typography-muted z-10 pointer-events-auto overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/5">
        {/* Brand Identification */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-surface-elevated border border-white/10 flex items-center justify-center p-2">
            <Image
              src="/assets/vaidiktech_symbol.svg"
              alt="VaidikTech"
              width={22}
              height={22}
              className="object-contain"
            />
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-typography-primary">
              Vaidik Gandhi
            </div>
            <div className="text-[11px] font-mono text-typography-muted">
              Founder · VaidikTech Sovereign Mobile Studio
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center gap-5 text-typography-secondary text-xs font-mono">
          <Link href="/projects" className="hover:text-accent-android transition-colors">
            Work
          </Link>
          <Link href="/architecture" className="hover:text-accent-android transition-colors">
            Architecture
          </Link>
          <Link href="/lab" className="hover:text-accent-android transition-colors">
            Lab
          </Link>
          <Link href="/proof" className="hover:text-accent-android transition-colors">
            Proof
          </Link>
          <Link href="/about" className="hover:text-accent-android transition-colors">
            About
          </Link>
          <Link href="/credentials" className="hover:text-accent-android transition-colors">
            Credentials
          </Link>
          <Link href="/contact" className="hover:text-accent-android transition-colors">
            Contact
          </Link>
          <a
            href="https://in.linkedin.com/in/vaidik-gandhi-395b11378"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vaidik.gandhi1@gmail.com"
            className="hover:text-accent-android transition-colors"
          >
            Email
          </a>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-typography-muted hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Copyright & Technical Colophon */}
      <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-typography-muted">
        <div>
          © 2026 Vaidik Gandhi · VaidikTech. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Bhopal, India</span>
          {localTime && (
            <>
              <span>·</span>
              <span className="text-typography-secondary">{localTime} IST</span>
            </>
          )}
          <span>·</span>
          <span>100% Offline-First Architecture</span>
        </div>
      </div>
    </footer>
  );
};
