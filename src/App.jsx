import React from 'react'
import { CustomerReviews, Footer, SpecialOffer, Services, Subscribe, SuperQuality, PopularProducts, Hero } from './sections';

const App = () => (

    <main className='relative'>
        nav
        <section className='xl:padding-1 wide:padding-r padding-b'>
            hero
        </section>
        <section className='padding'>
            popularProducts
        </section>
        <section className='padding'>
            supereQuality
        </section>
        <section className='padding-x py-10'>
            services
        </section>
        <section className='padding'>
            specialOffer
        </section>
        <section className='padding bg-pale-blue'>
            customerReviews
        </section>
        <section className='padding-x sm:py-32 py-16 w-full'>
            subscribe
        </section>
        <section className='bg-black padding-x padding-t pb-8'>
            Footer
        </section>
    </main>
);

export default App