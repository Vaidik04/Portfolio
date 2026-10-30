"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { Rocket, Clock, Heart } from "lucide-react";

export const FooterSection: React.FC = () => {
  const [bhopalTime, setBhopalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC + 5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setBhopalTime(now.toLocaleTimeString("en-IN", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-[#040508]">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        {/* Giant Outlined Typography that Fills on Hover */}
        <div className="w-full text-center select-none overflow-hidden group cursor-pointer">
          <div
            className="text-[14vw] font-heading font-black tracking-tighter leading-none transition-all duration-700 text-transparent"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.15)",
            }}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-android group-hover:via-accent-cyan group-hover:to-accent-violet transition-all duration-700">
              VAIDIK GANDHI
            </span>
          </div>
        </div>

        {/* Footer Info Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-white/5">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center p-2">
              <Image
                src="/assets/vaidiktech_symbol.svg"
                alt="VaidikTech"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-heading font-bold text-typography-primary">
                VaidikTech
              </div>
              <div className="text-[10px] font-mono text-typography-muted">
                Building useful technology, one product at a time.
              </div>
            </div>
          </div>

          {/* Live Local Time Widget */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-border text-xs font-mono text-typography-secondary">
            <span className="w-2 h-2 rounded-full bg-accent-android shadow-[0_0_8px_#3DDC84] animate-pulse" />
            <Clock className="w-3.5 h-3.5 text-typography-muted" />
            <span>Bhopal, India (IST):</span>
            <span className="text-typography-primary font-bold">{bhopalTime || "11:00:00 PM"}</span>
          </div>

          {/* Rocket Back to Top Button */}
          <Magnetic strength={0.4}>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-white/10 text-xs font-mono text-typography-secondary hover:text-accent-android hover:border-accent-android/40 transition-all group"
            >
              <span>Back to Top</span>
              <Rocket className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Magnetic>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-typography-muted border-t border-white/5 pt-6">
          <div>&copy; 2026 Vaidik Gandhi · Founder @ VaidikTech. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for the Indian independent ecosystem.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

