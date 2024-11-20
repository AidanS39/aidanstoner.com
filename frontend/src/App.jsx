import { useState, useEffect } from 'react'
import introductionService from './services/introduction'
import experiencesServices from './services/experiences'

const Subtitle = ({ title }) => {
  return (
    <h1 className={`antialiased font-space pt-8 pb-1 px-4 text-white text-3xl drop-shadow-green-md`}>{title}</h1>
  )
}

const Header = ({ title }) => {
  return (
    <h2 className={`antialiased font-space py-2 pb-1 px-4 text-white text-xl underline`}>{title}</h2>
  )
}

const SubHeader = ({ title }) => {
  return (
    <h2 className={`antialiased font-space px-4 text-white text-base`}>{title}</h2>
  )
}


const Paragraph = ({ text, width }) => {
  return (
    <p className={`${width} font-space text-white text-left text-sm tracking-tight px-4 py-1`}>{text}</p>
  )
}

const HeaderParagraph = ({ direction, width, title, text }) => {
  
  return (
    <div className={`flex flex-col ${direction}`}>
      <Subtitle title={title} />
      <Paragraph text={text} width={width} />
    </div>
  )
}

const Experience = ( experience ) => {
  const currentExperience = experience.experience
  const endDate = currentExperience.stillWorking ? "Current" : currentExperience.endDate
  
  let skills = ""
  currentExperience.skills.forEach(skill => skills = skills.concat(`${skill} • `))
  skills = skills.substring(0, skills.length - 3)

  return (
    <div>
      <Header title={currentExperience.title} />
      <SubHeader title={currentExperience.location} />
      <SubHeader title={`${currentExperience.startDate} - ${endDate}`} />
      <Paragraph text={currentExperience.description} />
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


const Title = () => {
  return (
    <div>
      <div>
        <h1 className='antialiased font-space pt-8 pb-4 text-white text-center text-6xl drop-shadow-green-lg select-none'>Aidan Stoner</h1>
      </div>
      <div className='flex gap-8'>
        <a href='https://www.linkedin.com/in/aidanstoner' className='flex-auto text-white text-right font-space px-4 hover:drop-shadow-green-sm underline'>LinkedIn</a>
        <a href='https://github.com/AidanS39' className='flex-auto text-white text-left font-space px-4 hover:drop-shadow-green-sm underline'>GitHub</a>
      </div>
    </div>
  )
}

function App() {

  const [ introduction, setIntroduction ] = useState({
    name: "",
    text: ""
  })
  const [ experiences, setExperiences ] = useState([])
  

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
  }, [])

  return (
    <div className='min-h-screen p-2 bg-green-900'>
      <div className='p-5 m-2 bg-zinc-800 border-4 rounded-xl shadow-3xl'>
        <Title />
        <HeaderParagraph title={introduction.name} text={introduction.text} direction='items-start' width="w-3/5"/>
        <Experiences title="Work Experience" experiences={experiences} />
      </div>
    </div>
  )
}

export default App
