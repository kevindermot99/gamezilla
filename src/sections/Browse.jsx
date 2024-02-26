import React, { useEffect, useRef, useState } from 'react'
import Search from '../components/Search'
import Button from '../components/Button'
import { Filters } from '../constants/data'
import { IoFilter } from "react-icons/io5";
import { Books } from '../constants/data';
import BookModal from '../components/BookModal';


function Browse() {
  const [isHidden, setIsHidden] = useState(false)
  const [buttonFilter, setButtonFilter] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  const toggleFilters = () => {
    setIsHidden(!isHidden)
  }

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

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
    <section className=' flex flex-col gap-6 '>
      <Search />

      <div className='width-90 flex justify-start items-start max-sm:gap-0 relative'>
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
        <div className='h-it w-full pl-4 max-sm:pl-0 max-sm:pt-2 '>
          <h1 className='text-black text-[25px] font-bold flex gap-2 mb-4'>
            <button className={`bg-main-color text-white rounded-md text-lg p-2 ${buttonFilter ? 'block' : 'hidden'}`} onClick={toggleFilters}>
              <IoFilter />
            </button>
            Books
          </h1>

          <div className='book-grid w-fit'>
            {Books.map((book) => (
              <div className='relative object-cover flex-grow '>
                <div className='relative '>
                  <img src={book.URL} loading='lazy' key={book.id} alt={book.id} className=' h-[200px] w-full object-cover flex-1 rounded-sm drop-shadow-lg ring-1 ring-gray-100 ' />
                  <div className='absolute h-full w-full bg-slate-900 bg-opacity-70 transition z-1 top-0 flex justify-center items-center flex-col gap-2 opacity-0 hover:opacity-100'>
                    <button className='h-9 w-24 text-sm font-medium bg-white text-black capitalize rounded-md ' onClick={() => openModal(book)}>details</button>
                    <a href="#" className='h-9 w-24 flex justify-center items-center capitalize font-medium text-sm cursor-pointer bg-main-color text-white py-2 px-4 rounded-md transition'>open</a>
                  </div>
                </div>
                <p className='h-fit font-medium text-sm pt-3 pb-3 text-center'>
                  {book.title}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* modal */}
      <BookModal selectedBook={selectedBook} closeModal={closeModal}/>
    </section>
  )
}

export default Browse