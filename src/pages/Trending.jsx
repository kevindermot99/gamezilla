import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from '../constants/data';
import { FaPlay } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { average } from 'color.js'
import { HiOutlineDownload } from "react-icons/hi";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { WiTime3 } from "react-icons/wi";
import { Link } from 'react-router-dom';
import { MdAdd } from "react-icons/md";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


function Trendig() {

    const [color, setColor] = useState("#3a3d44")


    return (
        <main className='relative bg-white dark:bg-dark-body max-w-[2000px] m-auto overflow-x-clip h-[100vh] overflow-y-auto custom-scrollbar'>

            <div style={{ backgroundColor: color }} className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-200'></div>

            <div className='relative text-black dark:text-white flex '>

                <div className='w-fit z-10'>
                    <SideBar />
                </div>

                <div className=' w-full overflow-x-clip z-10 '>
                    <Nav />
                    <div className='xl:padding-1 wide:padding-r w-full h-fit overflow-x-clip'>
                        <Reveal keyframes={customAnimation} triggerOnce duration={400}>
                            <div className={` h-fi flex gap-6 items-start justify-start px-9 py-6 `} >
                                <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3'>
                                    <h1 className='text-[60px] max-sm:text-[30px] leading-[60px] max-sm:leading-[30px] max-w-[700px] font-extrabold text-white '>Recently added</h1>
                                    <p className=' font-normal text-base text-white'>20 most recent Audio Books</p>
                                </div>
                            </div>
                        </Reveal>
                        <div className='flex flex-col bg-white dark:bg-inherit dark:bg-gradient-to-b from-banner-top-gradient backdrop-blur-2xl to-banner-bottom-gradient  min-h-[500px] px-9'>

                        </div>
                    </div>
                </div>

            </div>

        </main>

    )

};

export default Trendig;
