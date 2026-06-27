import { useState } from "react";
import ImageCard from "../components/ImageCard";
import homeData from '../data/home.json';
import placeholder from '../assets/images/gradient.png';

export default function Home() {
    const [activeTab, setActiveTab] = useState<string>("index.tsx");
    const [openTabs, setOpenTabs] = useState<string[]>(["index.tsx", "journey.json", "projects.ts"]);
    const [isClosed, setIsClosed] = useState<boolean>(false);

    const closeTab = (e: React.MouseEvent, tab: string) => {
        e.stopPropagation();
        const updatedTabs = openTabs.filter(t => t !== tab);
        setOpenTabs(updatedTabs);
        
        if (activeTab === tab) {
            if (updatedTabs.length > 0) {
                setActiveTab(updatedTabs[updatedTabs.length - 1]);
            } else {
                setActiveTab("");
            }
        }
    };

    const reopenTab = (tab: string) => {
        if (!openTabs.includes(tab)) {
            setOpenTabs([...openTabs, tab]);
        }
        setActiveTab(tab);
    };

    const renderJourneyJSON = () => {
        return (
            <div className="font-mono text-[10px] sm:text-xs text-zinc-300 leading-[26px] md:leading-[28px] select-text">
                <div><span className="text-zinc-500">[</span></div>
                <div>  <span className="text-zinc-500">{"{"}</span></div>
                <div>    <span className="text-purple-400">"year"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"2020 - 2022"</span><span className="text-zinc-400">,</span></div>
                <div>    <span className="text-purple-400">"title"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"Diploma in Software Engineering"</span><span className="text-zinc-400">,</span></div>
                <div>    <span className="text-purple-400">"type"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"education"</span></div>
                <div>  <span className="text-zinc-500">{"}"}</span><span className="text-zinc-400">,</span></div>
                <div>  <span className="text-zinc-500">{"{"}</span></div>
                <div>    <span className="text-purple-400">"year"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"2022 - Present"</span><span className="text-zinc-400">,</span></div>
                <div>    <span className="text-purple-400">"title"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"BSc in Software Engineering"</span><span className="text-zinc-400">,</span></div>
                <div>    <span className="text-purple-400">"type"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"education"</span></div>
                <div>  <span className="text-zinc-500">{"}"}</span><span className="text-zinc-400">,</span></div>
                <div>  <span className="text-zinc-500">{"{"}</span></div>
                <div>    <span className="text-purple-400">"year"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"2024 - Present"</span><span className="text-zinc-400">,</span></div>
                <div>    <span className="text-purple-400">"title"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"Junior Full-Stack Developer"</span><span className="text-zinc-400">,</span></div>
                <div>    <span className="text-purple-400">"type"</span><span className="text-zinc-400">:</span> <span className="text-emerald-400">"work"</span></div>
                <div>  <span className="text-zinc-500">{"}"}</span></div>
                <div><span className="text-zinc-500">]</span></div>
            </div>
        );
    };

    const renderProjectsTS = () => {
        return (
            <div className="font-mono text-[10px] sm:text-xs text-zinc-300 leading-[26px] md:leading-[28px] select-text">
                <div><span className="text-purple-500 font-semibold">import</span> {"{"} <span className="text-indigo-400">Project</span> {"}"} <span className="text-purple-500 font-semibold">from</span> <span className="text-emerald-450">"./types"</span>;</div>
                <div>&nbsp;</div>
                <div><span className="text-purple-500 font-semibold">export const</span> <span className="text-blue-400 font-bold">projects</span><span className="text-zinc-400">:</span> Project<span className="text-zinc-400">[] = [</span></div>
                <div>  <span className="text-zinc-500">{"{"}</span></div>
                <div>    id<span className="text-zinc-450">:</span> <span className="text-amber-500">1</span><span className="text-zinc-400">,</span></div>
                <div>    title<span className="text-zinc-450">:</span> <span className="text-emerald-455">"Pirith App"</span><span className="text-zinc-400">,</span></div>
                <div>    tech<span className="text-zinc-455">:</span> <span className="text-zinc-400">[</span><span className="text-emerald-455">"React Native"</span><span className="text-zinc-400">,</span> <span className="text-emerald-455">"Expo"</span><span className="text-zinc-400">]</span></div>
                <div>  <span className="text-zinc-500">{"}"}</span><span className="text-zinc-450">,</span></div>
                <div>  <span className="text-zinc-500">{"{"}</span></div>
                <div>    id<span className="text-zinc-450">:</span> <span className="text-amber-500">2</span><span className="text-zinc-400">,</span></div>
                <div>    title<span className="text-zinc-455">:</span> <span className="text-emerald-455">"4G LTE Only App"</span><span className="text-zinc-400">,</span></div>
                <div>    tech<span className="text-zinc-455">:</span> <span className="text-zinc-400">[</span><span className="text-emerald-455">"Kotlin"</span><span className="text-zinc-400">]</span></div>
                <div>  <span className="text-zinc-500">{"}"}</span></div>
                <div><span className="text-zinc-500">];</span></div>
            </div>
        );
    };

    const renderActiveTabContent = () => {
        if (activeTab === "index.tsx") {
            return (
                <div className="flex-1 flex flex-col justify-center my-auto">
                    <h1 className="text-xl sm:text-3xl md:text-[38px] font-extrabold text-slate-900 leading-tight">
                        {homeData.title}
                        <span className="inline-block w-1.5 h-5 md:h-7 bg-indigo-500 ml-1.5 animate-pulse select-none" />
                    </h1>

                    <div className="relative pl-4 border-l border-indigo-400 border-opacity-40 my-6">
                        <span className="absolute left-0 top-0 font-mono text-[10px] sm:text-xs text-indigo-400 select-none opacity-60">/*</span>
                        <p className="text-xs sm:text-sm font-mono font-medium text-slate-600 leading-relaxed py-0.5 select-text">
                            {homeData.description}
                        </p>
                        <span className="font-mono text-[10px] sm:text-xs text-indigo-400 select-none block opacity-60">*/</span>
                    </div>
                </div>
            );
        } else if (activeTab === "journey.json") {
            return renderJourneyJSON();
        } else if (activeTab === "projects.ts") {
            return renderProjectsTS();
        } else {
            return (
                <div className="flex-1 flex flex-col justify-center items-center font-mono text-zinc-500 text-xs py-10 space-y-4 select-none">
                    <div>No files open. Click a tab file below to restore:</div>
                    <div className="flex gap-3">
                        <button onClick={() => reopenTab("index.tsx")} className="px-3 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 hover:text-white hover:bg-zinc-700 transition-all font-semibold">index.tsx</button>
                        <button onClick={() => reopenTab("journey.json")} className="px-3 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 hover:text-white hover:bg-zinc-700 transition-all font-semibold">journey.json</button>
                        <button onClick={() => reopenTab("projects.ts")} className="px-3 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 hover:text-white hover:bg-zinc-700 transition-all font-semibold">projects.ts</button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div id="home" className="flex h-auto md:h-[520px] flex-col-reverse md:flex-row w-full gap-y-5 md:gap-y-0 md:gap-x-5 justify-center md:justify-between pb-2 mb-3">
            
            {/* Left Hero Card Container (Redesigned as IDE Code Editor) */}
            <div className="flex h-auto md:h-full w-full md:w-8/12 rounded-3xl animate-slide-up overflow-hidden flex-col border border-zinc-200 border-opacity-40 shadow-lg relative bg-slate-900 bg-opacity-[0.02]">
                
                {/* Background moving abstract image */}
                <div className="w-[800px] md:w-full h-full object-cover absolute z-[-1] overflow-hidden">
                    <img 
                        src={homeData.customGradientImage || placeholder} 
                        className="w-full h-full object-cover animate-halfRotate" 
                        style={{ transformOrigin: "center center", scale: "1.5" }} 
                    />
                </div>
                
                {/* IDE Code Editor Tab Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-200 border-opacity-35 bg-white bg-opacity-35 backdrop-blur-md px-4 py-2 relative z-10 w-full select-none">
                    {/* macOS close/minimize/zoom control dots */}
                    <div className="flex gap-1.5 items-center">
                        <button 
                            onClick={() => setIsClosed(true)}
                            className="w-2.5 h-2.5 rounded-full bg-red-400 hover:bg-red-500 opacity-90 transition-colors shadow-sm cursor-pointer"
                            title="Close Window"
                        />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                    </div>
                    
                    {/* Code Tabs */}
                    <div className="flex gap-1 overflow-x-auto pt-1 pr-2">
                        {openTabs.map((tab) => (
                            <div 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1.5 rounded-t-lg border-t border-x border-zinc-250 flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold cursor-pointer transition-all duration-150 ${
                                    activeTab === tab 
                                        ? "bg-white bg-opacity-70 text-zinc-900 shadow-sm border-opacity-40" 
                                        : "text-zinc-500 hover:text-zinc-800 hover:bg-white hover:bg-opacity-20 border-transparent"
                                }`}
                            >
                                <span className={
                                    tab === "index.tsx" ? "text-sky-500" :
                                    tab === "journey.json" ? "text-yellow-500" : "text-sky-600"
                                }>
                                    {tab === "index.tsx" ? "⚛" : tab === "journey.json" ? "{}" : "ts"}
                                </span>
                                {tab}
                                <span 
                                    onClick={(e) => closeTab(e, tab)}
                                    className="text-zinc-400 hover:text-red-500 transition-colors cursor-pointer ml-1 text-[8px]"
                                    title="Close File"
                                >
                                    ✕
                                </span>
                            </div>
                        ))}
                        {openTabs.length < 3 && (
                            <div className="flex items-center pl-1">
                                <button 
                                    onClick={() => {
                                        const missing = ["index.tsx", "journey.json", "projects.ts"].find(t => !openTabs.includes(t));
                                        if (missing) reopenTab(missing);
                                    }}
                                    className="text-zinc-400 hover:text-zinc-800 text-[10px] font-bold font-mono px-2 py-1 rounded bg-white bg-opacity-20 hover:bg-opacity-40 transition-all"
                                    title="Open File"
                                >
                                    + Add
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Code Editor Workspace Area */}
                {!isClosed ? (
                    <div className="flex-1 flex w-full relative bg-slate-500 bg-opacity-5 overflow-hidden bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]">
                        
                        {/* Subtle code background watermark */}
                        <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none select-none z-0 p-8 font-mono text-[9px] text-zinc-950 leading-relaxed text-left">
                            <pre>
{`const developer = {
    name: "Ishara Madushanka",
    role: "Aspiring Developer",
    skills: ["React", "TypeScript", "Kotlin", "Supabase", "Redux"],
    focus: "Full-Stack & Cross-Platform Mobile",
    active: true,
    compile: () => "Innovative & High-Quality Solutions"
};

function renderSpace() {
    console.log("Welcome to my digital workspace!");
    return developer.skills;
}`}
                            </pre>
                        </div>

                        {/* Left Gutter: Code Editor Line Numbers */}
                        <div className="w-8 md:w-10 flex flex-col items-end pr-2 md:pr-3 border-r border-zinc-200 border-opacity-30 select-none font-mono text-[9px] md:text-[11px] text-zinc-400 leading-[26px] md:leading-[28px] pt-6 pb-6">
                            {Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(2, '0')).map(num => (
                                <span key={num}>{num}</span>
                            ))}
                        </div>

                        {/* Right Workspace: Content area */}
                        <div className="flex-1 pl-4 md:pl-6 pt-6 pb-6 pr-4 sm:pr-6 flex flex-col h-full relative z-10 overflow-y-auto">
                            {activeTab && (
                                <>
                                    {/* Import declarations at top (Aligned to Line 01) */}
                                    <div className="font-mono text-[10px] sm:text-xs text-zinc-500 tracking-tight leading-[26px] md:leading-[28px] select-none">
                                        <span className="text-purple-600 font-semibold">import</span> {"{"} <span className="text-indigo-600 font-semibold">File</span> {"}"} <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600 font-semibold">"./workspace/{activeTab}"</span>;
                                    </div>

                                    {/* Section header comment (Aligned to Line 02) */}
                                    <span className="font-mono text-[10px] sm:text-xs text-slate-400 block tracking-wider font-semibold leading-[26px] md:leading-[28px] select-none">
                                        // current_active_file: {activeTab}
                                    </span>

                                    {/* Virtual empty Line 03 spacer */}
                                    <div className="h-[26px] md:h-[28px] select-none" />
                                </>
                            )}

                            {renderActiveTabContent()}
                        </div>

                    </div>
                ) : (
                    /* Editor Mimimized/Closed Screen */
                    <div 
                        onClick={() => setIsClosed(false)}
                        className="flex-1 flex flex-col justify-center items-center bg-zinc-950 text-emerald-400 font-mono text-xs p-8 cursor-pointer select-none space-y-3 shadow-inner"
                    >
                        <div className="text-center font-bold animate-pulse text-sm">
                            [Process completed - Editor Terminated]
                        </div>
                        <div className="text-zinc-400 text-[10px] text-center max-w-[80%] leading-relaxed">
                            The portfolio code editor was closed via the close control. <br />
                            <span className="text-emerald-500 font-semibold underline">Click anywhere in this window</span> to restart the workspace process.
                        </div>
                    </div>
                )}
            </div>

            {/* Right Profile / Terminal Card */}
            <ImageCard />
        </div>
    );
}
