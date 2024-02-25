import React from 'react'
import Search from '../components/Search'
import Button from '../components/Button'
import { Filters } from '../constants/data'

function Browse() {
  return (
    <setion className='space-y-10'>
      <Search />
      <div className='width-90 flex justify-start items-start gap-4'>
        <div>
          <h1 className='text-black text-[25px] font-bold'>Filters</h1>
          <div className='flex flex-col items-start justify-start pr-2 border-r-2 mt-2'>
          <h3 className='w-full text-lg font-medium text-main-color mb-2'># Genre</h3>
            {Filters.map((button) => (
              <Button label={button.label} />
            ))}
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