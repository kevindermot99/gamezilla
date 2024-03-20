import React from 'react'
import pagesLogo from "../assets/images/pagez-logo.png"
import { TbMenu2 } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdOutlineExplore } from "react-icons/md";
import { LuLibrary } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";


function SideBar() {
    return (
        <div className="min-w-[240px] h-[100vh] flex flex-col items-start justify-start p-3 border-r border-gray-800 border-opacity-50 ">
            <div className="flex justify-start items-center gap-2 mb-5 px-2">
                <button className="h-[40px] w-[40px] transition hover:bg-gray-800 flex items-center justify-center rounded-full">
                    <TbMenu2 className="text-2xl text-white" />
                </button>
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium ">
                    <img src={pagesLogo} alt="logo" className=" h-7" />
                    <h1 className="logoText">Pagez</h1>
                </a>
            </div>
            <ul className='sidebar w-full h-full overflow-y-auto'>
                <Link className=' group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <IoHomeOutline className='text-[23px] group-hover:text-main-color ' />
                    <p className='font-light  '>Home</p>
                </Link>

                <Link className=' group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <MdOutlineExplore className='text-[23px] group-hover:text-main-color ' />
                    <p className='font-light  '>Explore</p>
                </Link>

                <Link className=' group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <LuLibrary className='text-[23px] group-hover:text-main-color ' />
                    <p className='font-light  '>Libraries</p>
                </Link>

                <Link className='group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg hover:bg-gray-800'>
                    <MdOutlineContactSupport className='text-[23px] group-hover:text-main-color' />
                    <p className='font-light'>Support</p>
                </Link>

                <Link className='group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg hover:bg-gray-800'>
                    <MdOutlineSettingsSuggest className='text-[23px] group-hover:text-main-color' />
                    <p className='font-light'>Settings</p>
                </Link>
                <div className='w-[95%] m-auto h-[1px] bg-gray-800 my-3'></div>
                <Link className='group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg hover:bg-gray-800'>
                    <SlLike className='text-[23px] group-hover:text-main-color' />
                    <p className='font-light'>Liked Books</p>
                </Link>
                <Link className='group flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg hover:bg-gray-800'>
                    <MdOutlineWatchLater className='text-[23px] group-hover:text-main-color' />
                    <p className='font-light'>Play Later</p>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar