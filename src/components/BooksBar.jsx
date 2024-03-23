import React from 'react'
import { Books } from '../constants/data'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbPlayerTrackNext } from "react-icons/tb";

function BooksBar() {
    return (
        <div className="bookbar w-[100%] h-fit flex overflow-x-scroll overscroll-contain pb-3 mb-6">
            {Books.slice(0, 3).map((book) => (
                <div key={book.id} className=' group flex flex-col w-fit h-auto rounded-xl transition duration-100 hover:bg-stone-100 dark:hover:bg-dark-sidebar p-3'>
                    <div className='relative h-[180px] w-[180px] aspect-square rounded-lg overflow-clip mb-2 select-none'>
                        <img className="w-full h-full object-cover pointer-events-none" src={book.URL} alt="" />
                        <div className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition'>
                            <a href='#' className=' transition absolute bottom-2 right-2 aspect-square size-11 flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 translate-y-3 group-hover:translate-y-0 hover:scale-105' title={`Play ${book.title}`}>
                                <FaPlay className='text-white text-lg ' />
                            </a>
                        </div>

                    </div>
                    <h1 className=' break-words  whitespace-normal leading-5 my-1 text-base font-normal text-black dark:text-white max-w-[180px]'>{book.title}</h1>
                    <p className=' text-sm font-medium  text-stone-600 dark:text-stone-500'>{book.author}</p>
                </div>
            ))}

                <Link className=' group flex flex-col w-fit h-auto rounded-xl transition duration-100 hover:bg-stone-100 dark:hover:bg-dark-sidebar p-3 cursor-pointer'>
                    <div className='relative h-[100%] w-[180px] overflow-clip select-none flex flex-col items-center justify-center'>
                        <TbPlayerTrackNext className='text-2xl opacity-70 ' />
                        <p className='text-base font-extrabold opacity-70'>View All</p>
                    </div>
                </Link>

        </div>
    )
}

export default BooksBar