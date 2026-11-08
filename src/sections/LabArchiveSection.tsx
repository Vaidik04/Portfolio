"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ExternalLink, Github, Play, Cpu, Shield, Sparkles, Filter, ChevronRight, Layers } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { proceduralAudio } from "@/lib/proceduralAudio";

type CategoryFilter = "all" | "commercial" | "systems" | "ai" | "tools";

export const LabArchiveSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const categories: { id: CategoryFilter; label: string; count: number }[] = [
    { id: "all", label: "All Projects", count: PROJECTS.length },
    { id: "commercial", label: "Commercial Sovereign", count: PROJECTS.filter((p) => p.category === "commercial").length },
    { id: "systems", label: "Systems & Mesh", count: PROJECTS.filter((p) => p.category === "systems").length },
    { id: "ai", label: "Edge AI & Vision", count: PROJECTS.filter((p) => p.category === "ai").length },
    { id: "tools", label: "Developer Tools", count: PROJECTS.filter((p) => p.category === "tools").length },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === "all" || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q)) ||
        project.problem.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="lab"
      className="relative py-28 px-6 max-w-6xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-cyan w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Scene 04 · The Engineering Constellation</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary">
              The Lab Archive.
            </h2>
            <p className="text-sm sm:text-base text-typography-secondary font-sans mt-2 max-w-xl">
              Every production app, air-gapped mesh experiment, and edge intelligence system built with deterministic engineering principles.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 text-xs font-mono text-typography-muted">
            <span className="px-3 py-1.5 rounded-xl bg-surface border border-white/5">
              <strong className="text-accent-android font-bold">{PROJECTS.length}</strong> Total Systems
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-surface border border-white/5">
              <strong className="text-accent-violet font-bold">100%</strong> Offline-First
            </span>
          </div>
        </div>
      </div>

      {/* Control Bar: Categories + Search + View Mode */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-[#0E1118]/80 border border-white/10 backdrop-blur-xl mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  proceduralAudio.tick();
                  setActiveCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-white/15 text-white shadow-sm border border-white/20 font-bold"
                    : "text-typography-muted hover:text-typography-primary hover:bg-white/[0.04]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-accent-android text-black font-bold" : "bg-white/5 text-typography-muted"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Layout Toggles */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-56">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-typography-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter tech, keyword..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-typography-primary placeholder:text-typography-muted/60 focus:outline-none focus:border-accent-cyan/50"
            />
          </div>

          <button
            onClick={() => {
              proceduralAudio.tick();
              setViewMode(viewMode === "grid" ? "table" : "grid");
            }}
            className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-typography-secondary hover:text-white transition-colors"
            title="Toggle Matrix Grid / Table View"
          >
            {viewMode === "grid" ? "Table View" : "Grid View"}
          </button>
        </div>
      </div>

      {/* Grid or Table Representation */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-5 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Top Accent Stripe on Hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.accentColor || "#3DDC84" }}
              />

              <div>
                {/* Meta Row: Category & Timeline */}
                <div className="flex items-center justify-between text-[11px] font-mono text-typography-muted mb-3">
                  <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
                    {project.category}
                  </span>
                  <span>{project.timeline.split(" ")[0]}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-base font-heading font-bold text-typography-primary group-hover:text-accent-android transition-colors">
                  {project.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-typography-secondary font-sans leading-relaxed mt-2 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Problem Statement excerpt */}
                <p className="text-[11px] text-typography-muted font-sans leading-relaxed mt-2 line-clamp-2 border-l-2 border-white/10 pl-2">
                  {project.problem}
                </p>
              </div>

              {/* Bottom: Tech Stack Pills & Action Links */}
              <div className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-typography-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-typography-muted">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-accent-android/20 text-typography-muted hover:text-accent-android transition-colors"
                        title="Google Play Store"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 text-typography-muted hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-accent-cyan hover:underline"
                  >
                    <span>Read Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Matrix Table View */
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#121622] text-typography-muted border-b border-white/10 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4 hidden md:table-cell">Category</th>
                  <th className="py-3 px-4 hidden lg:table-cell">Primary Stack</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProjects.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-3 px-4 text-typography-muted whitespace-nowrap">
                      {p.timeline.split(" ")[0]}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href={`/projects/${p.id}`}
                        className="font-bold text-white group-hover:text-accent-android transition-colors block"
                      >
                        {p.name}
                      </Link>
                      <span className="text-[11px] font-sans text-typography-muted line-clamp-1">
                        {p.tagline}
                      </span>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell uppercase text-[10px] text-typography-secondary">
                      {p.category}
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {p.techStack.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[10px] text-typography-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <Link
                        href={`/projects/${p.id}`}
                        className="text-accent-cyan hover:underline inline-flex items-center gap-1"
                      >
                        <span>Inspect</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

