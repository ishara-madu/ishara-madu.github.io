import ImageCard from "../components/ImageCard";
import homeData from '../data/home.json';
import placeholder from '../assets/images/gradient.png';
import ContactLinks from "../components/ContactLinks";

export default function Home() {
    return (
        <div id="home" className="flex h-auto md:h-[520px] flex-col-reverse md:flex-row w-full gap-y-5 md:gap-y-0 md:gap-x-5 justify-center md:justify-between pb-2">
            
            {/* Left Hero Card Container */}
            <div className="flex h-auto md:h-full w-full md:w-8/12 rounded-3xl animate-slide-up overflow-hidden justify-center items-center relative border border-zinc-200 border-opacity-40">
                <div className="w-[800px] md:w-full h-full object-cover absolute z-[-1]">
                    <img 
                        src={homeData.customGradientImage || placeholder} 
                        className="w-full h-full object-cover animate-halfRotate" 
                        style={{ transformOrigin: "center center", scale: "1.5" }} 
                    />
                </div>
                
                <div className="flex h-auto md:h-full w-full bg-slate-500 bg-opacity-10 p-8 md:p-10 flex-col justify-between relative">
                    
                    {/* Subtle Monospace Code Snippet Watermark */}
                    <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none select-none z-0 p-10 font-mono text-[9px] sm:text-[10px] text-zinc-950 leading-relaxed text-left">
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

                    {/* Window Control Buttons */}
                    <div className="flex gap-1.5 mb-6 z-10 select-none">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                    </div>
                    
                    {/* Header Code Tag */}
                    <div className="flex flex-col z-10">
                        <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold">
                            // index.tsx - portfolio header
                        </span>
                        <h1 className="text-2xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            {homeData.title}
                        </h1>
                        <p className="text-sm md:text-base font-normal text-slate-600 my-8 md:my-10 leading-relaxed">
                            {homeData.description}
                        </p>
                    </div>

                    <div className="z-10">
                        <ContactLinks />
                    </div>
                </div>
            </div>

            {/* Right Profile / Terminal Card */}
            <ImageCard />
        </div>
    );
}
