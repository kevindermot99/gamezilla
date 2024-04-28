import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TbLoader2 } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'
import { useDataContext } from '../contexts/DataContext';

function SignUp() {
    const [username, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password2, setPassword2] = useState(null)
    const [pageOut, setPageOut] = useState(false)
    const [authing, setAuthing] = useState(false)

    const navigate = useNavigate()

    if (pageOut) {
        navigate('/', { replace: true })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePassword2 = (e) => {
        setPassword2(e.target.value)
    }

    const handleusername = (e) => {
        setUserName(e.target.value)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        setAuthing(true)// emailjs.sendForm('service_x6h8r6n', 'template_5jde4cn', e.target, 'ux-raMZeiO57IIgRz')

        if (password == password2) {
            try {
                const response = await axios.post('http://localhost:3001/signup', {
                    username,
                    email,
                    password
                })

                if (response.status === 201) {
                    console.log('account created successful')
                    localStorage.setItem('gamezillaUserId', response.data.userId)
                    localStorage.setItem('gamezillaUsername', response.data.username)
                    setPageOut(true)
                    navigate('/', {replace: true })

                }
                else {
                    // console.log(response.data.message)
                    toast(response.data.message, {
                        // toastId: "customId"
                    })
                    setAuthing(false)

                }
            }
            catch (error) {
                // console.log(error)
                toast(error.response.data.message, {
                    // toastId: "customId"
                })
                setAuthing(false)

            }
        }
        else {
            toast("Password doesn't match!", {
                // toastId: "customId"
            })
            setAuthing(false)
        }



    }

    // checking logged in user
    useEffect(() => {
        const userId = localStorage.getItem('gamezillaUserId')
        if (userId) {
            navigate('/', { replace: true })
        }
    }, [])


    return (
        <div className='px-[24px] py-5 flex flex-col h-full w-full bg-body-color '>
            <ToastContainer
                className='select-none'
                position="bottom-left"
                draggable
                autoClose={3000}
            />
            <Link to={'/'} className='text-2xl font-bold flex items-center tracking-tight mr-8 w-fit'>Gamezilla.</Link>
            <div className='h-full w-full flex items-center justify-center flex-col'>
                <form onSubmit={handleSignUp} className=' text-text-color w-full max-w-[360px] py-[40px] flex flex-col items-start justify-start '>
                        <h1 className='text-3xl leading-[35px] font-bold '>SignUp</h1>
                    <p className='mb-7 text-text-color/20 font-light text-sm pt-2'>Welcome to Gamezilla </p>
                    <div className='w-full flex flex-col mb-2'>
                        <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Username</h1>
                        <input onChange={handleusername} name="username" type="text" required placeholder='eg: Kelly Powel' className='bg-border-line-color/60  py-3 px-5 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color  ' />
                    </div>
                    <div className='w-full flex flex-col mb-2'>
                        <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Email</h1>
                        <input onChange={handleEmail} name="email" type="email" required placeholder='someone@example.com' className='bg-border-line-color/60  py-3 px-5 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color  ' />
                    </div>
                    <label className='w-full flex flex-col mb-4'>
                        <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Create a Password</h1>
                        <input onChange={handlePassword} type="password" required placeholder='Password' autoComplete="off" className='bg-border-line-color/60  py-3 px-5 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color   ' />
                    </label>
                    <label className='w-full flex flex-col mb-4'>
                        <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Re-enter Password</h1>
                        <input onChange={handlePassword2} type="password" required placeholder='Password' autoComplete="off" className='bg-border-line-color/60  py-3 px-5 w-full rounded-full placeholder:text-text-color-light/70 text-sm focus:ring-[2px] focus:ring-main-color   ' />
                    </label>

                    <div className='w-full flex gap-2 mb-4 mt-5 '>
                        {/* <Link to="/" name='email' className=' w-full h-[40px] px-4 transition bg-border-line-color/60 hover:bg-border-line-color rounded-full text-sm flex items-center justify-center '>Cancel</Link> */}
                        <button type="submit" name='email' className={` w-full h-[40px] px-4 transition bg-main-color hover:bg-main-color/60 rounded-full text-sm flex items-center justify-center font-medium ${authing && 'pointer-events-none '}`} >{authing ? <TbLoader2 className='animate-spinLoader text-white text-[25px] ' /> : 'Create Account'}</button>
                    </div>
                    <p className='text-sm font-light text-text-color/60 self-center mt-5'>Already have an account? <Link to='/login' className='text-main-color underline' > Login </Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp