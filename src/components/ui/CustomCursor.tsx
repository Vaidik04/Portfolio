"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

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
        setHovered(true);
        const text = interactive.getAttribute("data-cursor");
        setCursorText(text || "");
      } else {
        setHovered(false);
        setCursorText("");
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
      {/* Outer trailing ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 2.2 : 1,
          backgroundColor: hovered ? "rgba(61, 220, 132, 0.12)" : "rgba(61, 220, 132, 0.04)",
          borderColor: hovered ? "rgba(61, 220, 132, 0.8)" : "rgba(61, 220, 132, 0.4)",
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="w-10 h-10 rounded-full border border-accent-android/40 backdrop-blur-[1px] flex items-center justify-center"
      >
        {cursorText && (
          <span className="text-[9px] font-mono tracking-widest text-accent-android uppercase font-bold">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center sharp dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 0.4 : 1,
          opacity: hovered ? 0.3 : 1,
        }}
        className="w-1.5 h-1.5 rounded-full bg-accent-android shadow-[0_0_10px_#3DDC84]"
      />
    </div>
  );
};

