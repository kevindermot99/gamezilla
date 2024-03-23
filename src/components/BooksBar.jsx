import React from 'react'
import { Books } from '../constants/data'
import { FaPlay } from "react-icons/fa";

function BooksBar() {
    return (
        <div className="bookbar w-[100%] h-fit flex overflow-x-auto pb-3 mb-6">
            {Books.map((book) => (
                <div className='flex flex-col w-fit h-auto rounded-xl  hover:bg-dark-sidebar p-3'>
                    <div className='relative h-[180px] w-[180px] aspect-square rounded-lg overflow-clip mb-2 select-none'>
                        <img className="w-full h-full object-cover pointer-events-none" src={book.URL} alt="" />
                        
                        <a className=' absolute bottom-2 right-2 aspect-square size-11 flex items-center justify-center pl-[2px]  bg-main-color  rounded-full'>
                            <FaPlay className='text-white text-lg '/>
                        </a>
                    </div>
                    <h1 className=' break-words  whitespace-normal leading-5 my-1 text-base font-normal text-white  '>{book.title}</h1>
                    <p className=' text-sm font-medium  text-gray-600 dark:text-stone-500'>{book.author}</p>
                </div>
            ))}

        </div>
    )
}

export default BooksBar