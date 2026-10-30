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
      { name: "Kotlin 2.0+", level: "Expert", highlight: "Primary Production Language" },
      { name: "Jetpack Compose & Material 3", level: "Expert", highlight: "Declarative UI Paradigm" },
      { name: "Room SQLite & SQLCipher", level: "Expert", highlight: "256-bit AES Local Storage" },
      { name: "MVI & MVVM Clean Architecture", level: "Expert", highlight: "Strict Separation of Concerns" },
      { name: "CameraX & MediaPipe GPU", level: "Advanced", highlight: "Sub-15ms Vision Pipelines" },
      { name: "Google Nearby (P2P_CLUSTER)", level: "Advanced", highlight: "Air-Gapped Wireless Clusters" },
      { name: "WorkManager Alert Scheduling", level: "Advanced", highlight: "Background Worker Engines" },
      { name: "ESC/POS Bluetooth Printing", level: "Advanced", highlight: "Thermal Receipt Workstations" },
    ],
  },
  {
    name: "AI & Computer Vision",
    tagline: "Zero-latency on-device machine learning with total user privacy",
    skills: [
      { name: "Google ML Kit (On-Device OCR)", level: "Expert", highlight: "Offline Latin & Devanagari" },
      { name: "MediaPipe Hands Vision", level: "Advanced", highlight: "21 3D Landmark Tracking" },
      { name: "YOLOv8 Object Detection", level: "Proficient", highlight: "Emergency Debris Detection" },
      { name: "Scikit-learn ML", level: "Proficient", highlight: "Random Forest Forecasting" },
      { name: "NLP Sentiment & Keywords", level: "Proficient", highlight: "Distress Signal Scoring" },
      { name: "OpenCV", level: "Proficient", highlight: "Computer Vision Pre-processing" },
    ],
  },
  {
    name: "Backend, Systems & Quantum",
    tagline: "High-concurrency microservices, digital twins, and optimization loops",
    skills: [
      { name: "Python 3.9+", level: "Expert", highlight: "Systems & Data Pipelines" },
      { name: "FastAPI Microservices", level: "Advanced", highlight: "Async REST & WebSockets" },
      { name: "PostgreSQL & PostGIS", level: "Intermediate", highlight: "Spatial & Dual ORMs" },
      { name: "Adaptive D-QPSO Algorithm", level: "Advanced", highlight: "Quantum-Inspired Fleet Optimization" },
      { name: "TraCI / SUMO Simulator", level: "Intermediate", highlight: "Urban Traffic Digital Twins" },
      { name: "Solidity & Smart Contracts", level: "Intermediate", highlight: "EscrowVault & Soulbound Tokens" },
    ],
  },
  {
    name: "Tools, Security & Deployment",
    tagline: "End-to-end engineering discipline from IDE to Google Play Console",
    skills: [
      { name: "Android Studio & SDK 34-36", level: "Expert", highlight: "Full Profiler & NDK" },
      { name: "Gradle (Kotlin DSL)", level: "Advanced", highlight: "ProGuard / R8 Minification" },
      { name: "OWASP MASVS Mobile Security", level: "Advanced", highlight: "Zero-Network Audited Builds" },
      { name: "Google Play Console", level: "Proficient", highlight: "Published Production Apps" },
      { name: "Git & GitHub CI", level: "Expert", highlight: "120+ Open-Source Repos" },
      { name: "Next.js & Vercel", level: "Advanced", highlight: "Modern Web Deployment" },
    ],
  },
];

export const MARQUEE_TECH = [
  "Kotlin",
  "Jetpack Compose",
  "Android SDK",
  "Room SQLite",
  "SQLCipher",
  "Python",
  "FastAPI",
  "Google Nearby",
  "MediaPipe Hands",
  "ML Kit OCR",
  "WorkManager",
  "Dagger Hilt",
  "Three.js",
  "Tailwind CSS",
  "Framer Motion",
  "WebSockets",
  "PostgreSQL",
  "Google Play Console",
];
