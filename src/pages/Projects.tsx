import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects.json';
import { LuFolder, LuGitBranch, LuBox, LuActivity } from 'react-icons/lu';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex h-auto w-full rounded-3xl animate-slide-up overflow-hidden justify-center items-center mb-5 border border-slate-200 border-opacity-80 shadow-md bg-slate-50/70"
    >
      <div className="flex h-auto w-full p-6 md:p-10 flex-col bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_16px]">
        
        {/* macOS Window Controls & Navigation Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200/80 select-none">
          <div className="flex items-center gap-4">
            {/* macOS Window Controls */}
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/90 shadow-sm" />
            </div>
            
            {/* Folder breadcrumb path */}
            <div className="flex items-center gap-1 font-mono text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/40">
              <LuFolder className="w-3.5 h-3.5 text-slate-400" />
              <span>root</span>
              <span>/</span>
              <span>src</span>
              <span>/</span>
              <span className="text-slate-700 font-semibold">projects</span>
            </div>
          </div>

          {/* Repository Branch Specs */}
          <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <LuGitBranch className="w-3.5 h-3.5 text-indigo-500" />
              branch: main
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              active deploys
            </span>
          </div>
        </div>

        {/* Header Block with Quick Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="flex flex-col max-w-2xl">
            <span className="font-mono text-xs text-slate-500 mb-2 block tracking-wider font-semibold">
              // projects.tsx - selected repositories & works
            </span>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-3 text-slate-900 select-none">
              &lt;MyProjects /&gt;
            </h2>
            <p className="text-base font-normal text-slate-650 leading-relaxed">
              A curated showcase of applications and systems I have developed, focusing on functional design and technical depth.
            </p>
          </div>

          {/* Quick Stats Panel */}
          <div className="grid grid-cols-2 gap-4 bg-white/60 border border-slate-200/70 rounded-2xl p-4 shadow-sm min-w-[220px] select-none font-mono">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Repos</span>
              <span className="text-lg font-bold text-slate-800 flex items-center gap-1.5">
                <LuBox className="w-4.5 h-4.5 text-indigo-500" />
                {projectData.length}
              </span>
            </div>
            <div className="flex flex-col border-l border-slate-200/50 pl-4">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Status</span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 h-7">
                <LuActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
                STABLE
              </span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 justify-items-center gap-6 w-full">
          {projectData.map((_, index) => (
            <ProjectCard key={index} id={projectData.length - index} />
          ))}
        </div>
      </div>
    </div>
  );
}
