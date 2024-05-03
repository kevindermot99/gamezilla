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


  const bannerGameId = "5"
  const bannerGame = Games.find(game => game.id === bannerGameId)


  return (
    <div className={`relative h-svh flex text-text-color`} >

      <div className='w-fit min-w-fit'>
        <Sidebar />
      </div>

      <div className='w-fit h-full overflow-y-auto pb-10 bg-body-color '>

        {/* MENU */}
        <Menu userId={userId} />
        <div className='h-fit min-h-[400px] w-full bg-transparent '>
          
        </div>

        {/* publishers */}
        <div className='px-12 pt-5 max-sm:p-5 max-w-[1500px] h-fit mx-auto'>
          <h1 className='text-base tracking-wide font-semibold p-2'>Publishers</h1>
          <div className='overflow-x-auto snap-x snap-mandatory grid grid-flow-col-dense mt-5 gap-1 min-h-[250px] h-fit '>
            {Games.map((game, index) => (
              <Link key={index} to={`/game/${game.id}`} className='group px-1 snap-start p-1 flex flex-col justify-start items-start h-full w-fit'>
                <div className='relative p-1 h-[160px] w-[160px] ring-2 ring-transparent group-hover:ring-main-color rounded-full'>
                  <img src={game.poster} className='pointer-events-none bg-gradient-to-br from-body-color to-border-line-color  aspect-square h-full w-full object-cover object-top rounded-full opacity-85 group-hover:opacity-65  ' />
                </div>
                <h1 className='font-normal text-base p-1 truncate max-w-[170px] pt-2'>
                  {game.title}
                </h1>
                <p className='font-bold text-sm text-text-color-light  px-1 '>23,943 Games</p>
              </Link>
            ))}

          </div>
        </div>

        {/* Recommended*/}
        <div className='px-12 pt-5 max-sm:p-5 mt-4 max-w-[1500px] h-fit mx-auto'>
          <h1 className='text-base tracking-wide font-semibold p-2'>Recommended</h1>
          <div className='overflow-x-auto snap-x snap-mandatory p-2 grid grid-flow-col-dense  gap-1 min-h-[250px] h-fit '>
            {Games.map((game, index) => (
              <Link key={index} to={`/game/${game.id}`} className='group snap-start p-1 flex flex-col justify-start items-start h-full w-fit'>
                <div className='relative p-[2px] h-[230px] w-[180px] ring-2 ring-transparent group-hover:ring-main-color rounded-2xl'>
                  <img src={game.poster} className='pointer-events-none bg-container-color aspect-square h-full rounded-2xl  w-full object-cover object-top opacity-85 group-hover:opacity-65  ' />
                </div>
                <h1 className='font-normal text-base p-1 truncate max-w-[170px] pt-2 '>
                  {game.title}
                </h1>
                <p className='font-bold text-sm text-green-600 px-1 '>$ 0.00</p>

              </Link>
            ))}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Home