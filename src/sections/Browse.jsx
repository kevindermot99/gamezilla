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
    <section className=' flex gap-5 '>
      <div className='bg-blue-300 w-[30%] max-w-[250px]'>
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <Search />

        <div className=' flex justify-start items-start max-sm:gap-0 relative'>
          <div className='h-fit w-full '>
            <div className='book-grid w-fit max-sm:mt-0 mt-2 '>
              {Books.map((book) => (
                <div className='relative object-cover flex-grow '>
                  <div className='relative '>
                    <img src={book.URL} loading='lazy' key={book.id} alt={book.id} className=' h-[200px] max-sm:h-[240px] w-full m-auto object-cover flex-1 rounded-sm drop-shadow-lg ring-1 ring-gray-100 ' />
                    <div className='absolute h-full w-full bg-slate-900 bg-opacity-70 transition z-1 top-0 flex justify-center items-center flex-col gap-2 opacity-0 hover:opacity-100'>
                      <a href="#" className='h-9 w-24 flex justify-center items-center capitalize font-medium text-sm cursor-pointer bg-main-color text-white py-2 px-4 rounded-md transition'>open</a>
                      <button className='h-9 w-24 text-sm font-medium bg-white text-black capitalize rounded-md ' onClick={() => openModal(book)}>details</button>
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
      </div>

      {/* modal */}
      <BookModal selectedBook={selectedBook} closeModal={closeModal} />
    </section>
  )
}

export default Browse