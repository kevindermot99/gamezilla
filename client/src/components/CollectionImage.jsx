import React, { useState } from 'react'
import { TbLoader2 } from "react-icons/tb";
import { PiSpinnerGapLight } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import logo48 from '../assets/logo48.png'


function CollectionImage({ src, title }) {
  const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
  }
  return (
    <div className={`relative flex w-full h-full group rounded-xl overflow-clip`} title={title}>
      {loading &&
        <div className='w-full h-full absolute bg-gradient-to-b from-stone-200 dark:from-container-color to-stone-50 dark:to-body-color flex justify-center items-center '>
          {/* <CgSpinner className='animate-spinLoader text-text-color-light/90 text-[40px]' /> */}
          {/* <img src={logo48} className='h-9 animate-ping' /> */}
        </div>}
      <img src={src} className={`h-full w-full object-cover object-top transition ${loading ? 'opacity-0' : ''} `} onLoad={handleLoad} />
    </div>
  )
}

export default CollectionImage