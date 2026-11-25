"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Play, Layers } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { Magnetic } from "@/components/ui/Magnetic";

type FilterCategory = "all" | "ai" | "systems" | "commercial";

const FEATURED_IDS = [
  "swarmos",
  "qroute",
  "ai-disaster-sos",
  "advokosh",
  "girvi",
  "jewelbill",
];

const CATEGORY_LABELS: Record<FilterCategory, string> = {
  all: "All Selected (06)",
  systems: "Systems & Mesh",
  ai: "AI & Optimization",
  commercial: "Commercial Mobile",
};

export const SelectedWorksSection: React.FC = () => {
  const featuredProjects = useMemo(() => {
    return FEATURED_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(
      (p): p is Project => Boolean(p)
    );
  }, []);

  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selectedId, setSelectedId] = useState<string>(featuredProjects[0]?.id || "swarmos");

  const visibleProjects = useMemo(() => {
    if (filter === "all") return featuredProjects;
    if (filter === "ai") {
      return featuredProjects.filter((p) => p.category === "ai" || p.id === "qroute");
    }
    if (filter === "systems") {
      return featuredProjects.filter((p) => p.category === "systems");
    }
    return featuredProjects.filter((p) => p.category === "commercial");
  }, [featuredProjects, filter]);

  const activeProject =
    visibleProjects.find((p) => p.id === selectedId) || visibleProjects[0] || featuredProjects[0];

  const hasPhotoPreview = Boolean(
    activeProject?.screenshots &&
      activeProject.screenshots.length > 0 &&
      !activeProject.screenshots[0].endsWith(".svg")
  );

  return (
    <section
      id="selected-works"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 pointer-events-auto"
    >
      {/* Swiss Section Header + Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div className="max-w-2xl">
          <div className="text-[11px] font-mono uppercase tracking-widest text-sky-400 mb-3">
            02 // Selected Engineering Works
          </div>
          <h2 className="swiss-heading font-heading font-bold text-white">
            From distributed swarms to zero-network ledgers.
          </h2>
        </div>

        {/* Hairline Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {(Object.keys(CATEGORY_LABELS) as FilterCategory[]).map((key) => {
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  proceduralAudio.tick();
                  setFilter(key);
                }}
                className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-colors cursor-pointer border ${
                  active
                    ? "bg-white text-[#050608] border-white font-bold"
                    : "bg-transparent text-typography-muted border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {CATEGORY_LABELS[key]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive 12-Column Split Index (Left List / Right Inspection Stage) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08]">
        {/* Left 7 Cols: Interactive Project Index */}
        <div className="lg:col-span-7 divide-y divide-white/[0.08]">
          {visibleProjects.map((project, idx) => {
            const isSelected = activeProject?.id === project.id;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onMouseEnter={() => {
                  if (selectedId !== project.id) {
                    setSelectedId(project.id);
                    proceduralAudio.tick();
                  }
                }}
                onClick={() => {
                  setSelectedId(project.id);
                  proceduralAudio.tick();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedId(project.id);
                  }
                }}
                className={`group py-6 sm:py-7 px-3 sm:px-4 transition-colors cursor-pointer flex items-start sm:items-center justify-between gap-4 ${
                  isSelected ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-6 min-w-0">
                  <span
                    className={`text-xs font-mono pt-1 tabular-mono transition-colors ${
                      isSelected ? "text-accent-android font-bold" : "text-typography-faint"
                    }`}
                  >
                    {num}
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3
                        className={`text-xl sm:text-2xl font-heading font-bold tracking-tight transition-colors ${
                          isSelected ? "text-white" : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {project.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-typography-faint">
                        · {project.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-typography-muted font-sans mt-1 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden sm:inline text-[11px] font-mono text-typography-faint">
                    {project.timeline}
                  </span>
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      proceduralAudio.tick();
                    }}
                    className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-accent-android/60 text-accent-android bg-accent-android/10"
                        : "border-white/10 text-typography-muted group-hover:border-white/30 group-hover:text-white"
                    }`}
                    aria-label={`Open ${project.name} case study`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 5 Cols: Pinned Live Inspection Stage */}
        {activeProject && (
          <div className="lg:col-span-5 lg:border-l border-t lg:border-t-0 border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between bg-[#080A0F]/80 backdrop-blur-md">
            <div>
              {/* Stage Header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-android">
                  {activeProject.badge}
                </span>
                <span className="text-[10px] font-mono text-typography-faint truncate">
                  {activeProject.platform}
                </span>
              </div>

              {/* Visual Viewport: Real Device Screen OR Architectural Telemetry Schematic */}
              {hasPhotoPreview ? (
                <div className="relative mt-5 h-56 sm:h-64 w-full rounded-lg overflow-hidden border border-white/10 bg-[#050608]">
                  <Image
                    src={activeProject.screenshots![0]}
                    alt={`${activeProject.name} interface preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[center_12%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="mt-5 p-5 rounded-lg border border-white/[0.08] bg-[#050608] font-mono">
                  <div className="flex items-center justify-between text-[10px] text-typography-faint pb-3 border-b border-white/[0.06] mb-4">
                    <span>SYSTEM BENCHMARK &amp; TELEMETRY</span>
                    <span style={{ color: activeProject.accentColor || "#38BDF8" }}>VERIFIED SPEC</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {activeProject.keyMetrics.slice(0, 4).map((metric) => (
                      <div key={metric.label}>
                        <div className="text-[10px] text-typography-faint uppercase">{metric.label}</div>
                        <div className="text-sm font-bold text-white mt-0.5 tabular-mono">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Concise Technical Summary */}
              <div className="mt-5 space-y-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-typography-faint">
                    Core Challenge
                  </div>
                  <p className="text-xs sm:text-sm text-typography-muted font-sans leading-relaxed mt-1 line-clamp-3">
                    {activeProject.problem}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-typography-faint">
                    Architectural Solution
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed mt-1 line-clamp-3">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Minimal Inline Tech Stack */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-mono text-typography-faint">
                {activeProject.techStack.slice(0, 6).map((tech) => (
                  <span key={tech}>#{tech.replace(/\s+/g, "")}</span>
                ))}
              </div>
            </div>

            {/* Stage Actions */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <Magnetic strength={0.2}>
                <Link
                  href={`/projects/${activeProject.id}`}
                  onClick={() => proceduralAudio.tick()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-[#050608] hover:bg-accent-android font-mono font-bold text-xs transition-colors"
                >
                  <span>Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>

              <div className="flex items-center gap-2">
                {activeProject.links.github && (
                  <a
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-white/10 hover:border-white/30 text-xs font-mono text-typography-muted hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
                {activeProject.links.playStore && (
                  <a
                    href={activeProject.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-accent-android/30 hover:border-accent-android text-xs font-mono text-accent-android transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Play Store</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Archive Gateway */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
        <span className="text-typography-faint">
          Showing 06 featured builds from {PROJECTS.length} documented projects across AI, Quantum, Systems &amp; Mobile.
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/lab"
            onClick={() => proceduralAudio.tick()}
            className="inline-flex items-center gap-1.5 text-sky-400 hover:underline"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3D Lab Constellation</span>
          </Link>
          <Link
            href="/projects"
            onClick={() => proceduralAudio.tick()}
            className="inline-flex items-center gap-1.5 text-white hover:text-accent-android transition-colors"
          >
            <span>All {PROJECTS.length} Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
