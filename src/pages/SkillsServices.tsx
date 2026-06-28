import skillsData from "../data/skills.json";
import { LuFileCode, LuFolder, LuGitBranch } from "react-icons/lu";

function TechIcon({ name }: { name: string }) {
    const n = name.toLowerCase().trim();
    
    // React / React Native
    if (n.includes("react")) {
        return (
            <svg className="w-3.5 h-3.5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
            </svg>
        );
    }
    // Next.js
    if (n.includes("next")) {
        return (
            <svg className="w-3.5 h-3.5 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        );
    }
    // Redux Toolkit
    if (n.includes("redux")) {
        return (
            <svg className="w-3.5 h-3.5 text-purple-650" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        );
    }
    // Tailwind CSS
    if (n.includes("tailwind")) {
        return (
            <svg className="w-3.5 h-3.5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M17 17H7l-5-5 5-5h10l5 5-5 5z" />
            </svg>
        );
    }
    // HTML5 & CSS3
    if (n.includes("html") || n.includes("css")) {
        return (
            <svg className="w-3.5 h-3.5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        );
    }
    // Expo
    if (n.includes("expo")) {
        return (
            <svg className="w-3.5 h-3.5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
        );
    }
    // Kotlin / KMP
    if (n.includes("kotlin") || n.includes("kmp")) {
        return (
            <svg className="w-3.5 h-3.5 text-violet-650" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        );
    }
    // Java
    if (n.includes("java") && !n.includes("javascript")) {
        return (
            <svg className="w-3.5 h-3.5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
            </svg>
        );
    }
    // Python
    if (n.includes("python")) {
        return (
            <svg className="w-3.5 h-3.5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6v6l4 2" />
            </svg>
        );
    }
    // Android SDK / Room Database / SQLite
    if (n.includes("android") || n.includes("room")) {
        return (
            <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        );
    }
    // Node.js
    if (n.includes("node")) {
        return (
            <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        );
    }
    // Express
    if (n.includes("express")) {
        return (
            <svg className="w-3.5 h-3.5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        );
    }
    // Supabase
    if (n.includes("supabase")) {
        return (
            <svg className="w-3.5 h-3.5 text-emerald-650" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        );
    }
    // Firebase
    if (n.includes("firebase")) {
        return (
            <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
        );
    }
    // MongoDB
    if (n.includes("mongo")) {
        return (
            <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
        );
    }
    // MySQL / PostgreSQL / Databases
    if (n.includes("mysql") || n.includes("postgres") || n.includes("database")) {
        return (
            <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
        );
    }
    // Git & GitHub
    if (n.includes("git")) {
        return (
            <svg className="w-3.5 h-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 9a9 9 0 0 1-9 9" />
            </svg>
        );
    }
    // n8n / Automation
    if (n.includes("n8n") || n.includes("automation")) {
        return (
            <svg className="w-3.5 h-3.5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        );
    }
    // Figma
    if (n.includes("figma")) {
        return (
            <svg className="w-3.5 h-3.5 text-rose-450" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5a3.5 3.5 0 0 1-3.5-3.5z" />
                <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5c-1.93 0-3.5-1.57-3.5-3.5z" />
            </svg>
        );
    }
    // MS Excel
    if (n.includes("excel")) {
        return (
            <svg className="w-3.5 h-3.5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
            </svg>
        );
    }
    // Google Gemini API / AI
    if (n.includes("gemini") || n.includes("ai")) {
        return (
            <svg className="w-3.5 h-3.5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        );
    }
    // REST APIs / Integrations / NowPayments / AdMob / RevenueCat
    if (n.includes("api") || n.includes("rest") || n.includes("payment") || n.includes("admob") || n.includes("revenuecat")) {
        return (
            <svg className="w-3.5 h-3.5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
        );
    }
    // Vite
    if (n.includes("vite")) {
        return (
            <svg className="w-3.5 h-3.5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M12 22V12" />
            </svg>
        );
    }
    // Package Managers
    if (n.includes("pnpm") || n.includes("npm") || n.includes("yarn")) {
        return (
            <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        );
    }

    // Default fallback icon
    return (
        <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}

function ServiceIcon({ title }: { title: string }) {
    const t = title.toLowerCase();
    
    // Mobile App Development
    if (t.includes("mobile")) {
        return (
            <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        );
    }
    // Full-Stack Web Development
    if (t.includes("web") || t.includes("full-stack")) {
        return (
            <svg className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        );
    }
    // Backend & Cloud Architecture
    if (t.includes("backend") || t.includes("cloud")) {
        return (
            <svg className="w-4 h-4 text-violet-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
        );
    }
    // AI Integration & Automation
    return (
        <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}

// Maps tech skills to custom code extensions for workspace styling
function getFileExtension(skill: string): string {
    const s = skill.toLowerCase().trim();
    if (s.includes("react") || s.includes("next")) return ".tsx";
    if (s.includes("typescript")) return ".ts";
    if (s.includes("javascript") || s.includes("node") || s.includes("express")) return ".js";
    if (s.includes("kotlin")) return ".kt";
    if (s.includes("java") && !s.includes("javascript")) return ".java";
    if (s.includes("python")) return ".py";
    if (s.includes("android")) return ".xml";
    if (s.includes("mysql") || s.includes("postgres")) return ".sql";
    if (s.includes("supabase") || s.includes("db") || s.includes("mongo")) return ".db";
    if (s.includes("tailwind") || s.includes("css")) return ".css";
    if (s.includes("html")) return ".html";
    if (s.includes("git") || s.includes("github")) return ".git";
    if (s.includes("firebase") || s.includes("expo") || s.includes("figma") || s.includes("n8n")) return ".json";
    if (s.includes("api") || s.includes("pnpm") || s.includes("npm") || s.includes("yarn")) return ".yaml";
    if (s.includes("vite")) return ".config.ts";
    return ".txt";
}

// Maps services to matching mock workspace code filenames
function getServiceFileName(title: string): string {
    const t = title.toLowerCase();
    if (t.includes("mobile")) return "mobile_development.kt";
    if (t.includes("web") || t.includes("full-stack")) return "web_development.tsx";
    if (t.includes("backend") || t.includes("cloud")) return "backend_architecture.db";
    if (t.includes("automation") || t.includes("ai")) return "workflow_automation.py";
    return "service_module.ts";
}

export default function SkillsServices() {
    return (
        <div 
            id="skills" 
            className="flex h-auto w-full rounded-3xl overflow-hidden justify-center items-center mb-5 border border-slate-200 border-opacity-80 shadow-md bg-slate-50/70"
        >
            <div className="flex h-auto w-full p-6 md:p-10 flex-col bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_16px]">
                
                {/* macOS Window Controls */}
                <div className="flex gap-1.5 mb-6 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90 shadow-sm" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/90 shadow-sm" />
                </div>

                {/* Section Header */}
                <div className="flex flex-col mb-8">
                    <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold select-none">
                        // skills_services.sh - tech stack & services matrix
                    </span>
                    <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-slate-900 select-none">
                        &lt;SkillsAndServices /&gt;
                    </h2>
                    <p className="text-base font-normal text-slate-650 leading-relaxed">
                        A catalog of my core technology strengths, programming skills, and professional software development offerings.
                    </p>
                </div>

                {/* Grid Split Content Layout (Sidebar & Active Editors Theme) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full mt-4">
                    
                    {/* Left Column: Tech Stack & Skills (Styled as a VS-Code Project File Explorer) */}
                    <div className="flex flex-col bg-white/60 border border-slate-200/70 rounded-2xl p-5 shadow-sm">
                        
                        {/* File Explorer Header */}
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-5 select-none">
                            <div className="flex items-center gap-1.5">
                                <LuFolder className="w-4 h-4 text-indigo-500" />
                                <h3 className="text-sm font-mono font-bold text-slate-800">
                                    PROJECT_TREE / src
                                </h3>
                            </div>
                            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                                workspace
                            </span>
                        </div>

                        {/* Folder tree representation */}
                        <div className="flex flex-col space-y-6">
                            {skillsData.skills.map((category) => (
                                <div key={category.category} className="flex flex-col">
                                    {/* Sub-folder Directory Path */}
                                    <div className="flex items-center gap-1.5 mb-3 font-mono text-xs text-indigo-700 font-bold select-none">
                                        <LuFolder className="w-3.5 h-3.5 text-indigo-400" />
                                        <span>/{category.category.toLowerCase().replace(/\s+/g, "_")}</span>
                                    </div>

                                    {/* Tech File Badges */}
                                    <div className="flex flex-wrap gap-2.5 pl-4 border-l border-slate-200/60 ml-1.5">
                                        {category.items.map((skill) => (
                                            <div 
                                                key={skill}
                                                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200/60 text-slate-800 text-[11px] sm:text-xs font-mono font-semibold rounded-xl shadow-sm hover:border-slate-350 hover:bg-slate-50/80 transition-all duration-200 hover:-translate-y-0.5 select-none cursor-default"
                                            >
                                                <TechIcon name={skill} />
                                                <span>
                                                    {skill.toLowerCase().replace(/\s+/g, "")}
                                                    <span className="text-slate-400 font-normal">
                                                        {getFileExtension(skill)}
                                                    </span>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
 
                    {/* Right Column: Professional Services (Styled as Code Editor Tabs) */}
                    <div className="flex flex-col space-y-6">
                        
                        {/* Services Header */}
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 mb-2 select-none">
                            <div className="flex items-center gap-1.5">
                                <LuFileCode className="w-4 h-4 text-emerald-500" />
                                <h3 className="text-sm font-mono font-bold text-slate-800">
                                    ACTIVE_EDITORS
                                </h3>
                            </div>
                            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                                services
                            </span>
                        </div>

                        {/* Stacked Code Editor Windows */}
                        <div className="flex flex-col space-y-4">
                            {skillsData.services.map((service) => (
                                <div 
                                    key={service.title}
                                    className="bg-white/80 border border-slate-200/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col relative"
                                >
                                    {/* Editor Tab Header */}
                                    <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200/60 select-none">
                                        <div className="flex items-center">
                                            <ServiceIcon title={service.title} />
                                            <span className="font-mono text-xs font-bold text-slate-700">
                                                {getServiceFileName(service.title)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <LuGitBranch className="w-3 h-3 text-slate-400" />
                                            <span className="font-mono text-[9px] text-slate-400">main</span>
                                        </div>
                                    </div>

                                    {/* Editor Content Area */}
                                    <div className="p-5 flex flex-col">
                                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-2">
                                            {service.title}
                                        </h4>

                                        <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Associated tech stack variable */}
                                        <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100 font-mono text-[10px]">
                                            <span className="text-indigo-650 font-bold select-none">const</span>
                                            <span className="text-violet-650 font-semibold select-none">stack</span>
                                            <span className="text-slate-400 select-none">=</span>
                                            <div className="flex flex-wrap gap-1.5 select-none">
                                                {service.tech.map((t) => (
                                                    <span 
                                                        key={t}
                                                        className="bg-slate-100 text-slate-650 border border-slate-200/60 px-2 py-0.5 rounded text-[10px] font-semibold"
                                                    >
                                                        "{t}"
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
