import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GoChevronDown } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";
import Logo from '../assets/logo.png'
import Badge from './Badge';
import { TbLogout2 } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { HiCollection } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { genres } from '../constants/data';
import { RiCustomerService2Line } from "react-icons/ri";

function Menu({ userId }) {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState('')
  const [resetSearch, setResetSearch] = useState(false)
  const [quickResult, setQuickResult] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [username, setUserName] = useState('')
  const navigate = useNavigate()


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

  const changeBg = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBg)
  }, [])

  window.addEventListener('load', () => {
    setScrollPosition(window.scrollY)
  })

  useEffect(() => {
    if (userId !== '') {
      const res = localStorage.getItem('gamezillaUsername')
      setUserName(res)
    }
  }, [userId])

  const handleLogout = () => {
    localStorage.removeItem('gamezillaUsername')
    localStorage.removeItem('gamezillaUserId')

    window.location.reload()
  }


  return (
    <div className={` sticky top-0 z-20 h-fit w-full px-[24px] pt-4 text-light-text-color flex flex-col gap-5 bg-body-color  ${scrollPosition > 20 ? '  ' : '  '} `}>

      <div className='w-full flex items-center justify-between '>
        <div>
          <Link to='/' className='font-bold text-2xl font-Inter flex items-center justify-center gap-2 '>
            <img src={Logo} className="h-9" />
            Gamezilla
          </Link>
        </div>

        <form onSubmit={searchThis} className='h-fit w-full max-w-[400px] relative flex text-light-text-color'>
          <label className='w-full h-fit relative overflow-hidden p-[2px] flex flex-col items-center justify-center z-20'>
            <input type="search" onChange={handleSearchValue} onKeyDown={hideWhenEmpty} value={searchValue} placeholder='Search' className='bg-body-color ring-1 ring-border-line-color  placeholder:text-text-color-light rounded-full h-[35px] w-full pl-9 pr-20 text-[14px] font-medium ' />
            <TbSearch className='text-lg absolute top-0 bottom-0 my-auto left-[12px] text-light-text-color opacity-40 ' />
            <button onClick={handleResetSearch} className={`absolute top-0 bottom-0 my-auto right-[8px] text-[14px] font-semibold items-center tracking-wide px-3 text-main-color transition  ${resetSearch ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} `}>Cancel</button>
          </label>
        </form>

        <div className={`h-full w-fit min-w-fit relative flex items-center ml-5 gap-4`}>
          <Link to={`/signup`} className={` relative mr-1 group `}>
            <RiCustomerService2Line className='text-xl transition group-hover:text-main-color ' />
            {/* <Badge count={2} /> */}
          </Link>
          <Link to={`/signup`} className={` relative mr-3 group `}>
            <BsCart className='text-xl transition group-hover:text-main-color ' />
            <Badge count={0} />
          </Link>
          <div className={`flex items-center gap-3 h-full w-fit min-w-fit ${userId !== 'none' && 'hidden'}`}>
            <Link to={`/signup`} className={`h-[35px] w-fit flex items-center px-5 bg-main-color text-white text-[13px] transition hover:bg-main-color/90 p-2 font-bold tracking-wide rounded-full capitalize `}>Log in</Link>
          </div>
          {userId !== 'none' && (
            <div className={`group flex items-center gap-2 h-full w-fit min-w-fit cursor-default relative ${userId === 'none' && 'hidden'}`}>
              <p className='bg-main-color backdrop-blur-md text-white h-8 aspect-square flex items-center justify-center capitalize font-mono font-bold text-2xl rounded-full  '>{username.charAt(0)}</p>
              <p>{username}</p>
              <div className='absolute top-[30px] pt-3 right-0 w-fit min-w-[200px] h-fit opacity-0 -z-50 pointer-events-none group-hover:opacity-100 group-hover:z-10 -translate-y-4 group-hover:translate-y-0 transition group-hover:pointer-events-auto   '>
                <div className='bg-container-color bad rounded-lg p-2 w-full h-full'>
                  <button className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize '><RiAccountCircleLine className=' text-[25px] cursor-pointer ' /> Account</button>
                  <button className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize '><MdOutlineDownloading className=' text-[25px] cursor-pointer ' /> Downloads</button>
                  <button className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-main-color font-normal capitalize '><HiCollection className=' text-[25px] cursor-pointer ' /> Collection</button>
                  <div className='w-full h-[1px] bg-border-line-color/60 my-2'></div>
                  <button onClick={handleLogout} className='text-sm px-2 h-[40px] rounded-lg hover:bg-stone-500/10 w-full text-left flex items-center justify-start gap-2 hover:text-red-500 font-normal capitalize '><TbLogout2 className='text-[25px] cursor-pointer ' /> Logout</button>
                </div>
              </div>
            </div>
          )
          }

          <div className='w-fit h-[25px] border-l border-l-stone-300'></div>
          <a href="https://github.com/kevindermot99/gamezilla" target='_blank' className='text-[15px] font-semibold flex items-center tracking-wide h-fit transition hover:text-main-color' title={`Source Code`} >SC <GoGitBranch className='ml-[5px]' /></a>
        </div>
      </div>

      <div className='flex relative w-full '>
        <div className='absolute top-0 left-0 bg-gradient-to-l from-transparent to-body-color w-12 h-full '></div>
        <div className='absolute top-0 right-0 bg-gradient-to-r from-transparent to-body-color w-12 h-full '></div>
        <div className='hide-scroll w-full flex items-center justify-start gap-5 overflow-x-auto py-0 px-10 '>
          {genres.map((genre, index) => (
            <Link key={index} className={`text-xs font-semibold tracking-wide uppercase transition hover:bg-gradient-to-t from-main-color/20 to-main-color/0 border-b-[2px] border-transparent hover:border-main-color  hover:text-white p-3 whitespace-nowrap text-text-color-light snap-start `} to={`/`}>{genre}</Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Menu