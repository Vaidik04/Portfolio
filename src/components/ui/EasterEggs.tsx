"use client";

import React, { useEffect } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const EasterEggs: React.FC = () => {
  const { setGlitchMode, glitchMode } = useWorldStore();

  useEffect(() => {
    // 1. DevTools ASCII Banner
    console.log(
      "%c" +
        `
 __   __   ___   ___  ___  ___  _  __   ___    ___   _  _  ___   _  _  ___ 
 \\ \\ / /  / _ \\ |_ _||   \\|_ _|| |/ /  / __|  / _ \\ | \\| ||   \\ | || ||_ _|
  \\ V /  | |_| | | | | |) || | | ' <  | (_ | | |_| || .\` || |) || __ | | | 
   \\_/   |_| |_||___||___/|___||_|\\_\\  \\___| |_| |_||_|\\_||___/ |_||_||___|

 Systems & Applied AI Engineer · B.Tech CSE (AI & ML) '26 · Bhopal, India
 Architecture: SwarmOS · QRoute · GridCare · AdvoKosh · Girvi · JewelBill
 Press \` (backtick) for CLI HUD or Cmd/Ctrl+K for Command Palette.
 Email: vaidik.gandhi1@gmail.com | GitHub: github.com/Vaidik04
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
          proceduralAudio.shockwave();
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

