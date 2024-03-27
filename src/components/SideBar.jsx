import React, { useEffect, useState } from 'react'
import pagesLogo from "../assets/images/pagez-logo.png"
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { Books } from '../constants/data';
import { IoMdHeartEmpty } from "react-icons/io";
import { FiTrendingUp } from "react-icons/fi";
import { LuHistory } from "react-icons/lu";
import { MdOutlineLibraryAdd } from "react-icons/md";


function SideBar() {
    const [sidebar, setSidebar] = useState("big")

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

    // useEffect(() => {
    //     const sidebarState = localStorage.getItem("sidebar")
    //     if (sidebarState === "big") {
    //         setSidebar("big")
    //     }
    //     else {
    //         setSidebar("small")
    //     }
    // }, [])


    return (
        <div className={` sticky top-0 ${sidebar === "big" && 'w-[280px]'}  ${sidebar === "small" && 'w-[120px]'} duration-200  relative h-[100vh] flex flex-col items-start justify-start pl-3 pr-2 py-3 bg-stone-100  dark:bg-dark-sidebar dark:bg-opacity-95 backdrop-blur-2xl  `}>

            <div className={`group justify-between items-center mb-5 w-full hidden`}>

                <div className={`${sidebar === "small" && 'flex justify-center items-center gap-0 max-w-[50px] w-full pl-[5px]'} flex justify-start items-center text-base font-medium cursor-default `}>
                    {/* <img src={pagesLogo} alt="logo" className={` transition h-auto w-[42px] mx-3`} /> */}
                    <h1 className={`logoText text-stone-400 px-2 py-2  ${sidebar === "small" && 'hidden'}`}>Pagez</h1>
                </div>
            </div>
            <ul className={`sidebar w-full h-full overflow-y-auto overflow-x-clip pr-2 overscroll-contain custom-scrollbar `}>
                <Link to="/" className={`h-[45px]  group flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'}`}>
                    <GoHome className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Home</p>
                </Link>

                <Link to="/search" className={`h-[45px]  group flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'}`}>
                    <IoSearch className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Search</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'}`}>
                    <MdOutlineLibraryAdd className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Recently Added</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'}`}>
                    <IoMdHeartEmpty className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Liked</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'}`}>
                    <FiTrendingUp className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>Trending</p>
                </Link>

                <Link className={`h-[45px]  group flex items-center justify-start text-[15px] gap-2 px-[5px] outline-none w-full transition duration-100 rounded-lg hover:bg-stone-200 dark:hover:bg-dark-navlink  ${sidebar === "small" && 'max-w-[100%] justify-center'}`}>
                    <LuHistory className='text-[22px] mx-3 min-h-7 min-w-6 opacity-50  group-hover:opacity-100' />
                    <p className={` text-sm font-medium dark:text-stone-300 text-stone-700  overflow-clip whitespace-nowrap ${sidebar === "small" && 'hidden'}`}>History</p>
                </Link>


                <div className='w-[95%] m-auto h-[2px] bg-stone-200 dark:bg-stone-500 dark:bg-opacity-15 my-3'></div>

                <div className="w-full h-fit flex flex-col">
                    <div className='flex justify-between items-center pr-2 mb-2'>
                        <p className='text-stone-400 dark:text-stone-300 capitalize text-sm px-2 py-2'>Liked Books</p>
                        <Link to="/" className='text-sm capitalize text-stone-700 dark:text-stone-300 hover:underline'>view all</Link>
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
            </ul>

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
    )
}

export default SideBar