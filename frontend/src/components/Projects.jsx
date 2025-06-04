import { SectionTitle, Card } from './Utilities'
import placeholder_image from '../assets/placeholder_image.png'

const Projects = ({ projects }) => {
  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <SectionTitle title="Projects" />
        </div>
        <div className="flex gap-32 overflow-x-auto snap-x snap-mandatory px-2 py-4 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
          {projects.map((project, i) => (
            <div key={i} className="flex-none snap-center w-72">
              <Card
                image={project.image === "" ? placeholder_image: project.image }
                title={project.title}
                text={project.text}
                link={project.link}
                linkTitle={project.linkTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Projects }