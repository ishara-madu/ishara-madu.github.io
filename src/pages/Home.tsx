import ImageCard from "../components/ImageCard";
import homeData from '../data/home.json';
import placeholder from '../assets/images/gradient.png';

export default function Home() {
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
                <div className="flex items-center justify-between border-b border-zinc-200 border-opacity-35 bg-white bg-opacity-30 backdrop-blur-md px-4 py-2 relative z-10 w-full select-none">
                    {/* macOS close/minimize/zoom control dots */}
                    <div className="flex gap-1.5 items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                    </div>
                    
                    {/* Code Tabs */}
                    <div className="flex gap-1 overflow-x-auto pt-1 pr-2">
                        {/* index.tsx (Active Tab) */}
                        <div className="bg-white bg-opacity-70 text-zinc-900 px-3 py-1.5 rounded-t-lg border-t border-x border-zinc-250 flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold shadow-sm">
                            <span className="text-sky-500 font-semibold">⚛</span> index.tsx
                            <span className="text-zinc-400 hover:text-zinc-650 cursor-pointer ml-1 text-[8px]">✕</span>
                        </div>
                        {/* journey.json (Inactive Tab) */}
                        <div className="text-zinc-500 hover:text-zinc-800 px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold hover:bg-white hover:bg-opacity-20 transition-all">
                            <span className="text-yellow-500">{"{}"}</span> journey.json
                        </div>
                        {/* projects.ts (Inactive Tab) */}
                        <div className="text-zinc-500 hover:text-zinc-800 px-3 py-1.5 rounded-t-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold hover:bg-white hover:bg-opacity-20 transition-all">
                            <span className="text-sky-600">ts</span> projects.ts
                        </div>
                    </div>
                </div>

                {/* Main Code Editor Workspace Area */}
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

                    {/* Right Workspace: Core Greeting & Content */}
                    <div className="flex-1 pl-4 md:pl-6 pt-6 pb-6 pr-4 sm:pr-6 flex flex-col h-full relative z-10">
                        
                        {/* Import statements always at the top of the file */}
                        <div className="font-mono text-[10px] sm:text-xs text-zinc-500 mb-3 tracking-tight leading-normal select-none">
                            <span className="text-purple-600 font-semibold">import</span> {"{"} <span className="text-indigo-600 font-semibold">Developer</span> {"}"} <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600 font-semibold">"ishara-madu"</span>;
                        </div>

                        {/* Section header comment at the top */}
                        <span className="font-mono text-[10px] sm:text-xs text-slate-400 mb-4 block tracking-wider font-semibold select-none">
                            // index.tsx - main entrance greeting
                        </span>

                        {/* Center container only for Title and Description */}
                        <div className="flex-1 flex flex-col justify-center my-auto">
                            {/* Heading title with cursor animation */}
                            <h1 className="text-xl sm:text-3xl md:text-[38px] font-extrabold text-slate-900 leading-tight">
                                {homeData.title}
                                <span className="inline-block w-1.5 h-5 md:h-7 bg-indigo-500 ml-1.5 animate-pulse select-none" />
                            </h1>

                            {/* Description framed inside a multi-line comment block */}
                            <div className="relative pl-4 border-l border-indigo-400 border-opacity-40 my-6">
                                <span className="absolute left-0 top-0 font-mono text-[10px] sm:text-xs text-indigo-400 select-none opacity-60">/*</span>
                                <p className="text-xs sm:text-sm font-mono font-medium text-slate-600 leading-relaxed py-0.5">
                                    {homeData.description}
                                </p>
                                <span className="font-mono text-[10px] sm:text-xs text-indigo-400 select-none block opacity-60">*/</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Right Profile / Terminal Card */}
            <ImageCard />
        </div>
    );
}
