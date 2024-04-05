import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from '../constants/data';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { WiTime3 } from "react-icons/wi";
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

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


function SwitchAccount() {

    const [color, setColor] = useState("#262626")
    const [sidebar, setSideBar] = useState(false);

    const { id } = useParams();
    // console.log(id)
    const res = Books.find(findthis)
    function findthis(book) {
        return book.id === id;
    }

    const openSidebar = () => {
        setSideBar(true)
    }

    const closeSidebar = () => {
        setSideBar(false)
    }
    

    return (
        <main className='relative bg-white dark:bg-dark-body overflow-hidden  h-[100vh]'>

            {/* <div className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-200'></div> */}

            <div className='relative text-black dark:text-white flex '>


                <div className={`w-fit z-50 max-md:fixed max-md:top-0 max-md:transition max-md:duration-500  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
                    <SideBar closeSidebar={closeSidebar} />
                </div>


                <div className=' w-full overflow-x-clip z-10 h-fit max-h-[100vh] overflow-y-auto dynamic-scrollbar ' style={{ backgroundColor: color }}>
                    <Nav openSidebar={openSidebar} />
                    <div className='xl:padding-1 wide:padding-r w-full h-fit overflow-x-clip'>
                        <Reveal keyframes={customAnimation} triggerOnce duration={400}>
                            <div className={` h-fit flex gap-6 items-start justify-start px-9 py-6   max-md:min-h-[200px] max-md:px-5`} >
                                <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3  max-md:self-end max-md:py-1'>
                                    <h1 className='text-[60px] max-sm:text-[40px] leading-[60px] max-sm:leading-[40px] max-w-[700px] font-extrabold text-white '>Switch Accounts</h1>
                                    <p className=' font-normal text-base text-white'>You can add up to 5 accounts</p>
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
                                                <th className='text-left text-base capitalize'>Account name </th>
                                                <th className='text-left text-base capitalize max-lg:hidden'>Date created</th>
                                                <th className='text-left text-base capitalize'>Last seen</th>
                                                <th className='text-left max-lg:hidden'>Role</th>
                                                <th className='text-left '>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Books.map((book, index) => (
                                                <tr key={book.id}>
                                                    <td className='min-w-[30px] max-w-[30px] text-stone-500 dark:text-stone-500 font-bold text-sm ' >{index+1}</td>
                                                    <td className='w-[25%] max-lg:w-[50%] pr-8'>
                                                        <div className='w-fit h-fit flex items-center gap-3 max-sm:gap-5'>
                                                            <img src={book.URL} alt={book.title} className='h-12 w-12 max-sm:h-[70px] max-sm:w-[70px]  shadow-md rounded-full' />
                                                            <div className={`w-full truncate text-ellipsis flex flex-col gap-1`}>
                                                                <h1 className='truncate text-ellipsis w-full text-black dark:text-white hover:underline cursor-pointer font-medium text-base'>Kevin</h1>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='w-[20%] max-lg:hidden'>
                                                        <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>Feb 23, 2023</p>
                                                    </td>

                                                    <td className='w-[20%] max-md:w-[30%]'>
                                                        <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>Mar 2, 2024</p>
                                                    </td>

                                                    <td className='w-[20%] max-lg:hidden'>
                                                        <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>Host</p>
                                                    </td>
                                                    <td className='w-[20%]'>
                                                        <button className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400 py-2 px-5 bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 rounded-lg capitalize'>remove</button>
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

    )

};

export default SwitchAccount;
