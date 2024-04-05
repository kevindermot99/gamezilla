import React, { useEffect, useState } from 'react'
import { memo } from 'react';
import pagesLogo from "../assets/images/pagez-logo.png"
import { GoHome } from "react-icons/go";
import { Link, useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { Books } from '../constants/data';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoTrendingUp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { PiMusicNotesPlusDuotone } from "react-icons/pi";
import LogoDarkMode from '../assets/images/Pagez_Logo__dark_mode.png'
import LogoLightMode from '../assets/images/Pagez_Logo__light_mode.png'
import audio1 from '../assets/musics/1.wav'
import { BsCloudDownload } from "react-icons/bs";
import { IoShuffleOutline } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoRepeatOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
import { AppVersion } from '../constants/data';


const SideBar = React.memo(({ closeSidebar }) => {
    const [sidebar, setSidebar] = useState("big")
    const location = useLocation()
    const [nowPlaying, setNowPlaying] = useState(null);



    useEffect(() => {
        const nowPlayingBookId = localStorage.getItem("nowPlaying");
        if (nowPlayingBookId) {
            const res = Books.find(book => book.id === nowPlayingBookId);
            setNowPlaying(res);
        }
    }, []); // Include other dependencies as needed




    const toggleSidebar = () => {
        if (sidebar === "big") {
            setSidebar("small")
            localStorage.setItem("sidebar", "small")
        }
        else {
            setSidebar("big")
            localStorage.setItem("sidebar", "big")
        }
    }

    const closeSB = () => {
        closeSidebar()
    }

    const id = '198h9rbs7d9872';


    return (
        <>
            <div onClick={closeSB} className={` hidden max-md:flex max-md:fixed max-md:w-full max-md:h-[100vh] justify-start items-start `}></div>
            <div className={` sticky top-0 ${sidebar === "big" && 'w-[280px]'}  ${sidebar === "small" && 'w-[120px]'}  relative h-[100vh] overflow-y-auto custom-scrollbar flex flex-col items-start justify-between px-3 py-3 bg-stone-100  dark:bg-dark-sidebar dark:bg-opacity-50 dark:backdrop-blur-lg max-md:dark:bg-dark-hover max-md:dark:bg-opacity-100 max-md:max-w-[80vw] gap-2 max-md:rounded-r-xl`}>

                <div className='w-full h-fit'>
                    <div className={`group justify-between items-center w-full mb-6`}>

                        <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full pl-[5px]'} flex justify-start items-center text-base font-medium cursor-default `}>
                            <h1 className={`logoText text-stone-900 dark:text-stone-400 pt-2 pb-1 px-4 tracking-wide  ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                            <p className='bg-stone-200 text-xs text-stone-400 pt-[4px] pb-[2px] px-2 rounded-xl self-end capitalize '>{AppVersion}</p>
                        </div>
                    </div>

                    <ul className={`sidebar w-full h-fit overscroll-contain flex flex-col gap-1`}>
                        <Link to="/" className={`h-[42px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group'} `}>
                            <div className={` indicator opacity-0 ${location.pathname === '/' && 'opacity-100 '}`}></div>
                            <GoHome className={`text-[22px] mx-3 min-h-7 min-w-5 ${location.pathname === '/' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                        </Link>

                        <Link to="/search" className={`h-[42px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/search' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group'} `}>
                            <div className={` indicator opacity-0 ${location.pathname === '/search' && 'opacity-100 '}`}></div>
                            <IoSearchOutline className={`text-[22px] mx-3 min-h-7 min-w-5 ${location.pathname === '/search' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Search</p>
                        </Link>

                        <Link to={`/recentlyadded`} className={`h-[42px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/recentlyadded' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                            <div className={` indicator opacity-0 ${location.pathname === '/recentlyadded' && 'opacity-100 '}`}></div>
                            <PiMusicNotesPlusDuotone className={`text-[22px] mx-3 min-h-7 min-w-5 ${location.pathname === '/recentlyadded' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Recently Added</p>
                        </Link>

                        <Link to={`/liked/${id}`} className={`h-[42px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname.includes('/liked/') && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                            <div className={` indicator opacity-0 ${location.pathname.includes('/liked/') && 'opacity-100 '}`}></div>
                            <IoMdHeartEmpty className={`text-[22px] mx-3 min-h-7 min-w-5 ${location.pathname.includes('/liked/') ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked</p>
                        </Link>

                        <Link to={`/trending`} className={`h-[42px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/trending' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                            <div className={` indicator opacity-0 ${location.pathname === '/trending' && 'opacity-100 '}`}></div>
                            <IoTrendingUp className={`text-[22px] mx-3 min-h-7 min-w-5 ${location.pathname === '/trending' ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Trending</p>
                        </Link>

                        <Link to={`/history/${id}`} className={`h-[42px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname.includes('/history/') && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                            <div className={` indicator opacity-0 ${location.pathname.includes('/history/') && 'opacity-100 '}`}></div>
                            <GoHistory className={`text-[22px] mx-3 min-h-7 min-w-5 ${location.pathname.includes('/history/') ? 'opacity-80 ' : 'opacity-30'}`} />
                            <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>History</p>
                        </Link>

                    </ul>
                </div>

                <div className='w-full h-fit'>

                    <h1 className='font-bold text-lg text-stone-600 dark:text-stone-500 mb-2 '>Last Played</h1>

                    <div className='relative w-full h-fit  bg-stone-100 dark:bg-dark-player rounded-xl flex flex-col justify-start items-center px-7 pb-8 pt-5 overflow-clip '>
                        {nowPlaying === null && (
                            <img src={LogoDarkMode} className=' absolute top-0 left-0 right-0 bottom-0 m-auto -z-0 h-full w-full object-cover opacity-20 blur-lg p-5 ' />
                        )}
                        {nowPlaying && (
                            <img src={nowPlaying.URL} className=' absolute top-0 left-0 right-0 bottom-0 m-auto -z-0 h-[500px] w-[500px] object-cover opacity-10 blur-md ' />
                        )}

                        <Link to="/" className={`relative z-10 h-fit transition aspect-square  flex items-center justify-center hover:scale-105 active:scale-90 self-end mb-3 pointer-events-none ${nowPlaying && ' pointer-events-auto '} `}>
                            <GoLinkExternal className='text-black dark:text-stone-500 text-[22px] cursor-pointer dark:group-hover:text-stone-200 ' title='Open' />
                        </Link>

                        <div className=' z-10flex justify-center items-center h-[120px] min-h-[120px] w-[120px] bg-stone-200 dark:bg-dark-navlink bg-opacity-70  rounded-xl mb-3 overflow-hidden shadow  '>
                            {nowPlaying === null && (
                                <img src={LogoDarkMode} className='h-auto m-auto object-cover opacity-60 p-5' />
                            )}
                            {nowPlaying && (
                                <img src={nowPlaying.URL} className='h-full w-full object-cover opacity-90' />
                            )}


                        </div>

                        <div className=' z-10 flex justify-between w-full pt-2'>
                            <span className='w-[60%] flex flex-col gap-1'>
                                {nowPlaying === null && (
                                    <h1 className='truncate text-ellipsis text-black dark:text-white text-[13px] font-semibold leading-4'>
                                        Book Name
                                    </h1>
                                )}
                                {nowPlaying && (
                                    <Link to={`/book/${nowPlaying.id}`} className='truncate text-ellipsis text-black dark:text-white text-[13px] font-semibold leading-4 hover:underline'>
                                        {nowPlaying.title}
                                    </ Link>
                                )}
                                {nowPlaying === null && (
                                    <p className='truncate text-ellipsis text-black dark:text-white text-[13px] font-light  leading-4'>
                                        Author
                                    </p>
                                )}
                                {nowPlaying && (
                                    <Link to={`/author/${nowPlaying.author}`} className='truncate text-ellipsis text-black dark:text-white text-[13px] font-light  leading-4 hover:underline '>
                                        {nowPlaying.author}
                                    </Link>
                                )}

                            </span>
                            <span className='w-fit flex items-center justify-start gap-2  '>

                                <button className={`group h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 pointer-events-none ${nowPlaying && ' pointer-events-auto '}   `} title={`Like`}>
                                    <IoMdHeartEmpty className='text-black dark:text-stone-500 text-[24px] cursor-pointer dark:group-hover:text-stone-200' />
                                </button>

                                <button className={`group h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 pointer-events-none ${nowPlaying && ' pointer-events-auto '} `} title={`Download`}>
                                    <BsCloudDownload className='text-black dark:text-stone-500 text-[22px] cursor-pointer dark:group-hover:text-stone-200' />
                                </button>

                            </span>
                        </div>

                    </div>
                </div>


            </div >
        </>

    )
});

export default SideBar