import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TbLoader2 } from "react-icons/tb";


function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loginOut, setLoginOut] = useState(false)
    const [authing, setAuthing] = useState(false)

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setAuthing(true)
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password
            })

            if (response.status === 200) {
                console.log('Login successful')
                localStorage.setItem('gamezillaUserId', response.data.userId)
                localStorage.setItem('gamezillaUsername', response.data.username)
                setLoginOut(true)
            } else {
                console.log('Login Failed')
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    if (loginOut) {
        navigate('/')
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // checking logged in user
    useEffect(() => {
        const userId =  localStorage.getItem('gamezillaUserId')
        if (userId) {
            navigate('/', { replace: true })
        }
    },[])
    

    return (
        <div className='px-[24px] py-5 flex flex-col h-full w-full bg-body-color '>
            <Link to={'/'} className='text-2xl font-bold flex items-center tracking-tight mr-8 w-fit'>Gamezilla.</Link>
            <div className='h-full w-full flex items-center justify-center flex-col'>
                <form onSubmit={handleLogin} className=' text-text-color w-full max-w-[360px] flex flex-col items-start justify-start '>
                    <h1 className='text-3xl leading-[35px] font-bold '>Login</h1>
                    <p className='mb-5 text-text-color/20 font-light text-base pt-1'>Hi, Welcome Back</p>

                    <label className='w-full flex flex-col mb-2'>
                        <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Email</h1>
                        <input onChange={handleEmail} type="email" name='email' placeholder='someone@example.com' className='bg-border-line-color/60  py-2 px-4 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color  ' />
                    </label>
                    <label className='w-full flex flex-col mb-4'>
                        <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Password</h1>
                        <input onChange={handlePassword} type="password" name='password' placeholder='Password' className='bg-border-line-color/60  py-2 px-4 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color   ' />
                    </label>
                    <a className='mb-5 text-main-color  font-light flex text-sm self-end'> Forgot Password?</a>
                    <div className='w-full flex gap-2 mb-4 '>
                        <Link to="/" name='email' className=' w-full h-[40px] px-4 transition bg-border-line-color/60 hover:bg-border-line-color rounded-full text-sm flex items-center justify-center '>Cancel</Link>
                        <button type="submit" name='email' className={` w-full h-[40px] px-4 transition bg-main-color hover:bg-main-color/60 rounded-full text-sm flex items-center justify-center ${authing && 'pointer-events-none '}`} >{authing ? <TbLoader2 className='animate-spinLoader text-white text-[25px] ' /> : 'Login'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login