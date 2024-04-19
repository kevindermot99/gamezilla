import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
// importing images

function Pagez() {
  return (
    <div className=' h-svh overflow-y-auto flex flex-col '>
      <Menu />
      {/* HERO */}
      <section className='overflow-clip min-h-[450px] max-w-[1500px] mx-auto flex items-center py-[40px] px-[25] justify-between max-lg:hidden '>
        <div>

        </div>
        <div className='w-fit flex flex-col items-center gap-2 '>
          <h1 className='text-center font-SulphurPoint font-bold text-[70px] leading-[67px] capitalize '>Explore the Giant <br />Free Book Collection </h1>
          <p className='text-center font-SulphurPoint font-bold text-lg max-w-[500px]'>A place where stories meet the book intusiasts, Pagez is Free to every one Start your journey today</p>
          <Link to={`/`} className={`h-full w-fit flex items-center px-5 py-2 bg-main-color text-white text-base font-semibold tracking-tight rounded-full mt-4`}>Try Pagez Today</Link>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default Pagez