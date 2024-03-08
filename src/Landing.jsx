import React from 'react'
import { Link } from 'react-router-dom'
import pagesLogo from "./assets/images/pagez-logo.png"
import screenShoot from "./assets/images/screenshoot.png"
import { GoArrowUpRight } from "react-icons/go";

function Landing() {
  return (
    <div className='px-14 max-lg:px-5'>

      <nav className="flex justify-between items-center py-7">
        <div className='flex justify-center items-center gap-5'>
          <Link to="/" className='flex justify-start items-center gap-2 text-base font-medium mr-4'>
            <img src={pagesLogo} alt="Logo" className='h-10' />
            <p className='logoText'>Pagez</p>
          </Link>
          <Link to="/" className='linkText transition hover:text-main-color max-lg:hidden'>Overview</Link>
          <Link className='linkText transition hover:text-main-color max-lg:hidden'>Features</Link>
          <Link className='linkText transition hover:text-main-color max-lg:hidden'>Creator</Link>
          <Link className='linkText transition hover:text-main-color max-lg:hidden'>Source code <GoArrowUpRight /></Link>
        </div>
        <div className='flex gap-1 justify-center items-center'>
          <Link to="" className=' text-black font-normal text-lg transition hover:text-main-color'>Sign in</Link>
          <Link to="" className='px-4 py-3 ml-5 bg-main-color font-medium text-lg text-white rounded-lg transition hover:opacity-90 max-sm:hidden'>Create account</Link>
        </div>
      </nav>
      <section className=' flex flex-col items-center justify-center text-center p-7 relative'>

        <div className="absolute top-56 left-7 -z-[10] size-[700px] blur-3xl opacity-15 rounded-[50%] bg-main-color"></div>
        <div className="absolute -bottom-10 right-7 -z-[10] size-[700px] blur-3xl opacity-15 rounded-[50%] bg-main-color"></div>

        <h1 className='capitalize font-semibold text-[70px] text-black text-wrap max-w-[820px] leading-[80px] mt-[50px]'>
          dive into The <span className='text-main-color '>ocean</span> of Free novels
        </h1>
        <p className='text-base  font-normal leading-6 max-w-[800px] text-black text-wrap m-[40px]'>
          Read or Download Novels online at $0.00 cost, Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate at necessitatibus sed dolorum perferendis in Voluptas, deleniti?
        </p>
        <div>
          <img src={screenShoot} className=' w-full max-w-[1000px] shadow-xl rounded-xl mt-4' alt="screenshot" />
        </div>
      </section>
    </div>
  )
}

export default Landing