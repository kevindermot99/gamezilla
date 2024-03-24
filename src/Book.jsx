import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import { useParams } from 'react-router-dom';
import { Books } from './constants/data';


function Book() {

    const { id } = useParams();
    const res = Books.find(findthis)
    function findthis(book){
        return book.id === id;
    }


    return (
        <main className='relative bg-white dark:bg-dark-body text-black dark:text-white flex max-w-[2000px] m-auto'>
            <div className='w-fit'>
                <SideBar />
            </div>
            <div className='w-full overflow-x-clip '>
                <Nav />
                <section className='xl:padding-1 wide:padding-r w-full'>
                    <div className='min-h-[250px] h-fi py-5 px-10 flex gap-6 items-start justify-start'>
                        <div className='h-[200px] w-auto aspect-square'>
                            <img className="w-full h-full object-cover pointer-events-none" src={res    .URL} alt="" />
                        </div>
                        <div className='flex flex-col items-start justify-start text-black dark:text-white'>
                            <h1 className='text-[45px] leading-[45px] max-w-[700px] font-extrabold '>{res.title}</h1>
                            <p></p>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )

};

export default Book;
