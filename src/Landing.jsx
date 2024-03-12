import { React, useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pagesLogo from "./assets/images/pagez-logo.png"
import screenShoot from "./assets/images/screenshoot.png"
import searchbar from  "./assets/images/searchbar.png"
import { GoArrowUpRight } from "react-icons/go";
import Feature from './components/Feature'

function Landing() {

  const HeroGradientText = 'text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-700 max-sm:to-gray-800'

  return (
    <div className=' overflow-clip pb-[100px]'>

      <nav className="flex justify-between items-center py-4 px-5 max-w-[1500px] m-auto sticky top-0 bg-white z-10 bg-opacity-85 backdrop-blur-lg">
        <div className='flex justify-center items-center'>
          <Link to="/" className='flex justify-start items-center gap-2 text-base font-medium mr-6 '>
            <img src={pagesLogo} alt="Logo" className='h-9' />
            <p className='logoText'>Pagez</p>
          </Link>
          
        </div>
        <div className='flex gap-1 justify-center items-center'>
        <Link to="/" className='linkText max-lg:hidden'>Overview</Link>
          <Link className='linkText max-lg:hidden'>Features</Link>
          <Link className='linkText max-lg:hidden'>Creator</Link>
          <Link className='linkText max-lg:hidden'>Source code <GoArrowUpRight /></Link>
          <div>|</div>
          <Link to="" className='linkText'>Sign in</Link>
          <Link to="" className='px-4 py-2 bg-main-color font-medium text-sm text-white rounded-lg transition hover:opacity-90 max-sm:hidden'>Get Started Today</Link>
        </div>
      </nav>

      <section className=' flex flex-col items-center justify-center text-center px-7 relative max-sm:p-0 max-sm:space-y-6 mt-[80px]'>

      
        <h1 className='font-extrabold  text-[90px] text-wrap max-w-[900px] leading-[100px] max-sm:text-[40px] max-sm:leading-[45px] max-sm:mt-0'>
          <span className={`HeroText`}>Infinite </span><span className='text-main-color '>Stories, </span> <br /><span className={`HeroText`}>One Library.</span>
        </h1>
        <p className='text-xl font-normal leading-8 max-w-[400px] text-gray-600 text-wrap mt-[30px] max-sm:m-0'>
          Enjoy Free Novels Online: No Cost, No Limits, Pure Pleasure!
        </p>

        <Link to="/app" className='flex items-center justify-center gap-1 font-medium py-3 px-7 rounded-lg mt-10 transition bg-main-color text-white hover:opacity-90 '>Get Stated Today</Link>

        <div className='gradient-moving-bg shadow-3xl   flex justify-start items-start max-h-[400px]' >
          <img src={screenShoot} loading='lazy' className=' w-full max-w-[1000px] rounded-t-xl ' alt="screenshot" />
        </div>

      </section>

      <section className='w-full h-[100vh] bg-white border-t-[1px] border-gray-300 z-10 flex flex-col items-center justify-start p-7'>
        <h1 className='m-10 text-base font-medium leading-8 text-black text-wrap '>
          1,241 People has started using Pagez since the Launch
        </h1>
      <Feature tip="" title="" description="" image="" />
      </section>
     
    </div>
  )
}

export default Landing