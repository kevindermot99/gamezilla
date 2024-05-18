import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-full h-full overflow-y-auto flex flex-col justify-start items-start py-3'>
        <span className={`text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-4 text-body-color dark:text-text-color `}>Explore</span>
        <Link className={`text-sm py-2 font-medium tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          All Games
        </Link>
        <Link className={`text-sm py-2 font-medium tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Collections
        </Link>
        <span className={`text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-4 text-body-color dark:text-text-color `}>Quick access</span>

    </div>
  )
}

export default Sidebar