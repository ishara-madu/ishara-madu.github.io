import React, { useState, useRef, useEffect } from "react";
import projectsData from "../data/projects.json";
import contactData from "../data/contacts.json";
import homeData from "../data/home.json";

interface HistoryItem {
  text: string;
  isInput: boolean;
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { text: "Welcome to Ishara's Portfolio CLI v1.0.0", isInput: false },
    { text: "Type 'help' to see a list of available commands.", isInput: false },
    { text: "", isInput: false },
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return;

    const newHistory = [...history, { text: `visitor@ishara-madu:~$ ${input}`, isInput: true }];

    let response = "";
    switch (trimmedInput) {
      case "help":
        response = `Available commands:
  about    - Read a short bio about me
  skills   - List technical skills and stacks
  projects - View details of featured projects
  contact  - Get contact links (Email, GitHub, LinkedIn)
  clear    - Clear the terminal screen`;
        break;

      case "about":
        response = `${homeData.name[1]}
-----------------------------------------
${homeData.description}
Passionate about software design, clean code, and user experience. Currently focused on full-stack web architectures and native mobile application frameworks.`;
        break;

      case "skills":
        response = `Technical Skills:
-----------------------------------------
[Languages]      JavaScript, TypeScript, Kotlin, Java, SQL
[Frontend]       React.js, Next.js, HTML5, CSS3, Tailwind CSS
[Mobile]         React Native, Expo, Android SDK
[Backend/DB]     Node.js, Express, Supabase, MySQL, PostgreSQL
[DevTools/Other] Git, Vite, Redux, npm, pnpm`;
        break;

      case "projects":
        response = `Featured Projects:
-----------------------------------------
${projectsData
  .map(
    (p) =>
      `* ${p.title}
    Description: ${p.description.slice(0, 80)}...
    URL: ${p.homepage}`
  )
  .join("\n\n")}`;
        break;

      case "contact":
        response = `Contact Information:
-----------------------------------------
Email:    ${contactData.email}
GitHub:   ${contactData.github}
LinkedIn: ${contactData.linkedin}
CV:       ${contactData.cv}`;
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = `bash: command not found: ${trimmedInput}. Type 'help' for a list of commands.`;
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
          <div
            key={index}
            className={`whitespace-pre-wrap leading-relaxed ${
              item.isInput ? "text-white font-bold" : "text-emerald-400 opacity-90"
            }`}
          >
            {item.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <form onSubmit={handleCommandSubmit} className="flex items-center mt-2 border-t border-zinc-900 pt-2">
        <span className="text-white font-bold mr-2">visitor@ishara-madu:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-white outline-none border-none caret-emerald-400 font-mono"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
