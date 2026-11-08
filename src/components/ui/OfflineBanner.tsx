"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWorldStore } from "@/store/useWorldStore";
import { WifiOff, ShieldCheck } from "lucide-react";

export const OfflineBanner: React.FC = () => {
  const { isOffline, setIsOffline } = useWorldStore();

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [setIsOffline]);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 inset-x-0 z-[100] bg-[#121520]/95 border-b border-[#F5C26B]/40 px-3 sm:px-4 py-2 sm:py-2.5 backdrop-blur-xl shadow-2xl flex items-center justify-center text-[10px] sm:text-xs font-mono"
        >
          <div className="flex items-center gap-2 text-[#F5C26B] overflow-hidden">
            <WifiOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5C26B] animate-pulse flex-shrink-0" />
            <span className="font-bold tracking-wide truncate">
              OFFLINE SENTINEL: AIR-GAPPED // 100% LOCAL
            </span>
            <span className="hidden md:inline text-typography-muted">
              — Zero remote cloud dependencies. All verified architecture running in local air-gapped cache.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

