import React from 'react'
import { Link } from 'react-router-dom'
import pagesLogo from "./assets/images/pagez-logo.png"

function LandingNavBar() {
    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
                <Link className='flex justify-start items-center gap-2 text-base font-medium'>
                    <img src={pagesLogo} alt="Logo" className='h-9' />
                    <p className='linkText'>Pages</p>
                </Link>
                <Link className='linkText'>home</Link>
                <Link className='linkText'>Logo</Link>
                <Link className='linkText'>Logo</Link>
                <Link className='linkText'>Logo</Link>
            </div>
            <div>
                
            </div>

        </div>
    )
}

export default LandingNavBar