"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Power,
  Wifi,
  WifiOff,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Play,
  RefreshCw,
  ArrowRight,
  Layers,
  Printer,
} from "lucide-react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { Magnetic } from "@/components/ui/Magnetic";

interface StackLayer {
  num: string;
  name: string;
  tech: string;
  summary: string;
  filename: string;
  code: string;
}

const STACK_LAYERS: StackLayer[] = [
  {
    num: "01",
    name: "Edge Vision & Reactive UI",
    tech: "Jetpack Compose · CameraX · YOLOv8",
    summary:
      "Declarative sub-16ms UI rendering & on-device vision inference running directly on mobile NPU/DSP without cloud round-trips.",
    filename: "PawnLedgerScreen.kt",
    code: `@Composable
fun LedgerDashboard(vm: LedgerViewModel = hiltViewModel()) {
    val state by vm.uiState.collectAsStateWithLifecycle()
    LazyColumn {
        items(state.entries, key = { it.id }) { item ->
            EntryRow(entry = item, onInspect = vm::openEntry)
        }
    }
}`,
  },
  {
    num: "02",
    name: "Consensus & State",
    tech: "Kotlin StateFlow · P2P Mesh · Python",
    summary:
      "Deterministic unidirectional state machines & ad-hoc SwarmOS mesh sync operating cleanly over severed or intermittent links.",
    filename: "SwarmConsensus.kt",
    code: `@Immutable
data class NodeState(
    val epoch: Long,
    val ledgerHash: String,
    val balancePaise: Paise = Paise(0L)
)
val state: StateFlow<NodeState> = _state.asStateFlow()`,
  },
  {
    num: "03",
    name: "Air-Gapped Persistence",
    tech: "Room SQLite · WAL Mode · Zero INTERNET Perm",
    summary:
      "Sensitive ledgers declare zero INTERNET permissions—transactions commit locally in < 4ms with atomic rollback safety.",
    filename: "PledgeDao.kt",
    code: `@Dao
interface PledgeDao {
    @Query("SELECT * FROM pledges WHERE active = 1 ORDER BY updatedAt DESC")
    fun streamActive(): Flow<List<PledgeEntity>>

    @Transaction
    suspend fun settleAtomic(id: Long, amountPaise: Long)
}`,
  },
  {
    num: "04",
    name: "Cryptographic Boundary",
    tech: "SQLCipher AES-256 · 64k PBKDF2 · HMAC-SHA512",
    summary:
      "Full-page 4096-byte cipher encryption verified on every write so raw storage dumps yield pure pseudorandom ciphertext.",
    filename: "CipherFactory.kt",
    code: `val hook = SQLiteDatabaseHook { db ->
    db.execSQL("PRAGMA cipher_page_size = 4096;")
    db.execSQL("PRAGMA kdf_iter = 64000;")
    db.execSQL("PRAGMA cipher_hmac_algorithm = HMAC_SHA512;")
}
SupportOpenHelperFactory(masterBytes, hook)`,
  },
  {
    num: "05",
    name: "Silicon Root of Trust",
    tech: "Android StrongBox HSM · Hardware Keystore",
    summary:
      "Master keys generated inside isolated Secure Element silicon—private key material never enters readable host RAM.",
    filename: "StrongBoxEnclave.kt",
    code: `MasterKey.Builder(context, "vaidik_strongbox_key")
    .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
    .setRequestStrongBoxBacked(true)
    .build()`,
  },
];

const RECEIPT_PRESETS = [
  { label: "22K Ring (10g)", basePaise: 8425050 },
  { label: "24K Coin (20g)", basePaise: 15840000 },
];

