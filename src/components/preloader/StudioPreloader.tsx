"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StudioPreloaderProps {
  onComplete: () => void;
}

export const StudioPreloader: React.FC<StudioPreloaderProps> = ({ onComplete }) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const finish = () => {
      setComplete(true);
      setTimeout(onComplete, 450);
    };

    // Fast, quiet intro duration (1.1s)
    const timer = setTimeout(finish, 1100);

    // Instant fast-forward on any user interaction
    const handleKey = () => finish();
    window.addEventListener("keydown", handleKey, { once: true });
    window.addEventListener("click", handleKey, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("click", handleKey);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0C0E] select-none cursor-pointer"
        >
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <span className="text-[11px] font-mono tracking-widest uppercase text-typography-muted">
              VaidikTech · Mobile Systems Lab
            </span>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl font-heading font-bold text-typography-primary tracking-tight"
              >
                Vaidik Gandhi
              </motion.h1>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-[1.5px] bg-brand origin-center rounded-full mt-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
