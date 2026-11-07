"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { WorldCanvas } from "@/components/canvas/WorldCanvas";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { ArchitectureExplodedSection } from "@/sections/ArchitectureExplodedSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { EngineeringStandardsSection } from "@/sections/EngineeringStandardsSection";
import { AboutSection } from "@/sections/AboutSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";
import { useWorldStore } from "@/store/useWorldStore";

export default function Home() {
  const { setScrollProgress, setActiveSection, setBooted, isBooted } = useWorldStore();

  useEffect(() => {
    // Lenis smooth inertial scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", (e: { progress: number }) => {
      const p = e.progress;
      setScrollProgress(p);

      // Map progress to active section
      if (p < 0.18) setActiveSection("hero");
      else if (p < 0.45) setActiveSection("architecture");
      else if (p < 0.70) setActiveSection("projects");
      else if (p < 0.85) setActiveSection("about");
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
  }, [setScrollProgress, setActiveSection]);

  return (
    <>
      {/* 1. Single Continuous 3D WebGL World Canvas (Exploded Phone & Architecture) */}
      <WorldCanvas />

      {/* 3. Purposeful Command Palette (Press Ctrl+K / Cmd+K) */}
      <CommandPalette />

      {/* 4. Minimal Architectural Navbar */}
      <Navbar />

      {/* 5. Continuous Editorial Scroll Sections */}
      <main className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        <HeroSection />
        <ArchitectureExplodedSection />
        <ProjectsSection />
        <EngineeringStandardsSection />
        <AboutSection />
        <CertificationsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
