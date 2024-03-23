import React from 'react'
import { Books } from '../constants/data'
import { IoPlayCircleSharp } from "react-icons/io5";

function BooksBar() {
    return (
        <div className="bookbar w-[100%] h-fit flex overflow-x-auto pb-3 mb-6">
            {Books.map((book) => (
                <div className='flex flex-col w-fit h-auto rounded-xl  hover:bg-dark-sidebar p-3'>
                    <div className='relative h-[180px] w-[180px] aspect-square rounded-lg overflow-clip mb-2'>
                        <img className="w-full h-full object-cover" src={book.URL} alt="" />
                        <a className=' absolute bottom-0 right-0'>
                            <IoPlayCircleSharp className='text-main-color ' />
                        </a>
                    </div>
                    <h1 className=' break-words whitespace-normal leading-5 my-1 text-sm '>{book.title}</h1>
                    <p className=' text-sm font-medium  text-gray-600 dark:text-stone-400'>{book.author}</p>
                </div>
            ))}

        </div>
    )
}

export default BooksBar