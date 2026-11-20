"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, GitBranch, ArrowRight, Lock, Database, Smartphone, Cpu, CheckCircle2, Code2, Layers } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

interface ArchitectureLayer {
  num: string;
  name: string;
  tech: string;
  tag: string;
  desc: string;
  accent: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  codeFilename: string;
  codeSnippet: string;
}

export const HomeArchitecturePreview: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [viewTab, setViewTab] = useState<"specs" | "code">("specs");

  const layers: ArchitectureLayer[] = [
    {
      num: "01",
      name: "Presentation Layer",
      tech: "Jetpack Compose · Material 3",
      tag: "UI / UX",
      desc: "Declarative Single-Activity architecture. Zero XML overhead. Tailored typography and Devanagari script support for high glare outdoor markets.",
      accent: "#3DDC84",
      icon: Smartphone,
      codeFilename: "PawnLedgerScreen.kt",
      codeSnippet: `@Composable
fun PawnLedgerScreen(
    viewModel: GirviViewModel = hiltViewModel()
) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    // Sub-16ms single-activity declarative rendering
    PledgeCardList(
        pledges = state.activePledges,
        onInspect = viewModel::onSelectPledge
    )
}`,
    },
    {
      num: "02",
      name: "Domain & StateFlow",
      tech: "ViewModel · StateFlow · UDF",
      tag: "Logic",
      desc: "Unidirectional data flow. ViewModels emit immutable states via StateFlow with structured coroutine scopes, surviving lifecycle transitions cleanly.",
      accent: "#7C5CFF",
      icon: GitBranch,
      codeFilename: "LedgerUiState.kt",
      codeSnippet: `@Immutable
data class LedgerUiState(
    val activePledges: List<Pledge> = emptyList(),
    val totalPrincipalPaise: Paise = Paise(0L),
    val isLoading: Boolean = false
)
// Unidirectional state flow with zero leak
val uiState: StateFlow<LedgerUiState> = _state.asStateFlow()`,
    },
    {
      num: "03",
      name: "Offline Persistence",
      tech: "Room SQLite · Zero Internet",
      tag: "Database",
      desc: "100% offline data sovereignty. Strict absence of android.permission.INTERNET guarantees zero background telemetry or cloud leaks.",
      accent: "#22D3EE",
      icon: Database,
      codeFilename: "PledgeDao.kt",
      codeSnippet: `@Dao
interface PledgeDao {
    @Query("SELECT * FROM pledges WHERE status = :active ORDER BY dateCreated DESC")
    fun observeActivePledges(active: String): Flow<List<PledgeEntity>>
    
    @Transaction
    suspend fun settlePledgeWithReceipt(pledgeId: Long, settlementPaise: Long)
}`,
    },
    {
      num: "04",
      name: "Cryptographic Vault",
      tech: "SQLCipher 256-bit AES · PBKDF2",
      tag: "Security",
      desc: "Full database page encryption enforced with 64,000 PBKDF2 iterations and HMAC-SHA512 integrity verification across all local records.",
      accent: "#F5C26B",
      icon: Lock,
      codeFilename: "ChamberSecurity.kt",
      codeSnippet: `// 256-bit AES database encryption hook
val hook = SQLiteDatabaseHook { db ->
    db.execSQL("PRAGMA cipher_page_size = 4096;")
    db.execSQL("PRAGMA kdf_iter = 64000;")
    db.execSQL("PRAGMA cipher_hmac_algorithm = HMAC_SHA512;")
}
SupportFactory(passphrase, hook)`,
    },
    {
      num: "05",
      name: "Hardware Security",
      tech: "Android Keystore · StrongBox TEE",
      tag: "Hardware",
      desc: "Hardware Security Module (HSM) backed master key generation. Keys never touch RAM unencrypted, impervious to device rooting or cold-boot attacks.",
      accent: "#EC4899",
      icon: Cpu,
      codeFilename: "StrongBoxMasterKey.kt",
      codeSnippet: `// Silicon hardware keystore StrongBox
MasterKey.Builder(context, "vaidiktech_master_key")
    .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
    .setRequestStrongBoxBacked(true) // Hardware Security Module (TEE)
    .build()`,
    },
  ];

  return (
    <section
      id="architecture-preview"
      className="relative py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-xs font-mono text-accent-violet w-fit">
            <Shield className="w-3.5 h-3.5" />
            <span>Systems & Cryptographic Hardening</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            5-Layer Sovereign Architecture
          </h2>
          <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
            Eliminating cloud fragility. Every tier is engineered for mathematical certainty, zero-knowledge offline privacy, and sub-16ms touch dispatch on mobile silicon.
          </p>
        </div>

        <Link
          href="/architecture"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-1 border border-white/15 text-xs font-mono text-typography-primary hover:text-accent-violet hover:border-accent-violet/50 transition-all self-start md:self-auto group"
        >
          <span>Explore Exploded 3D Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Layer Stack Tabs & Interactive Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Layer Selector Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {layers.map((layer, idx) => {
            const isSelected = activeLayer === idx;
            const Icon = layer.icon;

            return (
              <button
                key={layer.num}
                type="button"
                onClick={() => {
                  setActiveLayer(idx);
                  proceduralAudio.tick();
                }}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
                  isSelected
                    ? "bg-[#141824] border-accent-violet shadow-[0_0_24px_rgba(124,92,255,0.2)] scale-[1.02]"
                    : "bg-[#0E1118]/80 border-white/10 hover:border-white/20 hover:bg-[#121520]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
                    style={{
                      backgroundColor: `${layer.accent}20`,
                      color: layer.accent,
                    }}
                  >
                    {layer.num}
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-typography-primary">
                      {layer.name}
                    </h4>
                    <span className="text-[11px] font-mono text-typography-muted">
                      {layer.tech}
                    </span>
                  </div>
                </div>

                <Icon
                  className="w-4 h-4 flex-shrink-0 transition-colors"
                  style={{ color: isSelected ? layer.accent : "#6B7280" }}
                />
              </button>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive Card (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#121522]/90 border border-white/15 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-violet/10 blur-[90px] pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                style={{
                  backgroundColor: `${layers[activeLayer].accent}20`,
                  color: layers[activeLayer].accent,
                  border: `1px solid ${layers[activeLayer].accent}40`,
                }}
              >
                Layer {layers[activeLayer].num} // {layers[activeLayer].tag}
              </span>

              {/* View Mode Toggle: Specs vs Kotlin Source Code */}
              <div className="flex items-center p-0.5 rounded-lg bg-black/40 border border-white/10 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => {
                    proceduralAudio.tick();
                    setViewTab("specs");
                  }}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    viewTab === "specs"
                      ? "bg-white/10 text-white font-bold"
                      : "text-typography-muted hover:text-white"
                  }`}
                >
                  Specs
                </button>
                <button
                  type="button"
                  onClick={() => {
                    proceduralAudio.tick();
                    setViewTab("code");
                  }}
                  className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                    viewTab === "code"
                      ? "bg-accent-android text-[#05060A] font-bold"
                      : "text-typography-muted hover:text-white"
                  }`}
                >
                  <Code2 className="w-3 h-3" />
                  <span>Kotlin</span>
                </button>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-black text-typography-primary tracking-tight mb-2">
              {layers[activeLayer].name}
            </h3>

            <p className="text-xs font-mono text-accent-android mb-4">
              {layers[activeLayer].tech}
            </p>

            {viewTab === "specs" ? (
              <>
                <p className="text-sm font-sans text-typography-secondary leading-relaxed mb-6">
                  {layers[activeLayer].desc}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-sans">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-android flex-shrink-0 mt-0.5" />
                    <span className="text-typography-primary">
                      100% deterministic operation in basements and air-gapped chambers.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-typography-primary">
                      Cryptographically verified database schema with zero telemetry payloads.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-violet flex-shrink-0 mt-0.5" />
                    <span className="text-typography-primary">
                      Sub-16ms touch latency dispatch on mid-range Android hardware.
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-[#090C14] border border-white/10 p-4 font-mono text-xs text-typography-primary overflow-x-auto">
                <div className="text-[10px] text-typography-muted mb-2 pb-2 border-b border-white/5 flex items-center justify-between">
                  <span>{layers[activeLayer].codeFilename}</span>
                  <span className="text-accent-android">Verified Kotlin 2.0</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-accent-android/90">
                  <code>{layers[activeLayer].codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-typography-muted">
              Full Kotlin code & exploded diagram available
            </span>
            <Link
              href="/architecture"
              onClick={() => proceduralAudio.tick()}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-android hover:underline"
            >
              <span>Inspect Full Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
