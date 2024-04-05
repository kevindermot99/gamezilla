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
    const inputTitleStyle = 'text-sm font-semibold text-black dark:text-stone-500 '

    return (
        <main className='relative bg-white dark:bg-dark-body overflow-hidden  h-[100vh]'>

            {/* <div className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-200'></div> */}

            <div className='relative text-black dark:text-white flex '>


                <div className={`w-fit z-50 max-md:fixed max-md:top-0 max-md:transition max-md:duration-500  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
                    <SideBar closeSidebar={closeSidebar} />
                </div>


                <div className=' w-full overflow-x-clip z-10 h-fit min-h-[300px] max-h-[100vh] overflow-y-auto dynamic-scrollbar '>
                    <Nav openSidebar={openSidebar} />
                    <Reveal keyframes={customAnimation} triggerOnce duration={300}>
                        <div className='flex flex-col px-16 max-lg:px-10 max-md:px-5 py-3'>

                            <div className='flex items-center gap-6'>
                                <div className='h-32 w-32 rounded-full ring-1 ring-stone-100 shadow-xl shadow-stone-100 dark:shadow-stone-900 dark:ring-stone-800'>
                                    <img src={loggedInUser.avatar} className='h-32 rounded-full ' />
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    <h1 className='text-2xl font-bold'>{loggedInUser.displayName}</h1>
                                    <Link to='#' className='truncate text-ellipsis text-sm hover:underline cursor-pointer w-fit text-main-color'> Log Out</Link>
                                </div>
                            </div>

                            <p className='mt-8 text-sm font-semibold'>Required fields have an asterisk: *</p>

                            <form className='w-full h-fit mt-4 max-w-[700px] flex flex-col gap-5'>
                                <div className='w-full flex gap-5 max-md:flex-col '>
                                    <label className='w-full '>
                                        <p className={inputTitleStyle} >Username* </p>
                                        <input type="text" name="username" className={inputStyle} />
                                    </label>
                                    <label className='w-full '>
                                        <p className={inputTitleStyle} >Email* </p>
                                        <input type="email" name="email" className={inputStyle} />
                                    </label>
                                </div>
                                <div className='w-full flex gap-5 max-md:flex-col '>
                                    <label className='w-1/2 max-md:w-full '>
                                        <p className={inputTitleStyle}>Country *</p>
                                        <input type="text" name="displayName" className={inputStyle} />
                                    </label>
                                    <label className='w-1/2 max-md:w-full '>
                                        <p className={inputTitleStyle} >City*</p>
                                        <input type="text" name="displayName" className={inputStyle} />
                                    </label>
                                </div>
                                <div className='w-full flex pr-5  max-md:flex-col '>
                                    <label className='w-1/2 max-md:w-full '>
                                        <p className={inputTitleStyle} >Gender</p>
                                        <select name="displayName" className={inputStyle} >
                                            <option value="" selected className='hidden '></option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </label>
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
