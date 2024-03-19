import pagesLogo from "../assets/images/pagez-logo.png"
import defaultPfp from "../assets/images/default-pfp.jpg"
import { RiUser6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";
import { TbSunMoon } from "react-icons/tb";
import { LuLibrary } from "react-icons/lu";

import { BsArrowsFullscreen } from "react-icons/bs";

function Nav() {



    return (

        <header className="font-montserrat w-ful max-sm:sticky top-0 bg-white z-20 px-7 max-sm:px-5">
            {/* <Headroom pinStart={0}> */}
            <nav className="flex justify-between items-center max-container py-5 bg-white sticky top-0 z-index-10">
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium">
                    <img src={pagesLogo} alt="logo" className=" h-9" />
                    <h1 className="logoText">Pagez</h1>
                    
                </a>



                <div className="flex w-fit justify-end items-center   ">

                    <a href="#" className="group navbar-link p-2">
                        <TbSunMoon className="text-2xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                    </a>

                    <a href="#" className="group navbar-link p-2 ml-2">
                        <LuLibrary className="text-2xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                        {/* <Notification label={9} /> */}
                    </a>
                    <a href="#" className="group navbar-link rounded-full ml-5">
                        <img src={defaultPfp} className=" h-8 rounded-full " />
                    </a>

                </div>

            </nav>
            {/* </Headroom> */}
        </header>

    )
}

export default Nav