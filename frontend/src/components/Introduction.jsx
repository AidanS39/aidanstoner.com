import { Subtitle, Paragraph, EditButton, AddButton } from './Content'

const Section = ({ title, paragraphs }) => {
  return (
    <div>
      <Subtitle key={title} title={title} />
      {paragraphs.map((paragraph, index) => 
        <Paragraph key={title + "_" + index} text={paragraph} />
      )}
    </div>
  )
}

const Title = () => {
  return (
    <div>
      <div>
        <h1 className='antialiased font-montserrat font-medium py-2 text-white text-center tracking-tighter lg:text-[72px] md:text-6xl sm:text-5xl text-4xl drop-shadow-2xl select-none'>Aidan Stoner</h1>
      </div>
      <div className='flex xl:flex-nowrap xl:gap-x-8 lg:gap-x-6 md:gap-x-4 gap-x-2 pb-6'>
        <div className='flex-auto text-right'>
          <a href='https://www.linkedin.com/in/aidanstoner' className='text-white font-montserrat font-medium lg:text-xl md:text-lg sm:text-base text-sm px-4 hover:drop-shadow-green-glow underline'>LinkedIn</a>
        </div>
        <div className='flex-auto text-left'>
          <a href='https://github.com/AidanS39' className='text-white font-montserrat font-medium lg:text-xl md:text-lg sm:text-base text-sm px-4 hover:drop-shadow-green-glow underline'>GitHub</a>
        </div>
      </div>
    </div>
  )
}

const Introduction = ({ sections, onEditClick, onAddClick, isLoggedIn }) => {
  const schema = {
    id: "",
    title: "",
    paragraphs: ["",]
  }

  return (
    <div className='relative'>
      <Title />
      {sections.map(section =>
        <div key={section.title + "_div"} className='relative'>
          <Section key={section.title} title={section.title} paragraphs={section.paragraphs} />
          {isLoggedIn ? <EditButton key={section.title + "_editButton"} onClick={() => onEditClick(section)} /> : <></> }
        </div>
      )}
      {isLoggedIn ? <AddButton onClick={() => onAddClick(schema)} /> : <></> }
    </div>
  )
}

export { Introduction };