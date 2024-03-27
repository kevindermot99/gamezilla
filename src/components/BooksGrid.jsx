import React from 'react'
import { Books } from '../constants/data'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbPlayerTrackNext } from "react-icons/tb";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    transform: translateY(10px);
    
  }

  to {
    transform: translateY(0);

  }
`;


function BooksFlow({ count }) {
  const limit = count;

  return (

    <Reveal keyframes={customAnimation} triggerOnce duration={300}>
      <div className="book-grid w-[100%] h-fit pb-3 mb-6">
        {Books.map((book) => (

          <div key={book.id} className=' group flex gap-5 w-[230px] aspect-square rounded-xl transition duration-100 hover:bg-stone-200 hover:bg-opacity-70 dark:hover:bg-dark-hover dark:hover:bg-opacity-40 p-3'>
            <div className='relative aspect-square rounded-md overflow-clip select-none'>
              <img className="h-full aspect-square w-[100%] object-cover pointer-events-none" src={book.URL} alt="" />
              <div className='w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition'>
                <button className=' transition absolute bottom-1 right-1 aspect-square size-14  flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 translate-y-3 group-hover:translate-y-0 hover:scale-105 shadow-lg' title={`Play ${book.title}`}>
                  <FaPlay className='text-white text-xl ' />
                </button>
              </div>
            </div>
            <div className=' flex-col gap-2 hidden'>
              <Link to={`/book/${book.id}`} className=' break-words  whitespace-normal leading-5 my-1 text-xl font-bold text-black dark:text-white max-w-[100%] w-fit hover:underline '>{book.title}</Link>
              <Link to={`/author/${book.author}`} className=' text-sm font-medium  text-stone-600 dark:text-stone-500 hover:underline'>{book.author}</Link>
              {/* <p className=' text-sm font-medium  text-stone-500 dark:text-stone-500 line-clamp-3'>{book.about}</p> */}
            </div>
          </div>

        ))}
      </div>
    </Reveal>
  )
}

export default BooksFlow