import React, { useState, useEffect } from 'react';
import { Browse } from './sections';
import Nav from './components/Nav';
import SideBar from './components/SideBar';


const Pagez = () => {
  const [greet, setGreet] = useState("");
  useEffect(() => {
    const myDate = new Date();
    const hours = myDate.getHours();
    if (hours >= 4 && hours < 12) {
      setGreet('Morning')
    }
    else if(hours >= 12 && hours < 18){
      setGreet('Afternoon')
    }
    else if(hours >= 18 && hours < 4){
      setGreet("Evening")
    }
  }, [])

  return (
    <main className='relative bg-white dark:bg-dark-body text-black dark:text-white flex max-w-[2000px] m-auto h-[100vh]'>
      <div className='w-fit z-10'>
        <SideBar />
      </div>
      <div className='w-full overflow-x-clip z-0 overflow-y-auto custom-scrollbar'>
        <Nav />
        <div className='xl:padding-1 wide:padding-r w-full'>
          <div className='px-[60px] mb-5 w-fit'>
            <p className='text-stone-400 dark:text-stone-500  text-sm tracking-wide font-mono cursor-default'>
             {greet} Kevin.
            </p>
          </div>
          <Browse />
        </div>
      </div>

    </main>
  )
};

export default Pagez;
