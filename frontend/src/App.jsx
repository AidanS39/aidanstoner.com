import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

import loginService from './services/login'
import logoutService from './services/logout'
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
    <div className='inline-block content-center h-16 px-2 lg:px-4'>
      <a className='font-montserrat font-medium text-white tracking-wider text-nowrap hover:cursor-pointer opacity-70 hover:opacity-100 transition-opacity' onClick={onclick} >{text}</a>
    </div>
  )
}

const Navbar = ({ title, headers, loginOnClick, displayName }) => {
  
  return (
    <div className='sticky top-0 z-50 flex flex-wrap bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-zinc-900 transition backdrop-blur-sm items-center min-h-16 drop-shadow-md border-b border-zinc-500' >
      <div className='inline-block content-center h-16 px-4 lg:px-8'>
        <a className='font-montserrat font-medium text-xl text-white tracking-wider cursor-default opacity-70 hover:opacity-100 transition-opacity text-nowrap' href="/" >{title}</a>
      </div>
      {headers.map(header =>
        <Nav key={header.text} text={header.text} onclick={header.onclick} />
      )}
      <div className='grow content-center h-16 px-8 text-right'>
        <a className='font-montserrat font-medium text-white tracking-wider hover:cursor-pointer opacity-70 hover:opacity-100 transition-opacity text-nowrap' onClick={loginOnClick} >{displayName}</a>
      </div>
    </div>
  )
}

const Login = ({ login, onLoginClick, onLogoutClick, onChangeUsername, onChangePassword, displayName, statusMessage }) => {
  let display = (
    <>
      <input id='username' type='text' className='block place-self-center my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25' placeholder='username' value={login.username} onChange={onChangeUsername} />
      <input id='password' type='password' className='block place-self-center my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25' placeholder='password' value={login.password} onChange={onChangePassword} />
      <input id='loginButton' type='button' className='block place-self-center my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight bg-green-700 hover:drop-shadow-green-glow active:bg-green-800' value='Log in' onClick={onLoginClick} />
    </>
  )
  if (displayName !== 'Log in') {
    display = (
      <input id='logoutButton' type='button' className='block place-self-center my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight bg-green-700 hover:drop-shadow-green-glow active:bg-green-800' value='Log out' onClick={onLogoutClick} />
    )
  }
  
  const statusDisplay = ( 
      <p className='block place-self-center my-4 py-1 px-2 text-red-700 font-montserrat leading-tight'>{statusMessage}</p>
  )

  return (
    <form className='bg-black bg-opacity-50 min-h-screen min-w-full content-center backdrop-blur-xl'>
      {statusDisplay}
      {display}
    </form>
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

const Experiences = ({ experiences }) => {
  return (
    <div>
      <Subtitle title="Work Experience" />
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

const Education = ({ education }) => {
  return (
    <div>
      <Subtitle title="Education" />
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

const Certifications = ({ certifications }) => {
  return (
    <div>
      <Subtitle title="Certifications" />
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

function App() {

  const [ introduction, setIntroduction ] = useState([])
  const [ experiences, setExperiences ] = useState([])
  const [ certifications, setCertifications ] = useState([])
  const [ education, setEducation ] = useState([])
  const [ projects, setProjects ] = useState([])
  const [ display, setDisplay ] = useState([])
  const [ statusMessage, setStatusMessage ] = useState('')
  const [ modal, setModal ] = useState([])
  const [ login, setLogin ] = useState({
    username: "", 
    password: ""
  })
  const [ displayName, setDisplayName ] = useState("Log in")

  const [ cookies, setCookie, removeCookie ] = useCookies(['token'])

  useEffect(() => {
    
    if (cookies.username) {
      setDisplayName(cookies.username)
    }

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

  const handleLoginClick = (event) => {
    event.preventDefault()
    loginService.postLogin(login)
      .then(response => {
        loadHomePage()
        setDisplayName(login.username)
        setLogin({username: "", password: ""})
      })
      .catch(error => {
        if (error.code === "ERR_BAD_REQUEST") {
          console.log("invalid username or password", error)
          setStatusMessage('Invalid username or password.')
          setTimeout(() => setStatusMessage(''), 5000)
        }
        else {
          console.log("error: failed to log in")
        }
      })
  }

  const handleLogoutClick = (event) => {
    event.preventDefault()
    
    logoutService.postLogout()
      .then(response => {
        loadHomePage()
        setDisplayName('Log in')
        setLogin({username: "", password: ""})
      })
      .catch(error => {
        console.log("error: failed to log out")
        window.location.replace('/')
      })
  }

  const onChangeUsername = (event) => {
    setLogin({...login, username: event.target.value})
  }

  const onChangePassword = (event) => {
    setLogin({...login, password: event.target.value})
  }

  const displays = {
    Introduction: <Introduction sections={introduction} />,
    Projects: <Projects projects={projects} />,
    Experiences: <Experiences experiences={experiences} />,
    Education: <Education education={education} />,
    Certifications: <Certifications certifications={certifications} />,
  }

  const renderPage = () => {
    return (
      displays[display]
    )
  }

  const loadHomePage = () => {
    setModal("Blank")
    setDisplay("Introduction")
  }

  const loadProjectPage = () => {
    setModal("Blank")
    setDisplay("Projects")
  }

  const loadExperiencePage = () => {
    setModal("Blank")
    setDisplay("Experiences")
  }

  const loadEducationPage = () => {
    setModal("Blank")
    setDisplay("Education")
  }

  const loadCertificationPage = () => {
    setModal("Blank")
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

  const modals = {
    Blank: <></>,
    Login: <Login login={login} onLoginClick={handleLoginClick} onLogoutClick={handleLogoutClick} onChangeUsername={onChangeUsername} onChangePassword={onChangePassword} displayName={displayName} statusMessage={statusMessage} />
  }

  const renderModal = () => {
    if (modal === "Blank") {
      return (
        modals[modal]
      )
    }
    else {
      return (
        <div className='fixed top-0 min-h-screen w-full ' >
          {modals[modal]}
        </div>
      )
    }
  }

  const loadLoginModal = () => {
    setModal("Login")
    setLogin({username: "", password: ""})
  }

  return (
    <>
      <div className='relative'>
        <Navbar title="Aidan Stoner" headers={headers} loginOnClick={loadLoginModal} displayName={displayName} />
        <div className='block lg:p-12 p-6 m-6 bg-gradient-to-r from-zinc-950 from-5% via-emerald-950 via-50% to-zinc-950 to-95% border-1 rounded-xl shadow-lg text-wrap'>
          {renderPage()}
        </div>
        
      </div>
      {renderModal()}
    </>
  )
}

export default App
