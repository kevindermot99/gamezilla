import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

function Search() {
  return (
    <div className='search-component py-[80px] max-sm:py-0 width-90'>
      <p className='relative text-black text-sm  drop-shadow font-normal px-5 max-sm:hidden'>
      Up to 244,034 Free Books.
        </p>
      <span className='relative'>
        <input className="search transition bg-white bg-opacity-80 max-sm:bg-gray-100 backdrop-blur-md " type="search" placeholder="Find a Book.." />
        <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-[#333] " />
      </span>
    </div>
  )
}

export default Search