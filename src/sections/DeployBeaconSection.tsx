"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Mail, Send, Check, Copy, ArrowUpRight, Github, Linkedin, Play, Sparkles, Globe, Terminal } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { useWorldStore } from "@/store/useWorldStore";

export const DeployBeaconSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");

  const { openTerminal } = useWorldStore();
  const directEmail = "vaidikgandhi@gmail.com";

  const handleCopyEmail = () => {
    proceduralAudio.tick();
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    proceduralAudio.shockwave();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#3DDC84", "#7C5CFF", "#22D3EE", "#F5C26B"],
      });
    } catch {
      // safe fallback if canvas-confetti is not loaded
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-android w-fit">
          <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          <span>Scene 08 · Sovereign Deployment Beacon</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary">
          Let&apos;s build something sovereign.
        </h2>
        <p className="text-sm sm:text-base text-typography-secondary font-sans max-w-xl leading-relaxed">
          Available for offline-first architecture contracts, native Android systems development, and sovereign mobile software consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Access Points (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Founder Identity Card with 3D Lookalike Avatar */}
          <div className="p-4 rounded-3xl bg-surface border border-white/10 flex items-center gap-4 shadow-xl">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-accent-android/40 flex-shrink-0 bg-black/40">
              <Image
                src="/assets/vaidik_3d_avatar_square.jpg"
                alt="Vaidik Gandhi 3D Lookalike Avatar"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-heading font-bold text-sm text-typography-primary">
                Vaidik Gandhi
              </div>
              <div className="text-xs font-mono text-accent-android mt-0.5">
                Founder @ VaidikTech · Sovereign Android Architect
              </div>
              <div className="text-[11px] font-sans text-typography-muted mt-0.5">
                LNCT Bhopal &apos;26 · 100% Offline Software
              </div>
            </div>
          </div>

          {/* Quick Copy Email Box */}
          <div className="p-6 rounded-3xl bg-surface border border-white/10 flex flex-col gap-4 shadow-xl">
            <span className="text-xs font-mono text-typography-muted uppercase tracking-wider">
              Direct Invariant Communication
            </span>
            <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-android" />
                <span className="font-mono text-xs sm:text-sm text-typography-primary font-medium">
                  {directEmail}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-typography-secondary hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent-android" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <p className="text-xs text-typography-secondary font-sans leading-relaxed">
              Air-gapped inbox checked daily. Send architecture requests, code reviews, or contract inquiries.
            </p>
          </div>

          {/* Social Proof Links */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://github.com/Vaidik04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-typography-muted group-hover:text-white transition-colors" />
                <span className="text-xs font-mono text-typography-secondary group-hover:text-white">
                  GitHub
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-typography-muted group-hover:text-accent-android transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://www.linkedin.com/in/vaidik-gandhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-accent-violet" />
                <span className="text-xs font-mono text-typography-secondary group-hover:text-white">
                  LinkedIn
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-typography-muted group-hover:text-accent-android transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://play.google.com/store/apps/developer?id=VaidikTech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Play className="w-4 h-4 text-accent-android fill-current" />
                <span className="text-xs font-mono text-typography-secondary group-hover:text-white">
                  Google Play
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-typography-muted group-hover:text-accent-android transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                proceduralAudio.tick();
                openTerminal();
              }}
              className="p-4 rounded-2xl bg-surface border border-white/5 hover:border-accent-cyan/40 transition-all flex items-center justify-between group text-left"
            >
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-accent-cyan" />
                <span className="text-xs font-mono text-typography-secondary group-hover:text-white">
                  CLI Terminal
                </span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-typography-muted">
                `
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Direct Dispatch Form (6 Cols) */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl bg-surface border border-white/10 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="font-heading font-bold text-base text-typography-primary">
                Direct Dispatch Request
              </span>
              <span className="text-[11px] font-mono text-accent-android">
                ● 24h Response SLA
              </span>
            </div>

            {submitted ? (
              <div className="p-8 text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-android/20 border border-accent-android flex items-center justify-center text-accent-android">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Message Dispatched
                </h4>
                <p className="text-xs font-sans text-typography-secondary max-w-xs">
                  Thank you. Your inquiry has been routed to Vaidik. You will receive a direct reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-mono text-accent-android hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="beacon-name" className="text-xs font-mono text-typography-muted">
                    Your Name / Organization
                  </label>
                  <input
                    id="beacon-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. AdvoKosh Legal Labs / Sarah Chen"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-typography-primary placeholder:text-typography-muted/50 focus:outline-none focus:border-accent-android/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="beacon-email" className="text-xs font-mono text-typography-muted">
                    Contact Email
                  </label>
                  <input
                    id="beacon-email"
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-typography-primary placeholder:text-typography-muted/50 focus:outline-none focus:border-accent-android/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="beacon-message" className="text-xs font-mono text-typography-muted">
                    Project Scope / Requirements
                  </label>
                  <textarea
                    id="beacon-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your Android offline workflow, security boundary, or contract proposal..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-typography-primary placeholder:text-typography-muted/50 focus:outline-none focus:border-accent-android/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: "#3DDC84", color: "#05060A" }}
                  className="mt-2 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-mono font-black text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(61,220,132,0.35)] hover:scale-[1.02] active:scale-95 hover:brightness-105"
                >
                  <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Transmit Inquiry</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

