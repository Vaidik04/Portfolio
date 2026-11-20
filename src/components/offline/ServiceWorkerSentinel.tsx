"use client";

import React, { useEffect } from "react";
import { useWorldStore } from "@/store/useWorldStore";

export const ServiceWorkerSentinel: React.FC = () => {
  const { setIsOffline, setDisplayMode } = useWorldStore();

  useEffect(() => {
    // 0. Sync Saved Display Mode Preference (Client-Only)
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("vaidik_display_mode");
        if (saved === "fast" || saved === "experience") {
          setDisplayMode(saved);
        } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayMode("fast");
        }
      } catch {}
    }

    // 1. Register Offline Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          // Service worker active and precached
        })
        .catch(() => {
          // Safe fallback if serviceWorker is disabled
        });
    }

    // 2. Real Hardware Network Connectivity Listener
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    if (typeof window !== "undefined") {
      setIsOffline(!navigator.onLine);
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      }
    };
  }, [setIsOffline]);

  return null;
};
