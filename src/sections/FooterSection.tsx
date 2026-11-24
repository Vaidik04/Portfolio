"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ShieldCheck } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const FooterSection: React.FC = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const update = () => {
      try {
        const t = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setLocalTime(t);
      } catch {
        setLocalTime("");
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    proceduralAudio.tick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-8 px-4 sm:px-6 max-w-7xl mx-auto w-full border-t border-[#1E222D] text-xs font-mono text-[#8E94A5] z-10 pointer-events-auto">
      {/* 4-Column Technical Coordinate Telemetry Matrix (Kairos Atelier Signature) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-[#1E222D]">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-[#565B6C] uppercase tracking-wider">
            BHOPAL [STUDIO HQ]
          </span>
          <span className="text-white font-bold text-xs tracking-wider">
            23.2599° N, 77.4126° E
          </span>
          <span className="text-[10px] text-cyber">AIR-GAPPED COMPUTE</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-[#565B6C] uppercase tracking-wider">
            NEW DELHI [CAPITAL]
          </span>
          <span className="text-white font-bold text-xs tracking-wider">
            28.6139° N, 77.2090° E
          </span>
          <span className="text-[10px] text-[#8E94A5]">HIGH COURT STATUTE RADAR</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-[#565B6C] uppercase tracking-wider">
            BENGALURU [ENG HUB]
          </span>
          <span className="text-white font-bold text-xs tracking-wider">
            12.9716° N, 77.5946° E
          </span>
          <span className="text-[10px] text-[#8E94A5]">SILICON ARCHITECTURE</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-[#565B6C] uppercase tracking-wider">
            SYSTEM RUNTIME [IST]
          </span>
          <span className="text-cyber font-bold text-xs tracking-wider">
            {localTime || "12:00:00"} UTC+05:30
          </span>
          <span className="text-[10px] text-[#8E94A5]">ZERO TELEMETRY EGRESS</span>
        </div>
      </div>

      {/* Middle Row: Wordmark, Nav Links, Scroll-to-Top */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6 border-b border-[#1E222D]">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#2A303F]">
            <Image
              src="/assets/vaidik_authentic_square.jpg"
              alt="Vaidik Gandhi"
              fill
              sizes="32px"
              className="object-cover grayscale"
            />
          </div>
          <div>
            <div className="font-display font-black text-sm text-white tracking-tight">
              VAIDIKTECH LABS
            </div>
            <div className="text-[10px] text-[#565B6C]">
              Vaidik Gandhi · Sovereign Android Engineering
            </div>
          </div>
        </div>

        {/* Directory Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <Link href="/projects" className="hover:text-cyber transition-colors">
            Exhibitions
          </Link>
          <Link href="/architecture" className="hover:text-cyber transition-colors">
            Architecture
          </Link>
          <Link href="/proof" className="hover:text-cyber transition-colors">
            Sandbox
          </Link>
          <Link href="/lab" className="hover:text-cyber transition-colors">
            Directory
          </Link>
          <Link href="/credentials" className="hover:text-cyber transition-colors">
            Benchmark
          </Link>
          <Link href="/about" className="hover:text-cyber transition-colors">
            Studio
          </Link>
          <Link href="/contact" className="hover:text-cyber transition-colors">
            Initiate
          </Link>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="tactical-box px-3 py-1.5 rounded-lg border border-[#1E222D] hover:border-cyber text-xs font-mono text-[#8E94A5] hover:text-white flex items-center gap-1.5 transition-colors self-end md:self-auto"
        >
          <span>TOP 0.0</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyber" />
        </button>
      </div>

      {/* Bottom Status Sentinel */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10px] text-[#565B6C]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-cyber" />
          <span className="text-[#8E94A5]">
            AIR-GAPPED SOVEREIGN SENTINEL · ZERO THIRD-PARTY TRACKERS · 0.0000% FLOAT DRIFT
          </span>
        </div>

        <div>
          © {new Date().getFullYear()} VAIDIK GANDHI / VAIDIKTECH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
