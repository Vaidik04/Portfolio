export interface SkillCategory {
  name: string;
  tagline: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Proficient" | "Intermediate";
    highlight: string;
    icon?: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Native Android & Systems",
    tagline: "Sovereign, offline-first mobile products built to generate revenue",
    skills: [
      { name: "Kotlin 2.0.21 (K2 Compiler)", level: "Expert", highlight: "Primary Production Language" },
      { name: "Jetpack Compose & Material 3 (BOM 2024.10+)", level: "Expert", highlight: "Declarative UI Paradigm" },
      { name: "Android 15 SDK 35 (Vanilla Ice Cream)", level: "Expert", highlight: "16KB Page Alignment & Modern APIs" },
      { name: "Room SQLite 2.6.1+ & SQLCipher 4.5.5", level: "Expert", highlight: "256-bit AES-CBC Local Storage" },
      { name: "Coroutines & StateFlow 1.8+", level: "Expert", highlight: "Asynchronous Reactive Streams" },
      { name: "MVI & Clean Architecture", level: "Expert", highlight: "Strict Separation of Concerns" },
      { name: "CameraX 1.4+ & MediaPipe GPU 0.10.14+", level: "Advanced", highlight: "Sub-15ms Vision Pipelines" },
      { name: "Google Nearby (P2P_CLUSTER)", level: "Advanced", highlight: "Air-Gapped Wireless Mesh Clusters" },
      { name: "WorkManager 2.9+ Alert Scheduling", level: "Advanced", highlight: "Resilient Background Engines" },
      { name: "ESC/POS Thermal Printing Workstations", level: "Advanced", highlight: "Hardware Serial & Bluetooth" },
    ],
  },
  {
    name: "AI, Computer Vision & Graphics",
    tagline: "Zero-latency on-device machine learning with total user privacy",
    skills: [
      { name: "Python 3.12+", level: "Expert", highlight: "High-Performance Scripting & Systems" },
      { name: "OpenCV 4.10.0+ (Computer Vision)", level: "Advanced", highlight: "Perspective Homography & Morph Filters" },
      { name: "Google ML Kit (On-Device OCR)", level: "Expert", highlight: "Zero-Cloud Latin & Devanagari" },
      { name: "MediaPipe Hands & Face Tracking", level: "Advanced", highlight: "21 3D Landmark GPU Tracking" },
      { name: "Ultralytics YOLOv8.3+", level: "Proficient", highlight: "Real-Time Emergency Debris Detection" },
      { name: "PyTorch 2.4+ & Torchvision", level: "Proficient", highlight: "Deep Neural Network Classifiers" },
      { name: "Blender 4.2+ Python (bpy)", level: "Advanced", highlight: "Headless 3D Animation Pipelines" },
      { name: "Scikit-learn 1.5+", level: "Proficient", highlight: "Predictive Regressions & Classifiers" },
    ],
  },
  {
    name: "Backend, Web & Distributed Systems",
    tagline: "High-concurrency microservices, digital twins, and optimization loops",
    skills: [
      { name: "Next.js 14.2+ & React 18.3+", level: "Advanced", highlight: "Modern Full-Stack Web Development" },
      { name: "Three.js 0.169+ & React Three Fiber v8", level: "Advanced", highlight: "Interactive WebGL 3D Graphics" },
      { name: "FastAPI 0.115+ (Pydantic V2)", level: "Advanced", highlight: "Async REST & High-Throughput APIs" },
      { name: "PostgreSQL 16+ & PostGIS 3.4+", level: "Intermediate", highlight: "Spatial Indexing & Geospatial Queries" },
      { name: "WebSockets & Real-Time Sync", level: "Advanced", highlight: "Bi-Directional Telemetry Streams" },
      { name: "Adaptive D-QPSO Algorithm", level: "Advanced", highlight: "Quantum-Inspired Fleet Optimization" },
      { name: "TraCI / SUMO Urban Simulator", level: "Intermediate", highlight: "Urban Traffic Digital Twins" },
      { name: "Tailwind CSS 3.4+ & Framer Motion 11+", level: "Expert", highlight: "Fluid Kinetic Micro-Interactions" },
    ],
  },
  {
    name: "Tools, Security & Deployment",
    tagline: "End-to-end engineering discipline from IDE to Google Play Console",
    skills: [
      { name: "Android Studio Koala / Ladybug", level: "Expert", highlight: "Memory Profiler, Layout Inspector & NDK" },
      { name: "Gradle 8.7+ (Kotlin DSL)", level: "Advanced", highlight: "ProGuard / R8 Bytecode Minification" },
      { name: "OWASP MASVS Mobile Security L2", level: "Advanced", highlight: "Zero-Network Audited Builds" },
      { name: "Google Play Console", level: "Proficient", highlight: "Live Commercial App Distribution" },
      { name: "Git & GitHub CI/CD", level: "Expert", highlight: "120+ Public/Private Repositories" },
      { name: "Docker & Linux Virtualization", level: "Proficient", highlight: "Containerized Microservice Environments" },
    ],
  },
];

export const MARQUEE_TECH = [
  "Kotlin 2.0+ (K2)",
  "Jetpack Compose M3",
  "Android 15 (SDK 35)",
  "Room SQLite 2.6+",
  "SQLCipher 4.5+",
  "Python 3.12+",
  "OpenCV 4.10+",
  "MediaPipe GPU",
  "ML Kit OCR",
  "YOLOv8.3+",
  "PyTorch 2.4+",
  "Next.js 14.2+",
  "Three.js 0.169+",
  "FastAPI 0.115+",
  "Google Nearby Mesh",
  "WorkManager 2.9+",
  "PostgreSQL 16+",
  "Google Play Console",
];
