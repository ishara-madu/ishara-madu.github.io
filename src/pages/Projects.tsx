import ProjectCard from '../components/ProjectCard'
import projectData from '../data/projects.json'

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center mb-5 border border-zinc-200 border-opacity-40"
    >
      <div className="flex h-auto w-full bg-slate-500 bg-opacity-10 p-6 md:p-10 flex-col">
        
        {/* macOS Window Controls */}
        <div className="flex gap-1.5 mb-6 select-none">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
        </div>

        <div className="flex flex-col mb-8">
          <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold">
            // projects.tsx - selected repositories & works
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-slate-900">
            &lt;MyProjects /&gt;
          </h2>
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
