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
      <div className='relative w-full h-fit '>
        <img src={bannerImg} className='w-full max-h-[500px] object-cover object-left-top  ' />
      </div>

    </div>
  )
}

export default Home