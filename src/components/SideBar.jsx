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
import { FiChevronLeft } from "react-icons/fi";

const SideBar = React.memo(({ closeSidebar }) => {
    const location = useLocation()
    const [nowPlaying, setNowPlaying] = useState(null);


    const nowPlayingBookId = localStorage.getItem("nowPlaying");

    useEffect(() => {
        if (nowPlayingBookId) {
            const res = Books.find(book => book.id === nowPlayingBookId);
            setNowPlaying(res);
        }
    }, [nowPlayingBookId]);


    const closeSB = () => {
        closeSidebar()
    }

    const id = 'QHNXEXCNBQGALHZXXA58'

    const loggedInUser = users.find(findthis)
    function findthis(user) {
        return user.id === id;
    }


    return (
        <>
            <div onClick={closeSB} className={` hidden max-md:flex max-md:fixed max-md:w-full max-md:h-[100vh] justify-start items-start `}></div>
            <div className={` sticky top-0 w-[280px] h-[100vh] overflow-y-auto custom-scrollbar flex flex-col items-start justify-start px-4 py-2 bg-stone-100 bg-opacity-50  dark:bg-dark-sidebar dark:bg-opacity-50 dark:backdrop-blur-lg max-md:dark:bg-dark-body  max-md:dark:bg-opacity-100 max-md:w-[100vw] gap-2`}>
                <div className={` flex justify-start items-center text-base font-medium cursor-default gap-2 `}>
                    <h1 className={`font-mono text-sm  text-stone-400 dark:text-stone-600`}>Pagez</h1>
                    <a href={AppVersion.LinkToRepo} target='_blank' className='font-mono text-sm text-stone-400 dark:text-stone-600 capitalizen '>{AppVersion.Version}</a>
                </div>

                <div className='w-full h-fit'>
                    <div className={`group flex justify-between items-center w-full `}>



                        <button onClick={closeSB} className='text-stone-900 dark:text-stone-400 hidden max-md:block'>
                            <FiChevronLeft className='h-8 w-8 text-xl bg-stone-400 bg-opacity-20 dark:bg-opacity-15 rounded-md p-1 active:scale-75 transition ' />
                        </button>
                    </div>

                    <ul className={`sidebar w-full h-fit overscroll-contain flex flex-col gap-1`}>
                        <Link to="/" className={`h-[35px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${location.pathname === '/' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none '} `}>
                            <div className={` indicator opacity-0 ${location.pathname === '/' && 'opacity-100 '}`}></div>
                            <SlCompass className={`text-[18px] ${location.pathname === '/' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-xs font-light dark:text-stone-300 text-stone-700 tracking-wide overflow-clip whitespace-nowrap `}>Browse</p>
                        </Link>

                        <Link to="/search" className={`h-[35px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${location.pathname === '/search' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none '} `}>
                            <div className={` indicator opacity-0 ${location.pathname === '/search' && 'opacity-100 '}`}></div>
                            <IoSearchOutline className={`text-[18px] ${location.pathname === '/search' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-xs font-light dark:text-stone-300 text-stone-700 tracking-wide overflow-clip whitespace-nowrap `}>Search</p>
                        </Link>

                        <Link to={`/recentlyadded`} className={`h-[35px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${location.pathname === '/recentlyadded' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname === '/recentlyadded' && 'opacity-100 '}`}></div>
                            <PiMusicNotesPlusDuotone className={`text-[18px] ${location.pathname === '/recentlyadded' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-xs font-light dark:text-stone-300 text-stone-700 tracking-wide overflow-clip whitespace-nowrap `}>Recently Added</p>
                        </Link>

                        <Link to={`/liked/${id}`} className={`h-[35px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${location.pathname.includes('/liked/') && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname.includes('/liked/') && 'opacity-100 '}`}></div>
                            <IoMdHeartEmpty className={`text-[18px] ${location.pathname.includes('/liked/') ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-xs font-light dark:text-stone-300 text-stone-700 tracking-wide overflow-clip whitespace-nowrap `}>Liked</p>
                        </Link>

                        <Link to={`/trending`} className={`h-[35px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${location.pathname === '/trending' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname === '/trending' && 'opacity-100 '}`}></div>
                            <IoTrendingUp className={`text-[18px] ${location.pathname === '/trending' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-xs font-light dark:text-stone-300 text-stone-700 tracking-wide overflow-clip whitespace-nowrap `}>Trending</p>
                        </Link>

                        <Link to={`/history/${id}`} className={`h-[35px] flex items-center justify-start text-[15px] gap-3 px-[12px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${location.pathname.includes('/history/') && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group pointer-events-none  '}`}>
                            <div className={` indicator opacity-0 ${location.pathname.includes('/history/') && 'opacity-100 '}`}></div>
                            <GoHistory className={`text-[18px] ${location.pathname.includes('/history/') ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-xs font-light dark:text-stone-300 text-stone-700 tracking-wide overflow-clip whitespace-nowrap `}>History</p>
                        </Link>

                    </ul>
                </div>

            </div >
        </>

    )
});

export default SideBar