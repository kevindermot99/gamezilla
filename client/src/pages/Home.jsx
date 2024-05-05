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
import Button from '../components/Button';

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
    autoplay: {
      delay: 1300,
      pauseOnMouseEnter: true
    }

  })

  return (
    <div className={`relative h-svh flex flex-col overflow-x-clip text-text-color mt-[150px]`} >

      <Menu userId={userId} />

      <div className='w-full h-fit flex flex-col px-10'>
        <h1 className='text-[28px] leading-[32px] capitalize font-DMsans font-bold w-full text-center text-text-color'>Most Downloaded Games <br /> of all time.</h1>
        <h1 className='text-[14px] leading-[15px] capitalize font-DMsans font-medium w-full text-center text-text-color-light pt-2 mb-4'>Top ranked by downloads count</h1>
        <div className="h-fit overflow-x-auto px-2">
          <div className="w-fit h-full flex items-center justify-center gap-1 p-3">
            {sortedGames.slice(0, 20).map((game, index) => (
              <Link to={`/game/${game.id}`} className="group h-full w-full rounded-lg cursor-pointer ">
                <div className='w-[180px] h-[250px] ring-2 rounded-lg ring-transparent transition group-hover:ring-main-color p-[2px]'>
                  <img src={game.poster} className='w-full h-full rounded-lg object-cover object-top opacity-70' />
                </div>
                <p className='font-DMsans font-bold text-[13px] line-clamp-1 m-1'>{game.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home