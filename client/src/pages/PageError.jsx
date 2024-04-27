import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageError() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'Page Error 404';
  }, [])


  return (
    <div className='p-5 font-mono text-lg leading-relaxed text-light-text-color '>
      <strong className='font-mono '>404 not found,</strong> the path <strong className=' font-mono'>{location.pathname}</strong> is not a GameGrid Route. <a href="/" className='text-main-color underline font-bold font-mono'>click here</a> to exit.
    </div>
  )
}

export default PageError