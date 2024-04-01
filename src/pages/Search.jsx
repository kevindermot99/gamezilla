import React, { useState, useEffect } from 'react';
import { Browse } from '../sections';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { GrClose } from "react-icons/gr";
import { RxLetterCaseCapitalize } from "react-icons/rx";



function Search() {

    const [sidebar, setSideBar] = useState(false);
    const openSidebar = () => {
        setSideBar(true)
    }

    const closeSidebar = () => {
        setSideBar(false)
    }
    
    return (
        <main className='relative bg-white dark:bg-dark-body text-black dark:text-white flex max-w-[2000px] m-auto h-[100vh]'>

            <div className={`w-fit z-50 max-md:fixed max-md:top-0 max-md:transition max-md:duration-500  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
                <SideBar closeSidebar={closeSidebar} />
            </div>

            <div className='w-full overflow-x-clip z-0 overflow-y-auto dynamic-scrollbar flex flex-col '>
                <Nav openSidebar={openSidebar} />
                <div className='xl:padding-1 wide:padding-r w-full h-fit flex flex-col'>
                    <div className="w-[100%] m-auto ml-10 max-md:ml-0 max-md:px-[20px] flex gap-3 items-center max-md:justify-center">
                        <form class="relative w-full max-w-[400px]">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                                <svg class="w-4 h-4 text-stone-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full pl-12 pr-7 py-3 text-sm text-black dark:text-white bg-stone-200 dark:bg-dark-navlink  bg-opacity-60 font-medium     rounded-3xl outline-none placeholder:text-stone-500 " placeholder="Search Book Names or Authors" required />
                        </form>
                        <button className='py-3 px-3 rounded-full text-black dark:text-white bg-stone-200 dark:bg-dark-navlink  bg-opacity-60 font-medium'>
                            <RxLetterCaseCapitalize className='text-lg ' />
                        </button>
                    </div>
                </div>
                <div className=' w-full h-fit flex-1 px-10  max-md:px-4 py-6'>

                </div>
            </div>

        </main>
    )
}

export default Search