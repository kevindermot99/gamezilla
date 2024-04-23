import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/banner.jpg'
// importing images


function Home() {
  return (
    <div className=' h-svh overflow-y-auto flex flex-col '>
      {/* MENU */}
      <Menu />
      <div className='relative w-full h-fit min-h-[600px] '>
        <img src={bannerImg} className='absolute top-0 left-0 -z-10 w-full max-h-full object-cover object-left-top  ' />
        <div className='z-40 w-full h-full bg-gradient-to-b from-body-color/80 to-transparent  '>
          
        </div>
      </div>

    </div>
  )
}

export default Home