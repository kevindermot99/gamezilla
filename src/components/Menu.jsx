import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GoChevronDown } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";
import Logo from '../assets/logo.png'
import Badge from './Badge';

function Menu() {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState('')
  const [resetSearch, setResetSearch] = useState(false)
  const [quickResult, setQuickResult] = useState(false)


  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value !== '') {
      setResetSearch(true)
      setQuickResult(true)
    }
    else {
      setResetSearch(false)
      setQuickResult(false)
    }

  }

  const hideWhenEmpty = (e) => {
    if (e.target.value === '') {
      setResetSearch(false)
    }
  }

  const handleResetSearch = () => {
    setSearchValue('')
    setResetSearch(false)
    setQuickResult(false)
  }

  const searchThis = (e) => {
    e.preventDefault();
  }

  return (
    <div className='fixed top-0 z-50 bg-transparent  h-[80px] w-full min-h-[55px] px-[24px] text-light-text-color flex items-center justify-between'>
      <div className='h-full w-fit min-w-fit'>
        <ul className='flex h-[100%] items-center relative  '>
          <Link to="/" className='text-xl font-bold flex items-center tracking-tighter mr-8'><img src={Logo} className='h-[40px] mr-2' alt="" /> GameGrid</Link>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-fit mr-5 relative gap-1 transition hover:opacity-70 ' title='Explore'> Explore </Link>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-fit mr-5 relative gap-1 transition hover:opacity-70 ' title='All Games'> Games</Link>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-fit mr-5 relative gap-1 transition hover:opacity-70 ' title={`Low-end PC's`}>Low-end PC Gamez</Link>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-fit mr-5 relative gap-1 transition hover:opacity-70 ' title={`Copyright Claim`}>CC</Link>
          {/* <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-fit mr-5 relative gap-1 transition hover:opacity-70  '>My Games </Link> */}

        </ul>
      </div>

      {/* <form onSubmit={searchThis} className='h-fit w-full max-w-[600px] relative flex text-light-text-color'>
        <label className='w-full h-fit relative overflow-hidden flex flex-col items-center justify-center z-20'>
          <input type="search" onChange={handleSearchValue} onKeyDown={hideWhenEmpty} value={searchValue} placeholder='Search' className='bg-stone-200 placeholder:text-text-color-light rounded-full h-[40px] w-full pl-9 pr-20 text-[15px] tracking-tight font-medium ' />
          <TbSearch className='text-lg absolute top-0 bottom-0 my-auto left-[12px] text-light-text-color opacity-40 ' />
          <button onClick={handleResetSearch} className={`absolute top-0 bottom-0 my-auto right-[8px] text-[14px] font-semibold items-center tracking-wide px-3 text-main-color transition  ${resetSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} `}>Cancel</button>
        </label>
        <div className={`min-h-fit w-full pt-12 pb-5 bg-body-color bg-opacity-80 backdrop-blur-sm shadow-xl absolute top-[10px] border border-border-line-color rounded-2xl flex-col ${quickResult ? 'flex ' : 'hidden'} `}>
          <h1 className='px-9 font-medium text-sm  pt-1 text-text-color-light truncate whitespace-nowrap max-w-[95%] '>Results for ` {searchValue} `</h1>
          <div className='px-4 flex flex-col mt-3'>
            <Link to={`/`} className='group px-5 py-3 rounded-xl transition hover:bg-container-color '>
              <h1 className=' text-[15px] tracking-tight font-medium transition group-hover:text-main-color  '>Home Lander</h1>
              <p className='text-sm mt-1 truncate whitespace-break-spaces text-text-color-light line-clamp-2 w-full '>24GB • Torrent</p>
            </Link>
          </div>
          <span className='w-full h-fit border-b border-border-line-color my-4'></span>
          <div className='px-4 flex flex-col gap-2'>
            <Link to={`/`} className=' text-sm tracking-tight w-fit text-text-color-light hover:text-main-color font-medium px-5 rounded-xl '>Request a game</Link>
            <Link to={`/`} className=' text-sm tracking-tight w-fit text-text-color-light hover:text-main-color font-medium px-5 rounded-xl transition '>Feedback</Link>
          </div>
        </div>
      </form> */}

      <div className={`h-full w-fit min-w-fit relative flex items-center ml-5 space-x-5`}>
        <div className='flex items-center gap-3 h-full w-fit min-w-fit'>
          <Link to={`/`} className={`h-[40px] w-fit flex items-center px-5 text-white text-[14px] font-semibold tracking-tight rounded-full transition hover:opacity-70  `}>Log In</Link>
          <Link to={`/`} className={`h-[40px] w-fit flex items-center px-5 bg-main-color text-white text-[14px] font-semibold tracking-tight rounded-full `}>Sign Up</Link>
        </div>
        <div className='w-fit h-[25px] border-l border-l-stone-300'></div>
        <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-fit transition hover:opacity-70  '>SC <GoGitBranch className='ml-[5px]' /></Link>
      </div>
    </div>
  )
}

export default Menu