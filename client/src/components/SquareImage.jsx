import React, { useState } from 'react'
import { TbLoader2 } from "react-icons/tb";
import { PiSpinnerGapLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import logo48 from '../assets/logo48.png'


function SquareImage({ src, title, opacity }) {
  const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
  }
  return (
    <div className={`relative flex w-full h-full dark:opacity-50 opacity-85 transition-all duration-300 hover:opacity-100 cursor-pointer group`} title={title}>
      {loading && 
      <div className='w-full h-full absolute dark:bg-body-color bg-white ring-2 ring-white dark:ring-body-color flex justify-center items-center '>
        {/* <CgSpinner className='animate-spinLoader text-text-color-light/90 text-[40px]' /> */}
        <img src={logo48} className='h-5 animate-ping' />
      </div>}
      <img src={src} className='h-full w-full object-cover object-top  group-hover:scale-[1.03] transition' onLoad={handleLoad} />
    </div>
  )
}

export default SquareImage