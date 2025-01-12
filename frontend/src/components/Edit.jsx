import { InputLine, InputParagraph, InputDate, InputCheckbox, InputImage, InputButton } from "./Input"
import { Paragraph, Header, SubHeader, Label } from "./Content"

const EditIntroduction = ({ data, handler }) => {
  const onChangeTitle = (event) => {
    handler({...data, title: event.target.value})
  }
  const onAddParagraph = (event) => {
    const newParagraph = [""]
    handler({...data, paragraphs: data.paragraphs.concat(newParagraph)})
  }
  const onRemoveParagraph = (paragraphIndex) => {
    handler({...data, paragraphs: data.paragraphs.filter((paragraph, index) => index != paragraphIndex)})
  }

  return (
    <div>
      <div className='my-2'>
        <Label labelFor={data.id + "_title"} text='Title' />
        <InputLine id={data.id + "_title"} placeholder='Title' text={data.title} handler={onChangeTitle} />
      </div>
      <div className='my-2'>
        <Label labelFor={data.id + "_paragraphs"} text='Paragraphs' />
        {data.paragraphs.map((paragraph, index) => {
          const onChangeParagraph = (event) => {
            handler({...data, paragraphs: data.paragraphs.map((paragraph, currentIndex) => index === currentIndex ? event.target.value : paragraph)})
          }
          return (
            <div key={index}>
              <InputParagraph key={"paragraph_" + index} id={data.id + "_paragraph" + index} placeholder={'Paragraph ' + (index + 1)} text={paragraph} handler={onChangeParagraph} />
              <div key={"img_" + index + "_div"} className='block h-[30px]'>
                <img key={"img_" + index} src="/src/assets/minus.svg" width='20px' height='20px' onClick={() => onRemoveParagraph(index)} className='p-1 bg-red-800 rounded-full float-end hover:cursor-pointer' ></img>
              </div>
            </div>
          )
        })}
        <div className='block h-[30px]'>
          <img src="/src/assets/plus.svg" width='30px' height='30px' onClick={onAddParagraph} className='p-2 bg-green-800 rounded-full float-end hover:cursor-pointer' ></img>
        </div>
      </div>
    </div>
  )
}

const EditProjects = ({ data, current, currentIndex, handler }) => {
  
  const onChangeName = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, name: event.target.value} : currentData))
  }
  const onChangeShortDescription = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, shortDescription: event.target.value} : currentData))
  }
  const onChangeLink = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, link: event.target.value} : currentData))
  }
  const onChangeImage = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, image: event.target.value} : currentData))
  }
  
  return (
    <div>
      <SubHeader title={"Project " + (currentIndex + 1)} />
      <div className='my-2'>
        <Label labelFor={current.id + "_name"} text='Name' />
        <InputLine id={current.id + "_name"} placeholder='Name' text={current.name} handler={onChangeName} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_shortDescription"} text='Short Description' />
        <InputParagraph id={current.id + "_shortDescription"} placeholder='Short Description' text={current.shortDescription} handler={onChangeShortDescription} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_description"} text='Description' />
        {current.description.map((paragraph, index) => {
          const onChangeParagraph = (event) => {
            handler(data.map((currentData, dataIndex) => {
              return dataIndex === currentIndex ? 
              {...currentData, description: currentData.description.map((currentParagraph, paragraphIndex) => {
                return paragraphIndex === index ? 
                event.target.value 
                : currentParagraph})
              }
            : currentData})
            )
          }

          return (
            <InputParagraph key={index} id={current.id + "_description" + index} placeholder={'Description ' + (index + 1)} text={paragraph} handler={onChangeParagraph} />
          )
        })}
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_toolsUsed"} text='Tools Used' />
        {current.toolsUsed.map((tool, index) => {
          const onChangeToolsUsed = (event) => {
            handler(data.map((currentData, dataIndex) => {
              return dataIndex === currentIndex ? 
              {...currentData, toolsUsed: currentData.toolsUsed.map((currentTool, toolIndex) => {
                return toolIndex === index ? 
                event.target.value 
                : currentTool})
              }
            : currentData})
            )
          }

          return (
            <InputLine key={index} id={current.id + "_toolsUsed" + index} placeholder={'Tools Used ' + (index + 1)} text={tool} handler={onChangeToolsUsed} />
          )
        })}
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_link"} text='Link' />
        <InputLine id={current.id + "_link"} placeholder='Link' text={current.link} handler={onChangeLink} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_image"} text='Image' />
        <InputImage id={current.id + "_image"} placeholder='Image' text={current.image} handler={onChangeImage} />
      </div>
    </div>
  )
}

