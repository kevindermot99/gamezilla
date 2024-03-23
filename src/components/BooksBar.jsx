import React from 'react'
import { Books } from '../constants/data'
import { FaPlay } from "react-icons/fa";

function BooksBar() {
    return (
        <div className="bookbar w-[100%] h-fit flex overflow-x-scroll overscroll-contain pb-3 mb-6">
            {Books.map((book) => (
                <div className=' group flex flex-col w-fit h-auto rounded-xl transition duration-100  hover:bg-dark-sidebar p-3'>
                    <div className='relative h-[180px] w-[180px] aspect-square rounded-lg overflow-clip mb-2 select-none'>
                        <img className="w-full h-full object-cover pointer-events-none" src={book.URL} alt="" />
                        <div className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition'>
                            <a href='#' className=' transition absolute bottom-2 right-2 aspect-square size-11 flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 translate-y-3 group-hover:translate-y-0 hover:scale-105' title={`Play ${book.title}`}>
                                <FaPlay className='text-white text-lg ' />
                            </a>
                        </div>

                    </div>
                    <h1 className=' break-words  whitespace-normal leading-5 my-1 text-base font-normal text-white  '>{book.title}</h1>
                    <p className=' text-sm font-medium  text-gray-600 dark:text-stone-500'>{book.author}</p>
                </div>
            ))}

        </div>
    )
}

export default BooksBar