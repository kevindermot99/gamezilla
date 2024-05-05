import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Games } from '../constants/data';
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { TbLoader2 } from "react-icons/tb";
import Sidebar from '../components/Sidebar'
// import Swiper from 'swiper';
// import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import { BsCart } from "react-icons/bs";
import ButtonLink from '../components/ButtonLink';
import ButtonClick from '../components/ButtonClick';

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

  const sortedGames = Games.sort(() => Math.random() - 0.5);

  // // swiper init
  // const swiper = new Swiper('.swiper', {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination, Autoplay, FreeMode],
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: false,
  //   slidesPerView: 2.3,
  //   loop: true,
  //   effect: "coverflow",
  //   spaceBetween: 10,
  //   coverflowEffect: {
  //     rotate: 0,
  //     stretch: 0,
  //     depth: 0,
  //     modifier: 1,
  //     slideShadows: false,
  //   },
  //   autoplay: {
  //     delay: 1300,
  //     pauseOnMouseEnter: true
  //   }

  // })

  return (
    <div className={`relative h-svh flex flex-col overflow-x-clip text-text-color mt-[180px]`} >
      <Menu userId={userId} />
      <div className='w-full h-fit flex flex-col py-8 gap-5 mb-10'>
        
        <div className='w-full h-fit flex items-center justify-center flex-col gap-4 z-20'>
          <h1 className='text-[60px] leading-[62px] font-montserrat capitalize font-bold text-center'>Open-Source Game Store <br />for Gamers</h1>
          <p className='font-DMsans font-semibold text-text-color-light text-[17px] text-center max-w-[400px]'> Browse, Download, List, Request a game,... all for absolutely Free of charge.</p>
        </div>
        
        <div className='w-full translate-y-12 z-10 px-4'>
          <form className='relative w-full flex items-center justify-center'>
            <label className='w-full h-[55px] max-w-[500px] relative'>
            <input type="search" name="search" autoComplete='off' placeholder='Search for Games' className=' placeholder:text-text-color-light bg-text-color py-0 px-8 text-black text-lg tracking-tight font-medium rounded-2xl w-full h-[55px] ring-8 ring-transparent transition duration-500 focus:ring-4 focus:ring-main-color' />
            <span className='absolute top-0 bottom-0 right-2 m-auto flex h-fit  '>
              <ButtonClick title={'Search'} type={'submit'} />
            </span>
            </label>
          </form>
        </div>

        <div className='flex items-center justify-center flex-col gap-2 overflow-clip'>
          <div className='flex items-start justify-center gap-2 overflow-clip'>
          {sortedGames.slice(9, 19).map((game, index) => (
            <Link to={`/game/${game.id}`}>
            <img src={game.poster} key={index} className='w-[160px] min-w-[160px] aspect-square object-top object-cover rounded-xl opacity-40 transition-all duration-300 hover:opacity-100 cursor-pointer ' />
            </Link>
          ))}
          </div>
          <div className='flex items-start justify-center gap-2 overflow-clip'>
          {sortedGames.slice(0, 9).map((game, index) => (
            <Link to={`/game/${game.id}`}>
            <img src={game.poster} key={index} className='w-[160px] min-w-[160px] aspect-square object-top object-cover rounded-xl opacity-40 transition-all duration-300 hover:opacity-100 cursor-pointer ' />
            </Link>
          ))}
          </div>
        </div>
      
      </div>
      <div className='w-full h-full'>
        <div className='w-full h-fit flex flex-col px-10'>
          <h1 className='text-[28px] leading-[32px] capitalize font-DMsans font-bold w-full text-center tracking-tight text-text-color'>Most Downloaded Games <br /> of all time.</h1>
          <h1 className='text-[14px] leading-[15px] capitalize font-DMsans font-medium w-full text-center text-text-color-light pt-2 mb-4'>Top ranked by downloads count</h1>
          <div className="h-fit overflow-x-auto ">
            <div className="w-fit h-full flex items-center justify-center gap-1 px-2 py-3">
              {sortedGames.slice(0, 20).map((game, index) => (
                <Link to={`/game/${game.id}`} className="group h-full w-full rounded-lg cursor-pointer ">
                  <div className='w-[180px] aspect-square ring-2 rounded-lg ring-transparent transition group-hover:ring-main-color p-[2px]'>
                    <img src={game.poster} className='w-full h-full rounded-lg object-cover object-top opacity-80' />
                  </div>
                  <p className='font-DMsans font-bold text-[13px] line-clamp-1 m-1'>{game.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home