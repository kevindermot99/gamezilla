import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Games } from '../constants/data';
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";


function Home() {

  const id = '1'
  const bannerGame = Games.find(game => game.id === id)
  console.log(bannerGame)

  return (
    <div className=' h-svh overflow-y-auto flex flex-col text-text-color'>
      {/* MENU */}
      <Menu />
      {bannerGame &&
        <div className='relative w-full h-fit min-h-[600px] overflow-clip '>
          <img src={bannerGame.banner} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top select-none ' />
          <div className='absolute top-0 w-full h-full left-0 bg-gradient-to-tr from-body-color to-body-color/30  '></div>
          <div className='relative z-10 w-full h-full flex flex-col items-start justify-end gap-3 p-12'>
            <h1 className='font-extrabold text-[75px] transition leading-[85px] lg:max-w-[1000px] whitespace-break-spaces break-words truncate max-w-full max-md:text-[35px] max-md:leading-[33px] line-clamp-2 '>
              {bannerGame.title}
            </h1>
            <p className='font-light text-base max-w-[600px] tracking-wide leading-relaxed mb-2 '>
              {bannerGame.description}
            </p>
            <div className='flex gap-1 items-start justify-start mb-2'>
              {Object.values(bannerGame.genres).map((genre, index) => (
                <span key={index} className='bg-stone-200/10 hover:bg-stone-200/20 px-3 py-1 text-white/60 capitalize rounded-full text-xs cursor-pointer font-light backdrop-blur-sm'>{genre}</span>
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <button className='bg-main-color h-[45px] flex items-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>Download</button>
              <button className='bg-stone-200/10 hover:bg-stone-200/20 text-white/60 h-[45px] backdrop-blur-sm flex items-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>Gameplay</button>
            </div>
          </div>
          <div className='absolute z-10 bottom-12 right-12 w-fit group '>
            <p className='absolute -top-[50px] -right-5 whitespace-nowrap bg-body-color/50 backdrop-blur-md py-2 px-3 rounded-xl text-sm text-text-color/70 pointer-events-none opacity-0 scale-95 transition group-hover:opacity-100 group-hover:scale-100 shadow-lg'>This Game is the current Most downloaded Game</p>
            <FaMedal className='text-white/40 text-[40px] cursor-help transition group-hover:text-white/60 group-hover:scale-110   ' />
          </div>
        </div>
      }

    </div>
  )
}

export default Home