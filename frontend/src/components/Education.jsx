import { Header, SubHeader, Paragraph, Subtitle } from './Content'

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

export { Education };