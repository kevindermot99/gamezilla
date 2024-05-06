import React, { useState } from 'react'
import { TbLoader2 } from "react-icons/tb";
import { PiSpinnerGapLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";


function SquareImage({src, title, opacity}) {
    const [loading, setLoading] = useState(true)

    const handleLoad = () => {
        setLoading(false)
    }
  return (
    <div className={`relative flex w-full h-full rounded-xl dark:opacity-50 opacity-85 transition-all duration-300 hover:opacity-100 cursor-pointer`} title={title}>
        {loading && <div className='w-full h-full absolute dark:bg-body-color bg-white ring-2 ring-white dark:ring-body-color flex justify-center items-center rounded-xl '><CgSpinner className='animate-spinLoader text-text-color-light/90 text-[40px]' /></div> }
        <img src={src} className='h-full w-full object-cover object-top rounded-xl' onLoad={handleLoad} />
    </div>
  )
}

export default SquareImage