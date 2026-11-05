"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { MatrixBootSequence } from "@/components/preloader/MatrixBootSequence";
import { WorldCanvas } from "@/components/canvas/WorldCanvas";
import { HUDOverlay } from "@/components/ui/HUDOverlay";
import { DeveloperTerminal } from "@/components/ui/DeveloperTerminal";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { EasterEggs } from "@/components/ui/EasterEggs";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { CodeSection } from "@/sections/CodeSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";
import { useWorldStore } from "@/store/useWorldStore";

export default function Home() {
  const { setScrollProgress, setActiveSection, setBooted, isBooted } = useWorldStore();

  useEffect(() => {
    // Lenis smooth inertial scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", (e: { progress: number }) => {
      const p = e.progress;
      setScrollProgress(p);

      // Map progress to active section for HUD
      if (p < 0.18) setActiveSection("hero");
      else if (p < 0.35) setActiveSection("about");
      else if (p < 0.52) setActiveSection("skills");
      else if (p < 0.72) setActiveSection("projects");
      else if (p < 0.84) setActiveSection("architecture");
      else if (p < 0.93) setActiveSection("credentials");
      else setActiveSection("contact");
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [setScrollProgress, setActiveSection]);

  return (
    <>
      {/* 1. Matrix Singularity Boot Sequence */}
      {!isBooted && (
        <MatrixBootSequence
          onComplete={() => {
            setBooted(true);
          }}
        />
      )}

      {/* 2. Single Fixed Continuous 3D WebGL World Canvas */}
      <WorldCanvas />

      {/* 3. Sci-Fi Developer HUD Overlay */}
      <HUDOverlay />

      {/* 4. In-Site CLI Terminal (Press `) */}
      <DeveloperTerminal />

      {/* 5. Command Palette (Press Ctrl+K) */}
      <CommandPalette />

      {/* 6. Easter Eggs (Konami Code & Console Art) */}
      <EasterEggs />

      {/* 7. Floating Glass Navbar */}
      <Navbar />

      {/* 8. Continuous Scroll Sections Overlay */}
      <main className="relative z-10 flex flex-col min-h-screen pointer-events-auto">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ProcessSection />
        <CodeSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
