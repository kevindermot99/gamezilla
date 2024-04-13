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

const SideBar = (({ toggleSidebar }) => {
    const location = useLocation()
    const [nowPlaying, setNowPlaying] = useState(null);


    const nowPlayingBookId = localStorage.getItem("nowPlaying");

    useEffect(() => {
        if (nowPlayingBookId) {
            const res = Books.find(book => book.id === nowPlayingBookId);
            setNowPlaying(res);
        }
    }, [nowPlayingBookId]);


    const toggleSB = () => {
        toggleSidebar()
    }

    const id = 'QHNXEXCNBQGALHZXXA58'

    const loggedInUser = users.find(findthis)
    function findthis(user) {
        return user.id === id;
    }


    return (
        <>
            <div onClick={toggleSB} className={` hidden max-md:flex max-md:fixed max-md:w-full max-md:h-svh justify-start items-start `}></div>
            <div className={` sticky top-0 w-[280px] h-svh overflow-y-auto custom-scrollbar flex flex-col items-start justify-start p-4 bg-stone-100 bg-opacity-50  dark:bg-dark-sidebar dark:bg-opacity-50 dark:backdrop-blur-lg max-md:dark:bg-dark-body  max-md:dark:bg-opacity-100 gap-2`}>

                <div className='w-full h-fit'>
                    <div className={`group flex justify-between items-center w-full select-none `}>
                        <div className={`h-[40px] cursor-pointer mb-2 flex items-center justify-start text-[15px] px-[10px] outline-none w-fit max-w-full transition duration-100 rounded-lg hover:bg-stone-200 hover:bg-opacity-50  dark:hover:bg-dark-navlink  `}>
                            <img src={loggedInUser.avatar} className='h-7 rounded-full mr-2' />
                            <div className={` opacity-0 ${location.pathname === '/' && 'opacity-100 '}`}></div>
                            <p className={` text-sm font-normal tracking-wide overflow-clip whitespace-nowrap truncate max-w-[70px] `}>{loggedInUser.userName}</p>
                            <IoChevronDownOutline className={`text-[15px]  `} />
                        </div>

                        <button onClick={toggleSB} className=' cursor-pointer p-2 transition duration-100 rounded-lg hover:bg-stone-300 hover:bg-opacity-50  dark:hover:bg-dark-navlink '>
                            <BsLayoutSidebar className=' text-[20px] opacity-50 ' />
                        </button>
                    </div>



                    <ul className={`sidebar w-full h-fit overscroll-contain flex flex-col gap-1 select-none`}>
                        <Link to="/" className={`h-[40px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 hover:bg-opacity-50  dark:hover:bg-dark-navlink  ${location.pathname === '/' && 'bg-stone-200 bg-opacity-50 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none '} `}>
                            <div className={` indicator opacity-0 ${location.pathname === '/' && 'opacity-100 '}`}></div>
                            <SlCompass className={`text-[20px] mx-[1px] ${location.pathname === '/' ? 'opacity-100 text-main-color ' : 'opacity-30'}`} />
                            <p className={` text-sm font-normal tracking-wide overflow-clip whitespace-nowrap ${location.pathname === '/' ? ' dark:text-main-color text-main-color ' : 'text-stone-700  dark:text-slate-300 '} `}>Browse</p>
                        </Link>

                        <Link to="/search" className={`h-[40px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 hover:bg-opacity-50  dark:hover:bg-dark-navlink  ${location.pathname === '/search' && 'bg-stone-200 bg-opacity-50 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none '} `}>
                            <div className={` indicator opacity-0 ${location.pathname === '/search' && 'opacity-100 '}`}></div>
                            <IoSearchOutline className={`text-[22px] mx-[1px] ${location.pathname === '/search' ? 'opacity-100 text-main-color ' : 'opacity-30'}`} />
                            <p className={` text-sm font-normal  tracking-wide overflow-clip whitespace-nowrap ${location.pathname === '/search' ? ' dark:text-main-color text-main-color ' : 'text-stone-700  dark:text-slate-300 '} `}>Search</p>
                        </Link>

                        <Link to={`/recentlyadded`} className={`h-[40px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 hover:bg-opacity-50  dark:hover:bg-dark-navlink  ${location.pathname === '/recentlyadded' && 'bg-stone-200 bg-opacity-50 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname === '/recentlyadded' && 'opacity-100 '}`}></div>
                            <PiMusicNotesPlusDuotone className={`text-[22px] mx-[1px] ${location.pathname === '/recentlyadded' ? 'opacit10-80 text-main-color ' : 'opacity-30'}`} />
                            <p className={` text-sm font-normal  tracking-wide overflow-clip whitespace-nowrap ${location.pathname === '/recentlyadded' ? ' dark:text-main-color text-main-color ' : 'text-stone-700  dark:text-slate-300 '} `}>Recently Added</p>
                        </Link>

                        <Link to={`/liked/${id}`} className={`h-[40px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 hover:bg-opacity-50  dark:hover:bg-dark-navlink  ${location.pathname.includes('/liked/') && 'bg-stone-200 bg-opacity-50 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname.includes('/liked/') && 'opacity-100 '}`}></div>
                            <IoMdHeartEmpty className={`text-[22px] mx-[1px] ${location.pathname.includes('/liked/') ? 'opacity-100 text-main-color ' : 'opacity-30'}`} />
                            <p className={` text-sm font-normal  tracking-wide overflow-clip whitespace-nowrap ${location.pathname.includes('/liked/') ? ' dark:text-main-color text-main-color ' : 'text-stone-700  dark:text-slate-300 '} `}>Liked</p>
                        </Link>

                        <Link to={`/trending`} className={`h-[40px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 hover:bg-opacity-50  dark:hover:bg-dark-navlink  ${location.pathname === '/trending' && 'bg-stone-200 bg-opacity-50 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname === '/trending' && 'opacity-100 '}`}></div>
                            <IoTrendingUp className={`text-[22px] mx-[1px] ${location.pathname === '/trending' ? 'opacity-100 text-main-color ' : 'opacity-30'}`} />
                            <p className={` text-sm font-normal  tracking-wide overflow-clip whitespace-nowrap ${location.pathname === '/trending' ? ' dark:text-main-color text-main-color ' : 'text-stone-700  dark:text-slate-300 '} `}>Trending</p>
                        </Link>

                        <Link to={`/history/${id}`} className={`h-[40px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 hover:bg-opacity-50  dark:hover:bg-dark-navlink  ${location.pathname.includes('/history/') && 'bg-stone-200 bg-opacity-50 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname.includes('/history/') && 'opacity-100 '}`}></div>
                            <GoHistory className={`text-[20px] mx-[1px] ${location.pathname.includes('/history/') ? 'opacity-100 text-main-color ' : 'opacity-30'}`} />
                            <p className={` text-sm font-normal  tracking-wide overflow-clip whitespace-nowrap ${location.pathname.includes('/history/') ? ' dark:text-main-color text-main-color ' : 'text-stone-700  dark:text-slate-300 '} `}>History</p>
                        </Link>

                    </ul>
                </div>

            </div >
        </>

    )
});

export default SideBar