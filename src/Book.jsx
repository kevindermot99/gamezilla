import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from './constants/data';
import { FaPlay } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { average } from 'color.js'
import { HiOutlineDownload } from "react-icons/hi";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


function Book() {

    const [color, setColor] = useState("transparent")

    const { id } = useParams();
    const res = Books.find(findthis)
    function findthis(book) {
        return book.id === id;
    }

    average(res.URL, { format: 'hex' })
        .then(HexColor => {
            setColor(HexColor)
        })


    return (
        <section className='relative bg-white dark:bg-dark-body max-w-[2000px] m-auto overflow-clip '>

            <div style={{ backgroundColor: color }} className='h-[500px] w-[100vw] absolute top-0 left-0 opacity-100 z-0'></div>

            <div className='relative text-black dark:text-white flex  '>

                <div className='w-fit z-10'>
                    <SideBar />
                </div>

                <div className=' w-full overflow-x-clip z-10'>
                    <Nav />
                    <div className='xl:padding-1 wide:padding-r w-full overflow-clip'>
                        <div className={` h-fi flex gap-6 items-start justify-start px-9 py-6 `} >
                            <Reveal keyframes={customAnimation} triggerOnce duration={800}>
                                <div className='h-[200px] w-auto aspect-square shadow-2xl '>
                                    <img className="w-full h-full object-cover pointer-events-none rounded-md " src={res.URL} alt="" />
                                </div>
                            </Reveal>
                            <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3'>
                                <Reveal keyframes={customAnimation} triggerOnce duration={800}>
                                    <h1 className='text-[45px] leading-[40px] max-w-[700px] font-extrabold text-white '>{res.title}</h1>
                                    <p className=' font-semibold text-base text-white'>{res.author}</p>
                                    <p className='font-light text-sm text-stone-50 max-w-[790px] leading-relaxed'>{res.about}</p>
                                    <p className=' font-normal text-sm text-stone-50 '>{res.likes} Likes • 13 min 10 sec</p>
                                </Reveal>
                            </div>
                        </div>
                        <div className='flex flex-col bg-white dark:bg-inherit dark:bg-gradient-to-b from-dark-navlink backdrop-blur-3xl to-dark-body h-[500px] px-9'>
                            <div className='w-full pt-4 flex items-center justify-start gap-6 '>
                                <button className=' transition aspect-square size-14   flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 hover:scale-105 shadow-lg' title={`Play ${res.title}`}>
                                    <FaPlay className='text-white text-xl ' />
                                </button>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-110   ' title={`Like`}>
                                    <FaRegHeart className='text-black dark:text-white text-[25px] ' />
                                </button>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-110   ' title={`Download`}>
                                    <HiOutlineDownload className='text-black dark:text-white text-[30px] ' />
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )

};

export default Book;
