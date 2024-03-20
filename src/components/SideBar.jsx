import React from 'react'
import pagesLogo from "../assets/images/pagez-logo.png"
import { TbMenu2 } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { Link } from 'react-router-dom';


function SideBar() {
    return (
        <div className="min-w-[240px] h-[100vh] flex flex-col items-start justify-start p-3 border-r border-gray-800 ">
            <div className="flex justify-start items-center gap-2 mb-5 px-2">
                <button className="h-[40px] w-[40px] transition hover:bg-gray-800 flex items-center justify-center rounded-full">
                    <TbMenu2 className="text-2xl text-white" />
                </button>
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium ">
                    <img src={pagesLogo} alt="logo" className=" h-7" />
                    <h1 className="logoText">Pagez</h1>
                </a>
            </div>
            <ul className='w-full h-full overflow-y-auto'>
                <Link className=' flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <GoHomeFill  className='text-[23px] '/>
                    <p className='font-light  '>Home</p>
                </Link>

                <Link className=' flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <GoHomeFill  className='text-[23px] '/>
                    <p className='font-light  '>Home</p>
                </Link>

                <Link className=' flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <GoHomeFill  className='text-[23px] '/>
                    <p className='font-light  '>Home</p>
                </Link>

                <Link className=' flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <GoHomeFill  className='text-[23px] '/>
                    <p className='font-light  '>Home</p>
                </Link>

                <Link className=' flex items-center justify-start text-[15px] gap-5 outline-none w-full px-4 py-3 transition rounded-lg  hover:bg-gray-800 '>
                    <GoHomeFill  className='text-[23px] '/>
                    <p className='font-light  '>Home</p>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar