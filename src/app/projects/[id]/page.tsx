import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { PROJECTS } from "@/data/projects";
import {
  ArrowLeft,
  Play,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  Code2,
  Cpu,
  Smartphone,
} from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-14 w-full">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
          <Link
            href="/#selected-works"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Works</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span>
              Project {currentIndex + 1} of {PROJECTS.length}
            </span>
          </div>
        </div>

        {/* Project Hero Header with Live Featured Screen Mockup */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-border">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30 font-semibold uppercase">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {project.platform}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-surface-1 text-text-muted border border-border flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-accent" />
                <span>{project.timeline}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-surface-2 border border-border p-2 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xl">
                <Image
                  src={project.icon}
                  alt={project.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-text">
                {project.name}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-text-muted mt-2 font-sans leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-accent-on text-xs font-sans font-semibold tracking-wide transition-all shadow-[0_2px_14px_rgba(212,162,76,0.25)] hover:scale-[1.02]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>View on Google Play</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-1 border border-border hover:border-border-hover text-text-muted hover:text-text text-xs font-mono transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Featured Production Phone Screen Spotlight */}
          {(project.heroImage || (project.screenshots && project.screenshots.length > 0)) && (
            <div className="flex-shrink-0 w-[240px] sm:w-[260px] mx-auto lg:mx-0">
              <div
                className="relative rounded-[2.2rem] p-2.5 border shadow-2xl bg-[#090B12]"
                style={{
                  borderColor: `${project.accentColor || "#7C5CFF"}50`,
                  boxShadow: `0 0 40px ${project.accentColor || "#7C5CFF"}25`,
                }}
              >
                {/* Punch-hole camera dot */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black z-20" />
                {/* Screen frame */}
                <div className="relative aspect-[9/19.5] rounded-[1.8rem] overflow-hidden bg-black border border-white/10">
                  <Image
                    src={project.heroImage || project.screenshots?.[0] || project.icon}
                    alt={`${project.name} Active Screen`}
                    fill
                    priority
                    sizes="260px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 py-2 px-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-[10px] font-mono">
                    <span className="text-white/80 font-semibold">Native Release</span>
                    <span className="font-bold" style={{ color: project.accentColor || "#7C5CFF" }}>
                      Verified UI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fictional Sample Data Note */}
        <div className="my-4 p-3 rounded-xl bg-surface-1 border border-border text-xs font-mono text-text-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Privacy & Data Sovereignty Note: All customer names, ledger entries, and amounts shown in these case studies are strictly fictional sample data.</span>
        </div>

        {/* Problem Statement & Hard Constraint */}
        <section className="py-8 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                The Practical Problem
              </span>
              <p className="text-sm sm:text-base font-sans text-text leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent">
                The Architecture Solution
              </span>
              <p className="text-sm sm:text-base font-sans text-text-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Live Production Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="py-8 border-b border-border">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>Verified Production UI</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text">
                  Native Android Release Screens ({project.screenshots.length})
                </h2>
              </div>
              <span className="text-xs font-mono text-text-muted hidden sm:inline-block">
                Captured from Play Store Release Builds
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {project.screenshots.map((screen, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[9/19] rounded-2xl overflow-hidden border border-border bg-[#07080D] shadow-lg hover:border-accent/50 hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={screen}
                    alt={`${project.name} Screen ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[10px] font-mono text-white/90 truncate capitalize">
                      {screen.split("/").pop()?.replace(/_/g, " ").replace(".png", "")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Technical Highlights */}
        <section className="py-8 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-3">
            <Layers className="w-4 h-4" />
            <span>Architecture Decisions</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-text mb-5">
            Key Capabilities & Hardening
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-xs sm:text-sm text-text-muted bg-surface-1 p-3.5 sm:p-4 rounded-xl border border-border"
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Code Snippet (if available) */}
        {project.codeSnippet && (
          <section className="py-8 border-b border-border">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
              <Code2 className="w-4 h-4 text-accent" />
              <span>Verified Source Architecture</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-text mb-5">
              Production Implementation
            </h2>

            <div className="rounded-2xl overflow-hidden border border-border bg-[#08090C] shadow-2xl">
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2/80">
                <span className="text-xs font-mono text-text-muted">
                  {project.codeSnippet.filename}
                </span>
                <span className="text-xs font-mono uppercase text-accent font-semibold">
                  {project.codeSnippet.language}
                </span>
              </div>
              <pre className="p-5 sm:p-6 text-xs sm:text-sm font-mono text-text overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="py-8 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
            <Cpu className="w-4 h-4" />
            <span>Technologies Used</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-text mb-5">
            Stack & Dependencies
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-surface-2 text-text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Previous / Next Navigation */}
        <div className="py-8 flex items-center justify-between gap-4">
          <Link
            href={`/projects/${prevProject.id}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-surface-1 border border-border hover:border-border-hover transition-all text-left max-w-[45%]"
          >
            <ArrowLeft className="w-4 h-4 text-text-muted" />
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Previous
              </span>
              <span className="text-sm font-heading font-bold text-text truncate block">
                {prevProject.name}
              </span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="flex items-center justify-end gap-3 p-4 rounded-xl bg-surface-1 border border-border hover:border-border-hover transition-all text-right max-w-[45%]"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Next
              </span>
              <span className="text-sm font-heading font-bold text-text truncate block">
                {nextProject.name}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-text-muted" />
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
