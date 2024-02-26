import React from 'react'

const Notification = ({label}) => {
  return (
    <div className="notification bg-red-600  ">
        {label}
    </div>
  )
}

export default Notification