import React from 'react'
import { Books } from '../constants/data'
import bookcover from '../assets/images/bookcover1.jpg'

function BooksBar() {
    return (
        <div className="bookbar w-[100%] h-fit flex overflow-x-auto pb-3 mb-6">
            {Books.map((book) => (
                <div className='flex flex-col w-fit h-auto rounded-xl  hover:bg-dark-sidebar px-3 py-4'>
                    <div className='h-[180px] w-[180px] aspect-square rounded-lg overflow-clip mb-2'>
                        <img className="w-full h-full object-cover" src={book.URL} alt="" />
                    </div>
                    <h1 className=' break-words whitespace-normal leading-5 my-1 text-sm '>{book.title}</h1>
                    <p className=' text-sm font-medium  text-gray-600 dark:text-stone-400 font-light'>{book.author}</p>
                </div>
            ))}

        </div>
    )
}

export default BooksBar