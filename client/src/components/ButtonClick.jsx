import React from 'react'
import { Link } from 'react-router-dom'

function ButtonClick({ title, type, icon}) {
    return (
        <button type={type} className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity h-[35px] px-4 bg-black bg-gradient-to-t from-[#a62ce2] to-[#8019a0] text-sm flex items-center gap-1 active:scale-95">
             <span className='text-[17px] pb-[1px] '>{icon}</span>
                {title}
        </button>

    )
}

export default ButtonClick