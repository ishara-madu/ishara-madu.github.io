import ProjectCard from '../components/ProjectCard'
import projectData from '../data/projects.json'
export default function Projects() {


  return (
    <div className={`grid md:grid-cols-2 justify-items-center gap-5 mb-5`}>
      {
        projectData.map((project, index) => (
          <ProjectCard key={index} id={project.id}/>
        ))
      }
    </div>
  )
}
