"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ContactSection } from "@/sections/ContactSection";
import {
  ArrowLeft,
  Mail,
  Github,
  Linkedin,
  Play,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#05060A] text-typography-primary flex flex-col selection:bg-accent-android selection:text-[#05060A]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-accent-android transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/30 text-accent-android text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Channels & Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-typography-primary leading-tight">
            Let&apos;s Build Something Dependable.
          </h1>
          <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-4 font-sans leading-relaxed">
            Have a product concept, an offline enterprise workflow, or an Android engineering problem? Let&apos;s talk architecture, timelines, and execution.
          </p>
        </div>

        {/* Direct Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12">
          <a
            href="mailto:vaidikgandhi@gmail.com"
            className="p-5 rounded-2xl bg-surface border border-white/5 hover:border-accent-android/40 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-typography-muted">Direct Email</span>
              <Mail className="w-4 h-4 text-accent-android group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm font-mono font-bold text-typography-primary truncate group-hover:text-accent-android transition-colors">
              vaidikgandhi@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/Vaidik04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-typography-muted">GitHub Repos</span>
              <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm font-mono font-bold text-typography-primary truncate group-hover:text-accent-android transition-colors">
              github.com/Vaidik04
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/vaidik-gandhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface border border-white/5 hover:border-[#0A66C2]/40 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-typography-muted">Professional Network</span>
              <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm font-mono font-bold text-typography-primary truncate group-hover:text-accent-android transition-colors">
              linkedin.com/in/vaidik-gandhi
            </span>
          </a>
        </div>

        {/* Play Store Strip */}
        <div className="p-6 rounded-3xl bg-surface border border-accent-android/20 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-android/15 border border-accent-android/30 flex items-center justify-center text-accent-android">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-heading font-bold text-typography-primary">
                Explore Published Apps on Google Play
              </h3>
              <p className="text-xs text-typography-muted">
                Girvi, JewelBill, and AdvoKosh actively distributed on Google Play.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.girvi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-accent-android/15 hover:bg-accent-android/30 border border-accent-android/40 text-accent-android text-xs font-mono transition-all"
            >
              Girvi
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.jewellery.invoice"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-accent-android/15 hover:bg-accent-android/30 border border-accent-android/40 text-accent-android text-xs font-mono transition-all"
            >
              JewelBill
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.advokosh.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-accent-android/15 hover:bg-accent-android/30 border border-accent-android/40 text-accent-android text-xs font-mono transition-all"
            >
              AdvoKosh
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
