import React from 'react'

const Badge = ({count}) => {
  
  return (
    <div className="bg-body-color/70 bg-opacity-95 dark:bg-opacity-95 text-white leading-none aspect-square size-7 rounded-full flex justify-center items-center text-sm   font-mono ">
        {count > 100 ? "99+" : count}
    </div>
  )
}

export default Badge