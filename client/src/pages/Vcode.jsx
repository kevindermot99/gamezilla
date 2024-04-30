import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Vcode({ location }) {
    const [vcode, setVcode] = useState(null)
    const [authing, setAuthing] = useState(false)
    const [userEmail, setUserEmail] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) {
            navigate('/login')
        }
        else {
            const fetchUserEmail = async () => {
                try {
                    const response = await axios.get(`/api/users/${id}`)
                    if (response.status === 200) {
                        setUserEmail(response.data.email)
                        console.log(response)
                    })
}
            catch (err) {
    console.log(err)
}  
            }
fetchUserEmail()
        }
    }, [fetchUserEmail])


const handleCode = async (e) => {
    e.preventDefault();
    try {
        setAuthing(true)
    }
    catch (error) {
        // console.log(error)
        toast(error.response.data.message, {
            // toastId: "customId"
        })
        setAuthing(false)
    }
}

const handleVcode = (e) => {
    setEmail(e.target.value)
}

return (
    <div className='px-[24px] py-5 flex flex-col h-full w-full bg-body-color'>
        <ToastContainer
            className='select-none'
            position="bottom-left"
            draggable
            autoClose={3000}
        />
        <Link to={'/'} className='text-2xl font-bold flex items-center tracking-tight mr-8 w-fit'>Gamezilla.</Link>
        <div className='h-full w-full flex items-center justify-center flex-col'>
            <form onSubmit={handleCode} className=' text-text-color w-full max-w-[360px] flex flex-col items-start justify-start '>

                <h1 className='text-3xl leading-[35px] font-bold '>Verify your Email</h1>
                <p className='mb-5 text-text-color/20 font-light text-sm pt-2'>we've sent an email at . that contains a 6 digits code. confirm by entering the code here</p>

                <label className='w-full flex flex-col mb-3'>
                    <h1 className=' text-text-color/80 font-light mb-2 text-sm'>Vcode</h1>
                    <input onChange={handleVcode} type="text" name='vcode' required placeholder='000 000' maxLength={6} className='bg-border-line-color/60 text-sm uppercase py-3 px-5 w-full rounded-full placeholder:text-text-color-light/70 focus:ring-[2px] focus:ring-main-color  ' />
                </label>

                <div className='w-full flex gap-2 mb-4 '>
                    {/* <Link to="/" name='email' className=' w-full h-[40px] px-4 transition bg-border-line-color/60 hover:bg-border-line-color rounded-full text-sm flex items-center justify-center font-medium '>Cancel</Link> */}
                    <button type="submit" name='email' className={` w-full h-[40px] px-4 transition bg-main-color hover:bg-main-color/60 rounded-full text-sm flex items-center justify-center font-medium ${authing && 'pointer-events-none '}`} >{authing ? <TbLoader2 className='animate-spinLoader text-white text-[25px] ' /> : 'Verify'}</button>
                </div>
                <p className='text-sm font-light text-text-color/60 self-center mt-5'> didn't get the code? <button className='text-main-color' > Resend Code </button></p>
            </form>
        </div>
    </div>
)
}

export default Vcode