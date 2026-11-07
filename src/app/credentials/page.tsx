"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ArrowLeft, GraduationCap } from "lucide-react";

export default function CredentialsPage() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & IIT Certifications</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text leading-tight">
            Verified Credentials
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-3xl mt-4 font-sans leading-relaxed">
            Formal examinations across Object-Oriented Software Design, Machine Learning, Data Structures, Relational Database Management Systems, and Discrete Mathematics certified by Premier Indian Institutes of Technology (IIT Kharagpur, CMI, IIT Ropar) through the Ministry of Education NPTEL initiative.
          </p>
        </div>

        {/* Certifications Component */}
        <CertificationsSection />
      </main>

      <FooterSection />
    </div>
  );
}
