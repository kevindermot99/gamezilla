import React from 'react'

const Notification = ({label}) => {
  return (
    <div className="notification bg-black dark:bg-white text-white dark:text-black  ">
        {label}
    </div>
  )
}

export default Notification