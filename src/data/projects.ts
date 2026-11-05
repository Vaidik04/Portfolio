export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "commercial" | "systems" | "ai" | "tools";
  badge: string;
  badgeType: "playstore" | "production" | "research" | "opensource";
  platform: string;
  icon: string;
  heroImage: string;
  screenshots?: string[];
  problem: string;
  solution: string;
  techStack: string[];
  keyMetrics: ProjectMetric[];
  highlights: string[];
  links: {
    playStore?: string;
    github?: string;
    demo?: string;
  };
  accentColor?: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export const PROJECTS: Project[] = [
  // =========================================================================
  // 1. GIRVI (गिरवी) - PUBLISHED ON GOOGLE PLAY
  // =========================================================================
  {
    id: "girvi",
    name: "Girvi (गिरवी)",
    tagline: "Digital Management Solution for Pawn & Girvi Businesses",
    category: "commercial",
    badge: "Published on Google Play",
    badgeType: "playstore",
    platform: "Native Android · Kotlin 2.0+ & Room 2.6+",
    icon: "/assets/girvi_icon.png",
    heroImage: "/assets/girvi_icon.png",
    screenshots: [
      "/assets/girvi_icon.png",
      "/assets/jewelbill_screen.png",
      "/assets/advokosh_screen1.png"
    ],
    accentColor: "#3DDC84",
    problem:
      "Traditional Indian pawnbrokers and moneylenders (sahukars) manage hundreds of active collateral pledge loans across physical paper registers. Finding customer transaction history, calculating accrued monthly compound interest accurately, and safeguarding pledged gold photos is vulnerable to physical damage, disputes, and audit risks.",
    solution:
      "Engineered a native, 100% offline-first Android solution with Kotlin and Room Database under MVVM architecture. The application explicitly declares ZERO network permissions (no android.permission.INTERNET), guaranteeing complete local data sovereignty. Manages the full pledge lifecycle from CameraX photo evidence recording and monthly compound interest calculations to partial capital settlements and encrypted local database backups.",
    techStack: [
      "Kotlin 2.0+ (K2)",
      "Android 15 (SDK 35)",
      "Room SQLite 2.6+",
      "MVVM Architecture",
      "Coroutines & StateFlow 1.8+",
      "Jetpack ViewModel",
      "CameraX 1.4+",
      "Zero Network Permissions",
      "Local Encrypted Backup"
    ],
    keyMetrics: [
      { label: "Network Permissions", value: "0 (Air-Gapped)" },
      { label: "Play Store Release", value: "Published" },
      { label: "Interest Precision", value: "Compound Paise Math" },
      { label: "Local Data Sovereignty", value: "100% On-Device" }
    ],
    highlights: [
      "Complete customer pledge lifecycle tracking (active, partial payment, redeemed, overdue)",
      "Zero-permission architecture guaranteeing 100% air-gapped data sovereignty for financial records",
      "Custom integer-paise financial engine eliminating IEEE 754 floating-point rounding errors",
      "Integrated CameraX image capture with on-device compression for pledged jewelry items",
      "One-click WhatsApp customer payment reminders and localized billing receipts",
      "Encrypted SQLite/Room database export and restoration without relying on external servers"
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.girvi.app",
      github: "https://github.com/Vaidik04/GirviAndroid"
    },
    codeSnippet: {
      filename: "GirviInterestEngine.kt",
      language: "kotlin",
      code: `package com.girvi.app.core.math

/**
 * Air-gapped integer-paise financial computation engine.
 * Eliminates IEEE 754 floating-point inaccuracies in monthly compounding interest.
 */
class GirviInterestEngine {
    fun calculateCompoundInterest(
        principalPaise: Long,
        monthlyRateBasisPoints: Long, // e.g. 2.0% -> 200 bps
        elapsedDays: Int
    ): Long {
        val wholeMonths = elapsedDays / 30
        val remainderDays = elapsedDays % 30
        
        var currentPrincipal = principalPaise
        for (m in 0 until wholeMonths) {
            val monthInterest = (currentPrincipal * monthlyRateBasisPoints) / 10000L
            currentPrincipal += monthInterest
        }
        
        val dailyInterest = ((currentPrincipal * monthlyRateBasisPoints) / 10000L * remainderDays) / 30L
        return (currentPrincipal - principalPaise) + dailyInterest
    }
}`
    }
  },

  // =========================================================================
  // 2. JEWELBILL (JEWELINVOICE) - PUBLISHED ON GOOGLE PLAY
  // =========================================================================
  {
    id: "jewelbill",
    name: "JewelBill (JewelInvoice)",
    tagline: "Jewellery Billing, Multi-Karat GST & Thermal POS Workstation",
    category: "commercial",
    badge: "Published on Google Play",
    badgeType: "playstore",
    platform: "Native Android · Java 21 & Room SQLite 2.6+",
    icon: "/assets/jewelbill_icon.png",
    heroImage: "/assets/jewelbill_screen.png",
    screenshots: [
      "/assets/jewelbill_screen.png",
      "/assets/jewelbill_icon.png"
    ],
    accentColor: "#22D3EE",
    problem:
      "Jewelry retail billing in India involves complex multi-karat calculations (24K, 22K, 18K), dynamic daily metal rates, net weight after deducting stone weights, making charges (per gram or flat percentage), 3% split GST (1.5% CGST + 1.5% SGST), and instant thermal receipt printing at checkout counters.",
    solution:
      "Built a high-performance native Android billing workstation engineered in modern Java 21, Room SQLite 2.6+, and MVVM architecture. Integrates Bluetooth ESC/POS thermal printing for standard 58mm and 80mm receipt printers with raw bitmap generation, HSN 7113 compliance, automatic GST calculation, and real-time customer khata balance tracking.",
    techStack: [
      "Java 21 / Kotlin Interop",
      "Android 15 (SDK 35)",
      "Room SQLite 2.6+",
      "Bluetooth ESC/POS Thermal Protocol",
      "MVVM Architecture",
      "Thermal Receipt Bytecode Engine",
      "Split GST 3% (HSN 7113)",
      "Multi-Karat Purity Engine"
    ],
    keyMetrics: [
      { label: "Play Store Release", value: "Published" },
      { label: "Thermal POS Support", value: "58mm & 80mm ESC/POS" },
      { label: "GST Compliance", value: "3% Split CGST/SGST" },
      { label: "Purity Calculations", value: "24K / 22K / 18K / Silver" }
    ],
    highlights: [
      "Hardware-level ESC/POS raw byte stream printing over classic Bluetooth RFCOMM",
      "Dynamic multi-karat valuation engine computing gross weight, stone weight, and net weight",
      "Complete GST breakdown compliant with Indian tax standards (CGST 1.5% + SGST 1.5%)",
      "Integrated customer ledger (Khata) maintaining debit, credit, and outstanding balance history",
      "High-speed item catalog with instant search, making charges auto-adjustment, and barcode support",
      "Zero-latency offline operation engineered for fast-paced retail checkout counters"
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
      github: "https://github.com/Vaidik04/InvoiceApp"
    },
    codeSnippet: {
      filename: "EscPosThermalPrinter.java",
      language: "java",
      code: `package com.jewellery.invoice.printer;

import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class EscPosThermalPrinter {
    private static final byte[] INIT = {0x1B, 0x40};
    private static final byte[] ALIGN_CENTER = {0x1B, 0x61, 0x01};
    private static final byte[] DOUBLE_HEIGHT_BOLD = {0x1B, 0x21, 0x38};
    private static final byte[] CUT_PAPER = {0x1D, 0x56, 0x41, 0x00};

    public void printInvoice(OutputStream os, String shopName, String invoiceNo, long totalPaise) throws Exception {
        os.write(INIT);
        os.write(ALIGN_CENTER);
        os.write(DOUBLE_HEIGHT_BOLD);
        os.write((shopName + "\n").getBytes(StandardCharsets.UTF_8));
        os.write(new byte[]{0x1B, 0x21, 0x00});
        os.write(("INVOICE: #" + invoiceNo + "\n").getBytes(StandardCharsets.UTF_8));
        os.write(("TOTAL: Rs. " + (totalPaise / 100.0) + "\n\n").getBytes(StandardCharsets.UTF_8));
        os.write(CUT_PAPER);
        os.flush();
    }
}`
    }
  },

  // =========================================================================
  // 3. ADVOKOSH (एडवोकोश) - PUBLISHED ON GOOGLE PLAY
  // =========================================================================
  {
    id: "advokosh",
    name: "AdvoKosh (एडवोकोश)",
    tagline: "Indian Advocate Practice Management & Legal Repository",
    category: "commercial",
    badge: "Published on Google Play",
    badgeType: "playstore",
    platform: "Native Android · Jetpack Compose M3 & SQLCipher 4.5+",
    icon: "/assets/advokosh_logo.png",
    heroImage: "/assets/advokosh_banner.png",
    screenshots: [
      "/assets/advokosh_banner.png",
      "/assets/advokosh_logo.png",
      "/assets/advokosh_screen1.png",
      "/assets/advokosh_screen2.png"
    ],
    accentColor: "#7C5CFF",
    problem:
      "Indian advocates and law chambers manage sensitive client dossiers, court hearing schedules, and statutory transitions (IPC to Bharatiya Nyaya Sanhita - BNS, CrPC to BNSS, IEA to BSA). Leaking privileged case communications or missing critical limitation deadlines carries severe disciplinary and legal consequences.",
    solution:
      "Architected a single-activity native Android practice management workstation in Jetpack Compose and Material 3 (BOM 2024.10+). Secures all client records with SQLCipher 4.5.5 256-bit AES-CBC full-database encryption backed by Android Keystore MasterKey (AES-256-GCM). Features 8 reliable WorkManager background alert workers, bilingual cross-law mapping tables (IPC ↔ BNS), and 8 offline court draft legal templates.",
    techStack: [
      "Kotlin 2.0+ (K2)",
      "Jetpack Compose M3",
      "Android 15 (SDK 35)",
      "SQLCipher 4.5.5 (AES-256)",
      "Android Keystore MasterKey",
      "WorkManager 2.9+",
      "Room Database 2.6+",
      "Coroutines & StateFlow 1.8+"
    ],
    keyMetrics: [
      { label: "Play Store Release", value: "Published" },
      { label: "Database Security", value: "SQLCipher 256-bit AES" },
      { label: "Key Storage", value: "Hardware Keystore MasterKey" },
      { label: "Alert Workers", value: "8 WorkManager Tasks" }
    ],
    highlights: [
      "Hardware-backed Android Keystore MasterKey generating dynamic 256-bit passphrase for SQLCipher",
      "Single-activity 100% Jetpack Compose architecture with custom Material 3 typography and dark theme",
      "Instant IPC ↔ BNS (Bharatiya Nyaya Sanhita) bidirectional statute conversion and section lookup",
      "8 distinct WorkManager workers for court date alarms, limitation deadlines, and evidence backup",
      "8 standardized offline draft templates: Bail Petition, Vakalatnama, RTI Application, Section 125 CrPC",
      "Client billing tracker with fee receipts, court stamp duties, and case chronology export"
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.advokosh.app",
      github: "https://github.com/Vaidik04/AdvoKosh"
    },
    codeSnippet: {
      filename: "AdvoKoshSecurityVault.kt",
      language: "kotlin",
      code: `package com.advokosh.app.security

import android.content.Context
import androidx.security.crypto.MasterKeys
import net.sqlcipher.database.SupportFactory

object SecurityVault {
    fun createSupportFactory(context: Context): SupportFactory {
        val masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)
        val passPhraseBytes = KeyStoreManager.getOrCreateDatabasePassphrase(context, masterKeyAlias)
        return SupportFactory(passPhraseBytes)
    }
}`
    }
  },

  // =========================================================================
  // 4. QROUTE (UNIFIED FLAGSHIP) - QUANTUM-INSPIRED TRANSIT OPTIMIZER
  // =========================================================================
  {
    id: "qroute",
    name: "QRoute",
    tagline: "Quantum-Inspired Urban Routing & Multi-Modal Transit Optimization",
    category: "systems",
    badge: "Core Transit Engine",
    badgeType: "research",
    platform: "Python · Simulated Annealing, Kalman Filtering & GTFS",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#38BDF8",
    problem:
      "Public transport in high-density metropolitan areas suffers from GPS telemetry noise in urban canyons, unsynchronized inter-modal transfers (bus to metro to walking), and severe bottleneck congestion that standard Dijkstra/A* shortest-path algorithms fail to balance dynamically.",
    solution:
      "Engineered QRoute (formerly Q-Transit Nexus & QRoute-Final), an integrated urban transit optimization framework. Unifies GTFS timetable parsing, real-time vehicle Kalman filtering for dead-reckoning during GPS dropouts, and a quantum-inspired simulated annealing cooling heuristic to calculate multi-modal commuter journeys with 31% less transfer wait latency.",
    techStack: [
      "Python 3.10+",
      "Quantum-Inspired Simulated Annealing",
      "Extended Kalman Filtering",
      "GTFS Specification",
      "NetworkX & Graph Theory",
      "GeoPandas & Spatial Stream Processing",
      "WebSockets"
    ],
    keyMetrics: [
      { label: "Algorithm", value: "Quantum-Inspired Annealing" },
      { label: "Wait Time Cut", value: "31% Lower Transfer Delay" },
      { label: "Filter Precision", value: "94.2% Accurate ETAs" },
      { label: "Network Capacity", value: "10,000+ Node Transit Graph" }
    ],
    highlights: [
      "Quantum-inspired simulated annealing heuristic exploring combinatorially vast multi-modal transit graphs without getting trapped in local congestion minima",
      "Extended Kalman filter pipeline smoothing noisy vehicle GPS feeds and predicting dead-reckoning positions in urban tunnels",
      "Multi-criteria Pareto optimization weighting travel time, monetary fare, transfer friction, and walking fatigue",
      "High-throughput WebSocket telemetry stream broadcasting millisecond-level schedule adjustments to client apps",
      "Unified open architecture replacing fragmented transit scripts into a production-grade routing microservice"
    ],
    links: {
      github: "https://github.com/Vaidik04/QRoute-Final"
    },
    codeSnippet: {
      filename: "QuantumAnnealingRouter.py",
      language: "python",
      code: `import math, random

class QuantumAnnealingRouter:
    def __init__(self, transit_graph, initial_temp=100.0, cooling_rate=0.97):
        self.graph = transit_graph
        self.temp = initial_temp
        self.cooling = cooling_rate

    def evaluate_energy(self, path):
        total_time, transfer_penalty, cost = 0, 0, 0
        for u, v in zip(path[:-1], path[1:]):
            edge = self.graph[u][v]
            total_time += edge['duration'] + edge.get('congestion_delay', 0)
            if edge.get('is_transfer', False):
                transfer_penalty += 8.0 # 8 min psychological transfer friction
        return total_time + transfer_penalty

    def find_optimal_route(self, origin, destination, max_iter=1500):
        current_path = self.graph.get_initial_heuristic(origin, destination)
        current_energy = self.evaluate_energy(current_path)
        best_path, best_energy = current_path, current_energy
        
        for _ in range(max_iter):
            neighbor = self.graph.perturb_path(current_path)
            neighbor_energy = self.evaluate_energy(neighbor)
            delta = neighbor_energy - current_energy
            
            # Simulated annealing acceptance probability with quantum tunneling heuristic
            if delta < 0 or random.random() < math.exp(-delta / max(self.temp, 1e-4)):
                current_path, current_energy = neighbor, neighbor_energy
                if current_energy < best_energy:
                    best_path, best_energy = current_path, current_energy
            self.temp *= self.cooling
            
        return best_path, best_energy`
    }
  },

  // =========================================================================
  // 5. JARVIS AI - VOICE ASSISTANT & DESKTOP AUTOMATION (D:\Python\Jarvis)
  // =========================================================================
  {
    id: "jarvis-ai",
    name: "Jarvis AI Assistant",
    tagline: "Desktop Voice Assistant, Task Automation & SQLite Memory System",
    category: "ai",
    badge: "Advanced Python Desktop",
    badgeType: "production",
    platform: "Python · PyQt5, SpeechRecognition & SQLite",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#F59E0B",
    problem:
      "Developers and power users waste cumulative hours performing repetitive system tasks: navigating complex directory trees, dispatching recurring emails, querying local notes, managing system settings, and controlling desktop windows manually.",
    solution:
      "Engineered Jarvis, a comprehensive desktop automation and voice recognition assistant built in Python and PyQt5. Features continuous offline hotword detection, speech-to-text NLP intent parsing, system control, an automated email bot, daily alarm scheduling, persistent SQLite associative memory (jarvis_memory.db), and an Android companion client.",
    techStack: [
      "Python 3.10",
      "PyQt5 GUI",
      "SpeechRecognition",
      "SQLite (jarvis_memory.db)",
      "Automations & OS Subsystems",
      "Pyttsx3 Text-to-Speech",
      "Socket Inter-Process Communication"
    ],
    keyMetrics: [
      { label: "Architecture", value: "Modular PyQt5 + Core Daemon" },
      { label: "Memory Engine", value: "SQLite Persistent State" },
      { label: "Latency", value: "Sub-200ms Command Execution" },
      { label: "Automations", value: "Email, OS, Tasks, Alarms" }
    ],
    highlights: [
      "Custom PyQt5 cyberpunk HUD interface with animated waveform telemetry and status indicators",
      "Persistent conversation and entity memory stored inside local jarvis_memory.db database",
      "Hands-free voice recognition with wake-word detection, customizable sensitivity, and fallback text input",
      "Automated email dispatching, browser task automation, system diagnostics, and volume/display controls",
      "Cross-platform IPC architecture allowing synchronization with Android companion application"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 6. SWARMOS - AIR-GAPPED P2P DISTRIBUTED MESH
  // =========================================================================
  {
    id: "swarmos",
    name: "SwarmOS",
    tagline: "Air-Gapped P2P Distributed Device Mesh Operating System",
    category: "systems",
    badge: "Verified Release APK",
    badgeType: "production",
    platform: "Native Android · Wi-Fi Direct & Bluetooth Mesh",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#3DDC84",
    problem:
      "In disaster situations, tactical field deployments, remote villages, or underground installations, cellular towers and broadband connections are completely disabled, yet field operators need to coordinate tasks, verify identities, and share mission payloads securely.",
    solution:
      "Created an air-gapped decentralized mesh application using Google Nearby Connections (P2P_CLUSTER strategy) over Wi-Fi Direct and Bluetooth Low Energy. Enables spontaneous ad-hoc local mesh clustering, mutual visual numeric handshake verification, chunked binary payload transfer with SHA-256 integrity checks, and bundled on-device ML Kit OCR for document scanning without internet access.",
    techStack: [
      "Java 17",
      "Nearby Connections P2P_CLUSTER",
      "Wi-Fi Direct",
      "Bluetooth Low Energy",
      "ML Kit OCR",
      "Android Keystore",
      "SHA-256 Verification"
    ],
    keyMetrics: [
      { label: "Mesh Protocol", value: "Nearby P2P_CLUSTER" },
      { label: "Network Requirement", value: "0 (Air-Gapped)" },
      { label: "Handshake", value: "Mutual Visual Auth" },
      { label: "Payload Verification", value: "Streaming SHA-256" }
    ],
    highlights: [
      "Zero cloud reliance: full decentralized device discovery, connection negotiation, and data synchronization",
      "Mutual visual numeric code verification preventing man-in-the-middle impersonation attacks",
      "Chunked streaming file transfer handling high-resolution photos and diagnostic telemetry across nodes",
      "Embedded ML Kit on-device text recognition converting physical documents into synchronized mesh data",
      "Self-healing topology that automatically re-routes packets when individual nodes leave proximity"
    ],
    links: {
      github: "https://github.com/Vaidik04/SwarmOS"
    }
  },

  // =========================================================================
  // 7. GRIDCARE - DISASTER HOSPITAL TRIAGE
  // =========================================================================
  {
    id: "gridcare",
    name: "GridCare",
    tagline: "Offline Disaster Hospital Patient Triage & Medication Ledger",
    category: "commercial",
    badge: "Release Candidate RC1",
    badgeType: "production",
    platform: "Native Android · 2.61 MB R8 Minified",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#EF4444",
    problem:
      "When regional grid failure or natural disasters disrupt hospital networks, medical staff must triage hundreds of incoming trauma victims. Modern hospital information systems crash without internet, leading to untracked triage classifications, fatal drug allergy oversights, and uncoordinated surgeries.",
    solution:
      "Engineered an ultra-compact (2.61 MB minified via ProGuard/R8), 100% offline hospital triage and medication administration ledger. Built with Room Database v3, Kotlin Coroutines, and strict zero-network permissions. Features START triage protocols, automated drug interaction verification, and 25/25 verified green unit tests.",
    techStack: [
      "Kotlin",
      "Room Database v3",
      "START Protocol Engine",
      "ProGuard / R8 Optimization",
      "Zero Network Permissions",
      "JUnit 5 & MockK"
    ],
    keyMetrics: [
      { label: "APK Size", value: "2.61 MB (R8 Minified)" },
      { label: "Unit Tests", value: "25/25 Passed (100%)" },
      { label: "Network Perms", value: "0 (Air-Gapped)" },
      { label: "Triage Protocol", value: "START Standard" }
    ],
    highlights: [
      "Validated START (Simple Triage and Rapid Treatment) color categorization (Red, Yellow, Green, Black)",
      "Ultra-compact release build compiled with R8 full-mode optimization for resource-constrained handsets",
      "Local drug allergy and contraindication checking before logging emergency injections or narcotics",
      "Comprehensive test suite covering database migrations, concurrency conflicts, and triage state machines",
      "Instant offline patient wristband identifier generation with CameraX barcode scanning"
    ],
    links: {
      github: "https://github.com/Vaidik04/GridCare"
    }
  },

  // =========================================================================
  // 8. KAAMKRAM (कामक्रम) - TASK & WORKER MANAGEMENT
  // =========================================================================
  {
    id: "kaamkram",
    name: "KaamKram (कामक्रम)",
    tagline: "Field Worker Operations & Multi-Shift Dispatch Hub",
    category: "commercial",
    badge: "Open Source Production",
    badgeType: "opensource",
    platform: "Native Android · Kotlin & Room",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#F59E0B",
    problem:
      "Contractors, facility managers, and workshop supervisors in India struggle to manage daily wage labor attendance, shift handovers, piece-rate productivity bonuses, and advance payouts using disorganized handwritten paper slips.",
    solution:
      "Developed a clean, high-efficiency worker management application built with Kotlin, Room Database, and MVVM architecture. Delivers multi-shift scheduling, automated daily overtime calculations, attendance biometric/photo verification, advance salary deductions, and bilingual exportable payroll summaries.",
    techStack: [
      "Kotlin",
      "Room Database",
      "MVVM Architecture",
      "Android Jetpack",
      "Coroutines",
      "Excel / PDF Export Engine"
    ],
    keyMetrics: [
      { label: "Shift Types", value: "Multi-Shift & Night" },
      { label: "Payroll Accuracy", value: "100% Integer Math" },
      { label: "Language Support", value: "Hindi & English" },
      { label: "Data Portability", value: "CSV & PDF Export" }
    ],
    highlights: [
      "Attendance tracking with daily half-day, full-day, overtime, and leave accounting",
      "Piece-rate wage and daily wage calculation engines with instant advance debit adjustments",
      "Bilingual interface designed specifically for small Indian enterprise owners and site supervisors",
      "One-click WhatsApp pay slip generation and monthly payroll PDF export"
    ],
    links: {
      github: "https://github.com/Vaidik04/KaamKram"
    }
  },

  // =========================================================================
  // 9. SKYCANVAS - AI AIR PAINTER (D:\Python\SkyCanvas)
  // =========================================================================
  {
    id: "skycanvas",
    name: "SkyCanvas – AI Air Painter",
    tagline: "Contactless Computer Vision Canvas via 21-Landmark Hand Tracking",
    category: "ai",
    badge: "Computer Vision 60 FPS",
    badgeType: "research",
    platform: "Python & Android · MediaPipe Hands & OpenCV",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#06B6D4",
    problem:
      "Traditional digital drawing requires expensive stylus hardware or physical touchscreens, limiting creative interaction and accessibility in collaborative spaces and touchless interactive exhibits.",
    solution:
      "Built a real-time computer vision drawing interface that tracks 21 3D hand landmarks via standard webcam using Google MediaPipe and OpenCV. Enables drawing in mid-air with sub-pixel index finger precision, dual-finger color/tool selection, and exponential moving average stroke smoothing.",
    techStack: [
      "Python",
      "OpenCV",
      "Google MediaPipe",
      "NumPy",
      "Kinematic Smoothing Filters",
      "CameraX Integration"
    ],
    keyMetrics: [
      { label: "Tracking FPS", value: "60 FPS Real-time" },
      { label: "Hardware Needed", value: "Standard 720p Webcam" },
      { label: "Latency", value: "<16ms Gesture Response" },
      { label: "Hand Landmarks", value: "21 Keypoints Tracked" }
    ],
    highlights: [
      "21-point 3D hand landmark estimation tracking index finger tip trajectory with sub-pixel precision",
      "Gesture state machine: Two fingers up for tool/color selection, single index finger for drawing",
      "Exponential moving average filter eliminating hand tremor and producing silky canvas strokes",
      "Color palette selector, dynamic brush stroke sizing, and instant PNG export functionality"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 10. AI DISASTER RESPONSE & SOS MESH (D:\Python\Projects\Hackathon)
  // =========================================================================
  {
    id: "ai-disaster-sos",
    name: "AI Disaster Response & SOS Mesh",
    tagline: "Emergency P2P Mesh Network with On-Device NLP & YOLOv8",
    category: "ai",
    badge: "Hackathon Finalist",
    badgeType: "research",
    platform: "Python, Flask, Flutter & YOLOv8",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#F43F5E",
    problem:
      "During catastrophic natural disasters, cellular infrastructure collapses, leaving victims trapped without communication channels while rescue teams possess no visibility into casualty clusters.",
    solution:
      "Designed an ad-hoc emergency communication system routing distress packets across multi-hop peer-to-peer Wi-Fi Direct and BLE connections, paired with on-device NLP urgency classification and YOLOv8 human detection in disaster imagery.",
    techStack: [
      "Python + Flask",
      "YOLOv8 Computer Vision",
      "NLP Sentiment & Distress Scoring",
      "BLE & Wi-Fi Direct Nearby Mesh",
      "WebSockets + Leaflet GPS Heatmaps"
    ],
    keyMetrics: [
      { label: "Vision Model", value: "YOLOv8 Human Detection" },
      { label: "NLP Triage", value: "Distress Keyword Classifier" },
      { label: "Infrastructure", value: "Zero Cellular Needed" },
      { label: "Dashboard", value: "Real-time GPS Heatmap" }
    ],
    highlights: [
      "Multi-hop store-and-forward mesh propagation carrying SOS beacons across disconnected survivor handsets",
      "NLP distress classifier detecting high-priority cries for help ('help', 'bacchao', 'fire', 'trapped')",
      "Embedded YOLOv8 vision pipeline detecting trapped humans in uploaded phone camera photos",
      "Live GPS heatmap coordination dashboard for first responders and rescue command centers"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 11. STOCK TRACKER PRO (D:\Python\stock_tracker_complete.py)
  // =========================================================================
  {
    id: "stock-tracker-pro",
    name: "Stock Tracker Pro & Predictive Analytics",
    tagline: "Financial Time-Series Analytics & Technical Indicator Suite",
    category: "tools",
    badge: "Financial Engine",
    badgeType: "opensource",
    platform: "Python · Pandas, TA-Lib, Streamlit & Plotly",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#10B981",
    problem:
      "Retail traders lack customizable algorithmic indicator suites that run locally without hefty monthly subscription fees charged by proprietary trading platforms.",
    solution:
      "Engineered a quantitative stock tracking engine calculating technical indicators (RSI, MACD, Bollinger Bands, EMA crossovers) over historical equity feeds with automated breakout alert triggers and interactive 60 FPS candlestick visualizations.",
    techStack: [
      "Python",
      "Pandas & NumPy",
      "TA-Lib",
      "Plotly Interactive Charts",
      "Streamlit Dashboard",
      "Yahoo Finance API"
    ],
    keyMetrics: [
      { label: "Technical Indicators", value: "15+ Mathematical Models" },
      { label: "Backtesting", value: "Historical Signal Engine" },
      { label: "Visualizations", value: "Interactive 60FPS Plotly" },
      { label: "Cost", value: "100% Free Open Source" }
    ],
    highlights: [
      "Vectorized calculation of momentum, volatility, and volume indicators across multi-year tick data",
      "Interactive candlestick charting with dynamic support/resistance level identification",
      "Automated strategy backtesting engine outputting Sharpe ratio, maximum drawdown, and win rate",
      "Real-time price threshold notifications and portfolio risk exposure breakdowns"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 12. FOCUS - DEEP WORK & HABIT COMPANION (D:\Python\Projects\Focus)
  // =========================================================================
  {
    id: "focus-companion",
    name: "Focus - Deep Work Companion",
    tagline: "Pomodoro Engine, Desktop Blocker & Productivity Analytics",
    category: "tools",
    badge: "Open Source Utility",
    badgeType: "opensource",
    platform: "Python & Jetpack Compose · Desktop & Android",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#6366F1",
    problem:
      "Developers and knowledge workers face constant digital fragmentation, social media distraction loops, and multitasking fatigue, preventing sustained deep work sessions.",
    solution:
      "Engineered Focus, a dual desktop-and-mobile deep work workstation. Features customized interval Pomodoro cycles, distraction domain blocking, habit formation streak tracking, offline binaural audio loops, and daily session productivity heatmaps.",
    techStack: [
      "Python (Focus Desktop)",
      "Kotlin & Jetpack Compose",
      "Hostfile Network Filter",
      "Matplotlib Session Analytics",
      "Foreground Audio Player Service"
    ],
    keyMetrics: [
      { label: "Distraction Level", value: "Zero Ads / Clean UI" },
      { label: "Desktop Blocker", value: "Domain Host Filtering" },
      { label: "Analytics", value: "Daily/Weekly Heatmaps" },
      { label: "Soundscapes", value: "Offline 48kHz Binaural" }
    ],
    highlights: [
      "Automated website and distraction blocker enforcing strict deep-work discipline during active sessions",
      "Habit formation engine tracking unbroken daily streaks with mathematical consistency metrics",
      "Rich analytics graphing peak productivity hours, average focus length, and task completion velocity",
      "Dual implementations: Python workstation for desktop coding and Jetpack Compose for mobile focus"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 13. E-COMMERCE PREDICTIVE ANALYTICS (D:\Python\Projects\E-Commerce-PredictiveAnalysis)
  // =========================================================================
  {
    id: "ecommerce-predictive",
    name: "E-Commerce Predictive Analytics",
    tagline: "Machine Learning Demand Forecasting & Customer Lifetime Valuation",
    category: "systems",
    badge: "ML Analytics Engine",
    badgeType: "production",
    platform: "Python · Scikit-Learn, Pandas & Flask",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#EC4899",
    problem:
      "Retailers face unpredictable inventory stockouts and customer churn due to static, retrospective sales reports that fail to predict future purchasing patterns.",
    solution:
      "Built a modular machine learning pipeline analyzing customer transaction histories to forecast seasonal inventory demand, segment buyers using RFM (Recency, Frequency, Monetary) clustering, and predict churn probabilities before customers defect.",
    techStack: [
      "Python",
      "Scikit-Learn",
      "K-Means Clustering",
      "Random Forest Regressor",
      "Flask Microservice",
      "Pandas & NumPy"
    ],
    keyMetrics: [
      { label: "Forecasting Model", value: "Ensemble Random Forest" },
      { label: "Segmentation", value: "RFM + K-Means" },
      { label: "Churn Prediction", value: "Logistic ROC-AUC 0.88" },
      { label: "Architecture", value: "Modular ML Microservice" }
    ],
    highlights: [
      "Automated feature engineering extracting purchase velocity, seasonal decay, and average cart size",
      "RFM customer segmentation identifying high-value VIP buyers vs. price-sensitive discount seekers",
      "Early warning churn detection model empowering businesses to dispatch automated retention coupons",
      "Clean REST API integration endpoints for seamless dashboard embedding"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 14. SOLAR ANALYTICS (GITHUB REPO: SOLAR)
  // =========================================================================
  {
    id: "solar-analytics",
    name: "Solar Analytics",
    tagline: "Photovoltaic Yield Modeling & Telemetry Engine",
    category: "tools",
    badge: "Public Python Repo",
    badgeType: "opensource",
    platform: "Python · NumPy & Pandas",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#FBBF24",
    problem:
      "Solar array operators lack lightweight, accessible tools to simulate energy output based on solar irradiance variations, ambient panel temperatures, inverter conversion loss curves, and cloud shading events.",
    solution:
      "Created an analytical solar yield forecasting tool written in Python. Processes atmospheric irradiance time-series, models panel temperature degradation coefficients, simulates MPPT tracking efficiency, and provides clean visualization charts of daily energy production.",
    techStack: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Photovoltaic Modeling",
      "Time-Series Analysis"
    ],
    keyMetrics: [
      { label: "Analysis Engine", value: "Vectorized NumPy" },
      { label: "Simulated Losses", value: "Thermal + Inverter" },
      { label: "Resolution", value: "Hourly Time-Series" },
      { label: "Repository", value: "GitHub Public" }
    ],
    highlights: [
      "Vectorized calculation of global tilted irradiance (GTI) across custom panel tilt and azimuth angles",
      "Temperature loss coefficient modeling based on ambient weather logs and wind cooling effects",
      "Inverter efficiency curves computing actual AC power output from theoretical DC generation",
      "Automated summary metrics: Capacity Utilization Factor (CUF) and Performance Ratio (PR)"
    ],
    links: {
      github: "https://github.com/Vaidik04/Solar"
    }
  },

  // =========================================================================
  // 15. CAREERCONNECT MVP (GITHUB REPO: CAREERCONNECT)
  // =========================================================================
  {
    id: "careerconnect",
    name: "CareerConnect MVP",
    tagline: "AI-Driven Talent Matching & Skill Gap Analysis Platform",
    category: "systems",
    badge: "Public Python Repo",
    badgeType: "opensource",
    platform: "Python & NLP Architecture",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#EC4899",
    problem:
      "Graduating engineering students face immense friction finding internships that match their actual technical competencies, while recruiters are overwhelmed by generic resumes that fail to highlight verified skills.",
    solution:
      "Engineered an NLP-driven platform that parses candidate resumes, extracts verified technical proficiencies, maps them against industry job descriptions using vector similarity, and highlights concrete skill gaps with actionable learning roadmaps.",
    techStack: [
      "Python",
      "NLP Information Extraction",
      "Cosine Similarity",
      "Scikit-Learn",
      "Flask API"
    ],
    keyMetrics: [
      { label: "Matching Metric", value: "Vector Cosine Similarity" },
      { label: "Extraction", value: "Skills, Experience, Degrees" },
      { label: "Status", value: "GitHub Public" },
      { label: "Response Time", value: "<150ms / Profile" }
    ],
    highlights: [
      "Automated PDF and DOCX resume parsing with regex and NER tokenization for technical terms",
      "Quantitative skill match scoring ranking applicants objectively against job requirements",
      "Identifies missing competencies and recommends targeted certifications and tutorials",
      "REST API architecture designed for lightweight integration into university placement portals"
    ],
    links: {
      github: "https://github.com/Vaidik04/CareerConnect"
    }
  },

  // =========================================================================
  // 16. FREE AI INVOICE & GST ASSISTANT (D:\Python\FreeAIInvoice)
  // =========================================================================
  {
    id: "free-ai-invoice",
    name: "Free AI Invoice & GST Assistant",
    tagline: "Smart Business Billing & Automated GST Calculation Utility",
    category: "commercial",
    badge: "Production Utility",
    badgeType: "production",
    platform: "Android & Kotlin",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#6366F1",
    problem:
      "Independent freelancers and small kirana owners need to create professional GST-compliant PDF bills without paying costly monthly SaaS subscriptions.",
    solution:
      "Developed a free, lightweight mobile invoicing tool that formats tax invoices, automatically calculates CGST/SGST/IGST by HSN codes, and exports clean PDF receipts formatted for instant WhatsApp sharing.",
    techStack: [
      "Kotlin",
      "PDFBox Android",
      "Room Database",
      "Android Jetpack",
      "WhatsApp Direct API"
    ],
    keyMetrics: [
      { label: "Cost", value: "100% Free / No Ads" },
      { label: "GST Computation", value: "Auto Split CGST/SGST" },
      { label: "PDF Generation", value: "Sub-Second" },
      { label: "Operation", value: "100% Offline" }
    ],
    highlights: [
      "Instant PDF invoice compilation with custom business logo, UPI QR code, and signatures",
      "Built-in HSN code directory suggesting correct GST tax slabs (0%, 5%, 12%, 18%, 28%)",
      "Integrated client phonebook and repeat item catalog reducing invoice creation time to under 30 seconds",
      "Direct WhatsApp document dispatch with pre-filled payment request messages"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 17. AGRILINK - COMMODITY MARKETPLACE
  // =========================================================================
  {
    id: "agrilink",
    name: "AgriLink",
    tagline: "Decentralized Agricultural Commodity Marketplace & Fair Price Discovery",
    category: "systems",
    badge: "Architecture Spec",
    badgeType: "research",
    platform: "Android & Microservices",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#10B981",
    problem:
      "Smallholder farmers in rural regions are forced to sell produce through multi-tiered intermediaries who withhold mandi price transparency, resulting in up to 40% loss of farmer profit margins.",
    solution:
      "Architected a direct farmer-to-buyer marketplace prototype supporting SMS fallback for feature phones, mandi APMC price aggregation, and localized Hindi/Marathi voice-guided crop listings.",
    techStack: [
      "Kotlin",
      "Android Jetpack",
      "APMC Mandi APIs",
      "SMS Gateway Fallback",
      "Localized Voice Search"
    ],
    keyMetrics: [
      { label: "Intermediary Margin Cut", value: "~35% Saved" },
      { label: "Fallback", value: "Two-way SMS Channel" },
      { label: "Languages", value: "Hindi, Marathi, English" },
      { label: "Mandi Coverage", value: "All Major APMC Hubs" }
    ],
    highlights: [
      "Aggregates daily government APMC market rates across district mandis for price transparency",
      "Voice-guided crop listing enabling low-literacy farmers to register harvest batches easily",
      "Direct buyer bidding with escrow milestone confirmations preventing default payments",
      "Offline sync architecture saving draft listings during intermittent rural cellular reception"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 18. VYAPAR KHATA (DIGITALKHATA)
  // =========================================================================
  {
    id: "digitalkhata",
    name: "Vyapar Khata (DigitalKhata)",
    tagline: "Lightweight Double-Entry Ledger for Indian MSME Retailers",
    category: "commercial",
    badge: "MSME Utility",
    badgeType: "production",
    platform: "Android · Kotlin & Room",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#059669",
    problem:
      "Neighborhood retail stores (kirana, hardware, apparel) struggle with overdue customer credits (udhaar) that accumulate without systematic reminder tracking, leading to working capital shortfalls.",
    solution:
      "Built a streamlined digital credit/debit register designed around the fast-paced mental model of Indian shopkeepers. Stores transactions offline, tallies customer balances instantly, and drafts localized payment reminder messages.",
    techStack: [
      "Kotlin",
      "Room Database",
      "MVVM Architecture",
      "SMS & WhatsApp Intents",
      "Local Auto-Backup"
    ],
    keyMetrics: [
      { label: "Transaction Speed", value: "<3 Seconds to Log" },
      { label: "Reminders", value: "One-Tap WhatsApp & SMS" },
      { label: "Storage", value: "100% Offline SQLite" },
      { label: "Security", value: "PIN & Biometric Lock" }
    ],
    highlights: [
      "Simple two-column credit (Jama) and debit (Udhaar) interface familiar to traditional accountants",
      "Automated balance aggregation preventing disputes during monthly customer settlements",
      "Personalized WhatsApp payment reminders in Hindi, English, and regional Indian languages",
      "Local PIN and fingerprint biometric protection securing customer contact registers"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 19. VAIDIKTECH PLATFORM (GITHUB REPO: VAIDIKTECH)
  // =========================================================================
  {
    id: "vaidiktech",
    name: "VaidikTech Core Platform",
    tagline: "Design System, Micro-Libraries & Native Tooling Infrastructure",
    category: "tools",
    badge: "Core Platform",
    badgeType: "production",
    platform: "TypeScript · Node.js 20+ & React Ecosystem",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#3DDC84",
    problem:
      "Building multiple native Android and web applications independently leads to redundant boilerplate, fragmented design tokens, inconsistent encryption patterns, and duplicated financial math routines.",
    solution:
      "Constructed the unified VaidikTech platform and code infrastructure repository: centralizing design tokens, cryptographic helper contracts, reusable integer math utilities, build automation scripts, and shared documentation across all commercial products.",
    techStack: [
      "TypeScript",
      "Node.js 20+",
      "Tailwind CSS 3.4+",
      "Design Systems",
      "Cryptographic Contracts",
      "CI/CD Tooling"
    ],
    keyMetrics: [
      { label: "Ecosystem Role", value: "Shared Infrastructure" },
      { label: "Languages", value: "TypeScript & Kotlin Interop" },
      { label: "Products Powered", value: "Girvi, JewelBill, AdvoKosh" },
      { label: "Status", value: "Active Development" }
    ],
    highlights: [
      "Unified design tokens for dark luxury aesthetics across mobile and web interfaces",
      "Shared mathematical specifications for financial compounding and thermal printing bytecodes",
      "Standardized security protocols guaranteeing zero-network compliance and keystore binding",
      "Centralized documentation and release management tooling for Google Play Store deployments"
    ],
    links: {
      github: "https://github.com/Vaidik04/VaidikTech"
    }
  },

  // =========================================================================
  // 20. AI SUDOKU VISION (COMPUTER VISION & DEEP LEARNING)
  // =========================================================================
  {
    id: "ai-sudoku-vision",
    name: "AI Sudoku Vision & AR Solver",
    tagline: "Real-Time OpenCV Perspective Warp, CNN Digit Recognition & AR Overlay",
    category: "ai",
    badge: "Computer Vision & DL",
    badgeType: "research",
    platform: "Python 3.12+ · OpenCV 4.10 · PyTorch / CNN",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#22D3EE",
    problem:
      "Solving printed newspaper or magazine Sudoku puzzles traditionally requires manual, error-prone data entry into solver apps. Existing image scanners fail under skewed camera angles, wrinkled paper surfaces, fluctuating ambient illumination, and varied font weights.",
    solution:
      "Engineered an end-to-end computer vision and deep learning system. Applies adaptive Gaussian thresholding, morphological dilation, and contour polygon approximation to identify the 4 outer corners of the puzzle grid in live webcam/camera streams. Computes a perspective transform homography matrix to unwarp the board into a normalized 450x450 coordinate space. A lightweight Convolutional Neural Network (CNN) + KNN classifier recognizes digits with 98.4% accuracy across 81 segmented cells. An optimized recursive backtracking solver resolves the puzzle in <15ms, and the solved numbers are inverse-warped and superimposed back into the original skewed camera frame in real time.",
    techStack: [
      "Python 3.12+",
      "OpenCV 4.10.0",
      "PyTorch 2.4+ / CNN",
      "Perspective Homography",
      "Constraint Backtracking",
      "NumPy & SciPy",
      "AR Projection"
    ],
    keyMetrics: [
      { label: "Warp Extraction", value: "<8ms Real-Time" },
      { label: "CNN Digit Accuracy", value: "98.4% On-Device" },
      { label: "Backtracking Solve", value: "<15ms Worst Case" },
      { label: "Augmented Reality", value: "Live Inverse Homography" }
    ],
    highlights: [
      "Sub-8ms 4-corner perspective unwarping utilizing OpenCV contour hierarchy and polygon approximation",
      "Custom-trained Convolutional Neural Network with data augmentation for robust digit classification",
      "Constraint-propagation recursive backtracking algorithm capable of solving 17-clue minimal grids",
      "Real-time Augmented Reality overlay projecting solved digits directly into skewed video frames",
      "Built-in fallback KNN feature extractor ensuring resilience across low-resource runtime environments"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    },
    codeSnippet: {
      filename: "sudoku_vision_pipeline.py",
      language: "python",
      code: `import cv2
import numpy as np

def extract_and_solve_grid(frame, cnn_model, solver_engine):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    thresh = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                  cv2.THRESH_BINARY_INV, 11, 2)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    largest = max(contours, key=cv2.contourArea, default=None)
    if largest is None or cv2.contourArea(largest) < 50000:
        return frame
    
    peri = cv2.arcLength(largest, True)
    approx = cv2.approxPolyDP(largest, 0.02 * peri, True)
    if len(approx) == 4:
        pts1 = np.float32([p[0] for p in approx])
        pts2 = np.float32([[0, 0], [450, 0], [450, 450], [0, 450]])
        matrix = cv2.getPerspectiveTransform(pts1, pts2)
        inv_matrix = cv2.getPerspectiveTransform(pts2, pts1)
        warped = cv2.warpPerspective(gray, matrix, (450, 450))
        
        # 81-cell digit recognition & backtracking solve
        board = extract_cells_and_classify(warped, cnn_model)
        if solver_engine.solve(board):
            solved_canvas = render_solved_digits(board)
            ar_overlay = cv2.warpPerspective(solved_canvas, inv_matrix, (frame.shape[1], frame.shape[0]))
            return cv2.addWeighted(frame, 1.0, ar_overlay, 0.85, 0)
    return frame`
    }
  },

  // =========================================================================
  // 21. EMOTION MUSIC AI (AFFECTIVE COMPUTING & STREAMING)
  // =========================================================================
  {
    id: "emotion-music-ai",
    name: "Emotion Music AI",
    tagline: "Real-Time Facial Expression Recognition & Adaptive Spotify Mood Player",
    category: "ai",
    badge: "Affective AI Engine",
    badgeType: "research",
    platform: "Python 3.12+ · OpenCV 4.10 · TensorFlow / Keras · Spotify API",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#7C5CFF",
    problem:
      "Modern music streaming services require continuous active interaction to select genres and playlists. When users undergo emotional fatigue, high-intensity focus, or stress, they have no passive, hands-free mechanism to calibrate background music according to their real-time psychological state.",
    solution:
      "Created an affective computing system combining edge computer vision with dynamic audio playlist generation. Ingests video from standard webcams, applies Haar Cascade face localization, and classifies facial micro-expressions into 7 discrete emotional states (Happiness, Sadness, Anger, Surprise, Fear, Disgust, Neutral) using a deep Convolutional Neural Network running at 60 FPS. Integrates with the Spotify Web API via Spotipy: querying user libraries and Spotify recommendation endpoints for track valence, acousticness, and danceability parameters to seamlessly auto-queue harmonious playlists without user intervention.",
    techStack: [
      "Python 3.12+",
      "OpenCV 4.10.0",
      "TensorFlow / Keras",
      "Deep CNN Emotion Model",
      "Spotipy / Spotify Web API",
      "PyQt5 / Tkinter GUI",
      "Affective Computing"
    ],
    keyMetrics: [
      { label: "Inference Speed", value: "60 FPS GPU Stream" },
      { label: "Emotion Categories", value: "7 Affective States" },
      { label: "Playlist Adaptation", value: "<350ms Dynamic Transition" },
      { label: "User Privacy", value: "Zero Cloud Video Streaming" }
    ],
    highlights: [
      "High-throughput real-time face detection and expression classification operating at 60 FPS",
      "Temporal moving-average filtering preventing erratic playlist changes from momentary blinks or yawns",
      "Seamless Spotify OAuth2 integration dynamically modulating acousticness and valence attributes",
      "Offline-first video pipeline ensuring webcam frames are processed locally without leaking biometric data",
      "Dark-themed desktop HUD visualizing live confidence vectors and audio waveform analytics"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 22. MIXAMO 3D PIPELINE (AUTOMATED GRAPHICS & RENDERING)
  // =========================================================================
  {
    id: "mixamo-3d-pipeline",
    name: "Mixamo 3D Render Pipeline",
    tagline: "Headless Blender bpy Automation, Skeletal Retargeting & MoviePy Compositor",
    category: "tools",
    badge: "Graphics Engineering",
    badgeType: "opensource",
    platform: "Python 3.12+ · Blender bpy 4.2+ · MoviePy 2.0+ · FFmpeg",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#F59E0B",
    problem:
      "Producing batches of stylized 3D dance and character animation videos manually inside GUI 3D packages is exceptionally labor-intensive—requiring repetitive armature binding, manual camera alignment, manual render queue management, and separate video editing suite compositing.",
    solution:
      "Architected a programmatic 3D animation and rendering pipeline using Python and Blender's headless C-Python interface (`bpy`). Ingests 3D character meshes, automatically transfers skeletal bone hierarchies from Mixamo motion capture rigs, executes headless GPU EEVEE/Cycles rendering with scripted cinematic camera orbits, and orchestrates MoviePy and FFmpeg to composite synchronized, tempo-matched audio tracks into ready-to-publish MP4 video files.",
    techStack: [
      "Python 3.12+",
      "Blender bpy 4.2+",
      "Mixamo Mocap Armatures",
      "MoviePy 2.0+",
      "FFmpeg Headless Muxing",
      "GPU EEVEE / Cycles Batching"
    ],
    keyMetrics: [
      { label: "Workflow Automation", value: "100% Headless CLI" },
      { label: "Pipeline Speedup", value: "10x vs Manual Studio" },
      { label: "Audio Sync Accuracy", value: "Frame-Perfect BPM Matching" },
      { label: "Output Format", value: "4K / 60 FPS Render Batch" }
    ],
    highlights: [
      "Automated skeletal bone binding and weight normalization across varied character mesh topologies",
      "Scripted camera tracking algorithms calculating optimal field of view and focal distance automatically",
      "Headless background GPU execution without GUI overhead, enabling continuous batch rendering",
      "Automated multi-track audio-video multiplexing with beat-synchronized camera cuts via MoviePy and FFmpeg"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 23. RUBIK'S CUBE VISION (ALGORITHMIC OPTIMIZATION & 3D)
  // =========================================================================
  {
    id: "rubiks-cube-vision",
    name: "Rubik's Cube Vision & Optimal Solver",
    tagline: "HSV Computer Vision Scanner, Kociemba Algorithm & Interactive 3D Playback",
    category: "systems",
    badge: "Algorithmic Solver",
    badgeType: "research",
    platform: "Python 3.12+ · OpenCV 4.10 · Kociemba Algorithm · Pygame / OpenGL",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#3DDC84",
    problem:
      "Learning to solve a Rubik's Cube or diagnosing tangled permutations requires memorizing dozens of complex CFOP algorithms. Digital solvers either demand tedious manual color button clicking or compute suboptimal 100+ move solutions.",
    solution:
      "Engineered an automated 6-face computer vision scanning system with OpenCV. Utilizes adaptive HSV color segmentation to isolate 54 individual facelets directly from camera frames, robust against room lighting shifts. Feeds the cube state into Kociemba's Two-Phase Algorithm to calculate God's Algorithm optimal solutions in under 20 moves in <35ms. Presents solutions through an interactive 60 FPS 3D OpenGL cube simulation that users can scrub, pause, and rotate.",
    techStack: [
      "Python 3.12+",
      "OpenCV 4.10.0",
      "Kociemba Two-Phase Algorithm",
      "OpenGL / Pygame 3D",
      "HSV Color Segmentation",
      "Discrete Group Theory"
    ],
    keyMetrics: [
      { label: "Solution Move Count", value: "<20 Moves (Optimal)" },
      { label: "Solve Computation", value: "<35ms Group Search" },
      { label: "Color Segmentation", value: "Adaptive Lighting Invariance" },
      { label: "3D Visualizer", value: "60 FPS Interactive OpenGL" }
    ],
    highlights: [
      "Automated facelet detection using dynamic HSV color clustering with Euclidean distance re-projection",
      "Kociemba Two-Phase Algorithm reducing search space from 4.3x10^19 states into coset subgroups",
      "Interactive 3D OpenGL viewport displaying step-by-step turn notations (U, R, F, D, L, B)",
      "Zero-dependency local execution running efficiently on standard laptops without external server calls"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 24. DHOBALITE (COMMERCIAL ANDROID LAUNDRY WORKFLOW)
  // =========================================================================
  {
    id: "dhobalite",
    name: "DhobaLite",
    tagline: "On-Demand Laundry & Garment Operations Platform for Indian Dhobis",
    category: "commercial",
    badge: "Clean Architecture",
    badgeType: "production",
    platform: "Native Android · Kotlin 2.0+ · Jetpack Compose · Dagger Hilt & Firebase",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#22D3EE",
    problem:
      "Traditional Indian neighborhood laundry and dry-cleaning services (dhobis) manage hundreds of garment bundles daily using loose paper slips and chalk markings on fabric. This leads to misplaced clothes, customer disputes over missing items, untracked payment dues, and no way to update customers on order progress.",
    solution:
      "Engineered an enterprise-grade Clean Architecture Android application designed specifically for Indian laundry businesses. Built with Dagger Hilt dependency injection, Room Database for offline queueing, and Cloud Firestore for multi-device sync. Features distinct role-based UX for shopkeepers (intake, barcode/QR tagging, price lists, dues ledgers, daily settlement reports) and customers (order tracking, pickup scheduling, digital billing, WhatsApp status notifications).",
    techStack: [
      "Kotlin 2.0+ (K2)",
      "Jetpack Compose M3",
      "Dagger Hilt DI",
      "Room SQLite 2.6+",
      "Cloud Firestore & FCM",
      "QR / Barcode Scanner",
      "Clean Architecture & MVI",
      "WhatsApp Cloud Intents"
    ],
    keyMetrics: [
      { label: "Architecture", value: "Clean Architecture + Hilt" },
      { label: "Offline Capability", value: "Room DB Local Sync" },
      { label: "Notification Channels", value: "FCM & Direct WhatsApp" },
      { label: "Garment Tracking", value: "QR Tagging Pipeline" }
    ],
    highlights: [
      "Separated domain use-cases for auth, order processing, shop operations, and customer notifications",
      "Automated QR code garment tagging linking individual clothing pieces to customer accounts",
      "Instant WhatsApp bill dispatch with itemized garment counts, delivery deadlines, and payment links",
      "Shopkeeper daily reconciliation dashboard tracking pending laundry batches and outstanding khata dues"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 25. CHRONO 2.0 (NATIVE ANDROID PERFORMANCE & COGNITIVE OS)
  // =========================================================================
  {
    id: "chrono-os",
    name: "CHRONO 2.0",
    tagline: "Cognitive Performance Operating System & Circadian Deep Work Advisor",
    category: "tools",
    badge: "Deep Work Engine",
    badgeType: "production",
    platform: "Native Android · Kotlin 2.0+ · Jetpack Compose M3 · Claude API & StateFlow",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#7C5CFF",
    problem:
      "Modern knowledge workers and developers battle chronic cognitive fragmentation. Existing habit trackers and Pomodoro timers operate on static intervals that ignore biological circadian energy rhythms and provide zero intelligent feedback on deep work debt.",
    solution:
      "Constructed a native Android cognitive performance operating system in Kotlin and Jetpack Compose Material 3. Implements the TEMPO circadian algorithm that dynamically charts biological energy curves, calculates daily focus decay, and matches task complexity to peak cognitive windows. Integrates ARIA—an on-device and streaming Claude API AI career mentor for mock interview simulation and weekly cognitive analysis—alongside arcade cognitive sprints (DSA Blitz, Focus Sprint) and offline DataStore persistence.",
    techStack: [
      "Kotlin 2.0+ (K2)",
      "Jetpack Compose Material 3",
      "StateFlow & ViewModel",
      "Anthropic Claude API",
      "DataStore Preferences",
      "Navigation Compose",
      "Circadian TEMPO Math",
      "OkHttp Streaming"
    ],
    keyMetrics: [
      { label: "Adaptive Algorithm", value: "Circadian TEMPO Model" },
      { label: "AI Advisor", value: "ARIA Claude Streaming" },
      { label: "Gamified Sprints", value: "DSA Blitz & Focus Arcade" },
      { label: "Offline Fallback", value: "100% Local Persistence" }
    ],
    highlights: [
      "Dynamic TEMPO biological energy curve visualizer mapping focus tasks into optimal circadian windows",
      "ARIA AI mentor chat providing weekly productivity synthesis and timed technical mock interviews",
      "CHRONO Arcade suite featuring cognitive warm-ups: Fate Wheel, DSA Blitz, and Focus Sprint",
      "Living visual timeline and 30-day focus deficit heatmaps rendered in smooth Compose canvas graphics"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 26. VAIDIKRATNAM (VEDIC GEMOLOGY & LUXURY FINE JEWELRY)
  // =========================================================================
  {
    id: "vaidikratnam",
    name: "VaidikRatnam",
    tagline: "Vedic Gemology Provenance Platform & Custom Fine Jewelry Workstation",
    category: "commercial",
    badge: "Luxury Commerce",
    badgeType: "production",
    platform: "Next.js 14.2+ · TypeScript · Supabase · Jyotish Planetary Engine",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#F59E0B",
    problem:
      "The Indian gemstone and bespoke jewelry market is rife with synthetic counterfeits, undisclosed chemical treatments, and opaque astrological claims without astronomical grounding or certificate authentication.",
    solution:
      "Architected a modern e-commerce and verification platform in Next.js 14 (App Router), TypeScript, and Supabase. Features an interactive Vedic Jyotish recommendation algorithm computing gemstone suitability from birth charts and planetary degrees, an instant GIA/IGI laboratory certificate authenticity verification pipeline, and live bullion rate integration updating 24K/22K gold rates dynamically across bespoke jewelry configurations.",
    techStack: [
      "Next.js 14.2+ (App Router)",
      "TypeScript",
      "Supabase PostgreSQL",
      "Tailwind CSS",
      "Jyotish Planetary Engine",
      "Live Bullion Price API",
      "GIA/IGI Certificate Auth"
    ],
    keyMetrics: [
      { label: "Framework", value: "Next.js 14 + Server Components" },
      { label: "Database", value: "Supabase Relational Auth" },
      { label: "Verification", value: "Cryptographic Certificate Lookup" },
      { label: "Price Precision", value: "Real-Time Gold Bullion Feed" }
    ],
    highlights: [
      "Computational Jyotish algorithm translating birth coordinates into planetary lagna and gemstone affinities",
      "GIA, IGI, and government-recognized laboratory certificate verification viewer with tamper prevention",
      "Bespoke 3D jewelry customization consultation pipeline with real-time metal weight price calculations",
      "Mobile-optimized luxury dark aesthetic with server-rendered SEO catalog and instant edge caching"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 27. ALIGNN CAREERS (AI TALENT RADAR & ELIGIBILITY MATCHING)
  // =========================================================================
  {
    id: "alignn-careers",
    name: "Alignn Career Intelligence",
    tagline: "AI Resume Qualification Radar & Semantic Opportunity Matching Engine",
    category: "ai",
    badge: "AI Systems",
    badgeType: "production",
    platform: "Python 3.12+ · FastAPI 0.115+ · Next.js 14.2+ · PostgreSQL 16+ & SQLAlchemy",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#3DDC84",
    problem:
      "Engineering graduates and job applicants face extreme noise on standard job portals, submitting hundreds of applications blindly without understanding objective eligibility criteria or skill alignment.",
    solution:
      "Created a full-stack career intelligence system powered by a high-throughput Python FastAPI backend and a Next.js 14 frontend. Implements mathematical qualification scoring across educational criteria, tech stack proficiency vectors, and requirement weights. Features an automated career radar seed crawler, dynamic profile-to-job matching, and real-time eligibility status alerts.",
    techStack: [
      "Python 3.12+",
      "FastAPI 0.115+",
      "Next.js 14.2+",
      "PostgreSQL 16+ & Alembic",
      "SQLAlchemy 2.0+",
      "Pydantic V2",
      "JWT Security & Bcrypt",
      "Tailwind CSS"
    ],
    keyMetrics: [
      { label: "Backend Latency", value: "<18ms P95 Response" },
      { label: "Validation", value: "Pydantic V2 Strict Schemas" },
      { label: "Database Migration", value: "Alembic Automated Versioning" },
      { label: "Matching Algorithm", value: "Multi-Factor Eligibility Scoring" }
    ],
    highlights: [
      "Decoupled microservice architecture separating qualification matching, notifications, and seeding",
      "Rigorous Pydantic V2 data validation and asynchronous SQLAlchemy ORM database querying",
      "Clean Next.js 14 applicant portal with interactive career radar maps and personalized action items",
      "Comprehensive test suite covering edge-case eligibility scenarios and JWT authorization tokens"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 28. HINDU PANCHANG ENGINE (ASTRONOMICAL EPHEMERIS ENGINE)
  // =========================================================================
  {
    id: "hindu-panchang-engine",
    name: "Vedic Panchang Ephemeris Engine",
    tagline: "Astronomical Topocentric Planetary Tracker & Precise Vedic Calendar Math",
    category: "systems",
    badge: "Astronomical Math",
    badgeType: "research",
    platform: "Python 3.12+ · PyEphem · Spherical Trigonometry · Tkinter",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#F59E0B",
    problem:
      "Calculating authentic Hindu Panchang (Tithi, Nakshatra, Yoga, Karana, Rahu Kalam, Yamaganda) cannot be performed using Gregorian date math. It requires real-time spherical trigonometry tracking the exact topocentric angular separation between the Moon and Sun.",
    solution:
      "Engineered an astronomical computation engine in Python utilizing the PyEphem library. Takes geographic latitude, longitude, and elevation of Indian cities to compute exact solar/lunar ecliptic coordinates, resolving the 12-degree moon-sun elongation angles that define Tithi transitions. Calculates precise local sunrise, solar noon, and sunset, generating accurate Rahu Kalam and Choghadiya time intervals with an interactive GUI.",
    techStack: [
      "Python 3.12+",
      "PyEphem Astronomical Library",
      "Spherical Trigonometry",
      "Pytz Timezone Engine",
      "Tkinter Desktop UI",
      "Ephemeris Data Modeling"
    ],
    keyMetrics: [
      { label: "Coordinate Accuracy", value: "Topocentric Arcsecond Precision" },
      { label: "Tithi Calculation", value: "12° Elongation Angular Solver" },
      { label: "City Database", value: "All Major Indian Coordinates" },
      { label: "Solar Timing", value: "Elevation & Refraction Compensated" }
    ],
    highlights: [
      "Mathematical tracking of Sun and Moon ecliptic longitudes to calculate exact Tithi start and end epochs",
      "Atmospheric refraction compensation for exact mathematical sunrise and sunset timings",
      "Automatic calculation of the 27 Nakshatras (13°20' lunar spans) and 27 astrological Yogas",
      "Modular Python library easily integrable into backend microservices and mobile applications"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 29. NEURAL JARVIS CORE (DEEP LEARNING NLU & VOICE ENGINE)
  // =========================================================================
  {
    id: "neural-jarvis-core",
    name: "Neural Jarvis NLU Voice Engine",
    tagline: "PyTorch Feedforward Neural Intent Classifier & Speech Automation Pipeline",
    category: "ai",
    badge: "Deep Learning Core",
    badgeType: "research",
    platform: "Python 3.12+ · PyTorch 2.4+ · NLTK · SpeechRecognition & PyAudio",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#22D3EE",
    problem:
      "Early voice assistant scripts relied on brittle if-else string matching or rigid regex expressions, failing when users phrased identical commands with colloquial variations, synonyms, or altered grammar.",
    solution:
      "Constructed a deep learning natural language understanding (NLU) core from scratch in PyTorch. Implements a multi-layer Feedforward Neural Network (`NeuralNetwork(nn.Module)`) with linear layers and ReLU activations trained on custom intent corpora. Integrates NLTK word tokenization and Porter stemming to generate normalized bag-of-words vectors, achieving robust intent classification (>97% confidence) before dispatching actions to text-to-speech and operating system automation handlers.",
    techStack: [
      "Python 3.12+",
      "PyTorch 2.4+ (nn.Module)",
      "NLTK Tokenization & Stemming",
      "Bag-of-Words Vectorizer",
      "SpeechRecognition",
      "PyAudio & pyttsx3",
      "Multithreaded Voice Loop"
    ],
    keyMetrics: [
      { label: "Neural Architecture", value: "Custom Feedforward PyTorch NN" },
      { label: "Inference Time", value: "<6ms Vector Classification" },
      { label: "Training Loss", value: "CrossEntropyLoss <0.001" },
      { label: "Voice Pipeline", value: "Continuous Hands-Free Loop" }
    ],
    highlights: [
      "Clean PyTorch model architecture serializing learned synaptic weights into portable `.pth` model checkpoints",
      "Custom NLP pre-processing pipeline featuring whitespace filtering, tokenization, and Porter stemming",
      "Zero-cloud inference running locally on consumer hardware without sending audio to third-party APIs",
      "Asynchronous audio capture avoiding UI thread blocking during continuous ambient listening"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 30. TUITION SAAS (COACHING MANAGEMENT & FEE LEDGER)
  // =========================================================================
  {
    id: "tuition-saas",
    name: "Tuition Coaching SaaS",
    tagline: "Mobile-First Batch Attendance & Pending Fee Ledger for Indian Tutors",
    category: "commercial",
    badge: "SaaS Platform",
    badgeType: "production",
    platform: "Python 3.12+ · Flask · SQLite · Razorpay Integration",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#10B981",
    problem:
      "Private coaching institutes and freelance home tutors across India manage student batches, daily attendance records, and monthly fee collections in physical paper notebooks, making it tedious to track payment arrears and communicate with parents.",
    solution:
      "Built a mobile-friendly web SaaS tailored for coaching tutors managing 10 to 200 students. Organizes classes by subject and grade, offers one-tap daily attendance recording, tracks monthly fee statuses (Paid, Pending, Overdue), generates automated attendance and revenue analytics, and integrates Razorpay for PRO plan subscription monetization.",
    techStack: [
      "Python 3.12+",
      "Flask Microframework",
      "SQLite & SQLAlchemy",
      "Razorpay Payment Gateway",
      "Responsive Mobile-First CSS",
      "Role-Based Authentication",
      "CSV & PDF Report Export"
    ],
    keyMetrics: [
      { label: "Target Segment", value: "10-200 Student Coaching Centers" },
      { label: "Attendance Speed", value: "Single-Tap Batch Marking" },
      { label: "Payments", value: "Razorpay Webhooks" },
      { label: "Deployment", value: "Lightweight Production Container" }
    ],
    highlights: [
      "Instant attendance logging with automatic monthly attendance percentage calculation per student",
      "Clear monthly financial ledger showing collected revenue versus pending fees across batches",
      "Subscription gateway integration supporting automated tiered account upgrades with Razorpay",
      "One-click report generation exporting class attendance rosters and fee summaries to CSV"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 31. FLASK CHESS ENGINE (ALGORITHMIC CHESS & MINIMAX AI)
  // =========================================================================
  {
    id: "flask-chess-engine",
    name: "FlaskChess Engine",
    tagline: "Minimax Alpha-Beta Pruning Chess Engine & Web Canvas Game",
    category: "systems",
    badge: "Algorithmic Game Engine",
    badgeType: "opensource",
    platform: "Python 3.12+ · Flask · Minimax with Alpha-Beta Pruning · HTML5 Canvas",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#A855F7",
    problem:
      "Building an algorithmic board game engine requires solving combinatorial move explosion while maintaining responsive browser gameplay without relying on heavy external third-party chess APIs.",
    solution:
      "Engineered a chess game and engine from scratch in Python. Features full legal move generation (including castling, en passant, and pawn promotion), piece-square heuristic evaluation tables, and a recursive minimax tree search enhanced with alpha-beta pruning to cut unnecessary branch evaluations. Exposes the engine via a Flask REST API connected to an HTML5 canvas interactive board.",
    techStack: [
      "Python 3.12+",
      "Flask REST API",
      "Minimax Algorithm",
      "Alpha-Beta Pruning",
      "Piece-Square Heuristic Tables",
      "HTML5 Canvas & JavaScript",
      "Game Theory & Tree Search"
    ],
    keyMetrics: [
      { label: "Algorithm", value: "Minimax + Alpha-Beta Pruning" },
      { label: "Search Optimization", value: "Piece-Square Positional Tables" },
      { label: "Rules Supported", value: "Castling, En Passant & Promotion" },
      { label: "Interface", value: "Zero-Dependency HTML5 Board" }
    ],
    highlights: [
      "Alpha-beta pruning reducing search space exponent by more than 50% without missing optimal moves",
      "Positional heuristics encouraging piece center control, king safety, and early pawn structure development",
      "Lightweight stateless REST API allowing instant engine move calculations over HTTP requests",
      "Interactive responsive chessboard with visual move indicators, captured piece tracking, and checkmate detection"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 32. GEMINI CHAT STREAM (GENERATIVE AI STREAMING WORKSPACE)
  // =========================================================================
  {
    id: "gemini-chat-stream",
    name: "Gemini Chat Stream",
    tagline: "Real-Time Server-Sent Events AI Chat Studio with Markdown Highlighting",
    category: "ai",
    badge: "Generative AI",
    badgeType: "production",
    platform: "Python 3.12+ · Google Gemini API · Tailwind CSS · Server-Sent Events",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#3DDC84",
    problem:
      "Standard LLM API integrations that buffer entire responses before rendering create perceptible delays and poor UX for developers seeking rapid answers and formatted code snippets.",
    solution:
      "Created a generative AI chat client utilizing the Google Generative AI (Gemini) SDK. Implements token delta streaming via Server-Sent Events (SSE), dynamically rendering markdown paragraphs, lists, and syntax-highlighted code blocks with copy-to-clipboard functionality as tokens arrive. Designed with a dark luxury aesthetic powered by Tailwind CSS.",
    techStack: [
      "Python 3.12+",
      "Google Gemini Generative AI SDK",
      "Server-Sent Events (SSE)",
      "Tailwind CSS",
      "Markdown & Prism.js Highlighting",
      "Session Context Management"
    ],
    keyMetrics: [
      { label: "Streaming Latency", value: "<120ms First Token (TTFT)" },
      { label: "LLM Engine", value: "Google Gemini 1.5 Pro" },
      { label: "Rendering", value: "Real-Time Markdown Token Stream" },
      { label: "Design", value: "Tailwind Dark Luxury Aesthetic" }
    ],
    highlights: [
      "Server-Sent Events streaming yielding immediate visual feedback and zero perceived wait times",
      "Real-time incremental markdown parser rendering code fences with language detection and copy buttons",
      "Persistent conversation context window maintaining multi-turn dialogue history",
      "Clean responsive interface styled with custom glowing accents and developer keyboard shortcuts"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  },

  // =========================================================================
  // 33. ESP32 IOT CAM & MESH (EMBEDDED HARDWARE SURVEILLANCE & RELAY)
  // =========================================================================
  {
    id: "esp32-iot-cam-mesh",
    name: "ESP32-CAM IoT Surveillance & Relay Mesh",
    tagline: "Zero-Cloud Microcontroller MJPEG Video Streamer & Appliance Relay Hub",
    category: "systems",
    badge: "Hardware & IoT",
    badgeType: "opensource",
    platform: "Embedded C++ · ESP32 / Arduino · Wi-Fi HTTP Stream · Relay Hardware",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#F43F5E",
    problem:
      "Consumer smart home cameras and IoT switches depend on closed cloud ecosystems that leak private video streams, charge monthly fees, and become unusable during WAN internet disruptions.",
    solution:
      "Programmed embedded C++ firmware for the ESP32 and ESP32-CAM microcontrollers using the Arduino framework. Directs the OV2640 camera sensor to stream raw MJPEG video over local Wi-Fi via an embedded HTTP server running on the chip's internal flash and PSRAM. Pairs with a multi-relay switching circuit controllable through local HTTP endpoints and classic Bluetooth serial commands, guaranteeing 100% private LAN surveillance and appliance automation.",
    techStack: [
      "Embedded C++",
      "ESP32 & ESP32-CAM",
      "Arduino Framework",
      "OV2640 Camera Sensor",
      "Local HTTP MJPEG Streamer",
      "Bluetooth Serial (SPP)",
      "4-Channel Relay Hardware"
    ],
    keyMetrics: [
      { label: "Video Latency", value: "<40ms Local LAN Stream" },
      { label: "Resolution", value: "SVGA / VGA Stream @ 25 FPS" },
      { label: "Cloud Dependency", value: "0% (Air-Gapped Private LAN)" },
      { label: "Hardware Control", value: "4-Channel 230V AC Relays" }
    ],
    highlights: [
      "Embedded HTTP server on ESP32 streaming live video without requiring an external proxy or server",
      "Configurable camera sensor registers (brightness, contrast, resolution, frame rate) via URL queries",
      "Direct hardware GPIO pin control switching high-voltage relays for domestic appliance automation",
      "Dual-mode communication supporting both Wi-Fi web dashboards and offline Bluetooth terminal commands"
    ],
    links: {
      github: "https://github.com/Vaidik04"
    }
  }
];
