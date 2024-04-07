import React, { useState, useEffect } from 'react';
import { Browse } from '../sections';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import PagezDarkBg from '../assets/images/pagez-bg.jpg'


const Pagez = () => {

  // const [loading, setLoading] = useState(false)
  const [greet, setGreet] = useState("");
  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    const myDate = new Date();
    const hours = myDate.getHours();
    if (hours >= 4 && hours < 12) {
      setGreet('Morning')
    }
    else if (hours >= 12 && hours < 18) {
      setGreet('Afternoon')
    }
    else if (hours >= 18) {
      setGreet("Evening")
    }
  }, [])

  const openSidebar = () => {
    setSideBar(true)
  }

  const closeSidebar = () => {
    setSideBar(false)
  }





  return (
    <>
      <main className='home relative bg-white dark:bg-dark-body text-black dark:text-white flex h-[100vh] overflow-clip   '>

        <img src={PagezDarkBg} className='absolute opacity-10 h-full w-full object-cover hidden dark:block blur-md ' loading='lazy' />
        <div className={`w-fit z-20 max-md:fixed max-md:top-0 max-md:transition max-md:duration-500  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
          <SideBar closeSidebar={closeSidebar} />
        </div>

        <div className=' w-[100%] h-[100%] max-w-full overflow-x-clip z-0 flex flex-col justify-between items-start overflow-y-auto dynamic-scrollbar '>
          <div className='h-full w-full flex flex-col'>
            <Nav openSidebar={openSidebar} />
            <div className='xl:padding-1 wide:padding-r w-full max-md:mt-3'>
              <div className='px-[60px] mb-5 max-md:px-6 max-md:mb-6'>
                <p className='text-stone-400 dark:text-stone-400  text-sm tracking-wide font-mono cursor-default'>
                  {greet} Kevin.
                </p>
              </div>
              <Browse />
            </div>
          </div>
        </div>

      </main>
    </>
  )
};

export default Pagez;
