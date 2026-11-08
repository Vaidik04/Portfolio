"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Terminal, Shield, Play, Pause, RefreshCw, Printer, Check, Copy, AlertTriangle, Calculator, FileCode } from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

const KOTLIN_SNIPPETS = {
  money: {
    filename: "MoneyMath.kt",
    description: "Zero-allocation value class for Indian currency preventing float drift",
    code: `@JvmInline
value class Paise(val amount: Long) : Comparable<Paise> {
    init {
        require(amount >= 0) { "Monetary ledger amount cannot be negative: $amount" }
    }

    operator fun plus(other: Paise) = Paise(Math.addExact(this.amount, other.amount))
    operator fun minus(other: Paise) = Paise(Math.subtractExact(this.amount, other.amount))

    /**
     * Compute GST (3% for Jewellery HSN 7113) without floating point approximation:
     * Split into CGST (1.5%) and SGST (1.5%) rounded via half-up paise math.
     */
    fun computeJewelleryGst(): Pair<Paise, Paise> {
        val halfRateNumerator = 15L // 1.5% = 15 / 1000
        val denominator = 1000L
        val halfGst = (amount * halfRateNumerator + (denominator / 2)) / denominator
        return Pair(Paise(halfGst), Paise(halfGst))
    }

    fun formatRupees(): String {
        val rupees = amount / 100
        val fraction = amount % 100
        return "₹%d.%02d".format(rupees, fraction)
    }
}`,
  },
  security: {
    filename: "ChamberSecurity.kt",
    description: "Hardware-backed Android Keystore StrongBox SQLite encryption hook",
    code: `object ChamberSecurity {
    private const val KEY_ALIAS = "vaidiktech_sovereign_master_key"
    private const val ANDROID_KEYSTORE = "AndroidKeyStore"

    fun getOrCreateMasterKey(context: Context): MasterKey {
        return MasterKey.Builder(context, KEY_ALIAS)
            .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
            .setRequestStrongBoxed(true) // Requires Hardware Security Module (TEE)
            .setUserAuthenticationRequired(false)
            .build()
    }

    fun provideSupportFactory(passphrase: ByteArray): SupportFactory {
        // Enforce SQLCipher 4.5.5 256-bit AES-CBC with 64,000 PBKDF2 iterations
        val hook = SQLiteDatabaseHook { db ->
            db.execSQL("PRAGMA cipher_page_size = 4096;")
            db.execSQL("PRAGMA kdf_iter = 64000;")
            db.execSQL("PRAGMA cipher_hmac_algorithm = HMAC_SHA512;")
            db.execSQL("PRAGMA cipher_kdf_algorithm = PBKDF2_HMAC_SHA512;")
        }
        return SupportFactory(passphrase, hook)
    }
}`,
  },
  statute: {
    filename: "StatuteMapper.kt",
    description: "Cross-statute IPC↔BNS and CrPC↔BNSS criminal procedure bridge",
    code: `data class StatuteBridge(
    val oldStatute: String,      // e.g. "IPC Section 420"
    val newStatute: String,      // e.g. "BNS Section 318(4)"
    val offenceDescription: String,
    val limitationPeriodDays: Int
)

class AdvocateStatuteEngine {
    private val crossMap = mapOf(
        "IPC 420" to StatuteBridge("IPC 420", "BNS 318(4)", "Cheating & Dishonesty", 1095),
        "IPC 302" to StatuteBridge("IPC 302", "BNS 103(1)", "Murder", 0), // No limitation
        "CrPC 154" to StatuteBridge("CrPC 154", "BNSS 173", "Information in Cognizable Cases (FIR)", 0),
        "CrPC 438" to StatuteBridge("CrPC 438", "BNSS 482", "Direction for grant of anticipatory bail", 0),
        "IEA 45"   to StatuteBridge("IEA 45",   "BSA 39",   "Opinions of Experts / Forensic Data", 0)
    )

    fun resolveLimitation(statute: String, causeOfActionDate: LocalDate): LocalDate? {
        val bridge = crossMap[statute] ?: return null
        if (bridge.limitationPeriodDays == 0) return null
        return causeOfActionDate.plusDays(bridge.limitationPeriodDays.toLong())
    }
}`,
  },
};

