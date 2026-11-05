"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

const CHARS = "ABCDEF0123456789!<>-_\\/[]{}*^?#";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  trigger?: boolean;
  onComplete?: () => void;
  as?: React.ElementType;
}

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = "",
  speed = 30,
  trigger = true,
  onComplete,
  as: Component = "span",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = text.length;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    let lastTime = performance.now();

    const update = (now: number) => {
      if (now - lastTime >= speed) {
        lastTime = now;

        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration += 1 / 2;
      }

      if (iteration <= maxIterations) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
        if (onComplete) onComplete();
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [text, speed, onComplete]);

  useEffect(() => {
    if (trigger) {
      scramble();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, scramble]);

  return <Component className={className}>{displayText}</Component>;
};

