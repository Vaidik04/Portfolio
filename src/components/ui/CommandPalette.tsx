"use client";

import React, { useState, useEffect } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { PROJECTS } from "@/data/projects";
import { CERTIFICATES } from "@/data/certificates";
import {
  Search,
  Sparkles,
  Layers,
  Award,
  Cpu,
  Mail,
  Play,
  X,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

export const CommandPalette: React.FC = () => {
  const { paletteOpen, setPaletteOpen, setScrollProgress } = useWorldStore();
  const [query, setQuery] = useState("");

  // Toggle on Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        proceduralAudio.tick();
        setPaletteOpen(!paletteOpen);
      }
      if (e.key === "Escape" && paletteOpen) {
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paletteOpen, setPaletteOpen]);

  if (!paletteOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q))
  );

  const filteredCerts = CERTIFICATES.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.issuer.toLowerCase().includes(q) ||
      c.skillsLearned.some((s) => s.toLowerCase().includes(q))
  );

  const navigateToSection = (progress: number, id: string) => {
    proceduralAudio.tick();
    setPaletteOpen(false);
    setScrollProgress(progress);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4 bg-black/80 backdrop-blur-xl animate-fade-in font-mono">
      <div className="relative w-full max-w-xl bg-[#090C14] border border-white/15 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[82vh] sm:max-h-[540px]">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-white/10 gap-3 bg-surface-elevated/60">
          <Search className="w-4 h-4 text-accent-cyan flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, architecture layers, IIT certs..."
            className="flex-1 bg-transparent text-sm text-typography-primary focus:outline-none placeholder:text-typography-muted font-sans"
          />
          <button
            onClick={() => setPaletteOpen(false)}
            className="text-typography-muted hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-4 text-xs">
          {/* Quick Jump Navigation */}
          <div>
            <span className="text-[10px] text-typography-muted uppercase px-2 tracking-wider">
              Scenes & Timeline Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => navigateToSection(0.12, "hero")}
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary border border-white/5"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-android" />
                <span>01 // The Trinity Hero (3 Devices)</span>
              </button>

              <button
                onClick={() => navigateToSection(0.32, "architecture")}
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary border border-white/5"
              >
                <GitBranch className="w-3.5 h-3.5 text-accent-violet" />
                <span>02 // Exploded 5-Layer Stack</span>
              </button>

              <button
                onClick={() => navigateToSection(0.50, "flight-deck")}
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary border border-white/5"
              >
                <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                <span>03 // Flagship Flight Deck</span>
              </button>

              <button
                onClick={() => navigateToSection(0.82, "proof")}
                className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary border border-white/5"
              >
                <Cpu className="w-3.5 h-3.5 text-[#F5C26B]" />
                <span>05 // Live Proof IDE & Math</span>
              </button>
            </div>
          </div>

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] text-typography-muted uppercase px-2 tracking-wider">
                Applications ({filteredProjects.length})
              </span>
              <div className="space-y-1.5 mt-2">
                {filteredProjects.slice(0, 6).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setPaletteOpen(false);
                      window.location.href = `/projects/${p.id}`;
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-left group border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {p.links.playStore ? (
                        <Play className="w-3.5 h-3.5 text-accent-android fill-current flex-shrink-0" />
                      ) : (
                        <ShieldCheck className="w-3.5 h-3.5 text-typography-muted flex-shrink-0" />
                      )}
                      <span className="text-typography-primary font-bold truncate group-hover:text-accent-android">
                        {p.name}
                      </span>
                      <span className="text-typography-muted truncate text-[11px] hidden sm:inline">
                        — {p.tagline}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-typography-muted font-bold uppercase">
                      {p.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Certifications */}
          {filteredCerts.length > 0 && (
            <div>
              <span className="text-[10px] text-typography-muted uppercase px-2 tracking-wider">
                IIT Certifications & Honors ({filteredCerts.length})
              </span>
              <div className="space-y-1.5 mt-2">
                {filteredCerts.slice(0, 3).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => navigateToSection(0.95, "credentials")}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-left group border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Award className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                      <span className="text-typography-primary font-bold truncate group-hover:text-accent-cyan">
                        {c.title}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan font-bold">
                      {c.badge || "Verified"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
