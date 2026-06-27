import ProjectCard from '../components/ProjectCard'
import projectData from '../data/projects.json'

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center mb-5"
    >
      <div className="flex h-auto w-full bg-slate-500 bg-opacity-10 p-6 md:p-10 flex-col">
        <div className="flex flex-col mb-8">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-base font-normal text-slate-600">
            A curated showcase of applications and systems I have developed, focusing on functional design and technical depth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 justify-items-center gap-6 w-full">
          {projectData.map((_, index) => (
            <ProjectCard key={index} id={projectData.length - index} />
          ))}
        </div>
      </div>
    </div>
  )
}
