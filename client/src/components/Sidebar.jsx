import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-full h-full overflow-y-auto max-h-[80vh] flex flex-col justify-start items-start'>
        <span className={`text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 text-body-color dark:text-text-color `}>
          Explore
        </span>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          All Games
        </Link>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Collections
        </Link>
        <span className={`text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 mt-5 text-body-color dark:text-text-color `}>
          Quick access
        </span>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Trending
        </Link>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Most Downloaded
        </Link>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Wallpapers
        </Link>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Terms of service
        </Link>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          FAQs
        </Link>
        

        <span className={`text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 mt-5 text-body-color dark:text-text-color `}>
          Add Ons
        </span>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Mods
        </Link>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          DLCs
        </Link>
        <Link className={` capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-black dark:text-text-color-light transition dark:hover:text-white `}>
          Patchs
        </Link>
        

    </div>
  )
}

export default Sidebar