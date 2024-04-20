import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
// importing images
import Image1 from '../assets/images/HeroImages/1.webp'
import Image2 from '../assets/images/HeroImages/2.webp'
import Image3 from '../assets/images/HeroImages/3.webp'
import Image4 from '../assets/images/HeroImages/4.webp'
import Image5 from '../assets/images/HeroImages/5.webp'
import Image6 from '../assets/images/HeroImages/6.webp'
import Image7 from '../assets/images/HeroImages/7.webp'
import Image8 from '../assets/images/HeroImages/8.webp'
import Image9 from '../assets/images/HeroImages/9.webp'
import Image10 from '../assets/images/HeroImages/10.webp'
import Image11 from '../assets/images/HeroImages/11.webp'
import Image12 from '../assets/images/HeroImages/12.webp'
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { Books } from '../constants/data'

const customAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(3px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Pagez() {
  return (
    <div className=' h-svh overflow-y-auto flex flex-col '>
      {/* MENU */}
      <Menu />

      {/* HERO */}
      <section className='relative overflow-clip min-h-[75vh] max-h-[700px] w-full max-w-[1800px] mx-auto flex items-center py-[40px] px-32 justify-center text-light-text-color  max-lg:hidden border-b border-light-border-line '>
        <div className='min-w-fit py-6 top-0 bottom-0 m-auto h-fit flex flex-col justify-center  '>
          <span className='flex gap-5'>
            <Reveal keyframes={customAnimation} triggerOnce duration={800}>
              <img src={Image1} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200 opacity-80 translate-y-[20px] ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={700}>
              <img src={Image3} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200 opacity-80   ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={1000}>
              <img src={Image6} className='w-24 h-fit rounded-2xl shadow-md bg-stone-200  opacity-80 translate-y-[45px]   ' />
            </Reveal>
          </span>
          <span className='flex gap-5 mt-5'>
            <Reveal keyframes={customAnimation} triggerOnce duration={1000}>
              <img src={Image5} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200 opacity-80 translate-y-[20px]   ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={900}>
              <img src={Image2} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200 opacity-80  -translate-y-10  ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={800}>
              <img src={Image4} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200 opacity-80  -translate-y-[30px]    ' />
            </Reveal>
          </span>

        </div>

        <div className='w-fit min-w-[750px] flex flex-col items-center gap-2 bg  '>
          <Reveal keyframes={customAnimation} triggerOnce duration={500}>
            <h1 className='text-center font-SulphurPoint font-bold text-[70px] leading-[67px] capitalize '>Explore the Giant <br />Free Book Collection </h1>
          </Reveal>
          <Reveal keyframes={customAnimation} triggerOnce duration={600}>
            <p className='text-center font-SulphurPoint font-bold text-lg max-w-[500px]'>A place where stories meet book lovers ! It's free for all. Begin your adventure today</p>
          </Reveal>
          <Reveal keyframes={customAnimation} triggerOnce duration={800}>
            <Link to={`/`} className={`h-full w-fit flex items-center px-5 py-2 bg-main-color text-white text-base font-semibold tracking-tight rounded-full mt-4`}>Try Pagez Today</Link>
          </Reveal>
        </div>

        <div className=' min-w-fit py-6 top-0 bottom-0 m-auto h-fit flex flex-col justify-center  '>
          <span className='flex gap-5'>
            <Reveal keyframes={customAnimation} triggerOnce duration={800}>
              <img src={Image8} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 translate-y-[30px]  ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={700}>
              <img src={Image12} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80   ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={1000}>
              <img src={Image10} className='w-24 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 translate-y-[25px]   ' />
            </Reveal>
          </span>
          <span className='flex gap-5 mt-5'>
            <Reveal keyframes={customAnimation} triggerOnce duration={1000}>
              <img src={Image9} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 -translate-y-[35px]  ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={900}>
              <img src={Image11} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={800}>
              <img src={Image7} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 -translate-y-[25px]' />
            </Reveal>
          </span>

        </div>
      </section>

      {/* BOOKS */}
      <section className='min-h-fit w-full p-[24px] max-w-[1170px] m-auto'>
        <h1 className='text-[24px] font-semibold text-light-text-color mb-5'>For You</h1>
        <div className='w-full grid grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-2 max gap-4 pb-6 border-b border-light-border-line'>
          {Books.map((book, index) => (
            <div key={index} className='w-fit h-full flex flex-col'>
            <Link to={`/`} className='w-full h-fit rounded-sm ring-1 ring-light-border-line'>
              <img src={book.URL} className='w-full h-full rounded-sm' alt="" />
            </Link>
            <div className='h-fit min-h-fit py-2 flex flex-col gap-1'>
              <h1 className='text-[14px] font-medium flex items-center leading-[17px] text-light-text-color'>{book.title}</h1>
              <h1 className='text-[13px] font-normal flex items-center leading-[17px] text-light-text-color text-opacity-65'>{book.author}</h1>
            </div>
          </div>
          ))}
          
        </div>
      </section>

    </div>
  )
}

export default Pagez