import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { Books } from '../constants/data';
import { FaPlay } from "react-icons/fa";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from 'react-router-dom';
import { WiTime3 } from "react-icons/wi";
import { GrClose } from "react-icons/gr";

const customAnimation = keyframes`
  from {
    transform: translateY(10px); 
  }

  to {
    transform: translateY(0);
  }
`;



function RecentlyAdded() {

    const [color, setColor] = useState("#3a3d44")

    const [sidebar, setSideBar] = useState(false);
    const openSidebar = () => {
        setSideBar(true)
    }

    const closeSidebar = () => {
        setSideBar(false)
    }

    return (
        <main className={`relative bg-white dark:bg-dark-body max-w-[2000px] m-auto overflow-x-clip h-[100vh] overflow-y-auto custom-scrollbar `}>

            <div style={{ backgroundColor: color }} className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-200'></div>

            <div className='relative text-black dark:text-white flex '>


                <div className={`w-fit z-50 max-md:fixed max-md:top-0 max-md:transition max-md:duration-500  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
                    <SideBar closeSidebar={closeSidebar} />
                </div>


                <div className=' w-full overflow-x-clip z-10'>
                    <Nav openSidebar={openSidebar} />
                    <div className='xl:padding-1 wide:padding-r w-full h-full overflow-x-clip flex flex-col'>
                        <Reveal keyframes={customAnimation} triggerOnce duration={400}>
                            <div className={` h-fit flex gap-6 items-start justify-start px-9 py-6   max-md:min-h-[200px] max-md:px-5`} >
                                <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3  max-md:self-end max-md:py-1'>
                                    <h1 className='text-[60px] max-sm:text-[40px] leading-[60px] max-sm:leading-[40px] max-w-[700px] font-extrabold text-white '>Recently added</h1>
                                    <p className=' font-normal text-base text-white'>20 most recent Audiobooks</p>
                                </div>
                            </div>
                        </Reveal>
                        <div className='flex flex-col bg-white dark:bg-inherit dark:bg-gradient-to-b from-banner-top-gradient backdrop-blur-2xl to-banner-bottom-gradient  min-h-[700px] px-8 max-md:px-5 flex-1'>
                            
                        </div>
                    </div>
                </div>

            </div>

        </main>

    )

};

export default RecentlyAdded;
