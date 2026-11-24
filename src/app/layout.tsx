import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ServiceWorkerSentinel } from "@/components/offline/ServiceWorkerSentinel";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: false,
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
  title: "Vaidik Gandhi — Systems Architect, Applied AI & Founder @ VaidikTech",
  description:
    "Engineering sovereign systems, multi-agent AI architectures, quantum-inspired optimization, and air-gapped commercial platforms. Creator of SwarmOS, QRoute, Girvi, JewelBill, and AdvoKosh.",
  keywords: [
    "Vaidik Gandhi",
    "Systems Architect",
    "Applied AI Engineer",
    "Multi-Agent Systems",
    "SwarmOS",
    "QRoute",
    "GridCare",
    "Quantum Optimization",
    "VaidikTech",
    "Sovereign Systems",
    "Air-Gapped Computing",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Girvi",
    "AdvoKosh",
    "JewelBill",
    "Bhopal India",
    "LNCT Bhopal",
  ],
  authors: [{ name: "Vaidik Gandhi" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Vaidik Gandhi — Systems Architect, Applied AI & Founder @ VaidikTech",
    description:
      "Engineering sovereign systems, multi-agent AI architectures, quantum optimization, and air-gapped commercial platforms with mathematical rigor.",
    url: "https://vaidiktech.app",
    siteName: "Vaidik Gandhi Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidik Gandhi — Systems Architect, Applied AI & Founder @ VaidikTech",
    description:
      "Engineering sovereign systems, multi-agent AI architectures, quantum optimization, and air-gapped commercial platforms with mathematical rigor.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://vaidiktech.app/#person",
      "name": "Vaidik Gandhi",
      "jobTitle": "Systems Architect, Applied AI Engineer & Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "VaidikTech",
        "url": "https://vaidiktech.app",
      },
      "url": "https://vaidiktech.app",
      "sameAs": [
        "https://in.linkedin.com/in/vaidik-gandhi-395b11378",
        "https://github.com/Vaidik04",
        "https://play.google.com/store/apps/dev?id=vaidiktech",
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Lakshmi Narain College of Technology (LNCT), Bhopal",
      },
      "knowsAbout": [
        "Distributed Systems Architecture",
        "Multi-Agent AI & Swarm Intelligence",
        "Quantum-Inspired Combinatorial Optimization",
        "Air-Gapped Sovereign Systems",
        "Native Android Development",
        "Cryptographic Hardware Security",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "name": "Girvi (गिरवी) - Gold Loan OS",
      "operatingSystem": "Android",
      "applicationCategory": "BusinessApplication",
      "offers": { "@type": "Offer", "price": "0" },
      "description":
        "Zero-permission offline-first pawn and gold loan ledger for Indian pawnbrokers. Built with Kotlin, Room SQLite, and integer-paise math.",
      "installUrl": "https://play.google.com/store/apps/details?id=com.girvi.app",
    },
    {
      "@type": "SoftwareApplication",
      "name": "JewelBill (ज्वेलबिल) - Thermal POS",
      "operatingSystem": "Android",
      "applicationCategory": "BusinessApplication",
      "offers": { "@type": "Offer", "price": "0" },
      "description":
        "Direct Bluetooth SPP ESC/POS thermal invoicing engine for jewellery stores. Calculates HSN 7113 split GST in 240ms.",
      "installUrl": "https://play.google.com/store/apps/details?id=com.jewellery.invoice",
    },
    {
      "@type": "SoftwareApplication",
      "name": "AdvoKosh (एडवोकोश) - Advocate Chamber Vault",
      "operatingSystem": "Android",
      "applicationCategory": "ProductivityApplication",
      "offers": { "@type": "Offer", "price": "0" },
      "description":
        "High Court advocate limitation diary and cause list manager secured by SQLCipher 256-bit AES and hardware Keystore StrongBox.",
      "installUrl": "https://play.google.com/store/apps/details?id=com.advokosh.app",
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text font-sans antialiased min-h-screen relative selection:bg-accent selection:text-accent-on">
        {/* Fine Architectural Film Grain Texture */}
        <div className="noise-overlay" />

        {/* Subtle Desktop Interactive Cursor */}
        <CustomCursor />

        {/* Real Offline Service Worker & Connectivity Sentinel */}
        <ServiceWorkerSentinel />

        {children}
      </body>
    </html>
  );
}
