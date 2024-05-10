import React from 'react'

const Badge = ({count}) => {
  
  return (
    <div className=" absolute -top-[4px] -right-[12px] bg-black dark:bg-white text-white dark:text-black h-5 px-[6px] text-center pt-[1px] rounded-full text-[13px] font-bold font-mono ">
        {count > 99 ? "99" : count}
    </div>
  )
}

export default Badge