import React from 'react'

function Feature({tip, title, description, image}) {
  return (
    <div className='flex gap-14 px-3 py-10 justify-between w-full max-w-[1200px]'>
        <div className='flex flex-col gap-5 items-start justify-start w-fit'>
            <h1 className='text-main-color font-semibold text-xl '>Easy Find</h1>
            <h1 className='text-black font-bold text-[35px] leading-[45px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere saepe 
            </h1>
            <p className='text-gray-600 font-medium text-xl leading-relaxed '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusamus officiis porro. Cupiditate corporis odit pariatur sunt! Inventore iusto, expedita eos aut minima ipsum! Minus quia totam tempora blanditiis vel.</p>
        </div>
        <div className='w-[500px] min-w-[500px] h-[400px] bg-gray-50 relative overflow-clip rounded-2xl  ring-1 ring-gray-200 pointer-events-none '>
            <img src={image} className='absolute h-[90%] w-[90%] object-cover bottom-0 right-0 rounded-tl-2xl' />
        </div>
    </div>
  )
}

export default Feature