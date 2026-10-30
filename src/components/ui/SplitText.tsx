"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  type?: "words" | "chars";
  delay?: number;
  scrambleOnHover?: boolean;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  type = "words",
  delay = 0,
  scrambleOnHover = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const handleHover = () => {
    if (!scrambleOnHover) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (text[index] === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 28);
  };

  if (type === "words") {
    const words = text.split(" ");
    return (
      <span className={`inline-block ${className}`} onMouseEnter={handleHover}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              initial={{ y: "105%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.65,
                delay: delay + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  // Character split
  return (
    <span className={`inline-block ${className}`} onMouseEnter={handleHover}>
      {displayText.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.02,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

