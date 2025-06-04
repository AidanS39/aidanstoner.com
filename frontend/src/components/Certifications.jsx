import { Image, SectionTitle, IconButton } from './Utilities'
import aws_ccp_icon from '../assets/aws_ccp_icon.png'

const Certifications = ({ certs }) => {
  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <SectionTitle title="Certifications" />
        </div>
        <div className="flex gap-32 overflow-x-auto snap-x snap-mandatory px-2 py-4 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
          {certs.map((cert, i) => (
            <div key={i} className="flex-none snap-center w-72">
                <IconButton 
                  icon={cert.icon} 
                  alt={cert.alt} 
                  link={cert.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Certifications }