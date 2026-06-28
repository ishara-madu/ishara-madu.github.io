import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import projectsData from '../data/projects.json';
import { GoArrowUpRight } from 'react-icons/go';

interface ProjectCardProps {
    id: number;
}

interface ProjectType {
    id: number;
    title: string;
    description: string;
    image: string;
    homepage: string;
    textColor: string;
    tags: string[];
    github?: string;
    playstore?: string;
    website?: string;
}

export default function ProjectCard({ id }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const project = projectsData.find((p) => p.id === id) as ProjectType | undefined;
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    if (!project) return null;

    return (
        <>
            {/* Main Interactive Card */}
            <div 
                ref={ref} 
                onClick={() => setIsModalOpen(true)}
                className={`w-full min-h-[260px] sm:min-h-[300px] md:h-[360px] rounded-3xl overflow-hidden relative group shadow-lg hover:shadow-xl cursor-pointer transition-all duration-500 ${
                    inView ? 'animate-slide-up-card opacity-100' : 'opacity-0'
                }`}
            >
                {/* Background Image with Zoom */}
                <img
                    src={project.image} 
                    alt={`${project.title} project`} 
                    title={`${project.title} Project`} 
                    loading='lazy' 
                    className="w-full h-full object-cover z-0 absolute group-hover:scale-105 duration-700 ease-out transition-transform" 
                />

                {/* Darker Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-zinc-900/10 z-10 opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content Container (Bottom-Aligned) */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-20 text-white select-none">
                    
                    {/* Tech Stack Tags */}
                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2.5 transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 duration-300 transition-all">
                            {project.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="text-[9px] sm:text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-15 text-white uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex items-end justify-between gap-4">
                        <div className="flex flex-col max-w-[75%]">
                            {/* Title */}
                            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-1.5 group-hover:translate-x-1 duration-300 transition-transform">
                                {project.title}
                            </h2>
                            
                            {/* Description (visible, line-clamp, smooth text styling) */}
                            <p className="text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed line-clamp-3 sm:line-clamp-4 group-hover:text-white transition-colors duration-300">
                                {project.description}
                            </p>
                        </div>

                        {/* View Links (Displays specific buttons side-by-side or falls back to homepage arrow) */}
                        <div 
                            className="flex gap-2 flex-shrink-0 items-center mb-1"
                            onClick={(e) => e.stopPropagation()} // Prevents launching details inspector modal when clicking action links
                        >
                            {/* Play Store Link */}
                            {project.playstore && (
                                <a 
                                    href={project.playstore} 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    className="group/btn flex bg-white w-10 h-10 rounded-full justify-center items-center hover:bg-emerald-50 transition-all duration-300 shadow-md cursor-pointer"
                                    title="Download on Play Store"
                                >
                                    <svg className="w-4 h-4 text-zinc-950 group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186c-.19.19-.345.105-.345-.164V1.978c0-.269.155-.353.345-.164zM14.5 12.707l2.875 2.875-12.062 7.036c-.229.133-.42.023-.426-.244L14.5 12.707zm3.583-1.114l3.186 1.859c.229.133.229.351 0 .484l-3.186 1.859-2.583-2.583 2.583-2.583zm-3.583-.786L4.887 1.528c.007-.267.197-.377.426-.244l12.062 7.036-2.875 2.875z"/>
                                    </svg>
                                </a>
                            )}

                            {/* GitHub Link */}
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    className="group/btn flex bg-white w-10 h-10 rounded-full justify-center items-center hover:bg-slate-100 transition-all duration-300 shadow-md cursor-pointer"
                                    title="View Source Code on GitHub"
                                >
                                    <svg className="w-5 h-5 text-zinc-950 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z"/>
                                    </svg>
                                </a>
                            )}

                            {/* Live Website Link */}
                            {project.website && (
                                <a 
                                    href={project.website} 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    className="group/btn flex bg-white w-10 h-10 rounded-full justify-center items-center hover:bg-sky-50 transition-all duration-300 shadow-md cursor-pointer"
                                    title="Visit Live Website"
                                >
                                    <svg className="w-4 h-4 text-zinc-950 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </a>
                            )}

                            {/* Fallback homepage link (Only shown if none of the specific links are defined) */}
                            {!project.playstore && !project.github && !project.website && project.homepage && (
                                <a 
                                    href={project.homepage} 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    className="group/btn flex bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 justify-center items-center hover:bg-slate-100 hover:rotate-45 transition-all duration-300 shadow-md cursor-pointer"
                                    title="View Project"
                                >
                                    <GoArrowUpRight className="w-5 h-5 text-zinc-950 font-bold" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Glassmorphic Project Inspector Modal */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-[10000] flex justify-center items-center p-4 sm:p-6"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* macOS Style Window Inspector */}
                    <div 
                        className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh] md:max-h-[550px] animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Left Column: Image Block */}
                        <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden flex-shrink-0 border-b md:border-b-0 md:border-r border-zinc-800">
                            <img
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/60 to-transparent" />
                        </div>

                        {/* Right Column: Code Inspector Details */}
                        <div className="w-full md:w-3/5 p-6 flex flex-col justify-between overflow-y-auto">
                            <div>
                                {/* macOS Top Bar Control Panel */}
                                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80 select-none">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsModalOpen(false)} />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="font-mono text-[10px] text-zinc-500">
                                        inspect_project_details.json
                                    </span>
                                </div>

                                {/* Directory Path */}
                                <div className="text-[10px] font-mono text-zinc-500 mb-1 select-none">
                                    projects / <span className="text-zinc-400 font-semibold">{project.title.toLowerCase().replace(/\s+/g, "_")}</span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight mb-3">
                                    {project.title}
                                </h2>

                                {/* Full Description (Scrollable if extremely long) */}
                                <div className="max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
                                    <p className="text-sm font-normal text-zinc-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div>
                                {/* Technology tags list */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-5 mb-5 pt-3 border-t border-zinc-800/60">
                                        {project.tags.map((tag, index) => (
                                            <span 
                                                key={index} 
                                                className="text-[9px] sm:text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                                            >
                                                #{tag.toLowerCase().replace(/\s+/g, "_")}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Footer Action buttons row */}
                                <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60">
                                    {/* Links buttons */}
                                    <div className="flex gap-2.5 items-center">
                                        {project.playstore && (
                                            <a 
                                                href={project.playstore} 
                                                target='_blank' 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-[11px] font-bold rounded-lg transition-colors duration-200"
                                            >
                                                Play Store
                                            </a>
                                        )}
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target='_blank' 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-[11px] font-bold rounded-lg border border-zinc-700 transition-colors duration-200"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {project.website && (
                                            <a 
                                                href={project.website} 
                                                target='_blank' 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-650 hover:bg-indigo-600 text-white font-mono text-[11px] font-bold rounded-lg transition-colors duration-200"
                                            >
                                                Website
                                            </a>
                                        )}
                                    </div>

                                    {/* Terminate close command */}
                                    <button 
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-3.5 py-1.5 bg-zinc-950/60 hover:bg-zinc-950 text-zinc-400 hover:text-white font-mono text-[11px] font-bold rounded-lg border border-zinc-800 transition-colors duration-200"
                                    >
                                        exit()
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
