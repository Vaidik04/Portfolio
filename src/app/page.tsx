"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { Preloader } from "@/components/preloader/Preloader";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/sections/HeroSection";

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

      {/* Main Single Page Content */}
      <main className="relative z-10 flex flex-col min-h-screen">
        {/* 3. Hero Section with 3D Phone Mockup */}
        <HeroSection />

        {/* Section Placeholder Shell (for subsequent phase reviews) */}
        <div id="about" className="py-24 border-t border-white/5 max-w-7xl mx-auto px-6 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/20 text-accent-android text-xs font-mono uppercase tracking-widest mb-4">
            Next Milestone: Section 4 · About & Story
          </div>
          <h2 className="text-3xl font-heading font-bold text-typography-primary">
            Ready for Section 2 Review: Design System & Hero Complete
          </h2>
          <p className="text-typography-secondary text-sm max-w-xl mx-auto mt-2">
            The layout shell, preloader terminal sequence, custom cursor, magnetic pill navbar, and 3D floating phone hero are live and reactive to mouse movement.
          </p>
        </div>
      </main>
    </>
  );
}
