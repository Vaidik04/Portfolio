"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Check, Copy, ArrowRight, Github, Linkedin, Play, Sparkles, Globe } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const HomeBeaconTeaser: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const directEmail = "vaidik.gandhi1@gmail.com";

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

  const handleCopyEmail = () => {
    proceduralAudio.tick();
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact-teaser"
      className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#101420]/90 to-[#0A0D14]/95 border border-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-android/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/30 text-xs font-mono text-accent-android w-fit">
            <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "14s" }} />
            <span className="flex items-center gap-1.5">
              <span>Open for Selective Engagements</span>
              {localTime && (
                <>
                  <span className="text-typography-muted">·</span>
                  <span className="text-white">Bhopal {localTime} IST</span>
                </>
              )}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            Let&apos;s engineer systems that never fail in the field.
          </h2>

          <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
            Available for distributed systems architecture, applied AI & multi-agent engineering, sovereign offline platforms, and selective consulting engagements.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link
              href="/contact"
              onClick={() => proceduralAudio.tick()}
              style={{ backgroundColor: "#3DDC84", color: "#05060A" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(61,220,132,0.3)] hover:scale-105 active:scale-95"
            >
              <span>Open Deployment Beacon</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141824] border border-white/15 hover:border-white/30 text-xs font-mono text-typography-primary transition-all group"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent-android" />
                  <span className="text-accent-android">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-typography-muted group-hover:text-white" />
                  <span>Copy vaidik.gandhi1@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Profile Links */}
          <div className="flex items-center gap-6 pt-6 mt-4 border-t border-white/10 text-xs font-mono text-typography-muted">
            <a
              href="https://github.com/Vaidik04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://in.linkedin.com/in/vaidik-gandhi-395b11378"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://play.google.com/store/apps/dev?id=vaidiktech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-android transition-colors flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
