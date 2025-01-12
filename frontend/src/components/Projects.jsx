import { Subtitle, LinkHeader, SubHeader, Paragraph, Pill } from './Content'

const Project = ({ project }) => {
  let image = (
    <>
    </>
  )
  if (project.image) {
    image = (
      <div className='content-center grow basis-1/2'>
        <img className='drop-shadow-3xl' src={project.image} />
      </div>
    )
  }
  
  return (
    <div className='flex gap-2 flex-wrap lg:flex-nowrap'>
      <div className='grow basis-1/2 flex-initial flex flex-wrap flex-col'>
        <LinkHeader title={project.name} link={project.link} />
        <SubHeader title={project.shortDescription} />
        {project.description.map(paragraph => 
          <Paragraph key={paragraph} text={paragraph} />
        )}
        <div className='flex flex-wrap gap-4 py-4'>
          {project.toolsUsed.map(tool => 
            <Pill key={tool} text={tool} />
          )}
        </div>
      </div>
      {image}
    </div>
  )
}

const Projects = ({ projects }) => {
  return (
    <div>
      <Subtitle title="Projects" />
      {projects.map(project =>
        <Project key={project.id} project={project} />
      )}
    </div>
  )
}

export { Projects };