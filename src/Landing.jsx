import { React, useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pagesLogo from "./assets/images/pagez-logo.png"
import screenShoot from "./assets/images/screenshoot.png"
import { GoArrowUpRight } from "react-icons/go";

function Landing() {

  const HeroGradientText = 'text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-700 max-sm:to-gray-800'

  return (
    <div className='px-14 max-lg:px-5 overflow-clip pb-[100px]'>

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
          <Link to="" className=' text-black font-normal text-sm transition hover:text-main-color max-sm:px-4'>Sign in</Link>
          <Link to="" className='px-4 py-3 ml-5 bg-main-color font-medium text-sm text-white rounded-lg transition hover:opacity-90 max-sm:hidden'>Get Started</Link>
        </div>
      </nav>

      <section className=' flex flex-col items-center justify-center text-center p-7 relative max-sm:p-0 max-sm:space-y-6'>

        <div className="absolute top-56 left-7 -z-[10] size-[700px] blur-3xl opacity-15 rounded-[50%] bg-main-color max-sm:hidden"></div>
        <div className="absolute -bottom-10 right-7 -z-[10] size-[700px] blur-3xl opacity-15 rounded-[50%] bg-main-color max-sm:hidden"></div>

        <h1 className='capitalize font-extrabold  text-[90px] text-wrap max-w-[900px] leading-[90px] mt-[50px] max-sm:text-[40px] max-sm:leading-[45px] max-sm:mt-0'>
          <span className={`HeroText`}>dive into The </span><span className='text-main-color '>ocean</span> <span className={`HeroText`}>of Free novels</span>
        </h1>
        <p className='text-2xl  font-normal leading-6 max-w-[800px] text-black text-wrap m-[40px] max-sm:m-0'>
          Read or Download Novels online at $0.00 cost,  necessitatibus sed dolorum perferendis in Voluptas, deleniti?
        </p>
        <div className='gradient-moving-bg shadow-xl flex justify-start items-start' >
          <img src={screenShoot} loading='lazy' className=' w-full max-w-[1000px] rounded-xl' alt="screenshot" />
        </div>

        <Link to="/app" className='flex items-center justify-center gap-1 font-medium py-3 px-7 rounded-lg mt-10 transition opacity-50 hover:bg-main-color hover:text-white hover:opacity-100 '>Open Pagez App <GoArrowUpRight /></Link>
      </section>

     
    </div>
  )
}

export default Landing