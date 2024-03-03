import React, { useEffect } from 'react'
import { MdCancel } from "react-icons/md";

function BookModal({ selectedBook, closeModal }) {

  if (!selectedBook) {
    // document.getElementById('book').classList.remove('active')
    return null;
  }

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div id='book' className='fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-black bg-opacity-40 overscroll-contain z-50 flex items-end justify-center animate-fade'>
      <div className='bg-white h-[90%] w-[100%] max-w-[900px] rounded-t-3xl max-sm:rounded-none px-6 py-5 max-sm:px-2 max-sm:py-2 animate-goingTop '>
        <div className=' h-full w-full flex flex-col items-start justify-start'>
          <MdCancel className=' self-end text-gray-300 transit hover:text-main-color cursor-pointer text-3xl' onClick={closeModal}/>
          <div className='h-full w-full overflow-y-auto overscroll-contain flex flex-col items-start justify-start mt-3 px-5 max-sm:px-0'>
            <div className='flex gap-8 max-sm:gap-4 max-sm:flex-col items-start justify-start'>
              <img src={selectedBook.URL} key={selectedBook.id} alt="Book Poster" loading='lazy' className='h-[300px] max-sm:h-auto w-full max-sm:w-[150px] object-cover flex-1 rounded-sm drop-shadow-lg ring-1 ring-gray-100 max-sm:self-center' />
              <div className=' space-y-4'>
                <h1 className=' text-[45px] leading-[50px] break-words max-sm:p-2 max-sm:text-center font-normal'>
                  {selectedBook.title}
                </h1>
                <h3 className=''>Dr. Mathew Waltford</h3>
                <p className=' max-sm:mt-0 max-sm:p-3 max-sm:text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius repellendus molestiae qui quaerat rerum consectetur recusandae facere, unde nobis, harum amet eveniet modi saepe nesciunt dolore explicabo adipisci enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis assumenda eligendi earum, velit eum laboriosam asperiores omnis iure natus qui nostrum illo rerum! Quaerat incidunt aspernatur officiis? Ratione, vitae.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookModal