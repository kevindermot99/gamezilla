import React from 'react'

function BookModal({ selectedBook, closeModal }) {

  if (!selectedBook) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-black bg-opacity-80 overscroll-contain z-50 flex items-end justify-center  ' onClick={closeModal}>
      <div className='bg-white h-[85%] w-[100%] max-w-[900px] rounded-t-3xl pr-3 pl-7 pt-6'>
        <div className=' h-full w-full overflow-y-auto overscroll-contain '>
          
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default BookModal