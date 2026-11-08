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

  const springConfig = { damping: 28, stiffness: 350 };
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

      const interactive = target.closest("a, button, [role='button'], [data-interactive='true'], [data-cursor]");
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
      {/* Outer trailing subtle ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: activeText ? 2.3 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(61, 220, 132, 0.12)" : "transparent",
          borderColor: isHovered ? "rgba(61, 220, 132, 0.85)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-8 h-8 rounded-full border flex items-center justify-center shadow-[0_0_12px_rgba(61,220,132,0.25)]"
      >
        {activeText && (
          <span className="text-[7px] font-mono tracking-wider text-[#3DDC84] uppercase font-bold px-1 whitespace-nowrap">
            {activeText}
          </span>
        )}
      </motion.div>

      {/* Center dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          opacity: isHovered ? 0.4 : 1,
        }}
        className="w-1.5 h-1.5 rounded-full bg-[#3DDC84]"
      />
    </div>
  );
};
