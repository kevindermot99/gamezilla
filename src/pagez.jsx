import React, { useState, useEffect } from 'react';
import { Browse } from './sections';
import Nav from './components/Nav';


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
      <main className='relative bg-white'>
        <Nav />
        <section className='xl:padding-1 wide:padding-r'>
          <Browse />
        </section>
      </main>
    // )
  );
};

export default Pagez;
