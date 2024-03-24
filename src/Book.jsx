import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from './constants/data';
// import image from './image.jpg'

import { average } from 'color.js'


function Book() {

    const [color, setColor] = useState("transparent")

    const { id } = useParams();
    const res = Books.find(findthis)
    function findthis(book) {
        return book.id === id;
    }

    // useEffect(() => {
    average(res.URL, { format: 'hex' })
        .then(HexColor => {
            setColor(HexColor)
        })
    // }, [])






    return (
        <section className='relative bg-white dark:bg-dark-body max-w-[2000px] m-auto overflow-hidden '>
            <div style={{ backgroundColor: color }} className='h-[700px] w-full absolute -top-[300px] left-0 z-0  opacity-90'></div>
            <div className='relative text-black dark:text-white flex '>

                <div className='w-fit'>
                    <SideBar />
                </div>
                <div className=' w-full overflow-x-clip '>
                    <Nav />
                    <section className='xl:padding-1 wide:padding-r w-full overflow-clip z-20'>
                        <div className={`min-h-[250px] h-fi py-5 px-10 flex gap-6 items-start justify-start `} >
                            <div className='h-[200px] w-auto aspect-square'>
                                <img className="w-full h-full object-cover pointer-events-none rounded-md shadow-xl  " src={res.URL} alt="" />
                            </div>
                            <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3'>
                                <h1 className='text-[45px] leading-[45px] max-w-[700px] font-extrabold text-white '>{res.title}</h1>
                                <p className=' font-semibold text-lg text-white'>{res.author}</p>
                                <p className=' font-normal text-base text-stone-300 '>132,245 Likes - 13 min 10 sec</p>
                            </div>
                        </div>

                    </section>
                </div>

            </div>
        </section>

    )

};

export default Book;
