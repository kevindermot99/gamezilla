import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Logo35 from '../assets/images/logo 35.png'
import { FaChild } from "react-icons/fa6";

function Menu() {
  return (
    <div className='h-[55px] px-[24px] border-b border-light-border-line flex items-center'>
        <div className='h-fit w-fit'>
          <ul className='flex h-full items-center'>
            <Link to="/" className='text-xl font-bold flex items-center tracking-tighter mr-5'><img className='h-[35px]' src={Logo} alt="" />Pagez</Link>
            <Link to="/" className='text-[15px] font-medium  flex items-center tracking-tight mr-5'>Explore</Link>
            <Link to="/" className='text-[15px] font-medium  flex items-center tracking-tight mr-5'></Link>
            <Link to="/" className='text-[15px] font-medium  flex items-center tracking-tight mr-5'></Link>
            <div className='w-4 h-[25px] border-l border-l-light-border-line '></div>
            <Link to="/" className='text-[15px] font-medium  flex items-center tracking-tight mr-5 '>Kid's Section</Link>
          </ul>
        </div>
    </div>
  )
}

export default Menu