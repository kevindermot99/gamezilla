const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())

// conenction
mongoose.connect("mongodb+srv://mbonimpaye:mbonimpaye@gamezilla.7ysyg1j.mongodb.net/gamezilla")

// user table schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
})
const User = mongoose.model('users', userSchema)

// login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.findOne({ email, password }) 
        if(user) {
            res.status(200).json({message: 'Login Successful', userId: user.id})
        }
        else{
            res.status(401).json({message: 'login Failed'})
        }
    }

    catch (err){
        res.status(500).json({message: 'An error occured during login'})
    }   
})

app.listen(3001, () => {
    console.log('server up and runing !')
})