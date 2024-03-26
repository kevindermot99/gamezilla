import React from 'react'
import { useLocation } from 'react-router-dom'

function PageError() {
  const location = useLocation()

  return (
    <div className='p-5 font-mono text-lg leading-relaxed text-black dark:text-white'>
      <strong className='font-mono '>404 not found,</strong> this page <strong className=' font-mono'>{location.pathname}</strong> is not a Pagez Route. <a href="/" className='text-main-color underline font-bold font-mono'>click here</a> to exit.
    </div>
  )
}

export default PageError