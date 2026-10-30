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
    "id": "qroute-final",
    "title": "QRoute-Final",
    "subtitle": "Quantum-Inspired Heuristic Urban Transit Optimization",
    "category": "systems",
    "featured": false,
    "badge": "Private Architecture Core",
    "badgeType": "research",
    "platform": "Python · Simulated Annealing & Graph Theory",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Quantum-Inspired Heuristic Urban Transit Optimization",
    "problem": "Traditional shortest-path algorithms (Dijkstra, A*) struggle when balancing multi-modal transfers, dynamic bus arrival variance, walking fatigue penalties, and extreme peak-hour passenger congestion across dense urban transit graphs.",
    "solution": "Engineered an advanced quantum-inspired optimization framework utilizing simulated annealing and probabilistic graph state superposition to solve combinatorial multi-modal route selection in large-scale urban transit networks.",
    "techStack": [
      "Python",
      "Graph Theory",
      "Simulated Annealing",
      "Combinatorial Optimization",
      "Multi-Agent Modeling",
      "NetworkX"
    ],
    "keyMetrics": [
      {
        "label": "Algorithm",
        "value": "Quantum-Inspired Annealing"
      },
      {
        "label": "Latency Reduction",
        "value": "31% Less Wait Time"
      },
      {
        "label": "Graph Capacity",
        "value": "10,000+ Node Network"
      },
      {
        "label": "Objective Function",
        "value": "Pareto Multi-Criteria"
      }
    ],
    "highlights": [
      "Multi-criteria Pareto optimization balancing travel duration, transfer friction, and transit cost",
      "Simulated annealing cooling schedule that escapes local minima in dense metropolitan grids",
      "Dynamic penalty weights adapting to live transit congestion and missed connection probability",
      "Comprehensive benchmarking against standard Dijkstra and Contraction Hierarchies"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/QRoute-Final"
    }
  },
  {
    "id": "qroute",
    "title": "QRoute",
    "subtitle": "Multi-Modal Urban Transit Optimization Engine",
    "category": "systems",
    "featured": false,
    "badge": "Public Python Repo",
    "badgeType": "opensource",
    "platform": "Python · Heuristics & Transit Analytics",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Multi-Modal Urban Transit Optimization Engine",
    "problem": "Commuters in developing metropolitan areas face fragmented public transport systems without unified schedules, resulting in prolonged transfer waiting times between buses, metros, and auto-rickshaws.",
    "solution": "Developed a Python-based transit routing engine that parses GTFS feeds, constructs unified transit graph matrices, and calculates time-optimized multi-modal journey plans with real-time transfer buffers.",
    "techStack": [
      "Python",
      "GTFS Specification",
      "Graph Traversal",
      "Pandas",
      "GeoPandas"
    ],
    "keyMetrics": [
      {
        "label": "Standard",
        "value": "GTFS Compatible"
      },
      {
        "label": "Modality",
        "value": "Bus + Metro + Walking"
      },
      {
        "label": "Status",
        "value": "Open Source"
      },
      {
        "label": "Speed",
        "value": "Sub-50ms Pathfinding"
      }
    ],
    "highlights": [
      "Unified GTFS schedule parser building directed multi-graph representations of transit lines",
      "Fast timetable lookups with forward-search time-expanded pathfinding",
      "Custom transfer buffer logic preventing unrealistically tight connections",
      "Clean CLI and modular API for seamless integration with mobile navigation frontends"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/QRoute"
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
    "id": "q-transit-nexus",
    "title": "Q-Transit Nexus",
    "subtitle": "Distributed Public Transport Mesh & Real-Time ETA Pipeline",
    "category": "systems",
    "featured": false,
    "badge": "Public Python Repo",
    "badgeType": "opensource",
    "platform": "Python · Distributed Stream Processing",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Distributed Public Transport Mesh & Real-Time ETA Pipeline",
    "problem": "Public transit tracking systems frequently suffer from GPS signal drops in urban canyons, leading to jumpy vehicle locations, phantom buses, and inaccurate arrival estimations for waiting passengers.",
    "solution": "Developed a stream processing telemetry pipeline that applies Kalman filtering and dead-reckoning heuristics to noisy vehicle GPS coordinates, providing smooth map interpolation and accurate stop arrival ETAs.",
    "techStack": [
      "Python",
      "Kalman Filter",
      "Stream Processing",
      "WebSockets",
      "Spatial Indexing"
    ],
    "keyMetrics": [
      {
        "label": "Noise Filter",
        "value": "Extended Kalman Filter"
      },
      {
        "label": "ETA Accuracy",
        "value": "94.2% Within 1 Min"
      },
      {
        "label": "Architecture",
        "value": "Event-Driven Stream"
      },
      {
        "label": "Repository",
        "value": "GitHub Public"
      }
    ],
    "highlights": [
      "Kalman filtering algorithm smoothing erratic GPS coordinates caused by urban multipath interference",
      "Dead reckoning estimation continuing route tracking during temporary GPS signal loss in tunnels",
      "Map-matching algorithm snapping raw coordinates to known transit road networks",
      "Real-time WebSocket event broadcaster pushing sub-second vehicle updates to clients"
    ],
    "links": {
      "github": "https://github.com/Vaidik04/q-transit-nexus1"
    }
  },
  {
    "id": "vaidiktech",
    "title": "VaidikTech Core Platform",
    "subtitle": "Design System, Micro-Libraries & Native Tooling Infrastructure",
    "category": "productivity",
    "featured": false,
    "badge": "Core Private Repo",
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
    "id": "skycanvas",
    "title": "SkyCanvas – AI Air Painter",
    "subtitle": "Contactless Computer Vision Canvas via Hand Tracking",
    "category": "ai-vision",
    "featured": false,
    "badge": "Computer Vision MVP",
    "badgeType": "research",
    "platform": "Python · MediaPipe & OpenCV",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Contactless Computer Vision Canvas via Hand Tracking",
    "problem": "Traditional digital drawing requires expensive stylus hardware or physical touchscreens, limiting creative interaction and accessibility in collaborative spaces.",
    "solution": "Built a real-time computer vision drawing interface that tracks hand landmarks via webcam using Google MediaPipe and OpenCV, enabling users to draw in mid-air using intuitive finger gestures with zero specialized hardware.",
    "techStack": [
      "Python",
      "OpenCV",
      "Google MediaPipe",
      "NumPy",
      "Kinematic Smoothing"
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
    "subtitle": "Resilient Emergency P2P Mesh Network with NLP Triage",
    "category": "ai-vision",
    "featured": false,
    "badge": "Hackathon Finalist",
    "badgeType": "research",
    "platform": "Android · P2P Mesh & On-Device NLP",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Resilient Emergency P2P Mesh Network with NLP Triage",
    "problem": "During catastrophic natural disasters, cellular infrastructure collapses, leaving victims trapped without communication channels while rescue teams possess no visibility into casualty clusters.",
    "solution": "Designed an ad-hoc emergency communication system routing encrypted distress packets across multi-hop peer-to-peer Wi-Fi Direct and BLE connections, paired with on-device NLP triage classifying urgency.",
    "techStack": [
      "Android Native",
      "BLE Mesh Protocols",
      "Wi-Fi Direct",
      "TFLite NLP Model",
      "GPS Ephemeris Caching"
    ],
    "keyMetrics": [
      {
        "label": "Mesh Hops",
        "value": "Up to 7 Device Relays"
      },
      {
        "label": "NLP Triage",
        "value": "On-Device TFLite Model"
      },
      {
        "label": "Infrastructure",
        "value": "Zero Cellular Needed"
      },
      {
        "label": "Encryption",
        "value": "End-to-End Curve25519"
      }
    ],
    "highlights": [
      "Multi-hop store-and-forward mesh propagation carrying SOS beacons across disconnected nodes",
      "Embedded lightweight TFLite model scoring medical urgency from natural language distress messages",
      "Low-power BLE beacon mode extending survivor device battery life up to 72 hours",
      "Command hub dashboard mapping casualty clusters using cached offline topography maps"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "stock-tracker-pro",
    "title": "Stock Tracker Pro & Analytics",
    "subtitle": "High-Frequency Financial Time-Series Dashboard & Indicators",
    "category": "productivity",
    "featured": false,
    "badge": "Financial Engine",
    "badgeType": "opensource",
    "platform": "Python & Streamlit",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "High-Frequency Financial Time-Series Dashboard & Indicators",
    "problem": "Retail traders lack customizable algorithmic indicator suites that run locally without hefty monthly subscription fees charged by proprietary trading platforms.",
    "solution": "Engineered a quantitative stock tracking engine calculating technical indicators (RSI, MACD, Bollinger Bands, EMA crossovers) over historical equity feeds with automated breakout alert triggers.",
    "techStack": [
      "Python",
      "Pandas",
      "TA-Lib",
      "Plotly Interactive Charts",
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
    "id": "vaidikratnam",
    "title": "Vaidik Ratnam Digital Platform",
    "subtitle": "High-End Gems & Jewellery Digital Showcase Architecture",
    "category": "systems",
    "featured": false,
    "badge": "Client Production",
    "badgeType": "production",
    "platform": "Full-Stack Web & Android Gateway",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "High-End Gems & Jewellery Digital Showcase Architecture",
    "problem": "Luxury gemstone and fine jewelry merchants require high-fidelity digital showcases that capture gemstone optical luster, certify hallmarked purities, and facilitate private client consultations securely.",
    "solution": "Architected a bespoke digital catalog platform featuring dynamic live bullion rate feeds, high-resolution media zoom, certified gemstone laboratory report verification, and direct VIP concierge inquiry channels.",
    "techStack": [
      "React",
      "Tailwind CSS",
      "REST APIs",
      "Cloudinary CDN",
      "WhatsApp Business API"
    ],
    "keyMetrics": [
      {
        "label": "Catalog Purity",
        "value": "GIA / IGI Certification"
      },
      {
        "label": "Image Performance",
        "value": "Sub-Second WebP CDN"
      },
      {
        "label": "Security",
        "value": "Private Inquiry Vault"
      },
      {
        "label": "Client Satisfaction",
        "value": "High Retention"
      }
    ],
    "highlights": [
      "Dynamic live daily gold and silver market rate ticker reflecting bullion pricing in real time",
      "Ultra-high-definition interactive product gallery with responsive pinch-to-zoom magnification",
      "Direct integration with GIA and IGI certificate verification lookup portals",
      "Seamless VIP client consultation booking via direct WhatsApp Business API gateway"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "focus-companion",
    "title": "Focus - Deep Work Companion",
    "subtitle": "Minimalist Pomodoro Engine with Ambient Soundscapes",
    "category": "productivity",
    "featured": false,
    "badge": "Open Source Utility",
    "badgeType": "opensource",
    "platform": "Native Android · Jetpack Compose",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Minimalist Pomodoro Engine with Ambient Soundscapes",
    "problem": "Digital professionals face constant notifications, multitasking fatigue, and cognitive fragmentation, making sustained uninterrupted engineering sessions difficult.",
    "solution": "Engineered an unobtrusive Android focus companion in Jetpack Compose. Combines a customizable interval Pomodoro timer with offline binaural noise soundscapes, foreground service audio loops, and daily session analytics.",
    "techStack": [
      "Kotlin",
      "Jetpack Compose",
      "Android ExoPlayer",
      "Foreground Audio Service",
      "DataStore Preferences"
    ],
    "keyMetrics": [
      {
        "label": "Battery Usage",
        "value": "<1% per Hour"
      },
      {
        "label": "Distraction Level",
        "value": "Zero Ads / Clean UI"
      },
      {
        "label": "Sound Quality",
        "value": "Offline 48kHz Audio"
      },
      {
        "label": "Architecture",
        "value": "100% Jetpack Compose"
      }
    ],
    "highlights": [
      "Smooth circular animated progress indicator built with Jetpack Compose canvas animations",
      "Foreground audio player service streaming uninterrupted rain, café, and white noise offline",
      "Session history analytics mapping peak productivity hours across days and weeks",
      "Zero telemetry tracking or ads: engineered for maximum cognitive calm and privacy"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
  },
  {
    "id": "nptel-study-agent",
    "title": "NPTEL Study Agent",
    "subtitle": "Autonomous Academic Companion & Lecture Synthesizer",
    "category": "productivity",
    "featured": false,
    "badge": "AI Academic Tool",
    "badgeType": "opensource",
    "platform": "Python & LLM Agent Pipeline",
    "icon": "assets/vaidiktech_symbol.svg",
    "heroImage": "assets/vaidiktech_symbol.svg",
    "gallery": [],
    "summary": "Autonomous Academic Companion & Lecture Synthesizer",
    "problem": "Engineering students preparing for NPTEL and university exams spend countless hours manually pausing long video lectures to extract core definitions, theorem proofs, and assignment solutions.",
    "solution": "Developed an automated study pipeline in Python that ingests course syllabi, processes lecture transcripts, extracts key algorithmic proofs, and synthesizes structured study flashcards and mock quiz questions.",
    "techStack": [
      "Python",
      "LLM Agent Architecture",
      "Transcript Parsers",
      "Markdown Synthesis",
      "Flashcard Generation"
    ],
    "keyMetrics": [
      {
        "label": "Synthesis Ratio",
        "value": "60-Min Lecture -> 3-Min Notes"
      },
      {
        "label": "Output Format",
        "value": "Markdown & LaTeX Equations"
      },
      {
        "label": "Evaluation",
        "value": "Automated Quiz Generator"
      },
      {
        "label": "Status",
        "value": "Open Source"
      }
    ],
    "highlights": [
      "Extracts mathematical formulas and diagrams from lecture transcripts into clean LaTeX notation",
      "Generates concept flashcards optimized for spaced repetition review schedules",
      "Creates automated multiple-choice mock exam questions based on historical course assignments",
      "High-speed batch processing converting entire 12-week course syllabi into unified revision guides"
    ],
    "links": {
      "github": "https://github.com/Vaidik04"
    }
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
