import React from 'react'
import { MdCancel } from "react-icons/md";

function BookModal({ selectedBook, closeModal }) {

  if (!selectedBook) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-black bg-opacity-80 overscroll-contain z-50 flex items-end justify-center'>
      <div className='bg-white h-[85%] w-[100%] max-w-[900px] rounded-t-3xl p-6'>
        <div className=' h-full w-full overflow-y-auto overscroll-contain flex flex-col read-only:'>
          <MdCancel className=' self-end text-gray-300 transit hover:text-main-color cursor-pointer text-3xl' onClick={closeModal}/>
        </div>
      </div>
    </div>
  )
}

export default BookModal