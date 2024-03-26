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


function Book() {

    const [color, setColor] = useState("transparent")

    const { id } = useParams();
    const res = Books.find(findthis)
    function findthis(book) {
        return book.id === id;
    }

    const author = res.author;

    const authorBooks = Books.filter(findtherebooks)
    function findtherebooks(books) {
        return books.author === author;
    }

    // Get the index of the book with the exact ID
    const index = authorBooks.findIndex(book => book.id === id);

    // If the index is found, move the book to the beginning
    if (index !== -1) {
        const bookToMove = authorBooks.splice(index, 1)[0];
        authorBooks.unshift(bookToMove);
    }

    average(res.URL, { format: 'hex' })
        .then(HexColor => {
            setColor(HexColor)
        })


    return (
        <main className='relative bg-white dark:bg-dark-body max-w-[2000px] m-auto overflow-x-clip h-[100vh] overflow-y-auto custom-scrollbar'>

            <div style={{ backgroundColor: color }} className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-300  '></div>

            <div className='relative text-black dark:text-white flex '>

                <div className='w-fit z-10'>
                    <SideBar />
                </div>

                <div className=' w-full overflow-x-clip z-10 '>
                    <Nav />
                    <div className='xl:padding-1 wide:padding-r w-full h-fit overflow-x-clip'>
                        <Reveal keyframes={customAnimation} triggerOnce duration={400}>
                            <div className={` h-fi flex gap-6 items-start justify-start px-9 py-6 `} >
                                <div className='h-[200px] w-auto aspect-square shadow-2xl '>
                                    <img className="w-full h-full object-cover pointer-events-none rounded-md " src={res.URL} alt="" />
                                </div>
                                <div className='flex flex-col items-start justify-start gap-4 text-black dark:text-white py-3'>
                                    <h1 className='text-[45px] leading-[45px] max-w-[700px] font-extrabold text-white '>{res.title}</h1>
                                    <p className=' font-semibold text-base text-white'>{res.author}</p>
                                    <p className='font-light text-sm text-stone-50 max-w-[790px] leading-relaxed'>{res.about}</p>
                                    <p className=' font-normal text-sm text-stone-50 '>{res.likes} Likes • 13 min 10 sec</p>
                                </div>
                            </div>
                        </Reveal>
                        <div className='flex flex-col bg-white dark:bg-inherit dark:bg-gradient-to-b from-banner-top-gradient backdrop-blur-2xl to-banner-bottom-gradient  min-h-[500px] px-9'>

                            <div className='w-full py-4 flex items-center justify-start gap-6 '>
                                <button className=' transition aspect-square size-14   flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 hover:scale-105 shadow-lg' title={`Play ${res.title}`}>
                                    <FaPlay className='text-white text-xl ' />
                                </button>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-110   ' title={`Like`}>
                                    <FaRegHeart className='text-black dark:text-white text-[25px] ' />
                                </button>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-110   ' title={`Download`}>
                                    <HiOutlineDownload className='text-black dark:text-white text-[30px] ' />
                                </button>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-110   ' title={`Add to Library`}>
                                    <MdAdd className='text-black dark:text-white text-[30px] ' />
                                </button>

                            </div>

                            <div className='w-full py-4'>
                                <table className='w-full border-separate border-spacing-y-5'>
                                    <thead>
                                        <tr>
                                            <th className='text-left text-base capitalize'>books by {res.author}</th>
                                            <th className='text-left text-base capitalize'>Date added</th>
                                            <th className='text-left text-base capitalize'>Likes</th>
                                            <th className='text-left'><WiTime3 className='text-xl ' /></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {authorBooks.map((authorBook) => (
                                            <tr key={authorBook.id}>
                                                <td className='w-[40%]'>
                                                    <div className='w-fit h-fit flex items-center gap-3'>
                                                        <img src={authorBook.URL} alt={authorBook.title} className='h-12 w-12 shadow-md rounded-sm ' />
                                                        <div className={` block w-full truncate text-ellipsis`}>
                                                            <Link to={`/book/${authorBook.id}`} className='truncate text-ellipsistext-black dark:text-white hover:underline font-medium text-base'>{authorBook.title}</Link>
                                                            <p className={`truncate text-ellipsis text-stone-500 dark:text-stone-400 text-sm `}>{authorBook.author}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-[20%]'>
                                                    <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>Feb 23, 2023</p>
                                                </td>

                                                <td className='w-[20%]'>
                                                    <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>{authorBook.likes}</p>
                                                </td>

                                                <td className='w-[20%]'>
                                                    <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>13 min 32 sec</p>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>

    )

};

export default Book;
