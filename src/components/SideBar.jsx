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
            <div className={` sticky top-0 ${sidebar === "big" && 'w-[280px]'}  ${sidebar === "small" && 'w-[120px]'}  relative h-[100vh] flex flex-col items-start justify-start pl-3 pr-2 py-3 bg-stone-100  dark:bg-dark-sidebar dark:bg-opacity-80 max-md:dark:bg-dark-hover max-md:dark:bg-opacity-100 backdrop-blur-2xl max-md:max-w-[80vw] max-md:round `}>

                <div className={`group justify-between items-center mb-5 w-full hidden`}>

                    <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full pl-[5px]'} flex justify-start items-center text-base font-medium cursor-default `}>
                        {/* <img src={pagesLogo} alt="logo" className={` transition h-auto w-[42px] mx-3`} /> */}
                        <h1 className={`logoText text-stone-400 px-2 py-2  ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                    </div>
                </div>
                <ul className={`sidebar w-full h-fit pr-2 overscroll-contain flex flex-col gap-1`}>
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

                <div className='w-[95%] m-auto h-[2px] bg-stone-200 dark:bg-stone-500 dark:bg-opacity-15 my-3 '></div>

                <div className="w-full flex flex-col overflow-y-auto custom-scrollbar overflow-x-clip h-full pr-2 min-h-fit  ">
                    <div className='flex justify-between items-center pr-2 mb-2'>
                        <p className='text-stone-400 dark:text-stone-300 capitalize text-sm px-2 py-2'>Liked Books</p>
                        <Link to={`/liked/${id}`} className='text-sm capitalize text-stone-700 dark:text-stone-300 hover:underline'>view all</Link>
                    </div>
                    {Books.map((book, index) => (
                        <Link to={`/book/${book.id}`} key={index} className=' w-full cursor-pointer h-fit flex items-center p-2 gap-3 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink'>
                            <img src={book.URL} alt={book.title} className='h-10 w-10 shadow-md rounded-sm ' />
                            <div className={` block w-full max-w-[70%] truncate text-ellipsis ${sidebar === "small" && " hidden"}`}>
                                <h1 className='truncate text-ellipsistext-black dark:text-white'>{book.title}</h1>
                                <p className={`truncate text-ellipsis text-stone-500 dark:text-stone-400 text-sm `}>{book.author}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='absolute bottom-0 left-0 w-full h-fit p-3 bg-white dark:bg-dark-sidebar hidden'>
                    <button onClick={toggleSidebar} className={`group w-full py-3 px-2 flex items-center justify-center rounded-lg hover:bg-main-color transition duration-300`}>
                        {sidebar === "big" ?
                            <TbLayoutSidebarRightExpand className="text-[26px] text-stone-500 dark:text-stone-500 transition group-hover:text-white" />
                            :
                            <TbLayoutSidebarLeftExpand className="text-[26px] text-stone-500 dark:text-stone-500 transition group-hover:text-white" />
                        }
                    </button>
                </div>

            </div>
        </>

    )
}

export default SideBar