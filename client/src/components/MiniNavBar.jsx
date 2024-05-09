import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function MiniNavBar() {
    const location = useLocation()
  return (
    <div className='w-full h-fit bg-white dark:bg-body-color sticky top-[-2px] z-30'>
    <div className="h-fit w-full max-w-[1100px] px-5 py-3 mx-auto flex items-center justify-start gap-3 ">
        <form className="">
          <input
            type="search"
            name="search"
            className="bg-stone-100 placeholder:text-text-color-light/80 dark:bg-container-color/60 px-4 h-[45px] font-medium text-sm w-full max-w-[260px] "
            autoComplete="on"
            placeholder="Search Game"
          />
        </form>
        <Link to={`/`}
          className={`px-3 h-[45px] flex items-center justify-center border-b-[2px] border-transparent text-[15px] font-DMsans font-medium tracking-tight  ${location.pathname === '/' ? 'text-black dark:text-white border-main-color ' : 'text-black dark:text-text-color-light'}`}
        >
          Discover
        </Link>
        <Link to={`/browse`}
          className={`px-3 h-[45px] flex items-center justify-center border-b-[2px] border-transparent text-[15px] font-DMsans font-medium tracking-tight text-black dark:text-text-color-light  ${location.pathname === '/browse' ? 'text-black dark:text-white border-main-color ' : 'text-black dark:text-text-color-light'}`}
        >
          Browse
        </Link>
      </div>
      </div>
  )
}

export default MiniNavBar