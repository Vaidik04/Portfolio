"use client";

import React, { useState, useEffect, useRef } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { sounds } from "@/lib/sound";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

const HELP_TEXT = `Available Commands:
  help             - List all terminal commands
  projects         - Jump to 3D project flight deck
  skills           - Explore the interactive 3D skill galaxy
  architecture     - View sovereign offline & security architecture
  credentials      - Inspect NPTEL, HackerRank & Bootcamp certifications
  contact          - Deploy communication beacon
  whoami           - Vaidik Gandhi identity spec
  glitch           - Toggle cybernetic holographic glitch state
  clear            - Clear terminal buffer
  exit             - Close CLI window`;

export const DeveloperTerminal: React.FC = () => {
  const { terminalOpen, setTerminalOpen, setGlitchMode, glitchMode } = useWorldStore();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ type: "cmd" | "output"; text: string }>>([
    { type: "output", text: "VaidikTech Sovereign Kernel v3.4.0 (x86_64-android-system)" },
    { type: "output", text: "Type 'help' for available system commands or 'projects' to navigate." },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Toggle on ` (backtick)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        sounds.tick();
        setTerminalOpen(!terminalOpen);
      }
      if (e.key === "Escape" && terminalOpen) {
        setTerminalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [terminalOpen, setTerminalOpen]);

  useEffect(() => {
    if (terminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sounds.tick();
    const newHistory = [...history, { type: "cmd" as const, text: `$ ${inputVal}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "output", text: HELP_TEXT });
        break;
      case "projects":
        newHistory.push({ type: "output", text: "Navigating to 3D Flight Deck..." });
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        newHistory.push({ type: "output", text: "Targeting 3D Skill Galaxy..." });
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "architecture":
        newHistory.push({ type: "output", text: "Rendering 3D MVVM & Keystore Node Pipelines..." });
        document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "credentials":
        newHistory.push({ type: "output", text: "Loading NPTEL (IITs) & HackerRank verification records..." });
        document.getElementById("credentials")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        newHistory.push({ type: "output", text: "Opening deployment channel..." });
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "whoami":
        newHistory.push({
          type: "output",
          text: "Vaidik Gandhi\nIndependent Android Developer & Founder of VaidikTech\nSpecialization: Native Kotlin, Jetpack Compose, Room SQLite, SQLCipher 256-bit AES & On-Device AI\nLocation: Bhopal, India (LNCT AI & ML)",
        });
        break;
      case "glitch":
        setGlitchMode(!glitchMode);
        newHistory.push({ type: "output", text: `Glitch state toggled: ${!glitchMode}` });
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "exit":
        setTerminalOpen(false);
        setInputVal("");
        return;
      default:
        newHistory.push({
          type: "output",
          text: `zsh: command not found: ${cmd}. Type 'help' for command list.`,
        });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  if (!terminalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#090C14] border border-accent-cyan/30 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.2)] overflow-hidden font-mono flex flex-col h-[480px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-surface-elevated/80 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setTerminalOpen(false)} />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs text-typography-muted ml-3 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-accent-cyan" />
              <span>vaidik@vaidiktech-core:~</span>
            </span>
          </div>

          <button
            onClick={() => setTerminalOpen(false)}
            className="text-typography-muted hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs leading-relaxed text-typography-primary">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap ${
                line.type === "cmd" ? "text-accent-android font-bold" : "text-typography-secondary"
              }`}
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-[#05060A] border-t border-white/10">
          <span className="text-accent-cyan mr-2 font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'projects', 'glitch'..."
            className="flex-1 bg-transparent text-xs text-typography-primary focus:outline-none placeholder:text-typography-muted font-mono"
          />
          <button type="submit" className="text-typography-muted hover:text-accent-cyan">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
