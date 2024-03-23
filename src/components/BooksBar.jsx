import React from 'react'
import { Books } from '../constants/data'
import bookcover from '../assets/images/bookcover1.jpg'

function BooksBar() {
    return (
        <div className="w-full h-fit flex flex-wrap overflow-x-auto">

            <div className='flex flex-col w-[180px] h-fit'>
                <div className='h-[180px] w-[180px] aspect-square rounded-lg overflow-clip mb-2'>
                    <img className="w-full h-full object-cover" src={bookcover} alt="" />
                </div>
                <h1 className=' break-words whitespace-normal leading-5 my-1 text-sm '>Harry Potter & the chamber of sectrets</h1>
                <p className=' text-sm opacity-50 font-light'>J.K Rowling</p>
            </div>
            
        </div>
    )
}

export default BooksBar