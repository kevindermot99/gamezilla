import React, { useState } from 'react'
import { TbLoader2 } from "react-icons/tb";
import { PiSpinnerGapLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";


function SquareImage({src, opacity}) {
    const [loading, setLoading] = useState(true)

    const handleLoad = () => {
        setLoading(false)
    }
  return (
    <div className={`relative flex w-[160px] h-[160px] min-w-[160px] min-h-[160px] aspect-square rounded-xl overflow-clip opacity-${opacity} transition-all duration-300 hover:opacity-100 cursor-pointer`}>
        {loading && <div className='w-full h-full absolute bg-body-color flex justify-center items-center rounded-xl '><CgSpinner className='animate-spinLoader text-text-color-light/90 text-[40px] border-2 border-body-color' /></div> }
        <img src={src} className='h-full w-full object-cover object-top rounded-xl' onLoad={handleLoad} />
    </div>
  )
}

export default SquareImage