const { response } = require('express');
const Users = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')

const test = (req,res)=>{
    res.json("testing is successful and the app under development")
}

//register Endpoint
const registerUser = async (req,res) => {
    try{
        const {username,email,password} = req.body;

        const emailExist = await Users.findOne({email})
       
        if(emailExist){
            return res.json({path:"email",error:"Email already exists"})
        }

        const hashedPassword = await hashPassword(password)

        //create user in database
        const user = await Users.create({
            username,
            email,
            password : hashedPassword
        })

        return res.status(201).json({message:user})

    }catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

//login Endpoint
const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body

        const user = await Users.findOne({email})

        if(!user){
            return res.json({path:"email",error:"Email not found"})
        }

        const match = await comparePassword(password,user.password)

        if(!match){
            return res.json({path:"password", error:"Invalid Password"})
        }
        const privateKey = 525312255473278
        if(match){
            jwt.sign({email: user.email, id : user._id, name : user.name},process.env.JWT_SECRET,{}, (err,token) => {
                if(err) throw err;
                res.cookie('token',token).json({message:'json webtoken success'})
            })
        }
        return res.json({message:'success'})

    }catch(error){
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}

module.exports = {test, registerUser, loginUser}