const EditExperiences = ({ data, current, currentIndex, handler }) => {
  const onChangeTitle = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, title: event.target.value} : currentData))
  }
  const onChangeEmployer = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, employer: event.target.value} : currentData))
  }
  const onChangeLocation = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, location: event.target.value} : currentData))
  }
  const onChangeDescription = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, description: event.target.value} : currentData))
  }
  const onChangeStartDate = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, startDate: event.target.value} : currentData))
  }
  const onChangeEndDate = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, endDate: event.target.value} : currentData))
  }
  const onChangeStillWorking = (event) => {
    // TO DO: on click, change visibility on End Date input (visible when unchecked, not visible when checked)
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, stillWorking: event.target.value} : currentData))
  }
  
  return (
    <div>
      <div className='my-2'>
        <SubHeader title={"Experience " + (currentIndex + 1)} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_title"} text='Title' />
        <InputLine id={current.id + "_title"} placeholder='Title' text={current.title} handler={onChangeTitle} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_employer"} text='Employer' />
        <InputLine id={current.id + "_employer"} placeholder='Employer' text={current.employer} handler={onChangeEmployer} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_location"} text='Location' /> 
        <InputLine id={current.id + "_location"} placeholder='Location' text={current.location} handler={onChangeLocation} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_description"} text='Description' />
        <InputParagraph id={current.id + "_description"} placeholder='Description' text={current.description} handler={onChangeDescription} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_startDate"} text='Start Date' />
        <InputDate id={current.id + "_startDate"} placeholder='Start Date' value={current.startDate} handler={onChangeStartDate} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_endDate"} text='End Date' />
        <InputDate id={current.id + "_endDate"} placeholder='End Date' value={current.endDate} handler={onChangeEndDate} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_stillWorking"} text='Still Working' />
        <InputCheckbox id={current.id + "_stillWorking"} placeholder='Still Working' value={current.stillWorking} handler={onChangeStillWorking} />
      </div>
      {/* TO DO: loop through skills */}
    </div>
  )
}

const EditEducation = ({ data, current, currentIndex, handler }) => {
  const onChangeName = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, name: event.target.value} : currentData))
  }
  const onChangeEducationLevel = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, educationLevel: event.target.value} : currentData))
  }
  const onChangeSchool = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, school: event.target.value} : currentData))
  }
  const onChangeMajor = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, major: event.target.value} : currentData))
  }
  const onChangeSpecialization = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, specialization: event.target.value} : currentData))
  }
  const onChangeGPA = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, gpa: event.target.value} : currentData))
  }
  const onChangeStartDate = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, startDate: event.target.value} : currentData))
  }
  const onChangeEndDate = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, endDate: event.target.value} : currentData))
  }
  const onChangeCurrentlyAttending = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, currentlyAttending: event.target.value} : currentData))
  }

  return (
    <div>
      <div className='my-2'>
        <SubHeader title={"Education " + (currentIndex + 1)} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_name"} text='Name' />
        <InputLine id={current.id + "_name"} placeholder='Name' text={current.name} handler={onChangeName} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_educationLevel"} text='Education Level' />
        <InputLine id={current.id + "_educationLevel"} placeholder='Education Level' text={current.educationLevel} handler={onChangeEducationLevel} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_school"} text='School' /> 
        <InputLine id={current.id + "_school"} placeholder='School' text={current.school} handler={onChangeSchool} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_major"} text='Major' />
        <InputLine id={current.id + "_major"} placeholder='Major' text={current.major} handler={onChangeMajor} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_specialization"} text='Specialization' />
        <InputLine id={current.id + "_specialization"} placeholder='Specialization' text={current.specialization} handler={onChangeSpecialization} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_gpa"} text='GPA' />
        <InputLine id={current.id + "_gpa"} placeholder='GPA' text={current.gpa} handler={onChangeGPA} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_startDate"} text='Start Date' />
        <InputDate id={current.id + "_startDate"} placeholder='Start Date' value={current.startDate} handler={onChangeStartDate} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_endDate"} text='End Date' />
        <InputDate id={current.id + "_endDate"} placeholder='End Date' value={current.endDate} handler={onChangeEndDate} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_currentlyAttending"} text='Currently Attending' />
        <InputCheckbox id={current.id + "_currentlyAttending"} placeholder='Currently Attending' value={current.currentlyAttending} handler={onChangeCurrentlyAttending} />
      </div>
    </div>
  )
}

