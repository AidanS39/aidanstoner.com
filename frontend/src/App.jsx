import { useState } from 'react'

const Paragraph = ({ text, title, direction}) => {
  return (
    <div className={`flex flex-col ${direction} `}>
      <h3 className={`w-1/2 antialiased font-space pt-8 pb-4 px-4 text-white text-3xl drop-shadow-green-md`}>{title}</h3>
      <p className={`w-1/2 font-space text-white text-left hyphens-auto px-4`}>{text}</p>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <div>
        <h1 className='antialiased font-space pt-8 pb-4 text-white text-center text-6xl drop-shadow-green-lg select-none'>Aidan Stoner</h1>
      </div>
      <div className='flex gap-8'>
        <a href='https://www.linkedin.com/in/aidanstoner' className='flex-auto text-white text-right font-space hover:drop-shadow-green-sm underline'>LinkedIn</a>
        <a href='https://github.com/AidanS39' className='flex-4 text-white text-center font-space hover:drop-shadow-green-sm underline'>GitHub</a>
        <a href='https://www.linkedin.com/in/aidanstoner' className='flex-auto text-white text-left font-space hover:drop-shadow-green-sm underline'>LinkedIn</a>
      </div>
    </div>
  )
}

function App() {

  const introParagraph="My name is Aidan Stoner and I am a sophomore majoring in Computer Science at The College of New Jersey. This website acts as both a portfolio and a resume, where you can see my personal work and experience. Everything you see on this website was developed by myself. The reason why I created the entire site myself was to gain experience in full-stack development."

  return (
    <div className='min-h-screen p-2 bg-green-900 shadow-inner-xl'>
      <div className='p-5 m-2 bg-zinc-800 border-4 rounded-xl'>
        <Header />
        <Paragraph title='Introduction' text={introParagraph} direction='items-start' />
      </div>
    </div>
  )
}

export default App
