import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Logo35 from '../assets/images/logo 35.png'

function Menu() {
  return (
    <div className='h-[55px] px-[24px] border-b border-light-border-line flex items-center'>
        <div className='h-fit w-fit'>
          <ul className='flex h-fit'>
            <Link to="/" className='text-xl font-bold flex items-center tracking-tighter '><img className='h-[35px]' src={Logo} alt="" />Pagez</Link>
          </ul>
        </div>
    </div>
  )
}

export default Menu