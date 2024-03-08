import React from 'react'
import { Link } from 'react-router-dom'
import pagesLogo from "./assets/images/pagez-logo.png"

function Landing() {
  return (
    <div className='px-14 '>
      <div className="flex justify-between items-center py-7">
            <div className='flex justify-center items-center gap-5'>
                <Link to="/" className='flex justify-start items-center gap-2 text-base font-medium mr-4'>
                    <img src={pagesLogo} alt="Logo" className='h-9' />
                    <p className='linkText'>Pagez</p>
                </Link>
                <Link to="/" className='linkText'>Overview</Link>
                <Link className='linkText'>Features</Link>
                <Link className='linkText'>Creator</Link>
                <Link className='linkText'>Source code</Link>
            </div>
            <div>
                
            </div>

        </div>
      <h1>Landing</h1>
    </div>
  )
}

export default Landing