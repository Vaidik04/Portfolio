"use client";

import React, { useState } from "react";
import { Award, ExternalLink, CheckCircle, GraduationCap, ShieldCheck, FileText, ChevronRight } from "lucide-react";
import { CERTIFICATES, Certificate } from "@/data/certificates";
import { proceduralAudio } from "@/lib/proceduralAudio";

export const VerifiedCredentialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "nptel" | "hackerrank" | "udemy">("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCerts = CERTIFICATES.filter((cert) => {
    if (activeTab === "all") return true;
    return cert.category === activeTab;
  });

  return (
    <section
      id="credentials"
      className="relative py-28 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-cyan w-fit">
          <Award className="w-3.5 h-3.5" />
          <span>Scene 07 · Verified Academic Foundation</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary">
              Credentials & Rigor.
            </h2>
            <p className="text-sm sm:text-base text-typography-secondary font-sans mt-2 max-w-xl">
              Formal examinations certified by Premier Indian Institutes of Technology (IIT Kharagpur, CMI, IIT Ropar) through the Ministry of Education NPTEL initiative.
            </p>
          </div>

          {/* Quick Credential Summary */}
          <div className="flex items-center gap-3 text-xs font-mono text-typography-muted">
            <span className="px-3 py-1.5 rounded-xl bg-surface border border-white/5">
              <strong className="text-accent-android font-bold">6</strong> IIT NPTEL
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-surface border border-white/5">
              <strong className="text-accent-violet font-bold">100%</strong> Verified IDs
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0E1118]/80 border border-white/10 backdrop-blur-xl mb-8 w-fit">
        {[
          { id: "all" as const, label: "All Records", count: CERTIFICATES.length },
          { id: "nptel" as const, label: "Premier IITs NPTEL", count: CERTIFICATES.filter((c) => c.category === "nptel").length },
          { id: "hackerrank" as const, label: "HackerRank Verified", count: CERTIFICATES.filter((c) => c.category === "hackerrank").length },
          { id: "udemy" as const, label: "Industry Specializations", count: CERTIFICATES.filter((c) => c.category === "udemy").length },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                proceduralAudio.tick();
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                isActive
                  ? "bg-white/15 text-white font-bold border border-white/20 shadow-sm"
                  : "text-typography-muted hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/5 text-typography-muted">
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => {
              proceduralAudio.tick();
              setSelectedCert(cert);
            }}
            className="group p-5 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Badge & Date */}
              <div className="flex items-center justify-between text-[11px] font-mono text-typography-muted mb-3">
                <span className="px-2 py-0.5 rounded bg-accent-android/10 border border-accent-android/20 text-accent-android font-bold">
                  {cert.score || cert.badge || "Verified"}
                </span>
                <span>{cert.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-heading font-bold text-typography-primary group-hover:text-accent-android transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-xs font-sans text-typography-muted mt-1.5">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-[11px] font-sans text-typography-secondary leading-relaxed mt-2.5 line-clamp-2">
                {cert.description}
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-typography-muted">
              {cert.credentialId ? (
                <span className="truncate max-w-[170px]">ID: {cert.credentialId}</span>
              ) : (
                <span>Formal Record</span>
              )}

              <span className="text-accent-cyan inline-flex items-center gap-1 group-hover:underline">
                <span>View Proof</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Drawer for Selected Certificate */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg p-6 rounded-3xl bg-[#0E121E] border border-white/20 shadow-2xl flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-android" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Verified Academic Examination
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-typography-muted hover:text-white text-xs font-mono"
              >
                Close ✕
              </button>
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold text-white">
                {selectedCert.title}
              </h3>
              <p className="text-xs font-sans text-typography-muted mt-1">
                {selectedCert.issuer} · {selectedCert.date}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="text-typography-muted text-[10px]">Score / Result</div>
                <div className="text-white font-bold mt-0.5">{selectedCert.score || "Passed with Distinction"}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="text-typography-muted text-[10px]">Roll / Credential ID</div>
                <div className="text-accent-android font-bold mt-0.5 truncate">{selectedCert.credentialId || "Verified"}</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-typography-muted uppercase tracking-wider mb-2">
                Skills Tested & Mastered
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skillsLearned.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-typography-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs font-sans text-typography-secondary leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
              {selectedCert.description}
            </p>

            <div className="pt-2 flex items-center justify-end gap-3">
              {selectedCert.fileUrl && (
                <a
                  href={selectedCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-android text-black font-mono font-bold text-xs hover:shadow-[0_0_20px_rgba(61,220,132,0.4)] transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open PDF Certificate</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
