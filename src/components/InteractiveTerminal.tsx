import React, { useState, useRef, useEffect } from "react";
import projectsData from "../data/projects.json";
import contactData from "../data/contacts.json";
import homeData from "../data/home.json";

interface HistoryItem {
  text: string;
  isInput: boolean;
  prompt?: boolean;
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { text: "Ishara Portfolio OS v2.2.0 (tty/1)", isInput: false },
    { text: "Type 'help' to view commands or 'ls' to see files.", isInput: false },
    { text: "", isInput: false },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Virtual files content with syntax highlights
  const files: Record<string, string> = {
    "about.txt": `${homeData.name[2]}\n-----------------------------------\n${homeData.description}\n\nPassionate about building responsive, high-performance web and mobile software.`,
    "skills.json": JSON.stringify({
      languages: ["TypeScript", "JavaScript", "Kotlin", "Java", "SQL"],
      frontend: ["React.js", "Next.js", "Tailwind CSS"],
      mobile: ["React Native", "Expo", "Android SDK"],
      backend: ["Node.js", "Express", "Supabase", "PostgreSQL"],
      tools: ["Git", "Vite", "Redux", "pnpm"]
    }, null, 2),
    "projects.list": projectsData.map(p => `* ${p.title}\n  Tags: ${p.tags.join(", ")}\n  Source: ${p.homepage}`).join("\n\n"),
    "contact.cfg": `email="${contactData.email}"\ngithub="${contactData.github}"\nlinkedin="${contactData.linkedin}"\ncv="${contactData.cv}"`
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  const renderPrompt = () => (
    <>
      <span className="text-emerald-500 font-bold select-none">visitor@ishara-madu</span>
      <span className="text-zinc-500 font-bold select-none">:</span>
      <span className="text-sky-400 font-bold select-none">~</span>
      <span className="text-zinc-400 font-bold select-none">$ </span>
    </>
  );

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const updatedHistoryCmd = [...commandHistory, trimmedInput];
    setCommandHistory(updatedHistoryCmd);
    setHistoryIndex(-1);

    const newHistory = [...history, { text: input, isInput: true, prompt: true }];
    const args = trimmedInput.split(" ");
    const command = args[0].toLowerCase();
    const arg1 = args[1];

    let response = "";

    switch (command) {
      case "help":
        response = `Available commands:
  ls           - List files in current directory
  cat [file]   - View the contents of a file
  neofetch     - Show system information
  whoami       - Print active user name
  clear        - Clear the terminal screen
  help         - Show this help manual`;
        break;

      case "ls":
        response = "about.txt    skills.json    projects.list    contact.cfg";
        break;

      case "cat":
        if (!arg1) {
          response = "usage: cat [filename]";
        } else if (files[arg1]) {
          response = files[arg1];
        } else {
          response = `cat: ${arg1}: No such file or directory`;
        }
        break;

      case "whoami":
        response = "visitor";
        break;

      case "neofetch":
        response = `         _
       .(-).
      (\\___/)
      /_   _\\
        | |
        |_|
   visitor@ishara-madu
   -------------------
   OS: Ishara Portfolio OS v2.2
   Kernel: React / Vite / Tailwind
   Shell: ishara-sh (custom)
   DE: Minimal Terminal
   CPU: Gemini Agent Engine
   Memory: 8192 MB (Virtual)
   Status: Looking for opportunities`;
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = `sh: command not found: ${command}. Type 'help' for options.`;
    }

    setHistory([...newHistory, { text: response, isInput: false }]);
    setInput("");
  };

  const renderHistoryItem = (item: HistoryItem, index: number) => {
    if (item.isInput) {
      return (
        <div key={index} className="flex items-center">
          {renderPrompt()}
          <span className="text-white font-bold whitespace-pre">{item.text}</span>
        </div>
      );
    }

    // Special styling for file listing
    if (item.text === "about.txt    skills.json    projects.list    contact.cfg") {
      return (
        <div key={index} className="flex gap-4 select-none font-semibold">
          <span className="text-zinc-200">about.txt</span>
          <span className="text-yellow-400">skills.json</span>
          <span className="text-sky-400">projects.list</span>
          <span className="text-pink-400">contact.cfg</span>
        </div>
      );
    }

    // Command not found error styling
    if (item.text.startsWith("sh: command not found:") || item.text.startsWith("cat: ")) {
      return (
        <div key={index} className="text-red-400 whitespace-pre-wrap leading-relaxed opacity-95">
          {item.text}
        </div>
      );
    }

    return (
      <div key={index} className="text-zinc-300 whitespace-pre-wrap leading-relaxed opacity-90">
        {item.text}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      onClick={handleTerminalClick}
      className="flex flex-col w-full h-full bg-zinc-950 font-mono text-[11px] p-5 overflow-y-auto cursor-text select-text custom-scrollbar space-y-1.5"
    >
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #09090b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}</style>

      {history.map((item, index) => renderHistoryItem(item, index))}

      <form onSubmit={handleCommandSubmit} className="flex items-center relative pt-1">
        {renderPrompt()}
        <span className="text-white font-bold whitespace-pre">{input}</span>
        {/* Blinking block terminal cursor */}
        <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse ml-0.5 select-none" style={{ animationDuration: '0.8s' }}></span>
        
        {/* Hidden input overlaying for focus and typing */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="opacity-0 absolute inset-0 w-full h-full cursor-text outline-none"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
