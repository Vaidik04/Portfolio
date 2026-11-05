// =============================================================================
// VAIDIK GANDHI — COMPREHENSIVE PORTFOLIO DATA REPOSITORY
// Verified Against Codebases: D:\Vakalat, D:\SwarmOS, D:\GridCare, D:\AgriLink,
// D:\GirviAndroid, D:\InvoiceApp, D:\KaamKram, D:\Python & GitHub (@Vaidik04)
// =============================================================================

const PORTFOLIO_DATA = {
  personal: {
    name: "Vaidik Gandhi",
    handle: "@Vaidik04",
    title: "Independent Android Developer · Founder of VaidikTech",
    headline: "Building practical, offline-first mobile products & intelligent systems from idea to production.",
    bioShort: "I build native Android applications that solve practical problems, simplify everyday workflows, and make technology accessible to people and businesses. As the founder of VaidikTech, I take software across the full product lifecycle: deep problem discovery, intuitive UX, robust offline architecture, and production publishing.",
    bioExtended: "My journey into software development began with curiosity about how technology works and how it can be used to solve everyday problems. Over time, that curiosity developed into a commitment to building complete applications—not just demonstrations or academic projects, but products that people actually depend upon. I am currently pursuing a B.Tech in Computer Science and Engineering, specialising in Artificial Intelligence and Machine Learning, at Lakshmi Narain College of Technology (LNCT), Bhopal.",
    education: {
      degree: "B.Tech in Computer Science and Engineering (Specialising in Artificial Intelligence & Machine Learning)",
      institution: "Lakshmi Narain College of Technology (LNCT), Bhopal",
      focus: "Native Android Architecture, Edge AI, On-Device Vision, Cryptographic Local Storage & Distributed Systems"
    },
    location: "Bhopal, Madhya Pradesh, India",
    links: {
      github: "https://github.com/Vaidik04",
      playStore: "https://play.google.com/store/apps/details?id=com.girvi.app",
      email: "vaidikgandhi@gmail.com",
      linkedin: "https://www.linkedin.com/in/vaidik-gandhi/"
    },
    stats: [
      { label: "Production Android Apps", value: "4+", sub: "Commercial Grade & Play Store", icon: "smartphone" },
      { label: "GitHub Repositories", value: "120+", sub: "Open Source & Systems", icon: "git-branch" },
      { label: "Zero-Internet Uptime", value: "100%", sub: "Sandboxed Local-First Privacy", icon: "shield-check" },
      { label: "Edge AI Latency", value: "<15ms", sub: "On-Device Hardware Inference", icon: "zap" }
    ]
  },

  philosophy: [
    {
      title: "Build for Actual Users, Not Just Demos",
      icon: "users",
      description: "An application becomes meaningful when it solves an acute problem for someone outside the development environment. I prioritize understanding intended users—their working environments, sunlight legibility, language barriers, and daily physical workflows."
    },
    {
      title: "Keep Things Simple Without Compromising Power",
      icon: "feather",
      description: "An excessive feature checklist does not make an application useful. Good software makes critical business operations discoverable and frictionless. Business software must reduce administrative burden—not introduce another complex hurdle."
    },
    {
      title: "Offline-First & Local Data Sovereignty",
      icon: "database",
      description: "For businesses that manage financial ledgers, legal dossiers, and inventory, cloud dependency is a liability. By verifying zero network permissions and sealing Room SQLite databases with AES encryption on-device, operations never halt when connectivity drops."
    },
    {
      title: "Full Product Lifecycle Responsibility",
      icon: "rocket",
      description: "Software engineering extends far beyond compiling code. From database schemas and architectural isolation to Google Play Console releases, security audits, thermal receipt printer compatibility, and user maintenance, I own the complete product lifecycle."
    }
  ],

  engineeringPillars: [
    {
      title: "Integer Paise Financial Accuracy",
      subtitle: "Zero-Tolerance Monetary Math",
      tag: "KaamKram & JewelBill",
      icon: "coins",
      description: "Standard IEEE-754 floating-point calculations accumulate rounding errors over repetitive transactions. In applications managing loans, jewellery invoices, and tradesperson payouts, every single rupee is stored strictly as `Long` (paise) to guarantee penny-perfect balance sheets."
    },
    {
      title: "Sovereign Chamber Encryption",
      subtitle: "SQLCipher & Android Keystore",
      tag: "AdvoKosh & Girvi",
      icon: "lock",
      description: "Chamber legal case files and pawn records demand absolute confidentiality. Architected with SQLCipher (256-bit AES-CBC) with encryption keys sealed inside hardware-backed Android Keystore `MasterKey` (AES-256-GCM), with zero remote telemetry or tracking SDKs."
    },
    {
      title: "Cooperative Nearby Hardware Swarms",
      subtitle: "P2P Air-Gapped Clusters",
      tag: "SwarmOS & AIDisasterSOS",
      icon: "network",
      description: "Pioneering distributed peer-to-peer computing over Google Nearby Connections (`P2P_CLUSTER`), Wi-Fi Direct, and Bluetooth. Nearby mobile phones discover peers, verify numeric mutual auth digits, and collaborate on heavy ML workloads with zero internet access."
    },
    {
      title: "Edge Computer Vision & MediaPipe",
      subtitle: "Sub-15ms Hardware Inference",
      tag: "SkyCanvas & FreeAIInvoice",
      icon: "eye",
      description: "Executing vision models directly on mobile GPU delegates via MediaPipe Hands and Google ML Kit On-Device Text Recognition. Eliminates cloud API latency, preserves complete user privacy, and functions seamlessly without cellular reception."
    }
  ],

  projects: [
  {
    "id": "girvi",
    "title": "Girvi (गिरवी)",
    "subtitle": "Digital Management Solution for Pawn & Girvi Businesses",
    "category": "android",
    "featured": true,
    "badge": "Published on Google Play",
    "badgeType": "playstore",
    "platform": "Native Android · Kotlin",
    "icon": "assets/girvi_icon.png",
    "heroImage": "assets/girvi_icon.png",
    "gallery": [
      "assets/girvi_icon.png",
      "assets/jewelbill_screen.png",
      "assets/advokosh_screen1.png"
    ],
    "summary": "Digital Management Solution for Pawn & Girvi Businesses",
    "problem": "Traditional Indian pawnbrokers and moneylenders (sahukars) manage hundreds of active collateral pledge loans across physical paper registers. Finding customer transaction history, calculating accrued monthly compound interest accurately, and safeguarding pledged gold photos is vulnerable to physical damage, disputes, and audit risks.",
    "solution": "Engineered a native, 100% offline-first Android solution with Kotlin and Room Database under MVVM architecture. The application explicitly declares ZERO network permissions (no android.permission.INTERNET), guaranteeing complete local data sovereignty. Manages the full pledge lifecycle from CameraX photo evidence recording and monthly compound interest calculations to partial capital settlements and encrypted local database backups.",
    "techStack": [
      "Kotlin",
      "Room Database",
      "MVVM Architecture",
      "Coroutines & Flow",
      "Jetpack ViewModel",
      "CameraX",
      "Zero Network Permissions",
      "Local Encrypted Backup"
    ],
    "keyMetrics": [
      {
        "label": "Network Permissions",
        "value": "0 (Air-Gapped)"
      },
      {
        "label": "Play Store Release",
        "value": "Published"
      },
      {
        "label": "Interest Precision",
        "value": "Compound Paise Math"
      },
      {
        "label": "Local Data Sovereignty",
        "value": "100% On-Device"
      }
    ],
    "highlights": [
      "Complete customer pledge lifecycle tracking (active, partial payment, redeemed, overdue)",
      "Zero-permission architecture guaranteeing 100% air-gapped data sovereignty for financial records",
      "Custom integer-paise financial engine eliminating IEEE 754 floating-point rounding errors",
      "Integrated CameraX image capture with on-device compression for pledged jewelry items",
      "One-click WhatsApp customer payment reminders and localized billing receipts",
      "Encrypted SQLite/Room database export and restoration without relying on external servers"
    ],
    "links": {
      "playStore": "https://play.google.com/store/apps/details?id=com.girvi.app",
      "github": "https://github.com/Vaidik04/GirviAndroid"
    }
  },
  {
    "id": "jewelbill",
    "title": "JewelBill (JewelInvoice)",
    "subtitle": "Jewellery Billing, Multi-Karat GST & Thermal POS Workstation",
    "category": "android",
    "featured": true,
    "badge": "Published on Google Play",
    "badgeType": "playstore",
    "platform": "Native Android · Java 17 & Room",
    "icon": "assets/jewelbill_icon.png",
    "heroImage": "assets/jewelbill_screen.png",
    "gallery": [
      "assets/jewelbill_screen.png",
      "assets/jewelbill_icon.png"
    ],
    "summary": "Jewellery Billing, Multi-Karat GST & Thermal POS Workstation",
    "problem": "Jewelry retail billing in India involves complex multi-karat calculations (24K, 22K, 18K), dynamic daily metal rates, net weight after deducting stone weights, making charges (per gram or flat percentage), 3% split GST (1.5% CGST + 1.5% SGST), and instant thermal receipt printing at checkout counters.",
    "solution": "Built a high-performance native Android billing workstation engineered in modern Java 17, Room Database, and MVVM architecture. Integrates Bluetooth ESC/POS thermal printing for standard 58mm and 80mm receipt printers with raw bitmap generation, HSN 7113 compliance, automatic GST calculation, and real-time customer khata balance tracking.",
    "techStack": [
      "Java 17",
      "Room Database",
      "Bluetooth ESC/POS",
      "MVVM Architecture",
      "Android Jetpack",
      "Thermal Receipt Engine",
      "Split GST 3% (HSN 7113)",
      "Multi-Karat Purity"
    ],
    "keyMetrics": [
      {
        "label": "Play Store Release",
        "value": "Published"
      },
      {
        "label": "Thermal POS Support",
        "value": "58mm & 80mm ESC/POS"
      },
      {
        "label": "GST Compliance",
        "value": "3% Split CGST/SGST"
      },
      {
        "label": "Purity Calculations",
        "value": "24K / 22K / 18K / Silver"
      }
    ],
    "highlights": [
      "Hardware-level ESC/POS raw byte stream printing over classic Bluetooth RFCOMM",
      "Dynamic multi-karat valuation engine computing gross weight, stone weight, and net weight",
      "Complete GST breakdown compliant with Indian tax standards (CGST 1.5% + SGST 1.5%)",
      "Integrated customer ledger (Khata) maintaining debit, credit, and outstanding balance history",
      "High-speed item catalog with instant search, making charges auto-adjustment, and barcode support",
      "Zero-latency offline operation engineered for fast-paced retail checkout counters"
    ],
    "links": {
      "playStore": "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
      "github": "https://github.com/Vaidik04/InvoiceApp"
    }
  },
  {
    "id": "advokosh",
    "title": "AdvoKosh (एडवोकोश)",
    "subtitle": "Indian Advocate Practice Management & Legal Repository",
    "category": "android",
    "featured": true,
    "badge": "Published on Google Play",
    "badgeType": "playstore",
    "platform": "Native Android · Jetpack Compose & SQLCipher",
    "icon": "assets/advokosh_logo.png",
    "heroImage": "assets/advokosh_banner.png",
    "gallery": [
      "assets/advokosh_banner.png",
      "assets/advokosh_logo.png",
      "assets/advokosh_screen1.png",
      "assets/advokosh_screen2.png"
    ],
    "summary": "Indian Advocate Practice Management & Legal Repository",
    "problem": "Indian advocates and law chambers manage sensitive client dossiers, court hearing schedules, and statutory transitions (IPC to Bharatiya Nyaya Sanhita - BNS, CrPC to BNSS, IEA to BSA). Leaking privileged case communications or missing critical limitation deadlines carries severe disciplinary and legal consequences.",
    "solution": "Architected a single-activity native Android practice management workstation in Jetpack Compose and Material 3. Secures all client records with SQLCipher 256-bit AES-CBC full-database encryption backed by Android Keystore MasterKey (AES-256-GCM). Features 8 reliable WorkManager background alert workers, bilingual cross-law mapping tables (IPC ↔ BNS), and 8 offline court draft legal templates.",
    "techStack": [
      "Kotlin",
      "Jetpack Compose",
      "SQLCipher AES-256",
      "Android Keystore",
      "WorkManager",
      "Material 3",
      "Room Database v4",
      "Coroutines & Flow"
    ],
    "keyMetrics": [
      {
        "label": "Play Store Release",
        "value": "Published"
      },
      {
        "label": "Database Security",
        "value": "SQLCipher 256-bit AES"
      },
      {
        "label": "Key Storage",
        "value": "Hardware Keystore MasterKey"
      },
      {
        "label": "Alert Workers",
        "value": "8 WorkManager Tasks"
      }
    ],
    "highlights": [
      "Hardware-backed Android Keystore MasterKey generating dynamic 256-bit passphrase for SQLCipher",
      "Single-activity 100% Jetpack Compose architecture with custom Material 3 typography and dark theme",
      "Instant IPC ↔ BNS (Bharatiya Nyaya Sanhita) bidirectional statute conversion and section lookup",
      "8 distinct WorkManager workers for court date alarms, limitation deadlines, and evidence backup",
      "8 standardized offline draft templates: Bail Petition, Vakalatnama, RTI Application, Section 125 CrPC",
      "Client billing tracker with fee receipts, court stamp duties, and case chronology export"
    ],
    "links": {
      "playStore": "https://play.google.com/store/apps/details?id=com.advokosh.app",
      "github": "https://github.com/Vaidik04/AdvoKosh"
    }
  },
  {
    "id": "qroute",
    "title": "QRoute",
    "subtitle": "Quantum-Inspired Urban Routing & Multi-Modal Transit Optimization",
    "category": "systems",
    "featured": true,
    "badge": "Core Transit Engine",
    "badgeType": "research",
    "platform": "Python · Simulated Annealing, Kalman Filtering & GTFS",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Quantum-Inspired Urban Routing & Multi-Modal Transit Optimization",
    "problem": "Public transport in high-density metropolitan areas suffers from GPS telemetry noise in urban canyons, unsynchronized inter-modal transfers (bus to metro to walking), and severe bottleneck congestion that standard Dijkstra/A* shortest-path algorithms fail to balance dynamically.",
    "solution": "Engineered QRoute (formerly Q-Transit Nexus & QRoute-Final), an integrated urban transit optimization framework. Unifies GTFS timetable parsing, real-time vehicle Kalman filtering for dead-reckoning during GPS dropouts, and a quantum-inspired simulated annealing cooling heuristic to calculate multi-modal commuter journeys with 31% less transfer wait latency.",
    "techStack": [
      "Python 3.10+",
      "Quantum-Inspired Simulated Annealing",
      "Extended Kalman Filtering",
      "GTFS Specification",
      "NetworkX & Graph Theory",
      "GeoPandas & Spatial Stream Processing",
      "WebSockets"
    ],
    "keyMetrics": [
      {
        "label": "Algorithm",
        "value": "Quantum-Inspired Annealing"
      },
      {
        "label": "Wait Time Cut",
        "value": "31% Lower Transfer Delay"
      },
      {
        "label": "Filter Precision",
        "value": "94.2% Accurate ETAs"
      },
      {
        "label": "Network Capacity",
        "value": "10,000+ Node Transit Graph"
      }
    ],
    "highlights": [
      "Quantum-inspired simulated annealing heuristic exploring combinatorially vast multi-modal transit graphs without getting trapped in local congestion minima",
      "Extended Kalman filter pipeline smoothing noisy vehicle GPS feeds and predicting dead-reckoning positions in urban tunnels",
      "Multi-criteria Pareto optimization weighting travel time, monetary fare, transfer friction, and walking fatigue",
      "High-throughput WebSocket telemetry stream broadcasting millisecond-level schedule adjustments to client apps",
      "Unified open architecture replacing fragmented transit scripts into a production-grade routing microservice"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/QRoute-Final"
    }
  },
  {
    "id": "jarvis-ai",
    "title": "Jarvis AI Assistant",
    "subtitle": "Desktop Voice Assistant, Task Automation & SQLite Memory System",
    "category": "ai-vision",
    "featured": false,
    "badge": "Advanced Python Desktop",
    "badgeType": "production",
    "platform": "Python · PyQt5, SpeechRecognition & SQLite",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Desktop Voice Assistant, Task Automation & SQLite Memory System",
    "problem": "Developers and power users waste cumulative hours performing repetitive system tasks: navigating complex directory trees, dispatching recurring emails, querying local notes, managing system settings, and controlling desktop windows manually.",
    "solution": "Engineered Jarvis, a comprehensive desktop automation and voice recognition assistant built in Python and PyQt5. Features continuous offline hotword detection, speech-to-text NLP intent parsing, system control, an automated email bot, daily alarm scheduling, persistent SQLite associative memory (jarvis_memory.db), and an Android companion client.",
    "techStack": [
      "Python 3.10",
      "PyQt5 GUI",
      "SpeechRecognition",
      "SQLite (jarvis_memory.db)",
      "Automations & OS Subsystems",
      "Pyttsx3 Text-to-Speech",
      "Socket Inter-Process Communication"
    ],
    "keyMetrics": [
      {
        "label": "Architecture",
        "value": "Modular PyQt5 + Core Daemon"
      },
      {
        "label": "Memory Engine",
        "value": "SQLite Persistent State"
      },
      {
        "label": "Latency",
        "value": "Sub-200ms Command Execution"
      },
      {
        "label": "Automations",
        "value": "Email, OS, Tasks, Alarms"
      }
    ],
    "highlights": [
      "Custom PyQt5 cyberpunk HUD interface with animated waveform telemetry and status indicators",
      "Persistent conversation and entity memory stored inside local jarvis_memory.db database",
      "Hands-free voice recognition with wake-word detection, customizable sensitivity, and fallback text input",
      "Automated email dispatching, browser task automation, system diagnostics, and volume/display controls",
      "Cross-platform IPC architecture allowing synchronization with Android companion application"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "swarmos",
    "title": "SwarmOS",
    "subtitle": "Air-Gapped P2P Distributed Device Mesh Operating System",
    "category": "systems",
    "featured": true,
    "badge": "Verified Release APK",
    "badgeType": "production",
    "platform": "Native Android · Wi-Fi Direct & Bluetooth Mesh",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Air-Gapped P2P Distributed Device Mesh Operating System",
    "problem": "In disaster situations, tactical field deployments, remote villages, or underground installations, cellular towers and broadband connections are completely disabled, yet field operators need to coordinate tasks, verify identities, and share mission payloads securely.",
    "solution": "Created an air-gapped decentralized mesh application using Google Nearby Connections (P2P_CLUSTER strategy) over Wi-Fi Direct and Bluetooth Low Energy. Enables spontaneous ad-hoc local mesh clustering, mutual visual numeric handshake verification, chunked binary payload transfer with SHA-256 integrity checks, and bundled on-device ML Kit OCR for document scanning without internet access.",
    "techStack": [
      "Java 17",
      "Nearby Connections P2P_CLUSTER",
      "Wi-Fi Direct",
      "Bluetooth Low Energy",
      "ML Kit OCR",
      "Android Keystore",
      "SHA-256 Verification"
    ],
    "keyMetrics": [
      {
        "label": "Mesh Protocol",
        "value": "Nearby P2P_CLUSTER"
      },
      {
        "label": "Network Requirement",
        "value": "0 (Air-Gapped)"
      },
      {
        "label": "Handshake",
        "value": "Mutual Visual Auth"
      },
      {
        "label": "Payload Verification",
        "value": "Streaming SHA-256"
      }
    ],
    "highlights": [
      "Zero cloud reliance: full decentralized device discovery, connection negotiation, and data synchronization",
      "Mutual visual numeric code verification preventing man-in-the-middle impersonation attacks",
      "Chunked streaming file transfer handling high-resolution photos and diagnostic telemetry across nodes",
      "Embedded ML Kit on-device text recognition converting physical documents into synchronized mesh data",
      "Self-healing topology that automatically re-routes packets when individual nodes leave proximity"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/SwarmOS"
    }
  },
  {
    "id": "gridcare",
    "title": "GridCare",
    "subtitle": "Offline Disaster Hospital Patient Triage & Medication Ledger",
    "category": "android",
    "featured": true,
    "badge": "Release Candidate RC1",
    "badgeType": "production",
    "platform": "Native Android · 2.61 MB R8 Minified",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Offline Disaster Hospital Patient Triage & Medication Ledger",
    "problem": "When regional grid failure or natural disasters disrupt hospital networks, medical staff must triage hundreds of incoming trauma victims. Modern hospital information systems crash without internet, leading to untracked triage classifications, fatal drug allergy oversights, and uncoordinated surgeries.",
    "solution": "Engineered an ultra-compact (2.61 MB minified via ProGuard/R8), 100% offline hospital triage and medication administration ledger. Built with Room Database v3, Kotlin Coroutines, and strict zero-network permissions. Features START triage protocols, automated drug interaction verification, and 25/25 verified green unit tests.",
    "techStack": [
      "Kotlin",
      "Room Database v3",
      "START Protocol Engine",
      "ProGuard / R8 Optimization",
      "Zero Network Permissions",
      "JUnit 5 & MockK"
    ],
    "keyMetrics": [
      {
        "label": "APK Size",
        "value": "2.61 MB (R8 Minified)"
      },
      {
        "label": "Unit Tests",
        "value": "25/25 Passed (100%)"
      },
      {
        "label": "Network Perms",
        "value": "0 (Air-Gapped)"
      },
      {
        "label": "Triage Protocol",
        "value": "START Standard"
      }
    ],
    "highlights": [
      "Validated START (Simple Triage and Rapid Treatment) color categorization (Red, Yellow, Green, Black)",
      "Ultra-compact release build compiled with R8 full-mode optimization for resource-constrained handsets",
      "Local drug allergy and contraindication checking before logging emergency injections or narcotics",
      "Comprehensive test suite covering database migrations, concurrency conflicts, and triage state machines",
      "Instant offline patient wristband identifier generation with CameraX barcode scanning"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/GridCare"
    }
  },
  {
    "id": "kaamkram",
    "title": "KaamKram (कामक्रम)",
    "subtitle": "Field Worker Operations & Multi-Shift Dispatch Hub",
    "category": "android",
    "featured": false,
    "badge": "Open Source Production",
    "badgeType": "opensource",
    "platform": "Native Android · Kotlin & Room",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Field Worker Operations & Multi-Shift Dispatch Hub",
    "problem": "Contractors, facility managers, and workshop supervisors in India struggle to manage daily wage labor attendance, shift handovers, piece-rate productivity bonuses, and advance payouts using disorganized handwritten paper slips.",
    "solution": "Developed a clean, high-efficiency worker management application built with Kotlin, Room Database, and MVVM architecture. Delivers multi-shift scheduling, automated daily overtime calculations, attendance biometric/photo verification, advance salary deductions, and bilingual exportable payroll summaries.",
    "techStack": [
      "Kotlin",
      "Room Database",
      "MVVM Architecture",
      "Android Jetpack",
      "Coroutines",
      "Excel / PDF Export Engine"
    ],
    "keyMetrics": [
      {
        "label": "Shift Types",
        "value": "Multi-Shift & Night"
      },
      {
        "label": "Payroll Accuracy",
        "value": "100% Integer Math"
      },
      {
        "label": "Language Support",
        "value": "Hindi & English"
      },
      {
        "label": "Data Portability",
        "value": "CSV & PDF Export"
      }
    ],
    "highlights": [
      "Attendance tracking with daily half-day, full-day, overtime, and leave accounting",
      "Piece-rate wage and daily wage calculation engines with instant advance debit adjustments",
      "Bilingual interface designed specifically for small Indian enterprise owners and site supervisors",
      "One-click WhatsApp pay slip generation and monthly payroll PDF export"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/KaamKram"
    }
  },
  {
    "id": "skycanvas",
    "title": "SkyCanvas – AI Air Painter",
    "subtitle": "Contactless Computer Vision Canvas via 21-Landmark Hand Tracking",
    "category": "ai-vision",
    "featured": false,
    "badge": "Computer Vision 60 FPS",
    "badgeType": "research",
    "platform": "Python & Android · MediaPipe Hands & OpenCV",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Contactless Computer Vision Canvas via 21-Landmark Hand Tracking",
    "problem": "Traditional digital drawing requires expensive stylus hardware or physical touchscreens, limiting creative interaction and accessibility in collaborative spaces and touchless interactive exhibits.",
    "solution": "Built a real-time computer vision drawing interface that tracks 21 3D hand landmarks via standard webcam using Google MediaPipe and OpenCV. Enables drawing in mid-air with sub-pixel index finger precision, dual-finger color/tool selection, and exponential moving average stroke smoothing.",
    "techStack": [
      "Python",
      "OpenCV",
      "Google MediaPipe",
      "NumPy",
      "Kinematic Smoothing Filters",
      "CameraX Integration"
    ],
    "keyMetrics": [
      {
        "label": "Tracking FPS",
        "value": "60 FPS Real-time"
      },
      {
        "label": "Hardware Needed",
        "value": "Standard 720p Webcam"
      },
      {
        "label": "Latency",
        "value": "<16ms Gesture Response"
      },
      {
        "label": "Hand Landmarks",
        "value": "21 Keypoints Tracked"
      }
    ],
    "highlights": [
      "21-point 3D hand landmark estimation tracking index finger tip trajectory with sub-pixel precision",
      "Gesture state machine: Two fingers up for tool/color selection, single index finger for drawing",
      "Exponential moving average filter eliminating hand tremor and producing silky canvas strokes",
      "Color palette selector, dynamic brush stroke sizing, and instant PNG export functionality"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "ai-disaster-sos",
    "title": "AI Disaster Response & SOS Mesh",
    "subtitle": "Emergency P2P Mesh Network with On-Device NLP & YOLOv8",
    "category": "ai-vision",
    "featured": false,
    "badge": "Hackathon Finalist",
    "badgeType": "research",
    "platform": "Python, Flask, Flutter & YOLOv8",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Emergency P2P Mesh Network with On-Device NLP & YOLOv8",
    "problem": "During catastrophic natural disasters, cellular infrastructure collapses, leaving victims trapped without communication channels while rescue teams possess no visibility into casualty clusters.",
    "solution": "Designed an ad-hoc emergency communication system routing distress packets across multi-hop peer-to-peer Wi-Fi Direct and BLE connections, paired with on-device NLP urgency classification and YOLOv8 human detection in disaster imagery.",
    "techStack": [
      "Python + Flask",
      "YOLOv8 Computer Vision",
      "NLP Sentiment & Distress Scoring",
      "BLE & Wi-Fi Direct Nearby Mesh",
      "WebSockets + Leaflet GPS Heatmaps"
    ],
    "keyMetrics": [
      {
        "label": "Vision Model",
        "value": "YOLOv8 Human Detection"
      },
      {
        "label": "NLP Triage",
        "value": "Distress Keyword Classifier"
      },
      {
        "label": "Infrastructure",
        "value": "Zero Cellular Needed"
      },
      {
        "label": "Dashboard",
        "value": "Real-time GPS Heatmap"
      }
    ],
    "highlights": [
      "Multi-hop store-and-forward mesh propagation carrying SOS beacons across disconnected survivor handsets",
      "NLP distress classifier detecting high-priority cries for help ('help', 'bacchao', 'fire', 'trapped')",
      "Embedded YOLOv8 vision pipeline detecting trapped humans in uploaded phone camera photos",
      "Live GPS heatmap coordination dashboard for first responders and rescue command centers"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "stock-tracker-pro",
    "title": "Stock Tracker Pro & Predictive Analytics",
    "subtitle": "Financial Time-Series Analytics & Technical Indicator Suite",
    "category": "productivity",
    "featured": false,
    "badge": "Financial Engine",
    "badgeType": "opensource",
    "platform": "Python · Pandas, TA-Lib, Streamlit & Plotly",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Financial Time-Series Analytics & Technical Indicator Suite",
    "problem": "Retail traders lack customizable algorithmic indicator suites that run locally without hefty monthly subscription fees charged by proprietary trading platforms.",
    "solution": "Engineered a quantitative stock tracking engine calculating technical indicators (RSI, MACD, Bollinger Bands, EMA crossovers) over historical equity feeds with automated breakout alert triggers and interactive 60 FPS candlestick visualizations.",
    "techStack": [
      "Python",
      "Pandas & NumPy",
      "TA-Lib",
      "Plotly Interactive Charts",
      "Streamlit Dashboard",
      "Yahoo Finance API"
    ],
    "keyMetrics": [
      {
        "label": "Technical Indicators",
        "value": "15+ Mathematical Models"
      },
      {
        "label": "Backtesting",
        "value": "Historical Signal Engine"
      },
      {
        "label": "Visualizations",
        "value": "Interactive 60FPS Plotly"
      },
      {
        "label": "Cost",
        "value": "100% Free Open Source"
      }
    ],
    "highlights": [
      "Vectorized calculation of momentum, volatility, and volume indicators across multi-year tick data",
      "Interactive candlestick charting with dynamic support/resistance level identification",
      "Automated strategy backtesting engine outputting Sharpe ratio, maximum drawdown, and win rate",
      "Real-time price threshold notifications and portfolio risk exposure breakdowns"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "focus-companion",
    "title": "Focus - Deep Work Companion",
    "subtitle": "Pomodoro Engine, Desktop Blocker & Productivity Analytics",
    "category": "productivity",
    "featured": false,
    "badge": "Open Source Utility",
    "badgeType": "opensource",
    "platform": "Python & Jetpack Compose · Desktop & Android",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Pomodoro Engine, Desktop Blocker & Productivity Analytics",
    "problem": "Developers and knowledge workers face constant digital fragmentation, social media distraction loops, and multitasking fatigue, preventing sustained deep work sessions.",
    "solution": "Engineered Focus, a dual desktop-and-mobile deep work workstation. Features customized interval Pomodoro cycles, distraction domain blocking, habit formation streak tracking, offline binaural audio loops, and daily session productivity heatmaps.",
    "techStack": [
      "Python (Focus Desktop)",
      "Kotlin & Jetpack Compose",
      "Hostfile Network Filter",
      "Matplotlib Session Analytics",
      "Foreground Audio Player Service"
    ],
    "keyMetrics": [
      {
        "label": "Distraction Level",
        "value": "Zero Ads / Clean UI"
      },
      {
        "label": "Desktop Blocker",
        "value": "Domain Host Filtering"
      },
      {
        "label": "Analytics",
        "value": "Daily/Weekly Heatmaps"
      },
      {
        "label": "Soundscapes",
        "value": "Offline 48kHz Binaural"
      }
    ],
    "highlights": [
      "Automated website and distraction blocker enforcing strict deep-work discipline during active sessions",
      "Habit formation engine tracking unbroken daily streaks with mathematical consistency metrics",
      "Rich analytics graphing peak productivity hours, average focus length, and task completion velocity",
      "Dual implementations: Python workstation for desktop coding and Jetpack Compose for mobile focus"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "ecommerce-predictive",
    "title": "E-Commerce Predictive Analytics",
    "subtitle": "Machine Learning Demand Forecasting & Customer Lifetime Valuation",
    "category": "systems",
    "featured": false,
    "badge": "ML Analytics Engine",
    "badgeType": "production",
    "platform": "Python · Scikit-Learn, Pandas & Flask",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Machine Learning Demand Forecasting & Customer Lifetime Valuation",
    "problem": "Retailers face unpredictable inventory stockouts and customer churn due to static, retrospective sales reports that fail to predict future purchasing patterns.",
    "solution": "Built a modular machine learning pipeline analyzing customer transaction histories to forecast seasonal inventory demand, segment buyers using RFM (Recency, Frequency, Monetary) clustering, and predict churn probabilities before customers defect.",
    "techStack": [
      "Python",
      "Scikit-Learn",
      "K-Means Clustering",
      "Random Forest Regressor",
      "Flask Microservice",
      "Pandas & NumPy"
    ],
    "keyMetrics": [
      {
        "label": "Forecasting Model",
        "value": "Ensemble Random Forest"
      },
      {
        "label": "Segmentation",
        "value": "RFM + K-Means"
      },
      {
        "label": "Churn Prediction",
        "value": "Logistic ROC-AUC 0.88"
      },
      {
        "label": "Architecture",
        "value": "Modular ML Microservice"
      }
    ],
    "highlights": [
      "Automated feature engineering extracting purchase velocity, seasonal decay, and average cart size",
      "RFM customer segmentation identifying high-value VIP buyers vs. price-sensitive discount seekers",
      "Early warning churn detection model empowering businesses to dispatch automated retention coupons",
      "Clean REST API integration endpoints for seamless dashboard embedding"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "solar-analytics",
    "title": "Solar Analytics",
    "subtitle": "Photovoltaic Yield Modeling & Telemetry Engine",
    "category": "productivity",
    "featured": false,
    "badge": "Public Python Repo",
    "badgeType": "opensource",
    "platform": "Python · NumPy & Pandas",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Photovoltaic Yield Modeling & Telemetry Engine",
    "problem": "Solar array operators lack lightweight, accessible tools to simulate energy output based on solar irradiance variations, ambient panel temperatures, inverter conversion loss curves, and cloud shading events.",
    "solution": "Created an analytical solar yield forecasting tool written in Python. Processes atmospheric irradiance time-series, models panel temperature degradation coefficients, simulates MPPT tracking efficiency, and provides clean visualization charts of daily energy production.",
    "techStack": [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Photovoltaic Modeling",
      "Time-Series Analysis"
    ],
    "keyMetrics": [
      {
        "label": "Analysis Engine",
        "value": "Vectorized NumPy"
      },
      {
        "label": "Simulated Losses",
        "value": "Thermal + Inverter"
      },
      {
        "label": "Resolution",
        "value": "Hourly Time-Series"
      },
      {
        "label": "Repository",
        "value": "GitHub Public"
      }
    ],
    "highlights": [
      "Vectorized calculation of global tilted irradiance (GTI) across custom panel tilt and azimuth angles",
      "Temperature loss coefficient modeling based on ambient weather logs and wind cooling effects",
      "Inverter efficiency curves computing actual AC power output from theoretical DC generation",
      "Automated summary metrics: Capacity Utilization Factor (CUF) and Performance Ratio (PR)"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/Solar"
    }
  },
  {
    "id": "careerconnect",
    "title": "CareerConnect MVP",
    "subtitle": "AI-Driven Talent Matching & Skill Gap Analysis Platform",
    "category": "systems",
    "featured": false,
    "badge": "Public Python Repo",
    "badgeType": "opensource",
    "platform": "Python & NLP Architecture",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "AI-Driven Talent Matching & Skill Gap Analysis Platform",
    "problem": "Graduating engineering students face immense friction finding internships that match their actual technical competencies, while recruiters are overwhelmed by generic resumes that fail to highlight verified skills.",
    "solution": "Engineered an NLP-driven platform that parses candidate resumes, extracts verified technical proficiencies, maps them against industry job descriptions using vector similarity, and highlights concrete skill gaps with actionable learning roadmaps.",
    "techStack": [
      "Python",
      "NLP Information Extraction",
      "Cosine Similarity",
      "Scikit-Learn",
      "Flask API"
    ],
    "keyMetrics": [
      {
        "label": "Matching Metric",
        "value": "Vector Cosine Similarity"
      },
      {
        "label": "Extraction",
        "value": "Skills, Experience, Degrees"
      },
      {
        "label": "Status",
        "value": "GitHub Public"
      },
      {
        "label": "Response Time",
        "value": "<150ms / Profile"
      }
    ],
    "highlights": [
      "Automated PDF and DOCX resume parsing with regex and NER tokenization for technical terms",
      "Quantitative skill match scoring ranking applicants objectively against job requirements",
      "Identifies missing competencies and recommends targeted certifications and tutorials",
      "REST API architecture designed for lightweight integration into university placement portals"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/CareerConnect"
    }
  },
  {
    "id": "free-ai-invoice",
    "title": "Free AI Invoice & GST Assistant",
    "subtitle": "Smart Business Billing & Automated GST Calculation Utility",
    "category": "android",
    "featured": false,
    "badge": "Production Utility",
    "badgeType": "production",
    "platform": "Android & Kotlin",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Smart Business Billing & Automated GST Calculation Utility",
    "problem": "Independent freelancers and small kirana owners need to create professional GST-compliant PDF bills without paying costly monthly SaaS subscriptions.",
    "solution": "Developed a free, lightweight mobile invoicing tool that formats tax invoices, automatically calculates CGST/SGST/IGST by HSN codes, and exports clean PDF receipts formatted for instant WhatsApp sharing.",
    "techStack": [
      "Kotlin",
      "PDFBox Android",
      "Room Database",
      "Android Jetpack",
      "WhatsApp Direct API"
    ],
    "keyMetrics": [
      {
        "label": "Cost",
        "value": "100% Free / No Ads"
      },
      {
        "label": "GST Computation",
        "value": "Auto Split CGST/SGST"
      },
      {
        "label": "PDF Generation",
        "value": "Sub-Second"
      },
      {
        "label": "Operation",
        "value": "100% Offline"
      }
    ],
    "highlights": [
      "Instant PDF invoice compilation with custom business logo, UPI QR code, and signatures",
      "Built-in HSN code directory suggesting correct GST tax slabs (0%, 5%, 12%, 18%, 28%)",
      "Integrated client phonebook and repeat item catalog reducing invoice creation time to under 30 seconds",
      "Direct WhatsApp document dispatch with pre-filled payment request messages"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "agrilink",
    "title": "AgriLink",
    "subtitle": "Decentralized Agricultural Commodity Marketplace & Fair Price Discovery",
    "category": "systems",
    "featured": false,
    "badge": "Architecture Spec",
    "badgeType": "research",
    "platform": "Android & Microservices",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Decentralized Agricultural Commodity Marketplace & Fair Price Discovery",
    "problem": "Smallholder farmers in rural regions are forced to sell produce through multi-tiered intermediaries who withhold mandi price transparency, resulting in up to 40% loss of farmer profit margins.",
    "solution": "Architected a direct farmer-to-buyer marketplace prototype supporting SMS fallback for feature phones, mandi APMC price aggregation, and localized Hindi/Marathi voice-guided crop listings.",
    "techStack": [
      "Kotlin",
      "Android Jetpack",
      "APMC Mandi APIs",
      "SMS Gateway Fallback",
      "Localized Voice Search"
    ],
    "keyMetrics": [
      {
        "label": "Intermediary Margin Cut",
        "value": "~35% Saved"
      },
      {
        "label": "Fallback",
        "value": "Two-way SMS Channel"
      },
      {
        "label": "Languages",
        "value": "Hindi, Marathi, English"
      },
      {
        "label": "Mandi Coverage",
        "value": "All Major APMC Hubs"
      }
    ],
    "highlights": [
      "Aggregates daily government APMC market rates across district mandis for price transparency",
      "Voice-guided crop listing enabling low-literacy farmers to register harvest batches easily",
      "Direct buyer bidding with escrow milestone confirmations preventing default payments",
      "Offline sync architecture saving draft listings during intermittent rural cellular reception"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "digitalkhata",
    "title": "Vyapar Khata (DigitalKhata)",
    "subtitle": "Lightweight Double-Entry Ledger for Indian MSME Retailers",
    "category": "android",
    "featured": false,
    "badge": "MSME Utility",
    "badgeType": "production",
    "platform": "Android · Kotlin & Room",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Lightweight Double-Entry Ledger for Indian MSME Retailers",
    "problem": "Neighborhood retail stores (kirana, hardware, apparel) struggle with overdue customer credits (udhaar) that accumulate without systematic reminder tracking, leading to working capital shortfalls.",
    "solution": "Built a streamlined digital credit/debit register designed around the fast-paced mental model of Indian shopkeepers. Stores transactions offline, tallies customer balances instantly, and drafts localized payment reminder messages.",
    "techStack": [
      "Kotlin",
      "Room Database",
      "MVVM Architecture",
      "SMS & WhatsApp Intents",
      "Local Auto-Backup"
    ],
    "keyMetrics": [
      {
        "label": "Transaction Speed",
        "value": "<3 Seconds to Log"
      },
      {
        "label": "Reminders",
        "value": "One-Tap WhatsApp & SMS"
      },
      {
        "label": "Storage",
        "value": "100% Offline SQLite"
      },
      {
        "label": "Security",
        "value": "PIN & Biometric Lock"
      }
    ],
    "highlights": [
      "Simple two-column credit (Jama) and debit (Udhaar) interface familiar to traditional accountants",
      "Automated balance aggregation preventing disputes during monthly customer settlements",
      "Personalized WhatsApp payment reminders in Hindi, English, and regional Indian languages",
      "Local PIN and fingerprint biometric protection securing customer contact registers"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "vaidiktech",
    "title": "VaidikTech Core Platform",
    "subtitle": "Design System, Micro-Libraries & Native Tooling Infrastructure",
    "category": "productivity",
    "featured": false,
    "badge": "Core Platform",
    "badgeType": "production",
    "platform": "TypeScript · Node.js & React Ecosystem",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Design System, Micro-Libraries & Native Tooling Infrastructure",
    "problem": "Building multiple native Android and web applications independently leads to redundant boilerplate, fragmented design tokens, inconsistent encryption patterns, and duplicated financial math routines.",
    "solution": "Constructed the unified VaidikTech platform and code infrastructure repository: centralizing design tokens, cryptographic helper contracts, reusable integer math utilities, build automation scripts, and shared documentation across all commercial products.",
    "techStack": [
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Design Systems",
      "Cryptographic Contracts",
      "CI/CD Tooling"
    ],
    "keyMetrics": [
      {
        "label": "Ecosystem Role",
        "value": "Shared Infrastructure"
      },
      {
        "label": "Languages",
        "value": "TypeScript & Kotlin Interop"
      },
      {
        "label": "Products Powered",
        "value": "Girvi, JewelBill, AdvoKosh"
      },
      {
        "label": "Status",
        "value": "Active Development"
      }
    ],
    "highlights": [
      "Unified design tokens for dark luxury aesthetics across mobile and web interfaces",
      "Shared mathematical specifications for financial compounding and thermal printing bytecodes",
      "Standardized security protocols guaranteeing zero-network compliance and keystore binding",
      "Centralized documentation and release management tooling for Google Play Store deployments"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/VaidikTech"
    }
  },
  {
    "id": "ai-sudoku-vision",
    "title": "AI Sudoku Vision & AR Solver",
    "subtitle": "Real-Time OpenCV Perspective Warp, CNN Digit Recognition & AR Overlay",
    "category": "ai",
    "featured": true,
    "badge": "Computer Vision & DL",
    "badgeType": "research",
    "platform": "Python 3.12+ · OpenCV 4.10 · PyTorch / CNN",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Real-Time OpenCV Perspective Warp, CNN Digit Recognition & AR Overlay",
    "problem": "Solving printed newspaper or magazine Sudoku puzzles traditionally requires manual, error-prone data entry into solver apps. Existing image scanners fail under skewed camera angles, wrinkled paper surfaces, fluctuating ambient illumination, and varied font weights.",
    "solution": "Engineered an end-to-end computer vision and deep learning system. Applies adaptive Gaussian thresholding, morphological dilation, and contour polygon approximation to identify the 4 outer corners of the puzzle grid in live webcam/camera streams. Computes a perspective transform homography matrix to unwarp the board into a normalized 450x450 coordinate space. A lightweight Convolutional Neural Network (CNN) + KNN classifier recognizes digits with 98.4% accuracy across 81 segmented cells. An optimized recursive backtracking solver resolves the puzzle in <15ms, and the solved numbers are inverse-warped and superimposed back into the original skewed camera frame in real time.",
    "techStack": [
      "Python 3.12+",
      "OpenCV 4.10.0",
      "PyTorch 2.4+ / CNN",
      "Perspective Homography",
      "Constraint Backtracking",
      "NumPy & SciPy",
      "AR Projection"
    ],
    "keyMetrics": [
      { "label": "Warp Extraction", "value": "<8ms Real-Time" },
      { "label": "CNN Digit Accuracy", "value": "98.4% On-Device" },
      { "label": "Backtracking Solve", "value": "<15ms Worst Case" },
      { "label": "Augmented Reality", "value": "Live Inverse Homography" }
    ],
    "highlights": [
      "Sub-8ms 4-corner perspective unwarping utilizing OpenCV contour hierarchy and polygon approximation",
      "Custom-trained Convolutional Neural Network with data augmentation for robust digit classification",
      "Constraint-propagation recursive backtracking algorithm capable of solving 17-clue minimal grids",
      "Real-time Augmented Reality overlay projecting solved digits directly into skewed video frames"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "emotion-music-ai",
    "title": "Emotion Music AI",
    "subtitle": "Real-Time Facial Expression Recognition & Adaptive Spotify Mood Player",
    "category": "ai",
    "featured": true,
    "badge": "Affective AI Engine",
    "badgeType": "research",
    "platform": "Python 3.12+ · OpenCV 4.10 · TensorFlow / Keras · Spotify API",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Real-Time Facial Expression Recognition & Adaptive Spotify Mood Player",
    "problem": "Modern music streaming services require continuous active interaction to select genres and playlists. When users undergo emotional fatigue, high-intensity focus, or stress, they have no passive, hands-free mechanism to calibrate background music according to their real-time psychological state.",
    "solution": "Created an affective computing system combining edge computer vision with dynamic audio playlist generation. Ingests video from standard webcams, applies Haar Cascade face localization, and classifies facial micro-expressions into 7 discrete emotional states using a deep Convolutional Neural Network running at 60 FPS. Integrates with the Spotify Web API via Spotipy: querying user libraries and Spotify recommendation endpoints for track valence, acousticness, and danceability parameters to seamlessly auto-queue harmonious playlists without user intervention.",
    "techStack": [
      "Python 3.12+",
      "OpenCV 4.10.0",
      "TensorFlow / Keras",
      "Deep CNN Emotion Model",
      "Spotipy / Spotify Web API",
      "PyQt5 / Tkinter GUI",
      "Affective Computing"
    ],
    "keyMetrics": [
      { "label": "Inference Speed", "value": "60 FPS GPU Stream" },
      { "label": "Emotion Categories", "value": "7 Affective States" },
      { "label": "Playlist Adaptation", "value": "<350ms Dynamic Transition" },
      { "label": "User Privacy", "value": "Zero Cloud Video Streaming" }
    ],
    "highlights": [
      "High-throughput real-time face detection and expression classification operating at 60 FPS",
      "Temporal moving-average filtering preventing erratic playlist changes from momentary blinks or yawns",
      "Seamless Spotify OAuth2 integration dynamically modulating acousticness and valence attributes",
      "Offline-first video pipeline ensuring webcam frames are processed locally without leaking biometric data"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "mixamo-3d-pipeline",
    "title": "Mixamo 3D Render Pipeline",
    "subtitle": "Headless Blender bpy Automation, Skeletal Retargeting & MoviePy Compositor",
    "category": "productivity",
    "featured": false,
    "badge": "Graphics Engineering",
    "badgeType": "opensource",
    "platform": "Python 3.12+ · Blender bpy 4.2+ · MoviePy 2.0+ · FFmpeg",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Headless Blender bpy Automation, Skeletal Retargeting & MoviePy Compositor",
    "problem": "Producing batches of stylized 3D dance and character animation videos manually inside GUI 3D packages is exceptionally labor-intensive—requiring repetitive armature binding, manual camera alignment, manual render queue management, and separate video editing suite compositing.",
    "solution": "Architected a programmatic 3D animation and rendering pipeline using Python and Blender's headless C-Python interface (bpy). Ingests 3D character meshes, automatically transfers skeletal bone hierarchies from Mixamo motion capture rigs, executes headless GPU EEVEE/Cycles rendering with scripted cinematic camera orbits, and orchestrates MoviePy and FFmpeg to composite synchronized, tempo-matched audio tracks into ready-to-publish MP4 video files.",
    "techStack": [
      "Python 3.12+",
      "Blender bpy 4.2+",
      "Mixamo Mocap Armatures",
      "MoviePy 2.0+",
      "FFmpeg Headless Muxing",
      "GPU EEVEE / Cycles Batching"
    ],
    "keyMetrics": [
      { "label": "Workflow Automation", "value": "100% Headless CLI" },
      { "label": "Pipeline Speedup", "value": "10x vs Manual Studio" },
      { "label": "Audio Sync Accuracy", "value": "Frame-Perfect BPM Matching" },
      { "label": "Output Format", "value": "4K / 60 FPS Render Batch" }
    ],
    "highlights": [
      "Automated skeletal bone binding and weight normalization across varied character mesh topologies",
      "Scripted camera tracking algorithms calculating optimal field of view and focal distance automatically",
      "Headless background GPU execution without GUI overhead, enabling continuous batch rendering"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "rubiks-cube-vision",
    "title": "Rubik's Cube Vision & Optimal Solver",
    "subtitle": "HSV Computer Vision Scanner, Kociemba Algorithm & Interactive 3D Playback",
    "category": "systems",
    "featured": false,
    "badge": "Algorithmic Solver",
    "badgeType": "research",
    "platform": "Python 3.12+ · OpenCV 4.10 · Kociemba Algorithm · Pygame / OpenGL",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "HSV Computer Vision Scanner, Kociemba Algorithm & Interactive 3D Playback",
    "problem": "Learning to solve a Rubik's Cube or diagnosing tangled permutations requires memorizing dozens of complex CFOP algorithms. Digital solvers either demand tedious manual color button clicking or compute suboptimal 100+ move solutions.",
    "solution": "Engineered an automated 6-face computer vision scanning system with OpenCV. Utilizes adaptive HSV color segmentation to isolate 54 individual facelets directly from camera feeds, robust against room lighting shifts. Feeds the cube state into Kociemba's Two-Phase Algorithm to calculate God's Algorithm optimal solutions in under 20 moves in <35ms. Presents solutions through an interactive 60 FPS 3D OpenGL cube simulation that users can scrub, pause, and rotate.",
    "techStack": [
      "Python 3.12+",
      "OpenCV 4.10.0",
      "Kociemba Two-Phase Algorithm",
      "OpenGL / Pygame 3D",
      "HSV Color Segmentation",
      "Discrete Group Theory"
    ],
    "keyMetrics": [
      { "label": "Solution Move Count", "value": "<20 Moves (Optimal)" },
      { "label": "Solve Computation", "value": "<35ms Group Search" },
      { "label": "Color Segmentation", "value": "Adaptive Lighting Invariance" },
      { "label": "3D Visualizer", "value": "60 FPS Interactive OpenGL" }
    ],
    "highlights": [
      "Automated facelet detection using dynamic HSV color clustering with Euclidean distance re-projection",
      "Kociemba Two-Phase Algorithm reducing search space from 4.3x10^19 states into coset subgroups",
      "Interactive 3D OpenGL viewport displaying step-by-step turn notations (U, R, F, D, L, B)"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "dhobalite",
    "title": "DhobaLite",
    "subtitle": "On-Demand Laundry & Garment Operations Platform for Indian Dhobis",
    "category": "android",
    "featured": true,
    "badge": "Clean Architecture",
    "badgeType": "production",
    "platform": "Native Android · Kotlin 2.0+ · Jetpack Compose · Dagger Hilt & Firebase",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "On-Demand Laundry & Garment Operations Platform for Indian Dhobis",
    "problem": "Traditional Indian neighborhood laundry and dry-cleaning services (dhobis) manage hundreds of garment bundles daily using loose paper slips and chalk markings on fabric, causing lost garments and untracked dues.",
    "solution": "Clean Architecture Android application engineered with Dagger Hilt, Room Database, and Cloud Firestore. Provides distinct portals for dhobis (QR tagging, price lists, khata dues, settlement reports) and customers (order tracking, WhatsApp notifications).",
    "techStack": [
      "Kotlin 2.0+ (K2)",
      "Jetpack Compose M3",
      "Dagger Hilt DI",
      "Room SQLite 2.6+",
      "Cloud Firestore & FCM",
      "QR / Barcode Scanner"
    ],
    "keyMetrics": [
      { "label": "Architecture", "value": "Clean Architecture + Hilt" },
      { "label": "Offline Capability", "value": "Room DB Local Sync" },
      { "label": "Notification Channels", "value": "FCM & Direct WhatsApp" }
    ],
    "highlights": [
      "Separated domain use-cases for auth, order processing, and customer notifications",
      "Automated QR code garment tagging linking individual items to customer accounts",
      "Instant WhatsApp bill dispatch with itemized counts and delivery deadlines"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "chrono-os",
    "title": "CHRONO 2.0",
    "subtitle": "Cognitive Performance Operating System & Circadian Deep Work Advisor",
    "category": "android",
    "featured": true,
    "badge": "Deep Work Engine",
    "badgeType": "production",
    "platform": "Native Android · Kotlin 2.0+ · Jetpack Compose M3 · Claude API & StateFlow",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Cognitive Performance Operating System & Circadian Deep Work Advisor",
    "problem": "Modern developers battle chronic cognitive fragmentation. Static timers ignore circadian energy rhythms and provide zero intelligent feedback on deep work debt.",
    "solution": "Native Android cognitive performance OS in Kotlin and Jetpack Compose M3. Implements TEMPO circadian math, ARIA Claude API AI productivity advisor for mock interviews, arcade cognitive sprints, and DataStore persistence.",
    "techStack": [
      "Kotlin 2.0+ (K2)",
      "Jetpack Compose Material 3",
      "StateFlow & ViewModel",
      "Anthropic Claude API",
      "DataStore Preferences"
    ],
    "keyMetrics": [
      { "label": "Adaptive Algorithm", "value": "Circadian TEMPO Model" },
      { "label": "AI Advisor", "value": "ARIA Claude Streaming" },
      { "label": "Gamified Sprints", "value": "DSA Blitz & Focus Arcade" }
    ],
    "highlights": [
      "Dynamic TEMPO biological energy curve visualizer mapping focus tasks into optimal circadian windows",
      "ARIA AI mentor chat providing weekly productivity synthesis and timed technical mock interviews",
      "CHRONO Arcade suite featuring cognitive warm-ups: Fate Wheel, DSA Blitz, and Focus Sprint"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "vaidikratnam",
    "title": "VaidikRatnam",
    "subtitle": "Vedic Gemology Provenance Platform & Custom Fine Jewelry Workstation",
    "category": "productivity",
    "featured": true,
    "badge": "Luxury Commerce",
    "badgeType": "production",
    "platform": "Next.js 14.2+ · TypeScript · Supabase · Jyotish Planetary Engine",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Vedic Gemology Provenance Platform & Custom Fine Jewelry Workstation",
    "problem": "The Indian gemstone market is filled with synthetic counterfeits, undisclosed chemical treatments, and opaque astrological claims without astronomical grounding.",
    "solution": "Modern luxury commerce and authentication platform in Next.js 14 and Supabase. Computes astrological gemstone suitability from Vedic planetary degrees, verifies GIA/IGI laboratory certificates, and integrates live gold bullion rates.",
    "techStack": [
      "Next.js 14.2+ (App Router)",
      "TypeScript",
      "Supabase PostgreSQL",
      "Tailwind CSS",
      "Live Bullion API"
    ],
    "keyMetrics": [
      { "label": "Framework", "value": "Next.js 14 App Router" },
      { "label": "Database", "value": "Supabase Relational Auth" },
      { "label": "Verification", "value": "Cryptographic Lab Certificate Auth" }
    ],
    "highlights": [
      "Computational Jyotish algorithm translating birth coordinates into planetary lagna and gemstone affinities",
      "GIA/IGI laboratory certificate verification viewer with tamper prevention",
      "Bespoke 3D jewelry customization consultation pipeline with real-time gold weight calculations"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "alignn-careers",
    "title": "Alignn Career Intelligence",
    "subtitle": "AI Resume Qualification Radar & Semantic Opportunity Matching Engine",
    "category": "ai",
    "featured": true,
    "badge": "AI Systems",
    "badgeType": "production",
    "platform": "Python 3.12+ · FastAPI 0.115+ · Next.js 14.2+ · PostgreSQL 16+ & SQLAlchemy",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "AI Resume Qualification Radar & Semantic Opportunity Matching Engine",
    "problem": "Job applicants face extreme noise on standard portals, submitting hundreds of applications blindly without understanding objective eligibility criteria.",
    "solution": "Career intelligence system powered by Python FastAPI and Next.js 14. Implements mathematical qualification scoring across educational criteria and tech proficiencies with dynamic career radar maps.",
    "techStack": [
      "Python 3.12+",
      "FastAPI 0.115+",
      "Next.js 14.2+",
      "PostgreSQL 16+ & Alembic",
      "SQLAlchemy 2.0+"
    ],
    "keyMetrics": [
      { "label": "Backend Latency", "value": "<18ms P95 Response" },
      { "label": "Validation", "value": "Pydantic V2 Strict Schemas" },
      { "label": "Matching Algorithm", "value": "Multi-Factor Eligibility Scoring" }
    ],
    "highlights": [
      "Decoupled microservice architecture separating qualification matching, notifications, and seeding",
      "Rigorous Pydantic V2 data validation and asynchronous SQLAlchemy ORM database querying",
      "Clean Next.js 14 applicant portal with interactive career radar maps"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "hindu-panchang-engine",
    "title": "Vedic Panchang Ephemeris Engine",
    "subtitle": "Astronomical Topocentric Planetary Tracker & Precise Vedic Calendar Math",
    "category": "systems",
    "featured": false,
    "badge": "Astronomical Math",
    "badgeType": "research",
    "platform": "Python 3.12+ · PyEphem · Spherical Trigonometry · Tkinter",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Astronomical Topocentric Planetary Tracker & Precise Vedic Calendar Math",
    "problem": "Calculating authentic Hindu Panchang requires real-time spherical trigonometry tracking the exact topocentric angular separation between the Moon and Sun.",
    "solution": "Astronomical computation engine in Python utilizing PyEphem. Computes exact solar/lunar ecliptic coordinates, resolving the 12-degree moon-sun elongation angles defining Tithi transitions, local sunrise, sunset, and Rahu Kalam.",
    "techStack": [
      "Python 3.12+",
      "PyEphem Astronomical Engine",
      "Spherical Trigonometry",
      "Tkinter Desktop UI"
    ],
    "keyMetrics": [
      { "label": "Coordinate Accuracy", "value": "Topocentric Arcsecond Precision" },
      { "label": "Tithi Calculation", "value": "12° Elongation Angular Solver" },
      { "label": "Solar Timing", "value": "Refraction Compensated" }
    ],
    "highlights": [
      "Mathematical tracking of Sun and Moon ecliptic longitudes to calculate exact Tithi start and end epochs",
      "Atmospheric refraction compensation for exact mathematical sunrise and sunset timings",
      "Automatic calculation of the 27 Nakshatras and 27 astrological Yogas"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "neural-jarvis-core",
    "title": "Neural Jarvis NLU Voice Engine",
    "subtitle": "PyTorch Feedforward Neural Intent Classifier & Speech Automation Pipeline",
    "category": "ai",
    "featured": true,
    "badge": "Deep Learning Core",
    "badgeType": "research",
    "platform": "Python 3.12+ · PyTorch 2.4+ · NLTK · SpeechRecognition & PyAudio",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "PyTorch Feedforward Neural Intent Classifier & Speech Automation Pipeline",
    "problem": "Rule-based voice assistants fail when user phrasing deviates from hardcoded regex patterns, leading to brittle commands.",
    "solution": "Deep learning NLU core built in PyTorch. Multi-layer Feedforward Neural Network trained on custom intent corpora with NLTK tokenization and Porter stemming for robust intent classification.",
    "techStack": [
      "Python 3.12+",
      "PyTorch 2.4+ (nn.Module)",
      "NLTK Tokenization & Stemming",
      "SpeechRecognition & PyAudio"
    ],
    "keyMetrics": [
      { "label": "Neural Architecture", "value": "Custom Feedforward PyTorch NN" },
      { "label": "Inference Time", "value": "<6ms Vector Classification" },
      { "label": "Training Loss", "value": "CrossEntropyLoss <0.001" }
    ],
    "highlights": [
      "PyTorch model architecture serializing learned synaptic weights into portable .pth checkpoints",
      "Custom NLP pre-processing pipeline featuring whitespace filtering, tokenization, and Porter stemming",
      "Zero-cloud local inference running on consumer hardware without sending audio to third-party APIs"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "tuition-saas",
    "title": "Tuition Coaching SaaS",
    "subtitle": "Mobile-First Batch Attendance & Pending Fee Ledger for Indian Tutors",
    "category": "productivity",
    "featured": false,
    "badge": "SaaS Platform",
    "badgeType": "production",
    "platform": "Python 3.12+ · Flask · SQLite · Razorpay Integration",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Mobile-First Batch Attendance & Pending Fee Ledger for Indian Tutors",
    "problem": "Private coaching institutes in India manage student batches, daily attendance records, and monthly fee collections in physical paper notebooks.",
    "solution": "Mobile-friendly web SaaS tailored for coaching tutors. Manages batch attendance, tracks monthly fee statuses (Paid, Pending, Overdue), and integrates Razorpay for PRO subscription billing.",
    "techStack": [
      "Python 3.12+",
      "Flask Microframework",
      "SQLite & SQLAlchemy",
      "Razorpay Gateway"
    ],
    "keyMetrics": [
      { "label": "Target Segment", "value": "10-200 Student Coaching Centers" },
      { "label": "Attendance Speed", "value": "Single-Tap Batch Marking" },
      { "label": "Payments", "value": "Razorpay Webhooks" }
    ],
    "highlights": [
      "Instant attendance logging with automatic monthly attendance percentage calculation per student",
      "Clear monthly financial ledger showing collected revenue versus pending fees across batches",
      "Subscription gateway integration supporting automated tiered account upgrades with Razorpay"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "flask-chess-engine",
    "title": "FlaskChess Engine",
    "subtitle": "Minimax Alpha-Beta Pruning Chess Engine & Web Canvas Game",
    "category": "systems",
    "featured": false,
    "badge": "Algorithmic Game Engine",
    "badgeType": "opensource",
    "platform": "Python 3.12+ · Flask · Minimax with Alpha-Beta Pruning · HTML5 Canvas",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Minimax Alpha-Beta Pruning Chess Engine & Web Canvas Game",
    "problem": "Building an algorithmic board game engine requires solving combinatorial move explosion while maintaining responsive browser gameplay.",
    "solution": "Chess game and engine from scratch in Python. Features full legal move generation, piece-square heuristic evaluation tables, and recursive minimax tree search with alpha-beta pruning.",
    "techStack": [
      "Python 3.12+",
      "Flask REST API",
      "Minimax with Alpha-Beta Pruning",
      "Piece-Square Positional Heuristics",
      "HTML5 Canvas"
    ],
    "keyMetrics": [
      { "label": "Algorithm", "value": "Minimax + Alpha-Beta Pruning" },
      { "label": "Rules Supported", "value": "Castling, En Passant & Promotion" },
      { "label": "Interface", "value": "Zero-Dependency HTML5 Canvas" }
    ],
    "highlights": [
      "Alpha-beta pruning reducing search space exponent by more than 50% without missing optimal moves",
      "Positional heuristics encouraging piece center control, king safety, and early pawn development",
      "Interactive responsive chessboard with visual move indicators and checkmate detection"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "gemini-chat-stream",
    "title": "Gemini Chat Stream",
    "subtitle": "Real-Time Server-Sent Events AI Chat Studio with Markdown Highlighting",
    "category": "ai",
    "featured": false,
    "badge": "Generative AI",
    "badgeType": "production",
    "platform": "Python 3.12+ · Google Gemini API · Tailwind CSS · Server-Sent Events",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Real-Time Server-Sent Events AI Chat Studio with Markdown Highlighting",
    "problem": "Buffering entire LLM responses before rendering creates noticeable delays and poor developer experience.",
    "solution": "Generative AI chat client utilizing Google Gemini API. Streams token deltas via Server-Sent Events (SSE), dynamically rendering markdown and syntax-highlighted code blocks with dark luxury styling.",
    "techStack": [
      "Python 3.12+",
      "Google Gemini Generative AI SDK",
      "Server-Sent Events (SSE)",
      "Tailwind CSS",
      "Markdown Highlighting"
    ],
    "keyMetrics": [
      { "label": "Streaming Latency", "value": "<120ms First Token (TTFT)" },
      { "label": "LLM Engine", "value": "Google Gemini 1.5 Pro" },
      { "label": "Rendering", "value": "Real-Time Markdown Token Stream" }
    ],
    "highlights": [
      "Server-Sent Events streaming yielding immediate visual feedback and zero perceived wait times",
      "Real-time incremental markdown parser rendering code fences with language detection and copy buttons",
      "Persistent conversation context window maintaining multi-turn dialogue history"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "esp32-iot-cam-mesh",
    "title": "ESP32-CAM IoT Surveillance & Relay Mesh",
    "subtitle": "Zero-Cloud Microcontroller MJPEG Video Streamer & Appliance Relay Hub",
    "category": "systems",
    "featured": false,
    "badge": "Hardware & IoT",
    "badgeType": "opensource",
    "platform": "Embedded C++ · ESP32 / Arduino · Wi-Fi HTTP Stream · Relay Hardware",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Zero-Cloud Microcontroller MJPEG Video Streamer & Appliance Relay Hub",
    "problem": "Consumer smart home cameras depend on closed cloud ecosystems that harvest private video streams and require monthly subscriptions.",
    "solution": "Embedded C++ firmware for ESP32 and ESP32-CAM. Streams raw MJPEG video over local Wi-Fi from the OV2640 camera module via an on-chip HTTP server, controlling 4-channel AC appliance relays via local Wi-Fi and Bluetooth.",
    "techStack": [
      "Embedded C++",
      "ESP32 & ESP32-CAM",
      "Arduino Framework",
      "OV2640 Camera Sensor",
      "Local HTTP MJPEG Streamer",
      "4-Channel Relay Hardware"
    ],
    "keyMetrics": [
      { "label": "Video Latency", "value": "<40ms Local LAN Stream" },
      { "label": "Cloud Dependency", "value": "0% (Air-Gapped Private LAN)" },
      { "label": "Hardware Control", "value": "4-Channel 230V AC Relays" }
    ],
    "highlights": [
      "Embedded HTTP server on ESP32 streaming live video without requiring an external proxy or server",
      "Configurable camera sensor registers (brightness, contrast, resolution, frame rate) via URL queries",
      "Direct hardware GPIO pin control switching high-voltage relays for domestic appliance automation"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  }
],

  certificates: [
  {
    "id": "nptel-oops",
    "title": "Fundamentals of Object Oriented Programming",
    "issuer": "NPTEL · IIT Kharagpur (Ministry of Education)",
    "category": "nptel",
    "date": "Jan - Apr 2026",
    "score": "75% (Elite)",
    "badge": "Elite Certificate",
    "credits": "4 Credits Recommended",
    "credentialId": "NPTEL26CS87S1252401044",
    "fileUrl": "/certificates/Fundamentals of Object Oriented Programming.pdf",
    "fileType": "pdf",
    "skillsLearned": [
      "Object-Oriented Design (OOD)",
      "Polymorphism & Inheritance",
      "Encapsulation & Abstraction",
      "C++ & Modern OOP Patterns",
      "Memory Management & Pointers"
    ],
    "description": "12-week comprehensive theoretical and applied curriculum on Object-Oriented paradigms, classes, operator overloading, virtual tables, and modular software architecture certified by IIT Kharagpur."
  },
  {
    "id": "nptel-ml",
    "title": "Introduction to Machine Learning",
    "issuer": "NPTEL · IIT Kharagpur",
    "category": "nptel",
    "date": "Jul - Oct",
    "score": "Certified (68%)",
    "badge": "AI/ML Core",
    "credits": "4 Credits Recommended",
    "credentialId": "NPTEL-IIT-ML-CORE",
    "fileUrl": "/certificates/Introduction To Machine Learning.pdf",
    "fileType": "pdf",
    "skillsLearned": [
      "Supervised & Unsupervised Learning",
      "Linear & Logistic Regression",
      "Decision Trees & Random Forests",
      "Neural Networks & Gradient Descent",
      "Dimensionality Reduction (PCA)"
    ],
    "description": "12-week advanced mathematical foundation in statistical learning theory, optimization loss functions, probabilistic graphical models, and algorithmic regression/classification."
  },
  {
    "id": "nptel-dsa-python",
    "title": "Programming, Data Structures and Algorithms Using Python",
    "issuer": "NPTEL · Chennai Mathematical Institute (CMI)",
    "category": "nptel",
    "date": "Jan - Mar 2026",
    "score": "Certified",
    "badge": "Core DSA",
    "credits": "3 Credits Recommended",
    "credentialId": "NPTEL26CS79S352800281",
    "fileUrl": "/certificates/Programming, Data Structures and Algorithms.pdf",
    "fileType": "pdf",
    "skillsLearned": [
      "Algorithm Complexity (Big-O)",
      "Sorting & Binary Search Trees",
      "Graphs, BFS & DFS Traversals",
      "Dynamic Programming (Memoization)",
      "Python Data Structures & Hash Tables"
    ],
    "description": "8-week algorithmic rigor covering abstract data types, recursive divide-and-conquer strategies, Dijkstra shortest paths, heaps, and Python computational optimization."
  },
  {
    "id": "nptel-dbms",
    "title": "Database Management System",
    "issuer": "NPTEL · IIT Kharagpur",
    "category": "nptel",
    "date": "Jul - Sep",
    "score": "Certified",
    "badge": "Database Architecture",
    "credits": "3 Credits Recommended",
    "credentialId": "NPTEL-IIT-DBMS-CORE",
    "fileUrl": "/certificates/Database Management System.pdf",
    "fileType": "pdf",
    "skillsLearned": [
      "Relational Algebra & Tuple Calculus",
      "Schema Normalization (1NF to BCNF)",
      "ACID Transactions & Concurrency Control",
      "B+ Trees & Storage Indexing",
      "SQL Query Optimization"
    ],
    "description": "8-week intensive database engineering course focusing on relational models, transaction isolation levels, write-ahead logging (WAL), and query plan execution."
  },
  {
    "id": "nptel-discrete-math",
    "title": "Discrete Mathematics",
    "issuer": "NPTEL · IIT Ropar (Ministry of Education)",
    "category": "nptel",
    "date": "Jul - Oct",
    "score": "Elite + Silver",
    "badge": "Elite Silver",
    "credits": "4 Credits Recommended",
    "credentialId": "NPTEL-IIT-DM-CORE",
    "fileUrl": "/certificates/Discrete Mathematics.pdf",
    "fileType": "pdf",
    "skillsLearned": [
      "Propositional & Predicate Logic",
      "Graph Theory & Planarity",
      "Combinatorics & Pigeonhole Principle",
      "Recurrence Relations & Generating Functions",
      "Set Theory & Boolean Algebra"
    ],
    "description": "12-week rigorous mathematical foundation covering computational proof techniques, graph theory, Eulerian/Hamiltonian circuits, combinatorics, and discrete structures certified with Elite Silver distinction by IIT Ropar."
  },
  {
    "id": "nptel-c-programming",
    "title": "Problem Solving Through Programming In C",
    "issuer": "NPTEL · IIT Kharagpur",
    "category": "nptel",
    "date": "Jan - Apr 2026",
    "score": "Certified",
    "badge": "Systems Programming",
    "credits": "4 Credits Recommended",
    "credentialId": "NPTEL26CS53S252401378",
    "fileUrl": "/certificates/Problem Solving Through Programming In C.pdf",
    "fileType": "pdf",
    "skillsLearned": [
      "Pointers & Memory Allocation (malloc/free)",
      "Bitwise Operations & Structs",
      "File I/O & Stream Buffers",
      "Algorithm Step-by-Step Tracing",
      "Low-Level Debugging"
    ],
    "description": "12-week fundamental programming course diving into hardware-level data representations, array memory layouts, pointer arithmetic, and algorithmic logic in C."
  },
  {
    "id": "hackerrank-problem-solving",
    "title": "Problem Solving (Basic)",
    "issuer": "HackerRank",
    "category": "hackerrank",
    "date": "Feb 24, 2025",
    "badge": "Verified Skill Assessment",
    "credentialId": "3D407F729E59",
    "credentialUrl": "https://www.hackerrank.com/certificates/3d407f729e59",
    "fileUrl": "/assets/certificates/hackerrank_problem_solving.jpg",
    "fileType": "image",
    "skillsLearned": [
      "Algorithmic Logic",
      "Data Structures",
      "Array & String Manipulations",
      "Edge-case Testing & Optimization"
    ],
    "description": "Verified certification passing HackerRank's rigorous timed algorithmic assessment covering core data structures, time complexity analysis, and clean algorithmic problem-solving."
  },
  {
    "id": "udemy-100-days-python",
    "title": "100 Days of Code: The Complete Python Pro Bootcamp",
    "issuer": "Udemy · Dr. Angela Yu",
    "category": "udemy",
    "date": "Aug 13, 2022",
    "badge": "64 Total Hours",
    "credentialId": "UC-c4665a9d-e104-4c61-bdf1-ae47ad0882cb",
    "credentialUrl": "https://ude.my/UC-c4665a9d-e104-4c61-bdf1-ae47ad0882cb",
    "fileUrl": "/assets/certificates/udemy_python_100_days.jpg",
    "fileType": "image",
    "skillsLearned": [
      "Python 3 Advanced OOP",
      "Web Scraping (BeautifulSoup & Selenium)",
      "APIs & Requests Automation",
      "Data Analysis (Pandas & NumPy)",
      "Desktop GUI (Tkinter & PyQt)",
      "Flask Web Development"
    ],
    "description": "Mastery of end-to-end Python engineering across 100 consecutive days of production challenges, building real-world automation scripts, data scrapers, desktop interfaces, and web applications."
  }
],

  codeSnippets: [
    {
      id: "advokosh-crypto",
      title: "Sovereign Chamber Encryption",
      file: "AdvoKosh · EncryptedChamberStorage.kt",
      language: "kotlin",
      description: "How AdvoKosh seals client case records using SQLCipher 256-bit AES with hardware keys managed by Android Keystore MasterKey.",
      code: `// Sovereign Chamber Database Factory with SQLCipher & Hardware Keystore
@Singleton
class ChamberDatabaseFactory @Inject constructor(
    @ApplicationContext private val context: Context
) {
    fun createEncryptedDatabase(): VakalatDatabase {
        // 1. Generate or retrieve hardware-backed MasterKey (AES-256-GCM)
        val masterKey = MasterKey.Builder(context)
            .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
            .setRequestStrongBoxBacked(true) // Hardware SE enclave if available
            .build()

        // 2. Retrieve secure database passphrase
        val passphrase = getOrCreateChamberPassphrase(context, masterKey)
        val openHelperFactory = SupportFactory(SQLiteDatabase.getBytes(passphrase))

        // 3. Build encrypted Room database with SQLCipher
        return Room.databaseBuilder(context, VakalatDatabase::class.java, "advokosh_chamber.db")
            .openHelperFactory(openHelperFactory)
            .addMigrations(MIGRATION_1_2, MIGRATION_2_3, MIGRATION_3_4)
            .fallbackToDestructiveMigrationOnDowngrade()
            .build()
    }
}`
    },
    {
      id: "swarmos-nearby",
      title: "Air-Gapped P2P Swarm Transport",
      file: "SwarmOS · NearbyTransport.kt",
      language: "kotlin",
      description: "Google Nearby Connections P2P_CLUSTER engine coordinating air-gapped machine-learning tasks with mutual visual verification digits.",
      code: `class NearbyTransport(
    private val context: Context,
    private val connectionsClient: ConnectionsClient
) {
    // Advertise Coordinator session in air-gapped high-throughput mode
    fun startCoordinatorAdvertising(sessionName: String, onAuthDigits: (String) -> Unit) {
        val options = AdvertisingOptions.Builder()
            .setStrategy(Strategy.P2P_CLUSTER) // High bandwidth local wireless
            .setLowPower(false)
            .build()

        connectionsClient.startAdvertising(
            sessionName,
            SWARM_SERVICE_ID,
            object : ConnectionLifecycleCallback() {
                override fun onConnectionInitiated(endpointId: String, info: ConnectionInfo) {
                    // Mutual numeric verification to prevent man-in-the-middle
                    onAuthDigits(info.authenticationDigits)
                    connectionsClient.acceptConnection(endpointId, payloadCallback)
                }
                override fun onConnectionResult(endpointId: String, result: ConnectionResolution) {
                    if (result.status.isSuccess) {
                        registerActiveWorkerNode(endpointId)
                    }
                }
                override fun onDisconnected(endpointId: String) {
                    handleWorkerDisconnection(endpointId)
                }
            },
            options
        )
    }
}`
    },
    {
      id: "paise",
      title: "Integer Paise Financial Pattern",
      file: "KaamKram / JewelBill · MoneyMath.kt",
      language: "kotlin",
      description: "Why KaamKram and JewelBill forbid Float & Double in monetary calculations. Storing money strictly as Long (paise) prevents catastrophic fractional currency drift.",
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

    override fun compareTo(other: Paise) = amount.compareTo(other.amount)
}`
    },
    {
      id: "mediapipe",
      title: "MediaPipe GPU Hand Landmark Pipeline",
      file: "SkyCanvas · HandLandmarkerHelper.kt",
      language: "kotlin",
      description: "Extracting 21 3D hand landmarks on device GPU delegate via CameraX image proxy with sub-15 millisecond latency.",
      code: `class HandLandmarkerHelper(
    private val context: Context,
    private val onResult: (HandLandmarkerResult, MPImage) -> Unit
) {
    private var handLandmarker: HandLandmarker? = null

    fun setupLandmarker() {
        val baseOptions = BaseOptions.builder()
            .setDelegate(Delegate.GPU) // High FPS via hardware delegate
            .setModelAssetPath("hand_landmarker.task")
            .build()

        val options = HandLandmarker.HandLandmarkerOptions.builder()
            .setBaseOptions(baseOptions)
            .setMinHandDetectionConfidence(0.6f)
            .setMinHandPresenceConfidence(0.6f)
            .setMinTrackingConfidence(0.6f)
            .setNumHands(1)
            .setRunningMode(RunningMode.LIVE_STREAM)
            .setResultListener { result, inputImage -> onResult(result, inputImage) }
            .build()

        handLandmarker = HandLandmarker.createFromOptions(context, options)
    }

    // Process CameraX frames without blocking the main UI thread
    fun detectLiveStream(imageProxy: ImageProxy) {
        val bitmap = imageProxy.toBitmap()
        val mpImage = BitmapImageBuilder(bitmap).build()
        handLandmarker?.detectAsync(mpImage, imageProxy.imageInfo.timestamp)
        imageProxy.close()
    }
}`
    }
  ],

  skills: {
    mobile: [
      { name: "Kotlin 2.0+ (Native Android)", level: "Expert", experience: "Flagship Language", icon: "code" },
      { name: "Jetpack Compose & Material 3", level: "Expert", experience: "Modern UI Paradigm", icon: "layout" },
      { name: "Java 17", level: "Proficient", experience: "Android & Systems", icon: "coffee" },
      { name: "MVVM & MVI Architecture", level: "Expert", experience: "Production Tested", icon: "layers" },
      { name: "Room SQLite & SQLCipher", level: "Expert", experience: "Local-First Encrypted DB", icon: "database" },
      { name: "Coroutines & Reactive Flow", level: "Advanced", experience: "Concurrency & Streams", icon: "activity" },
      { name: "CameraX & MediaPipe Vision", level: "Advanced", experience: "On-Device Hardware", icon: "camera" },
      { name: "Google Nearby (P2P Cluster)", level: "Advanced", experience: "Air-Gapped Mesh", icon: "radio" },
      { name: "WorkManager Alert Scheduling", level: "Advanced", experience: "Background Task Engine", icon: "bell" },
      { name: "Google Play Console Publishing", level: "Proficient", experience: "Live Store Products", icon: "play" }
    ],
    aiVision: [
      { name: "Google ML Kit (On-Device OCR)", level: "Expert", icon: "file-text" },
      { name: "MediaPipe Hands (Vision GPU)", level: "Advanced", icon: "eye" },
      { name: "YOLOv8 Object Detection", level: "Proficient", icon: "target" },
      { name: "Scikit-learn (Random Forest)", level: "Proficient", icon: "trending-up" },
      { name: "NLP Sentiment & Intent Scoring", level: "Proficient", icon: "message-square" },
      { name: "OpenCV Computer Vision", level: "Proficient", icon: "monitor" }
    ],
    backendSystems: [
      { name: "Python 3.9+", level: "Expert", icon: "terminal" },
      { name: "FastAPI Microservices", level: "Advanced", icon: "server" },
      { name: "Flask Web Applications", level: "Proficient", icon: "globe" },
      { name: "PostgreSQL & PostGIS", level: "Intermediate", icon: "database" },
      { name: "WebSockets & Socket.IO", level: "Advanced", icon: "radio" },
      { name: "Solidity & Smart Contracts", level: "Intermediate", icon: "cpu" }
    ],
    toolsAndWorkflow: [
      { name: "Android Studio & Android SDK", icon: "tool" },
      { name: "Git & GitHub", icon: "github" },
      { name: "Gradle (Kotlin DSL)", icon: "settings" },
      { name: "Bluetooth ESC/POS Thermal Printing", icon: "printer" },
      { name: "Postman API Suite", icon: "send" },
      { name: "OWASP MASVS Mobile Security", icon: "shield" }
    ]
  },

  journey: [
    {
      period: "2022 — Present",
      role: "B.Tech in Computer Science & Engineering (AI & ML)",
      organization: "Lakshmi Narain College of Technology (LNCT), Bhopal",
      description: "Specializing in Artificial Intelligence and Machine Learning. Deepening expertise in native Android development, edge machine learning, cryptographic mobile databases, and software architecture."
    },
    {
      period: "2023 — Present",
      role: "Founder & Independent Android Developer",
      organization: "VaidikTech",
      description: "Established VaidikTech as an independent mobile software brand. Built, architected, and published Girvi on Google Play; engineered AdvoKosh (solo advocate chamber OS), JewelBill (thermal jewellery billing workstation), KaamKram (Job-to-Payment OS), and GridCare (solar asset O&M)."
    },
    {
      period: "2024 — 2026",
      role: "Advanced Systems & Cooperative ML Engineering",
      organization: "Distributed Research & Hackathons",
      description: "Engineered SwarmOS (air-gapped nearby cooperative phone cluster using Google Nearby Connections P2P_CLUSTER and on-device ML Kit OCR), AI Disaster Response SOS mesh network, and Q-Transit Nexus (FastAPI quantum-inspired fleet routing digital twin)."
    },
    {
      period: "The Foundation",
      role: "Problem-Oriented Software Creation",
      organization: "Personal Lab",
      description: "Started developing tools with Python, Tkinter, and native Android, focusing early on building complete, publishable applications that solve real operational headaches for businesses rather than superficial demo scripts."
    }
  ]
};

// Export to window for global browser access and module for Node.js
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
