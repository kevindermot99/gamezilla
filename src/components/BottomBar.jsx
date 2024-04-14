import React, { useEffect, useState } from 'react'
import { SlCompass } from "react-icons/sl";
import { Link, useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { Books } from '../constants/data';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoTrendingUp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { PiMusicNotesPlusDuotone } from "react-icons/pi";
import LogoDarkMode from '../assets/images/Pagez_Logo__dark_mode.png'
import { BsCloudDownload } from "react-icons/bs";
import { AppVersion } from '../constants/data';
import { users } from "../constants/data";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

function BottomBar() {
    const location = useLocation()

    const id = 'QHNXEXCNBQGALHZXXA58'

    const loggedInUser = users.find(findthis)
    function findthis(user) {
        return user.id === id;
    }

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-stone-50 dark:bg-dark-navlink bg-opacity-85 dark:bg-opacity-70 backdrop-blur-md ring-1 ring-dark-navlink ring-opacity-5 rounded-full w-full md:max-w-fit h-fit m-auto mb-3 '>
        <div className='flex justify-around py-4 px-6 gap-12 max-sm:gap-5'>
            <Link to="/" className='group' >
                <SlCompass className={`text-[26px] max-sm:text-[20px]  mx-[1px] group-hover:-translate-y-[2px] group-hover:scale-110  duration-75 transition ${location.pathname === '/' ? 'opacity-100 text-main-color ' : 'text-black dark:text-white opacity-80'} `} />
            </Link>
            <Link to="/search" className='group' >
                <IoSearchOutline className={`text-[26px] max-sm:text-[20px] text-black dark:text-white mx-[1px] group-hover:-translate-y-[2px] group-hover:scale-110  duration-75 transition ${location.pathname === '/search' ? 'opacity-100 text-main-color ' : 'text-black dark:text-white opacity-80'} `} />
            </Link>
            <Link to={`/liked/${id}`} className='group' >
                <IoMdHeartEmpty className={`text-[26px] max-sm:text-[20px] text-black dark:text-white mx-[1px] group-hover:-translate-y-[2px] group-hover:scale-110  duration-75 transition ${location.pathname.includes('/liked/') ? 'opacity-100 text-main-color ' : 'text-black dark:text-white opacity-80'} `} />
            </Link>
            <Link to={`/profile/${id}`} className='group' >
             <img src={loggedInUser.avatar} className='h-6 max-sm:h-5 max-sm:min-w-5 rounded-full mr-2 group-hover:-translate-y-[2px] group-hover:scale-110  duration-75 transition' />
            </Link>
        </div>
    </div>
  )
}

export default BottomBar