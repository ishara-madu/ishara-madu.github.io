import { useState } from "react";
import ImageCard from "../components/ImageCard";
import homeData from '../data/home.json';
import placeholder from '../assets/images/gradient.png';

export default function Home() {
    const [activeTab, setActiveTab] = useState<string>("index.tsx");
    const [journeyContent, setJourneyContent] = useState<string>(
        JSON.stringify([
            {
                "year": "2020 - 2022",
                "title": "Diploma in Software Engineering",
                "type": "education"
            },
            {
                "year": "2022 - Present",
                "title": "BSc in Software Engineering",
                "type": "education"
            },
            {
                "year": "2024 - Present",
                "title": "Junior Full-Stack Developer",
                "type": "work"
            }
        ], null, 2)
    );

    const [projectsContent, setProjectsContent] = useState<string>(
        `import { Project } from "./types";\n\nexport const projects: Project[] = [\n  {\n    id: 1,\n    title: "Pirith App",\n    tech: ["React Native", "Expo"]\n  },\n  {\n    id: 2,\n    title: "4G LTE Only App",\n    tech: ["Kotlin"]\n  },\n  {\n    id: 3,\n    title: "HireMe Web",\n    tech: ["React", "Supabase"]\n  }\n];`
    );

    const getLineCount = () => {
        if (activeTab === "index.tsx") return 14;
        if (activeTab === "journey.json") return journeyContent.split("\n").length;
        if (activeTab === "projects.ts") return projectsContent.split("\n").length;
        return 14;
    };

    const lineCount = Math.max(14, getLineCount());

    const highlightJSON = (code: string) => {
        let html = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        
        // Strings (both keys and values - forest green: #22863a)
        const strings: string[] = [];
        html = html.replace(/("[^"\\]*(?:\\.[^"\\]*)*")/g, (match) => {
            strings.push(`<span style="color: #22863a;">${match}</span>`);
            return `___STRING_${strings.length - 1}___`;
        });
        
        // Numbers (orange/gold: #e36209)
        html = html.replace(/\b(\d+)\b/g, '<span style="color: #e36209; font-weight: 600;">$1</span>');
        
        // Booleans (blue/violet: #005cc5)
        html = html.replace(/\b(true|false)\b/g, '<span style="color: #005cc5; font-weight: 600;">$1</span>');
        
        // Restore strings
        strings.forEach((str, index) => {
            html = html.replace(`___STRING_${index}___`, str);
        });
        
        return { __html: html };
    };

    const highlightTS = (code: string) => {
        let html = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Comments (italicized grey: #969896)
        const comments: string[] = [];
        html = html.replace(/(\/\/.*)/g, (match) => {
            comments.push(`<span class="italic font-normal" style="color: #969896;">${match}</span>`);
            return `___COMMENT_${comments.length - 1}___`;
        });

        // Strings (forest green: #22863a)
        const strings: string[] = [];
        // Single quotes
        html = html.replace(/('[^'\\]*(?:\\.[^'\\]*)*')/g, (match) => {
            strings.push(`<span style="color: #22863a;">${match}</span>`);
            return `___STRING_${strings.length - 1}___`;
        });
        // Double quotes
        html = html.replace(/("[^"\\]*(?:\\.[^"\\]*)*")/g, (match) => {
            strings.push(`<span style="color: #22863a;">${match}</span>`);
            return `___STRING_${strings.length - 1}___`;
        });

        // Keywords (pinkish-purple: #a71d5d)
        const keywords = ["import", "from", "export", "const", "let", "var", "function", "return", "for", "in", "of", "if", "else"];
        keywords.forEach(kw => {
            const regex = new RegExp(`\\b${kw}\\b`, "g");
            html = html.replace(regex, `<span class="font-semibold" style="color: #a71d5d;">${kw}</span>`);
        });

        // Types & Identifiers (blue: #005cc5)
        const blues = ["Project", "projects", "id", "title", "tech", "Developer", "Ishara", "Madushanka"];
        blues.forEach(b => {
            const regex = new RegExp(`\\b${b}\\b`, "g");
            html = html.replace(regex, `<span class="font-semibold" style="color: #005cc5;">${b}</span>`);
        });

        // Numbers & Booleans (orange/gold: #e36209)
        html = html.replace(/\b(\d+)\b/g, '<span style="color: #e36209; font-weight: 600;">$1</span>');
        html = html.replace(/\b(true|false)\b/g, '<span style="color: #e36209; font-weight: 600;">$1</span>');

        // Restore strings
        strings.forEach((str, index) => {
            html = html.replace(`___STRING_${index}___`, str);
        });

        // Restore comments
        comments.forEach((comment, index) => {
            html = html.replace(`___COMMENT_${index}___`, comment);
        });

        return { __html: html };
    };

    const renderActiveTabContent = () => {
        return (
            <div className="flex flex-col min-h-full">
                {/* Import declarations at top (Aligned to Line 01) */}
                <div className="font-mono text-xs tracking-tight leading-[26px] select-none text-slate-700">
                    <span className="font-bold" style={{ color: "#a71d5d" }}>import</span> {"{"} <span className="font-semibold" style={{ color: "#005cc5" }}>Developer</span> {"}"} <span className="font-bold" style={{ color: "#a71d5d" }}>from</span> <span style={{ color: "#22863a" }}>"ishara-madu"</span>;
                </div>

                {/* Section header comment (Aligned to Line 02) */}
                <span className="font-mono text-xs block tracking-wider font-normal italic leading-[26px] select-none" style={{ color: "#969896" }}>
                    // index.tsx - main entrance greeting
                </span>

                {/* Virtual empty Line 03 spacer */}
                <div className="h-[26px] select-none" />

                {/* Content centered in remaining editor window */}
                <div className="flex-grow flex flex-col justify-center my-auto min-h-[220px]">
                    <h1 className="text-xl sm:text-3xl md:text-[38px] font-extrabold text-slate-900 leading-tight select-none">
                        {homeData.title}
                        <span className="inline-block w-1.5 h-5 md:h-7 bg-indigo-600 ml-1.5 animate-pulse select-none" />
                    </h1>

                    <div className="relative pl-4 border-l-2 border-indigo-400 my-6 select-none">
                        <span className="absolute left-0 top-0 font-mono text-xs select-none font-bold" style={{ color: "#005cc5" }}>/*</span>
                        <p className="text-xs sm:text-sm font-mono font-semibold text-slate-700 leading-relaxed py-0.5 select-text">
                            {homeData.description}
                        </p>
                        <span className="font-mono text-xs select-none block font-bold" style={{ color: "#005cc5" }}>*/</span>
                    </div>
                </div>
            </div>
        );
    };

    // Shared style object to guarantee 100% pixel-perfect text layering
    const sharedEditorStyle: React.CSSProperties = {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
        fontSize: '12px',
        lineHeight: '26px',
        padding: '0px',
        margin: '0px',
        border: 'none',
        outline: 'none',
        resize: 'none',
        background: 'transparent',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        width: '100%',
        boxShadow: 'none',
        tabSize: 4,
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
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                    </div>
                    
                    {/* Code Tabs */}
                    <div className="flex gap-1 select-none pt-1">
                        {["index.tsx", "journey.json", "projects.ts"].map((tab) => (
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
                                    tab === "journey.json" ? "text-yellow-600 font-bold" : "text-sky-600 font-bold"
                                }>
                                    {tab === "index.tsx" ? "⚛" : tab === "journey.json" ? "{}" : "ts"}
                                </span>
                                {tab}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Code Editor Workspace Area */}
                <div className="flex-1 flex w-full relative bg-slate-500 bg-opacity-[0.02] overflow-hidden bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px]">
                    
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

                    {/* Scrollable Container for synchronized Gutter + Editor Textarea */}
                    <div className="flex-1 flex h-full overflow-y-auto p-5 select-text custom-scrollbar z-10">
                        
                        {/* Left Gutter: Code Editor Line Numbers */}
                        <div className="w-8 md:w-10 flex flex-col items-end pr-2 md:pr-3 border-r border-zinc-200 border-opacity-30 select-none font-mono text-[10px] text-slate-400 leading-[26px]">
                            {Array.from({ length: lineCount }, (_, i) => String(i + 1).padStart(2, '0')).map(num => (
                                <span key={num}>{num}</span>
                            ))}
                        </div>

                        {/* Right Workspace: Content area */}
                        <div className="flex-1 pl-4 md:pl-6 flex flex-col min-h-full">
                            {activeTab === "index.tsx" ? (
                                renderActiveTabContent()
                            ) : (
                                <div className="relative w-full flex-grow min-h-[300px]">
                                    {/* Syntax Highlighted Pre block underneath */}
                                    <pre 
                                        style={sharedEditorStyle}
                                        className="text-slate-700 p-0 m-0 pointer-events-none select-none"
                                        dangerouslySetInnerHTML={activeTab === "journey.json" ? highlightJSON(journeyContent) : highlightTS(projectsContent)}
                                    />
                                    {/* Invisible textarea input layer on top */}
                                    <textarea
                                        value={activeTab === "journey.json" ? journeyContent : projectsContent}
                                        onChange={(e) => {
                                            if (activeTab === "journey.json") setJourneyContent(e.target.value);
                                            else setProjectsContent(e.target.value);
                                        }}
                                        rows={lineCount}
                                        style={{
                                            ...sharedEditorStyle,
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            color: 'transparent',
                                            caretColor: '#24292e',
                                            overflow: 'hidden',
                                        }}
                                        spellCheck="false"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Profile / Terminal Card */}
            <ImageCard />
        </div>
    );
}
