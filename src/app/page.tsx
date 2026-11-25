"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { WorldCanvas } from "@/components/canvas/WorldCanvas";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { OfflineBanner } from "@/components/ui/OfflineBanner";
import { DeveloperTerminal } from "@/components/ui/DeveloperTerminal";
import { EasterEggs } from "@/components/ui/EasterEggs";
import { Navbar } from "@/components/navbar/Navbar";

// Clean-Slate 5-Act Personal Engineering Portfolio
import { HeroSection } from "@/sections/HeroSection";
import { SelectedWorksSection } from "@/sections/SelectedWorksSection";
import { EngineeringCraftSection } from "@/sections/EngineeringCraftSection";
import { AboutCredentialsSection } from "@/sections/AboutCredentialsSection";
import { HomeBeaconTeaser } from "@/sections/HomeBeaconTeaser";
import { FooterSection } from "@/sections/FooterSection";

import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

export default function Home() {
  const { setScrollProgress, setScrollVelocity, setActiveSection, displayMode } = useWorldStore();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", (e: { progress: number; velocity: number }) => {
      const p = Math.max(0, Math.min(1, e.progress));
      setScrollProgress(p);
      setScrollVelocity(e.velocity || 0);

      if (Math.abs(e.velocity) > 1.8) {
        proceduralAudio.whoosh(e.velocity);
      }

      if (p < 0.18) setActiveSection("hero");
      else if (p < 0.45) setActiveSection("flightdeck");
      else if (p < 0.72) setActiveSection("architecture");
      else if (p < 0.88) setActiveSection("about");
      else setActiveSection("contact");
    });

    const handleNativeScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const p = Math.max(0, Math.min(1, window.scrollY / total));
        setScrollProgress(p);
      }
    };
    window.addEventListener("scroll", handleNativeScroll, { passive: true });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleNativeScroll);
      lenis.destroy();
    };
  }, [setScrollProgress, setScrollVelocity, setActiveSection]);

  return (
    <>
      {/* 1. Unified 3D World Stage (Unmounted cleanly in Fast 2D Mode) */}
      {displayMode === "experience" ? (
        <WorldCanvas />
      ) : (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050608]"
        />
      )}

      {/* 2. Offline Service Worker & Konami / DevTools Sentinel */}
      <OfflineBanner />
      <EasterEggs />

      {/* 3. Keyboard Power Tools (Cmd+K & Backtick CLI) */}
      <CommandPalette />
      <DeveloperTerminal />

      {/* 4. Hairline Swiss Navigation */}
      <Navbar />

      {/* 5. 5-Act Personal Portfolio Flow */}
      <main className="relative z-10 flex flex-col min-h-screen pointer-events-none w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <SelectedWorksSection />
        <EngineeringCraftSection />
        <AboutCredentialsSection />
        <HomeBeaconTeaser />
        <FooterSection />
      </main>
    </>
  );
}
