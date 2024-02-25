import React from 'react'

function Button({label}) {
  return (
    <button className='font-medium capitalize py-2 text-sm px-4 min-w-36 text-left rounded-lg transition hover:bg-gray-100 '>
        {label}
    </button>
  )
}

export default Button