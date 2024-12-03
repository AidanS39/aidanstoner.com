import { useState, useEffect } from 'react'
import introductionService from './services/introduction'
import experiencesServices from './services/experiences'
import certificationsServices from './services/certifications'
import educationServices from './services/education'
import projectsServices from './services/projects'

const Subtitle = ({ title }) => {
  return (
    <h1 className={`antialiased font-space pt-4 pb-1 text-white tracking-wide text-3xl drop-shadow-green-md`}>{title}</h1>
  )
}

const Header = ({ title }) => {
  return (
    <h2 className={`antialiased font-space py-2 text-white text-xl tracking-tighter underline`}>{title}</h2>
  )
}

const SubHeader = ({ title }) => {
  return (
    <h2 className={`antialiased font-space text-white tracking-tighter text-lg`}>{title}</h2>
  )
}

const Paragraph = ({ text, width }) => {
  return (
    <p className={`${width} font-space text-white text-left text-sm tracking-tight py-1`}>{text}</p>
  )
}

const HeaderParagraph = ({ title, text }) => {
  
  return (
    <div className='flex flex-col'>
      <Subtitle title={title} />
      <Paragraph text={text} />
    </div>
  )
}

const LinkHeader = ({ title, link }) => {
  return (
    <a href={link} className='hover:drop-shadow-green-md' ><Header title={title} /></a>
  )
}

const Experience = ({ experience }) => {
  const endDate = experience.stillWorking ? "Current" : experience.endDate
  
  let skills = ""
  experience.skills.forEach(skill => skills = skills.concat(`${skill} • `))
  skills = skills.substring(0, skills.length - 3)

  return (
    <div>
      <Header title={`${experience.title}`} />
      <SubHeader title={` ${experience.employer}`} />
      <SubHeader title={experience.location} />
      <SubHeader title={`${experience.startDate} - ${endDate}`} />
      <Paragraph text={experience.description} />
      <Paragraph text={skills} />
    </div>
  )
}

const Experiences = ({ title, experiences }) => {
  return (
    <div>
      <Subtitle title={title} />
      {experiences.map(currentExperience =>
        <Experience key={currentExperience.id} experience={currentExperience} />
      )}
    </div>
  )
}

const School = ({ school }) => {
  
  let endDate = school.endDate
  if (school.currentlyAttending) {
    endDate = `Expected ${school.endDate}`
  }
  
  return (
    <div>
      <Header title={school.name} />
      <SubHeader title={`${school.educationLevel} of ${school.school} in ${school.major}`} />
      {school.specialization === "" ? <></> : <Paragraph text={`Specialization in ${school.specialization}`} /> }
      <Paragraph text={`${school.startDate} - ${endDate}`} />
      <Paragraph text={`Cumulative GPA: ${school.gpa}`} />
    </div>
  )
}

const Education = ({ title, education }) => {
  return (
    <div>
      <Subtitle title={title} />
      {education.map(school =>
        <School key={school.id} school={school} />
      )}
    </div>
  )
}

const Certification = ({ certification }) => {
  return (
    <div className='flex py-2 items-center'>
      <div>
        <a href={certification.link}><img src={certification.image} href={certification.link} className='pr-2 cursor-pointer h-[168px] min-w-[184px] hover:drop-shadow-green-glow-lg' /></a>
      </div>
      <div>
        <Header title={certification.name} />
        <SubHeader title={certification.issuedBy} />
        <Paragraph text={`Issued ${certification.issueDate} • Expires ${certification.expirationDate}`} />
      </div>
    </div>
  )
}

const Certifications = ({ title, certifications }) => {
  return (
    <div>
      <Subtitle title={title} />
      {certifications.map(certification => 
        <Certification key={certification.id} certification={certification} />
      )}
    </div>
  )
}

const Pill = ({ text }) => {
  return (
    <div className='inline font-space text-white text-xs py-1 px-2 mx-2 outline outline-green-500 outline-offset-2 bg-slate-700 hover:bg-slate-600 rounded-full cursor-default drop-shadow-green-glow hover:drop-shadow-green-glow-lg'>{text}</div>
  )
}

const Project = ({ project }) => {
  return (
    <div className='flex flex-wrap xl:flex-nowrap gap-2'>
      <div className='xl:w-1/2'>
        <LinkHeader title={project.name} link={project.link} />
        <SubHeader title={project.shortDescription} />
        <Paragraph text={project.description} />
        <div className='p-6'>
          {project.toolsUsed.map(tool => 
            <Pill key={tool} text={tool} />
          )}
        </div>
      </div>
      <div>
        <img src={project.image} />
      </div>
    </div>
  )
}

const Projects = ({ title, projects }) => {
  return (
    <div>
      <Subtitle title={title} />
      {projects.map(project =>
        <Project key={project.id} project={project} />
      )}
    </div>
  )
}

const Title = () => {
  return (
    <div>
      <div>
        <h1 className='antialiased font-space pt-8 pb-4 text-white text-center text-6xl drop-shadow-green-lg select-none'>Aidan Stoner</h1>
      </div>
      <div className='flex gap-8 pb-8'>
        <div className='flex-auto text-right'>
          <a href='https://www.linkedin.com/in/aidanstoner' className='text-white font-space text-xl px-4 hover:drop-shadow-green-sm underline'>LinkedIn</a>
        </div>
        <div className='flex-auto text-left'>
          <a href='https://github.com/AidanS39' className='text-white font-space text-xl px-4 hover:drop-shadow-green-sm underline'>GitHub</a>
        </div>
      </div>
    </div>
  )
}

function App() {

  const [ introduction, setIntroduction ] = useState({ name: "", text: "" })
  const [ experiences, setExperiences ] = useState([])
  const [ certifications, setCertifications ] = useState([])
  const [ education, setEducation ] = useState([])
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    introductionService.getIntroduction()
      .then(initialIntroduction => setIntroduction(initialIntroduction))
      .catch(error => {
        console.log("error: could not fetch introduction. ")
      })
    experiencesServices.getAllExperiences()
      .then(initialExperiences => setExperiences(initialExperiences))
      .catch(error => {
        console.log("error: could not fetch experiences")
      })
    certificationsServices.getAllCertifications()
      .then(initialCertifications => setCertifications(initialCertifications))
      .catch(error => {
        console.log("error: could not fetch certifications")
      })
    educationServices.getAllEducation()
      .then(initialEducation => setEducation(initialEducation))
      .catch(error => {
        console.log("error: could not fetch education")
      })
    projectsServices.getAllProjects()
      .then(initialProjects => setProjects(initialProjects))
      .catch(error => {
        console.log("error: could not fetch projects")
      })
  }, [])

  return (
    <div className='min-h-screen p-2 bg-green-900'>
      <div className='p-12 m-6 bg-zinc-800 border-4 rounded-xl shadow-3xl text-wrap'>
        <Title />
        <div className='grid md:grid-cols-1 xl:grid-cols-2 gap-2'>
          <div className='row-auto'><HeaderParagraph title={introduction.name} text={introduction.text} direction='items-start' width="w-3/5"/></div>
          <div className='row-span-3'><Experiences title="Work Experience" experiences={experiences} /></div>
          <div className='row-auto'><Education title="Education" education={education} /></div>
          <div className='row-auto'><Certifications title="Certifications" certifications={certifications} /></div>
          <div className='row-auto xl:col-span-2'><Projects title="Projects" projects={projects} /></div>
        </div>
      </div>
    </div>
  )
}

export default App
