import { SectionTitle, IconButton } from '../components/Utilities'
import linkedin_icon from '../assets/linkedin_icon.png'
import github_icon from '../assets/github_icon.png'

const Contact = () => {
  return (
    <section className="w-full px-12 py-16 bg-primary drop-shadow-2xl">
        <div className="max-w-7xl mx-auto space-y-12">
            <div>
                <SectionTitle title="Contact Me" />
            </div>
            <div className="flex items-center px-2 py-4 gap-32">
                <IconButton
                icon={linkedin_icon}
                alt="LinkedIn"
                link="https://www.linkedin.com/in/aidanstoner/"
                />
                <IconButton
                icon={github_icon}
                alt="GitHub"
                link="https://github.com/AidanS39"
                />
            </div>
        </div>
    </section>
  )
}

export { Contact }