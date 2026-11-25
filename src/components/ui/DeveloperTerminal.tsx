"use client";

import React, { useState, useEffect, useRef } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { proceduralAudio } from "@/lib/proceduralAudio";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

const AVAILABLE_COMMANDS = [
  "help",
  "whoami",
  "work",
  "swarmos",
  "qroute",
  "sovereign",
  "stack",
  "verify",
  "archive",
  "contact",
  "resume",
  "theme",
  "sudo hire",
  "debug",
  "clear",
  "exit",
];

const HELP_TEXT = `Available Commands:
  help        - Display command manifest
  whoami      - Identity, education, and architectural competencies
  work        - Jump to Commercial Platforms (Girvi, JewelBill, AdvoKosh)
  swarmos     - Inspect SwarmOS P2P Distributed Device Mesh OS
  qroute      - Inspect QRoute Quantum-Inspired Transit Engine
  sovereign   - Print sovereign engineering architectural manifest
  stack       - Inspect 5-layer sovereign architecture stack & Keystore
  verify      - Run live mathematical float drift & GST verification engine
  archive     - Explore The Lab constellation (38+ systems & AI projects)
  contact     - Open deployment beacon / inquiry transmission
  resume      - Download verified engineering CV / credentials
  theme       - Toggle cybernetic glitch state
  sudo hire   - Dispatch priority client engagement protocol
  debug       - Toggle real-time graphics timeline inspector
  clear       - Flush terminal history
  exit        - Close CLI session`;

