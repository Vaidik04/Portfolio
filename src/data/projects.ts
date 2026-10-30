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
  keyMetrics: { label: string; value: string }[];
  highlights: string[];
  links: {
    playStore?: string;
    github?: string;
    demo?: string;
  };
}

export const PROJECTS: Project[] = [
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
    problem:
      "Traditional Indian pawnbrokers manage valuable pledge records and customer KYC across vulnerable paper ledgers, causing calculation errors and audit risks.",
    solution:
      "Engineered an offline-first Android application with Room Database under MVVM. Declares zero internet permissions for 100% sandboxed privacy with CameraX photo evidence and instant pledge searches.",
    techStack: ["Kotlin", "Room SQLite", "MVVM", "Jetpack", "CameraX", "Zero Internet"],
    keyMetrics: [
      { label: "Status", value: "Live on Play Store" },
      { label: "Privacy", value: "100% Offline" },
      { label: "Architecture", value: "MVVM + Coroutines" },
    ],
    highlights: [
      "Zero android.permission.INTERNET for sovereign financial privacy",
      "Pledge record tracking with CameraX item photo attachments",
      "Customary Indian monthly compound interest calculator",
      "Local AES-encrypted backup and restore",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.girvi.app",
      github: "https://github.com/Vaidik04/GirviAndroid",
    },
  },
  {
    id: "advokosh",
    name: "AdvoKosh (एडवोकोश)",
    tagline: "Solo Advocate Case Diary & Chamber Practice Management OS",
    category: "commercial",
    badge: "Production Chamber OS",
    badgeType: "production",
    platform: "Native Android · Jetpack Compose",
    icon: "/assets/advokosh_logo.png",
    heroImage: "/assets/advokosh_screen1.png",
    screenshots: [
      "/assets/advokosh_screen1.png",
      "/assets/advokosh_screen2.png",
      "/assets/advokosh_banner.png",
    ],
    problem:
      "Solo Indian advocates struggle to manage dozens of concurrent court cases, statutory limitation deadlines (NI Act 138, Commercial Courts 120-day forfeiture), and unbilled fees.",
    solution:
      "A sovereign chamber OS in Kotlin 2.0+ and Jetpack Compose Material 3. Features Room v4 encrypted with SQLCipher 256-bit AES-CBC and hardware Android Keystore MasterKey, 8 WorkManager alert workers, BNS/BNSS/BSA law mapper, and vector PDF fee billing with dynamic NPCI UPI QR codes.",
    techStack: [
      "Kotlin 2.0+",
      "Jetpack Compose",
      "Dagger Hilt",
      "SQLCipher 256-bit AES",
      "Android Keystore",
      "WorkManager",
    ],
    keyMetrics: [
      { label: "Encryption", value: "256-bit AES-CBC" },
      { label: "Background Workers", value: "8 WorkManager" },
      { label: "Draft Templates", value: "8 Offline Petitions" },
    ],
    highlights: [
      "Sovereign privacy: zero telemetry, hardware-sealed encryption keys",
      "Automated cause-list alerts (8 PM & 7 AM) and 2-hour courtroom countdowns",
      "BNS/BNSS/BSA criminal law cross-converter and Section 138 NI Act limitation calculator",
      "Vector PDF fee notes with 18% GST and dynamic NPCI UPI QR code",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.advokosh.app",
      github: "https://github.com/Vaidik04/AdvoKosh",
    },
  },
  {
    id: "jewelbill",
    name: "JewelBill (JewelInvoice)",
    tagline: "Jewellery Billing, Multi-Karat GST & Thermal POS Workstation",
    category: "commercial",
    badge: "Available on Google Play",
    badgeType: "playstore",
    platform: "Native Android · Java 17",
    icon: "/assets/jewelbill_icon.png",
    heroImage: "/assets/jewelbill_screen.png",
    problem:
      "Jewellery retailers need complex weight calculations (24K, 22K, 18K, 14K), stone deductions, making charges, and split CGST/SGST taxes, causing long customer checkout queues.",
    solution:
      "Android billing workstation with Java 17 and Room SQLite. Generates instant PDF invoices, prints directly via Bluetooth ESC/POS 58mm/80mm thermal printers, and shares receipts via WhatsApp.",
    techStack: ["Java 17", "Room SQLite", "ESC/POS Thermal Printing", "iText PDF", "WhatsApp API"],
    keyMetrics: [
      { label: "Thermal Print", value: "58mm / 80mm ESC/POS" },
      { label: "Gold Karats", value: "24K / 22K / 18K / 14K" },
      { label: "Tax Engine", value: "Split CGST / SGST" },
    ],
    highlights: [
      "Dynamic spot-rate gold/silver weight and stone deduction math",
      "Direct Bluetooth thermal receipt printing without internet",
      "Automated 1-tap WhatsApp PDF invoice sharing",
      "Complete customer transaction ledger and balance tracking",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
      github: "https://github.com/Vaidik04/InvoiceApp",
    },
  },
  {
    id: "swarmos",
    name: "SwarmOS",
    tagline: "Cooperative Intelligence on Nearby Android Phones",
    category: "systems",
    badge: "Air-Gapped P2P Swarm",
    badgeType: "production",
    platform: "Native Android · Nearby Connections",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_icon.png",
    problem:
      "Processing bulk ML workloads on single low-cost smartphones causes thermal throttling, while uploading documents to cloud APIs breaches privacy and fails in zero-connectivity areas.",
    solution:
      "Native Android app enabling nearby phones to form an air-gapped wireless cluster via Google Nearby Connections (P2P_CLUSTER). Features a deterministic task scheduler, mutual numeric verification digits, and bundled offline ML Kit OCR.",
    techStack: ["Kotlin", "Jetpack Compose", "Nearby Connections", "Bundled ML Kit", "Room DB"],
    keyMetrics: [
      { label: "Cluster Mode", value: "P2P_CLUSTER" },
      { label: "WAN Internet", value: "0% Required" },
      { label: "Verification", value: "Mutual Numeric Digits" },
    ],
    highlights: [
      "Distributed document OCR across nearby phones over Wi-Fi Direct and Bluetooth",
      "Mutual visual digit authentication preventing man-in-the-middle attacks",
      "Ephemeral sessions with automated local image purging on task completion",
      "Shipped as signed Android release candidate (swarmos-release.jks)",
    ],
    links: {
      github: "https://github.com/Vaidik04/SwarmOS",
    },
  },
  {
    id: "gridcare",
    name: "GridCare",
    tagline: "Offline-First Solar Asset, Maintenance & Field-Service Platform",
    category: "commercial",
    badge: "Release Candidate (RC1)",
    badgeType: "production",
    platform: "Native Android · Kotlin 2.3+",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_icon.png",
    problem:
      "Solar EPC contractors and technicians work on remote rooftops with zero cellular signal, rendering cloud field apps unusable.",
    solution:
      "Engineered adhering to OWASP MASVS-L1/L2 and DPDP Act 2023 with verified zero network permissions. Unifies solar asset passports, multi-visit work orders, checklists, and AES-256-GCM + PBKDF2 (600k rounds) encrypted backups.",
    techStack: ["Kotlin 2.3+", "Jetpack Compose", "Room SQLite", "OWASP MASVS", "AES-256-GCM"],
    keyMetrics: [
      { label: "Unit Tests", value: "25/25 Passing" },
      { label: "APK Size", value: "2.61 MB (R8 Minified)" },
      { label: "Security", value: "Zero Network Permissions" },
    ],
    highlights: [
      "Single source of truth Room SQLite with zero internet permission",
      "Interactive inspection checklists and equipment serial tracking",
      "Encrypted local backup with 600,000 PBKDF2 key-derivation iterations",
    ],
    links: {
      github: "https://github.com/Vaidik04",
    },
  },
  {
    id: "kaamkram",
    name: "KaamKram (कामक्रम)",
    tagline: "The Job-to-Payment OS for Indian Solo Tradespeople",
    category: "commercial",
    badge: "MVI Clean Architecture",
    badgeType: "opensource",
    platform: "Native Android · MVI",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_icon.png",
    problem:
      "Solo electricians, plumbers, and technicians lose thousands monthly due to verbal estimates, unrecorded change orders, and payment disputes.",
    solution:
      "An offline-first Android OS built with MVI Clean Architecture. Features integer paise financial math (Long storage), standard Indian number grouping (₹1,23,456), Hindi/English localization, and append-only material audit trails.",
    techStack: ["Kotlin", "MVI Architecture", "Clean Architecture", "Room DB", "StateFlow", "UPI Deep-Linking"],
    keyMetrics: [
      { label: "Math Precision", value: "Integer Paise (Long)" },
      { label: "Audit Trail", value: "Append-Only" },
      { label: "Localization", value: "Hindi & English" },
    ],
    highlights: [
      "Zero floating-point rounding errors in financial transactions",
      "Full lifecycle: Enquiry → Quote → Work Evidence → Invoicing → Instant UPI",
      "High-contrast sunlight readability and vernacular UX",
    ],
    links: {
      github: "https://github.com/Vaidik04/KaamKram",
    },
  },
  {
    id: "skycanvas",
    name: "SkyCanvas – AI Air Painter",
    tagline: "Native Android Mid-Air Painting via Real-Time Hand Tracking",
    category: "ai",
    badge: "MediaPipe Vision GPU",
    badgeType: "production",
    platform: "Native Android · Vision GPU",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_icon.png",
    problem:
      "Touchless mid-air drawing on mobile devices usually suffers from high latency, model jitter, and excessive battery consumption.",
    solution:
      "Leveraged Google MediaPipe Hands running on Android GPU delegates paired with CameraX. Extracts 21 3D landmarks in real-time (<15ms latency), mapping fingertip coordinates to a custom Canvas Bitmap pipeline with voice command integration.",
    techStack: ["Kotlin", "MediaPipe Hands", "CameraX", "Android Canvas", "SpeechRecognizer"],
    keyMetrics: [
      { label: "Vision Latency", value: "<15ms on Mobile GPU" },
      { label: "Landmarks", value: "21 3D Points" },
      { label: "Interaction", value: "Gestures & Voice" },
    ],
    highlights: [
      "Sub-15ms hand landmark tracking on GPU delegate",
      "Draw with index finger with stroke smoothing and gesture shape snapping",
      "Voice commands ('Clear', 'Red Brush', 'Undo', 'Save')",
    ],
    links: {
      github: "https://github.com/Vaidik04",
    },
  },
  {
    id: "q-transit",
    name: "Q-Transit Nexus & QRoute",
    tagline: "Adaptive Quantum-Inspired Urban Fleet Routing Digital Twin",
    category: "systems",
    badge: "FastAPI + D-QPSO",
    badgeType: "research",
    platform: "FastAPI · Python 3.9+ · Microservices",
    icon: "/assets/vaidiktech_symbol.svg",
    heroImage: "/assets/vaidiktech_icon.png",
    problem:
      "Urban fleet navigation fails during sudden multi-point road closures and severe congestion, trapping emergency and logistics vehicles in gridlock.",
    solution:
      "FastAPI microservices system orchestrating PostgreSQL/PostGIS with an Adaptive Discrete Quantum Particle Swarm Optimization (Adaptive D-QPSO) algorithm. Connects to real-time SUMO simulators and streams live GeoJSON reroutes over WebSockets.",
    techStack: ["Python 3.9+", "FastAPI", "PostgreSQL / PostGIS", "Adaptive D-QPSO", "SUMO", "WebSockets"],
    keyMetrics: [
      { label: "Algorithm", value: "Adaptive D-QPSO" },
      { label: "Simulation", value: "TraCI / SUMO" },
      { label: "Telemetry", value: "Real-time WebSockets" },
    ],
    highlights: [
      "Dynamic rerouting feedback loop ingesting simulated road incidents",
      "Adaptive D-QPSO yielding faster convergence than genetic algorithms",
      "Real-time GeoJSON streaming over WebSockets to Leaflet dashboards",
    ],
    links: {
      github: "https://github.com/Vaidik04/QRoute",
    },
  },
];

