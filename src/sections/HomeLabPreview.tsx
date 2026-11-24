"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, FolderKanban, Terminal, Filter } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { proceduralAudio } from "@/lib/proceduralAudio";

type CategoryFilter = "all" | "commercial" | "systems" | "ai" | "tools";

export const HomeLabPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredProjects = useMemo(() => {
    let list = PROJECTS;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    return list.slice(0, 8); // Top 8 featured in homepage index
  }, [activeCategory]);

  const handleFilterClick = (cat: CategoryFilter) => {
    proceduralAudio.tick();
    setActiveCategory(cat);
  };

  return (
    <section
      id="lab-preview"
      className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Section Header: Brutalist Kairos Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-[#1E222D]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyber uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
            <span>ARCHIVE // 35+ COMMISSIONS // 2024-2026</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
            INDEXED COMMISSIONS
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#8E94A5] max-w-2xl mt-1">
            Complete indexed ledger of sovereign Android production software, embedded firmware systems, neural vision pipelines, and quantum optimization tools.
          </p>
        </div>

        {/* Category Filter Chips (Kairos Atelier Signature) */}
        <div className="flex flex-wrap items-center gap-1.5 self-start md:self-end">
          {(
            [
              { id: "all", label: `ALL [${PROJECTS.length}]` },
              { id: "commercial", label: "COMMERCIAL" },
              { id: "systems", label: "SYSTEMS" },
              { id: "ai", label: "AI & CV" },
              { id: "tools", label: "TOOLS" },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterClick(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? "bg-cyber text-[#08090C] font-bold shadow-[0_0_12px_rgba(200,248,2,0.25)]"
                  : "bg-[#0E1015] border border-[#1E222D] text-[#8E94A5] hover:text-white hover:border-[#2C3242]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* High-Density Editorial Table (Kairos Atelier Signature) */}
      <div className="tactical-box rounded-2xl border border-[#1E222D] bg-[#0E1015]/95 overflow-hidden">
        {/* Table Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-[#1E222D] text-[10px] font-mono tracking-widest uppercase text-[#565B6C]">
          <div className="col-span-1">ID</div>
          <div className="col-span-4">COMMISSION // SYSTEM</div>
          <div className="col-span-4">CORE ARCHITECTURE & STACK</div>
          <div className="col-span-3 text-right">STATUS // SPECIFICATION</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[#1E222D]/80">
          {filteredProjects.map((project, index) => {
            const indexStr = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                onClick={() => proceduralAudio.tick()}
                className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-5 sm:px-6 py-4 items-center transition-all duration-200 hover:bg-[#141720] hover:border-l-4 hover:border-l-cyber"
              >
                {/* Column 1: Index Number */}
                <div className="col-span-1 hidden md:block text-xs font-mono text-[#565B6C] group-hover:text-cyber transition-colors">
                  {indexStr}
                </div>

                {/* Column 2: Name + Tagline */}
                <div className="col-span-12 md:col-span-4 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:hidden font-mono text-cyber font-bold">
                      {indexStr} →
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-white group-hover:text-cyber transition-colors">
                      {project.name}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#1A1F2C] border border-[#2A3040] text-[#8E94A5] uppercase">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-sans text-[#8E94A5] truncate mt-0.5">
                    {project.tagline}
                  </span>
                </div>

                {/* Column 3: Tech Stack Tags */}
                <div className="col-span-12 md:col-span-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#08090C] border border-[#1E222D] text-[#8E94A5] group-hover:border-cyber/30 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[9px] font-mono text-[#565B6C] self-center">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Column 4: Badge & Link */}
                <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end gap-3 text-right">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-semibold uppercase">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#8E94A5] group-hover:text-white transition-colors">
                    <span className="hidden sm:inline">INSPECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-cyber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Directory Footer Navigation */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-[#1E222D] bg-[#0E1015]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8E94A5]">
          <Terminal className="w-3.5 h-3.5 text-cyber" />
          <span>INDEXED COMMISSIONS: 35 TOTAL · 3 FLAGSHIP RELEASES ON PLAY STORE</span>
        </div>
        <Link
          href="/lab"
          onClick={() => proceduralAudio.tick()}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyber hover:text-[#D4FF00] transition-colors"
        >
          <span>EXPLORE FULL INTERACTIVE LAB & REPOSITORIES</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
