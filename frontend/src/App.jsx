import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

import { Subtitle, Header, SubHeader, Paragraph, LinkHeader, Pill } from './components/Content'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Introduction } from './components/Introduction'
import { Experiences } from './components/Experiences'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Projects } from './components/Projects'
import { Edit } from './components/Edit'

import loginService from './services/login'
import logoutService from './services/logout'
import introductionService from './services/introduction'
import experiencesServices from './services/experiences'
import certificationsServices from './services/certifications'
import educationServices from './services/education'
import projectsServices from './services/projects'

function App() {

  const [ introduction, setIntroduction ] = useState([])
  const [ experiences, setExperiences ] = useState([])
  const [ certifications, setCertifications ] = useState([])
  const [ education, setEducation ] = useState([])
  const [ projects, setProjects ] = useState([])
  const [ display, setDisplay ] = useState([])
  const [ currentData, setCurrentData ] = useState([])
  const [ statusMessage, setStatusMessage ] = useState('')
  const [ modal, setModal ] = useState([])
  const [ login, setLogin ] = useState({
    username: "", 
    password: ""
  })
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ displayName, setDisplayName ] = useState("Log in")
  const [ cookies, setCookie, removeCookie ] = useCookies(['token'])

  useEffect(() => {
    if (cookies.username) {
      setIsLoggedIn(true)
      setDisplayName(cookies.username)
    }

    introductionService.getIntroduction()
      .then(initialIntroduction => {
        setIntroduction(initialIntroduction)
      })
      .catch(error => {
        setStatusMessage(statusMessage.concat("error: could not fetch introduction. "))
      })

    projectsServices.getAllProjects()
      .then(initialProjects => {
        setProjects(initialProjects)
      })
      .catch(error => {
        setStatusMessage(statusMessage.concat("error: could not fetch projects"))
      })

    experiencesServices.getAllExperiences()
      .then(initialExperiences => {
        setExperiences(initialExperiences)
      })
      .catch(error => {
        setStatusMessage(statusMessage.concat("error: could not fetch experiences"))
      })

    educationServices.getAllEducation()
      .then(initialEducation => {
        setEducation(initialEducation)
      })
      .catch(error => {
        setStatusMessage(statusMessage.concat("error: could not fetch education"))
      })

    certificationsServices.getAllCertifications()
      .then(initialCertifications => {
        setCertifications(initialCertifications)
      })
      .catch(error => {
        setStatusMessage(statusMessage.concat("error: could not fetch certifications"))
      })
    loadHomePage()
  }, [])

  useEffect(() => {
    document.title = `${display} | Aidan Stoner`
  }, [display])

  const onLoginClick = (event) => {
    event.preventDefault()
    loginService.postLogin(login)
      .then(response => {
        setIsLoggedIn(true)
        setDisplayName(login.username)
        loadHomePage()
        setLogin({username: "", password: ""})
      })
      .catch(error => {
        if (error.code === "ERR_BAD_REQUEST") {
          console.log("invalid username or password", error)
          setStatusMessage('Invalid username or password.')
          setTimeout(() => setStatusMessage(''), 5000)
        }
        else {
          setStatusMessage("error: failed to log in")
        }
      })
  }

  const onLogoutClick = (event) => {
    event.preventDefault()
    
    logoutService.postLogout()
      .then(response => {
        loadHomePage()
        setDisplayName('Log in')
        setIsLoggedIn(false)
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

  const loginHandlers = {
    onLoginClick: onLoginClick, 
    onLogoutClick: onLogoutClick, 
    onChangeUsername: onChangeUsername, 
    onChangePassword: onChangePassword
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

  const loadLoginModal = () => {
    setModal("Login")
    setLogin({username: "", password: ""})
  }

  const loadEditModal = (data) => {
    setCurrentData(data)
    setModal("Edit")
  }

  const loadAddModal = (schema) => {
    setCurrentData(schema)
    setModal("Add")
  }

  const displays = {
    Introduction: <Introduction sections={introduction} onEditClick={loadEditModal} onAddClick={loadAddModal} isLoggedIn={isLoggedIn} />,
    Projects: <Projects projects={projects} onEditClick={loadEditModal} onAddClick={loadAddModal} isLoggedIn={isLoggedIn} />,
    Experiences: <Experiences experiences={experiences} onEditClick={loadEditModal} onAddClick={loadAddModal} isLoggedIn={isLoggedIn} />,
    Education: <Education education={education} onEditClick={loadEditModal} onAddClick={loadAddModal} isLoggedIn={isLoggedIn} />,
    Certifications: <Certifications certifications={certifications} onEditClick={loadEditModal} onAddClick={loadAddModal} isLoggedIn={isLoggedIn} />,
  }

  const renderPage = () => {
    return (
      displays[display]
    )
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

  const sets = {
    Introduction: {
      edit: () => {
        introductionService.modifyIntroduction(currentData)
          .then(setIntroduction(introduction.map(section => section.id === currentData.id ? {...currentData} : section)))
          .catch(error => setStatusMessage('error: failed to save section ', error))
      },
      add: () => {
        introductionService.addIntroduction(currentData)
          .then(response => {
            setIntroduction(introduction.concat(response))
          })
          .catch(error => setStatusMessage('error: failed to save section ', error))
      },
      delete: () => {
        introductionService.deleteIntroduction(currentData)
          .then(setIntroduction(introduction.filter(section => section.id !== currentData.id)))
          .catch(error => console.log('error: failed to delete section ', error))
      }
    },
    Projects: {
      state: setProjects
    },
    Experiences: {
      state: setExperiences
    },
    Education: {
      state: setEducation
    },
    Certifications: {
      state: setCertifications
    },
  }

  const onClickSaveEdit = (event) => {
    event.preventDefault()
    
    sets[display].edit()
    setModal("Blank")
  }

  const onClickSaveAdd = (event) => {
    event.preventDefault()
    
    sets[display].add()
    setModal("Blank")
  }

  const onClickDeleteEdit = (event) => {
    event.preventDefault()
    
    sets[display].delete()
    setModal("Blank")
  }

  const editHandlers = {
    current: setCurrentData,
    save: onClickSaveEdit,
    delete: onClickDeleteEdit
  }

  const addHandlers = {
    current: setCurrentData,
    save: onClickSaveAdd
  }

  const modals = {
    Blank: <></>,
    Login: <Login login={login} handlers={loginHandlers} displayName={displayName} statusMessage={statusMessage} />,
    Edit: <Edit display={display} type="Edit" data={currentData} handlers={editHandlers} />,
    Add: <Edit display={display} type="Add" data={currentData} handlers={addHandlers} />
  }

  const renderModal = () => {
    if (modal === "Blank") {
      return (
        modals[modal]
      )
    }
    else {
      return (
        <div className='absolute grid top-16 min-h-screen min-w-full bg-black bg-opacity-50 backdrop-blur-[20px]' >
          {modals[modal]}
        </div>
      )
    }
  }

  

  return (
    <>
      <div className='relative flex flex-col justify-center'>
        <Navbar headers={headers} loginOnClick={loadLoginModal} displayName={displayName} />
        <div className='m-6 flex justify-center'>
          <div className='block lg:p-12 p-6 w-full max-w-[70rem] bg-gradient-to-r from-zinc-950 from-5% via-emerald-950 via-50% to-zinc-950 to-95% box-border rounded-xl shadow-lg text-wrap'>
            {renderPage()}
          </div>
        </div>
      </div>
      {renderModal()}
    </>
  )
}

export default App
