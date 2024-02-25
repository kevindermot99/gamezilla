import React, { useEffect, useRef, useState } from 'react'
import Search from '../components/Search'
import Button from '../components/Button'
import { Filters } from '../constants/data'
import { IoFilter } from "react-icons/io5";

import { Books } from '../constants/data';


function Browse() {
  const [isHidden, setIsHidden] = useState(false)
  const [buttonFilter, setButtonFilter] = useState(false)

  const toggleFilters = () => {
    setIsHidden(!isHidden)
  }

  useEffect(() => {

    const handleFilterbutton = () => {


      if (window.innerWidth < 640) {
        setIsHidden(true)
        setButtonFilter(true)
      }
      else {
        setButtonFilter(false)
      }
    }

    handleFilterbutton();
    window.addEventListener('resize', handleFilterbutton);

    return () => {
      window.removeEventListener('resize', handleFilterbutton);
    };
  }, [])

  return (
    <section className='space-y-10 max-sm:space-y-2 '>
      <Search />
      <div className='width-90 flex justify-start items-start max-sm:gap-2 relative'>
        <div className='max-h-dvh  stay-at-top'>

          <h1 className='text-black text-[25px] font-bold max-sm:hidden mb-4 '>
            Filters
          </h1>

          <div className={`max-h-[95vh] overflow-y-auto overflow-x-hidden flex flex-col items-start justify-start pl-0 pr-2 max-sm:border-2 max-sm:pt-3 max-sm:pl-3 max-sm:pb-3 max-sm:bg-white max-sm:absolute max-sm:left-0 max-sm:top-8 max-sm:rounded-md max-sm:max-h-[30vh] mt-2 ${isHidden ? 'max-sm:hidden' : ' max-sm:flex'}`}>
            <h3 className='w-full text-sm font-bold text-main-color mb-2 flex justify-between'><span># Genres</span><span className='text-[13px]'>{Filters.length}</span></h3>
            <span className='w-fit flex flex-col items-start justify-start'>
              {Filters.map((button) => (
                <Button key={button.id} label={button.label} />
              ))}
            </span>
          </div>
        </div>
        <div className='h-it w-full pl-4 max-sm:pl-0 '>
          <h1 className='text-black text-[25px] font-bold flex gap-2 mb-4'>
            <button className={`bg-main-color text-white rounded-md text-lg p-2 ${buttonFilter ? 'block' : 'hidden'}`} onClick={toggleFilters}>
              <IoFilter />
            </button>
            Books
          </h1>

          <div className='book-grid w-fit'>
            {Books.map((book) => (
              <a href='#' className=' object-cover pb-10'>
                <img src={book.URL} key={book.id} alt={book.id} className='h-auto min-h-[100%] w-full object-cover flex-1 rounded-lg cursor-pointer' />
                <p className='truncate h-fit overflow-ellipsis font-medium text-sm text-center
                pt-1 '>{book.title}</p>
              </a>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Browse