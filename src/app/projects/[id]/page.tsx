import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { PROJECTS, Project } from "@/data/projects";
import {
  ArrowLeft,
  Play,
  Github,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Cpu,
  Layers,
  ArrowRight,
  Code2,
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

  const hasPlayStore = Boolean(project.links.playStore);

  return (
    <div className="min-h-screen bg-[#05060A] text-typography-primary flex flex-col selection:bg-accent-android selection:text-[#05060A]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-accent-android transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-typography-muted">
            <span>Project {currentIndex + 1} of {PROJECTS.length}</span>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/5">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-surface-elevated border border-white/10 p-2 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src={project.icon}
                alt={project.name}
                width={88}
                height={88}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className={`text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase flex items-center gap-1.5 ${
                    project.badgeType === "playstore"
                      ? "bg-accent-android/15 text-accent-android border border-accent-android/40 shadow-[0_0_16px_rgba(61,220,132,0.3)]"
                      : "bg-surface-elevated text-typography-secondary border border-white/10"
                  }`}
                >
                  {project.badgeType === "playstore" ? (
                    <Play className="w-2.5 h-2.5 fill-current" />
                  ) : (
                    <ShieldCheck className="w-2.5 h-2.5" />
                  )}
                  <span>{project.badge}</span>
                </span>
                <span className="text-xs font-mono text-typography-muted">
                  {project.platform}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-typography-primary">
                {project.name}
              </h1>
              <p className="text-sm sm:text-base text-typography-secondary mt-1 font-sans">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-android text-[#05060A] text-xs font-sans font-bold shadow-[0_0_28px_rgba(61,220,132,0.45)] hover:shadow-[0_0_40px_rgba(61,220,132,0.7)] transition-all hover:scale-105"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Get on Google Play</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs font-mono text-typography-primary transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Verified Screenshots Carousel (if present) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="py-12 border-b border-white/5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-accent-android mb-6 flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>Production UI Screenshots</span>
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
              {project.screenshots.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-52 sm:w-60 h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl relative group"
                >
                  <Image
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Metrics Grid */}
        <section className="py-12 border-b border-white/5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.keyMetrics.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-surface border border-white/5 flex flex-col justify-between"
              >
                <span className="text-[11px] font-mono uppercase text-typography-muted mb-2 tracking-wider">
                  {m.label}
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-accent-android">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Problem & Solution Double Column */}
        <section className="py-12 border-b border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-cyan">
              <AlertCircle className="w-4 h-4" />
              <span>01 // Operational Challenge</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-typography-primary">
              The Real-World Problem
            </h3>
            <p className="text-sm text-typography-secondary leading-relaxed bg-surface/40 p-5 rounded-2xl border border-white/5">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-android">
              <CheckCircle2 className="w-4 h-4" />
              <span>02 // Architecture & Engineering</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-typography-primary">
              The Native Solution
            </h3>
            <p className="text-sm text-typography-secondary leading-relaxed bg-surface/40 p-5 rounded-2xl border border-white/5">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Engineering Highlights */}
        <section className="py-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-violet mb-4">
            <Sparkles className="w-4 h-4" />
            <span>03 // Technical Innovations</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-typography-primary mb-6">
            Key Technical Capabilities & Hardening
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-xs sm:text-sm text-typography-secondary bg-surface p-4 rounded-xl border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-android flex-shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Code Snippet (if available) */}
        {project.codeSnippet && (
          <section className="py-12 border-b border-white/5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-typography-primary mb-4">
              <Code2 className="w-4 h-4 text-accent-android" />
              <span>04 // Verified Code Architecture</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-typography-primary mb-6">
              Production Source Implementation
            </h3>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#090C14] shadow-2xl">
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="text-xs font-mono text-typography-muted ml-3">
                    {project.codeSnippet.filename}
                  </span>
                </div>
                <span className="text-xs font-mono uppercase text-accent-android">
                  {project.codeSnippet.language}
                </span>
              </div>
              <pre className="p-6 text-xs sm:text-sm font-mono text-typography-secondary overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </section>
        )}

        {/* Complete Tech Stack */}
        <section className="py-12 border-b border-white/5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-typography-muted mb-4">
            <Cpu className="w-4 h-4" />
            <span>05 // Technologies Used</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-typography-primary mb-6">
            Stack & Dependencies
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono px-4 py-2 rounded-full bg-surface-elevated text-typography-primary border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Prev / Next Navigation Footer */}
        <div className="py-12 flex items-center justify-between gap-4">
          <Link
            href={`/projects/${prevProject.id}`}
            className="flex items-center gap-3 p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all text-left max-w-[45%]"
          >
            <ArrowLeft className="w-4 h-4 text-typography-muted" />
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-typography-muted uppercase block">Previous</span>
              <span className="text-sm font-heading font-bold text-typography-primary truncate block">{prevProject.name}</span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="flex items-center justify-end gap-3 p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all text-right max-w-[45%]"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-typography-muted uppercase block">Next</span>
              <span className="text-sm font-heading font-bold text-typography-primary truncate block">{nextProject.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-typography-muted" />
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

