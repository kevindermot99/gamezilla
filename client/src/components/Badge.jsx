import React from 'react'

const Badge = ({count}) => {
  
  return (
    <div className=" absolute -top-[7px] -right-[15px] bg-main-color text-white aspect-square h-5 text-center pt-[1px] rounded-full text-[13px] font-bold font-mono ">
        {count > 9 ? "9+" : count}
    </div>
  )
}

export default Badge