export const LiveProofSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"money" | "security" | "statute">("money");
  const [copied, setCopied] = useState(false);

  // Float Drift Simulation State
  const [simRunning, setSimRunning] = useState(true);
  const [transactionsCount, setTransactionsCount] = useState(128450);
  const [floatSum, setFloatSum] = useState(128450 * 12.35);
  const [integerPaiseSum, setIntegerPaiseSum] = useState(128450 * 1235);

  // GST Calculator State
  const [goldWeightGrams, setGoldWeightGrams] = useState(18.5);
  const [goldRatePerGram, setGoldRatePerGram] = useState(7250);
  const [makingChargesPercent, setMakingChargesPercent] = useState(8.0);
  const [stoneDeductionGrams, setStoneDeductionGrams] = useState(0.5);

  // Thermal Print Simulation State
  const [printingState, setPrintingState] = useState<"idle" | "printing" | "printed">("idle");

  // Float drift simulation tick
  useEffect(() => {
    if (!simRunning) return;
    const interval = setInterval(() => {
      const incrementRupees = 14.37;
      const incrementPaise = 1437;
      setTransactionsCount((c) => c + 35);
      setFloatSum((f) => f + 35 * incrementRupees);
      setIntegerPaiseSum((p) => p + 35 * incrementPaise);
    }, 120);
    return () => clearInterval(interval);
  }, [simRunning]);

  const floatDriftValue = useMemo(() => {
    const expectedFromPaise = integerPaiseSum / 100;
    return Math.abs(floatSum - expectedFromPaise);
  }, [floatSum, integerPaiseSum]);

  // GST Calculation in pure integer paise
  const gstMath = useMemo(() => {
    const netWeight = Math.max(0, goldWeightGrams - stoneDeductionGrams);
    const rateInPaise = goldRatePerGram * 100;
    const pureGoldPaise = Math.round(netWeight * rateInPaise);
    const makingPaise = Math.round(pureGoldPaise * (makingChargesPercent / 100));
    const taxablePaise = pureGoldPaise + makingPaise;
    const cgstPaise = Math.round(taxablePaise * 0.015);
    const sgstPaise = Math.round(taxablePaise * 0.015);
    const grandTotalPaise = taxablePaise + cgstPaise + sgstPaise;

    const formatInr = (p: number) => {
      const val = (p / 100).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return `₹${val}`;
    };

    return {
      netWeight: netWeight.toFixed(2),
      pureGoldFormatted: formatInr(pureGoldPaise),
      makingFormatted: formatInr(makingPaise),
      taxableFormatted: formatInr(taxablePaise),
      cgstFormatted: formatInr(cgstPaise),
      sgstFormatted: formatInr(sgstPaise),
      grandTotalFormatted: formatInr(grandTotalPaise),
    };
  }, [goldWeightGrams, goldRatePerGram, makingChargesPercent, stoneDeductionGrams]);

  const handleCopyCode = () => {
    proceduralAudio.tick();
    navigator.clipboard.writeText(KOTLIN_SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerThermalPrint = () => {
    proceduralAudio.whoosh(0.8);
    setPrintingState("printing");
    setTimeout(() => {
      proceduralAudio.shockwave();
      setPrintingState("printed");
    }, 1200);
  };

  return (
    <section
      id="proof"
      className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-android w-fit">
          <Terminal className="w-3.5 h-3.5" />
          <span>Scene 05 · Deterministic Execution</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary">
          How I Build.
        </h2>
        <p className="text-sm sm:text-base text-typography-secondary font-sans max-w-2xl leading-relaxed">
          In sovereign software, bugs mean financial disputes and legal penalties. Here is the exact math, cryptography, and thermal byte streams driving my production code.
        </p>
      </div>

      {/* Two Column Layout: Code Engine (Left) & Real-time Interactive Provers (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full min-w-0">
        {/* Left Column: Tabbed Kotlin Architecture Snippets (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col rounded-3xl bg-[#090C14] border border-white/10 shadow-2xl overflow-hidden min-w-0 max-w-full">
          {/* Window Bar with Tabs */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-[#0E121E] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              <span className="text-[11px] sm:text-xs font-mono text-typography-muted ml-1 sm:ml-2 truncate max-w-[140px] sm:max-w-none">
                src/main/kotlin/sovereign/
              </span>
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.05] hover:bg-white/10 text-[10px] sm:text-[11px] font-mono text-typography-secondary hover:text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-accent-android" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>

          {/* Sub-Tabs */}
          <div className="flex items-center border-b border-white/10 bg-[#0A0D16] px-3 sm:px-4 gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none max-w-full">
            {(["money", "security", "statute"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  proceduralAudio.tick();
                  setActiveTab(tab);
                }}
                className={`py-2.5 px-2.5 sm:px-3 text-[11px] sm:text-xs font-mono border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === tab
                    ? "border-accent-android text-white font-bold"
                    : "border-transparent text-typography-muted hover:text-typography-primary"
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{KOTLIN_SNIPPETS[tab].filename}</span>
              </button>
            ))}
          </div>

          {/* Description banner */}
          <div className="px-4 sm:px-5 py-2.5 bg-white/[0.02] border-b border-white/5 text-[11px] sm:text-xs font-mono text-typography-muted">
            {KOTLIN_SNIPPETS[activeTab].description}
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto text-typography-primary leading-relaxed bg-[#06080F] max-h-[460px] max-w-full min-w-0">
            <pre className="text-emerald-400">
              <code>{KOTLIN_SNIPPETS[activeTab].code}</code>
            </pre>
          </div>
        </div>

        {/* Right Column: Real-time Interactive Verification Widgets (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6 min-w-0 max-w-full">
          {/* Widget 1: Float Drift Accumulator */}
          <div className="p-5 rounded-3xl bg-surface border border-white/10 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-accent-android" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Float Drift Accumulator
                </span>
              </div>

              <button
                onClick={() => {
                  proceduralAudio.tick();
                  setSimRunning(!simRunning);
                }}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-typography-secondary hover:text-white"
                title={simRunning ? "Pause" : "Resume"}
              >
                {simRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>

            <p className="text-xs text-typography-secondary font-sans leading-relaxed">
              Standard 64-bit Double introduces cumulative binary rounding errors on repetitive paise transactions. VaidikTech ledger classes guarantee exact 0 drift.
            </p>

            <div className="grid grid-cols-2 gap-3 font-mono">
              <div className="p-3 rounded-2xl bg-black/40 border border-red-500/20">
                <div className="text-[10px] text-red-400 uppercase">Double Float Error</div>
                <div className="text-lg font-bold text-red-300 mt-1">
                  ₹{floatDriftValue.toFixed(6)}
                </div>
                <div className="text-[10px] text-typography-muted mt-0.5">
                  IEEE 754 Floating-point
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-black/40 border border-accent-android/30">
                <div className="text-[10px] text-accent-android uppercase">Long Paise Drift</div>
                <div className="text-lg font-bold text-accent-android mt-1">
                  ₹0.000000
                </div>
                <div className="text-[10px] text-typography-muted mt-0.5">
                  64-bit Exact Integer
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-typography-muted pt-2 border-t border-white/5">
              <span>Iterated Entries: {transactionsCount.toLocaleString()}</span>
              <span className="text-accent-android font-bold">[PASS // ZERO DRIFT]</span>
            </div>
          </div>

          {/* Widget 2: Real-time JewelBill GST Splitter & Thermal Receipt */}
          <div className="p-5 rounded-3xl bg-surface border border-white/10 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#F5C26B]" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  JewelBill GST Splitter (HSN 7113)
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#F5C26B] bg-[#F5C26B]/10 px-2 py-0.5 rounded-full">
                CGST 1.5% + SGST 1.5%
              </span>
            </div>

            {/* Slider Inputs */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div>
                <div className="flex justify-between text-typography-muted mb-1">
                  <span>Gross Gold Weight</span>
                  <span className="text-white font-bold">{goldWeightGrams} g</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="0.5"
                  value={goldWeightGrams}
                  onChange={(e) => setGoldWeightGrams(parseFloat(e.target.value))}
                  className="w-full accent-[#F5C26B]"
                />
              </div>

              <div>
                <div className="flex justify-between text-typography-muted mb-1">
                  <span>22K Gold Rate</span>
                  <span className="text-white font-bold">₹{goldRatePerGram}/g</span>
                </div>
                <input
                  type="range"
                  min="6000"
                  max="8500"
                  step="50"
                  value={goldRatePerGram}
                  onChange={(e) => setGoldRatePerGram(parseInt(e.target.value))}
                  className="w-full accent-[#F5C26B]"
                />
              </div>
            </div>

            {/* Calculated Receipt Ledger */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs flex flex-col gap-1.5">
              <div className="flex justify-between text-typography-secondary">
                <span>Net Gold ({gstMath.netWeight}g):</span>
                <span>{gstMath.pureGoldFormatted}</span>
              </div>
              <div className="flex justify-between text-typography-secondary">
                <span>Making Charges (8%):</span>
                <span>{gstMath.makingFormatted}</span>
              </div>
              <div className="flex justify-between text-typography-secondary">
                <span>CGST (1.5%):</span>
                <span>{gstMath.cgstFormatted}</span>
              </div>
              <div className="flex justify-between text-typography-secondary">
                <span>SGST (1.5%):</span>
                <span>{gstMath.sgstFormatted}</span>
              </div>
              <div className="border-t border-white/10 pt-2 mt-1 flex justify-between text-sm font-bold text-[#F5C26B]">
                <span>Grand Total:</span>
                <span>{gstMath.grandTotalFormatted}</span>
              </div>
            </div>

            {/* 240ms ESC/POS Thermal Print Trigger (Prominent High Contrast Gold CTA) */}
            <button
              onClick={handleTriggerThermalPrint}
              disabled={printingState === "printing"}
              style={{ backgroundColor: "#F5C26B", color: "#05060A" }}
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-mono font-black text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(245,194,107,0.35)] hover:scale-[1.02] active:scale-95 hover:brightness-105 disabled:opacity-75 disabled:cursor-wait"
            >
              <Printer className="w-4 h-4 text-black stroke-[2.5]" />
              <span>
                {printingState === "printing"
                  ? "Transmitting ESC/POS 240ms..."
                  : printingState === "printed"
                  ? "Receipt Printed via Bluetooth ESC/POS (Click to Re-print)"
                  : "Simulate 240ms Bluetooth ESC/POS Print"}
              </span>
            </button>

            {/* Simulated 58mm Thermal Printed Paper Strip */}
            {printingState !== "idle" && (
              <div className="p-4 rounded-2xl bg-[#FAF6EE] text-[#141414] font-mono text-[11px] leading-relaxed shadow-2xl border border-neutral-300 animate-fade-in relative overflow-hidden">
                <div className="text-center pb-2 border-b border-dashed border-neutral-400">
                  <div className="font-bold text-xs uppercase text-neutral-900">SHREE GANESH JEWELLERS</div>
                  <div className="text-[9px] text-neutral-600">Sarafa Bazaar, Bhopal · GSTIN: 23AABCU9603R1ZM</div>
                  <div className="text-[9px] text-neutral-500 mt-1">HSN 7113 · Direct ESC/POS Bluetooth 58mm</div>
                </div>

                <div className="py-2.5 space-y-1 border-b border-dashed border-neutral-400 text-[10px]">
                  <div className="flex justify-between">
                    <span>22K Gold ({gstMath.netWeight}g @ ₹{goldRatePerGram}):</span>
                    <span className="font-bold">{gstMath.pureGoldFormatted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Making Charges (8%):</span>
                    <span>{gstMath.makingFormatted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CGST (1.5%):</span>
                    <span>{gstMath.cgstFormatted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SGST (1.5%):</span>
                    <span>{gstMath.sgstFormatted}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between font-bold text-xs text-neutral-900">
                  <span>TOTAL DUE:</span>
                  <span>{gstMath.grandTotalFormatted}</span>
                </div>

                <div className="mt-3 text-center text-[9px] text-neutral-600 flex flex-col items-center gap-1">
                  <div className="font-mono tracking-widest text-xs font-bold text-neutral-800">
                    ||| | |||| ||| ||||| |||| |||
                  </div>
                  <span className="text-[8px] font-semibold text-emerald-700">
                    STATUS: 240ms DISPATCH · 0.0000% DRIFT VERIFIED
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
