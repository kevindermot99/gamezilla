import HeaderLogo from "../assets/images/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { navLinks } from "../constants";
import { bannerLinks } from "../constants";
import { BiBookAlt } from "react-icons/bi";
import { RiUser6Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";

function Nav() {

    const [isMini, setIsMini] = useState(false);

    const toggleMenu = () => {
        setIsMini(true);
        document.querySelector("body").classList.add("non-scrollable")
    }

    const closeMenu = () => {
        setIsMini(false);
        document.querySelector("body").classList.remove("non-scrollable")
    }



    return (

        <header className="font-montserrat w-ful ">
            <div className="flex justify-end items-center h-9 text-black padding-x py-0 gap-4 max-lg:px-3 max-lg:pr-5 hidden">
                {bannerLinks.map((item) => (
                    <a href={item.href} className="banner-link text-black">{item.label}</a>
                ))}
            </div>
            <Headroom pinStart={36}>
                <nav className="flex justify-between items-center max-container padding-x max-lg:px-3 max-lg:pr-5 py-2 bg-white ">
                    <a href="/" className="flex justify-start items-center gap-2 text-base font-medium">
                        <img src={HeaderLogo} alt="logo" className=" h-7  " />
                        <h1 className="text-black font-bold- text-3xl font-salsa">Pagez</h1>
                    </a>
                    <div className={`responsive-menu ${isMini ? "mini" : ""}`}>

                        <GrClose onClick={closeMenu} className="absolute right-5 text-xl hidden max-lg:block text-black cursor-pointer" />

                        <ul className="flex justify-center items-center gap-6 ">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className=" outline-none leading-normal text-sm font-medium text-black transition hover:text-main-color"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>


                    <div className="flex justify-center items-center gap-3">
                        <label className={`relative responsive-search ${isMini ? "mini" : ""} max-sm:hidden max-lg:mr-3 `}>
                            <input className="search" type="search" placeholder="Search.." />
                            <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-gray-400 " />
                        </label>

                        <a href="#" className="relative transition hover:text-main-color max-lg:mx-4">
                            <BiBookAlt className="h-5 w-5 mx-2 max-lg:mx-0 cursor-pointer relative transition text-black hover:text-main-color" />
                            <span className="absolute -right-0 max-lg:-right-2 -top-2 bg-red-600 font-normal rounded-full leading-normal h-4 w-4 text-xs flex justify-center items-center text-white">2</span>
                        </a>
                        <a href="#" className="relative transition hover:text-main-color max-lg:mx-4">
                            <RiUser6Line className="h-5 w-5 cursor-pointer relative transition text-black hover:text-main-color" />
                        </a>

                        <CgMenuRight onClick={toggleMenu} className="text-black ml-2 text-2xl hidden max-lg:block cursor-pointer transition hover:text-main-color" />

                    </div>

                </nav>
            </Headroom>
        </header>

    )
}

export default Nav