import projectsData from '../data/projects.json'
import { GoArrowUpRight } from 'react-icons/go';
interface ProjectCardProps {
    id: number;
}
export default function ProjectCard(id: ProjectCardProps) {
    const project = projectsData.find((p) => p.id === id.id)
    return (
        <div className={`w-full bg-slate-200 min-h-72 sm:min-h-96 rounded-3xl md:h-[500px] animate-slide-up overflow-hidden relative group`}>
            <img src={project?.image} alt={project?.title} decoding='async' loading='lazy' className={`w-full h-full object-cover z-[-1] absolute group-hover:scale-105 duration-300`} />
            <div className="flex justify-between items-center p-5 sm:p-10">
                <div className="flex flex-col text-base sm:text-xl w-full h-full" style={{ color: project?.textColor || "black" }}>
                    {project?.title}
                    <div className="flex text-xs sm:text-base font-thin">
                        {project?.description}
                    </div>
                </div>
                    <a href={project?.homepage} target='_blank' className="flex bg-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex-none justify-center items-center group-hover:animate-bounce cursor-pointer">
                    <GoArrowUpRight className={`w-4 h-4 sm:w-5 sm:h-5`} />
                    </a>
            </div>
        </div>
    )
}
