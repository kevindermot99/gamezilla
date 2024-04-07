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
import { users } from "../constants/data";


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


function Profile() {

    const [color, setColor] = useState("#262626")
    const [sidebar, setSideBar] = useState(false);

    const openSidebar = () => {
        setSideBar(true)
    }
    const closeSidebar = () => {
        setSideBar(false)
    }

    const id = 'QHNXEXCNBQGALHZXXA58'

    const loggedInUser = users.find(findthis)
    function findthis(user) {
        return user.id === id;
    }

    const inputStyle = 'w-full ring-2 ring-stone-200 ring-opacity-70 dark:ring-stone-700 dark:ring-opacity-0 text-black dark:text-stone-300 bg-transparent dark:bg-dark-navlink py-2 px-4 rounded-lg outline-none mt-2 focus:ring-main-color'
    const inputTitleStyle = 'text-sm font-semibold text-black dark:text-stone-400 '

    return (
        <main className='relative bg-white dark:bg-dark-body overflow-hidden  h-[100vh]'>

            {/* <div className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-200'></div> */}

            <div className='relative text-black dark:text-white flex '>


                <div className={`w-fit z-50 max-md:fixed max-md:top-0 max-md:transition max-md:duration-500  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
                    <SideBar closeSidebar={closeSidebar} />
                </div>


                <div className=' w-full overflow-x-clip z-10 h-fit min-h-[100vh] max-h-[100vh] overflow-y-auto dynamic-scrollbar '>
                    <Nav openSidebar={openSidebar} />
                    <Reveal keyframes={customAnimation} triggerOnce duration={300}>
                        <div className='flex flex-col px-16 max-lg:px-10 max-md:px-5 py-3'>
                            
                        <h1 className='text-[40px] max-sm:text-[25px] max-w-[700px] font-extrabold text-black dark:text-stone-100  pb-5'>Active profile</h1>

                            <div className='flex items-center gap-6 flex-wrap '>
                                <div className='h-32 w-32 min-w-32 min-h-32 rounded-full ring-1 ring-stone-100 shadow-xl shadow-stone-100 dark:shadow-stone-900 dark:ring-stone-800'>
                                    <img src={loggedInUser.avatar} className='h-32 rounded-full ' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <h1 className='text-2xl font-bold'>{loggedInUser.userName}</h1>
                                    <Link to='#' className='truncate text-ellipsis text-sm hover:underline cursor-pointer w-fit text-main-color'> Log Out</Link>
                                    <Link to='#' className='truncate text-ellipsis text-sm hover:underline cursor-pointer w-fit text-main-color'> Switch Account</Link>
                                </div>
                            </div>

                            <p className='mt-8 text-sm font-light text-black dark:text-stone-500 '>Required fields have an asterisk: *</p>

                            <form className='w-full h-fit mt-4 flex flex-col gap-5  max-w-[700px]'>
                                <div className='w-full flex gap-5 max-md:flex-col '>
                                    <label className='w-full '>
                                        <p className={inputTitleStyle} >Username* </p>
                                        <input type="text" name="username" value={loggedInUser.userName} className={inputStyle} />
                                    </label>
                                    <label className='w-full '>
                                        <p className={inputTitleStyle} >Email* </p>
                                        <input type="email" name="email" value={loggedInUser.email} className={inputStyle} />
                                    </label>
                                </div>

                                <div className='my-4  w-full flex items-start justify-end'>
                                    <button className='px-6 py-3 bg-main-color font-medium text-sm text-white rounded-lg transition hover:bg-opacity-80 dark:hover:bg-opacity-50 '>Save Changes</button>
                                </div>
                                
                            </form>
                        </div>
                    </Reveal>
                </div>

            </div>

        </main>

    )

};

export default Profile;
