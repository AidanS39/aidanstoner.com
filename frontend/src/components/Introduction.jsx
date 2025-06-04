// Component dependencies
import { PageTitle, Heading, Paragraph, Image, } from './Utilities'
import profile_picture from '../assets/profile_picture.png'

const Introduction = ({ name, subtitle, bio }) => {
  name = "Aidan Stoner"
  subtitle = "Computer Science Major"
  bio = "My name is Aidan Stoner and I am a sophomore majoring in Computer Science at The College of New Jersey. This website acts as both a portfolio and a resume, where you can see my personal work and experience. Everything you see on this website was developed and maintained by myself, which includes everything from the frontend, backend and database, to setting up the web server and proxy, SSL/TLS certificates, domain, and server hosting. More information on the development of this website can be found in the Projects page."

  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <div className="basis-5/7 space-y-6">
            <PageTitle title={name} />
            <Heading heading={subtitle} />
            <Paragraph text={bio} />
          </div>
          <div className="basis-2/7 w-full flex justify-center">
            <Image src={profile_picture} alt={`${name} profile picture`} />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Introduction }