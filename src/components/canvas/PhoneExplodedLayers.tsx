"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";
import { useWorldStore } from "@/store/useWorldStore";
import { sounds } from "@/lib/sound";

const APP_ORDER: ("girvi" | "jewelbill" | "advokosh")[] = ["girvi", "jewelbill", "advokosh"];

interface PhoneExplodedLayersProps {
  onLayerHover?: (layerId: number | null) => void;
  activeLayerOverride?: number | null;
}

export const PhoneExplodedLayers: React.FC<PhoneExplodedLayersProps> = ({
  onLayerHover,
  activeLayerOverride = null,
}) => {
  const {
    scrollProgress,
    activeAppId,
    setActiveAppId,
    manualExploded,
    focusedLayer,
    setFocusedLayer,
  } = useWorldStore();

  const groupRef = useRef<THREE.Group>(null);
  const dragGroupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const [screenTexture, setScreenTexture] = useState<THREE.CanvasTexture | null>(null);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  // Auto-carousel state (cycles every 5 seconds unless user interacted recently)
  const lastUserInteraction = useRef<number>(Date.now());
  const autoCycleTimer = useRef<NodeJS.Timeout | null>(null);

  // Drag rotation state for interactive 360 inspection
  const isDragging = useRef(false);
  const prevPointer = useRef({ x: 0, y: 0 });
  const dragRot = useRef({ x: 0, y: 0 });

  // References for each layer group to animate their local Z positions
  const layer1Ref = useRef<THREE.Group>(null); // Compose UI + Screen
  const layer2Ref = useRef<THREE.Group>(null); // ViewModel & StateFlow
  const layer3Ref = useRef<THREE.Group>(null); // Room SQLite
  const layer4Ref = useRef<THREE.Group>(null); // SQLCipher AES-256
  const layer5Ref = useRef<THREE.Group>(null); // Keystore Hardware Enclave

  // Dimensions
  const phoneWidth = 2.35;
  const phoneHeight = 4.85;
  const slabDepth = 0.07;
  const cornerRadius = 0.26;

  // Auto-cycle through apps every 5.5s if user hasn't manually clicked recently
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceUser = Date.now() - lastUserInteraction.current;
      // If no interaction in last 7 seconds, auto-cycle
      if (timeSinceUser > 7000 && !manualExploded) {
        const currentIndex = APP_ORDER.indexOf(activeAppId);
        const nextIndex = (currentIndex + 1) % APP_ORDER.length;
        setActiveAppId(APP_ORDER[nextIndex]);
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [activeAppId, manualExploded, setActiveAppId]);

  // Render texture based on activeAppId
  const renderScreen = useCallback((appId: string) => {
    if (typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 2240;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Deep Midnight Charcoal Background
    ctx.fillStyle = "#0C0E14";
    ctx.fillRect(0, 0, 1080, 2240);

    const grad = ctx.createLinearGradient(0, 0, 0, 2240);
    grad.addColorStop(0, "#131722");
    grad.addColorStop(0.5, "#0A0C11");
    grad.addColorStop(1, "#07080D");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 2240);

    // 2. Stories / App Carousel Segment Indicators at top
    const segmentWidth = 280;
    const startX = 80;
    const gap = 40;
    const apps = ["girvi", "jewelbill", "advokosh"];

    apps.forEach((app, i) => {
      const x = startX + i * (segmentWidth + gap);
      const isCurrent = app === appId;

      ctx.fillStyle = isCurrent ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.18)";
      ctx.beginPath();
      ctx.roundRect(x, 40, segmentWidth, 8, 4);
      ctx.fill();

      // App Name under segment indicator
      ctx.fillStyle = isCurrent ? "#EDEFF5" : "#5E667C";
      ctx.font = isCurrent ? "bold 20px monospace" : "18px monospace";
      const label = app === "girvi" ? "1. GIRVI OS" : app === "jewelbill" ? "2. JEWELBILL" : "3. ADVOKOSH";
      ctx.fillText(label, x + 10, 68);
    });

    // 3. Status Bar
    ctx.fillStyle = "#EDEFF5";
    ctx.font = "bold 36px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("09:41", 80, 125);

    ctx.font = "bold 28px monospace";
    ctx.fillStyle = "#9DA4B8";
    ctx.fillText("5G · 100%", 850, 125);

    if (appId === "jewelbill") {
      // JEWELBILL APP UI (JEWELLERY POS & INVOICING)
      ctx.fillStyle = "#D97706";
      ctx.beginPath();
      ctx.roundRect(80, 160, 60, 60, 16);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("J", 98, 204);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px sans-serif";
      ctx.fillText("JewelBill POS", 160, 204);

      // Mode Pill
      ctx.fillStyle = "rgba(217, 119, 6, 0.15)";
      ctx.strokeStyle = "rgba(217, 119, 6, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(80, 235, 430, 48, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#F59E0B";
      ctx.font = "bold 24px monospace";
      ctx.fillText("● OFFLINE COUNTER POS", 104, 268);

      // Card 1: Active Jewellery Invoice
      ctx.fillStyle = "#161922";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, 310, 920, 495, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#F59E0B";
      ctx.font = "bold 28px monospace";
      ctx.fillText("TAX INVOICE #JB-2026-89", 120, 375);

      // Verified pill
      ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
      ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
      ctx.beginPath();
      ctx.roundRect(740, 340, 220, 44, 22);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#FBBF24";
      ctx.font = "bold 22px monospace";
      ctx.fillText("COUNTER READY", 760, 370);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 46px sans-serif";
      ctx.fillText("Sunita Verma", 120, 445);

      ctx.fillStyle = "#7D8498";
      ctx.font = "26px sans-serif";
      ctx.fillText("Customer Tax ID: Verified · Counter #02", 120, 490);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 82px sans-serif";
      ctx.fillText("₹2,84,500", 120, 595);

      ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
      ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
      ctx.beginPath();
      ctx.roundRect(120, 630, 480, 44, 22);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#FBBF24";
      ctx.font = "bold 24px monospace";
      ctx.fillText("28,450,000 Long-Paise (0-Drift)", 140, 660);

      ctx.fillStyle = "#9DA4B8";
      ctx.font = "28px monospace";
      ctx.fillText("Item: 22K Bridal Necklace (48.20g Net)", 120, 725);
      ctx.fillText("Tax: CGST (1.5%) + SGST (1.5%) Exact Match", 120, 768);

      // Card 2: Thermal Printing & SQLCipher
      ctx.fillStyle = "#11141E";
      ctx.strokeStyle = "rgba(217, 119, 6, 0.35)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, 835, 920, 385, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#F59E0B";
      ctx.font = "bold 34px sans-serif";
      ctx.fillText("Direct Hardware Bridge", 120, 910);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "30px sans-serif";
      ctx.fillText("80mm ESC/POS Bluetooth Thermal Printing", 120, 975);

      ctx.fillStyle = "#8F9BB3";
      ctx.font = "26px monospace";
      ctx.fillText("Driver: Raw binary bitmap stream; zero print spoolers", 120, 1035);
      ctx.fillText("Storage: Encrypted Room SQLite with daily hash-tree export", 120, 1085);
      ctx.fillText("Offline Uptime: 100% Counter Uptime in low-signal bazaars", 120, 1135);

      // Card 3: Line Items
      ctx.fillStyle = "#141724";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.beginPath();
      ctx.roundRect(80, 1250, 920, 520, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("Counter Line Items", 120, 1325);

      ctx.fillStyle = "#8F9BB3";
      ctx.font = "28px monospace";
      ctx.fillText("1. 22K Gold Base: ₹2,64,200 (Rate: ₹5,480/g)", 120, 1405);
      ctx.fillText("2. Making Charges (₹250/g): ₹12,050", 120, 1480);
      ctx.fillText("3. GST @ 3.00%: ₹8,250", 120, 1555);
      ctx.fillText("4. Rounding Adjustment: ₹0.00 (Zero Drift)", 120, 1630);
      ctx.fillText("5. ESC/POS Receipt: Printed in 240ms", 120, 1705);
    } else if (appId === "advokosh") {
      // ADVOKOSH APP UI (ADVOCATE CASE DIARY)
      ctx.fillStyle = "#6366F1";
      ctx.beginPath();
      ctx.roundRect(80, 160, 60, 60, 16);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("§", 98, 204);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px sans-serif";
      ctx.fillText("AdvoKosh Case Diary", 160, 204);

      // Mode Pill
      ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
      ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(80, 235, 420, 48, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#818CF8";
      ctx.font = "bold 24px monospace";
      ctx.fillText("● ENCRYPTED LEGAL VAULT", 104, 268);

      // Card 1: Active Case Hearing
      ctx.fillStyle = "#151827";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, 310, 920, 495, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#818CF8";
      ctx.font = "bold 28px monospace";
      ctx.fillText("COURT 4 · ITEM #12", 120, 375);

      // Alert badge
      ctx.fillStyle = "rgba(239, 68, 68, 0.15)";
      ctx.strokeStyle = "rgba(239, 68, 68, 0.4)";
      ctx.beginPath();
      ctx.roundRect(720, 340, 240, 44, 22);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#F87171";
      ctx.font = "bold 22px monospace";
      ctx.fillText("HEARING 10:30 AM", 740, 370);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 46px sans-serif";
      ctx.fillText("State vs. Sharma & Ors.", 120, 445);

      ctx.fillStyle = "#7D8498";
      ctx.font = "26px sans-serif";
      ctx.fillText("Writ Petition #4821/2025 · Hon'ble High Court", 120, 490);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 72px sans-serif";
      ctx.fillText("Final Arguments", 120, 585);

      ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
      ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
      ctx.beginPath();
      ctx.roundRect(120, 630, 480, 44, 22);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#A5B4FC";
      ctx.font = "bold 24px monospace";
      ctx.fillText("Limitation: 14 Days Remaining", 140, 660);

      ctx.fillStyle = "#9DA4B8";
      ctx.font = "28px monospace";
      ctx.fillText("Section: 482 Cr.P.C · Quashing Petition", 120, 725);
      ctx.fillText("Witness: 3 Examined · Cross Scheduled", 120, 768);

      // Card 2: Security & Client Privilege
      ctx.fillStyle = "#11141E";
      ctx.strokeStyle = "rgba(99, 102, 241, 0.35)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, 835, 920, 385, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#818CF8";
      ctx.font = "bold 34px sans-serif";
      ctx.fillText("Client-Advocate Privilege", 120, 910);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "30px sans-serif";
      ctx.fillText("AES-256 GCM Hardware-Backed Encryption", 120, 975);

      ctx.fillStyle = "#8F9BB3";
      ctx.font = "26px monospace";
      ctx.fillText("Confidential briefs and evidence encrypted locally", 120, 1035);
      ctx.fillText("Zero cloud scraping; no external AI telemetry", 120, 1085);
      ctx.fillText("Instant biometric release upon court entrance", 120, 1135);

      // Card 3: Cause List
      ctx.fillStyle = "#141724";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.beginPath();
      ctx.roundRect(80, 1250, 920, 520, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("Today's Cause List", 120, 1325);

      ctx.fillStyle = "#8F9BB3";
      ctx.font = "28px monospace";
      ctx.fillText("1. Court 4 - State vs Sharma (10:30 AM)", 120, 1405);
      ctx.fillText("2. Court 2 - Verma vs Verma (11:45 AM)", 120, 1480);
      ctx.fillText("3. Chamber - Client Briefing (02:00 PM)", 120, 1555);
      ctx.fillText("4. Evidence Review - Forensic Report (04:30 PM)", 120, 1630);
      ctx.fillText("5. All Records Synced to Offline Encrypted Ledger", 120, 1705);
    } else {
      // GIRVI APP UI (GOLD LOAN & PAWN LEDGER)
      ctx.fillStyle = "#2B5BFF";
      ctx.beginPath();
      ctx.roundRect(80, 160, 60, 60, 16);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("₹", 98, 204);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px sans-serif";
      ctx.fillText("Girvi Pawn Ledger", 160, 204);

      // Mode Pill
      ctx.fillStyle = "rgba(43, 91, 255, 0.15)";
      ctx.strokeStyle = "rgba(43, 91, 255, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(80, 235, 410, 48, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#4D7EFF";
      ctx.font = "bold 24px monospace";
      ctx.fillText("● OFFLINE SOVEREIGN CORE", 104, 268);

      // Card 1: Active Gold Pledge (Fictional Sample Data)
      ctx.fillStyle = "#141724";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, 310, 920, 495, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#8F9BB3";
      ctx.font = "bold 28px monospace";
      ctx.fillText("TOKEN #GV-1048", 120, 375);

      ctx.fillStyle = "rgba(34, 197, 94, 0.15)";
      ctx.strokeStyle = "rgba(34, 197, 94, 0.4)";
      ctx.beginPath();
      ctx.roundRect(740, 340, 220, 44, 22);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#4ADE80";
      ctx.font = "bold 22px monospace";
      ctx.fillText("VERIFIED PLEDGE", 758, 370);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 46px sans-serif";
      ctx.fillText("Ramesh Kumar", 120, 445);

      ctx.fillStyle = "#7D8498";
      ctx.font = "26px sans-serif";
      ctx.fillText("Fictional Customer Record · Tokenized Vault #04", 120, 490);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 82px sans-serif";
      ctx.fillText("₹1,45,000", 120, 595);

      ctx.fillStyle = "rgba(217, 92, 54, 0.15)";
      ctx.strokeStyle = "rgba(217, 92, 54, 0.4)";
      ctx.beginPath();
      ctx.roundRect(120, 630, 480, 44, 22);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#FF7A50";
      ctx.font = "bold 24px monospace";
      ctx.fillText("14,500,000 Long-Paise (0-Drift)", 140, 660);

      ctx.fillStyle = "#9DA4B8";
      ctx.font = "28px monospace";
      ctx.fillText("Item: 22K Gold Bangles · Net: 36.80g (Gross: 42.50g)", 120, 725);
      ctx.fillText("Rate: 1.50% Compound / Mo · Limitations Safe", 120, 768);

      // Card 2: Cryptographic Boundary
      ctx.fillStyle = "#11141E";
      ctx.strokeStyle = "rgba(43, 91, 255, 0.35)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, 835, 920, 385, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#4D7EFF";
      ctx.font = "bold 34px sans-serif";
      ctx.fillText("Cryptographic Boundary", 120, 910);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "30px sans-serif";
      ctx.fillText("SQLCipher 256-bit AES Local Database", 120, 975);

      ctx.fillStyle = "#8F9BB3";
      ctx.font = "26px monospace";
      ctx.fillText("Key: Android Keystore Hardware AES-256-GCM MasterKey", 120, 1035);
      ctx.fillText("PRAGMA cipher_page_size = 4096; Zero Cloud Telemetry", 120, 1085);
      ctx.fillText("Strict Offline Storage · Biometric Master Release", 120, 1135);

      // Card 3: Recent Activity Ledger
      ctx.fillStyle = "#141724";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.beginPath();
      ctx.roundRect(80, 1250, 920, 520, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("Physical Verification Audit", 120, 1325);

      ctx.fillStyle = "#8F9BB3";
      ctx.font = "28px monospace";
      ctx.fillText("1. Principal Disbursed: ₹1,45,000 (Cash Recorded)", 120, 1405);
      ctx.fillText("2. Physical Evidence: CameraX Gold Photo ID #482", 120, 1480);
      ctx.fillText("3. Thermal Receipt: 80mm ESC/POS Generated", 120, 1555);
      ctx.fillText("4. Backup: AES-GCM Encrypted JSON to SD Card", 120, 1630);
      ctx.fillText("5. Court Limitation Date: 36 Months Calculated", 120, 1705);
    }

    // Bottom Navigation Bar
    ctx.fillStyle = "#1A1E2C";
    ctx.beginPath();
    ctx.roundRect(80, 1830, 920, 130, 36);
    ctx.fill();

    ctx.fillStyle = appId === "jewelbill" ? "#F59E0B" : appId === "advokosh" ? "#818CF8" : "#2B5BFF";
    ctx.font = "bold 32px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Sovereign Trade Ledger Active", 540, 1910);
    ctx.textAlign = "left";

    // Dynamic Island / Home Indicator
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.roundRect(390, 2170, 300, 10, 5);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    setScreenTexture(texture);
  }, []);

  useEffect(() => {
    renderScreen(activeAppId);
  }, [activeAppId, renderScreen]);

  // Physically-based materials
  const chassisMaterial = React.useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#181B22",
      metalness: 0.9,
      roughness: 0.22,
    });
  }, []);

  const glassMaterial = React.useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: "#FFFFFF",
      metalness: 0.05,
      roughness: 0.05,
      transmission: 0.92,
      thickness: 0.2,
      transparent: true,
      opacity: 0.95,
    });
  }, []);

  const stateLayerMaterial = React.useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#151924",
      metalness: 0.65,
      roughness: 0.35,
    });
  }, []);

  const roomDbMaterial = React.useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#10131A",
      metalness: 0.5,
      roughness: 0.45,
    });
  }, []);

  const cipherMaterial = React.useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#9A4020", // Brushed Copper / Security Ochre
      metalness: 0.85,
      roughness: 0.28,
    });
  }, []);

  const keystoreMaterial = React.useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#0B0D12",
      metalness: 0.95,
      roughness: 0.15,
    });
  }, []);

  // Frame loop for camera, scroll position, and layer separation
  useFrame((state, delta) => {
    if (!groupRef.current || !dragGroupRef.current) return;
    const p = scrollProgress;

    // Calculate separation factor (0 = assembled, 1 = fully exploded)
    let separation = 0;
    if (manualExploded) {
      separation = 1.0;
    } else if (p >= 0.16 && p <= 0.48) {
      separation =
        THREE.MathUtils.smoothstep(p, 0.16, 0.32) *
        (1 - THREE.MathUtils.smoothstep(p, 0.38, 0.48));
    }

    const isMobile = viewport.width < 7.5;
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetRotZ = 0;
    let targetScale = isMobile ? 0.62 : 0.82;

    if (manualExploded) {
      targetX = isMobile ? 0 : 0.4;
      targetY = 0.1;
      targetZ = 0.5;
      targetRotX = 0.35;
      targetRotY = -0.65;
      targetRotZ = 0.15;
      targetScale = isMobile ? 0.55 : 0.78;
    } else if (p < 0.18) {
      // Phase 1: Hero — Assembled phone floating with subtle perspective
      targetX = isMobile ? 0 : 2.15;
      targetY = isMobile ? -1.8 : 0.05;
      targetZ = 0;
      targetRotX = 0.08;
      targetRotY = -0.32;
      targetRotZ = 0.04;
    } else if (p < 0.50) {
      // Phase 2: Architecture — Axonometric exploded layers view
      targetX = isMobile ? 0 : -1.35;
      targetY = 0.2;
      targetZ = 0.4;
      targetRotX = 0.38;
      targetRotY = -0.72;
      targetRotZ = 0.22;
      targetScale = isMobile ? 0.58 : 0.8;
    } else if (p < 0.75) {
      // Phase 3: Work Showcase — Reassembled phone presenting flagship apps
      targetX = isMobile ? 0 : 1.95;
      targetY = -0.1;
      targetZ = 0.2;
      targetRotX = 0.05;
      targetRotY = -0.18;
      targetRotZ = 0;
      targetScale = isMobile ? 0.65 : 0.88;
    } else {
      // Phase 4: Rest of page — Gently dock in background
      targetX = 0;
      targetY = 0.5;
      targetZ = -3.0;
      targetRotX = 0.2;
      targetRotY = 0.1;
      targetRotZ = 0;
      targetScale = 0.55;
    }

    // Inertial drag damping
    if (!isDragging.current) {
      dragRot.current.x = THREE.MathUtils.damp(dragRot.current.x, 0, 3, delta);
      dragRot.current.y = THREE.MathUtils.damp(dragRot.current.y, 0, 3, delta);
    }

    // Pointer mouse tilt + gentle idle breathing float
    const pointer = state.pointer;
    const parallaxX = pointer.x * 0.15;
    const parallaxY = pointer.y * 0.1;
    const idleFloat = Math.sin(state.clock.elapsedTime * 1.5) * 0.035;

    // Smooth dampening towards target transforms
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetX + parallaxX,
      4,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY + parallaxY + idleFloat,
      4,
      delta
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetZ,
      4,
      delta
    );

    // Combine base target rotation with user manual drag rotation
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotX - parallaxY * 0.1 + dragRot.current.y,
      4,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotY + parallaxX * 0.15 + dragRot.current.x,
      4,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      targetRotZ,
      4,
      delta
    );

    groupRef.current.scale.setScalar(
      THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 4, delta)
    );

    // Animate the 5 layer separations along Z
    const maxSpread = 1.45;
    const z1 = separation * maxSpread * 1.0;
    const z2 = separation * maxSpread * 0.5;
    const z3 = 0;
    const z4 = -separation * maxSpread * 0.5;
    const z5 = -separation * maxSpread * 1.0;

    if (layer1Ref.current)
      layer1Ref.current.position.z = THREE.MathUtils.damp(
        layer1Ref.current.position.z,
        z1,
        6,
        delta
      );
    if (layer2Ref.current)
      layer2Ref.current.position.z = THREE.MathUtils.damp(
        layer2Ref.current.position.z,
        z2,
        6,
        delta
      );
    if (layer3Ref.current)
      layer3Ref.current.position.z = THREE.MathUtils.damp(
        layer3Ref.current.position.z,
        z3,
        6,
        delta
      );
    if (layer4Ref.current)
      layer4Ref.current.position.z = THREE.MathUtils.damp(
        layer4Ref.current.position.z,
        z4,
        6,
        delta
      );
    if (layer5Ref.current)
      layer5Ref.current.position.z = THREE.MathUtils.damp(
        layer5Ref.current.position.z,
        z5,
        6,
        delta
      );
  });

  const handlePointerDown = (e: any) => {
    isDragging.current = true;
    lastUserInteraction.current = Date.now();
    prevPointer.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: any) => {
    if (!isDragging.current) return;
    const dx = e.clientX - prevPointer.current.x;
    const dy = e.clientY - prevPointer.current.y;
    dragRot.current.x += dx * 0.006;
    dragRot.current.y += dy * 0.006;
    prevPointer.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerEnter = (id: number) => {
    setHoveredLayer(id);
    if (onLayerHover) onLayerHover(id);
  };

  const handlePointerLeave = () => {
    setHoveredLayer(null);
    if (onLayerHover) onLayerHover(null);
  };

  const isLayerActive = (id: number) => {
    return activeLayerOverride === id || hoveredLayer === id || focusedLayer === id;
  };

  const isExplodedNow = manualExploded || (scrollProgress >= 0.16 && scrollProgress <= 0.48);

  return (
    <group
      ref={groupRef}
      position={[2.15, 0.05, 0]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <group ref={dragGroupRef}>
        {/* Phone Outer Chassis Metal Rim (Frame) behind display */}
        <mesh material={chassisMaterial} position={[0, 0, -0.06]}>
          <boxGeometry args={[phoneWidth + 0.06, phoneHeight + 0.06, 0.16]} />
        </mesh>

        {/* Camera bump on back of phone */}
        <mesh material={chassisMaterial} position={[-0.6, 1.6, -0.16]}>
          <boxGeometry args={[0.8, 1.0, 0.06]} />
        </mesh>
        <mesh position={[-0.6, 1.75, -0.2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.05, 24]} />
          <meshStandardMaterial color="#0A0C10" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.6, 1.45, -0.2]}>
          <cylinderGeometry args={[0.12, 0.12, 0.05, 24]} />
          <meshStandardMaterial color="#0A0C10" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Layer 1: Jetpack Compose Presentation Slab & Display Face */}
        <group
          ref={layer1Ref}
          onPointerOver={() => handlePointerEnter(1)}
          onPointerOut={handlePointerLeave}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(1);
          }}
        >
          <RoundedBox
            args={[phoneWidth, phoneHeight, slabDepth]}
            radius={cornerRadius}
            smoothness={6}
            material={isLayerActive(1) ? chassisMaterial : glassMaterial}
            position={[0, 0, 0.04]}
          />

          {/* Screen Display Face */}
          {screenTexture ? (
            <mesh position={[0, 0, 0.076]}>
              <planeGeometry args={[phoneWidth - 0.12, phoneHeight - 0.16]} />
              <meshBasicMaterial map={screenTexture} toneMapped={false} />
            </mesh>
          ) : (
            <mesh position={[0, 0, 0.076]}>
              <planeGeometry args={[phoneWidth - 0.12, phoneHeight - 0.16]} />
              <meshBasicMaterial color="#11141C" />
            </mesh>
          )}

          {/* Punch Hole Camera at Top */}
          <mesh position={[0, phoneHeight / 2 - 0.22, 0.078]}>
            <circleGeometry args={[0.045, 24]} />
            <meshBasicMaterial color="#000000" />
          </mesh>

          {/* 3D Callout Pin when Exploded */}
          {isExplodedNow && (
            <Html position={[phoneWidth / 2 + 0.35, 1.2, 0.1]} center distanceFactor={10}>
              <div
                onClick={() => setFocusedLayer(1)}
                className={`px-3 py-1.5 rounded-lg border backdrop-blur-md text-xs font-mono transition-all cursor-pointer whitespace-nowrap shadow-xl ${
                  isLayerActive(1)
                    ? "bg-brand text-white border-brand scale-105"
                    : "bg-[#121418]/90 text-typography-primary border-white/10 hover:border-brand/50"
                }`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span>01 · Jetpack Compose</span>
                </div>
                <div className="text-[10px] text-typography-muted">Presentation & UI</div>
              </div>
            </Html>
          )}
        </group>

        {/* Layer 2: Domain & StateFlow Slab */}
        <group
          ref={layer2Ref}
          onPointerOver={() => handlePointerEnter(2)}
          onPointerOut={handlePointerLeave}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(2);
          }}
        >
          <RoundedBox
            args={[phoneWidth * 0.96, phoneHeight * 0.96, slabDepth]}
            radius={cornerRadius * 0.8}
            smoothness={6}
            material={stateLayerMaterial}
            position={[0, 0, 0]}
          />
          <mesh position={[0, 0, slabDepth / 2 + 0.002]}>
            <planeGeometry args={[phoneWidth * 0.85, phoneHeight * 0.85]} />
            <meshBasicMaterial
              color={isLayerActive(2) ? "#2B5BFF" : "#1F2942"}
              wireframe
            />
          </mesh>

          {isExplodedNow && (
            <Html position={[phoneWidth / 2 + 0.35, 0.5, 0]} center distanceFactor={10}>
              <div
                onClick={() => setFocusedLayer(2)}
                className={`px-3 py-1.5 rounded-lg border backdrop-blur-md text-xs font-mono transition-all cursor-pointer whitespace-nowrap shadow-xl ${
                  isLayerActive(2)
                    ? "bg-brand text-white border-brand scale-105"
                    : "bg-[#121418]/90 text-typography-primary border-white/10 hover:border-brand/50"
                }`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>02 · StateFlow & Domain</span>
                </div>
                <div className="text-[10px] text-typography-muted">Unidirectional Flow</div>
              </div>
            </Html>
          )}
        </group>

        {/* Layer 3: Room SQLite Persistence Slab */}
        <group
          ref={layer3Ref}
          onPointerOver={() => handlePointerEnter(3)}
          onPointerOut={handlePointerLeave}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(3);
          }}
        >
          <RoundedBox
            args={[phoneWidth * 0.96, phoneHeight * 0.96, slabDepth]}
            radius={cornerRadius * 0.8}
            smoothness={6}
            material={roomDbMaterial}
            position={[0, 0, -0.04]}
          />
          <mesh position={[0, 0, -0.04 + slabDepth / 2 + 0.002]}>
            <planeGeometry args={[phoneWidth * 0.85, phoneHeight * 0.85]} />
            <meshBasicMaterial
              color={isLayerActive(3) ? "#2B5BFF" : "#1B212D"}
              wireframe
            />
          </mesh>

          {isExplodedNow && (
            <Html position={[phoneWidth / 2 + 0.35, -0.2, -0.04]} center distanceFactor={10}>
              <div
                onClick={() => setFocusedLayer(3)}
                className={`px-3 py-1.5 rounded-lg border backdrop-blur-md text-xs font-mono transition-all cursor-pointer whitespace-nowrap shadow-xl ${
                  isLayerActive(3)
                    ? "bg-brand text-white border-brand scale-105"
                    : "bg-[#121418]/90 text-typography-primary border-white/10 hover:border-brand/50"
                }`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>03 · Room SQLite</span>
                </div>
                <div className="text-[10px] text-typography-muted">Sovereign Persistence</div>
              </div>
            </Html>
          )}
        </group>

        {/* Layer 4: SQLCipher AES-256 Cryptographic Barrier */}
        <group
          ref={layer4Ref}
          onPointerOver={() => handlePointerEnter(4)}
          onPointerOut={handlePointerLeave}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(4);
          }}
        >
          <RoundedBox
            args={[phoneWidth * 0.96, phoneHeight * 0.96, slabDepth]}
            radius={cornerRadius * 0.8}
            smoothness={6}
            material={cipherMaterial}
            position={[0, 0, -0.08]}
          />
          <mesh position={[0, 0, -0.08 + slabDepth / 2 + 0.004]}>
            <ringGeometry args={[0.22, 0.32, 32]} />
            <meshBasicMaterial color={isLayerActive(4) ? "#FF8A65" : "#D95C36"} />
          </mesh>

          {isExplodedNow && (
            <Html position={[phoneWidth / 2 + 0.35, -0.9, -0.08]} center distanceFactor={10}>
              <div
                onClick={() => setFocusedLayer(4)}
                className={`px-3 py-1.5 rounded-lg border backdrop-blur-md text-xs font-mono transition-all cursor-pointer whitespace-nowrap shadow-xl ${
                  isLayerActive(4)
                    ? "bg-[#D95C36] text-white border-[#D95C36] scale-105"
                    : "bg-[#121418]/90 text-typography-primary border-white/10 hover:border-[#D95C36]/60"
                }`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>04 · SQLCipher 256-AES</span>
                </div>
                <div className="text-[10px] text-typography-muted">Hardened Cryptography</div>
              </div>
            </Html>
          )}
        </group>

        {/* Layer 5: Android Keystore Hardware Enclave Slab */}
        <group
          ref={layer5Ref}
          onPointerOver={() => handlePointerEnter(5)}
          onPointerOut={handlePointerLeave}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedLayer(5);
          }}
        >
          <RoundedBox
            args={[phoneWidth * 0.92, phoneHeight * 0.92, slabDepth * 1.5]}
            radius={cornerRadius * 0.7}
            smoothness={6}
            material={keystoreMaterial}
            position={[0, 0, -0.14]}
          />
          <mesh position={[0, 0, -0.14 + (slabDepth * 1.5) / 2 + 0.005]}>
            <boxGeometry args={[1.0, 1.0, 0.02]} />
            <meshStandardMaterial
              color="#0A0B0F"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>

          {isExplodedNow && (
            <Html position={[phoneWidth / 2 + 0.35, -1.6, -0.14]} center distanceFactor={10}>
              <div
                onClick={() => setFocusedLayer(5)}
                className={`px-3 py-1.5 rounded-lg border backdrop-blur-md text-xs font-mono transition-all cursor-pointer whitespace-nowrap shadow-xl ${
                  isLayerActive(5)
                    ? "bg-purple-600 text-white border-purple-500 scale-105"
                    : "bg-[#121418]/90 text-typography-primary border-white/10 hover:border-purple-500/60"
                }`}
              >
                <div className="font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>05 · Keystore Enclave</span>
                </div>
                <div className="text-[10px] text-typography-muted">Hardware Key Vault</div>
              </div>
            </Html>
          )}
        </group>

        {/* Subtle floor contact shadow underneath the phone */}
        <mesh position={[0, -phoneHeight / 2 - 0.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[phoneWidth * 1.3, 1.4]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.35} />
        </mesh>
      </group>
    </group>
  );
};
