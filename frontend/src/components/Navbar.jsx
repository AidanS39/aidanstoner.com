const Nav = ({ text, onclick }) => {
  return (
    <div className='inline-block content-center h-16 px-2 lg:px-4'>
      <a className='font-montserrat font-medium text-white tracking-wider text-nowrap hover:cursor-pointer opacity-70 hover:opacity-100 transition-opacity' onClick={onclick} >{text}</a>
    </div>
  )
}

const Navbar = ({ headers, loginOnClick, displayName }) => {
  
  return (
    <div className='sticky flex flex-col justify-center top-0 z-50 bg-black bg-opacity-50 hover:bg-opacity-100 hover:bg-zinc-900 transition backdrop-blur-sm items-center min-h-16 drop-shadow-md border-b border-zinc-500' >
      <div className='flex flex-wrap flex-grow max-w-[90rem] xl:min-w-[80rem] place-self-center'>
        <div className='inline-block content-center h-16 px-4 lg:px-8'>
          <a className='font-montserrat font-medium text-xl text-white tracking-wider cursor-default opacity-70 hover:opacity-100 transition-opacity text-nowrap' href="/" ><div className='inline'>Aidan</div> <div className='inline font-extrabold'>Stoner</div></a>
        </div>
        {headers.map(header =>
          <Nav key={header.text} text={header.text} onclick={header.onclick} />
        )}
        <div className='grow content-center h-16 px-8 text-right'>
          <a className='font-montserrat font-medium text-white tracking-wider hover:cursor-pointer opacity-70 hover:opacity-100 transition-opacity text-nowrap' onClick={loginOnClick} >{displayName}</a>
        </div>
      </div>
    </div>
  )
}

export { Navbar };