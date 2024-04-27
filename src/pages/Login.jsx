import React from 'react'
import { Link } from 'react-router-dom'
import authbg from '../assets/authbg.jpg'

function Login() {
  return (
    <div className='px-[24px] py-4 flex flex-col h-full w-full bg-container-color'>
        <Link to={'/'} className='text-2xl font-bold flex items-center tracking-tight mr-8 w-fit'>Gamezilla.</Link>
        <div className='h-full w-full flex items-center justify-center flex-col'>
            <form className='bg-body-color/40 px-9 py-8 rounded-3xl  text-text-color w-full max-w-[420px] flex flex-col items-start justify-start '>
                <h1 className='text-3xl leading-[35px] font-bold '>Login</h1>
                <p className='mb-5 text-text-color/80 font-light text-sm'>Hi, Welcome Back</p>

                <label className='w-full flex flex-col mb-2'>
                    <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Email</h1>
                    <input type="email" name='email' placeholder='someone@example.com' className='bg-border-line-color/60  py-2 px-4 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color  '/>
                </label>
                <label className='w-full flex flex-col mb-4'>
                    <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Password</h1>
                    <input type="password" name='password' placeholder='Password' className='bg-border-line-color/60  py-2 px-4 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color   '/>
                </label>
                <a className='mb-5 text-main-color  font-light flex text-sm self-end'> Forgot Password?</a>
                <div className='w-full flex gap-2 mb-4 '>
                    <Link to="/" name='email' className=' w-full py-2 px-4 transition bg-border-line-color hover:bg-stone-400/40 rounded-full text-sm flex items-center justify-center '>Cancel</Link>
                    <button type="submit" name='email' className=' w-full py-2 px-4 transition bg-main-color hover:bg-main-color/60 rounded-full text-sm flex items-center justify-center'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login