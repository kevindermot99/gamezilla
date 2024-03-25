import React, { useState } from 'react'
import { TbFileDownload } from "react-icons/tb";
import { Formats } from '../constants/data';

function Feature({ tip, title, description, URL, direction, position, showFormats }) {

    

    return (
        <div className={`flex gap-14 px-3 py-10 justify-center items-start w-full max-w-[1200px] ${direction != 'left' && ' flex-row-reverse '} my-16`}>
            <div className='flex flex-col gap-5 items-start justify-start w-[50%] max-w-[600px]'>
                <h1 className='text-main-color font-semibold text-xl '>
                    {tip}
                </h1>
                <h1 className='text-black opacity-90 font-bold text-[35px] leading-[45px]'>
                    {title}
                </h1>
                <p className='text-stone-400  font-medium text-base leading-relaxed text-wrap '>
                    {description    }    
                </p>
                {
                    showFormats == '1' &&

                    <div className='flex flex-col w-full gap-2 mt-2'>
                        {Formats.map((format, index) => (
                            <div key={index} className='group py-5 px-6 bg-stone-100 rounded-2xl cursor-pointer transition'>
                                <h1 className=' text-black font-bold text-base flex gap-1 items-center justify-start'>
                                    <TbFileDownload className='text-2xl text-stone-400 ' />
                                    {format.format}
                                </h1>
                                <p className='text-stone-400 font-medium text-base leading-snug m-4 text-wrap'>{format.explanation}</p>
                            </div>
                        ))
                        }
                    </div>
                }

                <p className='text-main-color font-extrabold '>
                    #{position}
                </p>
            </div>
            <div className={`w-[40%] h-[300px] ${position == '1' && 'bg-orange-200 '} ${position == '2' && 'bg-violet-400 '} ${position == '3' && 'bg-yellow-300 '} overflow-clip rounded-2xl pointer-events-none shadow-xl sticky top-[100px]`}>
                
                <video src={URL} autoPlay muted loop className={`absolute shadow-xl h-[90%] w-[90%] object-cover -bottom-[10px] ${direction == 'left' && 'right-0 rounded-tl-2xl'} ${direction != 'left' && 'left-0 rounded-tr-2xl'}`} />
            </div>
        </div>
    )
}

export default Feature