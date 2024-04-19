import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Logo35 from '../assets/images/logo 35.png'
import { FaChild } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";

function Menu() {
  const location = useLocation();

  return (
    <div className='h-[55px] px-[24px] border-b border-light-border-line flex items-center'>
        <div className='h-full w-fit'>
          <ul className='flex h-[100%] items-center'>
            <Link to="/" className='text-xl font-bold flex items-center tracking-tighter mr-6'><img className='h-[35px]' src={Logo} alt="" />Pagez</Link>
            <Link to="/" className={`text-[15px] font-semibold flex items-center tracking-wide mr-5 h-[100%] ${location.pathname === '/' ? 'border-b-[3px]  border-b-light-text-color ' : ''}`}>Explore <GoChevronDown className='ml-[2px]' /></Link>
            <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide mr-5'>Library</Link>
            <div className='w-6 h-[25px] border-l border-l-light-border-line'></div>
            <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide mr-5'>Repo</Link>
            <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide mr-5'>Rate This App</Link>
          </ul>
        </div>
    </div>
  )
}

export default Menu