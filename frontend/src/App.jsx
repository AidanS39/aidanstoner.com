// Hooks
import { useState, useEffect } from 'react'

// Components
import { Introduction } from './components/Introduction'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Orbs } from './components/BackgroundEffects'

// Services
import IntroductionService from './services/IntroductionService'
import ProjectService from './services/ProjectService'
import CertService from './services/CertificationService'

const App = () => {
  const [intro, setIntro]         = useState({})
  const [projects, setProjects]   = useState([])
  const [certs, setCerts]         = useState([])

useEffect(() => {
  IntroductionService.getIntroduction()
    .then(data => setIntro(data))
  ProjectService.getProjects()
    .then(data => setProjects(data))
  CertService.getCerts()
    .then(data => setCerts(data))
}, [])

console.log(intro)
console.log(projects)
console.log(certs)

  return (
    <>
      <div>
        <Orbs posx="left-2/3" posy="top-4/7" rotation="rotate-180" />
        <Orbs posx="left-1/5" posy="top-1/4" rotation="rotate-0" />
        <Orbs posx="left-2/5" posy="top-1/3" rotation="rotate-270" />
        <Orbs posx="left-1/2" posy="top-1/12" rotation="rotate-180" />
        <Orbs posx="left-1/5" posy="top-3/5" rotation="rotate-0" />
        <Orbs posx="left-1/5" posy="top-3/5" rotation="rotate-0" />
      </div>
      <div className="relative mx-auto space-y-8 z-20">
        <Introduction />
        <Projects projects={projects} />
        <Certifications certs={certs} />
        <Contact />
      </div>
    </>
  )
}

export default App
