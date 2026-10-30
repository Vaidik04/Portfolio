import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaidik Gandhi — Senior Android Engineer & Founder @ VaidikTech",
  description:
    "Award-winning independent Android developer building revenue-generating, offline-first mobile products (Girvi, AdvoKosh, JewelBill, SwarmOS). Native Kotlin, Jetpack Compose, Room SQLite, SQLCipher & On-Device AI.",
  keywords: [
    "Vaidik Gandhi",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Girvi",
    "AdvoKosh",
    "JewelBill",
    "SwarmOS",
    "VaidikTech",
    "Offline-First",
    "Room Database",
    "SQLCipher",
  ],
  authors: [{ name: "Vaidik Gandhi" }],
  openGraph: {
    title: "Vaidik Gandhi — Independent Android Developer & Founder @ VaidikTech",
    description:
      "Building practical, offline-first mobile products and intelligent systems that solve real-world Indian business workflows.",
    url: "https://vaidik04.github.io",
    siteName: "Vaidik Gandhi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidik Gandhi — Android Developer · Founder @ VaidikTech",
    description: "Building revenue-generating, offline-first native Android apps.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="bg-background text-typography-primary font-sans antialiased min-h-screen relative selection:bg-accent-android selection:text-background">
        {/* Subtle Grain / Noise Overlay */}
        <div className="noise-overlay" />
        {/* Subtle Ambient Grid */}
        <div className="ambient-grid" />
        {/* Interactive Custom Cursor */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

