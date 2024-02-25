import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

function Search() {
  return (
    <div className='search-component py-24 max-sm:py-16 width-90'>
      <h1 className='relative text-white text-4xl font-DMsans drop-shadow-lg font-bold'>
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