import pagesLogo from "../assets/images/pagez-logo.png"
import defaultPfp from "../assets/images/default-pfp.jpg"
import { BiBookAlt } from "react-icons/bi";
import { RiUser6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";
import Notification from "./Notification";
import { IoLanguage } from "react-icons/io5";
import { TbSunMoon } from "react-icons/tb";
import { RxEnterFullScreen } from "react-icons/rx";

import { BsArrowsFullscreen } from "react-icons/bs";

function Nav() {



    return (

        <header className="font-montserrat w-ful">
            {/* <Headroom pinStart={0}> */}
            <nav className="flex justify-between items-center max-container px-[2.5%] py-5 bg-white sticky top-0 z-index-10">
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium">
                    <img src={pagesLogo} alt="logo" className=" h-9" />
                    <h1 className="text-black font-medium text-[19px] font-DMsans">Pagez</h1>
                    
                </a>



                <div className="flex w-fit justify-end items-center gap-3    ">

                    <a href="#" className="group navbar-link max-sm:hidden">
                        <BsArrowsFullscreen className=" text-xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                    </a>

                    <a href="#" className="group navbar-link">
                        <TbSunMoon className="text-xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                    </a>

                    <a href="#" className="group navbar-link">
                        <IoLanguage className="text-xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                    </a>

                    <a href="#" className="group navbar-link">
                        <BiBookAlt className="text-xl cursor-pointer relative transition text-black group-hover:text-main-color" />
                        <Notification label={9} />
                    </a>
                    <a href="#" className="group navbar-link">
                        <img src={defaultPfp} />
                    </a>

                </div>

            </nav>
            {/* </Headroom> */}
        </header>

    )
}

export default Nav