import React from 'react'

const Notification = ({label}) => {
  
  return (
    <div className="bg-black dark:bg-white bg-opacity-95 dark:bg-opacity-95 text-white dark:text-black leading-none absolute -right-2 -top-2 aspect-square size-6 rounded-full flex justify-center items-center text-xs font-mono font-bold ">
        {label > 100 ? "99+" : label}
    </div>
  )
}

export default Notification