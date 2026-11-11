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
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-mono tracking-wider uppercase text-text-muted">
            Verified Academic Rigor
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-text leading-tight">
          Credentials & IIT coursework.
        </h2>
        <p className="text-base sm:text-lg text-text-muted font-sans leading-relaxed max-w-2xl">
          Formal examinations certified by Premier Indian Institutes of Technology (IIT Kharagpur, Chennai Mathematical Institute, IIT Ropar) through the Ministry of Education NPTEL initiative.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 border-b border-border pb-4">
        <button
          onClick={() => setActiveFilter("all")}
          style={activeFilter === "all" ? { backgroundColor: "#3DDC84", color: "#05060A" } : {}}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "all"
              ? "font-bold shadow-sm"
              : "text-text-muted hover:text-text"
          }`}
        >
          All ({CERTIFICATES.length})
        </button>
        <button
          onClick={() => setActiveFilter("nptel")}
          style={activeFilter === "nptel" ? { backgroundColor: "#3DDC84", color: "#05060A" } : {}}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "nptel"
              ? "font-bold shadow-sm"
              : "text-text-muted hover:text-text"
          }`}
        >
          Premier IITs NPTEL ({CERTIFICATES.filter((c) => c.category === "nptel").length})
        </button>
        <button
          onClick={() => setActiveFilter("other")}
          style={activeFilter === "other" ? { backgroundColor: "#3DDC84", color: "#05060A" } : {}}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "other"
              ? "font-bold shadow-sm"
              : "text-text-muted hover:text-text"
          }`}
        >
          Industry ({CERTIFICATES.filter((c) => c.category !== "nptel").length})
        </button>
      </div>

      {/* Clean Editorial Credentials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col justify-between hover:border-border-hover transition-colors"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>{cert.date}</span>
                {cert.score && (
                  <span className="text-accent font-semibold">{cert.score}</span>
                )}
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-text leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-sans text-text-muted mt-1">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs font-sans text-text-faint leading-relaxed line-clamp-2">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
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
                  className="text-accent hover:underline inline-flex items-center gap-1"
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
