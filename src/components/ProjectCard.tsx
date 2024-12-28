import { useInView } from 'react-intersection-observer';
import projectsData from '../data/projects.json'
import homeData from '../data/home.json'
import { GoArrowUpRight } from 'react-icons/go';
interface ProjectCardProps {
    id: number;
}
export default function ProjectCard(id: ProjectCardProps) {
    const project = projectsData.find((p) => p.id === id.id)
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    return (
        <div ref={ref} className={`w-full min-h-72 sm:min-h-96 rounded-3xl md:h-[500px] overflow-hidden relative group`}>
            <div className={`w-full min-h-72 sm:min-h-96 rounded-3xl md:h-[500px] ${inView ? 'animate-slide-up-card opacity-100' : 'opacity-0'} overflow-hidden relative group`}>
                <img
                    src={project?.image} alt={`${project?.title} project by ${homeData?.name[2]}`} title={`${project?.title} Project`} loading='lazy' className={`w-full h-full object-cover z-[-1] absolute group-hover:scale-105 duration-300 opacity-duration-300`} />
                <div
                    className="flex justify-between p-5 sm:px-8">
                    <div className="flex flex-col text-base sm:text-xl w-full h-full" style={{ color: project?.textColor || "black" }}>
                        {project?.title}
                        <div className="hidden md:flex text-xs sm:text-base font-thin">
                            {project?.description}
                        </div>
                    </div>
                    <a href={project?.homepage} target='_blank' className="flex bg-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex-none justify-center items-center group-hover:animate-bounce cursor-pointer">
                        <GoArrowUpRight className={`w-4 h-4 sm:w-5 sm:h-5`} />
                    </a>
                </div>
            </div>
        </div>
    )
}
