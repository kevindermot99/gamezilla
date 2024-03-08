import React from 'react'
import { Link } from 'react-router-dom'
import pagesLogo from "./assets/images/pagez-logo.png"
import { GoArrowUpRight } from "react-icons/go";

function Landing() {
  return (
    <div className='px-14 max-lg:px-5'>
      <nav className="flex justify-between items-center py-7">
            <div className='flex justify-center items-center gap-5'>
                <Link to="/" className='flex justify-start items-center gap-2 text-base font-medium mr-4'>
                    <img src={pagesLogo} alt="Logo" className='h-9' />
                    <p className='logoText'>Pagez</p>
                </Link>
                <Link to="/" className='linkText transition hover:text-main-color max-lg:hidden'>Overview</Link>
                <Link className='linkText transition hover:text-main-color max-lg:hidden'>Features</Link>
                <Link className='linkText transition hover:text-main-color max-lg:hidden'>Creator</Link>
                <Link className='linkText transition hover:text-main-color max-lg:hidden'>Source code <GoArrowUpRight /></Link>
                <Link className='linkText transition hover:text-main-color max-lg:hidden'>Give a star</Link>
            </div>
            <div className='flex gap-1 justify-center items-center'>
                <Link to="" className=' text-black font-medium text-lg transition hover:text-main-color'>Sign in</Link>
                <Link to="" className='px-4 py-3 ml-5 bg-main-color font-medium text-lg text-white rounded-lg transition hover:opacity-90 max-sm:hidden'>Create account</Link>
            </div>

        </nav>
      <h1>Landing</h1>
    </div>
  )
}

export default Landing