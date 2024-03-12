import React from 'react'

function Feature({tip, title, description, URL}) {
  return (
    <div className='flex gap-14 px-3 py-10 justify-between items-center w-full max-w-[1200px]'>
        <div className='flex flex-col gap-5 items-start justify-start w-[50%]'>
            <h1 className='text-main-color font-semibold text-xl '>Easy Find</h1>
            <h1 className='text-black font-bold text-[35px] leading-[45px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe 
            </h1>
            <p className='text-gray-600 font-medium text-xl leading-relaxed '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusamus officiis porro. Cupiditate corporis odit pariatur sunt! Inventore iusto, expedita eos aut minima ipsum! Minus quia totam tempora blanditiis vel.</p>
        </div>
        <div className='w-[50%] h-[450px] bg-orange-200 relative overflow-clip rounded-2xl pointer-events-none shadow-xl'>
            <video src={URL} autoPlay muted loop className='absolute h-[90%] w-[90%] object-cover -bottom-[10px] right-0 rounded-tl-2xl' />
        </div>
    </div>
  )
}

export default Feature