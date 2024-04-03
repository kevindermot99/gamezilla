import React, { useEffect, useState } from 'react'
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
import { BsCloudDownload } from "react-icons/bs";
import { IoShuffleOutline } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoRepeatOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";


function SideBar({ closeSidebar }) {
    const [sidebar, setSidebar] = useState("big")
    const location = useLocation()

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
            <div className={` sticky top-0 ${sidebar === "big" && 'w-[280px]'}  ${sidebar === "small" && 'w-[120px]'}  relative h-[100vh] overflow-y-auto custom-scrollbar flex flex-col items-start justify-between px-3 py-3 bg-stone-100  dark:bg-dark-sidebar max-md:dark:bg-dark-hover max-md:dark:bg-opacity-100 max-md:max-w-[80vw] gap-2 max-md:rounded-r-xl`}>

                <div className={`group justify-between items-center mb-5 w-full hidden`}>

                    <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full pl-[5px]'} flex justify-start items-center text-base font-medium cursor-default `}>
                        {/* <img src={pagesLogo} alt="logo" className={` transition h-auto w-[42px] mx-3`} /> */}
                        <h1 className={`logoText text-stone-400 px-2 py-2  ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                    </div>
                </div>
                <ul className={`sidebar w-full h-fit overscroll-contain flex flex-col gap-1`}>
                    <Link to="/" className={`h-[45px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group'} `}>
                        <div className={` indicator opacity-0 ${location.pathname === '/' && 'opacity-100 '}`}></div>
                        <GoHome className={`text-[22px] mx-3 min-h-7 min-w-6 ${location.pathname === '/' ? 'opacity-80 ' : 'opacity-30'}`} />
                        <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                    </Link>

                    <Link to="/search" className={`h-[45px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/search' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group'} `}>
                        <div className={` indicator opacity-0 ${location.pathname === '/search' && 'opacity-100 '}`}></div>
                        <IoSearchOutline className={`text-[22px] mx-3 min-h-7 min-w-6 ${location.pathname === '/search' ? 'opacity-80 ' : 'opacity-30'}`} />
                        <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Search</p>
                    </Link>

                    <Link to={`/recentlyadded`} className={`h-[45px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/recentlyadded' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                        <div className={` indicator opacity-0 ${location.pathname === '/recentlyadded' && 'opacity-100 '}`}></div>
                        <PiMusicNotesPlusDuotone className={`text-[22px] mx-3 min-h-7 min-w-6 ${location.pathname === '/recentlyadded' ? 'opacity-80 ' : 'opacity-30'}`} />
                        <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Recently Added</p>
                    </Link>

                    <Link to={`/liked/${id}`} className={`h-[45px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname.includes('/liked/') && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                        <div className={` indicator opacity-0 ${location.pathname.includes('/liked/') && 'opacity-100 '}`}></div>
                        <IoMdHeartEmpty className={`text-[22px] mx-3 min-h-7 min-w-6 ${location.pathname.includes('/liked/') ? 'opacity-80 ' : 'opacity-30'}`} />
                        <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked</p>
                    </Link>

                    <Link to={`/trending`} className={`h-[45px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname === '/trending' && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                        <div className={` indicator opacity-0 ${location.pathname === '/trending' && 'opacity-100 '}`}></div>
                        <IoTrendingUp className={`text-[22px] mx-3 min-h-7 min-w-6 ${location.pathname === '/trending' ? 'opacity-80 ' : 'opacity-30'}`} />
                        <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Trending</p>
                    </Link>

                    <Link to={`/history/${id}`} className={`h-[45px] flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'} ${location.pathname.includes('/history/') && 'bg-stone-200 dark:bg-dark-navlink relative pointer-events-nonen group '}`}>
                        <div className={` indicator opacity-0 ${location.pathname.includes('/history/') && 'opacity-100 '}`}></div>
                        <GoHistory className={`text-[22px] mx-3 min-h-7 min-w-6 ${location.pathname.includes('/history/') ? 'opacity-80 ' : 'opacity-30'}`} />
                        <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>History</p>
                    </Link>

                </ul>

                {/* <div className='flex justify-between items-center pr-2 w-full bg-stone-100 dark:bg-dark-sidebar max-md:bg-stone-100 max-md:dark:bg-dark-hover mt-3'>
                        <p className='text-stone-400 dark:text-stone-300 capitalize text-sm px-2 py-2'>Liked Books</p>
                        <Link to={`/liked/${id}`} className='text-sm capitalize text-stone-700 dark:text-stone-300 hover:underline'>view all</Link>
                    </div>
                <div className='w-[95%] m-auto h-[2px] bg-stone-200 dark:bg-stone-500 dark:bg-opacity-15 mb-3 '></div>

                <div className="w-full flex flex-col overflow-y-auto custom-scrollbar relative h-full pr-2 mb-3">
                    
                    {Books.map((book, index) => (
                        <Link to={`/book/${book.id}`} key={index} onClick={closeSB} className=' w-full cursor-pointer h-fit flex items-center py-2 px-4 gap-3 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink select-none'>
                           <div className={` block w-full max-w-[100%] truncate text-ellipsis ${sidebar === "small" && " hidden"}`}>
                                <h1 className='truncate text-ellipsistext-black dark:text-white'>{book.title}</h1>
                                <p className={`truncate text-ellipsis text-stone-500 dark:text-stone-400 text-sm `}>{book.author}</p>
                            </div>
                        </Link>
                    ))}
                </div> */}

                <div className='sticky bottom-0 w-full h-fit min-h-[330px] bg-white dark:bg-dark-player rounded-xl flex flex-col justify-start items-center px-7 pb-8 pt-5 overflow-hidden '>
                    <img src={LogoDarkMode} className=' absolute top-0 left-0 right-0 bottom-0 m-auto -z-10 h-full w-full object-cover opacity-10 blur-md ' />
                    <Link to="/" className='h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 self-end mb-3' title={`Now Playing`}>
                        <GoLinkExternal className='text-black dark:text-stone-200 text-[22px] cursor-pointer ' />
                        </Link>

                    <div className='flex justify-center items-center h-[100px] min-h-[100px] w-[100px] bg-stone-200 dark:bg-dark-navlink bg-opacity-70  rounded-xl mb-3 '>
                        <img src={LogoDarkMode} className='h-16 opacity-60' />
                    </div>

                    <div className=' flex justify-between w-full pt-2'>
                        <span className='w-[60%] flex flex-col gap-1'>
                            <h1 className='truncate text-ellipsis text-black dark:text-white text-[13px] font-semibold leading-4'>Harry Potter and the chamber of secrets</h1>
                            <p className='truncate text-ellipsis text-black dark:text-white text-[13px] font-light  leading-4'>J.K. Rowling</p>
                        </span>
                        <span className='w-fit flex items-center justify-start gap-2  '>

                            <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 ' title={`Like`}>
                                <IoMdHeartEmpty className='text-black dark:text-stone-200 text-[24px] cursor-pointer ' />
                            </button>

                            <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 ' title={`Download`}>
                                <BsCloudDownload className='text-black dark:text-stone-200 text-[22px] cursor-pointer ' />
                            </button>

                        </span>
                    </div>

                    <div className='w-full pb-2 '>

                        <input id="default-range" type="range" defaultValue={0} className="w-full h-1 mb-3 bg-stone-200 rounded-lg appearance-none cursor-pointer dark:bg-stone-600" />

                        <span className='flex justify-between'>
                            <p className='text-black dark:text-white text-[13px] font-light  leading-4'>01:31</p>
                            <p className='text-black dark:text-white text-[13px] font-light  leading-4'>13:42</p>
                        </span>
                    </div>

                    <div className='w-full flex items-center  justify-between '>
                        <button className=' h-[35px] w-[35px] rounded-full transition aspect-square  flex items-center justify-center -100 hover:bg-stone-200 dark:hover:bg-dark-navlink opacity-80 hover:opacity-100 active:scale-90 ' title={`Download`}>
                            <IoShuffleOutline className='text-stone-700 
                             dark:text-stone-200 text-[20px] cursor-pointer ' title='Download' />
                        </button>
                        <button className=' h-[35px] w-[35px] rounded-full transition aspect-square  flex items-center justify-center -100 hover:bg-stone-200 dark:hover:bg-dark-navlink opacity-80 hover:opacity-100 active:scale-90 ' title={`Download`}>
                            <IoPlaySkipBack className='text-stone-700 
                             dark:text-stone-200 text-[20px] cursor-pointer ' title='Download' />
                        </button>
                        <button className=' h-[35px] w-[35px] rounded-full transition aspect-square  flex items-center justify-center -100 hover:bg-stone-200 dark:hover:bg-dark-navlink opacity-80 hover:opacity-100 active:scale-90 ' title={`Download`}>
                            <GiPauseButton className='text-stone-700 
                             dark:text-stone-200 text-[17px] cursor-pointer ' title='Download' />
                        </button>
                        <button className=' h-[35px] w-[35px] rounded-full transition aspect-square  flex items-center justify-center -100 hover:bg-stone-200 dark:hover:bg-dark-navlink opacity-80 hover:opacity-100 active:scale-90 ' title={`Download`}>
                            <IoPlaySkipForward className='text-stone-700 
                             dark:text-stone-200 text-[20px] cursor-pointer ' title='Download' />
                        </button>
                        <button className=' h-[35px] w-[35px] rounded-full transition aspect-square  flex items-center justify-center -100 hover:bg-stone-200 dark:hover:bg-dark-navlink opacity-80 hover:opacity-100 active:scale-90 ' title={`Download`}>
                            <IoRepeatOutline className='text-stone-700 
                             dark:text-stone-200 text-[20px] cursor-pointer ' title='Download' />
                        </button>
                    </div>

                </div>

            </div>
        </>

    )
}

export default SideBar