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
          className="fixed top-0 inset-x-0 z-[100] bg-[#121520]/95 border-b border-[#F5C26B]/40 px-4 py-2.5 backdrop-blur-xl shadow-2xl flex items-center justify-center text-xs font-mono"
        >
          <div className="flex items-center gap-2.5 text-[#F5C26B]">
            <WifiOff className="w-4 h-4 text-[#F5C26B] animate-pulse" />
            <span className="font-bold tracking-wide">
              OFFLINE SENTINEL: DISCONNECTED FROM INTERNET // 100% OPERATIONAL
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
