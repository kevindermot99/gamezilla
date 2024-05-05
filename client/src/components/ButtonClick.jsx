import React from 'react'
import { Link } from 'react-router-dom'

function ButtonClick({ title, type, icon}) {
    return (
        <button type={type} className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[1px] bg-black rounded-xl bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
            <div className="w-full h-full flex items-center justify-center gap-1 pl-4 pr-5 whitespace-nowrap py-[10px] bg-main-color text-[#f1d5fe] font-semibold rounded-xl bg-gradient-to-t from-[#a62ce2] to-[#8019a0] text-sm">
                <span className='text-[17px] pb-[1px] '>{icon}</span>
                {title}
            </div>
        </button>

    )
}

export default ButtonClick