import React, { useState, useEffect } from 'react';
import { CustomerReviews, Footer, SpecialOffer, Services, Subscribe, SuperQuality, PopularProducts, Hero } from './sections';
import Nav from './components/Nav';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinner = document.getElementById("loader-overlay");

    if (spinner) {
      setTimeout(() => {
        spinner.classList.add("loader-overlay-hidden");
        setLoading(false);
      }, 1000000);
    }
  }, []);

  return (
    !loading && (
      <main className='relative'>
        <Nav />
        <section className='xl:padding-1 wide:padding-r padding-b'>
          <Hero />
        </section>
        <section className='padding'>
          <PopularProducts />
        </section>
        <section className='padding'>
          <SuperQuality />
        </section>
        <section className='padding-x py-10'>
          <Services />
        </section>
        <section className='padding'>
          <SpecialOffer />
        </section>
        <section className='padding bg-pale-blue'>
          <CustomerReviews />
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe />
        </section>
        <section className='bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>
      </main>
    )
  );
};

export default App;
