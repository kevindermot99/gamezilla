import React, { useState, useEffect } from 'react';
import { Browse } from '../sections';
import PagezDarkBg from '../assets/images/pagez-bg.jpg'
import { BsLayoutSidebar } from "react-icons/bs";
import BottomBar from '../components/BottomBar';


const Pagez = () => {

  // const [loading, setLoading] = useState(false)
  const [greet, setGreet] = useState("");
  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    const myDate = new Date();
    const hours = myDate.getHours();
    if (hours >= 4 && hours < 12) {
      setGreet('Good Morning')
    }
    else if (hours >= 12 && hours < 18) {
      setGreet('Good Afternoon')
    }
    else if (hours >= 18) {
      setGreet("Good Evening")
    }
  }, [])

  const toggleSidebar = () => {
    setSideBar(!sidebar)
  }

  useEffect(() => {
    document.title = 'Browse';
  }, [])





  return (
    <>
      <main className='home relative bg-white dark:bg-dark-body text-black dark:text-white flex h-[100vh] overflow-clip '>

        <img src={PagezDarkBg} className='absolute opacity-15 -z-0  h-full w-full object-cover hidden dark:block blur-md ' loading='lazy' />

        <div className='z-10 w-[100%] h-svh overflow-y-auto dynamic-scrollbar'>
          <div className='max-w-[1000px] m-auto p-5 text-left my-5 '>
            <h1 className='font-extrabold text-3xl text-black dark:text-white capitalize  '>{greet},</h1>
            <p className='font-normal text-base text-black dark:text-white capitalize  '>Fins your next great Listen</p>
          </div>
          <Browse />
        </div>

      </main>
      
      <BottomBar />
    </>
  )
};

export default Pagez;
