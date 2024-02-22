import HeaderLogo from "../assets/images/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { navLinks } from "../constants";
import { bannerLinks } from "../constants";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";

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
        <header className="font-montserrat w-full bg-white">
            <div className="flex justify-end items-center bg-gray-50 max-lg:hidden padding-x py-1 gap-4">
                {bannerLinks.map((item) => (
                    <a href={item.href} className="banner-link">{item.label}</a>
                ))}


            </div>
            <nav className="flex justify-between items-center max-container padding-x max-lg:px-5 max-lg:py-6 py-3">
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium outline-none">
                    <img src={HeaderLogo}
                        alt="logo"
                        className="text-black w-7 h-7"
                    />
                    <span className="text-black font-bold text-xl">Selected.</span>
                </a>
                <div className={`responsive-menu ${isMini ? "mini" : ""}`}>

                    <GrClose onClick={closeMenu} className="absolute right-5 text-xl hidden max-lg:block cursor-pointer" />

                    <ul className="flex justify-center items-center gap-6 ">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className=" outline-none leading-normal text-sm font-medium text-black transition hover:text-blue-600"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>


                <div className="flex justify-center items-center gap-3">
                    <label className={`relative responsive-search ${isMini ? "mini" : ""} max-sm:hidden `}>
                        <input className="search" type="search" placeholder="Search.." />
                        <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-slate-400" />
                    </label>

                    <GoHeart className="h-5 w-5 mx-2 max-lg:mx-0 cursor-pointer transition hover:text-blue-600" />

                    <a href="#" className="relative transition hover:text-blue-600 max-lg:mx-4">
                        <BsCart3 className="h-5 w-5 cursor-pointer relative" />
                        <span className="absolute -right-2 -top-2 bg-red-600 font-normal rounded-full leading-normal h-5 w-5 text-xs flex justify-center items-center text-white">2</span>
                    </a>

                    <CgMenuRight onClick={toggleMenu} className="text-black text-2xl hidden max-lg:block cursor-pointer transition hover:text-blue-600" />

                </div>

            </nav>
        </header>
    )
}

export default Nav