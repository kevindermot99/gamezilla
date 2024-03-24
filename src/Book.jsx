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
                    <div className='min-h-[300px] h-fit bg-red-300 ml-12'>

                    </div>
                </section>
            </div>

        </main>
    )

};

export default Book;