export const DeveloperTerminal: React.FC = () => {
  const {
    terminalOpen,
    setTerminalOpen,
    setGlitchMode,
    glitchMode,
    setScrollProgress,
    toggleDebug,
  } = useWorldStore();

  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ type: "cmd" | "output" | "success" | "system"; text: string }>>([
    { type: "system", text: "vaidik@kernel v5.0 — Personal Engineering Shell (LNCT '26 · Bhopal, IN)" },
    { type: "output", text: "Type 'help' for navigation & diagnostic commands, or 'whoami'." },
  ]);

  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Toggle on ` (backtick)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        proceduralAudio.tick();
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
      setTimeout(() => inputRef.current?.focus(), 60);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalOpen, history]);

  // Tab completion & History navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      const match = AVAILABLE_COMMANDS.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
      } else {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    proceduralAudio.tick();
    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();
    const newHistory = [...history, { type: "cmd" as const, text: `$ ${cmd}` }];

    switch (lower) {
      case "help":
        newHistory.push({ type: "output", text: HELP_TEXT });
        break;
      case "whoami":
        newHistory.push({
          type: "output",
          text: "Vaidik Gandhi — Systems Architect & Applied AI Engineer.\nFounder @ VaidikTech, Bhopal, India.\nB.Tech CSE (AI & ML) Lakshmi Narain College of Technology (LNCT) '26.\nCore: Distributed Swarms, Quantum-Inspired Routing, Air-Gapped Sovereign Hardware Systems.",
        });
        break;
      case "swarmos":
        newHistory.push({
          type: "success",
          text: "SwarmOS: Air-Gapped P2P Distributed Device Mesh OS (Wi-Fi Direct, Bluetooth SPP, state consensus). Direct inspect: /projects/swarmos",
        });
        break;
      case "qroute":
        newHistory.push({
          type: "success",
          text: "QRoute: Quantum-Inspired Combinatorial Transit Routing (Simulated Annealing, Kalman Filter, GTFS). Direct inspect: /projects/qroute",
        });
        break;
      case "sovereign":
        newHistory.push({
          type: "output",
          text: "SOVEREIGN MANIFEST:\n • Float Drift: 0.0000% (64-bit integer paise currency math)\n • Cloud Telemetry: 0 KB (Zero network permissions on core ledgers)\n • Silicon Enclave: 256-bit AES-GCM under Android StrongBox Keystore\n • Hardware Printing: 240ms direct thermal ESC/POS receipt generation",
        });
        break;
      case "work":
        newHistory.push({ type: "success", text: "Jumping to Act II: Selected Engineering Works..." });
        setScrollProgress(0.28);
        document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "stack":
        newHistory.push({ type: "success", text: "Expanding Act III: 5-Layer Architecture & Code..." });
        setScrollProgress(0.55);
        document.getElementById("engineering-craft")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "verify":
        newHistory.push({ type: "success", text: "Jumping to Live Mathematical Prover & Offline Sentinel..." });
        setScrollProgress(0.62);
        document.getElementById("engineering-craft")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "archive":
        newHistory.push({ type: "success", text: "Jumping to Orbital Archive & Works Index..." });
        setScrollProgress(0.35);
        document.getElementById("selected-works")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        newHistory.push({ type: "success", text: "Scrolling to Act V: Direct Contact..." });
        setScrollProgress(0.98);
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        newHistory.push({
          type: "output",
          text: "Opening verified credentials & repository profile: https://github.com/Vaidik04",
        });
        window.open("https://github.com/Vaidik04", "_blank");
        break;
      case "theme":
        setGlitchMode(!glitchMode);
        newHistory.push({
          type: "output",
          text: `Cyber holographic glitch mode toggled: ${!glitchMode ? "ACTIVE" : "DISABLED"}`,
        });
        break;
      case "sudo hire":
        newHistory.push({
          type: "success",
          text: "Priority transmission dispatched to vaidik.gandhi1@gmail.com. Initializing mail protocol...",
        });
        window.location.href =
          "mailto:vaidik.gandhi1@gmail.com?subject=Priority%20Engineering%20Engagement&body=Hi%20Vaidik,%20I%20reviewed%20your%20sovereign%20portfolio...";
        break;
      case "debug":
        toggleDebug();
        newHistory.push({ type: "output", text: "Toggled runtime graphics debugger inspector." });
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
          text: `zsh: command not found: ${cmd}. Type 'help' for available commands.`,
        });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  if (!terminalOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-8 bg-black/75 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#090C14] border border-accent-cyan/40 rounded-3xl shadow-[0_0_60px_rgba(34,211,238,0.2)] overflow-hidden font-mono flex flex-col h-[85vh] sm:h-[500px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-surface-elevated/80 border-b border-white/10 select-none">
          <div className="flex items-center gap-2 overflow-hidden">
            <span
              className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:opacity-100 flex-shrink-0"
              onClick={() => setTerminalOpen(false)}
            />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 flex-shrink-0" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 flex-shrink-0" />
            <span className="text-xs text-typography-muted ml-2 sm:ml-3 flex items-center gap-1.5 truncate">
              <TerminalIcon className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
              <span className="truncate">vaidik@portfolio:~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-typography-muted hidden sm:inline">Press [Tab] to autocomplete</span>
            <button
              onClick={() => setTerminalOpen(false)}
              className="text-typography-muted hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal History */}
        <div className="flex-1 p-5 overflow-y-auto space-y-2 text-xs leading-relaxed text-typography-primary">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap ${
                line.type === "cmd"
                  ? "text-accent-android font-bold"
                  : line.type === "success"
                  ? "text-accent-cyan font-bold"
                  : line.type === "system"
                  ? "text-accent-violet font-semibold"
                  : "text-typography-secondary"
              }`}
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="flex items-center px-5 py-3.5 bg-[#05060A] border-t border-white/10">
          <span className="text-accent-cyan mr-2 font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'work', 'verify', 'sudo hire'..."
            className="flex-1 bg-transparent text-xs text-typography-primary focus:outline-none placeholder:text-typography-muted font-mono"
          />
          <button type="submit" className="p-1.5 rounded-md hover:bg-white/10 text-accent-cyan hover:text-white transition-colors ml-2" title="Execute command">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

