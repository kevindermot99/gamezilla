import React, { useState, useEffect } from 'react';
import { Browse } from './sections';
import Nav from './components/Nav';
import SideBar from './components/SideBar';


const Pagez = () => {
  return (
    <main className='relative bg-white dark:bg-dark-body text-black dark:text-white flex max-w-[2000px] m-auto'>

      
      <div className='w-fit'>
        <SideBar />
      </div>
      <div className='w-full overflow-x-clip '>
        <Nav />
        <section className='xl:padding-1 wide:padding-r w-full'>
          <Browse />
        </section>
      </div>

    </main>
  )
};

export default Pagez;
