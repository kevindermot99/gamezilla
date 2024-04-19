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

const customAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Pagez() {
  return (
    <div className=' h-svh overflow-y-auto flex flex-col '>
      <Menu />
      {/* HERO */}
      <section className='relative overflow-clip min-h-[450px] w-full max-w-[1800px] mx-auto flex items-center py-[40px] px-32 justify-center text-light-text-color  max-lg:hidden '>
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
            <Reveal keyframes={customAnimation} triggerOnce duration={1000}>
              <img src={Image2} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200 opacity-80  -translate-y-10  ' />
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={1000}>
              <img src={Image4} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200 opacity-80  -translate-y-[30px]    ' />
            </Reveal>
          </span>

        </div>

        <Reveal keyframes={customAnimation} triggerOnce duration={500}>
          <div className='w-fit min-w-[750px] flex flex-col items-center gap-2 bg  '>
            <h1 className='text-center font-SulphurPoint font-bold text-[70px] leading-[67px] capitalize '>Explore the Giant <br />Free Book Collection </h1>
            <p className='text-center font-SulphurPoint font-bold text-lg max-w-[500px]'>A place where stories meet book lovers ! It's free for all. Begin your adventure today</p>
            <Link to={`/`} className={`h-full w-fit flex items-center px-5 py-2 bg-main-color text-white text-base font-semibold tracking-tight rounded-full mt-4`}>Try Pagez Today</Link>
          </div>
        </Reveal>

        <div className=' min-w-fit py-6 top-0 bottom-0 m-auto h-fit flex flex-col justify-center  '>
          <span className='flex gap-5'>
            <img src={Image8} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 translate-y-[30px]  ' />
            <img src={Image12} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80   ' />
            <img src={Image10} className='w-24 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 translate-y-[25px]   ' />
          </span>
          <span className='flex gap-5 mt-5'>
            <img src={Image9} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 -translate-y-[35px]  ' />
            <img src={Image11} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 ' />
            <img src={Image7} className='w-32 h-fit rounded-2xl shadow-md bg-stone-200   opacity-80 -translate-y-[25px]' />
          </span>

        </div>
      </section>
    </div>
  )
}

export default Pagez