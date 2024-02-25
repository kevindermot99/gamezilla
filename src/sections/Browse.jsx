import React from 'react'
import Search from '../components/Search'
import Button from '../components/Button'
import { Filters } from '../constants/data'

function Browse() {
  return (
    <setion className='space-y-10'>
      <Search />
      <div className='width-90 flex justify-start items-start gap-4'>
        <div className='max-h-dvh sticky top-0'>
          <h1 className='text-black text-[25px] font-bold'>Filters</h1>
          <div className='flex flex-col items-start justify-start pl-4 pr-2 border-r-2 mt-2'>
          <h3 className='w-full text-sm font-bold text-main-color mb-2 flex justify-between'><span># Genres</span><span className='text-[13px]'>{Filters.length}</span></h3>
          <span className='w-fit flex flex-col items-start justify-start max-h-[80vh] overflow-y-auto'>
            {Filters.map((button) => (
              <Button label={button.label} />
            ))}
          </span>
          </div>
        </div>
        <div>
          <h1 className='text-black text-[25px] font-bold'>Books</h1>
        </div>
      </div>
    </setion>
  )
}

export default Browse