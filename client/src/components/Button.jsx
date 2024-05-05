import React from 'react'
import { Link } from 'react-router-dom'

function Button({ title, to}) {
    return (
        <Link to={to} className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
            <span className="w-full h-full flex items-center gap-2 px-7 whitespace-nowrap py-2 bg-main-color text-[#f1d5fe] font-medium rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                {title}
            </span>
        </Link>

    )
}

export default Button