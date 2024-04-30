import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Games } from '../constants/data';
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { TbLoader2 } from "react-icons/tb";

function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState('');
  const [modal, setModal] = useState(false)
  const [OpenedModalId, setOpendModalId] = useState('')

  // checking logged in user
  useEffect(() => {
    const userId = localStorage.getItem('gamezillaUserId')
    if (userId) {
      setUserId(userId)
    }
    else {
      setUserId('none')
    }
  }, [])


  const handleLoading = () => {
    setIsLoading(true)
  }

  const id = localStorage.getItem("BannerMovieId") || '1';
  const bannerGame = Games.find(game => game.id === id)

  return (
    <div className={`relative h-svh flex flex-col text-text-color ${modal && 'overflow-y-clip'}`} >


      {/* MENU */}
      <Menu userId={userId} />
      {bannerGame &&
        <div className='relative w-full h-fit min-h-[600px] overflow-clip bg-body-color '>
          <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 z-10 ${!isLoading ? 'opacity-100 z-10 ' : 'opacity-0 -z-10 '}`}>
            <TbLoader2 className='animate-spinLoader text-text-color-light text-[40px] ' />
          </div>
          <img onLoad={handleLoading} src={bannerGame.banner} className='absolute top-0 left-0 z-0 w-full h-full object-cover object-top select-none opacity-45 ' />
          <div className={`relative w-full h-full flex flex-col items-start justify-end p-12 max-sm:p-5 z-10 ${isLoading ? 'opacity-100 z-10 ' : 'opacity-0 -z-10 '}`}>
            <h1 className='font-extrabold text-[65px] transition leading-[80x] lg:max-w-[1000px] whitespace-break-spaces break-words truncate max-w-full max-md:text-[35px] max-md:leading-[33px] line-clamp-2 '>
              {bannerGame.title}
            </h1>
            <p className='font-light text-base max-w-[650px] tracking-wide leading-relaxed mb-4  line-clamp-3'>
              {bannerGame.description}
            </p>
            <div className='flex max-sm:flex-wrap gap-2 items-start justify-start mb-4'>
              {Object.values(bannerGame.genres).map((genre, index) => (
                <span key={index} className='bg-stone-200/20 hover:bg-stone-200/50 px-3 py-1 text-white/60  ring-1 ring-stone-300/30 capitalize rounded-full text-xs cursor-pointer font-light backdrop-blur-sm'>{genre}</span>
              ))}
            </div>
            <div className='flex max-sm:flex-wrap items-center gap-2 max-sm:gap-0'>
              <button className='bg-white text-black    h-[45px] max-sm:w-full flex items-center max-sm:justify-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>Download</button>
              <Link to={`/game/${bannerGame.id}`} className='bg-stone-200/20 hover:bg-stone-200/40 text-white/60 h-[45px] ring-1 ring-stone-300/30 max-sm:w-full backdrop-blur-sm flex items-center max-sm:justify-center px-9 rounded-full text-lg font-bold active:scale-95  transition mt-2 '>About</Link>
              <div className='relative w-fit group h-fit min-h-[45px] max-sm:hidden flex items-end ml-1'>
                <p className='absolute bottom-[55px] -left-[30px] whitespace-nowrap bg-stone-200/10 backdrop-blur-md py-2 px-4 rounded-full text-sm font-medium tracking-wide  text-text-color/70 pointer-events-none opacity-0 scale-95 transition group-hover:opacity-100 group-hover:scale-100 shadow-lg text-center '>Most Downloaded Badge</p>
                <FaMedal className='text-stone-200/30 text-[35px] cursor-help transition group-hover:text-stone-200/70 group-hover:scale-105 ' />
              </div>
            </div>
          </div>

        </div>
      }

      {/* Order By Downloads */}
      <div className='p-12 pb-0 max-sm:p-5 max-w-[1500px] mx-auto'>
        <h1 className='text-2xl tracking-wide font-bold '><span className='text-text-color-light/40 '>#</span>  Recommended</h1>
        <div className='grid grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 my-8 gap-3'>
          {Games.map((game, index) => (
            <Link key={index} to={`/game/${game.id}`} className='group flex flex-col h-fit'>
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

      {/* Order By Date */}
      <div className='p-12 max-sm:p-5 max-w-[1500px] mx-auto'>
        <h1 className='text-2xl tracking-wide font-bold '><span className='text-text-color-light/40 '>#</span>  Newly Added</h1>
        <div className='grid grid-cols-7 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 my-8 gap-3'>
          {Games.map((game, index) => (
            <Link key={index} to={`/game/${game.id}`} className='group flex flex-col h-fit'>
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