"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Copy, Check, Terminal, Code2, Smartphone } from "lucide-react";

export const CodeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<number>(0);

  const SNIPPETS = [
    {
      title: "ChamberSecurity.kt",
      app: "AdvoKosh · Chamber OS",
      code: `// Hardware-Backed Sovereign Chamber Database Factory
@Singleton
class ChamberDatabaseFactory @Inject constructor(
    @ApplicationContext private val context: Context
) {
    fun createEncryptedDatabase(): VakalatDatabase {
        // 1. Generate or retrieve hardware-backed MasterKey (AES-256-GCM)
        val masterKey = MasterKey.Builder(context)
            .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
            .setRequestStrongBoxBacked(true) // Hardware SE Enclave
            .build()

        // 2. Retrieve secure database passphrase
        val passphrase = getOrCreateChamberPassphrase(context, masterKey)
        val openHelperFactory = SupportFactory(SQLiteDatabase.getBytes(passphrase))

        // 3. Build encrypted Room database with SQLCipher
        return Room.databaseBuilder(context, VakalatDatabase::class.java, "advokosh.db")
            .openHelperFactory(openHelperFactory)
            .addMigrations(MIGRATION_1_2, MIGRATION_2_3, MIGRATION_3_4)
            .fallbackToDestructiveMigrationOnDowngrade()
            .build()
    }
}`,
      previewTitle: "AdvoKosh Active Chamber",
      previewStatus: "Encrypted · 256-bit AES-CBC",
      previewItems: [
        "Case: State vs. Sharma & Ors.",
        "Limitation: 14 Days Remaining",
        "Cause List: Courtroom 4 · Item #12",
        "eCourts CNR: MPGW010049282024",
      ],
    },
    {
      title: "MoneyMath.kt",
      app: "KaamKram & JewelBill",
      code: `// Value class ensuring ZERO memory allocation overhead
@JvmInline
value class Paise(val amount: Long) : Comparable<Paise> {
    operator fun plus(other: Paise) = Paise(amount + other.amount)
    operator fun minus(other: Paise) = Paise(amount - other.amount)
    operator fun times(factor: Int) = Paise(amount * factor)

    // Calculates GST with integer rounding
    fun calculateGst(gstRatePercent: Int): Paise {
        val taxPaise = (amount * gstRatePercent + 50) / 100
        return Paise(taxPaise)
    }

    // Formatted strictly in standard Indian Numbering (₹1,23,456.78)
    fun toIndianRupeeString(): String {
        val rupees = amount / 100
        val paise = amount % 100
        val formattedRupees = formatIndianGrouping(rupees)
        return "₹$formattedRupees.\${paise.toString().padStart(2, '0')}"
    }
}`,
      previewTitle: "KaamKram Cashflow",
      previewStatus: "Zero Fractional Drift",
      previewItems: [
        "AC Compressor Work: ₹4,850.00",
        "Copper Pipe 5m: ₹1,650.00",
        "GST 18%: ₹1,170.00",
        "Total Settled: ₹7,670.00 (UPI)",
      ],
    },
    {
      title: "HandLandmarker.kt",
      app: "SkyCanvas · Vision GPU",
      code: `// MediaPipe Hands Vision Pipeline on GPU Delegate
class HandLandmarkerHelper(
    private val context: Context,
    private val onResult: (HandLandmarkerResult, MPImage) -> Unit
) {
    fun setupLandmarker() {
        val baseOptions = BaseOptions.builder()
            .setDelegate(Delegate.GPU) // Sub-15ms on mobile hardware
            .setModelAssetPath("hand_landmarker.task")
            .build()

        val options = HandLandmarker.HandLandmarkerOptions.builder()
            .setBaseOptions(baseOptions)
            .setMinHandDetectionConfidence(0.6f)
            .setNumHands(1)
            .setRunningMode(RunningMode.LIVE_STREAM)
            .setResultListener { result, image -> onResult(result, image) }
            .build()

        handLandmarker = HandLandmarker.createFromOptions(context, options)
    }
}`,
      previewTitle: "SkyCanvas Mid-Air Engine",
      previewStatus: "Inference: 11ms on GPU",
      previewItems: [
        "Landmarks: 21 3D Points Tracked",
        "Index Fingertip: (x: 0.428, y: 0.612)",
        "Air Stroke: Brush #3DDC84",
        "Voice State: Ready ('Clear', 'Save')",
      ],
    },
  ];

  const current = SNIPPETS[activeCodeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="relative py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-android text-xs font-mono uppercase tracking-widest mb-6">
            <Code2 className="w-3.5 h-3.5" />
            <span>05 · Real Implementation Code</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
                Production Kotlin & Compose Codebase
              </h2>
              <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-3 font-sans">
                Real excerpts from live commercial applications showing hardware keystore cryptographic sealing, integer paise value classes, and GPU vision pipelines.
              </p>
            </div>
          </div>
        </Reveal>

        {/* macOS IDE Window + Live Mini Phone Preview */}
        <Reveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* IDE Window (8 Cols) */}
            <div className="lg:col-span-8 rounded-3xl bg-[#070913] border border-white/15 overflow-hidden shadow-2xl flex flex-col">
              {/* IDE Top Bar */}
              <div className="px-5 py-3.5 bg-surface-elevated border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-mono text-typography-muted ml-3">
                    Android Studio Ladybug · Kotlin 2.0.21
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface border border-white/10 text-xs font-mono text-typography-secondary hover:text-typography-primary hover:border-white/20 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-android" />
                      <span className="text-accent-android">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* IDE File Tabs */}
              <div className="flex bg-[#0A0D18] border-b border-white/5 overflow-x-auto">
                {SNIPPETS.map((snip, i) => (
                  <button
                    key={snip.title}
                    onClick={() => setActiveCodeTab(i)}
                    className={`px-4 py-2.5 text-xs font-mono font-medium flex items-center gap-2 border-r border-white/5 transition-colors whitespace-nowrap ${
                      activeCodeTab === i
                        ? "bg-[#070913] text-accent-android border-t-2 border-t-accent-android"
                        : "text-typography-muted hover:text-typography-primary"
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>{snip.title}</span>
                  </button>
                ))}
              </div>

              {/* Code Pre Block */}
              <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-typography-primary overflow-x-auto flex-1 bg-[#05070E]">
                <pre>
                  <code>{current.code}</code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-5 py-2 bg-surface border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-typography-muted">
                <span>{current.app}</span>
                <span className="text-accent-android flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-android animate-pulse" />
                  <span>Build: SUCCESSFUL (0 errors)</span>
                </span>
              </div>
            </div>

            {/* Live Mini Phone Preview (4 Cols) */}
            <div className="lg:col-span-4 rounded-3xl bg-[#0B0F1C] border border-white/15 p-6 flex flex-col justify-between shadow-2xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-android uppercase">
                    <Smartphone className="w-4 h-4" />
                    <span>Live Hardware Output</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-accent-android animate-ping" />
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/10 flex flex-col gap-2">
                  <div className="text-xs font-heading font-bold text-typography-primary">
                    {current.previewTitle}
                  </div>
                  <div className="text-[11px] font-mono text-accent-android">
                    {current.previewStatus}
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="text-[10px] font-mono text-typography-muted uppercase tracking-wider">
                    Executed State:
                  </div>
                  {current.previewItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface border border-white/5 text-xs font-mono text-typography-primary flex items-center justify-between"
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-typography-muted">
                <span>Real-Time Kotlin Engine</span>
                <span className="text-accent-cyan">0ms Latency</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
