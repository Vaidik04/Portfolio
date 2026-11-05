"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES, Certificate } from "@/data/certificates";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  Award,
  ExternalLink,
  FileText,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  X,
  Eye,
  Download,
  BookOpen,
} from "lucide-react";

export const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const nptelCount = CERTIFICATES.filter((c) => c.category === "nptel").length;
  const hackerrankCount = CERTIFICATES.filter((c) => c.category === "hackerrank").length;
  const udemyCount = CERTIFICATES.filter((c) => c.category === "udemy").length;

  const categories = [
    { id: "all", label: `All Credentials (${CERTIFICATES.length})` },
    { id: "nptel", label: `NPTEL · IITs & Govt. of India (${nptelCount})` },
    { id: "hackerrank", label: `HackerRank (${hackerrankCount})` },
    { id: "udemy", label: `Udemy Bootcamps (${udemyCount})` },
  ];

  const filtered = CERTIFICATES.filter((c) => {
    if (selectedCategory === "all") return true;
    return c.category === selectedCategory;
  });

  return (
    <section id="credentials" className="relative py-32 overflow-hidden border-t border-white/5 bg-[#06080F]/60">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-violet/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>05 // Verified Credentials & Specializations</span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
                Academic & Industry Certifications
              </h2>
              <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-3 font-sans">
                Formally verified diplomas across Object-Oriented Design, Machine Learning, Data Structures, and Algorithmic Problem Solving from Premier IITs (NPTEL), HackerRank, and Industry Leaders.
              </p>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.2}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-surface-elevated border border-white/10 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent-cyan" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-typography-muted block">Elite Silver · Top Tier</span>
                  <span className="text-xs font-mono font-bold text-typography-primary">IIT Ropar (87% Elite Silver)</span>
                </div>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-surface-elevated border border-white/10 flex items-center gap-3">
                <Award className="w-5 h-5 text-accent-android" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-typography-muted block">Elite Silver</span>
                  <span className="text-xs font-mono font-bold text-typography-primary">IIT Kharagpur (75% Elite Silver)</span>
                </div>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-surface-elevated border border-white/10 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-accent-violet" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-typography-muted block">Academic Endorsement</span>
                  <span className="text-xs font-mono font-bold text-typography-primary">22 IIT Credits Recommended</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-accent-cyan text-[#05060A] shadow-[0_0_20px_rgba(34,211,238,0.35)] font-bold"
                  : "bg-surface border border-surface-border text-typography-secondary hover:text-typography-primary hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => {
            const isNptel = cert.category === "nptel";
            const isElite = cert.badge?.includes("Elite");

            return (
              <Reveal key={cert.id} direction="up" delay={idx * 0.06}>
                <TiltCard
                  className={`p-6 h-full flex flex-col justify-between group relative overflow-hidden transition-all duration-500 cursor-pointer ${
                    isElite ? "ring-1 ring-accent-android/40 bg-gradient-to-b from-surface-elevated to-surface" : ""
                  }`}
                  glowColor={
                    isElite
                      ? "rgba(61, 220, 132, 0.2)"
                      : isNptel
                      ? "rgba(34, 211, 238, 0.16)"
                      : "rgba(124, 92, 255, 0.16)"
                  }
                  onClick={() => setActiveModalCert(cert)}
                >
                  <div className="flex flex-col gap-4">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase flex items-center gap-1.5 ${
                          isElite
                            ? "bg-accent-android/15 text-accent-android border border-accent-android/40 shadow-[0_0_12px_rgba(61,220,132,0.25)]"
                            : isNptel
                            ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                            : "bg-accent-violet/15 text-accent-violet border border-accent-violet/30"
                        }`}
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{cert.badge || "Verified Credential"}</span>
                      </span>

                      <span className="text-[10px] font-mono text-typography-muted">
                        {cert.date}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <div>
                      <h3 className="text-lg font-heading font-bold text-typography-primary group-hover:text-accent-cyan transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-typography-secondary mt-1">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-typography-secondary leading-relaxed line-clamp-3 font-sans">
                      {cert.description}
                    </p>

                    {/* Highlights / Skills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skillsLearned.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-typography-muted border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skillsLearned.length > 3 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-typography-muted">
                          +{cert.skillsLearned.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Meta & View Link */}
                  <div className="flex items-center justify-between pt-5 mt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      {cert.score && (
                        <span className="text-xs font-mono font-bold text-accent-android">
                          Score: {cert.score}
                        </span>
                      )}
                      {cert.credits && (
                        <span className="text-[10px] font-mono text-typography-muted">
                          {cert.credits}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-accent-cyan group-hover:translate-x-0.5 transition-transform">
                        <span>View Certificate</span>
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          CERTIFICATE MODAL VIEWER
          ===================================================================== */}
      <AnimatePresence>
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[92vh] bg-surface-elevated border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex items-start justify-between gap-4 bg-surface/50">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                      {activeModalCert.badge || "Verified"}
                    </span>
                    <span className="text-xs font-mono text-typography-muted">
                      {activeModalCert.date}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-typography-primary">
                    {activeModalCert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-typography-secondary font-mono">
                    {activeModalCert.issuer}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalCert(null)}
                  className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-typography-secondary hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Visual Preview */}
                {activeModalCert.fileType === "image" ? (
                  <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner">
                    <Image
                      src={activeModalCert.fileUrl}
                      alt={activeModalCert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="p-8 rounded-2xl bg-surface border border-white/5 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-bold text-typography-primary">
                        Official NPTEL Verified Examination Certificate (PDF)
                      </h4>
                      <p className="text-xs text-typography-muted max-w-md mx-auto mt-1">
                        Certified by Ministry of Education, Govt. of India & Premier IITs with official QR verification code and roll number.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={activeModalCert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-cyan text-[#05060A] text-xs font-mono font-bold shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Verified PDF in New Tab</span>
                      </a>
                      <a
                        href={activeModalCert.fileUrl}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-xs font-mono text-typography-primary transition-all"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeModalCert.score && (
                    <div className="p-3.5 rounded-2xl bg-surface border border-white/5 flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-typography-muted mb-1">Grade / Score</span>
                      <span className="text-sm font-mono font-bold text-accent-android">{activeModalCert.score}</span>
                    </div>
                  )}
                  {activeModalCert.credits && (
                    <div className="p-3.5 rounded-2xl bg-surface border border-white/5 flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-typography-muted mb-1">Academic Credits</span>
                      <span className="text-sm font-mono font-bold text-accent-cyan">{activeModalCert.credits}</span>
                    </div>
                  )}
                  {activeModalCert.credentialId && (
                    <div className="p-3.5 rounded-2xl bg-surface border border-white/5 flex flex-col col-span-2">
                      <span className="text-[10px] font-mono uppercase text-typography-muted mb-1">Roll / Verification ID</span>
                      <span className="text-xs font-mono font-bold text-typography-primary truncate">{activeModalCert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-typography-muted mb-2">
                    Curriculum & Examination Scope
                  </h4>
                  <p className="text-sm text-typography-secondary leading-relaxed bg-surface/50 p-4 rounded-2xl border border-white/5 font-sans">
                    {activeModalCert.description}
                  </p>
                </div>

                {/* Competencies */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-2">
                    Demonstrated Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalCert.skillsLearned.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-typography-primary border border-white/5 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-accent-cyan" />
                        <span>{s}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

