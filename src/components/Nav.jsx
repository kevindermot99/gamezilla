import HeaderLogo from "../assets/images/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { navLinks } from "../constants";
import { bannerLinks } from "../constants";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";

function Nav() {
    return (
        <header className="font-montserrat absolute z-10 w-full bg-white">
            <div className="flex justify-end items-center bg-gray-50 padding-x py-1 gap-4">
                {bannerLinks.map((item) => (
                    <a href={item.href} className="banner-link">{item.label}</a>
                ))}


            </div>
            <nav className="flex justify-between items-center max-container padding-x py-3">
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium outline-none">
                    <img src={HeaderLogo}
                        alt="logo"
                        className="text-black w-7 h-7"
                    />
                    <span className="text-black">Selected.</span>
                </a>
                <ul className="flex justify-center items-center gap-10 max-lg:hidden">
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

                <div className="flex justify-center items-center gap-3">
                    <label className="relative">
                        <input className="search" type="search" placeholder="Search.." />
                        <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-slate-400" />
                    </label>

                    <GoHeart className="h-5 w-5 mx-2 cursor-pointer transition hover:text-blue-600" />
                    <a href="#" className="relative transition hover:text-blue-600">
                        <BsCart3 className="h-5 w-5 cursor-pointer relative" />
                        <span className="absolute -right-2 -top-2 bg-red-600 font-normal rounded-full leading-normal h-5 w-5 text-xs flex justify-center items-center text-white">2</span>
                    </a>

                </div>
            </nav>
        </header>
    )
}

export default Nav