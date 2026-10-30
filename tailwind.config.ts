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
        background: "#05060A",
        surface: {
          DEFAULT: "#0D0F17",
          hover: "#141824",
          elevated: "#181D2D",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 255, 255, 0.18)",
        },
        accent: {
          android: "#3DDC84",
          violet: "#7C5CFF",
          cyan: "#22D3EE",
          emerald: "#10B981",
          amber: "#F59E0B",
        },
        typography: {
          primary: "#F5F7FA",
          secondary: "#8A90A2",
          muted: "#525866",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "radial-spotlight":
          "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(61, 220, 132, 0.12) 0%, transparent 60%)",
        "mesh-glow":
          "radial-gradient(at 0% 0%, rgba(124, 92, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(34, 211, 238, 0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(61, 220, 132, 0.1) 0px, transparent 50%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(140px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(140px) rotate(-360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        orbit: "orbit 24s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

