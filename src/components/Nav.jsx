import pagesLogo from "../assets/images/pagez-logo.png"
import { BiBookAlt } from "react-icons/bi";
import { RiUser6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";
import { IoLanguage } from "react-icons/io5";
import { TbMoonStars } from "react-icons/tb";

function Nav() {



    return (

        <header className="font-montserrat w-ful">
            {/* <Headroom pinStart={0}> */}
            <nav className="flex justify-between items-center max-container px-[2.5%] py-4 bg-white sticky top-0 z-index-10">
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium">
                    <img src={pagesLogo} alt="logo" className=" h-9" />
                    <h1 className="text-black font-medium text-[19px] font-DMsans">Pagez</h1>
                </a>



                <div className="flex w-fit justify-end items-center gap-3 ">

                    <a href="#" className="relative transition rounded-md hover:bg-gray-100 p-2">
                        <TbMoonStars className="h-5 w-5 cursor-pointer relative transition text-black" />
                    </a>

                    <a href="#" className="relative transition rounded-md hover:bg-gray-100 p-2">
                        <IoLanguage className="h-5 w-5 cursor-pointer relative transition text-black" />
                    </a>

                    <a href="#" className="relative transition rounded-md hover:bg-gray-100 p-2">
                        <BiBookAlt className="h-5 w-5 cursor-pointer relative transition text-black" />
                        {/* <Notification label={9} /> */}
                    </a>
                    <a href="#" className="relative transition rounded-md hover:bg-gray-100 p-2">
                        <RiUser6Line className="h-5 w-5 cursor-pointer relative transition text-black" />
                    </a>

                </div>

            </nav>
            {/* </Headroom> */}
        </header>

    )
}

export default Nav