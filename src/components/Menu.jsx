import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Logo35 from '../assets/images/logo 35.png'
import { FaChild } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";

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

  useEffect(() => {
    document.title = "Explore Books"
  }, [])

  const searchThis = (e) => {
    e.preventDefault();
  }

  return (
    <div className='h-[55px] min-h-[55px] px-[24px] border-b border-light-border-line flex items-center justify-between'>
      <div className='h-full w-fit min-w-fit'>
        <ul className='flex h-[100%] items-center relative text-light-text-color '>
          <Link to="/" className='text-xl font-bold flex items-center tracking-tighter mr-6'><img className='h-[35px]' src={Logo} alt="" />Pagez</Link>
          <div className='h-full group mr-5'>
            <Link to="/" className={`text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 border-[3px] border-transparent hover:border-b-light-text-color ${location.pathname === '/' ? ' border-b-light-text-color ' : ''}`}>Explore <GoChevronDown className='ml-[2px]' /></Link>
            <div className={`absolute top-[90%] left-[70px] min-w-[180px] min-h-[100px] z-10 bg-white py-5 border border-light-border-line rounded-lg shadow  flex-col hidden group-hover:flex `}>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 ${location.pathname === '/' && 'text-main-color '}`}>For You</Link>
              <Link to={`/search`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 `}>Search & Explore</Link>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 `}>Pagez for Kids</Link>
              <span className='w-full h-[1px] bg-light-border-line mb-5 mt-3'></span>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 ${location.pathname === '/AudioBooks' && 'text-main-color '}`}>Audiobooks</Link>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6  hover:text-main-color transition duration-100 `}>PDF Books</Link>

            </div>
          </div>

          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 mr-5 border-[3px] border-transparent hover:border-b-light-text-color'>Library</Link>
          <div className='w-6 h-[25px] border-l border-l-light-border-line'></div>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 mr-5 border-[3px] border-transparent hover:border-b-light-text-color'>SC <GoGitBranch className='ml-[5px]' /></Link>
          {/* <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 mr-5 border-[3px] border-transparent hover:border-b-light-text-color'>Rate This App</Link> */}
        </ul>
      </div>

      <form onSubmit={searchThis} className='h-full w-full relative flex text-light-text-color'>
        <label className='w-full relative overflow-hidden flex flex-col items-center justify-center z-20'>
          <input type="search" onChange={handleSearchValue} onKeyDown={hideWhenEmpty} value={searchValue} placeholder='Search' className='bg-stone-50 rounded-full h-[65%] w-full pl-9 pr-20 border border-light-border-line text-[15px] tracking-tight font-medium ' />
          <TbSearch className='text-lg absolute top-0 bottom-0 my-auto left-[12px] text-light-text-color opacity-40 ' />
          <button onClick={handleResetSearch} className={`absolute top-0 bottom-0 my-auto right-[8px] text-[14px] font-semibold items-center tracking-wide px-3 text-main-color transition  ${resetSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} `}>Cancel</button>
        </label>
        <div className={`min-h-[200px] w-full pt-12 pb-5 bg-stone-50 shadow-xl absolute top-[10px]  rounded-2xl transition-opacity flex flex-col ${quickResult ? 'opacity-100  z-10' : 'opacity-0 -z-10'} `}>
          <h1 className='px-9 font-medium text-lg pt-1 text-light-text-color text-opacity-40 font-SulphurPoint truncate whitespace-nowrap max-w-[95%] '>Results for ` {searchValue} `</h1>
          <div className='px-4 flex flex-col mt-4'>
            <Link to={`/`} className='group px-5 py-3 rounded-xl transition hover:bg-stone-100'>
              <h1 className=' text-[15px] tracking-tight font-medium transition group-hover:text-main-color  '>Home Lander</h1>
              <p className='text-sm mt-1 truncate whitespace-break-spaces text-light-text-color text-opacity-60 line-clamp-2 w-full '>By: Optio beatae.</p>
            </Link>
            <Link to={`/`} className='group px-5 py-3 rounded-xl transition hover:bg-stone-100'>
              <h1 className=' text-[15px] tracking-tight font-medium transition group-hover:text-main-color  '>Home Lander</h1>
              <p className='text-sm mt-1 truncate whitespace-break-spaces text-light-text-color text-opacity-60 line-clamp-2 w-full '>By: Beatrice Williams</p>
            </Link>
            <Link to={`/`} className='group px-5 py-3 rounded-xl transition hover:bg-stone-100'>
              <h1 className=' text-[15px] tracking-tight font-medium transition group-hover:text-main-color  '>Home Lander</h1>
              <p className='text-sm mt-1 truncate whitespace-break-spaces text-light-text-color text-opacity-60 line-clamp-2 w-full '>By: Jenny Frankins</p>
            </Link>
          </div>
          <span className='w-full h-fit border-b border-light-border-line my-4'></span>
          <div className='px-4 flex flex-col gap-2'>
            <Link to={`/`} className=' text-sm tracking-tight w-fit text-light-text-color text-opacity-55 font-medium px-5 rounded-xl transition hover:text-main-color'>Request a book</Link>
            <Link to={`/`} className=' text-sm tracking-tight w-fit text-light-text-color text-opacity-55 font-medium px-5 rounded-xl transition hover:text-main-color'>Feedback</Link>
          </div>
        </div>
      </form>

      <div className={`h-full w-fit min-w-fit relative flex items-center ml-5 space-x-2`}>
        <Link to={`/`} className={`h-[65%] w-fit flex items-center px-5 text-main-color hover:bg-green-50     border border-light-border-line text-[14px] font-semibold tracking-tight rounded-full `}>Log In</Link>
        <Link to={`/`} className={`h-[65%] w-fit flex items-center px-5 bg-main-color text-white border-light-border-line text-[14px] font-semibold tracking-tight rounded-full `}>Sign Up</Link>
      </div>
    </div>
  )
}

export default Menu