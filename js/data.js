// =============================================================================
// VAIDIK GANDHI — COMPREHENSIVE PORTFOLIO DATA REPOSITORY
// Merged from Google Play Published Products, D:\Python Projects & GitHub (@Vaidik04)
// =============================================================================

const PORTFOLIO_DATA = {
  personal: {
    name: "Vaidik Gandhi",
    handle: "@Vaidik04",
    title: "Independent Android Developer · Founder of VaidikTech",
    headline: "Building practical, offline-first mobile products & intelligent systems from idea to production.",
    bioShort: "I build Android applications that solve practical problems, simplify everyday workflows, and make technology more accessible to people and businesses. I am an independent Android developer and the person behind VaidikTech, where I focus on building useful, reliable, and thoughtfully designed mobile applications.",
    bioExtended: "My journey into software development began with curiosity about how technology works and how it can be used to solve everyday problems. Over time, that curiosity developed into a commitment to building complete applications—not just demonstrations or academic projects, but products that people can actually use. My approach goes beyond writing code: I pay attention to the problem, understand how people work, design the user experience, build the application, and take it through the process of publishing and maintaining a real product.",
    education: {
      degree: "B.Tech in Computer Science and Engineering (Specialising in Artificial Intelligence & Machine Learning)",
      institution: "Lakshmi Narain College of Technology (LNCT), Bhopal",
      focus: "Android Architecture, Edge AI, On-Device Vision, Privacy-Conscious Engineering & Database Reliability"
    },
    location: "Bhopal, India",
    links: {
      github: "https://github.com/Vaidik04",
      playStore: "https://play.google.com/store/apps/details?id=com.girvi.app",
      email: "vaidikgandhi@gmail.com", // placeholder standard format
      linkedin: "https://www.linkedin.com/in/vaidik-gandhi/"
    },
    stats: [
      { label: "Production Android Apps", value: "2+", sub: "Published & Active", icon: "smartphone" },
      { label: "GitHub Repositories", value: "120+", sub: "Open Source & Systems", icon: "git-branch" },
      { label: "Offline-First Reliability", value: "100%", sub: "Zero Server Reliance", icon: "shield-check" },
      { label: "Edge AI Inference", value: "<15ms", sub: "On-Device Processing", icon: "zap" }
    ]
  },

  philosophy: [
    {
      title: "Build for Actual Users, Not Just Demos",
      icon: "users",
      description: "An application becomes meaningful when it solves a problem for someone outside the development environment. I place supreme importance on understanding intended users, their physical constraints, and their everyday workflows."
    },
    {
      title: "Keep Things Simple Without Compromising Power",
      icon: "feather",
      description: "A large number of features does not make an application useful. Good software makes critical operations easy to discover, fast to complete, and error-tolerant under stressful work conditions."
    },
    {
      title: "Offline-First & Local Data Resilience",
      icon: "database",
      description: "For businesses that manage financial and legal records, reliability matters. Room Database, structured schemas, encrypted storage, and zero cloud tethering guarantee that operations never stop when network signals drop."
    },
    {
      title: "Think Beyond Just Development",
      icon: "life-buoy",
      description: "Building an application does not end when code compiles. User testing, Google Play publishing, feedback loops, error tracking, and maintaining a real product are all essential parts of software engineering."
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
      title: "Local-First Encrypted Architecture",
      subtitle: "Privacy & Uninterrupted Uptime",
      tag: "Girvi & FreeAIInvoice",
      icon: "lock",
      description: "Traditional SaaS apps fail when shop owners are in basements or rural areas without 4G/5G. By architecting Room SQLite databases with Android Security Crypto on device, users retain full ownership of customer ledgers with instant search response times."
    },
    {
      title: "Edge Computer Vision & MediaPipe",
      subtitle: "Touchless & Real-Time Interaction",
      tag: "SkyCanvas & FreeAIInvoice",
      icon: "eye",
      description: "Running vision models directly on hardware GPU delegates via MediaPipe Hands and Google ML Kit Text Recognition delivers instantaneous response times with zero bandwidth costs and zero biometric data leakage."
    },
    {
      title: "Adaptive Quantum & Distributed Systems",
      subtitle: "Algorithmic Complexity & Scale",
      tag: "Q-Transit Nexus & SwarmOS",
      icon: "network",
      description: "Beyond mobile, exploring high-concurrency systems: Discrete Quantum-inspired Particle Swarm Optimization (Adaptive D-QPSO) for traffic digital twins and decentralized peer node orchestration."
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
      rating: "5.0 ★",
      platform: "Android (Native)",
      heroImage: "assets/girvi_preview.png",
      summary: "A native Android application designed to help individuals and small businesses manage their pawn and girvi records digitally. Replaces error-prone manual ledgers with offline-first, searchable records with photo proof storage.",
      problem: "Many traditional pawn and girvi shops maintain customer transactions and pledge records across disorganized physical registers. Retrieving previous pledge histories, calculating accrued interest, and safeguarding customer photos is chaotic and vulnerable to paperwork damage.",
      solution: "Engineered a robust, 100% offline-first Android tool with Room Database and MVVM architecture. Allows shopkeepers to record customer IDs, transaction amounts, pledge descriptions, capture item photos directly via CameraX, and query active records instantaneously.",
      techStack: ["Kotlin", "Room Database", "MVVM Architecture", "ViewModel & LiveData", "Kotlin Coroutines", "Android Jetpack", "CameraX", "Google Play Console"],
      highlights: [
        "Customer & Contact Record Management with fast search",
        "Digital Pawn & Girvi Pledge tracking with status milestones",
        "Record-related photo attachment storage",
        "100% Offline Access with zero cloud server dependency",
        "Published and actively maintained on Google Play"
      ],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.girvi.app",
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "jewelbill",
      title: "JewelBill (InvoiceApp)",
      subtitle: "Jewellery Billing, GST Calculations & Business Management Suite",
      category: "android",
      featured: true,
      badge: "Production Solution",
      badgeType: "production",
      platform: "Android (Native)",
      summary: "An Android application developed to simplify billing and everyday transaction management for jewellery businesses, featuring automated GST calculation, customer ledgers, PDF invoice generation, and 1-tap WhatsApp sharing.",
      problem: "Jewellery billing is inherently complex: shopkeepers must factor in pure gold/silver weights, fluctuating daily market rates, making charges per gram, stone deductions, and split CGST/SGST taxes. Manual bills lead to calculation discrepancies and slow customer checkout queues.",
      solution: "Developed an Android billing workstation powered by Java 17, Room SQLite, and MVVM architecture. JewelBill computes taxes and making charges dynamically, stores customer transaction records locally, generates professional PDF receipts, and directly shares invoices with customers over WhatsApp.",
      techStack: ["Java 17", "Android Jetpack", "MVVM Architecture", "Room Database", "SQLite", "iText/PDF Generation", "WhatsApp Intent API"],
      highlights: [
        "Jewellery-specific invoice calculations with gold/silver weight breakdown",
        "Automated split GST (CGST, SGST, IGST) computation",
        "High-resolution PDF invoice generation formatted for thermal & A4 printers",
        "Direct 1-tap PDF invoice sharing through WhatsApp",
        "Offline local database holding comprehensive customer history"
      ],
      links: {
        github: "https://github.com/Vaidik04/InvoiceApp"
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
      summary: "A local-first Android application crafted specifically for independent Indian tradespeople (electricians, AC mechanics, plumbers, RO technicians). Manages quotes, work proof, change orders, billing, and instant UPI reconciliation.",
      problem: "Indian solo tradespeople handle 5-15 scattered service jobs daily. They rely on memory or WhatsApp chats for quotes, material costs, and customer advances, frequently resulting in payment disputes, lost change order receipts, and missed warranty tracking.",
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
      id: "free-ai-invoice",
      title: "Free AI Invoice & Accounting Assistant",
      subtitle: "Zero-Cost On-Device ML OCR & GST Accounting Scanner",
      category: "android",
      featured: true,
      badge: "Jetpack Compose + ML Kit",
      badgeType: "production",
      platform: "Android (Modern Stack)",
      summary: "A completely free, offline-first Android app for capturing paper invoices, on-device OCR, GST-aware parsing, and local P&L reports. No login, no paid API tokens, and zero cloud dependency.",
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
      featured: true,
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
      featured: true,
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
      id: "advokosh",
      title: "AdvoKosh (एडवोकोश)",
      subtitle: "Advocate Case Records & Legal Practice Management System",
      category: "android",
      featured: false,
      badge: "Offline Case OS",
      badgeType: "production",
      platform: "Android (Native)",
      summary: "A specialized legal practice organizer for advocates and legal practitioners to track court hearings, case timelines, client dossiers, and judicial evidence completely offline.",
      problem: "Legal practitioners manage dozens of concurrent cases across district and high courts. Using physical case diaries often results in missed hearing dates, lost interim order notes, and breached client confidentiality.",
      solution: "Engineered a confidential, offline-first case management application built with Kotlin, Room, and Material Design 3. Encrypts local case files, schedules upcoming hearing reminders, and preserves chronological case milestone logs.",
      techStack: ["Kotlin", "Android Jetpack", "Room Database", "MVVM Architecture", "Coroutines", "Material Design 3", "Local Data Encryption"],
      highlights: [
        "Chronological court hearing scheduler and cause-list tracker",
        "Comprehensive client and case dossier indexing with evidence file attachments",
        "100% offline database ensuring attorney-client confidentiality",
        "Clean, high-contrast Material 3 interface optimized for quick courtroom notes",
        "Milestone tracking for stay orders, bails, and judgment copies"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "ecohealth-ai",
      title: "EcoHealth AI",
      subtitle: "Environmental Pollution Tracking & Symptom Correlation Engine",
      category: "ai-vision",
      featured: false,
      badge: "Environmental ML",
      badgeType: "research",
      platform: "Full-Stack AI",
      summary: "An intelligent platform correlating hyper-local environmental pollution metrics (AQI, PM2.5, UV) with human health symptoms to provide proactive risk alerts and preventive guidance.",
      problem: "Environmental pollution severely impacts chronic health conditions, yet patients and doctors rarely have access to correlated data linking specific environmental spikes to acute symptoms.",
      solution: "Developed an AI prediction pipeline that ingests real-time environmental sensors and user symptom journals (cough, headache, asthma, fatigue), runs correlation algorithms, and issues calibrated health risk levels (Low, Moderate, High, Critical) with preventive lifestyle suggestions.",
      techStack: ["Python", "Flask", "Scikit-learn", "Environmental Sensor APIs", "Time-Series Forecasting", "React Frontend"],
      highlights: [
        "Real-time pollution monitoring (AQI, CO₂, PM2.5, PM10, UV, humidity)",
        "Machine learning 48-hour air quality and risk forecast",
        "Daily health journal correlating symptoms with environmental shifts",
        "Proactive multi-level health alert system with preventive medical guidance"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "nptel-study-agent",
      title: "NPTEL AI Autonomous Study Agent",
      subtitle: "Screen-Vision OCR & Reasoning Assistant for Complex CS & Math",
      category: "productivity",
      featured: false,
      badge: "Desktop Vision Agent",
      badgeType: "opensource",
      platform: "Python Desktop",
      summary: "An on-demand desktop assistant with an always-on-top overlay that captures screen regions, runs vision models to analyze programming and discrete mathematics problems, and generates verified step-by-step explanations.",
      problem: "Students solving online technical assignments or reading academic papers often need instant verification of intricate logic or mathematical proofs without manual transcription.",
      solution: "Built a Python Tkinter transparent overlay that grabs live bounding-box screenshots, passes images to multi-modal vision models with strict JSON schema instructions, and formats structured explanations and confidence scores.",
      techStack: ["Python", "Tkinter (Always-on-top)", "PIL ImageGrab", "Vision-Language APIs", "JSON Schema Enforcement", "Multi-threading"],
      highlights: [
        "Non-intrusive transparent screen bounding-box grabber",
        "Strict JSON schema response validation for answers, steps, and confidence score",
        "Double-verification reasoning chain for discrete math and data structures",
        "Local session history log with timestamped question exports"
      ],
      links: {
        github: "https://github.com/Vaidik04"
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
    },
    {
      id: "swarmos",
      title: "SwarmOS",
      subtitle: "Distributed Node Coordination & Swarm Intelligence Framework",
      category: "systems",
      featured: false,
      badge: "Distributed Systems",
      badgeType: "research",
      platform: "Java 17",
      summary: "An experimental distributed computing framework exploring autonomous node discovery, fault-tolerant consensus, and dynamic swarm task allocation without centralized servers.",
      problem: "Centralized server architectures introduce single points of failure and high maintenance overhead for decentralized edge computing applications.",
      solution: "Implemented in Java 17 using concurrent actor-style thread pools and gossip communication protocols. Simulates autonomous nodes negotiating task execution and self-healing when individual nodes drop.",
      techStack: ["Java 17", "Distributed Algorithms", "Multi-threading & Concurrency", "Gossip Protocol", "Fault-Tolerant Consensus"],
      highlights: [
        "Decentralized peer node discovery and heartbeating",
        "Dynamic task division and distributed load balancing",
        "Self-healing node topology with failover recovery",
        "Benchmarked throughput under erratic network drops"
      ],
      links: {
        github: "https://github.com/Vaidik04"
      }
    },
    {
      id: "solar-analytics",
      title: "Solar Energy Analytics & Yield Simulator",
      subtitle: "Renewable Energy Estimation & Carbon Offset Modeler",
      category: "systems",
      featured: false,
      badge: "Clean Tech & Math",
      badgeType: "opensource",
      platform: "Python",
      summary: "A mathematical simulation script and analytical tool that calculates solar photovoltaic generation potential, seasonal tilt angles, and estimated carbon offsets based on geographic coordinates.",
      problem: "Homeowners and micro-businesses lack straightforward tools to estimate return on investment and solar capacity without relying on aggressive vendor sales calculators.",
      solution: "Authored in Python using standard solar irradiation formulas and meteorological averages. Calculates estimated kilowatt-hour output, payback timeline, and CO2 reduction equivalents.",
      techStack: ["Python", "Mathematical Modeling", "Solar Irradiance Algorithms", "Data Analytics"],
      highlights: [
        "Geographic solar irradiance and rooftop capacity calculations",
        "Seasonal angle of incidence and efficiency degradation modeling",
        "Financial payback timeline and estimated lifetime ROI",
        "Carbon offset and equivalent tree plantation metrics"
      ],
      links: {
        github: "https://github.com/Vaidik04/Solar"
      }
    }
  ],

  codeSnippets: [
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
      id: "offline-first",
      title: "Offline-First Room Repository",
      file: "Girvi · RecordRepository.kt",
      language: "kotlin",
      description: "Reactive coroutine-based Flow stream backed by local SQLite Room database, ensuring instant rendering and complete resilience without cloud internet.",
      code: `class GirviRepository @Inject constructor(
    private val girviDao: GirviDao,
    private val secureStorage: SecureStorageManager,
    private val ioDispatcher: CoroutineDispatcher = Dispatchers.IO
) {
    // Single source of truth: Flow emissions directly from SQLite
    val allActivePledges: Flow<List<PledgeEntity>> = girviDao.observeActivePledges()
        .flowOn(ioDispatcher)

    suspend fun createNewPledge(
        customerName: String,
        principalAmount: Paise,
        interestRateMonthly: Double,
        itemPhotos: List<String>
    ): Result<Long> = withContext(ioDispatcher) {
        try {
            val record = PledgeEntity(
                customerName = customerName.trim(),
                principalPaise = principalAmount.amount,
                monthlyRate = interestRateMonthly,
                photoPaths = itemPhotos,
                createdAtEpochMs = System.currentTimeMillis()
            )
            val recordId = girviDao.insertPledge(record)
            Result.success(recordId)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
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
    },
    {
      id: "quantum-router",
      title: "Adaptive D-QPSO Dynamic Rerouting",
      file: "QRoute · rerouting_engine.py",
      language: "python",
      description: "Discrete Quantum Particle Swarm Optimization feedback loop dynamically adjusting urban fleet paths upon traffic incident ingestion.",
      code: `class AdaptiveDQPSORerouter:
    def __init__(self, road_graph: nx.DiGraph, swarm_size: int = 40):
        self.graph = road_graph
        self.swarm_size = swarm_size
        self.contraction_expansion_coeff = 0.75

    async def reoptimize_routes_on_incident(
        self, 
        closed_edge: tuple[int, int], 
        active_vehicles: list[VehicleState]
    ) -> list[GeoJSONRoute]:
        # Dynamically sever edge with infinite penalty
        self.graph[closed_edge[0]][closed_edge[1]]["weight"] = float("inf")
        
        affected = [v for v in active_vehicles if closed_edge in v.current_path_edges]
        rerouted_solutions = []

        for vehicle in affected:
            # Quantum-inspired delta position sampling
            new_path = self._solve_discrete_qpso(
                origin=vehicle.current_node,
                destination=vehicle.destination_node,
                max_iterations=60
            )
            rerouted_solutions.append(self._to_geojson(vehicle.id, new_path))
            
        # Stream updated GeoJSON vectors to connected control clients
        await websocket_manager.broadcast("route_changed", rerouted_solutions)
        return rerouted_solutions`
    }
  ],

  skills: {
    mobile: [
      { name: "Kotlin (Native Android)", level: "Expert", experience: "Flagship Language", icon: "code" },
      { name: "Java 17", level: "Proficient", experience: "Android / Backend", icon: "coffee" },
      { name: "Jetpack Compose", level: "Advanced", experience: "Declarative UI", icon: "layout" },
      { name: "MVVM & MVI Clean Architecture", level: "Expert", experience: "Production Tested", icon: "layers" },
      { name: "Room Database & SQLite", level: "Expert", experience: "Local-First Storage", icon: "database" },
      { name: "Coroutines & Reactive Flow", level: "Advanced", experience: "Asynchronous Concurrency", icon: "activity" },
      { name: "CameraX & MediaPipe Vision", level: "Advanced", experience: "On-Device Hardware", icon: "camera" },
      { name: "Google Play Console & Lifecycle", level: "Proficient", experience: "Release Management", icon: "play" }
    ],
    aiVision: [
      { name: "Google ML Kit (On-Device OCR)", level: "Advanced", icon: "file-text" },
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
      { name: "TraCI / SUMO Simulator", level: "Intermediate", icon: "navigation" }
    ],
    toolsAndWorkflow: [
      { name: "Android Studio", icon: "tool" },
      { name: "Git & GitHub", icon: "github" },
      { name: "Gradle Build Automation", icon: "settings" },
      { name: "Material Design 3", icon: "palette" },
      { name: "Postman API Suite", icon: "send" },
      { name: "Linux / Windows Dev", icon: "cpu" }
    ]
  },

  journey: [
    {
      period: "2022 — Present",
      role: "B.Tech in Computer Science & Engineering (AI & ML)",
      organization: "Lakshmi Narain College of Technology (LNCT), Bhopal",
      description: "Pursuing specialized degree in Artificial Intelligence and Machine Learning. Deepening expertise in software architecture, database management, edge AI, and data structures."
    },
    {
      period: "2023 — Present",
      role: "Founder & Independent Android Developer",
      organization: "VaidikTech",
      description: "Established VaidikTech as an independent mobile software brand. Built, architected, and published Girvi on Google Play; developed JewelBill, KaamKram, and FreeAIInvoice focused on Indian micro-businesses and field tradespeople."
    },
    {
      period: "2024 — 2025",
      role: "AI & Systems Engineering Projects",
      organization: "Hackathons & Open Source",
      description: "Engineered high-impact systems including the AI Disaster SOS Mesh Network (combining YOLOv8 with offline Bluetooth/Wi-Fi Direct mesh) and Q-Transit Nexus (FastAPI quantum-inspired fleet routing digital twin)."
    },
    {
      period: "Early Curiosity",
      role: "The Genesis: Solving Everyday Workflows",
      organization: "Personal Lab",
      description: "Started coding with Python and Tkinter, creating automation scripts, stock predictors, and interactive tools, which ignited the drive to build complete, reliable, publishable applications that real people rely on."
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
