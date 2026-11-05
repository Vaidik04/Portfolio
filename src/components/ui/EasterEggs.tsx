"use client";

import React, { useEffect } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { sounds } from "@/lib/sound";

export const EasterEggs: React.FC = () => {
  const { setGlitchMode, glitchMode } = useWorldStore();

  useEffect(() => {
    // 1. DevTools ASCII Banner
    console.log(
      "%c" +
        `
 __      __         _      _ _     _____ _              _           _ 
 \\ \\    / /        (_)    | (_)   / ____| |            | |         | |
  \\ \\  / /_ _ _ __  _  ___| |_   | (___ | |_ __ _ _ __ | |__   ___ | |
   \\ \\/ / _\` | '_ \\| |/ _ \\ | |   \\___ \\| __/ _\` | '_ \\| '_ \\ / _ \\| |
    \\  / (_| | | | | |  __/ | |   ____) | || (_| | | | | | | | (_) |_|
     \\/ \\__,_|_| |_|_|\\___|_|_|  |_____/ \\__\\__,_|_| |_|_| |_|\\___/(_)
                                                                      
 Independent Android Developer · Founder @ VaidikTech · Bhopal, India
 Verified Play Store Apps: Girvi | JewelBill | AdvoKosh | SwarmOS
 Interested in building dependable products together? 
 Email: vaidikgandhi@gmail.com | GitHub: github.com/Vaidik04
`,
      "color: #3DDC84; font-family: monospace; font-size: 11px; font-weight: bold;"
    );

    // 2. Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
    const konamiSequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = konamiSequence[konamiIndex].toLowerCase();

      if (key === expected) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          sounds.shockwave();
          setGlitchMode(!glitchMode);
          konamiIndex = 0;
          console.log("%c>>> KONAMI OVERRIDE: Holographic glitch mode toggled! <<<", "color: #22D3EE; font-weight: bold;");
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [glitchMode, setGlitchMode]);

  return null;
};
