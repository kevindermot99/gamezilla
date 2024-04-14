import React, { useState, useEffect } from 'react';
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
import { GrClose } from "react-icons/gr";
import BottomBar from '../components/BottomBar';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


function Trending() {

    const [color, setColor] = useState("#262626")
    const [sidebar, setSideBar] = useState(false);

    const openSidebar = () => {
        setSideBar(true)
    }

    const closeSidebar = () => {
        setSideBar(false)
    }

    useEffect(() => {
        document.title = 'Trending';
    }, [])

    return (
        <>
            <main className='relative bg-white dark:bg-dark-body overflow-hidden h-[100vh] '>

                {/* <div style={{ backgroundColor: color }} className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-200'></div> */}

                <div className='relative text-black dark:text-white flex overflow-hidden '>

                    <div className=' w-full overflow-x-clip z-10 h-fit max-h-[100vh] overflow-y-auto dynamic-scrollbar ' style={{ backgroundColor: color }}>

                        <div className='xl:padding-1 wide:padding-r w-full h-fit overflow-x-clip'>
                            <Reveal keyframes={customAnimation} triggerOnce duration={400}>
                                <div className={` h-fit flex gap-6 items-start justify-start px-9 py-6   max-md:min-h-[200px] max-md:px-5`} >
                                    <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3  max-md:self-end max-md:py-1'>
                                        <h1 className='text-[60px] max-sm:text-[40px] leading-[60px] max-sm:leading-[40px] max-w-[700px] font-extrabold text-white '>Trending</h1>
                                        <p className=' font-normal text-base text-white'>Most played Audiobooks</p>
                                    </div>
                                </div>
                            </Reveal>
                            <div className='flex flex-col bg-white dark:bg-dark-sidebar h-fit max-md:pb-10 px-8 max-md:px-5 flex-1'>
                                <Reveal keyframes={customAnimation} triggerOnce duration={300}>
                                    <div className='w-full py-4'>
                                        <table className='w-full border-separate border-spacing-y-5 max-sm:border-spacing-y-6'>
                                            <thead>
                                                <tr>
                                                    <th className='text-left text-base capitalize'># </th>
                                                    <th className='text-left text-base capitalize'>Book Name </th>
                                                    <th className='text-left text-base capitalize max-lg:hidden'>Date added</th>
                                                    <th className='text-left text-base capitalize max-md:hidden'>Likes</th>
                                                    <th className='text-left max-lg:hidden'><WiTime3 className='text-xl ' /></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {Books.map((book, index) => (
                                                    <tr key={book.id}>
                                                        <td className='min-w-[30px] text-stone-500 dark:text-stone-500 font-bold text-sm ' >{index + 1}</td>
                                                        <td className='w-[40%] max-lg:w-[80%] max-md:w-[95%]'>
                                                            <div className='w-fit h-fit flex items-center gap-3 max-sm:gap-5'>
                                                                <img src={book.URL} alt={book.title} className='h-12 w-12 max-sm:h-[70px] max-sm:w-[70px]  shadow-md rounded-sm  ' />
                                                                <div className={`w-full truncate text-ellipsis flex flex-col gap-1`}>
                                                                    <Link to={`/book/${book.id}`} className='truncate text-ellipsistext-black dark:text-white hover:underline font-medium text-base'>{book.title}</Link>
                                                                    <Link to={`/author/${book.author}`} className={`truncate text-ellipsis text-stone-500 dark:text-stone-400 text-sm hover:underline `}>{book.author}</Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='w-[20%] max-lg:hidden'>
                                                            <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>Feb 23, 2023</p>
                                                        </td>

                                                        <td className='w-[20%] max-md:hidden'>
                                                            <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>{book.likes}</p>
                                                        </td>

                                                        <td className='w-[20%] max-lg:hidden'>
                                                            <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>13 min 32 sec</p>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <BottomBar />
        </>
    )

};

export default Trending;
