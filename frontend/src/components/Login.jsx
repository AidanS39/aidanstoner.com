const Login = ({ login, handlers, displayName, statusMessage }) => {
  let display = (
    <div className='place-items-center'>
      <input id='username' type='text' className='block my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25' placeholder='username' value={login.username} onChange={handlers.onChangeUsername} />
      <input id='password' type='password' className='block my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight hover:border-green-900 focus:border-green-600 focus:outline-none bg-black bg-opacity-25' placeholder='password' value={login.password} onChange={handlers.onChangePassword} />
      <input id='loginButton' type='button' className='block my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight bg-green-700 hover:drop-shadow-green-glow active:bg-green-800' value='Log in' onClick={handlers.onLoginClick} />
    </div>
  )
  if (displayName !== 'Log in') {
    display = (
      <input id='logoutButton' type='button' className='block place-self-center my-4 py-1 px-2 appearance-none shadow border border-black rounded-lg text-white font-montserrat leading-tight bg-green-700 hover:drop-shadow-green-glow active:bg-green-800' value='Log out' onClick={handlers.onLogoutClick} />
    )
  }
  
  const statusDisplay = ( 
      <p className='block place-self-center my-4 py-1 px-2 text-red-700 font-montserrat leading-tight'>{statusMessage}</p>
  )

  return (
    <form className='self-center'>
      {statusDisplay}
      {display}
    </form>
  )
}

export { Login };