import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0C0E",
        surface: {
          DEFAULT: "#121418",
          hover: "#181B21",
          elevated: "#1D212A",
          border: "rgba(240, 240, 246, 0.08)",
          "border-hover": "rgba(240, 240, 246, 0.22)",
        },
        brand: {
          DEFAULT: "#2B5BFF", // Precision Architectural Cobalt
          light: "#4D76FF",
          dark: "#1A44D9",
          subtle: "rgba(43, 91, 255, 0.12)",
          border: "rgba(43, 91, 255, 0.35)",
        },
        accent: {
          ochre: "#D95C36", // Precision Architectural Copper / Security Ochre
          ochreSubtle: "rgba(217, 92, 54, 0.12)",
          cobalt: "#2B5BFF",
          android: "#2B5BFF", // Remapped to brand cobalt
          cyan: "#2B5BFF",
          violet: "#2B5BFF",
        },
        typography: {
          primary: "#F4F4F6",
          secondary: "#9398A7",
          muted: "#5C6170",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
