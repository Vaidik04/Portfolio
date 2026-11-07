"use client";

import React, { useState } from "react";
import { Shield, Layers, Cpu, Database, Smartphone, Lock, Check } from "lucide-react";

interface LayerInfo {
  id: number;
  label: string;
  name: string;
  tech: string;
  headline: string;
  description: string;
  spec: string[];
}

const ARCHITECTURE_LAYERS: LayerInfo[] = [
  {
    id: 1,
    label: "LAYER 01",
    name: "Presentation Layer",
    tech: "Jetpack Compose · Material 3",
    headline: "Declarative, Single-Activity UI",
    description:
      "Every screen is rendered with Jetpack Compose in a modern single-Activity architecture. Zero legacy XML views. High-contrast typography and intuitive layouts designed specifically for bright Indian outdoor markets and shop counters.",
    spec: [
      "Single-Activity declarative state",
      "Immediate touch response without UI thread lag",
      "Dynamic theming tailored for outdoor daylight",
    ],
  },
  {
    id: 2,
    label: "LAYER 02",
    name: "Domain & State Flow",
    tech: "ViewModel · StateFlow · Coroutines",
    headline: "Unidirectional Data Flow (UDF)",
    description:
      "All user interactions emit typed UiEvents. ViewModels mutate immutable UiState exposed via Kotlin StateFlow. Business logic is strictly decoupled from the UI lifecycle, ensuring zero state loss during app switching or orientation shifts.",
    spec: [
      "Immutable state emissions via StateFlow",
      "Structured concurrency with CoroutineScopes",
      "Deterministic, replayable UI states",
    ],
  },
  {
    id: 3,
    label: "LAYER 03",
    name: "Persistence Layer",
    tech: "Room SQLite · Custom TypeConverters",
    headline: "100% Sovereign Offline Storage",
    description:
      "All business ledgers, customer records, and case notes are stored exclusively on-device in a normalized SQLite database. Zero remote cloud servers. Operates seamlessly in basement shops with zero cellular signal.",
    spec: [
      "Compile-time SQL query syntax verification",
      "Deterministic Room migrations across versions",
      "Zero INTERNET permission in production manifests",
    ],
  },
  {
    id: 4,
    label: "LAYER 04",
    name: "Cryptographic Boundary",
    tech: "SQLCipher · 256-bit AES-CBC",
    headline: "Full Database Encryption at Rest",
    description:
      "Raw SQLite files are encrypted on-disk using SQLCipher with 256-bit AES. Each database page (4096 bytes) is independently encrypted with HMAC authentication. Even with physical device access or root ADB, data remains unreadable.",
    spec: [
      "PRAGMA cipher_page_size = 4096",
      "PBKDF2 key derivation with 600,000 iterations",
      "Zero plain-text ledger dumps or temporary files",
    ],
  },
  {
    id: 5,
    label: "LAYER 05",
    name: "Hardware Root of Trust",
    tech: "Android Keystore · StrongBox TEE",
    headline: "Silicon-Level Key Isolation",
    description:
      "The MasterKey that unlocks the database passphrase is generated and stored inside the Android hardware Keystore (backed by StrongBox Secure Element where available). Cryptographic operations execute in isolated hardware—keys are never exposed to Android user space RAM.",
    spec: [
      "MasterKey.KeyScheme.AES256_GCM",
      "Tamper-resistant hardware enclave protection",
      "Key destruction upon unauthorized device unlocking",
    ],
  },
];

export const ArchitectureExplodedSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const current = ARCHITECTURE_LAYERS.find((l) => l.id === activeLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <section
      id="architecture"
      className="relative py-32 px-6 max-w-6xl mx-auto w-full border-t border-surface-border z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand" />
          <span className="text-xs font-mono tracking-wider uppercase text-typography-muted">
            The Signature Skill · Architecture Story
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
          Built in layers.
        </h2>
        <p className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-2xl">
          An interactive exploded view of how my Android applications are engineered. Each physical layer represents a distinct architectural boundary—from the declarative Jetpack Compose UI down to the hardware silicon Keystore.
        </p>
      </div>

      {/* Main Grid: Left 3D Viewport Spacer / Mobile Fallback, Right Layer Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: 2D Interactive Fallback & Visual Guide (Takes 6 Cols) */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col gap-4">
            <span className="text-xs font-mono text-typography-muted uppercase tracking-wider">
              Interactive Architectural Stack
            </span>

            {/* Visual Layer Selector Tabs */}
            <div className="flex flex-col gap-2.5">
              {ARCHITECTURE_LAYERS.map((layer) => {
                const isSelected = activeLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between group ${
                      isSelected
                        ? "bg-surface-elevated border-brand text-white shadow-[0_0_20px_rgba(43,91,255,0.2)]"
                        : "bg-surface/50 border-surface-border text-typography-secondary hover:border-surface-border-hover hover:text-typography-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected ? "bg-brand text-white" : "bg-white/5 text-typography-muted"
                        }`}
                      >
                        {layer.label}
                      </span>
                      <div>
                        <div className="font-heading font-bold text-sm tracking-tight text-typography-primary">
                          {layer.name}
                        </div>
                        <div className="text-[11px] font-mono text-typography-muted">
                          {layer.tech}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-3 h-3 rounded-full border transition-all ${
                        isSelected ? "bg-brand border-brand" : "border-surface-border group-hover:border-typography-muted"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 text-[11px] font-mono text-typography-muted flex items-center justify-between">
              <span>Scroll to separate & reassemble 3D phone</span>
              <span className="text-brand font-bold">5 Verified Layers</span>
            </div>
          </div>
        </div>

        {/* Right Side: Deep Architectural Spec Card (Takes 6 Cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="p-8 rounded-2xl bg-surface-elevated border border-surface-border flex flex-col gap-6 shadow-xl relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-brand" />

            <div className="flex items-center justify-between border-b border-surface-border pb-4">
              <div>
                <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider">
                  {current.label} · {current.tech}
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-typography-primary mt-1">
                  {current.name}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                {current.id === 1 && <Smartphone className="w-5 h-5" />}
                {current.id === 2 && <Layers className="w-5 h-5" />}
                {current.id === 3 && <Database className="w-5 h-5" />}
                {current.id === 4 && <Lock className="w-5 h-5" />}
                {current.id === 5 && <Cpu className="w-5 h-5" />}
              </div>
            </div>

            <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-typography-secondary leading-relaxed">
              <h4 className="text-lg font-heading font-bold text-typography-primary">
                {current.headline}
              </h4>
              <p>{current.description}</p>
            </div>

            {/* Technical Specifications */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-surface-border">
              <span className="text-xs font-mono text-typography-muted uppercase tracking-wider">
                Key Verification Criteria
              </span>
              <div className="flex flex-col gap-2">
                {current.spec.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-typography-secondary">
                    <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

