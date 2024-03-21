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
        <div className={`transition-width duration-300 ${sidebar === "big" && 'w-[240px]'}  ${sidebar === "small" && 'w-[80px]'}  relative h-[100vh] flex flex-col items-start justify-start px-3 py-5 bg-gray-50  dark:bg-gray-950 dark:bg-opacity-10`}>
            <button onClick={toggleSidebar} className={`absolute left-[105%] top-0 bottom-0 m-auto z-30 h-fit flex items-center justify-center rounded-full`}>
                {sidebar === "big" ?
                    <FaAngleLeft className="text-xl text-stone-200 dark:text-gray-800 transition hover:text-main-color" />
                    :
                    <FaAngleRight className="text-xl text-stone-200 dark:text-gray-800 transition hover:text-main-color" />
                }

            </button>
            <div className={`group flex justify-between items-center mb-3 w-full `}>

                <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full'} flex justify-start items-center text-base font-medium max-w-[50px] cursor-default `}>
                    <img src={pagesLogo} alt="logo" className={` transition h-auto w-[32px] mx-3 ${sidebar === "small" && 'pl-0'} `} />
                    <h1 className={`logoText ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                </div>
            </div>
            <ul className={`sidebar w-full h-full overflow-y-auto overflow-x-clip`}>
                <Link className={`active  h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 hover:bg-opacity-50 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <IoHomeOutline className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color ' />
                    <p className={`font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 hover:bg-opacity-50 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineExplore className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color ' />
                    <p className={`font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Explore</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 hover:bg-opacity-50 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <LuLibrary className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color ' />
                    <p className={`font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Libraries</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 hover:bg-opacity-50 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineContactSupport className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Support</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 hover:bg-opacity-50 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <SlSettings className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Settings</p>
                </Link>

                <div className='w-[95%] m-auto h-[1px] bg-stone-200 dark:bg-gray-800 my-3'></div>
                
                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 hover:bg-opacity-50 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <SlLike className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked Books</p>
                </Link>
                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg hover:bg-stone-200 dark:hover:bg-gray-800 hover:bg-opacity-50 ${sidebar === "small" && 'p-0 justify-center max-w-[50px]'}`}>
                    <MdOutlineWatchLater className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Play Later</p>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar