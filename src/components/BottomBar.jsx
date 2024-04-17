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
import { GoHome } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";

function BottomBar() {
    const location = useLocation()

    const id = 'QHNXEXCNBQGALHZXXA58'

    const loggedInUser = users.find(findthis)
    function findthis(user) {
        return user.id === id;
    }

    return (
        <div className='h-svh w-[270px] fixed left-0 top-0 m-auto z-50 bg-white max-md:bg-opacity-95 dark:bg-dark-bar max-md:dark:bg-opacity-70 max-md:backdrop-blur-md  max-md:rounded-xl p-5 '>
            <h1 className='text-black dark:text-stone-400 duration-75 text-xl font-Pacifico mb-9' >Pagez</h1>

            <div className='flex flex-col justify-between items-start h-[100%]'>
                <div className='h-fit ' >
                    <Link to="/" className='group flex gap-3' >
                        <GoHome className={`text-[26px] max-sm:text-[20px] text-black dark:text-white duration-75 transition ${location.pathname === '/' ? 'opacity-100 text-main-color dark:to-main-color ' : 'text-black dark:text-white opacity-80'} `} />
                        <p>Home</p>
                    </Link>
                    <Link to="/" className='group flex gap-3' >
                        <SlCompass className={`text-[24px] max-sm:text-[20px] duration-75  transition ${location.pathname === '/' ? 'opacity-100 text-main-color dark:to-main-color ' : 'text-black dark:text-white opacity-80'} `} />
                        <p>Browse</p>
                    </Link>
                    <Link to={`/liked/${id}`} className='group flex gap-3' >
                        <IoBookOutline className={`text-[26px] max-sm:text-[20px] text-black dark:text-white duration-75 transition ${location.pathname.includes('/liked/') ? 'opacity-100 text-main-color dark:to-main-color ' : 'text-black dark:text-white opacity-80'} `} />
                        <p>My Library</p>
                    </Link>
                </div>
                <div className='h-fit ' >
                    <Link to={`/profile/${id}`} className='group flex gap-3' >
                        <img src={loggedInUser.avatar} className='h-6 max-sm:h-5 max-sm:min-w-5 rounded-full duration-75 transition' />
                        <p>Saved Books</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default BottomBar