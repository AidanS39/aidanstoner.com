import { useState } from 'react'
import { SectionTitle, IconButton, Paragraph } from '../components/Utilities'
import linkedin_icon from '../assets/linkedin_icon.png'
import github_icon from '../assets/github_icon.png'
import email_icon from '../assets/email_icon.png'

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
                <ClipboardButton
                icon={email_icon}
                alt="Email"
                />
            </div>
        </div>
    </section>
  )
}

const ClipboardButton = ({ icon, alt }) => {
  const [copyEmailStatus, setCopyEmailStatus] = useState('')
  
  const copyEmail = async () => {
    await navigator.clipboard.writeText("stonera3@tcnj.edu");
    setCopyEmailStatus('Email copied to clipboard!')
    setTimeout(() => {
      setCopyEmailStatus('')
    }, 4000)
  }

  return (
    <div>
      <button onClick={copyEmail}>
        <img src={icon} alt={alt} className="w-3xs h-auto hover:scale-105 transition duration-300" />
      </button>
      <Paragraph text={copyEmailStatus} />
    </div>
  )
}

export { Contact }