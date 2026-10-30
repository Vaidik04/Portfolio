"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects (8)" },
    { id: "commercial", label: "Commercial Android Apps" },
    { id: "ai", label: "On-Device AI & Vision" },
    { id: "systems", label: "P2P & Distributed Systems" },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchCat = selectedCategory === "all" || p.category === selectedCategory;
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-android/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-android text-xs font-mono uppercase tracking-widest mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>03 · Production Portfolio</span>
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

          {/* Search Bar */}
          <Reveal direction="left" delay={0.2}>
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-typography-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Kotlin, Room, SQLCipher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-elevated/80 border border-white/10 text-xs text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent-android/60 transition-colors font-mono"
              />
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
                  ? "bg-accent-android text-[#05060A] shadow-[0_0_20px_rgba(61,220,132,0.35)]"
                  : "bg-surface border border-surface-border text-typography-secondary hover:text-typography-primary hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const hasPlayStore = Boolean(project.links.playStore);

            return (
              <Reveal key={project.id} direction="up" delay={idx * 0.08}>
                <TiltCard
                  className="p-6 h-full flex flex-col justify-between group cursor-pointer"
                  glowColor={
                    hasPlayStore ? "rgba(61, 220, 132, 0.18)" : "rgba(124, 92, 255, 0.15)"
                  }
                >
                  <div className="flex flex-col gap-4">
                    {/* Top Status & Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase flex items-center gap-1.5 ${
                          project.badgeType === "playstore"
                            ? "bg-accent-android/15 text-accent-android border border-accent-android/40 shadow-[0_0_12px_rgba(61,220,132,0.2)]"
                            : project.badgeType === "production"
                            ? "bg-accent-violet/15 text-accent-violet border border-accent-violet/30"
                            : "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                        }`}
                      >
                        {project.badgeType === "playstore" ? (
                          <Play className="w-2.5 h-2.5 fill-accent-android" />
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
                      <div>
                        <h3 className="text-lg font-heading font-bold text-typography-primary leading-tight group-hover:text-accent-android transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xs text-typography-muted font-sans line-clamp-1 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* One-Line Problem / Solution */}
                    <p className="text-xs text-typography-secondary font-sans leading-relaxed line-clamp-3">
                      {project.solution}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[10px] font-mono text-typography-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-typography-muted">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-accent-android hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      <span>Case Study & Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-accent-android/10 border border-accent-android/30 flex items-center justify-center text-accent-android hover:bg-accent-android hover:text-[#05060A] transition-colors"
                          title="View on Google Play Store"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-typography-secondary hover:text-typography-primary hover:border-white/20 transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Case Study Full Modal Drawer */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090C14] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 flex flex-col gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-typography-secondary hover:text-typography-primary hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 pr-12">
                <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-white/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src={activeModalProject.icon}
                    alt={activeModalProject.name}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-android/15 text-accent-android border border-accent-android/30 font-bold uppercase">
                      {activeModalProject.badge}
                    </span>
                    <span className="text-xs font-mono text-typography-muted">
                      {activeModalProject.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-typography-primary">
                    {activeModalProject.name}
                  </h3>
                  <p className="text-sm font-sans text-typography-secondary mt-1">
                    {activeModalProject.tagline}
                  </p>
                </div>
              </div>

              {/* Screenshots Gallery (if available) */}
              {activeModalProject.screenshots && activeModalProject.screenshots.length > 0 && (
                <div className="flex flex-col gap-2 pt-2">
                  <span className="text-xs font-mono text-typography-muted uppercase tracking-wider">
                    Verified Android Screenshots
                  </span>
                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                    {activeModalProject.screenshots.map((src, i) => (
                      <div
                        key={i}
                        className="relative w-44 h-72 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg"
                      >
                        <Image src={src} alt="App Screenshot" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Real Problem */}
              <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Real-World Problem</span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-typography-secondary leading-relaxed">
                  {activeModalProject.problem}
                </p>
              </div>

              {/* Engineering Solution */}
              <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-android uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Architectural Solution</span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-typography-secondary leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-typography-muted uppercase tracking-wider">
                  Engineering Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-surface-elevated border border-white/5 text-xs text-typography-primary flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-android mt-1.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-surface border border-surface-border text-xs font-mono text-typography-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                {activeModalProject.links.playStore && (
                  <a
                    href={activeModalProject.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-android text-[#05060A] font-sans font-bold text-xs tracking-wide shadow-lg hover:bg-accent-android/90 transition-colors"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>View on Google Play</span>
                  </a>
                )}
                {activeModalProject.links.github && (
                  <a
                    href={activeModalProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-surface-border text-typography-primary font-sans font-medium text-xs hover:border-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
