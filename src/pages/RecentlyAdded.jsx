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

            <div className={`w-fit h-[100vh] sticky top-0 z-10 max-md:fixed max-md:w-full max-md:h-[100vh] flex justify-center items-center flex-col max-md:backdrop-blur-lg  max-md:transition max-md:duration-200   ${sidebar ? 'max-md:opacity-100 max-md:z-50 ' : 'max-md:opacity-0 max-md:-z-10'} `}>
                    <button onClick={closeSidebar} className=' bg-stone-100  dark:bg-dark-sidebar justify-center items-center p-3 rounded-full mb-3 self-end mr-[5%] hidden max-md:block'>
                        <GrClose />
                    </button>
                    <SideBar />
                </div>

                <div className=' w-full overflow-x-clip z-10'>
                    <Nav openSidebar={openSidebar} />
                    <div className='xl:padding-1 wide:padding-r w-full h-full overflow-x-clip flex flex-col'>
                        <Reveal keyframes={customAnimation} triggerOnce duration={400}>
                            <div className={` h-fit flex gap-6 items-start justify-start px-9 py-6   max-md:min-h-[200px] max-md:px-5`} >
                                <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3  max-md:self-end max-md:py-1'>
                                    <h1 className='text-[60px] max-sm:text-[30px] leading-[60px] max-sm:leading-[30px] max-w-[700px] font-extrabold text-white '>Recently added</h1>
                                    <p className=' font-normal text-base text-white'>20 most recent Audiobooks</p>
                                </div>
                            </div>
                        </Reveal>
                        <div className='flex flex-col bg-white dark:bg-inherit dark:bg-gradient-to-b from-banner-top-gradient backdrop-blur-2xl to-banner-bottom-gradient  min-h-[500px] px-8 max-md:px-5 flex-1'>
                            {/* <Reveal keyframes={customAnimation} triggerOnce duration={300}>
                                <div className='w-full py-4'>
                                    <table className='w-full border-separate border-spacing-y-5 '>
                                        <thead>
                                            <tr>
                                                <th className='text-left text-base capitalize'>Book Name </th>
                                                <th className='text-left text-base capitalize'>Date added</th>
                                                <th className='text-left text-base capitalize'>Likes</th>
                                                <th className='text-left'><WiTime3 className='text-xl ' /></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Books.map((book) => (
                                                <tr key={book.id}>
                                                    <td className='w-[40%]'>
                                                        <div className='w-fit h-fit flex items-center gap-3'>
                                                            <img src={book.URL} alt={book.title} className='h-12 w-12 shadow-md rounded-sm ' />
                                                            <div className={`w-full truncate text-ellipsis flex flex-col gap-1`}>
                                                                <Link to={`/book/${book.id}`} className='truncate text-ellipsistext-black dark:text-white hover:underline font-medium text-base'>{book.title}</Link>
                                                                <Link to={`/author/${book.author}`} className={`truncate text-ellipsis text-stone-500 dark:text-stone-400 text-sm hover:underline `}>{book.author}</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='w-[20%]'>
                                                        <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>Feb 23, 2023</p>
                                                    </td>

                                                    <td className='w-[20%]'>
                                                        <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>{book.likes}</p>
                                                    </td>

                                                    <td className='w-[20%]'>
                                                        <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>13 min 32 sec</p>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </Reveal> */}
                        </div>
                    </div>
                </div>

            </div>

        </main>

    )

};

export default RecentlyAdded;
