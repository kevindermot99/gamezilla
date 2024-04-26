import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Games } from '../constants/data';
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { TbLoader2 } from "react-icons/tb";



function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setIsLoading(true)
  }

  const id = localStorage.getItem("BannerMovieId") || '1';
  const bannerGame = Games.find(game => game.id === id)

  const handleBanner = (id) => {
    localStorage.setItem("BannerMovieId", id);
  }

  return (
    <div className=' h-svh overflow-y-auto flex flex-col text-text-color'>
      {/* MENU */}
      <Menu />
      {bannerGame &&
        <div className='relative w-full h-fit min-h-[600px] overflow-clip '>
          <div className={`absolute top-0 left-0 bg-body-color w-full h-full flex items-center justify-center transition-opacity duration-500 z-10 ${!isLoading ? 'opacity-100 z-10 ' : 'opacity-0 -z-10 '}`}>
            <TbLoader2 className='animate-spinLoader text-text-color-light text-[40px] ' />
          </div>
          <img onLoad={handleLoading} src={bannerGame.banner} className='absolute top-0 left-0 -z-10 w-full h-full object-cover object-top select-none ' />
          <div className='absolute top-0 w-full h-full left-0 bg-body-color/60'></div>
          <div className={`relative w-full h-full flex flex-col items-start justify-end p-12 max-sm:p-5 z-10 ${isLoading ? 'opacity-100 z-10 ' : 'opacity-0 -z-10 '}`}>
            <h1 className='font-extrabold text-[65px] transition leading-[80x] lg:max-w-[1000px] whitespace-break-spaces break-words truncate max-w-full max-md:text-[35px] max-md:leading-[33px] line-clamp-2 '>
              {bannerGame.title}
            </h1>
            <p className='font-light text-base max-w-[650px] tracking-wide leading-relaxed mb-4  line-clamp-3'>
              {bannerGame.description}
            </p>
            <div className='flex max-sm:flex-wrap gap-1 items-start justify-start mb-4'>
              {Object.values(bannerGame.genres).map((genre, index) => (
                <span key={index} className='bg-stone-200/10 hover:bg-stone-200/20 px-3 py-1 text-white/60 capitalize rounded-full text-xs cursor-pointer font-light backdrop-blur-sm'>{genre}</span>
              ))}
            </div>
            <div className='flex max-sm:flex-wrap items-center gap-2 max-sm:gap-0'>
              <button className='bg-main-color h-[45px] max-sm:w-full flex items-center max-sm:justify-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>Download</button>
              <button className='bg-stone-200/10 hover:bg-stone-200/30 text-white/60 h-[45px] max-sm:w-full backdrop-blur-sm flex items-center max-sm:justify-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>Gameplay</button>
              <div className='relative w-fit group h-fit min-h-[45px] max-sm:hidden flex items-end ml-1'>
                <p className='absolute bottom-[55px] -left-[30px] whitespace-nowrap bg-stone-200/10 backdrop-blur-md py-2 px-4 rounded-full text-sm font-medium tracking-wide  text-text-color/70 pointer-events-none opacity-0 scale-95 transition group-hover:opacity-100 group-hover:scale-100 shadow-lg text-center '>Most Downloaded Badge</p>
                <FaMedal className='text-stone-200/50 text-[35px] cursor-help transition group-hover:text-stone-200/70 group-hover:scale-105 ' />
              </div>
            </div>
          </div>

        </div>
      }
      <div className='p-12 max-sm:p-5 max-w-[1500px] mx-auto'>
        <h1 className='text-xl tracking-wide font-light '>Recommended</h1>
        <div className='grid grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 my-8 gap-3'>
          {Games.map((game, index) => (
            <Link key={index} to={`/`} className='group flex flex-col' onClick={() => handleBanner(game.id)}>
              <div className='relative p-[2px] h-full w-full ring-2 ring-transparent group-hover:ring-main-color rounded-lg'>
                <img src={game.poster} className='pointer-events-none bg-container-color aspect-square h-full w-full object-cover object-top rounded-lg opacity-85 group-hover:opacity-65  ' />
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