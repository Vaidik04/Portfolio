"use client";

import React, { useState } from "react";
import { CERTIFICATES, Certificate } from "@/data/certificates";
import { Award, ExternalLink, GraduationCap, FileText, CheckCircle2 } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "nptel" | "other">("all");

  const filtered = CERTIFICATES.filter((c) => {
    if (activeFilter === "nptel") return c.category === "nptel";
    if (activeFilter === "other") return c.category !== "nptel";
    return true;
  });

  return (
    <section
      id="credentials"
      className="relative py-32 px-6 max-w-6xl mx-auto w-full border-t border-surface-border z-10"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand" />
          <span className="text-xs font-mono tracking-wider uppercase text-typography-muted">
            04 · Verified Academic Rigor
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
          Credentials & IIT coursework.
        </h2>
        <p className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-2xl">
          Formal examinations certified by Premier Indian Institutes of Technology (IIT Kharagpur, Chennai Mathematical Institute, IIT Ropar) through the Ministry of Education NPTEL initiative.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 border-b border-surface-border pb-4">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "all"
              ? "bg-brand text-white font-semibold"
              : "text-typography-muted hover:text-typography-primary"
          }`}
        >
          All ({CERTIFICATES.length})
        </button>
        <button
          onClick={() => setActiveFilter("nptel")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "nptel"
              ? "bg-brand text-white font-semibold"
              : "text-typography-muted hover:text-typography-primary"
          }`}
        >
          Premier IITs NPTEL (6)
        </button>
        <button
          onClick={() => setActiveFilter("other")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "other"
              ? "bg-brand text-white font-semibold"
              : "text-typography-muted hover:text-typography-primary"
          }`}
        >
          Industry (2)
        </button>
      </div>

      {/* Clean Editorial Credentials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between hover:border-surface-border-hover transition-colors"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-typography-muted">
                <span>{cert.date}</span>
                {cert.score && (
                  <span className="text-brand font-semibold">{cert.score}</span>
                )}
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-typography-primary leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-sans text-typography-secondary mt-1">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs font-sans text-typography-muted leading-relaxed line-clamp-2">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-typography-muted">
              {cert.credentialId ? (
                <span className="truncate max-w-[200px]">ID: {cert.credentialId}</span>
              ) : (
                <span>Verified Record</span>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline inline-flex items-center gap-1"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
