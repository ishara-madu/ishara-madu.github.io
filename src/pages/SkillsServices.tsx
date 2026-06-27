import skillsData from "../data/skills.json";

export default function SkillsServices() {
    return (
        <div 
            id="skills" 
            className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center mb-5 border border-zinc-200 border-opacity-40"
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
                                            className="px-3 py-1.5 bg-white bg-opacity-40 text-slate-800 text-[11px] sm:text-xs font-mono font-bold rounded-xl border border-zinc-200 border-opacity-60 shadow-sm hover:scale-105 hover:bg-opacity-70 transition-all duration-200 select-none cursor-default"
                                        >
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
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-lg sm:text-xl select-none">{service.icon}</span>
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
