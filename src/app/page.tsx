"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { WorldCanvas } from "@/components/canvas/WorldCanvas";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { OfflineBanner } from "@/components/ui/OfflineBanner";
import { DeveloperTerminal } from "@/components/ui/DeveloperTerminal";
import { Navbar } from "@/components/navbar/Navbar";

// Executive Curated Portfolio Layout
import { HeroSection } from "@/sections/HeroSection";
import { PullThePlugSection } from "@/sections/PullThePlugSection";
import { HomeFlagshipShowcase } from "@/sections/HomeFlagshipShowcase";
import { HomeArchitecturePreview } from "@/sections/HomeArchitecturePreview";
import { HomeLabPreview } from "@/sections/HomeLabPreview";
import { HomeProofCredentialsPreview } from "@/sections/HomeProofCredentialsPreview";
import { HomeBeaconTeaser } from "@/sections/HomeBeaconTeaser";
import { FooterSection } from "@/sections/FooterSection";

import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

export default function Home() {
  const { setScrollProgress, setScrollVelocity, setActiveSection, displayMode } = useWorldStore();

  useEffect(() => {
    // Lenis smooth inertial scrolling with velocity feedback
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

      // Play subtle whoosh on brisk scroll velocity
      if (Math.abs(e.velocity) > 1.8) {
        proceduralAudio.whoosh(e.velocity);
      }

      // Map progress to active section smoothly
      if (p < 0.22) setActiveSection("hero");
      else if (p < 0.45) setActiveSection("flightdeck");
      else if (p < 0.68) setActiveSection("architecture");
      else if (p < 0.85) setActiveSection("proof");
      else setActiveSection("contact");
    });

    // Native scroll fallback listener to ensure 100% sync
    const handleNativeScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const p = Math.max(0, Math.min(1, window.scrollY / total));
        setScrollProgress(p);
      }
    };
    window.addEventListener("scroll", handleNativeScroll, { passive: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("scroll", handleNativeScroll);
      lenis.destroy();
    };
  }, [setScrollProgress, setScrollVelocity, setActiveSection]);

  return (
    <>
      {/* 1. Continuous 3D WebGL Studio Canvas (unmounted in Fast Mode for zero GPU overhead) */}
      {displayMode === "experience" ? (
        <WorldCanvas />
      ) : (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07080C]"
        >
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-android/5 blur-[160px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[160px]" />
        </div>
      )}

      {/* 2. Offline Connectivity Sentinel */}
      <OfflineBanner />

      {/* 3. Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette />

      {/* 4. In-Site Developer Terminal (Tilde / Backtick) */}
      <DeveloperTerminal />

      {/* 5. Precision Floating Navbar */}
      <Navbar />

      {/* 6. Curated Editorial Landing Flow */}
      <main className="relative z-10 flex flex-col min-h-screen pointer-events-none w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <PullThePlugSection />
        <HomeFlagshipShowcase />
        <HomeArchitecturePreview />
        <HomeLabPreview />
        <HomeProofCredentialsPreview />
        <HomeBeaconTeaser />
        <FooterSection />
      </main>
    </>
  );
}
