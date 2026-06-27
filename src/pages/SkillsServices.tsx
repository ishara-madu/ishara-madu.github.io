import skillsData from "../data/skills.json";

function TechIcon({ name }: { name: string }) {
    const n = name.toLowerCase().trim();
    
    // React / React Native
    if (n.includes("react")) {
        return (
            <svg className="w-3.5 h-3.5 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="w-3.5 h-3.5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        );
    }
    // Tailwind CSS
    if (n.includes("tailwind")) {
        return (
            <svg className="w-3.5 h-3.5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M17 17H7l-5-5 5-5h10l5 5-5 5z" />
            </svg>
        );
    }
    // HTML5 & CSS3
    if (n.includes("html") || n.includes("css")) {
        return (
            <svg className="w-3.5 h-3.5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="w-3.5 h-3.5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
        );
    }
    // Kotlin
    if (n.includes("kotlin")) {
        return (
            <svg className="w-3.5 h-3.5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        );
    }
    // Android SDK
    if (n.includes("android")) {
        return (
            <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        );
    }
    // Node.js
    if (n.includes("node")) {
        return (
            <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        );
    }
    // Express
    if (n.includes("express")) {
        return (
            <svg className="w-3.5 h-3.5 text-zinc-650" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        );
    }
    // REST APIs
    if (n.includes("api") || n.includes("rest")) {
        return (
            <svg className="w-3.5 h-3.5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
        );
    }
    // PostgreSQL
    if (n.includes("postgres")) {
        return (
            <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
        );
    }
    // Firebase
    if (n.includes("firebase")) {
        return (
            <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
        );
    }
    // Git & GitHub
    if (n.includes("git")) {
        return (
            <svg className="w-3.5 h-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 9a9 9 0 0 1-9 9" />
            </svg>
        );
    }
    // Vite
    if (n.includes("vite")) {
        return (
            <svg className="w-3.5 h-3.5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M12 22V12" />
            </svg>
        );
    }
    // PNPM
    if (n.includes("pnpm")) {
        return (
            <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        );
    }

    // Default fallback icon
    return (
        <svg className="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}

function ServiceIcon({ title }: { title: string }) {
    const t = title.toLowerCase();
    
    // Cross-Platform Mobile Apps
    if (t.includes("mobile")) {
        return (
            <svg className="w-5 h-5 text-indigo-600 mr-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        );
    }
    // Full-Stack Web Development
    if (t.includes("web") || t.includes("full-stack")) {
        return (
            <svg className="w-5 h-5 text-indigo-600 mr-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        );
    }
    // API & Backend Integration
    if (t.includes("api") || t.includes("backend")) {
        return (
            <svg className="w-5 h-5 text-indigo-600 mr-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
        );
    }
    // Figma to clean code (Layout/Wireframe)
    return (
        <svg className="w-5 h-5 text-indigo-600 mr-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M21 12H3" />
            <path d="M12 3v18" />
        </svg>
    );
}

export default function SkillsServices() {
    return (
        <div 
            id="skills" 
            className="flex h-auto w-full rounded-3xl overflow-hidden justify-center items-center mb-5 border border-zinc-200 border-opacity-40"
        >
            <div className="flex h-auto w-full bg-slate-500 bg-opacity-10 p-6 md:p-10 flex-col bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]">
                
                {/* macOS Window Controls */}
                <div className="flex gap-1.5 mb-6 select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                </div>

                {/* Section Header */}
                <div className="flex flex-col mb-8">
                    <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold select-none">
                        // skills_services.sh - tech stack & services matrix
                    </span>
                    <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-slate-900 select-none">
                        &lt;SkillsAndServices /&gt;
                    </h2>
                    <p className="text-base font-normal text-slate-600">
                        A catalog of my core technology strengths, programming skills, and professional software development offerings.
                    </p>
                </div>

                {/* Grid Split Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full mt-4">
                    
                    {/* Left Column: Tech Stack & Skills */}
                    <div className="flex flex-col space-y-6">
                        <div className="border-b border-zinc-200 border-opacity-60 pb-2 mb-2">
                            <h3 className="text-lg md:text-xl font-extrabold text-slate-900 select-none">
                                Tech Stack Matrix
                            </h3>
                        </div>

                        {skillsData.skills.map((category) => (
                            <div key={category.category} className="flex flex-col space-y-2.5">
                                <span className="font-mono text-[11px] sm:text-xs text-indigo-700 font-bold tracking-wider select-none">
                                    // {category.category}
                                </span>
                                <div className="flex flex-wrap gap-2.5">
                                    {category.items.map((skill) => (
                                        <div 
                                            key={skill}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-white bg-opacity-40 text-slate-800 text-[11px] sm:text-xs font-mono font-bold rounded-xl border border-zinc-200 border-opacity-60 shadow-sm hover:scale-105 hover:bg-opacity-70 transition-all duration-200 select-none cursor-default"
                                        >
                                            <TechIcon name={skill} />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Professional Services */}
                    <div className="flex flex-col space-y-6">
                        <div className="border-b border-zinc-200 border-opacity-60 pb-2 mb-2">
                            <h3 className="text-lg md:text-xl font-extrabold text-slate-900 select-none">
                                Services Offered
                            </h3>
                        </div>

                        <div className="flex flex-col space-y-4">
                            {skillsData.services.map((service) => (
                                <div 
                                    key={service.title}
                                    className="bg-white bg-opacity-35 hover:bg-opacity-55 border border-zinc-200 border-opacity-50 p-5 rounded-2xl shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300 flex flex-col relative overflow-hidden"
                                >
                                    {/* Service Title Bar */}
                                    <div className="flex items-center">
                                        <ServiceIcon title={service.title} />
                                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                                            {service.title}
                                        </h4>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm font-medium text-slate-650 mt-2 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Technologies Associated */}
                                    <div className="flex flex-wrap gap-2 mt-3 select-none">
                                        {service.tech.map((t) => (
                                            <span 
                                                key={t}
                                                className="text-[9px] sm:text-[10px] bg-indigo-50 bg-opacity-60 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded font-mono font-bold"
                                            >
                                                {t}
                                            </span>
                                        ))}
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
