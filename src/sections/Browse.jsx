import React from 'react'
import Search from '../components/Search'
import Button from '../components/Button'
import { Filters } from '../constants/data'

function Browse() {
  return (
    <setion className='space-y-10 max-sm:space-y-2 '>
      <Search />
      <div className='width-90 flex justify-start items-start gap-4 relative'>
        <div className='max-h-dvh max-sm:hidden stay-at-top'>

          <h1 className='text-black text-[25px] font-bold max-sm:hidden '>Filters</h1>

          <div className='max-h-[70vh] overflow-y-auto overflow-x-hidden flex flex-col items-start justify-start pl-4 pr-2 max-sm:border-2 max-sm:pt-3 max-sm:pl-3 max-sm:pb-3 max-sm:bg-white max-sm:absolute max-sm:max-h-[30vh] mt-2'>
            <h3 className='w-full text-sm font-bold text-main-color mb-2 flex justify-between'><span># Genres</span><span className='text-[13px]'>{Filters.length}</span></h3>
            <span className='w-fit flex flex-col items-start justify-start'>
              {Filters.map((button) => (
                <Button label={button.label} />
              ))}
            </span>
          </div>
        </div>
        <div className='h-[300vh]'>
          <h1 className='text-black text-[25px] font-bold'>Books</h1>
        </div>
      </div>
    </setion>
  )
}

export default Browse