import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-[270px] bg-body-color h-full flex flex-col'>
      <h1>Gamezilla</h1>
      <ul>
        <Link></Link>
        <Link></Link>
      </ul>
    </div>
  )
}

export default Sidebar