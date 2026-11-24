"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Check, Copy, ArrowRight, Github, Linkedin, Play, Terminal, ArrowUpRight, Send } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

const CATEGORIES = [
  "SOVEREIGN ANDROID",
  "THERMAL POS (ESC/POS)",
  "ENCLAVE VAULT",
  "R&D CONSULTING",
];

export const HomeBeaconTeaser: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("SOVEREIGN ANDROID");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const directEmail = "vaidik.gandhi1@gmail.com";

  const handleCopyEmail = () => {
    proceduralAudio.tick();
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setStatus("sending");
    proceduralAudio.tick();

    // Construct mailto link with encoded parameters
    const subject = encodeURIComponent(`[Commission Initiation: ${selectedCategory}] - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nScope: ${scope}\nDomain: ${selectedCategory}\n\nProject Brief:\n${message}`
    );

    setTimeout(() => {
      setStatus("sent");
      proceduralAudio.success();
      window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section
      id="contact-teaser"
      className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full z-10 pointer-events-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Commission Initiation Brief & Direct Channels */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyber uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
            <span>COMMISSION INQUIRY // 2026 AUDIT // OPEN</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
            COMMISSION INITIATION
          </h2>

          <p className="text-xs sm:text-sm font-sans text-[#8E94A5] leading-relaxed">
            We engineer zero-drift algorithms, high-throughput local architectures, and sovereign Android interfaces for enterprises and founders seeking definitive software independence.
          </p>

          {/* Studio Coordinates & Address */}
          <div className="tactical-box p-4 rounded-xl border border-[#1E222D] bg-[#0E1015] font-mono text-xs space-y-2 mt-2">
            <div className="text-[10px] text-[#565B6C] uppercase tracking-wider">
              STUDIO LOCATION // AIR-GAPPED DISPATCH
            </div>
            <div className="text-white font-bold">
              VaidikTech Studio · 23.2599° N, 77.4126° E
            </div>
            <div className="text-[#8E94A5] text-[11px]">
              Bhopal, Madhya Pradesh, India · PIN 462022
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#1E222D] text-[10px]">
              <span className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
              <span className="text-cyber font-bold">STATUS: ACCEPTING COMMISSIONS</span>
            </div>
          </div>

          {/* Quick Copy Direct Channel */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="tactical-box flex-1 px-4 py-2.5 rounded-xl border border-[#1E222D] hover:border-cyber bg-[#0E1015] text-xs font-mono text-white flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-cyber" />
                <span className="truncate">{directEmail}</span>
              </div>
              <span className="text-[10px] text-[#8E94A5] group-hover:text-cyber">
                {copied ? "COPIED ✓" : "COPY"}
              </span>
            </button>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#8E94A5]">
            <a
              href="https://github.com/Vaidik04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-cyber" />
              <span>GitHub</span>
            </a>
            <span>/</span>
            <a
              href="https://in.linkedin.com/in/vaidik-gandhi-395b11378"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyber" />
              <span>LinkedIn</span>
            </a>
            <span>/</span>
            <a
              href="https://play.google.com/store/apps/dev?id=vaidiktech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-cyber fill-current" />
              <span>Google Play</span>
            </a>
          </div>
        </div>

        {/* Right Column: Tactical Consultation Form (Kairos Atelier Signature) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="tactical-box p-6 sm:p-8 rounded-2xl border border-[#1E222D] bg-[#0E1015]/95 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#1E222D]">
              <span className="text-[10px] font-mono tracking-widest text-[#8E94A5] uppercase">
                COMMISSION PROTOCOL // DIRECT DISPATCH
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-bold">
                ENCRYPTED TRANSIT
              </span>
            </div>

            {/* Form Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider block mb-1.5">
                  IDENTITY // FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikramaditya Singhal"
                  className="w-full bg-[#08090C] border border-[#1E222D] focus:border-cyber rounded-lg px-3.5 py-2.5 text-xs font-mono text-white placeholder-[#565B6C] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider block mb-1.5">
                  COMMUNICATION // EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. vikram@enterprise.in"
                  className="w-full bg-[#08090C] border border-[#1E222D] focus:border-cyber rounded-lg px-3.5 py-2.5 text-xs font-mono text-white placeholder-[#565B6C] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Scope / Timeline */}
            <div>
              <label className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider block mb-1.5">
                SCOPE // TIMELINE OR TARGET PLATFORM
              </label>
              <input
                type="text"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder="e.g. Android 15 Tablet POS · Q1 2026 Target Launch"
                className="w-full bg-[#08090C] border border-[#1E222D] focus:border-cyber rounded-lg px-3.5 py-2.5 text-xs font-mono text-white placeholder-[#565B6C] focus:outline-none transition-colors"
              />
            </div>

            {/* Sector Category Selector */}
            <div>
              <label className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider block mb-1.5">
                SECTOR // ARCHITECTURE CLASSIFICATION
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      proceduralAudio.tick();
                      setSelectedCategory(cat);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? "bg-cyber text-[#08090C] font-bold shadow-[0_0_12px_rgba(200,248,2,0.25)]"
                        : "bg-[#08090C] border border-[#1E222D] text-[#8E94A5] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label className="text-[10px] font-mono text-[#8E94A5] uppercase tracking-wider block mb-1.5">
                BRIEF // SYSTEM SPECIFICATIONS & CONSTRAINTS
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline your runtime requirements, zero-telemetry constraints, Bluetooth hardware protocols, or cryptographic needs..."
                className="w-full bg-[#08090C] border border-[#1E222D] focus:border-cyber rounded-lg px-3.5 py-2.5 text-xs font-mono text-white placeholder-[#565B6C] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-full py-3.5 rounded-xl bg-cyber text-[#08090C] font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D4FF00] transition-all shadow-[0_0_20px_rgba(200,248,2,0.3)] active:scale-98"
            >
              {status === "sending" ? (
                <span>DISPATCHING COMMISSION...</span>
              ) : status === "sent" ? (
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>TRANSMISSION PREPARED IN CLIENT</span>
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <span>TRANSMIT COMMISSION REQUEST</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
