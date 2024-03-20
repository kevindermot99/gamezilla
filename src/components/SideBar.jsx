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


function SideBar() {
    const [sidebar, setSidebar] = useState("big")

    const toggleSidebar = () => {
        if(sidebar === "big"){
            setSidebar("small")
        }
        else{
            setSidebar("big")
        }
    }
    console.log(sidebar)


    return (
        <div className={`transition-width  duration-200 ${sidebar === "big" && 'w-[240px]'}  ${sidebar === "small" && 'w-[70px] py-3 px-2'} relative h-[100vh] flex flex-col items-start justify-start p-3 bg-gray-950 bg-opacity-20`}>
            <div className={`group flex justify-between items-center gap-2 mb-3 px-3 ${sidebar === "small" && 'px-0 w-[50px]'} w-full`}>
                
                <div className={`${sidebar === "small" && 'w-full h-full flex justify-center items-center'} flex justify-start items-center gap-2 text-base font-medium h-[50px] cursor-default`}>
                    <img src={pagesLogo} alt="logo" className=" h-9 w-9" />
                    <h1 className={`logoText ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                </div>
                <button onClick={toggleSidebar} className={`${sidebar === "small" && 'absolute left-[80%] z-30  bg-gray-800 opacity-0 group-hover:opacity-100 '} h-[40px] w-[40px] transition hover:bg-gray-800 flex items-center justify-center rounded-full`}>
                    {sidebar === "big" ? 
                    <TbViewportNarrow className="text-2xl text-white opacity-50" />
                    :
                    <TbViewportWide className="text-2xl text-white opacity-50" />
                }
                    
                </button>
            </div>
            <ul className={`sidebar w-full h-full overflow-y-auto pr-1 overflow-x-clip`}>
                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg  hover:bg-gray-800 hover:bg-opacity-40 ${sidebar === "small" && 'px-0 justify-center w-[50px]'}`}>
                    <IoHomeOutline className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color ' />
                    <p className={`font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg  hover:bg-gray-800 hover:bg-opacity-40 ${sidebar === "small" && 'px-0 justify-center w-[50px]'}`}>
                    <MdOutlineExplore className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color ' />
                    <p className={`font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Explore</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg  hover:bg-gray-800 hover:bg-opacity-40 ${sidebar === "small" && 'px-0 justify-center w-[50px]'}`}>
                    <LuLibrary className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color ' />
                    <p className={`font-light  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Libraries</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg  hover:bg-gray-800 hover:bg-opacity-40 ${sidebar === "small" && 'px-0 justify-center w-[50px]'}`}>
                    <MdOutlineContactSupport className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Support</p>
                </Link>

                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg  hover:bg-gray-800 hover:bg-opacity-40 ${sidebar === "small" && 'px-0 justify-center w-[50px]'}`}>
                    <SlSettings className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Settings</p>
                </Link>
                <div className='w-[95%] m-auto h-[1px] bg-gray-800 my-3'></div>
                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg  hover:bg-gray-800 hover:bg-opacity-40 ${sidebar === "small" && 'px-0 justify-center w-[50px]'}`}>
                    <SlLike className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked Books</p>
                </Link>
                <Link className={`h-[50px]  group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 transition rounded-lg  hover:bg-gray-800 hover:bg-opacity-40 ${sidebar === "small" && 'px-0 justify-center w-[50px]'}`}>
                    <MdOutlineWatchLater className='text-[23px] min-h-6 min-w-6 group-hover:text-main-color' />
                    <p className={`font-light overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Play Later</p>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar