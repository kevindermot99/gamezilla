import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { Books } from '../constants/data';
import { FaPlay } from "react-icons/fa";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from 'react-router-dom';

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
                                    <p className=' font-normal text-base text-white'>20 most recent Audiobooks</p>
                                </div>
                            </div>
                        </Reveal>
                        <div className='flex flex-col bg-white dark:bg-inherit dark:bg-gradient-to-b from-banner-top-gradient backdrop-blur-2xl to-banner-bottom-gradient  min-h-[500px] p-8'>
                            <div className="bookbar w-[100%] h-fit grid grid-cols-2 max-lg:grid-cols-1 gap-1 justify-evenly pb-3 mb-6 custom-scrollbar">
                                <Reveal keyframes={customAnimation} triggerOnce duration={300}>
                                    {Books.map((book) => (

                                        <div key={book.id} className=' group flex gap-5 w-full- h-[100%] rounded-xl transition duration-100 hover:bg-stone-200 hover:bg-opacity-70 dark:hover:bg-dark-hover dark:hover:bg-opacity-40 p-3'>
                                            <div className='relative h-[130px] w-[130px] min-h-[130px] min-w-[130px] aspect-square rounded-md  overflow-clip select-none'>
                                                <img className="w-full h-full object-cover pointer-events-none" src={book.URL} alt="" />
                                                <div className='w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition'>
                                                    <button className=' transition absolute bottom-1 right-1 aspect-square size-14  flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 translate-y-3 group-hover:translate-y-0 hover:scale-105 shadow-lg' title={`Play ${book.title}`}>
                                                        <FaPlay className='text-white text-xl ' />
                                                    </button>
                                                </div>

                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Link to={`/book/${book.id}`} className=' break-words  whitespace-normal leading-5 my-1 text-xl font-bold text-black dark:text-white max-w-[100%] w-fit hover:underline '>{book.title}</Link>
                                                <Link to={`/author/${book.author}`} className=' text-sm font-medium  text-stone-600 dark:text-stone-500 hover:underline'>{book.author}</Link>
                                                <p className=' text-sm font-medium  text-stone-500 dark:text-stone-500 line-clamp-3'>{book.about}</p>
                                            </div>
                                        </div>

                                    ))}
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>

    )

};

export default RecentlyAdded;
