import React, { useState } from 'react'
import { TbLoader2 } from "react-icons/tb";
import { PiSpinnerGapLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";


function PosterImage({src, title}) {
    const [loading, setLoading] = useState(true)

    const handleLoad = () => {
        setLoading(false)
    }
  return (
    <div className={`relative flex w-full h-full rounded-xl opacity-80 transition-all duration-300 hover:opacity-100 cursor-pointer group`} title={title}>
        {loading && <div className='w-full h-full absolute bg-body-color ring-2 ring-body-color flex justify-center items-center rounded-xl '><CgSpinner className='animate-spinLoader text-text-color-light/90 text-[40px] border-2 border-body-color' /></div> }
        <img src={src} className='h-full w-full object-cover object-top rounded-xl transition group-hover:scale-[1.03] ' onLoad={handleLoad} />
    </div>
  )
}

export default PosterImage