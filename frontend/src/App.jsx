import { useState, useEffect } from 'react'
import introductionService from './services/introduction'
import experiencesServices from './services/experiences'
import certificationsServices from './services/certifications'
import educationServices from './services/education'
import projectsServices from './services/projects'

const Subtitle = ({ title }) => {
  return (
    <h1 className='antialiased font-montserrat font-medium pt-1 pb-1 text-white text-center text-wrap tracking-tight lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>{title}</h1>
  )
}

const Header = ({ title }) => {
  return (
    <h2 className='antialiased font-montserrat font-medium pt-2 pb-1 inline-block text-white text-wrap lg:text-3xl md:text-2xl sm:text-xl text-lg tracking-tighter underline'>{title}</h2>
  )
}

const SubHeader = ({ title }) => {
  return (
    <h2 className='antialiased font-montserrat font-medium text-white text-wrap tracking-tighter lg:text-xl md:text-lg sm:text-base text-sm'>{title}</h2>
  )
}

const Paragraph = ({ text }) => {
  return (
    <p className='font-montserrat font-medium text-white text-left leading-loose tracking-tight lg:text-base md:text-sm text-xs text-wrap py-1'>{text}</p>
  )
}

const LinkHeader = ({ title, link }) => {
  return (
    <a href={link} className='hover:drop-shadow-green-glow-lg' ><Header title={title} /></a>
  )
}

const Pill = ({ text }) => {
  return (
    <div className='inline-block font-montserrat font-medium text-white text-xs py-1 px-2 outline outline-green-500 outline-offset-2 bg-slate-700 hover:bg-slate-600 rounded-full cursor-default transition ease-in-out drop-shadow-green-glow hover:drop-shadow-green-glow-lg' >{text}</div>
  )
}

const Nav = ({ text, onclick }) => {
  return (
    <div className='inline-block content-center h-16 px-4 border-b border-zinc-600'>
      <a className='font-montserrat font-medium text-white tracking-wider hover:cursor-pointer opacity-70 hover:opacity-100 transition-opacity' onClick={onclick} >{text}</a>
    </div>
  )
}

const Navbar = ({ title, headers, logo }) => {
  return (
    <div className='sticky top-0 z-50 bg-zinc-800 bg-opacity-75 hover:bg-opacity-100 transition backdrop-blur-sm items-center h-16 drop-shadow-md text-nowrap border-b border-zinc-600' >
      <a className='font-montserrat font-medium text-xl text-white tracking-wider mx-8 cursor-default opacity-70 hover:opacity-100 transition-opacity' href="/" >{title}</a>
      {headers.map(header =>
        <Nav key={header.text} text={header.text} onclick={header.onclick} />
      )}
      <img src={logo} />
    </div>
  )
}

const Section = ({ title, paragraphs }) => {
  return (
    <div>
      <Subtitle key={title} title={title} />
      {paragraphs.map(paragraph => 
        <Paragraph key={title} text={paragraph} />
      )}
    </div>
  )
}

const Introduction = ({ sections }) => {
  return (
    <div>
      <Title />
      {sections.map(section =>
        <Section key={section.title} title={section.title} paragraphs={section.paragraphs} />
      )}
    </div>
  )
}

