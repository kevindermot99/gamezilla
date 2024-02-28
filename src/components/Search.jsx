import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

function Search() {
  return (
    <div className='search-component py-16 max-sm:py-0 width-90'>
      <h1 className='relative text-white text-[40px] max-sm:text-[30px] font-DMsans drop-shadow-lg font-bold px-5 max-sm:hidden'>
      Up to 100 Free Books.
        </h1>
      <span className='relative '>
        <input className="search" type="search" placeholder="Find a Book.." />
        <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-[#333] " />
      </span>
    </div>
  )
}

export default Search