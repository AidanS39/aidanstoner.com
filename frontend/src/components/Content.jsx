const Subtitle = ({ title }) => {
  return (
    <h1 className='antialiased font-montserrat font-medium pt-1 pb-1 text-white text-center text-wrap grow tracking-tight lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>{title}</h1>
  )
}

const Header = ({ title }) => {
  return (
    <h2 className='antialiased font-montserrat font-medium pt-2 pb-1 inline-block text-white text-wrap lg:text-3xl md:text-2xl sm:text-xl text-lg tracking-tighter'>{title}</h2>
  )
}

const SubHeader = ({ title }) => {
  return (
    <h3 className='antialiased font-montserrat font-medium text-white text-wrap tracking-tighter lg:text-xl md:text-lg sm:text-base text-sm'>{title}</h3>
  )
}

const Paragraph = ({ text }) => {
  return (
    <p className='font-montserrat font-medium text-white text-left tracking-tight lg:text-base md:text-sm text-xs text-wrap py-1'>{text}</p>
  )
}

const Label = ({ text, labelFor }) => {
  return (
    <label htmlFor={labelFor} className='py-1 mt-4 font-montserrat font-medium text-white text-left tracking-tight lg:text-base md:text-sm text-xs text-wrap'>{text}</label>
  )
}

const LinkHeader = ({ title, link }) => {
  return (
    <div>
      <a href={link} className='antialiased font-montserrat font-medium pt-2 pb-1 inline-block underline text-white text-wrap lg:text-3xl md:text-2xl sm:text-xl text-lg tracking-tighter hover:drop-shadow-green-glow-lg' >{title}</a>
    </div>
  )
}

const Pill = ({ text }) => {
  return (
    <div className='inline-block font-montserrat font-medium text-white text-xs py-1 px-2 outline outline-green-500 outline-offset-2 bg-slate-700 hover:bg-slate-600 rounded-full cursor-default transition ease-in-out drop-shadow-green-glow hover:drop-shadow-green-glow-lg' >{text}</div>
  )
}

const EditButton = ({ onClick }) => {
  return (
    <div className='absolute top-0 right-0'>
      <input type='button' value='Edit' onClick={onClick} className='py-2 px-2 shadow border border-black rounded-lg text-white font-montserrat leading-tight bg-green-700 active:bg-green-800 opacity-25 hover:opacity-100 hover:px-3 transition-all' ></input>
    </div>
  )
}

const AddButton = ({ onClick }) => {
  return (
    <div className='float-right'>
      <input type='button' value='Add' onClick={onClick} className='py-2 px-2 shadow border border-black rounded-lg text-white font-montserrat leading-tight bg-green-700 active:bg-green-800 opacity-25 hover:opacity-100 hover:px-3 transition-all' ></input>
    </div>
  )
}

export { Subtitle, Header, SubHeader, Paragraph, Label, LinkHeader, Pill, EditButton, AddButton };