"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useWorldStore } from "@/store/useWorldStore";

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [domHovered, setDomHovered] = useState(false);
  const [domCursorText, setDomCursorText] = useState("");

  const { cursorText: worldCursorText } = useWorldStore();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 380 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const activeText = worldCursorText || domCursorText;
  const isHovered = domHovered || Boolean(worldCursorText);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-interactive='true'], [data-cursor]");
      if (interactive) {
        setDomHovered(true);
        const text = interactive.getAttribute("data-cursor");
        setDomCursorText(text || "");
      } else {
        setDomHovered(false);
        setDomCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Outer trailing ring / morphing badge */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: activeText ? 2.6 : isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(61, 220, 132, 0.16)" : "rgba(61, 220, 132, 0.04)",
          borderColor: isHovered ? "rgba(61, 220, 132, 0.9)" : "rgba(61, 220, 132, 0.35)",
        }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="w-10 h-10 rounded-full border border-accent-android/40 backdrop-blur-[2px] flex items-center justify-center shadow-[0_0_15px_rgba(61,220,132,0.2)]"
      >
        {activeText && (
          <span className="text-[8px] font-mono tracking-widest text-accent-android uppercase font-black px-1">
            {activeText}
          </span>
        )}
      </motion.div>

      {/* Center sharp laser dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.3 : 1,
          opacity: isHovered ? 0.25 : 1,
        }}
        className="w-1.5 h-1.5 rounded-full bg-accent-android shadow-[0_0_10px_#3DDC84]"
      />
    </div>
  );
};
