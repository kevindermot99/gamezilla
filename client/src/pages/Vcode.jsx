import React from 'react'
import axios from 'axios'

function Vcode({location}) {
    

    const submit = async (e) => {
        try {
            const response = await axios.post('http://localhost:3001/signup', {
                username,
                email,
                password
            })

            if (response.status === 201) {
                // console.log('account created successful')
                // localStorage.setItem('gamezillaUserId', response.data.userId)
                // localStorage.setItem('gamezillaUsername', response.data.username)
                // setPageOut(true)
                // navigate('/', {replace: true })

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
  return (
    <div></div>
  )
}

export default Vcode