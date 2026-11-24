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
        bg: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface-1)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
          elevated: "rgba(255, 255, 255, 0.04)",
          border: "var(--border)",
          "border-hover": "var(--border-hover)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "var(--border)",
          highlight: "var(--border-highlight)",
          cyber: "#C8F802",
        },
        text: {
          DEFAULT: "var(--text)",
          primary: "var(--text)",
          muted: "var(--text-muted)",
          faint: "var(--text-faint)",
        },
        cyber: {
          DEFAULT: "#C8F802",
          lime: "#C8F802",
          lemon: "#D4FF00",
          dim: "rgba(200, 248, 2, 0.14)",
          glow: "rgba(200, 248, 2, 0.35)",
        },
        accent: {
          DEFAULT: "#C8F802",
          cyber: "#C8F802",
          lime: "#C8F802",
          android: "#3DDC84",
          cyan: "#00F0FF",
          violet: "#7C5CFF",
          gold: "#F5C26B",
          amber: "#FFB800",
          danger: "#FF3366",
        },
        brand: {
          DEFAULT: "#C8F802",
          on: "#07080B",
        },
        typography: {
          primary: "var(--text)",
          secondary: "var(--text-muted)",
          muted: "var(--text-faint)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Syne", "sans-serif"],
        heading: ["var(--font-display)", "Syne", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        devanagari: ["var(--font-devanagari)", "Noto Sans Devanagari", "sans-serif"],
      },
      boxShadow: {
        cyber: "0 0 25px rgba(200, 248, 2, 0.28)",
        "cyber-lg": "0 0 45px rgba(200, 248, 2, 0.40)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
