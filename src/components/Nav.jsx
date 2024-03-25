import defaultPfp from "../assets/images/default-pfp.jpg"
import { RiUser6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";
import { TbSunMoon } from "react-icons/tb";
import { LuLibrary } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { BsArrowsFullscreen } from "react-icons/bs";
import jQuery from "jquery";
import { useLocation } from "react-router-dom";

function Nav() {

    const location = useLocation();
    

    return (

        <header className="font-montserrat w-ful max-sm:sticky top-0 bg-transparent z-10 relative pl-5 pr-5 max-sm:px-5">
            {/* <Headroom pinStart={0}> */}
            <nav className="flex justify-end items-center py-5 sticky top-0 z-index-10 px-3">
            
                {/* <form className='relative w-full max-w-[450px]'>
                    <input className="search transition bg-gray-200 bg-opacity-60 rounded-lg text-sm placeholder:text-gray-600 text-black " type="search" placeholder="Find a Book.." />
                    <button type="submit" className="absolute top-0 bottom-0 m-auto right-1 transition hover:bg-slate-200 h-[80%] w-[40px] rounded-lg flex justify-center items-center">
                        <RiSearch2Line className="text-black text-lg" />
                    </button>
                </form> */}

                <div className="flex w-fit justify-end items-center min-w-[170px]  ">

                    {/* <a href="#" className="group navbar-link p-2">
                        <TbSunMoon className="text-2xl cursor-pointer relative transition text-primary group-hover:text-main-color" />
                    </a> */}

                    <a href="#" className="group navbar-link p-2 ml-5">
                        <LuLibrary className={`text-2xl cursor-pointer relative transition text-black dark:text-white ${location.pathname.includes("/book/") && 'text-white dark:text-white '} group-hover:text-black dark:group-hover:text-white`} />
                        <Notification label={9} />
                    </a>
                    <a href="#" className="group rounded-full ml-3 flex items-center justify-center relative">
                        <img src={defaultPfp} className=" h-9 w-9 rounded-full " />
                        <p className=" text-sm font-semibold absolute w-fit whitespace-nowrap py-2 px-3 right-0 -bottom-[140%] bg-stone-100 dark:bg-stone-900 dark:bg-opacity-30 dark:text-white backdrop-blur-md shadow-lg rounded-lg tranition hidden group-hover:block text-black">Clare thomson</p>
                    </a>

                </div>

            </nav>
            {/* </Headroom> */}
        </header>

    )
}

export default Nav