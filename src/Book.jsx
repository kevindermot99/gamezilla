import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from './constants/data';
import { FaPlay } from "react-icons/fa";

import { average } from 'color.js'


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

            <div style={{ backgroundColor: color }} className='h-[500px] w-full absolute top-0 left-0 opacity-70'></div>

            <div className='relative text-black dark:text-white flex  '>

                <div className='w-fit'>
                    <SideBar />
                </div>

                <div className=' w-full overflow-x-clip '>
                    <Nav />
                    <div className='xl:padding-1 wide:padding-r w-full overflow-clip'>
                        <div className={` h-fi flex gap-6 items-start justify-start px-14 pb-7`} >
                            <div className='h-[240px] w-auto aspect-square'>
                                <img className="w-full h-full object-cover pointer-events-none rounded-md shadow-xl  " src={res.URL} alt="" />
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3'>
                                <h1 className='text-[45px] leading-[45px] max-w-[700px] font-extrabold text-white '>{res.title}</h1>
                                <p className=' font-semibold text-lg text-white'>{res.author}</p>
                                <p className='font-normal text-base text-stone-300 max-w-[790px] leading-relaxed'>{res.about}</p>
                                <p className=' font-normal text-base text-stone-300 '>132,245 Likes - 13 min 10 sec</p>
                            </div>
                        </div>
                        <div className='flex flex-col bg-white dark:bg-inherit dark:bg-gradient-to-b from-transparent backdrop-blur-3xl to-dark-body h-[500px] px-14'>
                            <div className='w-full pt-4'>
                                <button className=' transition aspect-square size-14  flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 translate-y-3 group-hover:translate-y-0 hover:scale-105 shadow-lg' title={`Play ${res.title}`}>
                                    <FaPlay className='text-white text-xl ' />
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
