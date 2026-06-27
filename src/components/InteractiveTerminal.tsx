import React, { useState, useRef, useEffect } from "react";
import projectsData from "../data/projects.json";
import contactData from "../data/contacts.json";
import homeData from "../data/home.json";

interface HistoryItem {
  text: string;
  isInput: boolean;
  prompt?: string;
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { text: "Ishara Portfolio Shell v2.1.0 (tty/1)", isInput: false },
    { text: "Type 'help' to view available commands or 'ls' to list files.", isInput: false },
    { text: "", isInput: false },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Virtual files content
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
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
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

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add to command history
    const updatedHistoryCmd = [...commandHistory, trimmedInput];
    setCommandHistory(updatedHistoryCmd);
    setHistoryIndex(-1);

    const newHistory = [...history, { text: input, isInput: true, prompt: "visitor@ishara-madu:~$ " }];
    const args = trimmedInput.split(" ");
    const command = args[0].toLowerCase();
    const arg1 = args[1];

    let response = "";

    switch (command) {
      case "help":
        response = `Supported commands:
  ls           - List files in current directory
  cat [file]   - View the contents of a file
  neofetch     - Show system information
  whoami       - Print active user name
  clear        - Clear the terminal screen
  help         - Show this help manual`;
        break;

      case "ls":
        response = Object.keys(files).join("    ");
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
   OS: Ishara Portfolio OS v2.1
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

  return (
    <div
      onClick={handleTerminalClick}
      className="flex flex-col w-full h-[280px] bg-zinc-950 text-emerald-400 font-mono text-xs p-4 overflow-y-auto cursor-text select-text rounded-b-2xl border border-zinc-900 shadow-inner"
    >
      <div className="flex-1 flex flex-col space-y-1">
        {history.map((item, index) => (
          <div key={index} className="whitespace-pre-wrap leading-relaxed">
            {item.prompt && <span className="text-zinc-400 font-bold">{item.prompt}</span>}
            <span className={item.isInput ? "text-white font-bold" : "text-emerald-400 opacity-90"}>
              {item.text}
            </span>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <form onSubmit={handleCommandSubmit} className="flex items-center mt-2 border-t border-zinc-900 pt-2 relative">
        <span className="text-zinc-400 font-bold mr-2 select-none">visitor@ishara-madu:~$</span>
        <span className="text-white font-bold whitespace-pre">{input}</span>
        {/* Blinking terminal cursor indicator */}
        <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse ml-0.5 select-none" style={{ animationDuration: '0.8s' }}></span>
        
        {/* Invisible input overlaying for focus and typing */}
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
