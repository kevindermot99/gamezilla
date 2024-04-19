import React from 'react'
import Menu from '../components/Menu'

function Pagez() {
  return (
    <div className=' h-svh overflow-y-auto flex flex-col '>
      <Menu />
      {/* HERO */}
      <section className='overflow-clip min-h-[600px] min-w-[1500px] mx-auto bg-slate-200 flex items-center justify-between '>
        <div></div>
        <div>
          <h1 className='text-center font-semibold  text-[90px] leading-[83px] capitalize '>The largest <br /> Free Book Library <br /> there is. </h1>
        </div>
        <div></div>
      </section>
    </div>
  )
}

export default Pagez