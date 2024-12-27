import projectsData from '../data/projects.json'
import { GoArrowUpRight } from 'react-icons/go';
interface ProjectCardProps {
    id: number;
}
export default function ProjectCard(id: ProjectCardProps) {
    const project = projectsData.find((p) => p.id === id.id)
    return (
        <div className={`w-full bg-slate-200 h-auto rounded-3xl md:h-[500px] animate-slide-up overflow-hidden relative group`}>
            <img src={project?.image} alt="" loading='lazy' className={`w-full h-full object-cover z-[-1] absolute group-hover:scale-105 duration-300`} />
            <div className="flex text-xl font-normal justify-between items-center p-10">
                <div className="flex flex-col w-full h-full" style={{ color: project?.textColor || "black" }}>
                    {project?.title}
                    <div className="flex text-base font-thin">
                        {project?.description}
                    </div>
                </div>
                    <a href={project?.homepage} target='_blank' className="flex bg-white w-12 h-12 rounded-full flex-none justify-center items-center group-hover:animate-bounce cursor-pointer">
                    <GoArrowUpRight size={24} />
                    </a>
            </div>
        </div>
    )
}
