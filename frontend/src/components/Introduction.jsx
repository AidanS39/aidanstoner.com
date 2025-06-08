// Component dependencies
import { PageTitle, Heading, Paragraph, Image, } from './Utilities'
import profile_picture from '../assets/profile_picture.png'

const Introduction = ({ intro }) => {
  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <div className="basis-5/7 space-y-6">
            <PageTitle title={intro.name} />
            <Heading heading={intro.subtitle} />
            <Paragraph text={intro.bio} />
          </div>
          <div className="basis-2/7 w-full flex justify-center">
            <Image src={intro.image === "" ? profile_picture : intro.image} alt={`${intro.name} profile picture`} />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Introduction }