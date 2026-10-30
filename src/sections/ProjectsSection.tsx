"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  Play,
  Github,
  ArrowUpRight,
  Search,
  Layers,
  Sparkles,
  X,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Code2,
  ChevronRight,
  Smartphone,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const playstoreCount = PROJECTS.filter((p) => Boolean(p.links.playStore)).length;
  const commercialCount = PROJECTS.filter((p) => p.category === "commercial").length;
  const systemsCount = PROJECTS.filter((p) => p.category === "systems").length;
  const aiCount = PROJECTS.filter((p) => p.category === "ai").length;
  const toolsCount = PROJECTS.filter((p) => p.category === "tools").length;

  const categories = [
    { id: "all", label: `All Projects (${PROJECTS.length})` },
    { id: "playstore", label: `Google Play Store (${playstoreCount})`, isSpecial: true },
    { id: "commercial", label: `Commercial Android (${commercialCount})` },
    { id: "systems", label: `P2P & Distributed (${systemsCount})` },
    { id: "ai", label: `AI & Vision (${aiCount})` },
    { id: "tools", label: `Tools & Python (${toolsCount})` },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    let matchCat = true;
    if (selectedCategory === "playstore") {
      matchCat = Boolean(p.links.playStore);
    } else if (selectedCategory !== "all") {
      matchCat = p.category === selectedCategory;
    }

    if (!searchQuery) return matchCat;
    const q = searchQuery.toLowerCase();
    const inName = p.name.toLowerCase().includes(q);
    const inTagline = p.tagline.toLowerCase().includes(q);
    const inTech = p.techStack.some((t) => t.toLowerCase().includes(q));
    const inProblem = p.problem.toLowerCase().includes(q);
    return matchCat && (inName || inTagline || inTech || inProblem);
  });

  return (
    <section id="projects" className="relative py-32 overflow-hidden border-t border-white/5">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-android/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-android text-xs font-mono uppercase tracking-widest mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>03 // Production Portfolio</span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-tight">
                Featured Applications & Systems
              </h2>
              <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-3 font-sans">
                Native Android products with verified Google Play Store releases, air-gapped machine learning swarms, and mathematical precision engines.
              </p>
            </Reveal>
          </div>

          {/* Search Bar & Direct View All Link */}
          <Reveal direction="left" delay={0.2}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-typography-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Kotlin, Room, Nearby..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-elevated/80 border border-white/10 text-xs text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent-android/60 transition-colors font-mono"
                />
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-accent-android/40 text-xs font-mono text-typography-primary hover:text-accent-android transition-all duration-300"
              >
                <span>Full Directory ({PROJECTS.length})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  isSelected
                    ? cat.isSpecial
                      ? "bg-accent-android text-[#05060A] shadow-[0_0_24px_rgba(61,220,132,0.45)] ring-2 ring-accent-android"
                      : "bg-white text-[#05060A] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    : cat.isSpecial
                    ? "bg-accent-android/10 border border-accent-android/30 text-accent-android hover:bg-accent-android/20"
                    : "bg-surface border border-surface-border text-typography-secondary hover:text-typography-primary hover:border-white/20"
                }`}
              >
                {cat.isSpecial && <Play className="w-2.5 h-2.5 fill-current" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const hasPlayStore = Boolean(project.links.playStore);

            return (
              <Reveal key={project.id} direction="up" delay={Math.min(idx * 0.05, 0.4)}>
                <TiltCard
                  className={`p-6 h-full flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-all duration-500 ${
                    hasPlayStore ? "ring-1 ring-accent-android/25 bg-gradient-to-b from-surface-elevated/90 to-surface/90" : ""
                  }`}
                  glowColor={
                    hasPlayStore ? "rgba(61, 220, 132, 0.22)" : "rgba(124, 92, 255, 0.16)"
                  }
                >
                  {/* Subtle Top Glowing Line for PlayStore Apps */}
                  {hasPlayStore && (
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-android to-transparent opacity-80" />
                  )}

                  <div className="flex flex-col gap-4">
                    {/* Top Status & Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase flex items-center gap-1.5 ${
                          project.badgeType === "playstore"
                            ? "bg-accent-android/15 text-accent-android border border-accent-android/40 shadow-[0_0_12px_rgba(61,220,132,0.25)]"
                            : project.badgeType === "production"
                            ? "bg-accent-violet/15 text-accent-violet border border-accent-violet/30"
                            : "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                        }`}
                      >
                        {project.badgeType === "playstore" ? (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-android opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-android"></span>
                          </span>
                        ) : (
                          <ShieldCheck className="w-2.5 h-2.5" />
                        )}
                        <span>{project.badge}</span>
                      </span>

                      <span className="text-[10px] font-mono text-typography-muted">
                        {project.platform.split("·")[0]}
                      </span>
                    </div>

                    {/* App Identity Row */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-white/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={project.icon}
                          alt={project.name}
                          width={44}
                          height={44}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-heading font-bold text-typography-primary truncate group-hover:text-accent-android transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xs text-typography-muted truncate font-sans">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Problem Summary */}
                    <p className="text-xs text-typography-secondary leading-relaxed line-clamp-3 font-sans">
                      {project.problem}
                    </p>

                    {/* Metrics Strip */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-surface-elevated/50 border border-white/5">
                      {project.keyMetrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[9px] font-mono text-typography-muted uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="text-xs font-mono font-semibold text-typography-primary truncate">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-typography-secondary border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-typography-muted">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="flex items-center justify-between pt-5 mt-4 border-t border-white/5 gap-2">
                    {/* View Specs Drawer Button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-typography-primary hover:text-accent-android transition-colors py-1 group/btn"
                    >
                      <span>Architecture & Specs</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    {/* External Buttons */}
                    <div className="flex items-center gap-1.5">
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-full bg-accent-android/15 hover:bg-accent-android/30 border border-accent-android/40 text-accent-android text-[11px] font-mono flex items-center gap-1 transition-all duration-200 shadow-[0_0_10px_rgba(61,220,132,0.2)]"
                          title="Open Google Play Store"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>Play</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-typography-secondary hover:text-white transition-colors"
                          title="GitHub Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.id}`}
                        className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-accent-android hover:text-[#05060A] flex items-center justify-center text-typography-secondary transition-colors"
                        title="Dedicated Case Study Page"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          CASE STUDY MODAL DRAWER
          ===================================================================== */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-surface-elevated border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex items-start justify-between gap-4 bg-surface/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 p-1.5 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={activeModalProject.icon}
                      alt={activeModalProject.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase bg-accent-android/15 text-accent-android border border-accent-android/40">
                        {activeModalProject.badge}
                      </span>
                      <span className="text-xs font-mono text-typography-muted">
                        {activeModalProject.platform}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-typography-primary">
                      {activeModalProject.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-typography-secondary">
                      {activeModalProject.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/projects/${activeModalProject.id}`}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-accent-android hover:text-[#05060A] text-xs font-mono text-typography-primary transition-all duration-200"
                  >
                    <span>Full Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-typography-secondary hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8">
                {/* Verified Screenshots Carousel (if available) */}
                {activeModalProject.screenshots && activeModalProject.screenshots.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent-android mb-3 flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Verified Application Screenshots</span>
                    </h4>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
                      {activeModalProject.screenshots.map((img, i) => (
                        <div
                          key={i}
                          className="flex-shrink-0 w-44 h-72 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg relative group"
                        >
                          <Image
                            src={img}
                            alt={`Screenshot ${i + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeModalProject.keyMetrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-surface border border-white/5 flex flex-col"
                    >
                      <span className="text-[10px] font-mono uppercase text-typography-muted mb-1">
                        {m.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-accent-android">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Problem Statement */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-2 flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>The Real-World Problem</span>
                  </h4>
                  <p className="text-sm text-typography-secondary leading-relaxed bg-surface/50 p-4 rounded-2xl border border-white/5">
                    {activeModalProject.problem}
                  </p>
                </div>

                {/* Solution Architecture */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-accent-android mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Native Architecture & Solution</span>
                  </h4>
                  <p className="text-sm text-typography-secondary leading-relaxed bg-surface/50 p-4 rounded-2xl border border-white/5">
                    {activeModalProject.solution}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-accent-violet mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeModalProject.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-typography-secondary bg-surface/40 p-3 rounded-xl border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-android flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet (if available) */}
                {activeModalProject.codeSnippet && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-typography-primary mb-2 flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-accent-android" />
                      <span>Architecture Code Snippet ({activeModalProject.codeSnippet.filename})</span>
                    </h4>
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#090C14]">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                        <span className="text-[11px] font-mono text-typography-muted">
                          {activeModalProject.codeSnippet.filename}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-accent-android">
                          {activeModalProject.codeSnippet.language}
                        </span>
                      </div>
                      <pre className="p-4 text-xs font-mono text-typography-secondary overflow-x-auto leading-relaxed">
                        <code>{activeModalProject.codeSnippet.code}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-typography-muted mb-2">
                    Complete Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-typography-primary border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-6 border-t border-white/5 bg-surface/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {activeModalProject.links.playStore && (
                    <a
                      href={activeModalProject.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-android text-[#05060A] text-xs font-sans font-bold shadow-[0_0_24px_rgba(61,220,132,0.4)] hover:shadow-[0_0_36px_rgba(61,220,132,0.6)] transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>View on Google Play</span>
                    </a>
                  )}
                  {activeModalProject.links.github && (
                    <a
                      href={activeModalProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-xs font-mono text-typography-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>

                <Link
                  href={`/projects/${activeModalProject.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-android hover:underline"
                >
                  <span>Open Dedicated Case Study Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