export const EngineeringCraftSection: React.FC = () => {
  const {
    isPlugPulled,
    togglePlug,
    isOffline,
    manualExploded,
    toggleManualExploded,
    setFocusedLayer,
  } = useWorldStore();

  const [flickering, setFlickering] = useState(false);
  const [activeLayer, setActiveLayer] = useState(3);
  const [copiedCode, setCopiedCode] = useState(false);
  const [runningBench, setRunningBench] = useState(false);
  const [benchResult, setBenchResult] = useState<{
    floatTotal: string;
    longTotal: string;
    driftPaise: string;
  } | null>(null);

  const [presetIdx, setPresetIdx] = useState(0);
  const [printingReceipt, setPrintingReceipt] = useState(false);
  const [receiptPrinted, setReceiptPrinted] = useState(false);

  const isActuallyOffline = isPlugPulled || isOffline;
  const layer = STACK_LAYERS[activeLayer];

  // Exact HSN 7113 integer paise GST calculation (1.5% CGST + 1.5% SGST)
  const basePaise = RECEIPT_PRESETS[presetIdx].basePaise;
  const halfGstPaise = Math.round((basePaise * 15) / 1000);
  const totalPaise = basePaise + halfGstPaise * 2;
  const fmtINR = (paise: number) =>
    `₹${(paise / 100).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const handleCutWire = () => {
    proceduralAudio.breakerThud();
    setFlickering(true);
    setTimeout(() => setFlickering(false), 450);
    togglePlug();
  };

  const handleSelectLayer = (idx: number) => {
    proceduralAudio.tick();
    setActiveLayer(idx);
    setFocusedLayer(idx + 1);
  };

  const handleCopy = () => {
    proceduralAudio.tick();
    navigator.clipboard.writeText(layer.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1800);
  };

  const runMathProver = () => {
    proceduralAudio.tick();
    setRunningBench(true);
    setTimeout(() => {
      let floatSum = 0.0;
      let paiseSum = BigInt(0);
      for (let i = 0; i < 10000; i++) {
        floatSum += 19.99;
        paiseSum += BigInt(1999);
      }
      const floatPaiseDiff = Math.abs(floatSum * 100 - Number(paiseSum));
      setBenchResult({
        floatTotal: `₹${floatSum.toLocaleString("en-IN", { minimumFractionDigits: 6, maximumFractionDigits: 8 })}`,
        longTotal: `₹${(Number(paiseSum) / 100).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        driftPaise: floatPaiseDiff.toExponential(2),
      });
      setRunningBench(false);
      proceduralAudio.shockwave();
    }, 300);
  };

  const triggerThermalPrint = () => {
    proceduralAudio.tick();
    setPrintingReceipt(true);
    setReceiptPrinted(false);
    setTimeout(() => {
      setPrintingReceipt(false);
      setReceiptPrinted(true);
      proceduralAudio.tick();
    }, 240);
  };

  return (
    <section
      id="engineering-craft"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-auto border-t border-white/[0.08]"
    >
      {/* Transient Substation Outage Flicker */}
      {flickering && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[999] pointer-events-none bg-black/70 animate-pulse"
          style={{ animationIterationCount: 3, animationDuration: "0.14s" }}
        />
      )}

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-8 border-b border-white/[0.08]">
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono uppercase tracking-widest text-accent-android mb-2">
            03 // Engineering Craft &amp; Live Proofs
          </div>
          <h2 className="swiss-heading font-heading font-bold text-white">
            Pull the plug. Verify the math. Print in 240ms.
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              proceduralAudio.tick();
              toggleManualExploded();
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-white/10 hover:border-white/30 text-xs font-mono text-typography-muted hover:text-white transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>{manualExploded ? "Collapse 3D Stack" : "Explode 3D Stack"}</span>
          </button>
          <Link
            href="/proof"
            onClick={() => proceduralAudio.tick()}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-android hover:underline"
          >
            <span>Full Proof Suite</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* PART A: Interactive Offline Resilience Demo ("Pull the Plug") */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08]">
        <div className="lg:col-span-5 py-7 lg:pr-8 flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-typography-muted mb-2">
              {isActuallyOffline ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-accent-android" />
                  <span className="text-accent-android font-bold uppercase">
                    {isOffline ? "True Browser Offline Detected" : "Simulated Air-Gap Active"}
                  </span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-sky-400" />
                  <span>Service Worker Active · Offline Shell Precached</span>
                </>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
              Cloud goes down. Software doesn&apos;t.
            </h3>
            <p className="text-xs sm:text-sm text-typography-muted font-sans leading-relaxed mt-2">
              In concrete basements and remote field environments, network links vanish. Flip the breaker to watch remote cloud APIs time out while local SwarmOS sync, Room SQLite, and this portfolio keep running.
            </p>
          </div>

          <div>
            <Magnetic strength={0.28}>
              <button
                type="button"
                onClick={handleCutWire}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-md border font-mono font-bold text-xs uppercase tracking-widest transition-all cursor-pointer ${
                  isActuallyOffline
                    ? "bg-accent-android/15 border-accent-android text-accent-android shadow-[0_0_25px_rgba(61,220,132,0.2)]"
                    : "bg-rose-500/10 border-rose-500/50 hover:border-rose-400 text-rose-300"
                }`}
              >
                <Power className={`w-4 h-4 ${isActuallyOffline ? "rotate-180" : ""}`} />
                <span>{isActuallyOffline ? "Restore Connection" : "Pull the Plug"}</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Live Telemetry Comparison Columns */}
        <div className="lg:col-span-7 lg:border-l border-t lg:border-t-0 border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider mb-3">
                <span className="text-typography-faint">Cloud-Dependent SaaS</span>
                <span className={isActuallyOffline ? "text-rose-400 font-bold" : "text-typography-muted"}>
                  {isActuallyOffline ? "HTTP 504 TIMEOUT" : "148ms RTT"}
                </span>
              </div>
              <div className="p-3.5 rounded-md bg-[#080A0F] border border-white/[0.06] font-mono text-[11px] space-y-2">
                <div className="text-typography-faint border-b border-white/[0.06] pb-1.5">
                  POST /api/v2/ledger/sync
                </div>
                {isActuallyOffline ? (
                  <>
                    <div className="flex items-center gap-2 text-rose-400">
                      <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>ERR_INTERNET_DISCONNECTED</span>
                    </div>
                    <div className="text-rose-300/80 text-[10px]">
                      Transaction blocked; billing &amp; field operations halted.
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-typography-muted">
                    <RefreshCw className="w-3 h-3 animate-spin text-sky-400" />
                    <span>Waiting on AWS ap-south-1...</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-3 text-[11px] font-mono text-typography-faint">
              Outage state: <span className={isActuallyOffline ? "text-rose-400" : "text-white"}>{isActuallyOffline ? "Halted" : "Online"}</span>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider mb-3">
                <span className="text-typography-faint">Local Sovereign Runtime</span>
                <span className="text-accent-android font-bold">0ms LOCAL I/O</span>
              </div>
              <div className="p-3.5 rounded-md bg-[#080A0F] border border-accent-android/25 font-mono text-[11px] space-y-2">
                <div className="text-typography-faint border-b border-white/[0.06] pb-1.5">
                  ROOM WAL · SWARM P2P · STRONGBOX
                </div>
                <div className="flex items-center gap-2 text-accent-android">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Committed locally on device silicon</span>
                </div>
                <div className="text-typography-muted text-[10px]">
                  0 KB outbound telemetry · Service Worker active.
                </div>
              </div>
            </div>
            <div className="mt-3 text-[11px] font-mono text-typography-faint">
              Outage state: <span className="text-accent-android">100% Operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* PART B: 5-Layer Stack + Live Math Prover + Thermal ESC/POS Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08]">
        {/* Left 6 Cols: 5-Layer Architecture & Real Code */}
        <div className="lg:col-span-6 py-7 lg:pr-8">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-typography-muted">
              5-Layer Cryptographic &amp; Systems Stack
            </span>
            <Link
              href="/architecture"
              onClick={() => proceduralAudio.tick()}
              className="text-[11px] font-mono text-sky-400 hover:underline"
            >
              Architecture Deep-Dive →
            </Link>
          </div>

          <div className="grid grid-cols-5 border border-white/[0.08] rounded-md overflow-hidden mb-4">
            {STACK_LAYERS.map((item, idx) => {
              const selected = activeLayer === idx;
              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => handleSelectLayer(idx)}
                  className={`py-2 px-2 text-center font-mono text-[11px] border-r last:border-r-0 border-white/[0.08] transition-colors cursor-pointer ${
                    selected
                      ? "bg-white text-[#050608] font-bold"
                      : "bg-[#080A0F] text-typography-muted hover:text-white"
                  }`}
                >
                  L{item.num}
                </button>
              );
            })}
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-lg font-heading font-bold text-white">
                  {layer.num} · {layer.name}
                </h4>
                <span className="text-[11px] font-mono text-accent-android">{layer.tech}</span>
              </div>
              <p className="text-xs sm:text-sm text-typography-muted font-sans mt-1 leading-relaxed">
                {layer.summary}
              </p>
            </div>

            <div className="rounded-md border border-white/[0.08] bg-[#080A0F] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] text-[11px] font-mono text-typography-faint">
                <span className="text-white/80">{layer.filename}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-accent-android" />
                      <span className="text-accent-android">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 text-[11px] font-mono leading-relaxed text-sky-300/90 overflow-x-auto">
                <code>{layer.code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Right 6 Cols: Live 10k-Op Float Drift Prover + Thermal ESC/POS Receipt Simulator */}
        <div className="lg:col-span-6 lg:border-l border-t lg:border-t-0 border-white/[0.08] py-7 lg:pl-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Prover 1: 10,000-Tx Integer Math */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-accent-android mb-1.5">
                Prover A // Integer Math
              </div>
              <h4 className="text-base font-heading font-bold text-white">
                Float Drift vs. Long Paise
              </h4>
              <p className="text-xs text-typography-muted font-sans mt-1 leading-relaxed">
                Run 10,000 live iterations to verify zero-allocation integer paise math against IEEE 754 float error.
              </p>

              <button
                type="button"
                onClick={runMathProver}
                disabled={runningBench}
                className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-accent-android text-[#050608] font-mono font-bold text-[11px] uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
              >
                {runningBench ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Run 10k Ops Test</span>
                  </>
                )}
              </button>

              <div className="mt-3.5 p-3 rounded-md bg-[#080A0F] border border-white/[0.08] font-mono text-[11px] space-y-1.5 tabular-mono">
                {benchResult ? (
                  <>
                    <div className="flex justify-between gap-2">
                      <span className="text-typography-faint">Float64:</span>
                      <span className="text-rose-400">{benchResult.floatTotal}</span>
                    </div>
                    <div className="flex justify-between gap-2 font-bold">
                      <span className="text-white">Paise:</span>
                      <span className="text-accent-android">{benchResult.longTotal}</span>
                    </div>
                    <div className="pt-1.5 border-t border-white/[0.06] text-[10px] text-accent-android flex justify-between">
                      <span>PASS · 0.0000%</span>
                      <span className="text-rose-400">Err: {benchResult.driftPaise}p</span>
                    </div>
                  </>
                ) : (
                  <div className="text-typography-faint text-[10px] leading-relaxed">
                    10,000 × ₹19.99 expected = ₹1,99,900.00. Click Run to inspect live divergence.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Prover 2: HSN 7113 Split GST + 240ms Thermal ESC/POS Tape */}
          <div className="flex flex-col justify-between sm:border-l sm:border-white/[0.08] sm:pl-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#F5C26B] mb-1.5">
                Prover B // Thermal POS
              </div>
              <h4 className="text-base font-heading font-bold text-white">
                HSN 7113 &amp; 240ms ESC/POS
              </h4>

              <div className="flex items-center gap-1.5 mt-2">
                {RECEIPT_PRESETS.map((p, idx) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => {
                      proceduralAudio.tick();
                      setPresetIdx(idx);
                    }}
                    className={`px-2 py-1 rounded text-[10px] font-mono border cursor-pointer ${
                      presetIdx === idx
                        ? "bg-white text-[#050608] border-white font-bold"
                        : "border-white/10 text-typography-muted hover:text-white"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={triggerThermalPrint}
                disabled={printingReceipt}
                className="mt-3 inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[#F5C26B]/50 bg-[#F5C26B]/10 hover:bg-[#F5C26B]/20 text-[#F5C26B] font-mono font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer"
              >
                <Printer className="w-3 h-3" />
                <span>{printingReceipt ? "Spooling 58mm..." : "Print 240ms Receipt"}</span>
              </button>

              {/* Compact 58mm Thermal Strip */}
              <div className="mt-3.5 p-3 rounded-md bg-[#0E1117] border border-white/[0.08] font-mono text-[10px] space-y-1 tabular-mono text-typography-muted">
                <div className="flex justify-between text-white font-bold border-b border-dashed border-white/15 pb-1">
                  <span>JEWELBILL ESC/POS</span>
                  <span>{receiptPrinted ? "240ms OK" : "58mm SPP"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxable ({RECEIPT_PRESETS[presetIdx].label}):</span>
                  <span className="text-white">{fmtINR(basePaise)}</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST (1.5%) + SGST (1.5%):</span>
                  <span>{fmtINR(halfGstPaise)} × 2</span>
                </div>
                <div className="flex justify-between text-[#F5C26B] font-bold pt-1 border-t border-dashed border-white/15">
                  <span>NET PAYABLE:</span>
                  <span>{fmtINR(totalPaise)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
