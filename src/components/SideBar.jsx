import React, { useEffect, useState } from 'react'
import pagesLogo from "../assets/images/pagez-logo.png"
import { TbMenu2 } from "react-icons/tb";
import { TbViewportNarrow } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdOutlineExplore } from "react-icons/md";
import { LuLibrary } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbViewportWide } from "react-icons/tb";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


function SideBar() {
    const [sidebar, setSidebar] = useState("big")

    const toggleSidebar = () => {
        if (sidebar === "big") {
            setSidebar("small")
            localStorage.setItem("sidebar","small")
        }
        else {
            setSidebar("big")
            localStorage.setItem("sidebar","big")
        }
    }
    
    useEffect(() => {
        const sidebarState = localStorage.getItem("sidebar")
        if (sidebarState === "big") {
            setSidebar("big")
        }
        else {
            setSidebar("small")
        }
    },[])


    return (
        <div className={` sticky top-0 transition-width duration-300 ${sidebar === "big" && 'w-[240px]'}  ${sidebar === "small" && 'w-[80px]'}  relative h-[100vh] flex flex-col items-start justify-start px-3 py-5 bg-gray-50  dark:bg-dark-sidebar`}>
            <button onClick={toggleSidebar} className={`absolute left-[105%] top-0 bottom-0 m-auto z-30 h-fit flex items-center justify-center rounded-full`}>
                {sidebar === "big" ?
                    <FaAngleLeft className="text-xl text-stone-500 dark:text-gray-700 transition hover:text-main-color" />
                    :
                    <FaAngleRight className="text-xl text-stone-500 dark:text-gray-700 transition hover:text-main-color" />
                }

            </button>
            <div className={`group flex justify-between items-center mb-3 w-full `}>

                <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full'} flex justify-start items-center text-base font-medium max-w-[50px] cursor-default `}>
                    <img src={pagesLogo} alt="logo" className={` transition h-auto w-[32px] mx-3 ${sidebar === "small" && 'pl-0'} `} />
                    <h1 className={`logoText ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                </div>
            </div>
            <ul className={`sidebar w-full h-full overflow-y-auto overflow-x-clip`}>
                <Link className={`active  h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg bg-opacity-10 hover:bg-gray-100 dark:hover:bg-stone-800 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <IoHomeOutline className='text-[22px5 min-h-5 min-w-5 group-hover:text-main-color opacity-70 ' />
                    <p className={` text-sm font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg bg-opacity-10 hover:bg-gray-100 dark:hover:bg-stone-800 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineExplore className='text-[22px] min-h-5 min-w-5 group-hover:text-main-color opacity-70 ' />
                    <p className={` text-sm font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Explore</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg bg-opacity-10 hover:bg-gray-100 dark:hover:bg-stone-800 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <LuLibrary className='text-[22px] min-h-5 min-w-5 group-hover:text-main-color opacity-70 ' />
                    <p className={` text-sm font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Libraries</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg bg-opacity-10 hover:bg-gray-100 dark:hover:bg-stone-800 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineContactSupport className='text-[22px] min-h-5 min-w-5 group-hover:text-main-color opacity-70' />
                    <p className={` text-sm font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Support</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg bg-opacity-10 hover:bg-gray-100 dark:hover:bg-stone-800 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <SlSettings className='text-[22px] min-h-5 min-w-5 group-hover:text-main-color opacity-70' />
                    <p className={` text-sm font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Settings</p>
                </Link>

                <div className='w-[95%] m-auto h-[1px] bg-stone-200 dark:bg-stone-700  my-3'></div>
                
                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg bg-opacity-10 hover:bg-gray-100 dark:hover:bg-stone-800 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <SlLike className='text-[22px] min-h-5 min-w-5 group-hover:text-main-color opacity-70' />
                    <p className={` text-sm font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked Books</p>
                </Link>
                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg bg-opacity-10 hover:bg-gray-100 dark:hover:bg-stone-800 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineWatchLater className='text-[22px] min-h-5 min-w-5 group-hover:text-main-color opacity-70' />
                    <p className={` text-sm font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Play Later</p>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar