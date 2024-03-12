import React, { useState } from 'react'
import { TbFileDownload } from "react-icons/tb";

function Feature({ tip, title, description, URL, direction, position, types }) {

    const formats = ['PDF', 'DOC', 'PDB']
    return (
        <div className={`flex gap-14 px-3 py-10 justify-center items-start w-full max-w-[1200px] ${direction != 'left' && ' flex-row-reverse '} my-16`}>
            <div className='flex flex-col gap-5 items-start justify-start w-[50%] max-w-[600px]'>
                <h1 className='text-main-color font-semibold text-xl '>
                    {tip}
                </h1>
                <h1 className='text-black opacity-90 font-bold text-[35px] leading-[45px]'>
                    {title}
                </h1>
                <p className='text-gray-600 font-medium text-xl leading-relaxed '>
                    {description    }    
                </p>
                {
                    types == '1' &&

                    <div className='flex flex-col w-full gap-2 mt-4'>
                        {formats.map((item, index) => (
                            <h1 key={index} className='py-5 px-6 text-black font-bold text-base cursor-pointer flex gap-3 items-center justify-start bg-gray-100 bg-opacity-50 rounded-2xl '>
                                <TbFileDownload className='text-2xl text-gray-500' />
                                {item}
                            </h1>
                        ))
                        }
                    </div>
                }

                <p className='text-main-color font-extrabold '>
                    #{position}
                </p>
            </div>
            <div className={`w-[45%] h-[350px] ${position == '1' && 'bg-orange-200 '} ${position == '2' && 'bg-violet-400 '} ${position == '3' && 'bg-yellow-300 '} overflow-clip rounded-2xl pointer-events-none shadow-xl sticky top-[100px]`}>
                <video src={URL} autoPlay muted loop className='absolute h-[90%] w-[90%] object-cover -bottom-[10px] right-0 rounded-tl-2xl' />
            </div>
        </div>
    )
}

export default Feature