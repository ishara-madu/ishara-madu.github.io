import { useInView } from 'react-intersection-observer';
import projectsData from '../data/projects.json';
import { GoArrowUpRight } from 'react-icons/go';

interface ProjectCardProps {
    id: number;
}

export default function ProjectCard({ id }: ProjectCardProps) {
    const project = projectsData.find((p) => p.id === id);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    if (!project) return null;

    return (
        <div 
            ref={ref} 
            className={`w-full min-h-[260px] sm:min-h-[300px] md:h-[360px] rounded-3xl overflow-hidden relative group shadow-lg hover:shadow-xl transition-all duration-500 ${
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
                                className="text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-md bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-10 text-white font-medium uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col max-w-[80%]">
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-1.5 group-hover:translate-x-1 duration-300 transition-transform">
                            {project.title}
                        </h2>
                        
                        {/* Description (visible, line-clamp, smooth text styling) */}
                        <p className="text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed line-clamp-3 sm:line-clamp-4 group-hover:text-white transition-colors duration-300">
                            {project.description}
                        </p>
                    </div>

                    {/* View Button with Rotate effect */}
                    <a 
                        href={project.homepage} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="flex bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 justify-center items-center hover:bg-slate-100 hover:rotate-45 duration-300 transition-all shadow-md cursor-pointer mb-1"
                        title="View Project"
                    >
                        <GoArrowUpRight className="w-5 h-5 text-zinc-950 font-bold" />
                    </a>
                </div>
            </div>
        </div>
    );
}
