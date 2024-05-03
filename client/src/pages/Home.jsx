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
        <></>
      }

      {/* Order By Downloads */}
      <div className='px-12 py-5 pb-0 max-sm:p-5 max-w-[1500px] h-fit mx-auto'>
        <h1 className='text-2xl tracking-wide font-bold '><span className='text-text-color-light/40 '>#</span>  Recommended</h1>
        <div className='grid grid-cols-8 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 my-8 gap-2'>
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
      <div className='px-12 py-5 max-sm:p-5 max-w-[1500px] h-fit mx-auto'>
        <h1 className='text-2xl tracking-wide font-bold '><span className='text-text-color-light/40 '>#</span>  Newly Added</h1>
        <div className='grid grid-cols-8 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 my-8 gap-2'>
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