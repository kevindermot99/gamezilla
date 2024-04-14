import React, { useState, useEffect } from 'react';
import { Browse } from '../sections';
import PagezDarkBg from '../assets/images/pagez-bg.jpg'
import { BsLayoutSidebar } from "react-icons/bs";
import BottomBar from '../components/BottomBar';
import { users } from "../constants/data";


const Pagez = () => {

  // const [loading, setLoading] = useState(false)
  const [greet, setGreet] = useState("");
  const [sidebar, setSideBar] = useState(false);

  useEffect(() => {
    const myDate = new Date();
    const hours = myDate.getHours();
    if (hours >= 4 && hours < 12) {
      setGreet('Good Morning. ')
    }
    else if (hours >= 12 && hours < 18) {
      setGreet('Good Afternoon. ')
    }
    else if (hours >= 18) {
      setGreet("Good Evening. ")
    }
  }, [])

  useEffect(() => {
    document.title = 'Browse';
  }, [])

  const id = 'QHNXEXCNBQGALHZXXA58'

  const loggedInUser = users.find(findthis)
  function findthis(user) {
    return user.id === id;
  }
  return (
    <>
      <main className='home relative bg-white dark:bg-dark-body text-black dark:text-white flex h-[100vh] overflow-clip '>

        <img src={PagezDarkBg} className='absolute opacity-5 -z-0  h-full w-full object-cover hidden dark:block blur-md ' loading='lazy' />


        <div className='z-10 w-[100%] h-svh overflow-y-auto dynamic-scrollbar overflow-clip'>
          <div className='max-w-[1000px] m-auto p-5 text-left my-5 '>
            <h1 className='font-extrabold text-3xl text-black dark:text-white capitalize  '>{greet}</h1>
            <div className=' relative flex justify-between  '>
              <div className='absolute -top-12 left-20  opacity-50 dark:opacity-25 -z-0 w-[150px] h-[90px] rounded-full bg-main-color/20  rotate-45 '></div>
              <div className='absolute -top-12 left-32   opacity-50 dark:opacity-25 -z-0 w-[150px] h-[90px] rounded-full bg-main-color/20  rotate-45 '></div>
              <p className='font-normal text-base text-black dark:text-white capitalize'>Find your next great Listen</p>
              <div className='relative flex items-center justify-center gap-2'>
                <div className='relative'>
                  <div className='size-2 bg-main-color  rounded-md animate-ping absolute left-0 top-0 '></div>
                  <div className='size-2 bg-main-color  z-10 rounded-md '></div>
                </div>
                <p className='font-normal text-base text-black dark:text-white capitalize'>2,230 Listening</p>
              </div>
            </div>
          </div>
          <Browse />
        </div>

      </main>

      <BottomBar />
    </>
  )
};

export default Pagez;