const Experience = ({ experience }) => {
  const endDate = experience.stillWorking ? "Current" : experience.endDate

  return (
    <div className='my-2'>
      <Header title={`${experience.title}`} />
      <SubHeader title={` ${experience.employer}`} />
      <SubHeader title={experience.location} />
      <SubHeader title={`${experience.startDate} - ${endDate}`} />
      <Paragraph text={experience.description} />
      <div className='flex flex-wrap gap-4 py-2'>
        {experience.skills.map(skill =>
          <Pill key={skill} text={skill} />
        )}
      </div>
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
        <a href={certification.link}><img src={certification.image} href={certification.link} className='pr-2 cursor-pointer h-[168px] min-w-[184px] transition ease-in-out hover:drop-shadow-green-glow-lg hover:scale-105' /></a>
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

const Project = ({ project }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <div className='container'>
        <LinkHeader title={project.name} link={project.link} />
        <SubHeader title={project.shortDescription} />
        <Paragraph text={project.description} />
        <div className='flex gap-4 py-4'>
          {project.toolsUsed.map(tool => 
            <Pill key={tool} text={tool} />
          )}
        </div>
      </div>
      <div className='content-center'>
        <img className='drop-shadow-3xl' src={project.image} />
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
        <h1 className='antialiased font-montserrat font-medium py-2 text-white text-center tracking-tighter lg:text-[72px] md:text-6xl sm:text-5xl text-4xl drop-shadow-2xl select-none'>Aidan Stoner</h1>
      </div>
      <div className='flex xl:flex-nowrap xl:gap-x-8 lg:gap-x-6 md:gap-x-4 gap-x-2 pb-6'>
        <div className='flex-auto text-right'>
          <a href='https://www.linkedin.com/in/aidanstoner' className='text-white font-montserrat font-medium lg:text-xl md:text-lg sm:text-base text-sm px-4 hover:drop-shadow-green-glow underline'>LinkedIn</a>
        </div>
        <div className='flex-auto text-left'>
          <a href='https://github.com/AidanS39' className='text-white font-montserrat font-medium lg:text-xl md:text-lg sm:text-base text-sm px-4 hover:drop-shadow-green-glow underline'>GitHub</a>
        </div>
      </div>
    </div>
  )
}

function App() {

  const [ introduction, setIntroduction ] = useState([])
  const [ experiences, setExperiences ] = useState([])
  const [ certifications, setCertifications ] = useState([])
  const [ education, setEducation ] = useState([])
  const [ projects, setProjects ] = useState([])
  const [ display, setDisplay ] = useState([])

  useEffect(() => {
    introductionService.getIntroduction()
      .then(initialIntroduction => {
        setIntroduction(initialIntroduction)
      })
      .catch(error => {
        console.log("error: could not fetch introduction. ")
      })

    projectsServices.getAllProjects()
      .then(initialProjects => {
        setProjects(initialProjects)
      })
      .catch(error => {
        console.log("error: could not fetch projects")
      })

    experiencesServices.getAllExperiences()
      .then(initialExperiences => {
        setExperiences(initialExperiences)
      })
      .catch(error => {
        console.log("error: could not fetch experiences")
      })

    educationServices.getAllEducation()
      .then(initialEducation => {
        setEducation(initialEducation)
      })
      .catch(error => {
        console.log("error: could not fetch education")
      })

    certificationsServices.getAllCertifications()
      .then(initialCertifications => {
        setCertifications(initialCertifications)
      })
      .catch(error => {
        console.log("error: could not fetch certifications")
      })

    loadHomePage()
  }, [])

  useEffect(() => {
    document.title = `${display} | Aidan Stoner`
  }, [display])

  const displays = {
    Introduction: <Introduction sections={introduction} />,
    Projects: <Projects title="Projects" projects={projects} />,
    Experiences: <Experiences title="Work Experience" experiences={experiences} />,
    Education: <Education title="Education" education={education} />,
    Certifications: <Certifications title="Certifications" certifications={certifications} />
  }

  const renderPage = () => {
    return (
      displays[display]
    )
  }

  const loadHomePage = () => {
    setDisplay("Introduction")
  }

  const loadProjectPage = () => {
    setDisplay("Projects")
  }

  const loadExperiencePage = () => {
    setDisplay("Experiences")
  }

  const loadEducationPage = () => {
    setDisplay("Education")
  }

  const loadCertificationPage = () => {
    setDisplay("Certifications")
  }

  const headers = [
    {
      text: "Home",
      onclick: loadHomePage
    },
    {
      text: "Projects",
      onclick: loadProjectPage
    },
    {
      text: "Work Experience",
      onclick: loadExperiencePage
    },
    {
      text: "Education",
      onclick: loadEducationPage
    },
    {
      text: "Certifications",
      onclick: loadCertificationPage
    }
  ]

  return (
    <div className='relative transition-all'>
      <Navbar title="Aidan Stoner" headers={headers} logo="" />
      <div className='lg:p-12 p-6 m-6 bg-gradient-to-r from-zinc-950 from-5% via-emerald-950 via-50% to-zinc-950 to-95% border-1 rounded-xl shadow-lg text-wrap'>
        {renderPage()}
      </div>
    </div>
  )
}

export default App
