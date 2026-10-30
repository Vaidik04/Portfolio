"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "> initializing system kernel v2.6.4...",
  "> loading Kotlin 2.0 & Jetpack Compose runtime...",
  "> mounting Room SQLite & 256-bit SQLCipher...",
  "> linking Google Nearby P2P_CLUSTER...",
  "> calibrating MediaPipe vision GPU delegate...",
  "> launching VaidikTech engine: READY",
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 850);
          }, 350);
          return 100;
        }
        // Organic acceleration
        const increment = Math.floor(Math.random() * 6) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Step through logs according to progress
    const nextIndex = Math.min(
      Math.floor((progress / 100) * BOOT_LOGS.length),
      BOOT_LOGS.length - 1
    );
    setLogIndex(nextIndex);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#05060A] text-typography-primary px-6"
        >
          {/* Subtle background grid & noise */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(61,220,132,0.12),transparent)] pointer-events-none" />

          <div className="w-full max-w-lg z-10 font-mono flex flex-col gap-6">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-surface-border pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent-android/80 inline-block" />
                <span className="text-xs text-typography-muted ml-2">vaidik-terminal::boot</span>
              </div>
              <span className="text-xs text-accent-android font-bold">
                {String(progress).padStart(3, "0")}%
              </span>
            </div>

            {/* Terminal Log Stream */}
            <div className="h-28 flex flex-col justify-end overflow-hidden text-xs space-y-1.5">
              {BOOT_LOGS.slice(0, logIndex + 1).map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center gap-2 ${
                    i === logIndex ? "text-accent-android font-medium" : "text-typography-muted"
                  }`}
                >
                  <span>{log}</span>
                  {i === logIndex && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1.5 h-3.5 bg-accent-android"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Glowing Loading Bar */}
            <div className="relative w-full h-[2px] bg-surface-border rounded-full overflow-hidden">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-android shadow-[0_0_12px_#3DDC84]"
              />
            </div>

            {/* Meta Signature */}
            <div className="flex items-center justify-between text-[11px] text-typography-muted tracking-wider">
              <span>VAIDIK GANDHI · ANDROID ENGINEER</span>
              <span>EST. 2023 · VAIDIKTECH</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
