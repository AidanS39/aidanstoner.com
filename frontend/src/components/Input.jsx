const InputLine = ({ id, placeholder, text, handler }) => {
  return (
    <input id={id} placeholder={placeholder} value={text} onChange={handler} className='block mb-4 py-1 px-2 w-2/5 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25'></input>
  )
}

const InputParagraph = ({ id, placeholder, text, handler }) => {
  return (
    <textarea id={id} placeholder={placeholder} value={text} onChange={handler} className='block mb-4 py-1 px-2 w-full h-32 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25'></textarea>
  )
}

const InputDate = ({ id, placeholder, value, handler }) => {
  return (
    <input id={id} placeholder={placeholder} value={value} onChange={handler} type='month' className='block mb-4 py-1 px-2 w-2/5 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25'></input>
  )
}

const InputCheckbox = ({ id, placeholder, value, handler }) => {
  return (
    <input id={id} placeholder={placeholder} value={value} onChange={handler} type='checkbox' className='block mb-4 w-4 h-4 appearance-none shadow border border-black rounded-md hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25'></input>
  )
}

const InputImage = ({ id, placeholder, link, handler }) => {
  // TO DO: implement S3 image saving
  return (
    <input id={id} placeholder={placeholder} type='file' className='block mb-4 py-1 px-2 w-2/5 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25'></input>
  )
}

const InputButton = ({ id, name, handler, color }) => {
  let colorClass = 'bg-green-700 hover:drop-shadow-green-glow active:bg-green-800'
  if (color === "Red") {
    colorClass = 'bg-red-700 hover:drop-shadow-red-glow active:bg-red-800'
  }

  return (
    <input id={id} value={name} type='button' onClick={handler} readOnly className={`inline mb-4 mr-2 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight ${colorClass}`} />
  )
}

export { InputLine, InputParagraph, InputDate, InputCheckbox, InputButton, InputImage };