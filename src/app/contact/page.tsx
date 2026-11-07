"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { ContactSection } from "@/sections/ContactSection";
import { ArrowLeft, Mail, Github, Linkedin, Play, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="pb-12 border-b border-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-4">
            <span>Direct Channels & Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
            Let&apos;s Build Something Dependable.
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mt-4 font-sans leading-relaxed">
            Have a product concept, an offline enterprise workflow, or an Android engineering problem? Let&apos;s discuss architecture, timelines, and execution.
          </p>
        </div>

        {/* Direct Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-12">
          <a
            href="mailto:vaidikgandhi@gmail.com"
            className="p-5 rounded-2xl bg-surface-1 border border-border hover:border-accent transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-text-muted">Direct Email</span>
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-mono font-bold text-text truncate group-hover:text-accent transition-colors">
              vaidikgandhi@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/Vaidik04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface-1 border border-border hover:border-accent transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-text-muted">GitHub Repos</span>
              <Github className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-mono font-bold text-text truncate group-hover:text-accent transition-colors">
              github.com/Vaidik04
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/vaidik-gandhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-surface-1 border border-border hover:border-accent transition-colors flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-text-muted">Professional Network</span>
              <Linkedin className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-mono font-bold text-text truncate group-hover:text-accent transition-colors">
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
