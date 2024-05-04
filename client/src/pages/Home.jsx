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
    //   delay: 2000,
    //   pauseOnMouseEnter: true
    // }

  })

  return (
    <div className={`relative h-svh flex flex-col text-text-color`} >

      <Menu userId={userId} />

      <div className='w-full h-fit'>
        <div className="swiper ">
          <div className="swiper-wrapper w-full h-fit px-20 py-2">
            {Games.map((game, index) => (
              <Link to={`/game/${game.id}`} className="swiper-slide w-full h-full rounded-2xl overflow-clip relative flex flex-col items-start justify-end transition ring-[2px] ring-transparent hover:ring-main-color ">
                <div className='absolute top-0 left-0 right-0 z-10 scale-110  bg-gradient-to-tr from-body-color to-transparent w-full h-full'></div>
                <img src={game.banner} className='absolute top-0 left-0 right-0 z-0  bg-gradient-to-br from-container-color to-border-line-color w-full h-full object-cover scale-105 rounded-2xl' />
                <div className='z-20 p-8'>
                  <h1 className='font-extrabold text-[35px] tracking-tight leading-tight'>{game.title}</h1>
                  <p className=' line-clamp-2 max-w-[80%] font-medium text-sm leading-4 capitalize text-text-color/70 '>{game.description}</p>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home