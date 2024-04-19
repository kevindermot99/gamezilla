import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Logo35 from '../assets/images/logo 35.png'
import { FaChild } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { TbSearch } from "react-icons/tb";

function Menu() {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState('')
  const [resetSearch, setResetSearch] = useState(false)


  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value !== '') {
      setResetSearch(true)
    }
  }

  const handleResetSearch = () => {
    setSearchValue('')
    setResetSearch(false)
  }

  return (
    <div className='h-[55px] px-[24px] border-b border-light-border-line flex items-center justify-between'>
      <div className='h-full w-fit min-w-fit'>
        <ul className='flex h-[100%] items-center relative'>
          <Link to="/" className='text-xl font-bold flex items-center tracking-tighter mr-6'><img className='h-[35px]' src={Logo} alt="" />Pagez</Link>
          <div className='h-full group mr-5'>
            <Link to="/" className={`text-[15px] font-semibold flex items-center tracking-wide h-[100%] ${location.pathname === '/' ? 'border-b-[3px]  border-b-light-text-color ' : ''}`}>Explore <GoChevronDown className='ml-[2px]' /></Link>
            <div className={`absolute top-[90%] left-[70px] min-w-[180px] min-h-[100px] bg-white py-5 border border-light-border-line rounded-lg shadow  flex-col hidden group-hover:flex `}>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 ${location.pathname === '/' && 'text-main-color '}`}>For You</Link>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 `}>Search & Explore</Link>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 `}>Pagez for Kids</Link>
              <span className='w-full h-[1px] bg-light-border-line mb-5 mt-3'></span>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 ${location.pathname === '/AudioBooks' && 'text-main-color '}`}>Audiobooks</Link>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6  hover:text-main-color transition duration-100 `}>PDF Books</Link>

            </div>
          </div>

          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide mr-5'>Library</Link>
          <div className='w-6 h-[25px] border-l border-l-light-border-line'></div>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide mr-5'>Repo</Link>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide mr-5'>Rate This App</Link>
        </ul>
      </div>

      <form className='h-full w-full py-[10px] relative flex'>
        <label className='w-full relative overflow-hidden'>
          <input type="search" onChange={handleSearchValue} value={searchValue} placeholder='Search' className='bg-stone-100 rounded-full h-full w-full pl-9 pr-20 border border-light-border-line text-sm ' />
          <TbSearch className='text-lg absolute top-0 bottom-0 my-auto left-[12px] text-light-text-color opacity-40 ' />
          <button onClick={handleResetSearch} className={`absolute top-0 bottom-0 my-auto right-[8px] text-[14px] font-semibold items-center tracking-wide px-3 text-main-color transition  ${resetSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} `}>Cancel</button>
        </label>
      </form>
    </div>
  )
}

export default Menu