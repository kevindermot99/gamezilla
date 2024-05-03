import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Games } from '../constants/data';
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { TbLoader2 } from "react-icons/tb";
import Sidebar from '../components/Sidebar'

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


  const bannerGameId = "1"
  const bannerGame = Games.find(game => game.id === bannerGameId)


  return (
    <div className={`relative h-svh flex text-text-color`} >

      <div className='w-fit min-w-fit'>
        <Sidebar />
      </div>

      <div className='w-fit h-full overflow-y-auto'>

        {/* MENU */}
        <Menu userId={userId} />
        <div className='h-fit min-h-[400px] w-full bg-gradient-to-b from-body-color to-transparent'>
          <img src={bannerGame.banner} alt="" className='fixed top-0 left-0 -z-10 opacity-5 blur-lg ' />
        </div>

        {/* publishers */}
        <div className='px-12 pt-5 max-sm:p-5 max-w-[1500px] h-fit mx-auto'>
          <h1 className='text-2xl tracking-wide font-bold '><span className='text-text-color-light/40 '>#</span>  Publishers</h1>
          <div className='grid grid-cols-8 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 mt-5 gap-2  '>
            {Games.map((game, index) => (
              <Link key={index} to={`/game/${game.id}`} className='group flex flex-col h-fit'>
                <div className='relative p-1 h-full w-full ring-2 ring-transparent group-hover:ring-main-color rounded-full'>
                  <img src={game.poster} className='pointer-events-none bg-container-color aspect-square h-full w-full object-cover object-top rounded-full opacity-85 group-hover:opacity-65  ' />
                </div>
                <h1 className='font-light text-sm p-1 break-words whitespace-break-spaces  '>
                  {game.title}
                </h1>
              </Link>
            ))}

          </div>
        </div>

        {/* Recommended*/}
        <div className='px-12 pt-5 max-sm:p-5 mt-8 max-w-[1500px] h-fit mx-auto'>
          <h1 className='text-2xl tracking-wide font-bold '><span className='text-text-color-light/40 '>#</span>  Recommended</h1>
          <div className='grid grid-cols-8 max-xl:grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 mt-5 gap-2'>
            {Games.map((game, index) => (
              <Link key={index} to={`/game/${game.id}`} className='group flex flex-col h-fit'>
                <div className='relative p-1 h-full w-full ring-2 ring-transparent group-hover:ring-main-color rounded-sm'>
                  <img src={game.poster} className='pointer-events-none bg-container-color aspect-square h-full rounded-sm w-full object-cover object-top opacity-85 group-hover:opacity-65  ' />
                </div>
                <h1 className='font-light text-sm p-1 break-words whitespace-break-spaces  '>
                  {game.title}
                </h1>
              </Link>
            ))}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Home