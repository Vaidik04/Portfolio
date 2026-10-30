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
      id: "girvi",
      title: "Girvi (गिरवी)",
      subtitle: "Digital Management Solution for Pawn & Girvi Businesses",
      category: "android",
      featured: true,
      badge: "Published on Google Play",
      badgeType: "playstore",
      rating: "Active on Play Store",
      platform: "Android (Native Kotlin)",
      icon: "assets/girvi_icon.png",
      heroImage: "assets/girvi_icon.png",
      summary: "A native Android application designed to help individuals and small businesses manage their pawn and girvi records digitally. Fully verified with zero internet permissions for 100% offline privacy.",
      problem: "Traditional Indian pawn and girvi businesses manage high-value pledge records and customer details across physical paper registers. Finding historical pledges, calculating accrued interest, and safeguarding item photos is chaotic and prone to physical loss.",
      solution: "Engineered a native, 100% offline-first Android solution with Kotlin and Room Database under MVVM architecture. The app explicitly declares NO `android.permission.INTERNET`, ensuring complete local data privacy. Allows shopkeepers to log customer KYC, transaction amounts, monthly interest rates, capture pledge photos with CameraX, and execute instant full-text searches.",
      techStack: ["Kotlin", "Room Database", "MVVM Architecture", "ViewModel & LiveData", "Kotlin Coroutines", "Android Jetpack", "CameraX", "Zero Internet Permission", "Google Play Console"],
      highlights: [
        "100% Offline: Zero `android.permission.INTERNET` declared for total business data sovereignty",
        "Fast customer & pledge record indexing with photo proof attachment",
        "Automated interest calculation engine supporting customary Indian pawn intervals",
        "Local AES-encrypted database backup and restore",
        "Actively published and maintained on the Google Play Store"
      ],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.girvi.app",
        github: "https://github.com/Vaidik04/GirviAndroid"
      }
    },
    {
      id: "advokosh",
      title: "AdvoKosh (एडवोकोश)",
      subtitle: "Solo Advocate Case Diary & Chamber Practice Management OS",
      category: "android",
      featured: true,
      badge: "Production Solution",
      badgeType: "production",
      platform: "Android (Jetpack Compose)",
      icon: "assets/advokosh_logo.png",
      heroImage: "assets/advokosh_screen1.png",
      gallery: ["assets/advokosh_screen1.png", "assets/advokosh_screen2.png", "assets/advokosh_banner.png"],
      summary: "An advocate's private, sovereign digital chamber desk. Engineered exclusively for Indian solo advocates with BNS/BNSS/BSA law mapping, SQLCipher 256-bit encryption, eCourts CNR sync, and vector PDF fee billing.",
      problem: "Indian advocates manage dozens of cases concurrently across District Courts, High Courts, and Tribunals. Relying on paper diaries leads to missed statutory limitation deadlines (Section 138 NI Act, Commercial Courts 120 days), unbilled fees, and breached attorney-client privilege.",
      solution: "Built a single-Activity native Android chamber OS in 100% Kotlin 2.0+ and Jetpack Compose Material 3 with Dagger Hilt. Employs Room v4 encrypted via SQLCipher (256-bit AES-CBC) with keys sealed in hardware Android Keystore `MasterKey`. Features 8 WorkManager alert workers (Cause List 8 PM & 7 AM, 2-hour court countdown), BNS/BNSS/BSA criminal law cross-converter, Section 138 NI limitation engine, 8 offline court draft templates (Bail, Maintenance, Vakalatnama), courtroom voice dictation, and vector PDF fee notes with NPCI UPI QR codes.",
      techStack: ["Kotlin 2.0+", "Jetpack Compose Material 3", "Dagger Hilt", "SQLCipher 256-bit AES", "Android Keystore MasterKey", "WorkManager", "BNS/BNSS/BSA Mapper", "Vector PDF Generator", "NPCI UPI QR Engine"],
      highlights: [
        "Sovereign Chamber Privacy: Zero cloud analytics or telemetry; 256-bit SQLCipher encryption",
        "Automated 8-Worker Alert Engine: 8 PM cause list alerts, 2-hour court countdowns, statutory limitation warnings",
        "Indian Law Engine: BNS, BNSS, BSA criminal section mapper and Section 138 NI Act calculators",
        "Chamber Operations: Vector PDF fee notes with 18% GST and dynamic NPCI UPI QR payment code",
        "8 Offline Court Draft Templates: Bail petition, Maintenance, Vakalatnama, RTI, Consumer Complaint"
      ],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.advokosh.app",
        github: "https://github.com/Vaidik04/AdvoKosh"
      }
    },
    {
      id: "jewelbill",
      title: "JewelBill (JewelInvoice)",
      subtitle: "Jewellery Billing, Multi-Karat GST & Thermal POS Workstation",
      category: "android",
      featured: true,
      badge: "Available on Google Play",
      badgeType: "playstore",
      platform: "Android (Java 17 & Room)",
      icon: "assets/jewelbill_icon.png",
      heroImage: "assets/jewelbill_screen.png",
      summary: "Specialized jewellery retail billing workstation with multi-karat gold/silver calculation, split CGST/SGST taxes, Bluetooth ESC/POS thermal printing, and 1-tap WhatsApp PDF sharing.",
      problem: "Jewellery billing requires factoring in daily gold/silver spot rates, multi-karat purities (24K, 22K, 18K, 14K), stone weight deductions, making charges per gram, and mandatory split GST breakdowns. Manual bills cause checkout delays and tax errors.",
      solution: "Architected a dedicated Android billing platform powered by Java 17, Room SQLite, and MVVM architecture. JewelBill computes taxes and charges dynamically, prints directly to Bluetooth ESC/POS 58mm/80mm thermal receipt printers, stores full customer transaction ledgers locally, and generates shareable PDF invoices via WhatsApp.",
      techStack: ["Java 17", "Android Jetpack", "MVVM Architecture", "Room Database", "SQLite", "Bluetooth ESC/POS Printing", "iText PDF Generator", "WhatsApp Intent API"],
      highlights: [
        "Multi-Karat Gold (24K, 22K, 18K, 14K) and Silver automated billing",
        "Bluetooth ESC/POS thermal printing support (58mm & 80mm receipt printers)",
        "Automated split GST (CGST 1.5%, SGST 1.5% or IGST 3%) calculation",
        "Direct 1-tap PDF invoice sharing through WhatsApp",
        "Local database keeping full customer ledger and balance history"
      ],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
        github: "https://github.com/Vaidik04/InvoiceApp"
      }
    },
    {
      id: "swarmos",
      title: "SwarmOS",
      subtitle: "Cooperative Intelligence on Nearby Android Phones",
      category: "systems",
      featured: true,
      badge: "Air-Gapped P2P Swarm",
      badgeType: "production",
      platform: "Android (Kotlin & Nearby)",
      summary: "Native Android application allowing a cluster of nearby phones to cooperate on real machine-learning workloads (bundled OCR) over local wireless (Wi-Fi Direct & Bluetooth) with zero internet and zero cloud.",
      problem: "Processing bulk document batches on single low-cost smartphones creates bottlenecks. Conversely, uploading sensitive documents to cloud ML services compromises privacy and fails in rural or disconnected zones.",
      solution: "Engineered SwarmOS in Kotlin and Jetpack Compose utilizing Google Nearby Connections (`P2P_CLUSTER`). Features Coordinator and Worker engines with a deterministic task scheduler, mutual numeric verification digits for air-gapped authentication, on-device federated learning simulations, and bundled offline ML Kit Latin and Devanagari OCR models.",
      techStack: ["Kotlin", "Jetpack Compose Material 3", "Google Nearby Connections (P2P_CLUSTER)", "Wi-Fi Direct & Bluetooth", "Bundled ML Kit OCR", "Room Database", "Federated Learning Engine", "Task State Machine"],
      highlights: [
        "Air-Gapped Distributed ML: Cooperates on document OCR across nearby devices without internet",
        "Mutual Authentication: Visual verification and acceptance of identical numeric digits between devices",
        "Privacy & Ephemerality: Ephemeral session IDs; temporary images purged on worker completion",
        "Deterministic Scheduler: State-machine task allocation with automated failure recovery",
        "Shipped as fully signed Android release candidate (`swarmos-release.jks`)"
      ],
      links: {
        github: "https://github.com/Vaidik04/SwarmOS"
      }
    },
    {
      id: "gridcare",
      title: "GridCare",
      subtitle: "Offline-First Solar Asset, Maintenance & Field-Service Platform",
      category: "android",
      featured: true,
      badge: "Release Candidate (RC1)",
      badgeType: "production",
      platform: "Android (Kotlin 2.3+ & Compose)",
      summary: "Operations and maintenance platform engineered for solar technicians, EPC contractors, and rooftop solar owners with equipment passports, multi-visit work orders, and zero internet permissions.",
      problem: "Solar technicians perform preventative maintenance and inspections on remote rooftops and solar farms with zero cellular signal, making cloud-dependent enterprise field apps unusable.",
      solution: "Engineered GridCare adhering to OWASP MASVS-L1/L2 and DPDP Act 2023 with verified zero network permissions. Unifies solar asset tracking, equipment passport generation, multi-visit work orders, interactive inspection checklists, preventative maintenance scheduling, cost accounting, and AES-256-GCM + PBKDF2 (600k iterations) encrypted backups.",
      techStack: ["Kotlin 2.3+", "Jetpack Compose & Material 3", "Room 2.7+ (SQLite)", "OWASP MASVS-L1/L2", "DPDP Act Compliant", "Zero Network Permissions", "R8 Minified (2.61 MB)"],
      highlights: [
        "Unbroken Offline-First Paradigm: Zero internet permissions; Room SQLite as single source of truth",
        "Comprehensive Solar Vault: Asset passports, inverter/panel serial tracking, and work orders",
        "Military-Grade Backup: AES-256-GCM encrypted local backup with PBKDF2 (600,000 rounds)",
        "Quality Verified: 25/25 unit tests green; 2.61 MB R8-minified production APK",
        "Full documentation set delivered: Security Review, Release Notes, and Architecture Spec"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "kaamkram",
      title: "KaamKram (कामक्रम)",
      subtitle: "The Job-to-Payment OS for Indian Solo Tradespeople",
      category: "android",
      featured: true,
      badge: "MVI Clean Architecture",
      badgeType: "opensource",
      platform: "Android (API 24+)",
      summary: "A local-first Android application crafted for independent Indian tradespeople (electricians, AC mechanics, plumbers, RO technicians). Handles quotes, work proof, change orders, billing, and instant UPI reconciliation.",
      problem: "Indian solo tradespeople handle 5-15 scattered service jobs daily. They rely on memory or WhatsApp chats for quotes, material costs, and customer advances, frequently resulting in payment disputes and lost change order receipts.",
      solution: "Built KaamKram on an uncompromising MVI / Clean Architecture foundation. Features strictly integer paise financial calculations, India-first UX formatting (₹1,23,456), bilingual Hindi/English localization, and an append-only audit trail for material approvals.",
      techStack: ["Kotlin", "MVI Architecture", "Clean Architecture", "Room (Local-First)", "StateFlow & Coroutines", "UPI Deep-Linking", "Material 3"],
      highlights: [
        "Integer Paise Financial Engine: Zero floating-point rounding errors in billing",
        "Complete job lifecycle: Enquiry → Quote → Work Evidence → Invoicing → UPI Settlement",
        "India-First UX: Standard Indian numbering system, Hindi & English support",
        "Append-only material & change-order audit trail with timestamped proof",
        "100% resilient offline operation without requiring remote servers"
      ],
      links: {
        github: "https://github.com/Vaidik04/KaamKram"
      }
    },
    {
      id: "agrilink",
      title: "AgriLink",
      subtitle: "Web3 & Vernacular Voice AI Agriculture Ecosystem",
      category: "systems",
      featured: false,
      badge: "Web3 + Voice AI",
      badgeType: "research",
      platform: "Mobile & Smart Contracts",
      summary: "Decentralized ecosystem empowering farmers with vernacular voice AI for live mandi prices, non-transferable Soulbound Token (SBT) credit ratings, and on-chain escrow trading.",
      problem: "Smallholder farmers face predatory middlemen, payment defaults, and language barriers when accessing fair market pricing for agricultural produce.",
      solution: "Built an integrated mobile and smart contract architecture. Features a Vernacular Voice AI assistant for mandi crop prices, Soulbound Tokens (SBT) recording farmer reputation and credit history on-chain, an EscrowVault locking MATIC with a 48-hour dispute safeguard, and carbon credit rewards for pooled transport.",
      techStack: ["Kotlin / Android", "Vernacular Voice AI (NLP)", "Solidity Smart Contracts", "Soulbound Tokens (SBT)", "Polygon / MATIC EscrowVault", "Python Backend"],
      highlights: [
        "Vernacular Voice AI: Real-time mandi price queries via native local speech recognition",
        "Soulbound Farmer Identity (SBT): Immutable, non-transferable on-chain reputation and credit score",
        "Zero-Fraud Escrow Vault: Smart contracts locking buyer funds until delivery is verified",
        "Eco-Friendly Carbon Credits: Utility tokens for farmers utilizing pooled transport networks"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "free-ai-invoice",
      title: "Free AI Invoice & Accounting Assistant",
      subtitle: "Zero-Cost On-Device ML OCR & GST Accounting Scanner",
      category: "android",
      featured: false,
      badge: "Jetpack Compose + ML Kit",
      badgeType: "production",
      platform: "Android (Modern Stack)",
      summary: "A completely free, offline-first Android app for capturing paper invoices, on-device OCR, GST-aware parsing, and local P&L reports with zero cloud dependency.",
      problem: "Small retailers and contractors cannot afford expensive monthly accounting SaaS subscriptions or risk uploading sensitive vendor invoices to unknown cloud servers with high latency.",
      solution: "Engineered with Kotlin and Jetpack Compose utilizing Google ML Kit Text Recognition running directly on-device. CameraX captures the bill, custom rule-based regex extracts vendor names, amounts, invoice numbers, and taxes, while Room stores encrypted records with PIN protection.",
      techStack: ["Kotlin", "Jetpack Compose", "Google ML Kit (On-Device OCR)", "CameraX", "Room Database", "Android Crypto Security", "Voice Commands"],
      highlights: [
        "On-device OCR text extraction with zero external API fees",
        "Rule-based smart parsing for vendor, total amount, date, and invoice number",
        "Comprehensive GST engine (CGST/SGST/IGST and Input Tax Credit flags)",
        "Monthly Profit & Loss reports and hash-based duplicate invoice detection",
        "Voice commands for quick invoice logging and encrypted PIN app lock"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "skycanvas",
      title: "SkyCanvas – AI Air Painter",
      subtitle: "Native Android Mid-Air Painting via Real-Time Hand Tracking",
      category: "ai-vision",
      featured: false,
      badge: "MediaPipe Vision GPU",
      badgeType: "production",
      platform: "Android (CameraX + Vision)",
      summary: "A fully native Android application for air painting using real-time computer vision hand tracking. Draw in the air with your index finger, control canvas tools with gestures, and trigger actions via voice commands.",
      problem: "Touchscreen drawing is limited by screen area and tactile friction. Building a responsive touchless air-drawing experience on mobile typically suffers from high latency, model jitter, and battery drain.",
      solution: "Leveraged Google MediaPipe Hands running on Android GPU delegates paired with CameraX. Extracted 21 hand landmarks in real time (<15ms latency), mapped fingertip coordinates to a custom Android Canvas Bitmap pipeline, and integrated speech recognition for hands-free color and brush switching.",
      techStack: ["Kotlin", "MediaPipe Hands (tasks-vision)", "CameraX", "Android Canvas & Bitmap", "SpeechRecognizer & TTS", "MVVM Architecture"],
      highlights: [
        "Sub-15ms real-time hand landmark tracking on mobile GPU delegate",
        "Air drawing with index finger with stroke smoothing and gesture shape recognition",
        "Integrated voice commands ('Clear', 'Red Brush', 'Undo', 'Save')",
        "Local gallery export of created mid-air artwork",
        "Modular Kotlin architecture with isolated vision and rendering layers"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "ai-disaster-sos",
      title: "AI Disaster Response & SOS Mesh Network",
      subtitle: "Life-Saving Disaster Coordination Platform with Vision & Mesh Networking",
      category: "ai-vision",
      featured: false,
      badge: "Hackathon System",
      badgeType: "research",
      platform: "Full-Stack AI (Mobile + Dashboard + Backend)",
      summary: "A comprehensive disaster response system that accelerates survivor rescues during catastrophic emergencies using AI, peer-to-peer mesh networking (Bluetooth / Wi-Fi Direct), and live GPS heatmaps.",
      problem: "During earthquakes, floods, and landslides, cellular towers collapse. Trapped victims have no internet to call for help, while rescue teams waste critical golden hours searching blind without geospatial coordinates.",
      solution: "Engineered an offline-to-online peer-to-peer mesh networking client that hops SOS signals through nearby devices until an uplink is found. The Python Flask backend leverages YOLOv8 to detect trapped humans in aerial/phone footage, runs NLP distress scoring on distress text/voice, and renders a live Leaflet rescue heatmap dashboard.",
      techStack: ["Python", "Flask", "YOLOv8", "NLP Sentiment", "Wi-Fi Direct / Nearby API", "Socket.IO WebSockets", "React & Leaflet", "Flutter"],
      highlights: [
        "Offline-to-online mesh packet relay over Bluetooth & Wi-Fi Direct",
        "YOLOv8 computer vision model detecting trapped humans in debris and flood images",
        "NLP distress keyword & voice sentiment analysis ('help', 'bachao', 'fire')",
        "Real-time interactive GPS heatmap dashboard with priority rescue triage scoring",
        "Live incident push notifications via WebSockets"
      ],
      links: {
        github: "https://github.com/Vaidik04/AIDisasterSOS_app"
      }
    },
    {
      id: "q-transit-nexus",
      title: "Q-Transit Nexus & QRoute",
      subtitle: "Adaptive Quantum-Inspired Urban Transportation & Fleet Digital Twin",
      category: "systems",
      featured: false,
      badge: "FastAPI + D-QPSO",
      badgeType: "research",
      platform: "Backend Microservices & Simulation",
      summary: "Predictive multimodal digital twin for adaptive urban fleet routing using Discrete Quantum Particle Swarm Optimization (Adaptive D-QPSO) and TraCI SUMO simulation.",
      problem: "Metropolitan fleet routing algorithms fail during sudden multi-point road closures and severe traffic surges, locking emergency and freight vehicles into static, gridlocked routes.",
      solution: "Built a modular FastAPI microservices system orchestrating PostgreSQL/PostGIS dual ORMs with an Adaptive D-QPSO algorithm. Connects to real-time SUMO traffic simulators, computes re-routing paths dynamically when incidents occur, and broadcasts live GeoJSON paths over WebSockets.",
      techStack: ["Python 3.9+", "FastAPI", "PostgreSQL / PostGIS", "SQLAlchemy", "Adaptive D-QPSO", "SUMO / TraCI Simulator", "WebSockets", "Leaflet"],
      highlights: [
        "Modular microservices architecture with clean separation of domain repositories",
        "Dynamic rerouting feedback loop ingesting simulated road incidents",
        "Adaptive D-QPSO quantum-inspired optimization yielding faster convergence than standard GA/PSO",
        "Full simulation telemetry streaming over real-time WebSockets",
        "Interactive dashboard control panel with Chart.js quantum lab convergence graphs"
      ],
      links: {
        github: "https://github.com/Vaidik04/QRoute"
      }
    },
    {
      id: "stock-tracker-pro",
      title: "Stock Tracker Pro & Predictive Analytics",
      subtitle: "Quantitative Market Analysis Platform with Random Forest Forecasting",
      category: "productivity",
      featured: false,
      badge: "Machine Learning + Tkinter",
      badgeType: "opensource",
      platform: "Python Desktop",
      summary: "A professional-grade market tracking and technical analysis workstation featuring AI price prediction models, technical indicators (RSI, MACD), and automated price target alerts.",
      problem: "Retail investors often lack lightweight, non-bloated desktop tools that provide both real-time portfolio P&L tracking and machine-learning price trend forecasts in one unified interface.",
      solution: "Developed a comprehensive Python desktop application with Tkinter and Scikit-learn. Combines live ticker data with Random Forest regression models, volatility-based confidence scoring, customizable alert notifications, and automated Excel/CSV reporting.",
      techStack: ["Python", "Tkinter", "Scikit-learn (Random Forest)", "Matplotlib", "Technical Indicators (RSI, MACD)", "Pandas", "JSON Storage"],
      highlights: [
        "Real-time market indices and portfolio profit/loss monitoring",
        "Machine learning price forecasting with confidence scoring",
        "Interactive technical candlestick charts with moving averages and oscillators",
        "Smart alert system with background price threshold triggers",
        "Sector performance comparative analysis and timestamped data exports"
      ],
      links: {
        github: "https://github.com/Vaidik04/StockTracker-Portfolio-Prediction"
      }
    },
    {
      id: "careerconnect",
      title: "CareerConnect MVP",
      subtitle: "AI-Powered Student Career Opportunity Platform & Matching Engine",
      category: "systems",
      featured: false,
      badge: "Deterministic AI Matching",
      badgeType: "opensource",
      platform: "Python / FastAPI",
      summary: "An explainable opportunity platform for students evaluating deterministic eligibility criteria, calculating weighted match scores, and managing recruitment pipelines.",
      problem: "Students frequently waste dozens of hours applying to listings where they fail hard academic cut-offs (degree, CGPA, graduation batch), while recruiters receive hundreds of unqualified resumes.",
      solution: "Engineered a dual-tier matching engine: a strictly deterministic eligibility gatekeeper coupled with a weighted multi-factor match score (Skills 35%, Eligibility 25%, Interests 15%, Work Mode 10%, Profile 10%, Location 5%) with transparent natural language explanations.",
      techStack: ["Python", "FastAPI", "Explainable AI Matchmaking", "Resume Storage Abstraction", "Kanban Pipeline Tracker", "REST APIs"],
      highlights: [
        "Deterministic eligibility engine with visual pass/fail checklists",
        "Multi-factor weighted match score formula with transparent factor breakdown",
        "Interactive recruitment stage tracker (Saved → Applied → Assessment → Interview → Offer)",
        "Standardized skills catalog with proficiency ratings and secure resume ingestion",
        "Built-in fallback when external language model API keys are omitted"
      ],
      links: {
        github: "https://github.com/Vaidik04/CareerConnect"
      }
    },
    {
      id: "digitalkhata",
      title: "Vyapar Khata (DigitalKhata)",
      subtitle: "Offline-First Digital Udhaar Ledger for Indian Small Businesses",
      category: "android",
      featured: false,
      badge: "Micro-Business Ledger",
      badgeType: "production",
      platform: "Android (Kotlin & Room)",
      summary: "A streamlined offline-first credit and debit ledger application designed to replace paper bahi-khata notebooks for Indian neighborhood retailers and kirana stores.",
      problem: "Traditional shopkeepers extend micro-credit (udhaar) to regular customers using paper notebooks. Unclear balances, forgotten entries, and lost ledgers create ongoing cash-flow friction.",
      solution: "Built a fast, lightweight Kotlin Android app backed by Room SQLite. Features auto-balancing credit/debit transaction logs, daily outstanding debt summaries, 1-tap WhatsApp payment reminders, and encrypted local JSON backups.",
      techStack: ["Kotlin", "Android Jetpack", "Room Database", "MVVM Architecture", "WhatsApp Intent API", "Material 3"],
      highlights: [
        "Instant credit (jama) and debit (udhaar) accounting with live balance",
        "1-tap WhatsApp customer payment reminders with pre-filled balance notes",
        "Clean Material 3 interface with full Hindi and English localization",
        "Local JSON backup and restore with zero cloud reliance"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "vaidikratnam",
      title: "Vaidik Ratnam Digital Platform",
      subtitle: "Traditional Gold Jewellery & Genuine Gemstone Shop",
      category: "systems",
      featured: false,
      badge: "Next.js Full-Stack",
      badgeType: "production",
      platform: "Full-Stack Web (Next.js & Supabase)",
      summary: "A full-stack digital showcase, custom goldsmithing studio, and Vedic consultation hub engineered for a family-owned Indian jewellery brand.",
      problem: "Traditional jewellery and gemstone consumers struggle to verify hallmarking standards, unheated gemstone purity, and genuine net-weight pricing online.",
      solution: "Engineered with Next.js, TypeScript, Tailwind CSS, and Supabase. Combines 100% BIS hallmarked gold jewellery transparency with a Parashari Jyotish gemstone knowledge base, certified gemstone lookup, and appointment booking.",
      techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vitest"],
      highlights: [
        "100% BIS hallmarked gold jewellery and certified natural gemstone showcase",
        "Transparent net-weight billing calculator with real-time gold/silver spot rates",
        "Vedic consultation scheduler and interactive Parashari Jyotish knowledge base",
        "Responsive, high-accessibility UI built with Next.js App Router"
      ],
      links: {
        demo: "https://vaidikratnam.com"
      }
    },
    {
      id: "focus-companion",
      title: "Focus - Deep Work Companion",
      subtitle: "Minimalist Productivity, Pomodoro & Habit Streak Tracker",
      category: "productivity",
      featured: false,
      badge: "Local-First Desktop",
      badgeType: "opensource",
      platform: "Python Desktop",
      summary: "A distraction-free personal growth and deep work workstation combining task prioritization, custom Pomodoro focus intervals, habit streaks, and local SQLite productivity analytics.",
      problem: "Modern cloud productivity tools are filled with notifications, subscription paywalls, and intrusive telemetry that break deep programming focus.",
      solution: "Created a clean, offline desktop companion in Python. Implements custom session intervals (15 to 60 mins), associates tasks with Pomodoro sessions, and logs completion analytics into a lightweight local SQLite database.",
      techStack: ["Python", "SQLite", "Tkinter", "Pomodoro Timer Engine", "Matplotlib Analytics", "JSON Preferences"],
      highlights: [
        "Customizable focus and break timers with session note logging",
        "Task management with priority scoring (Low, Medium, High)",
        "Daily, weekly, and monthly habit streak visualization",
        "Local SQLite database keeping personal productivity metrics private"
      ],
      links: {
        github: "https://github.com/Vaidik04"
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
