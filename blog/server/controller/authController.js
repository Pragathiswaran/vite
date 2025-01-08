const { response } = require('express');
// const bcrypt = require('bcrypt');
const Users = require('../models/user');
const { OAuth2Client } = require('google-auth-library');
const { hashPassword, comparePassword } = require('../helper/auth')
const axios = require('axios');


const registerUser = async (req,res) => {
    try{
        // console.log(req.body)
        const { token } = req.body; 
        if(token){
            
            const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const { email, name, sub: googleId } = response.data;
            // console.log(response.data)
            const emailExist = await Users.findOne({email})
            // console.log(user)
            if(emailExist){
                return res.status(409).json({ path: "email", error: "Email already exists" });
            }

            const newUser = await Users.create({
                username: name,
                email: email,
                password:googleId
            })
            // console.log(newUser) 

            return res.status(201).json({message:newUser})
        } 
        
        if(!token){
            // console.log('manual')
            const { username, email, password } = req.body;
            const emailExist = await Users.findOne({email})

            if(emailExist){
                return res.status(409).json({ path: "email", error: "Email already exists" });
            }
    
            const hashedPassword = await hashPassword(password)
    
            const user = await Users.create({
                username,
                email,
                password : hashedPassword
            })
    
            return res.status(201).json({message:user})
        }
    } catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

const loginUser = async (req,res) => {
    try{

        const { token } = req.body;
        if(token){
            
            const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const { email } = response.data;

            const emailExist = await Users.findOne({email});
            if(!emailExist){
                return res.status(404).json({path:"email", error:"Email not found"})
            }

            return res.status(200).json({message:"User logged in successfully"});
        }
        
        if(!token){
            const { email, password } = req.body;

            const emailExist = await Users.findOne({email})

            if(emailExist){
                return res.status(404).json({path:"email", error:"Email not found"})
            }

            const passwordMatch = await comparePassword(password, emailExist.password)

            if(!passwordMatch){
                return res.status(401).json({path:"password", error:"Password not match"})
            }

            return res.status(200).json({message:"User logged in successfully"});
        }

    }catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

module.exports = { registerUser,loginUser }