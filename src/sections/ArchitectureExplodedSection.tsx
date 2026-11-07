"use client";

import React from "react";
import { Shield, Layers, Cpu, Database, Smartphone, Lock, CheckCircle2, Eye, Sparkles } from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface LayerInfo {
  id: number;
  label: string;
  name: string;
  tech: string;
  headline: string;
  description: string;
  spec: string[];
  accent: string;
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
      "Single-Activity declarative state rendering",
      "Sub-16ms touch dispatch on mid-range Android silicon",
      "Devanagari script support (गिरवी, एडवोकोश) with zero glyph distortion",
    ],
    accent: "#3DDC84",
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
      "Structured concurrency with CoroutineScope lifecycle bindings",
      "Zero-allocation Paise value class for all financial calculations",
    ],
    accent: "#7C5CFF",
  },
  {
    id: 3,
    label: "LAYER 03",
    name: "Persistence Layer",
    tech: "Room SQLite · TypeConverters",
    headline: "100% Offline Sovereign Storage",
    description:
      "Full local relational database. Pledges, invoices, and court cause lists are permanently queryable without internet. TypeConverters safely translate complex date/currency structures into native SQLite primitives.",
    spec: [
      "Strict zero android.permission.INTERNET in Girvi manifest",
      "Deterministic database migration testing suite",
      "Direct binary BLOB handling for ESC/POS thermal print bitmaps",
    ],
    accent: "#22D3EE",
  },
  {
    id: 4,
    label: "LAYER 04",
    name: "Cryptographic Boundary",
    tech: "SQLCipher 4.5.5 · 256-bit AES-CBC",
    headline: "Encrypted Database Enclosure",
    description:
      "The entire database file is encrypted on disk using SQLCipher 256-bit AES-CBC with HMAC-SHA256 integrity verification. Every database page is individually encrypted; memory buffers are zeroized upon session termination.",
    spec: [
      "PRAGMA cipher_page_size = 4096; kdf_iter = 256000",
      "Plaintext rows sweep into ciphertext at the persistence barrier",
      "Zero telemetry, zero diagnostic dumps, zero third-party SDK leaks",
    ],
    accent: "#F5C26B",
  },
  {
    id: 5,
    label: "LAYER 05",
    name: "Hardware Root of Trust",
    tech: "Android Keystore · StrongBox TEE",
    headline: "Silicon-Sealed Encryption Keys",
    description:
      "The SQLCipher master passkey never exists in application memory in plaintext. It is derived through hardware-backed Android KeyStore backed by an isolated Secure Element (StrongBox Keymaster) resistant to CPU side-channel attacks.",
    spec: [
      "MasterKey.Builder(AES256_GCM).setRequestStrongBoxBacked(true)",
      "Tamper-resistant dedicated hardware security enclave",
      "Private keys physically cannot leave hardware silicon",
    ],
    accent: "#E05638",
  },
];

export const ArchitectureExplodedSection: React.FC = () => {
  const { focusedLayer, setFocusedLayer, manualExploded, toggleManualExploded } = useWorldStore();

  return (
    <section
      id="architecture"
      className="relative min-h-[140vh] py-32 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-none"
    >
      {/* Section Header */}
      <div className="max-w-xl flex flex-col gap-4 pointer-events-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/80 border border-white/10 text-xs font-mono text-accent-violet w-fit backdrop-blur-md">
          <Layers className="w-3.5 h-3.5" />
          <span>02 // THE EXPLODED ARCHITECTURE STACK</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
          Five physically sealed layers. Zero cloud dependencies.
        </h2>

        <p className="text-base text-typography-secondary font-sans leading-relaxed">
          The 3D phone model on the right separates into its five distinct engineering tiers as you scroll. Click any layer card below or tap the 3D slabs to freeze and inspect in 360° orbit.
        </p>

        {/* Toggle 3D Freeze / Explode Button */}
        <div className="pt-2">
          <button
            onClick={toggleManualExploded}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-surface border border-accent-violet/40 hover:border-accent-violet text-xs font-mono text-typography-primary transition-all shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
            <span>{manualExploded ? "Assemble Back to Phone" : "Explode All 5 Slabs in 3D"}</span>
          </button>
        </div>
      </div>

      {/* Layer Cards Stack (Pinned DOM) */}
      <div className="max-w-xl flex flex-col gap-6 pointer-events-auto">
        {ARCHITECTURE_LAYERS.map((layer) => {
          const isFocused = focusedLayer === layer.id;

          return (
            <div
              key={layer.id}
              onClick={() => {
                const next = isFocused ? null : layer.id;
                setFocusedLayer(next);
                proceduralAudio.tick();
              }}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                isFocused
                  ? "bg-[#141824] border-accent-android shadow-[0_0_35px_rgba(61,220,132,0.25)] scale-[1.02]"
                  : "bg-surface/90 border-white/10 hover:border-white/20 hover:bg-surface-elevated"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: layer.accent }}
                  />
                  <span className="text-xs font-mono font-bold text-typography-muted">
                    {layer.label}
                  </span>
                  <span className="text-sm font-heading font-bold text-typography-primary">
                    {layer.name}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-accent-android">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isFocused ? "Inspect Mode Active" : "Inspect 3D"}</span>
                </div>
              </div>

              <div className="text-xs font-mono font-semibold mb-2" style={{ color: layer.accent }}>
                {layer.tech}
              </div>

              <h4 className="text-base font-heading font-bold text-typography-primary mb-2">
                {layer.headline}
              </h4>

              <p className="text-xs sm:text-sm font-sans text-typography-secondary leading-relaxed mb-4">
                {layer.description}
              </p>

              <div className="space-y-1.5 border-t border-white/5 pt-3">
                {layer.spec.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-typography-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-android flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
