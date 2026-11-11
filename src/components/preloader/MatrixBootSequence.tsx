"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { useWorldStore } from "@/store/useWorldStore";

interface MatrixBootSequenceProps {
  onComplete?: () => void;
}

const BOOT_LOGS = [
  "> boot vaidiktech --sovereign --mode=production",
  "> [Gradle 8.7] Task :app:checkSovereignPermissions UP-TO-DATE",
  "> [Manifest] Declaring zero android.permission.INTERNET... verified",
  "> [Keystore] Initializing Android KeyStore provider: AndroidKeyStore",
  "> [StrongBox] MasterKey.Builder(AES256_GCM).setRequestStrongBoxBacked(true)... OK",
  "> [SQLCipher 4.5.5] PRAGMA cipher_page_size = 4096; kdf_iter = 256000... encrypted",
  "> [Room SQLite] Initializing sovereign offline schemas for Girvi, JewelBill, AdvoKosh... ready",
  "> [WebGL2] Mounting continuous 3D world canvas and timeline director...",
  "> SYS:ONLINE. Welcome to Vaidik Gandhi's Sovereign Engineering Lab.",
];

export const MatrixBootSequence: React.FC<MatrixBootSequenceProps> = ({ onComplete }) => {
  const { setBooted } = useWorldStore();
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Check if returning visitor in same session
    const hasBooted = typeof window !== "undefined" ? sessionStorage.getItem("vaidik_booted") : null;
    const isFastBoot = Boolean(hasBooted);

    proceduralAudio.init();
    proceduralAudio.bootHum();

    const finish = () => {
      proceduralAudio.shockwave();
      setComplete(true);
      setBooted(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("vaidik_booted", "true");
      }
      if (onComplete) {
        setTimeout(onComplete, 300);
      }
    };

    if (isFastBoot) {
      // 600ms fast variant for returning visitors
      const t = setTimeout(finish, 600);
      return () => clearTimeout(t);
    }

    // Full 2.4s cinematic sequence for first load
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    const logInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          proceduralAudio.tick();
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 240);

    const finishTimeout = setTimeout(finish, 2400);

    const handleKeyDown = () => finish();
    window.addEventListener("keydown", handleKeyDown, { once: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(progressInterval);
      clearInterval(logInterval);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => {
            proceduralAudio.shockwave();
            setComplete(true);
            setBooted(true);
            if (onComplete) setTimeout(onComplete, 250);
          }}
          className="fixed inset-0 z-[150] flex flex-col justify-between p-6 sm:p-12 bg-[#05060A] text-typography-primary font-mono select-none cursor-pointer"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-typography-muted gap-2">
            <span className="text-accent-android font-bold truncate">VAIDIKTECH BOOTLOADER // SOVEREIGN</span>
            <span className="text-accent-cyan flex-shrink-0">BHOPAL, IN</span>
          </div>

          {/* Central Terminal Output */}
          <div className="max-w-xl mx-auto w-full space-y-2 my-auto">
            <div className="text-sm sm:text-base font-bold text-accent-android mb-4">
              &gt; exec boot --sovereign
            </div>

            <div className="space-y-1.5 min-h-[160px]">
              {BOOT_LOGS.slice(0, currentLine + 1).map((log, i) => (
                <div
                  key={i}
                  className={`text-xs sm:text-sm ${
                    i === currentLine
                      ? "text-typography-primary font-semibold"
                      : "text-typography-muted"
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

          {/* Footer Note */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-typography-muted gap-2">
            <span className="hidden sm:inline">Press [`] for CLI Terminal</span>
            <span className="animate-pulse text-center w-full sm:w-auto">Tap anywhere to fast-forward ▶</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
