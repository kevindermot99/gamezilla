import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/banner.jpg'
import { PiArrowCounterClockwiseFill } from "react-icons/pi";
import { PiArrowClockwiseFill } from "react-icons/pi";


function Home() {
  return (
    <div className=' h-svh overflow-y-auto flex flex-col text-text-color'>
      {/* MENU */}
      <Menu />
      <div className='relative w-full h-fit min-h-[630px] '>
        <img src={bannerImg} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top    ' />
        <div className='relative z-10 w-full h-full bg-body-color/45 flex flex-col items-start justify-end gap-3 px-12 py-3 '>
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

          <div className='absolute right-12 mb-20 w-[30%] max-w-[350px] bg-transparent max-lg:hidden overflow-clip '>
            <h1 className='text-base font-medium text-text-color/80 '>Screenshots</h1>
            <div className='w-full h-full overflow-x-auto flex items-center justify-start gap-2 py-3'>
              <img src={'https://media.moddb.com/cache/images/members/1/422/421372/thumb_620x2000/bf4_2013-11-24_12-16-14-09.jpg'} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
              <img src={'https://www.ps3blog.net/wp-content/uploads/Alley.jpg'} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
              <img src={'https://www.newgamenetwork.com/images/uploads/gallery/BF4/Battlefield4PC24.jpg'} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
              <img src={'https://www.newgamenetwork.com/images/uploads/gallery/Battlefield3/bf3%202011-11-05%2016-39-32-61.jpg'} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
              <img src={'https://www.newgamenetwork.com/images/uploads/gallery/Battlefield3/battlefield3_19.jpg'} className='h-32 w-fit object-cover rounded-2xl ' alt="" />
            </div>

          </div>

          <div className='bg-transparent self-center my-4 flex  gap-2'>
            <button className='bg-stone-400/20 hover:bg-stone-200/30 backdrop-blur-sm flex items-center p-2 rounded-full font-bold active:scale-110 transition text-2xl'><PiArrowCounterClockwiseFill /></button>
            <button className='bg-stone-400/20 hover:bg-stone-200/30 backdrop-blur-sm flex items-center p-2 rounded-full font-bold active:scale-110 transition text-2xl'><PiArrowClockwiseFill /></button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home