import React from 'react'

const Badge = ({count}) => {
  
  return (
    <div className=" absolute -top-[7px] left-[16px] bg-white text-black aspect-square h-5 text-center pt-[3px] rounded-full text-xs font-bold font-mono ">
        {count > 100 ? "99+" : count}
    </div>
  )
}

export default Badge