import HeaderLogo from "../assets/images/favicon.png"
import { CgMenuRight } from "react-icons/cg";
import { navLinks } from "../constants";
import { bannerLinks } from "../constants";
import { IoMdHeartEmpty } from "react-icons/io";
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
                <a href="/" className="flex justify-start items-center gap-2 text-base font-semibold outline-none">
                    <img src={HeaderLogo}
                        alt="logo"
                        height={32}
                        width={32}
                    />
                    <span className="text-black">Selected.</span>
                </a>
                <ul className="flex justify-center items-center gap-10 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className=" outline-none leading-normal text-sm font-semibold text-black transition hover:text-blue-600"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}

                </ul>

                <div className="flex justify-center items-center gap-3">
                    <label className="relative">
                        <input className="search" type="search" placeholder="Search.."/>
                        <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-slate-400" />
                    </label>
                </div>

            </nav>
        </header>
    )
}

export default Nav