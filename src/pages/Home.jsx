import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/banner.jpg'
import { FaCirclePlay } from "react-icons/fa6";


function Home() {
  return (
    <div className=' h-svh overflow-y-auto flex flex-col text-text-color'>
      {/* MENU */}
      <Menu />
      <div className='relative w-full h-fit min-h-[630px] '>
        <img src={bannerImg} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top    ' />
        <div className='relative z-10 w-full h-full bg-body-color/65 flex flex-col items-start justify-end gap-3 px-12 py-3 '>
          <h1 className='font-extrabold text-[90px] leading-[80px] whitespace-break-spaces break-words truncate max-w-full max-md:text-[35px] max-md:leading-[33px] line-clamp-2 '>
            BattleField 4
          </h1>
          <p className='font-light text-base max-w-[500px] tracking-wide leading-relaxed '>a 2013 first-person shooter video game developed by DICE and published by Electronic Arts.</p>
          <div className='flex gap-1 items-start justify-start  '>
            <span className='bg-stone-200/10 hover:bg-stone-200/30 px-3 py-1 text-white/60 capitalize rounded-full text-xs cursor-pointer font-light backdrop-blur-sm'>action</span>
            <span className='bg-stone-200/10 hover:bg-stone-200/30 px-3 py-1 text-white/60 capitalize rounded-full text-xs cursor-pointer font-light backdrop-blur-sm'>Shooter</span>
            <span className='bg-stone-200/10 hover:bg-stone-200/30 px-3 py-1 text-white/60 capitalize rounded-full text-xs cursor-pointer font-light backdrop-blur-sm'>Mission</span>
            <span className='bg-stone-200/10 hover:bg-stone-200/30 px-3 py-1 text-white/60 capitalize rounded-full text-xs cursor-pointer font-light backdrop-blur-sm'>Advanture</span>
          </div>
          <div className='flex items-center gap-2'>
            <button className='bg-main-color h-[45px] flex items-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>Download</button>
            <button className='bg-stone-400/50 h-[45px] backdrop-blur-sm flex items-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>Open Trailer</button>
          </div>

          <div className='absolute right-12 mb-14 w-[30%] max-w-[350px] py-2 bg-transparent max-lg:hidden flex items-center justify-start gap-2 overflow-clip overflow-x-auto  '>
            <img src={bannerImg} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
            <img src={bannerImg} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
            <img src={bannerImg} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
          </div>

        <div className='bg-transparent self-center my-4 '>
          
        </div>

        </div>
      </div>

    </div>
  )
}

export default Home