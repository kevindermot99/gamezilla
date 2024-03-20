import React, { useState, useEffect } from 'react';
import { Browse } from './sections';
import Nav from './components/Nav';
import SideBar from './components/SideBar';


const Pagez = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinner = document.getElementById("loader-overlay");

    if (spinner) {
      setTimeout(() => {
        spinner.classList.add("loader-overlay-hidden");
        setLoading(false);
      }, 1500);
    }
  }, []);

  return (
    // !loading && (
    <main className='relative bg-gray-900 text-white flex'>
      <div className='w-fit'>
        <SideBar />
      </div>
      <div className='w-full'>
        <Nav />
        <section className='xl:padding-1 wide:padding-r'>
          <Browse />
        </section>
      </div>

    </main>
    // )
  );
};

export default Pagez;