const EditCertifications = ({ data, current, currentIndex, handler }) => {
  const onChangeName = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, name: event.target.value} : currentData))
  }
  const onChangeIssuedBy = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, issuedBy: event.target.value} : currentData))
  }
  const onChangeIssueDate = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, issueDate: event.target.value} : currentData))
  }
  const onChangeExpirationDate = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, expirationDate: event.target.value} : currentData))
  }
  const onChangeLink = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, link: event.target.value} : currentData))
  }
  const onChangeImage = (event) => {
    handler(data.map((currentData, dataIndex) => dataIndex === currentIndex ? {...currentData, image: event.target.value} : currentData))
  }
  
  return (
    <div>
      <div className='my-2'>
        <SubHeader title={"Certification " + (currentIndex + 1)} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_name"} text='Name' />
        <InputLine id={current.id + "_name"} placeholder='Name' text={current.name} handler={onChangeName} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_issuedBy"} text='Issued By' />
        <InputLine id={current.id + "_issuedBy"} placeholder='Issued By' text={current.issuedBy} handler={onChangeIssuedBy} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_issueDate"} text='Issue Date' /> 
        <InputLine id={current.id + "_issueDate"} placeholder='Issue Date' text={current.issueDate} handler={onChangeIssueDate} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_expirationDate"} text='Expiration Date' />
        <InputLine id={current.id + "_expirationDate"} placeholder='Expiration Date' text={current.expirationDate} handler={onChangeExpirationDate} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_link"} text='Link' />
        <InputLine id={current.id + "_link"} placeholder='Link' text={current.link} handler={onChangeLink} />
      </div>
      <div className='my-2'>
        <Label labelFor={current.id + "_image"} text='Image' />
        <InputLine id={current.id + "_image"} placeholder='Image' text={current.image} handler={onChangeImage} />
      </div>
    </div>
  )
}

const Edit = ({ display, type, data, handlers }) => {

  const schemas = {
    Introduction: <EditIntroduction key={data.id} data={data}  handler={handlers.current} />,
    Projects: <EditProjects key={data.id} data={data} handler={handlers.current} />,
    Experiences: <EditExperiences key={data.id} data={data} handler={handlers.current} />,
    Education: <EditEducation key={data.id} data={data} handler={handlers.current} />,
    Certifications: <EditCertifications key={data.id} data={data} handler={handlers.current} />,
  }

  return (
    <div className='overflow-auto'>
      <div className='self-start place-self-center w-3/5 p-4'>
        <Header title={type + " " + display} />
        <div className='block'>
          {schemas[display]}
        </div>
        <InputButton id='save' name="Save" color="Delete" handler={handlers.save} />
        {type === "Edit" ? <InputButton id='delete' name="Delete" color="Red" handler={handlers.delete} /> : <></>}
      </div>
    </div>
  )
}

export { Edit }