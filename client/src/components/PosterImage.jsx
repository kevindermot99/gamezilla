import React, { useState } from 'react'
import { TbLoader2 } from "react-icons/tb";
import { PiSpinnerGapLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import logo48 from '../assets/logo48.png'


function PosterImage({ src, title }) {
  const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
  }
  return (
    <div className={`relative flex w-full h-[220px] max-sm:h-[270px] overflow-clip cursor-pointer group `} title={title}>
      {loading &&
        <div className='w-full h-full absolute dark:bg-body-color bg-white ring-2 ring-white dark:ring-body-color flex justify-center items-center '>
          {/* <CgSpinner className='animate-spinLoader text-text-color-light/90 text-[40px]' /> */}
          <img src={logo48} className='h-9 animate-ping' />
        </div>}
      <img src={src} className=' h-fit min-h-[100%] min-w-[100%] object-cover object-top transition ' onLoad={handleLoad} />
    </div>
  )
}

export default PosterImage