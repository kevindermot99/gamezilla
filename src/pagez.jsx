import React, { useState, useEffect } from 'react';
import { Browse } from './sections';
import Nav from './components/Nav';
import SideBar from './components/SideBar';


const Pagez = () => {

  const [loading, setLoading] = useState(false)

  window.onload = function() {
    setLoading(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1400);
  }, [])

  return (
    loading ? (
      <div className='w-full h-[100vh] bg-white dark:bg-dark-body flex justify-center items-center relative '>
        <p className='font-Pacifico text-[60px] text-stone-900 dark:text-stone-600 cursor-default pointer-events-none select-none '>P</p>
      </div>
    ) : (
      <main className='relative bg-white dark:bg-dark-body text-black dark:text-white flex max-w-[2000px] m-auto h-[100vh]'>
        <div className='w-fit z-10'>
          <SideBar />
        </div>
        <div className='w-full overflow-x-clip z-0 overflow-y-auto custom-scrollbar'>
          <Nav />
          <div className='xl:padding-1 wide:padding-r w-full pt-[20px]'>
            <Browse />
          </div>
        </div>

      </main>
    )
  )
};

export default Pagez;
