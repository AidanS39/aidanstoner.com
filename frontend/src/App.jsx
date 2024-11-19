import { useState } from 'react'

const Header = ({ title }) => {
  return (
    <h3 className={`w-1/2 antialiased font-space pt-8 pb-1 px-4 text-white text-3xl drop-shadow-green-md`}>{title}</h3>
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
      <Header title={title} />
      <Paragraph text={text} width={width} />
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

  const introParagraph="My name is Aidan Stoner and I am a sophomore majoring in Computer Science at The College of New Jersey. This website acts as both a portfolio and a resume, where you can see my personal work and experience. Everything you see on this website was developed by myself. The reason why I created the entire site myself was to gain experience in full-stack development."

  return (
    <div className='min-h-screen p-2 bg-green-900'>
      <div className='p-5 m-2 bg-zinc-800 border-4 rounded-xl shadow-3xl'>
        <Title />
        <HeaderParagraph title='Introduction' text={introParagraph} direction='items-start' width="w-3/4"/>
        <Paragraph text={introParagraph} width='w-4/5'/>
      </div>
    </div>
  )
}

export default App
