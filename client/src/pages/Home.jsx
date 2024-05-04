import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import { Games } from '../constants/data';
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { TbLoader2 } from "react-icons/tb";
import Sidebar from '../components/Sidebar'
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { BsCart } from "react-icons/bs";


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

  // swiper init
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Autoplay, FreeMode],
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2.3,
    loop: true,
    effect: "coverflow",
    spaceBetween: 10,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    // autoplay: {
    //   delay: 1300,
    //   pauseOnMouseEnter: true
    // }

  })

  return (
    <div className={`relative h-svh flex flex-col text-text-color`} >

      <Menu userId={userId} />

      <div className='w-full h-fit'>
        <div className="swiper h-fit">
          <div className="swiper-wrapper w-full h-full px-20 py-4">
            {sortedGames.map((game, index) => (
              <div className="swiper-slide w-full h-[330px] rounded-3xl overflow-clip relative flex flex-col items-start justify-end ">
                <div className='absolute top-0 left-0 right-0 z-10 scale-150 bg-gradient-to-tr from-body-color to-black/10 w-full h-full'></div>
                <img src={game.banner} className='absolute top-0 left-0 right-0 m-auto z-0  bg-gradient-to-br from-container-color to-border-line-color w-full h-full object-cover object-top scale-105' />
                <div className='z-20 py-5 px-9'>
                  <h1 className='font-extrabold text-[30px] tracking-tight leading-tight'>{game.title}</h1>
                  <p className=' line-clamp-2 max-w-[80%] pt-1 font-medium text-[14px] leading-5 capitalize text-text-color/70 '>{game.description}</p>
                  <div className='flex gap-2 py-4'>
                    <Link to={`/game/${game.id}`} className='bg-white/15 hover:bg-white/30 transition text-white backdrop-blur-sm h-9 w-full max-w-[120px] flex items-center justify-center capitalize font-bold text-sm rounded-full'>view</Link>
                    <button className='bg-white h-9 aspect-square flex justify-center items-center rounded-full '>
                      <BsCart className='text-black ' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home