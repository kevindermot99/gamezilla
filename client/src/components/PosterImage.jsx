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
    <div className={`relative flex w-full h-[220px] overflow-clip rounded-xl cursor-pointer group `} title={title}>
      {loading &&
        <div className='w-full h-full absolute bg-gradient-to-br from-container-color to-body-color flex justify-center items-center animate-pulse '>
          
        </div>}
      <img src={src} className={` h-fit min-h-[100%] min-w-[100%] object-cover object-top transition ${loading ? 'opacity-0' : ''} `} onLoad={handleLoad} />
    </div>
  )
}

export default PosterImage