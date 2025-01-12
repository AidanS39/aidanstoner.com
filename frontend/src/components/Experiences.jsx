import { Header, SubHeader, Paragraph, Subtitle, Pill } from './Content'

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

export { Experiences };
