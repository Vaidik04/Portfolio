import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
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

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaidiktech.app"),
  title: "Vaidik Gandhi — Independent Android Developer & Founder @ VaidikTech",
  description:
    "Engineering native, offline-first, encrypted Android software for India's professional trades: Girvi (गिरवी), JewelBill (ज्वेलबिल), and AdvoKosh (एडवोकोश). Kotlin, Jetpack Compose, Room SQLite, SQLCipher.",
  keywords: [
    "Vaidik Gandhi",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Girvi",
    "AdvoKosh",
    "JewelBill",
    "VaidikTech",
    "Offline-First",
    "Room SQLite",
    "SQLCipher",
    "India",
  ],
  authors: [{ name: "Vaidik Gandhi" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Vaidik Gandhi — Independent Android Developer & Founder @ VaidikTech",
    description:
      "Engineering native, offline-first mobile products with Kotlin, Jetpack Compose, Room, and hardware-backed SQLCipher encryption.",
    url: "https://vaidiktech.app",
    siteName: "Vaidik Gandhi Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidik Gandhi — Independent Android Developer · Founder @ VaidikTech",
    description:
      "Engineering native, offline-first mobile products with Kotlin, Jetpack Compose, Room, and hardware-backed SQLCipher encryption.",
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
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoSansDevanagari.variable} scroll-smooth dark`}
    >
      <body className="bg-bg text-text font-sans antialiased min-h-screen relative selection:bg-accent selection:text-accent-on">
        {/* Fine Architectural Film Grain Texture */}
        <div className="noise-overlay" />

        {/* Subtle Desktop Interactive Cursor */}
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}
