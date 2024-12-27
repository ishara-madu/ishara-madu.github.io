import ProjectCard from '../components/ProjectCard'
import projectData from '../data/projects.json'
export default function Projects() {


  return (
    <div id='projects' className={`grid md:grid-cols-2 justify-items-center gap-5 mb-5 pt-3`}>
      {
        projectData.map((_, index) => (
          <ProjectCard key={index} id={projectData.length - index}/>
        ))
      }
    </div>
  )
}
