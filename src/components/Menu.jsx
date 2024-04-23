import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    <div className='sticky top-0 z-50 bg-body-color  h-[55px] min-h-[55px] px-[24px] border-b text-light-text-color border-border-line-color flex items-center justify-between'>
      <div className='h-full w-fit min-w-fit'>
        <ul className='flex h-[100%] items-center relative  '>
          <Link to="/" className='text-xl font-bold flex items-center tracking-tighter mr-6'><img className='h-[35px] mr-1' src='{Logo}' alt="" /> Pagez</Link>
          <div className='h-full group mr-5'>
            <Link to="/" className={`text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 border-[3px] border-transparent hover:border-b-main-color  ${location.pathname === '/' ? ' border-b-main-color ' : ''}`}>Explore <GoChevronDown className='ml-[2px]' /></Link>
            <div className={`absolute top-[90%] left-[70px] min-w-[180px] min-h-[100px] z-10 bg-body-color py-5 border border-border-line-color rounded-lg shadow  flex-col hidden group-hover:flex `}>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 ${location.pathname === '/' && 'text-main-color '}`}>For You</Link>
              <Link to={`/search`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 `}>Search & Explore</Link>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 `}>Pagez for Kids</Link>
              <span className='w-full h-[1px] bg-border-line-color mb-5 mt-3'></span>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6 pb-2 hover:text-main-color transition duration-100 ${location.pathname === '/AudioBooks' && 'text-main-color '}`}>Audiobooks</Link>
              <Link to={`/`} className={`text-[14px] font-semibold flex items-center tracking-wide px-6  hover:text-main-color transition duration-100 `}>PDF Books</Link>

            </div>
          </div>
          <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 mr-5 border-[3px] border-transparent hover:border-b-main-color  '>Library</Link>

        </ul>
      </div>

      <form onSubmit={searchThis} className='h-full w-full relative flex text-light-text-color'>
        <label className='w-full relative overflow-hidden flex flex-col items-center justify-center z-20'>
          <input type="search" onChange={handleSearchValue} onKeyDown={hideWhenEmpty} value={searchValue} placeholder='Search' className='bg-container-color placeholder:text-text-color-light  rounded-full h-[65%] w-full pl-9 pr-20 border border-border-line-color text-[15px] tracking-tight font-medium ' />
          <TbSearch className='text-lg absolute top-0 bottom-0 my-auto left-[12px] text-light-text-color opacity-40 ' />
          <button onClick={handleResetSearch} className={`absolute top-0 bottom-0 my-auto right-[8px] text-[14px] font-semibold items-center tracking-wide px-3 text-main-color transition  ${resetSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} `}>Cancel</button>
        </label>
        <div className={`min-h-fit w-full pt-12 pb-5 bg-body-color bg-opacity-80 backdrop-blur-sm shadow-xl absolute top-[10px] border border-border-line-color rounded-2xl flex-col ${quickResult ? 'flex ' : 'hidden'} `}>
          <h1 className='px-9 font-medium text-sm  pt-1 text-text-color-light truncate whitespace-nowrap max-w-[95%] '>Results for ` {searchValue} `</h1>
          <div className='px-4 flex flex-col mt-3'>
            <Link to={`/`} className='group px-5 py-3 rounded-xl transition hover:bg-container-color '>
              <h1 className=' text-[15px] tracking-tight font-medium transition group-hover:text-main-color  '>Home Lander</h1>
              <p className='text-sm mt-1 truncate whitespace-break-spaces text-text-color-light line-clamp-2 w-full '>24GB</p>
            </Link>
          </div>
          <span className='w-full h-fit border-b border-border-line-color my-4'></span>
          <div className='px-4 flex flex-col gap-2'>
            <Link to={`/`} className=' text-sm tracking-tight w-fit text-text-color-light hover:text-main-color font-medium px-5 rounded-xl '>Request a game</Link>
            <Link to={`/`} className=' text-sm tracking-tight w-fit text-text-color-light hover:text-main-color font-medium px-5 rounded-xl transition '>Feedback</Link>
          </div>
        </div>
      </form>

      <div className={`h-full w-fit min-w-fit relative flex items-center ml-5 space-x-5`}>
        <div className='flex items-center gap-3 h-full w-fit min-w-fit'>
          <Link to={`/`} className={`h-[65%] w-fit flex items-center px-5 text-main-color hover:bg-main-color/10 border border-border-line-color text-[14px] font-semibold tracking-tight rounded-full `}>Log In</Link>
          <Link to={`/`} className={`h-[65%] w-fit flex items-center px-5 bg-main-color text-white border-border-line-color text-[14px] font-semibold tracking-tight rounded-full `}>Sign Up</Link>
        </div>
        <div className='w-fit h-[25px] border-l border-l-border-line-color'></div>
        <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 mr-5 border-[3px] border-transparent hover:border-b-main-color  '>SC <GoGitBranch className='ml-[5px]' /></Link>
        {/* <Link to="/" className='text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 mr-5 border-[3px] border-transparent hover:border-b-main-color '>Rate This App</Link> */}
        <div className='h-full group text-light-text-color'>
          <Link to="/" className={`text-[15px] font-semibold flex items-center tracking-wide h-[100%] transition duration-100 border-[3px] border-transparent`}>Apps <GoChevronDown className='ml-[2px]' /></Link>
          <div className={`absolute top-[90%] -right-[10px] min-w-[280px] min-h-fit z-10 bg-body-color py-5 border border-border-line-color rounded-lg shadow  flex-col hidden group-hover:flex `}>
            <div></div>
            <span className='w-full h-[1px] bg-border-line-color mb-5 mt-3'></span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu