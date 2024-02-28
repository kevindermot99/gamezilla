import React from 'react'
import { MdCancel } from "react-icons/md";

function BookModal({ selectedBook, closeModal }) {

  if (!selectedBook) {
    // document.getElementById('book').classList.remove('active')
    return null;
  }

  return (
    <div id='book' className='fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-black bg-opacity-40 overscroll-contain z-50 flex items-end justify-center animate-fade'>
      <div className='bg-white h-[90%] w-[100%] max-w-[900px] rounded-t-3xl p-6 animate-goingTop '>
        <div className=' h-full w-full overflow-y-auto overscroll-contain flex flex-col items-start justify-start'>
          <MdCancel className=' self-end text-gray-300 transit hover:text-main-color cursor-pointer text-3xl' onClick={closeModal}/>
          <div>
            <div>
              <img src={selectedBook.URL} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookModal