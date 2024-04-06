import avatar from "../assets/avatars/avatar red.png"
import { RiUser6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";
import { TbSunMoon } from "react-icons/tb";
import { LuLibrary } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { BsArrowsFullscreen } from "react-icons/bs";
import jQuery from "jquery";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { PiUserSwitchLight } from "react-icons/pi";
import { users } from "../constants/data";

function Nav({ openSidebar }) {

    const location = useLocation();

    const changeSidebar = () => {
        openSidebar()
    }

    const id = 'QHNXEXCNBQGALHZXXA58'

    const loggedInUser = users.find(findthis)
    function findthis(user){
        return user.id === id;
    }


    return (

        <header className="font-montserrat w-ful bg-transparent z-10 relative pl-5 pr-5 max-sm:px-5 ">
            {/* <Headroom pinStart={0}> */}
            <nav className="flex justify-end max-md:justify-between items-center py-5 sticky top-0 z-index-10 px-3 max-md:px-0">

                <button onClick={changeSidebar} className="hidden max-md:block ">
                    <HiMenuAlt1 className={`text-[30px] ${location.pathname.includes("/book") || location.pathname.includes("/history") || location.pathname.includes("/recentlyadded") || location.pathname.includes("/liked") || location.pathname.includes("/trending") || location.pathname.includes("/author") || location.pathname.includes("/myLibrary") || location.pathname.includes("/manageProfiles/") ? 'text-white dark:text-white ' : ''}`} />
                </button>

                <div className="flex w-fit justify-end items-center min-w-[170px] gap-4  ">

                    <Link to={`/manageProfiles/${id}`} className="group navbar-link  ml-5" title="Profiles">
                        <PiUserSwitchLight className={`text-[32px] cursor-pointer relative transition text-black dark:text-white ${location.pathname.includes("/book") || location.pathname.includes("/history") || location.pathname.includes("/recentlyadded") || location.pathname.includes("/liked") || location.pathname.includes("/trending") || location.pathname.includes("/author") || location.pathname.includes("/myLibrary") || location.pathname.includes("/manageProfiles/") ? 'text-white dark:text-white ' : ''}`} />
                    </Link>

                    <Link to={`/myLibrary/${id}`} className="group navbar-link " title="My Library">
                        <LuLibrary className={`text-[28px] cursor-pointer relative transition text-black dark:text-white ${location.pathname.includes("/book") || location.pathname.includes("/history") || location.pathname.includes("/recentlyadded") || location.pathname.includes("/liked") || location.pathname.includes("/trending") || location.pathname.includes("/author") || location.pathname.includes("/myLibrary") || location.pathname.includes("/manageProfiles/") ? 'text-white dark:text-white ' : ''}`} />
                        <Notification label={84} />
                    </Link>

                    <Link to={`/profile/${id}`} className="group rounded-full flex items-center justify-center relative ml-1 ring-1 ring-stone-100 dark:ring-stone-700 shadow">
                        <img src={loggedInUser.avatar} className=" h-8 w-8 rounded-full " />
                        <p className=" text-sm font-semibold absolute w-fit whitespace-nowrap py-2 px-3 right-0 -bottom-[140%] bg-stone-100 dark:bg-dark-hover  dark:bg-opacity-30 dark:text-white rounded-lg tranition hidden group-hover:block text-black ">{loggedInUser.userName}</p>
                    </Link>

                </div>

            </nav>
            {/* </Headroom> */}
        </header>
    )
}

export default Nav