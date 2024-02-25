import pagesLogo from "../assets/images/pagez-logo.png"
import { BiBookAlt } from "react-icons/bi";
import { RiUser6Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";

function Nav() {



    return (

        <header className="font-montserrat w-ful ">
            <Headroom pinStart={36}>
                <nav className="flex justify-between items-center max-container px-10 max-lg:px-5 max-lg:pr-5 py-4 bg-white ">
                    <a href="/" className="flex justify-start items-center gap-2 text-base font-medium">
                        <img src={pagesLogo} alt="logo" className=" h-9" />
                        <h1 className="text-black font-medium text-[19px] font-DMsans">Pagez</h1>
                    </a>
                    


                    <div className="flex w-3/4 max-sm:w-fit justify-end items-center gap-3 ">
                        <label className={`relative max-sm:hidden w-full `}>
                            <input className="search ring-1 ring-gray-100 focus:ring-violet-400" type="search" placeholder="Search" />
                            <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-gray-400 " />
                        </label>

                        <a href="#" className="relative transition rounded-md hover:bg-gray-100 p-2">
                            <BiBookAlt className="h-5 w-5 cursor-pointer relative transition text-black" />
                            <Notification label={9} />
                        </a>
                        <a href="#" className="relative transition rounded-md hover:bg-gray-100 p-2">
                            <RiUser6Line className="h-5 w-5 cursor-pointer relative transition text-black" />
                        </a>

                    </div>

                </nav>
            </Headroom>
        </header>

    )
}

export default Nav