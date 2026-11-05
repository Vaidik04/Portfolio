"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sounds } from "@/lib/sound";

interface MatrixBootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "> initializing vaidik.dev kernel...",
  "> loading sovereign runtime [Android 14+ / NDK]... ok",
  "> compiling kotlin 2.0 & jetpack compose AST... 100%",
  "> binding sqlcipher 256-bit AES keystore vault... verified",
  "> establishing air-gapped nearby P2P cluster... synced",
  "> mounting 3D WebGL continuous universe...",
  "> SYS:ONLINE. Welcome.",
];

export const MatrixBootSequence: React.FC<MatrixBootSequenceProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    sounds.init();
    sounds.bootHum();

    const skipBoot = () => {
      sounds.shockwave();
      setComplete(true);
      setTimeout(onComplete, 250);
    };

    const handleKeyDown = () => {
      skipBoot();
    };
    window.addEventListener("keydown", handleKeyDown, { once: true });

    // Progress counter 0 - 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Terminal log line stepper
    const logInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          sounds.tick();
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 280);

    // Shockwave pulse & completion after 2.2s
    const timeout = setTimeout(() => {
      skipBoot();
    }, 2400);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(progressInterval);
      clearInterval(logInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => {
            sounds.shockwave();
            setComplete(true);
            setTimeout(onComplete, 250);
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-[#05060A] text-typography-primary font-mono select-none cursor-pointer"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-typography-muted">
            <span className="text-accent-android font-bold">VAIDIKTECH BOOTLOADER v3.4</span>
            <span className="text-accent-cyan">STATION // BHOPAL, IN</span>
          </div>

          {/* Center Matrix Logs */}
          <div className="max-w-xl mx-auto w-full space-y-2 my-auto">
            <div className="text-sm sm:text-base font-bold text-accent-android mb-4">
              &gt; exec boot --production
            </div>

            <div className="space-y-1.5 min-h-[160px]">
              {BOOT_LOGS.slice(0, currentLine + 1).map((log, i) => (
                <div
                  key={i}
                  className={`text-xs sm:text-sm ${
                    i === currentLine ? "text-typography-primary font-semibold" : "text-typography-muted"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Glowing Singularity Progress Bar */}
            <div className="pt-6">
              <div className="flex items-center justify-between text-xs text-typography-muted mb-2">
                <span>CONVERGENCE SINGULARITY</span>
                <span className="text-accent-android font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-android via-accent-cyan to-accent-violet transition-all duration-75 rounded-full shadow-[0_0_12px_#3DDC84]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="flex items-center justify-between text-[11px] text-typography-muted">
            <span>Press [`] for CLI Terminal</span>
            <span className="animate-pulse">Press any key to fast-forward</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

