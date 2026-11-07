"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ContactSection } from "@/sections/ContactSection";
import { ArrowLeft, Mail, Github, Linkedin, Play, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-typography-primary flex flex-col selection:bg-brand selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-surface-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-mono uppercase tracking-widest mb-4">
            <span>Direct Channels & Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
            Let&apos;s Build Something Dependable.
          </h1>
          <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-4 font-sans leading-relaxed">
            Have a product concept, an offline enterprise workflow, or an Android engineering problem? Let&apos;s discuss architecture, timelines, and execution.
          </p>
        </div>

        {/* Direct Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12">
          <a
            href="mailto:vaidikgandhi@gmail.com"
            className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-brand transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-typography-muted">Direct Email</span>
              <Mail className="w-4 h-4 text-brand" />
            </div>
            <span className="text-sm font-mono font-bold text-typography-primary truncate group-hover:text-brand transition-colors">
              vaidikgandhi@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/Vaidik04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-surface-border-hover transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-typography-muted">GitHub Repos</span>
              <Github className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-mono font-bold text-typography-primary truncate group-hover:text-brand transition-colors">
              github.com/Vaidik04
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/vaidik-gandhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-brand transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-typography-muted">Professional Network</span>
              <Linkedin className="w-4 h-4 text-brand" />
            </div>
            <span className="text-sm font-mono font-bold text-typography-primary truncate group-hover:text-brand transition-colors">
              linkedin.com/in/vaidik-gandhi
            </span>
          </a>
        </div>

        {/* Contact Form Section */}
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
