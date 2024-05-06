import React from 'react'
import { Link } from 'react-router-dom'

function ButtonLink({ title, to, icon}) {
    return (
        <Link to={to} className="relative h-fit flex cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[1px] bg-black rounded-xl bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
            <div className="w-full h-full flex items-center justify-center gap-1 pl-4 pr-5 whitespace-nowrap py-[10px] bg-main-color text-[#f1d5fe] font-semibold rounded-xl bg-gradient-to-t from-[#a62ce2] to-[#8019a0] text-sm">
                <span className='text-[17px] pb-[3px]  '>{icon}</span>
                {title}
            </div>
        </Link>

    )
}

export default ButtonLink