import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from '../constants/data';
import { FaPlay } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { average } from 'color.js'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { WiTime3 } from "react-icons/wi";
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCloudDownload } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { LuLoader2 } from "react-icons/lu";

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


function Book() {

    const [color, setColor] = useState("transparent")
    const [sidebar, setSideBar] = useState(false);
    const [innerLoader, setInnerLoader] = useState(true)

    const { id } = useParams();
    // console.log(id)
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

    const openSidebar = () => {
        setSideBar(true)
    }

    const closeSidebar = () => {
        setSideBar(false)
    }

    const handleNowPlaying = (id) => {
        localStorage.setItem("nowPlaying", id)
    }

    useEffect(() => {
        setTimeout(() => {
            setInnerLoader(false)
        }, 900);
    }, [])

    return (
        <main className='relative bg-white dark:bg-dark-body overflow-hidden h-[100vh]'>

            {/* <div style={{ backgroundColor: color }} className='h-[500px] max-sm:h-[100vh] w-[100%] absolute top-0 left-0 opacity-100 z-0 transition duration-300 '></div> */}

            <div className='relative text-black dark:text-white flex '>


                <div className={`w-fit z-50 max-md:fixed max-md:top-0 max-md:transition max-md:duration-200  ${sidebar ? 'max-md:opacity-100' : 'max-md:opacity-100 max-md:-translate-x-[100vw]'} `}>
                    <SideBar closeSidebar={closeSidebar} />
                </div>


                <div className=' relative w-full overflow-x-clip z-10 h-fit max-h-[100vh] overflow-y-auto dynamic-scrollbar transition duration-300 ' >
                    <div className='relative min-h-[330px] transition ' style={{ backgroundColor: color }}>
                        <Nav openSidebar={openSidebar} />
                        {innerLoader ?
                            (<div className={`absolute top-0 left-0 h-full w-full z-50 flex justify-center items-center transition `} style={{ backgroundColor: color }}>
                                <LuLoader2 className='text-[35px]  text-white opacity-55 animate-spinLoader ' />
                            </div>)
                            :
                            (
                                <Reveal keyframes={customAnimation} triggerOnce duration={400}>
                                    <div className={` h-fi flex max-md:flex-col gap-6 items-start max-md:items-center justify-start px-9 max-sm:px-5 pt-4 pb-8 `} >
                                        <div className='h-[200px] w-auto aspect-square shadow-custom'>
                                            <img className="w-full h-full object-cover pointer-events-none rounded-md " src={res.URL} alt="" />
                                        </div>
                                        <div className='flex flex-col items-start justify-start gap-4 max-sm:gap-2 text-black dark:text-white py-3 '>
                                            <h1 className='text-[45px] leading-[45px] max-sm:text-[20px] max-sm:leading-[25px]  max-w-[700px] font-extrabold text-white  max-md:w-full  '>{res.title}</h1>
                                            <Link to={`/author/${res.author}`} className=' font-semibold text-base text-white hover:underline max-md:w-full '>{res.author}</Link>
                                            <p className='font-light text-sm text-stone-50 max-w-[790px] leading-relaxed max-md:w-full max-md:line-clamp-3  '>{res.about}</p>
                                            <p className=' font-normal text-sm text-stone-50 max-md:w-full'>{res.likes} Likes • 13 min 10 sec</p>
                                        </div>
                                    </div>
                                </Reveal>
                            )}
                    </div>

                    <div className='xl:padding-1 wide:padding-r w-full h-fit overflow-x-clip'>
                        <div className='flex flex-col bg-white dark:bg-dark-sidebar h-fit pb-10 px-8 max-md:px-5 flex-1 '>

                            <div className='w-full pt-8 flex items-center justify-start gap-6 '>
                                <Link to={`/player/${res.id}`} onClick={() => handleNowPlaying(res.id)} className=' transition aspect-square size-14   flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 hover:scale-105 shadow-lg active:scale-90' title={`Play ${res.title}`}>
                                    <FaPlay className='text-white text-xl ' />
                                </Link>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 ' title={`Like`}>
                                    <IoMdHeartEmpty className='text-black dark:text-stone-200 text-[30px] ' />
                                </button>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 ' title={`Add to Library`}>
                                    <IoIosAddCircleOutline className='text-black dark:text-stone-200 text-[30px] ' />
                                </button>

                                <button className=' h-fit transition aspect-square  flex items-center justify-center -100 hover:scale-105 active:scale-90 ' title={`Download`}>
                                    <BsCloudDownload className='text-black dark:text-stone-200 text-[25px] ' />
                                </button>

                            </div>

                            <div className='w-full py-4'>
                                <table className='w-full border-separate border-spacing-y-5 max-sm:border-spacing-y-6'>
                                    <thead>
                                        <tr>
                                            <th className='text-left text-base capitalize'># </th>
                                            <th className='text-left text-base capitalize'>books by {res.author}</th>
                                            <th className='text-left text-base capitalize  max-lg:hidden'>Date added</th>
                                            <th className='text-left text-base capitalize  max-md:hidden'>Likes</th>
                                            <th className='text-left  max-lg:hidden'><WiTime3 className='text-xl ' /></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {authorBooks.map((authorBook, index) => (
                                            <tr key={authorBook.id}>
                                                <td className='min-w-[30px] text-stone-500 dark:text-stone-500 font-bold text-sm ' >{index + 1}</td>
                                                <td className='w-[40%] max-lg:w-[80%] max-md:w-[95%]'>
                                                    <div className='w-fit h-fit flex items-center gap-3 max-sm:gap-5'>
                                                        <img src={authorBook.URL} alt={authorBook.title} className='h-12 w-12 max-sm:h-[70px] max-sm:w-[70px] shadow-md rounded-sm ' />
                                                        <div className={`w-full truncate text-ellipsis flex flex-col gap-1`}>
                                                            <Link to={`/book/${authorBook.id}`} className='truncate text-ellipsistext-black dark:text-white hover:underline font-medium text-base'>{authorBook.title}</Link>
                                                            <Link to={`/author/${authorBook.author}`} className={`truncate text-ellipsis text-stone-500 dark:text-stone-400 text-sm hover:underline `}>{authorBook.author}</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='w-[20%] max-lg:hidden'>
                                                    <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>Feb 23, 2023</p>
                                                </td>

                                                <td className='w-[20%] max-md:hidden'>
                                                    <p className='truncate text-ellipsis text-sm text-stone-600 dark:text-stone-400'>{authorBook.likes}</p>
                                                </td>

                                                <td className='w-[20%] max-lg:hidden'>
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
