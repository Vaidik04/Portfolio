"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { WorldCanvas } from "@/components/canvas/WorldCanvas";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { HUDOverlay } from "@/components/ui/HUDOverlay";
import { OfflineBanner } from "@/components/ui/OfflineBanner";
import { DebugInspector } from "@/components/ui/DebugInspector";
import { DeveloperTerminal } from "@/components/ui/DeveloperTerminal";
import { MatrixBootSequence } from "@/components/preloader/MatrixBootSequence";
import { Navbar } from "@/components/navbar/Navbar";

// Editorial Continuous 8 Scenes
import { HeroSection } from "@/sections/HeroSection";
import { ArchitectureExplodedSection } from "@/sections/ArchitectureExplodedSection";
import { FlightDeckSection } from "@/sections/FlightDeckSection";
import { LabArchiveSection } from "@/sections/LabArchiveSection";
import { LiveProofSection } from "@/sections/LiveProofSection";
import { AboutSovereignSection } from "@/sections/AboutSovereignSection";
import { VerifiedCredentialsSection } from "@/sections/VerifiedCredentialsSection";
import { DeployBeaconSection } from "@/sections/DeployBeaconSection";
import { FooterSection } from "@/sections/FooterSection";

import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

export default function Home() {
  const { setScrollProgress, setScrollVelocity, setActiveSection } = useWorldStore();

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

      // Map progress to active section
      if (p < 0.12) setActiveSection("hero");
      else if (p < 0.28) setActiveSection("architecture");
      else if (p < 0.44) setActiveSection("flight-deck");
      else if (p < 0.58) setActiveSection("lab");
      else if (p < 0.72) setActiveSection("proof");
      else if (p < 0.84) setActiveSection("about");
      else if (p < 0.94) setActiveSection("credentials");
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
      {/* 0. Skippable Gradle Preloader Sequence */}
      <MatrixBootSequence />

      {/* 1. Single Continuous 3D WebGL World Canvas */}
      <WorldCanvas />

      {/* 2. Persistent 4-Corner Telemetry HUD */}
      <HUDOverlay />

      {/* 3. Offline Sentinel Banner */}
      <OfflineBanner />

      {/* 4. Purposeful Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette />

      {/* 5. In-Site Developer Terminal (Tilde / Backtick) */}
      <DeveloperTerminal />

      {/* 6. Debug Inspector (?debug=true or command 'debug') */}
      <DebugInspector />

      {/* 7. Minimal Sovereign Navbar */}
      <Navbar />

      {/* 8. Continuous Editorial Scroll Sections (DOM) */}
      <main className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        <HeroSection />
        <ArchitectureExplodedSection />
        <FlightDeckSection />
        <LabArchiveSection />
        <LiveProofSection />
        <AboutSovereignSection />
        <VerifiedCredentialsSection />
        <DeployBeaconSection />
        <FooterSection />
      </main>
    </>
  );
}
