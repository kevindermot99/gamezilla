import React, { useState } from 'react'
import logo48 from '../assets/logo48.png'

function SWPImage({ src }) {
    const [loading, setLoading] = useState(true)

  const handleLoad = () => {
    setLoading(false)
  }
  return (
    <div className="w-full h-full relative bg-stone-100 dark:bg-container-color ">
      {loading && 
      <div className='w-full h-full absolute dark:bg-body-color bg-stone-100 flex justify-center items-center z-10 '>
        <div className='flex h-[60px] aspect-square'>
        <img src={logo48} className='h-full w-full animate-ping' />
        </div>
      </div>}
      <img src={src} className="w-full h-full object-cover" onLoad={handleLoad} />
    </div>
  );
}

export default SWPImage;
