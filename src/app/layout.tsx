import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaidiktech.app"),
  title: "Vaidik Gandhi - Independent Android Developer & Founder @ VaidikTech",
  description:
    "Independent Android developer building offline-first, encrypted mobile applications for India's professional trades: Girvi (gold loan ledger), JewelBill (jewellery POS), and AdvoKosh (advocate case diary). Native Kotlin, Jetpack Compose, Room SQLite, SQLCipher.",
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
    "India",
  ],
  authors: [{ name: "Vaidik Gandhi" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Vaidik Gandhi - Independent Android Developer & Founder @ VaidikTech",
    description:
      "Engineering native, offline-first mobile products with Kotlin, Jetpack Compose, Room, and hardware-backed SQLCipher encryption.",
    url: "https://vaidiktech.app",
    siteName: "Vaidik Gandhi Portfolio",
    images: [
      {
        url: "/assets/vaidik_3d_avatar_square.jpg",
        width: 1024,
        height: 1024,
        alt: "Vaidik Gandhi · Founder of VaidikTech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidik Gandhi - Android Developer · Founder @ VaidikTech",
    description:
      "Engineering native, offline-first mobile products with Kotlin, Jetpack Compose, Room, and hardware-backed SQLCipher encryption.",
    images: ["/assets/vaidik_3d_avatar_square.jpg"],
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
      <body className="bg-background text-typography-primary font-sans antialiased min-h-screen relative selection:bg-brand selection:text-white">
        {/* Subtle Architectural Film Grain */}
        <div className="noise-overlay" />
        {/* Interactive Subtle Desktop Cursor */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
