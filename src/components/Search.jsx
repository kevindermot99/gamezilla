import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

function Search() {
  return (
    <div className='search-component'>
      <span className='relative'>
        <input className="search" type="search" placeholder="Find a Book.." />
        <RiSearch2Line className="absolute top-0 bottom-0 m-auto left-4 size-5 text-gray-400 " />
      </span>
    </div>
  )
}

export default Search