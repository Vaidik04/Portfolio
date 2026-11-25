"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Copy, ArrowRight, Github, Linkedin, Play } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { Magnetic } from "@/components/ui/Magnetic";

export const HomeBeaconTeaser: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const directEmail = "vaidik.gandhi1@gmail.com";

  const handleCopyEmail = () => {
    proceduralAudio.tick();
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-auto"
    >
      <div className="border-t border-white/[0.08] pt-14 pb-8">
        <div className="text-[11px] font-mono uppercase tracking-widest text-accent-android mb-4">
          05 // Contact &amp; Collaborations
        </div>

        <h2 className="swiss-display font-heading font-bold text-white max-w-4xl">
          Let&apos;s engineer something resilient.
        </h2>

        <p className="mt-6 text-sm sm:text-base text-typography-muted font-sans max-w-xl leading-relaxed">
          Open to software engineering roles, AI &amp; distributed systems research collaborations, and challenging backend or edge-architecture work.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic strength={0.25}>
            <Link
              href="/contact"
              onClick={() => proceduralAudio.tick()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#050608] hover:bg-accent-android font-mono font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Open Inquiry Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Magnetic>

          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-white/15 bg-white/[0.03] hover:border-white/35 text-xs font-mono text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent-android" />
                  <span className="text-accent-android">Copied {directEmail}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-typography-muted" />
                  <span>{directEmail}</span>
                </>
              )}
            </button>
          </Magnetic>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs font-mono text-typography-muted">
          <a
            href="https://github.com/Vaidik04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub / Vaidik04</span>
          </a>

          <a
            href="https://in.linkedin.com/in/vaidik-gandhi-395b11378"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://play.google.com/store/apps/dev?id=vaidiktech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent-android transition-colors"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Google Play (VaidikTech)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
