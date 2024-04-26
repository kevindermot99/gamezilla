import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Games } from '../constants/data';
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function Home() {

  const id = '4'
  const bannerGame = Games.find(game => game.id === id)
  console.log(bannerGame)

  return (
    <div className=' h-svh overflow-y-auto flex flex-col text-text-color'>
      {/* MENU */}
      <Menu />
      {bannerGame &&
        <div className='relative w-full h-fit min-h-[600px] overflow-clip '>
          <img src={bannerGame.banner} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top select-none ' />
          <div className='absolute top-0 w-full h-full left-0 bg-body-color/60   '></div>
          <div className='relative z-10 w-full h-full flex flex-col items-start justify-end gap-3 p-12'>
            <h1 className='font-extrabold text-[65px] transition leading-[70px] lg:max-w-[1000px] whitespace-break-spaces break-words truncate max-w-full max-md:text-[35px] max-md:leading-[33px] line-clamp-2 '>
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
              <div className='relative w-fit group h-full flex items-end ml-3 pb-1'>
                <p className='absolute bottom-[55px] -left-[30px] whitespace-nowrap bg-stone-200/10 backdrop-blur-md py-2 px-3 rounded-xl text-sm font-medium tracking-wide  text-text-color/70 pointer-events-none opacity-0 scale-95 transition group-hover:opacity-100 group-hover:scale-100 shadow-lg text-center '>Most Downloaded Badge</p>
                <FaMedal className='text-white/60 text-[35px] cursor-help transition group-hover:text-white/80 group-hover:scale-105 ' />
              </div>
            </div>
          </div>

        </div>
      }
      <div className='p-12 max-w-[1400px] mx-auto'>
        <h1 className='text-xl '>Explore Games</h1>
        <div className='grid grid-cols-7 my-8 gap-2'>
          {Games.map((game, index) => (
            <Link key={index} to={`/`} className='group'>
              <div className='p-[2px] ring-2 ring-transparent group-hover:ring-main-color rounded-lg'>
                <img src={game.poster} className='bg-container-color aspect-square object-cover object-top rounded-lg opacity-85 group-hover:opacity-65  ' />
              </div>
              <h1 className='font-light text-sm p-1 break-words whitespace-break-spaces  '>
                {game.title}
              </h1>
            </Link>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Home