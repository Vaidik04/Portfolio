"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { Preloader } from "@/components/preloader/Preloader";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { CodeSection } from "@/sections/CodeSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";

export default function Home() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth inertial scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* 1. Terminal Boot Sequence Preloader */}
      <Preloader onComplete={() => setBooted(true)} />

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* Main Single Page Cinematic Content */}
      <main className="relative z-10 flex flex-col min-h-screen">
        {/* 3. Hero Section with 3D Phone Mockup */}
        <HeroSection />

        {/* 4. About Section with Kinetic Scroll Highlight */}
        <AboutSection />

        {/* 5. Tech Stack & Matrix with Infinite Marquee */}
        <TechStackSection />

        {/* 6. Projects Showcase (Girvi, AdvoKosh, JewelBill Play Store Links & Modals) */}
        <ProjectsSection />

        {/* 7. Process & Architecture Deep Dive */}
        <ProcessSection />

        {/* 8. Production Code IDE Window with Mini Hardware Preview */}
        <CodeSection />

        {/* 9. Experience & Milestones Timeline */}
        <ExperienceSection />

        {/* 10. Direct Connection & Contact Generator */}
        <ContactSection />

        {/* 11. Cinematic Outlined Typography Footer with Live Time */}
        <FooterSection />
      </main>
    </>
  );
}
