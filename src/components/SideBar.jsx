import React from 'react'
import pagesLogo from "../assets/images/pagez-logo.png"
import { TbMenu2 } from "react-icons/tb";


function SideBar() {
    return (
        <div className="min-w-[240px] h-[100vh] flex flex-col items-start justify-start p-3 ">
            <div className="flex justify-start items-center gap-2 mb-9">
                <button className="h-[40px] w-[40px] transition hover:bg-gray-800 flex items-center justify-center rounded-full">
                    <TbMenu2 className="text-2xl text-white" />
                </button>
                <a href="/" className="flex justify-start items-center gap-2 text-base font-medium ">
                    <img src={pagesLogo} alt="logo" className=" h-7" />
                    <h1 className="logoText">Pagez</h1>
                </a>
            </div>
            <ul>
                
            </ul>
        </div>
    )
}

export default SideBar