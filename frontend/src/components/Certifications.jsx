import { Subtitle, Header, SubHeader, Paragraph } from './Content'

const Certification = ({ certification }) => {
  return (
    <div className='flex py-2 items-center'>
      <div>
        <a href={certification.link}><img src={certification.image} href={certification.link} className='pr-2 cursor-pointer h-[168px] min-w-[184px] transition ease-in-out hover:drop-shadow-green-glow-lg hover:scale-105' /></a>
      </div>
      <div>
        <Header title={certification.name} />
        <SubHeader title={certification.issuedBy} />
        <Paragraph text={`Issued ${certification.issueDate} • Expires ${certification.expirationDate}`} />
      </div>
    </div>
  )
}

const Certifications = ({ certifications }) => {
  return (
    <div>
      <Subtitle title="Certifications" />
      {certifications.map(certification => 
        <Certification key={certification.id} certification={certification} />
      )}
    </div>
  )
}

export { Certifications };