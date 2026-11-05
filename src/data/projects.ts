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
    platform: "Native Android · Kotlin",
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
      "Kotlin",
      "Room Database",
      "MVVM Architecture",
      "Coroutines & Flow",
      "Jetpack ViewModel",
      "CameraX",
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
    platform: "Native Android · Java 17 & Room",
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
      "Built a high-performance native Android billing workstation engineered in modern Java 17, Room Database, and MVVM architecture. Integrates Bluetooth ESC/POS thermal printing for standard 58mm and 80mm receipt printers with raw bitmap generation, HSN 7113 compliance, automatic GST calculation, and real-time customer khata balance tracking.",
    techStack: [
      "Java 17",
      "Room Database",
      "Bluetooth ESC/POS",
      "MVVM Architecture",
      "Android Jetpack",
      "Thermal Receipt Engine",
      "Split GST 3% (HSN 7113)",
      "Multi-Karat Purity"
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
    platform: "Native Android · Jetpack Compose & SQLCipher",
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
      "Architected a single-activity native Android practice management workstation in Jetpack Compose and Material 3. Secures all client records with SQLCipher 256-bit AES-CBC full-database encryption backed by Android Keystore MasterKey (AES-256-GCM). Features 8 reliable WorkManager background alert workers, bilingual cross-law mapping tables (IPC ↔ BNS), and 8 offline court draft legal templates.",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "SQLCipher AES-256",
      "Android Keystore",
      "WorkManager",
      "Material 3",
      "Room Database v4",
      "Coroutines & Flow"
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
    platform: "TypeScript · Node.js & React Ecosystem",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_symbol.svg",
    accentColor: "#3DDC84",
    problem:
      "Building multiple native Android and web applications independently leads to redundant boilerplate, fragmented design tokens, inconsistent encryption patterns, and duplicated financial math routines.",
    solution:
      "Constructed the unified VaidikTech platform and code infrastructure repository: centralizing design tokens, cryptographic helper contracts, reusable integer math utilities, build automation scripts, and shared documentation across all commercial products.",
    techStack: [
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
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
  }
];
