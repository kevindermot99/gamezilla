import HeaderLogo from "../assets/images/favicon.png"
import { CgMenuRight } from "react-icons/cg";
import { navLinks } from "../constants";

function Nav() {
    return (
        <header className="font-montserrat padding-x py-3 absolute z-10 w-full bg-slate-800">
            <nav className="flex justify-between items-center max-container">
                <a href="/" className="flex justify-start items-center gap-2 text-base font-semibold outline-none">
                    <img src={HeaderLogo}
                        alt="logo"
                        height={32}
                        width={32}
                    />
                    <span className="text-white">Selected.</span>
                </a>
                <ul className="flex justify-center items-center gap-10 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className=" outline-none leading-normal text-sm font-medium text-white transition hover:text-blue-400"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                
                <div className="flex justify-center items-center gap-3">
                    <a href="#" className="text-white leading-normal font-medium text-sm outline-none py-2 px-7 rounded bg-slate-600">Sign up</a>
                    <a href="#" className="outline-none font-medium leading-normal text-sm text-white py-2 px-7 rounded bg-blue-400">Sign in</a>
                </div>

                </ul>
            </nav>
        </header>
    )
}

export default Nav